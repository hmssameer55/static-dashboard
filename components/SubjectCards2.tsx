"use client";

import { useEffect, useRef, useState } from "react";
import { SUBJECTS } from "@/lib/constants";
import { Progress } from "@/components/ui/progress";

function AnimatedCircularProgress({
  subject,
  animate = false,
}: {
  subject: (typeof SUBJECTS)[number];
  animate?: boolean;
}) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const radius = 60;
  const strokeWidth = 5;
  const center = 64;
  const circumference = Math.PI * radius; // Half circle circumference

  // Animate progress
  useEffect(() => {
    if (!animate) return;

    let progress = 0;
    let score = 0;

    const animateStep = () => {
      let updated = false;

      if (progress < subject.targetProgress) {
        progress += 1;
        setCurrentProgress(progress);
        updated = true;
      }

      if (score < subject.targetScore) {
        score += 1;
        setCurrentScore(score);
        updated = true;
      }

      if (updated) {
        requestAnimationFrame(animateStep);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animateStep);
    }, 500);

    return () => clearTimeout(timer);
  }, [animate, subject.targetProgress, subject.targetScore]);

  // Calculate dot position
  const progressAngle = 180 + (currentProgress / 100) * 180;
  const dotAngle = (progressAngle * Math.PI) / 180;
  const dotX = center + radius * Math.cos(dotAngle);
  const dotY = center + radius * Math.sin(dotAngle);

  return (
    <div className="relative flex flex-col bg-[#111827] rounded-xl py-5">
      <p className="text-white text-xl tracking-wide text-center mb-5">
        {subject.name}
      </p>
      <svg viewBox="0 0 128 128" className="w-full h-60">
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

        {/* Background */}
        <path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${
            center + radius
          } ${center}`}
          fill="none"
          stroke="#374151"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Progress Path */}
        <path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${
            center + radius
          } ${center}`}
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

        {/* Dot */}
        {currentProgress > 0 && (
          <circle
            cx={dotX}
            cy={dotY}
            r="4"
            fill={subject.dotColor}
            stroke="#ffffff"
            strokeWidth="2"
            className="transition-all duration-300 ease-out"
          />
        )}
      </svg>

      {/* Centered Score */}
      <div className="absolute top-28 left-0 w-full text-center">
        <div className="text-2xl font-bold text-white tabular-nums">
          {currentScore}
        </div>
        <div className="text-sm font-semibold text-gray-300 mt-1">
          Achievable Score
        </div>
        <div className="text-xs text-gray-400 leading-tight mt-0.5">
          based on chapters <br /> covered till date
        </div>
      </div>

      {/* Progress bar Details */}
      <div className="space-y-3 w-full px-4 -mt-14">
        <div className="flex justify-between text-xs">
          <span className="text-gray-300">NEO Journey</span>
          <span className="text-gray-400">
            {animate ? subject.targetProgress : 0}% complete
          </span>
        </div>

        <Progress
          value={currentProgress}
          max={100}
          className="w-full h-1 bg-gray-700 rounded-full overflow-hidden"
        />

        <button className="cursor-pointer  w-full mt-4 py-2.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
          IMPROVE YOUR SCORE
        </button>
      </div>
    </div>
  );
}

export function AnimatedSubjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {SUBJECTS.map((subject) => (
        <AnimatedCircularProgress
          key={subject.name}
          subject={subject}
          animate
        />
      ))}
    </div>
  );
}
