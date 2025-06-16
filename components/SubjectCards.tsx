"use client";

import { SUBJECTS } from "@/lib/constants";
import { CheckCircle, ChevronRight, Circle } from "lucide-react";
import { useState, useEffect } from "react";

function AnimatedCircularProgress({
  subject,
  animate = false,
}: {
  subject: (typeof subjects)[0];
  animate?: boolean;
}) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const radius = 50;
  const strokeWidth = 8;
  const center = 64;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (animate) {
      const progressTimer = setTimeout(() => {
        const progressInterval = setInterval(() => {
          setCurrentProgress((prev) => {
            if (prev >= subject.targetProgress) {
              clearInterval(progressInterval);
              return subject.targetProgress;
            }
            return prev + 1;
          });
        }, 20);

        return () => clearInterval(progressInterval);
      }, 500);

      const scoreTimer = setTimeout(() => {
        const scoreInterval = setInterval(() => {
          setCurrentScore((prev) => {
            if (prev >= subject.targetScore) {
              clearInterval(scoreInterval);
              return subject.targetScore;
            }
            return prev + 1;
          });
        }, 30);

        return () => clearInterval(scoreInterval);
      }, 1000);

      return () => {
        clearTimeout(progressTimer);
        clearTimeout(scoreTimer);
      };
    }
  }, [animate, subject.targetProgress, subject.targetScore]);

  // Calculate dot position based on current progress
  const progressAngle = (currentProgress / 100) * 360 - 90; // Start from top
  const dotAngle = (progressAngle * Math.PI) / 180;
  const dotX = center + radius * Math.cos(dotAngle);
  const dotY = center + radius * Math.sin(dotAngle);

  return (
    <div className="relative size-40 flex items-center justify-center">
      <svg viewBox="0 0 128 128" className="w-full h-full transform -rotate-90">
        <defs>
          <linearGradient
            id={subject.gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={subject.gradientColors.start} />
            <stop offset="50%" stopColor={subject.gradientColors.middle} />
            <stop offset="100%" stopColor={subject.gradientColors.end} />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#374151"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#${subject.gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (currentProgress / 100) * circumference
          }
          className="transition-all duration-300 ease-out"
        />

        {/* Animated dot */}
        {currentProgress > 0 && (
          <circle
            cx={dotX}
            cy={dotY}
            r="6"
            fill={subject.dotColor}
            stroke="#ffffff"
            strokeWidth="2"
            className="transition-all duration-300 ease-out"
          />
        )}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white tabular-nums">
          {currentScore}
        </span>
        <span className="text-xs text-center text-gray-300 mt-1">
          Achievable Score
        </span>
        <span className="text-[10px] text-center text-gray-400 mt-1 leading-tight">
          based on chapters
          <br />
          covered till date
        </span>
      </div>
    </div>
  );
}

export function AnimatedSubjectCards() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          Subject Level Preparedness
        </h2>
        <button className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-1 font-medium">
          <span>VIEW DETAILS</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SUBJECTS.map((subject, index) => (
          <div
            key={subject.name}
            className="bg-gray-800/60 rounded-lg border border-gray-700/50 overflow-hidden"
          >
            <div className="p-6 flex flex-col items-center">
              {/* Subject Title */}
              <h3 className="text-xl font-medium mb-6 text-white">
                {subject.name}
              </h3>

              {/* Circular Progress */}
              <div className="mb-6">
                <AnimatedCircularProgress subject={subject} animate={animate} />
              </div>

              {/* Progress Section */}
              <div className="w-full space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300">NEO Journey</span>
                  <span className="text-gray-400">
                    {animate ? subject.targetProgress : 0}% complete
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${subject.targetProgress}%` : "0%",
                      transitionDelay: "1s",
                    }}
                  />
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 py-2.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  IMPROVE YOUR SCORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Personalized Journey Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 rounded-lg p-4 flex items-center mt-6 border border-amber-700/30">
        <div className="bg-amber-600 rounded-full p-2 mr-3 flex-shrink-0">
          <CheckCircle />
        </div>
        <p className="text-white text-sm font-medium">
          Let's embark on a personalized journey to delve deeper!
        </p>
      </div>
    </div>
  );
}
