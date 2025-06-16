"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const heroSlides = [
  {
    title: "Everything you need to know about CUET 2023",
    subtitle: "Syllabus · Exam Dates · Learnings",
    buttonText: "Learn more",
    image: "/study.png",
    imageAlt: "CUET 2023 Illustration",
  },
  {
    title: "Master Your CUET Preparation",
    subtitle: "Practice Tests · Study Materials · Expert Tips",
    buttonText: "Start Practice",
    image: "/study.png",
    imageAlt: "Study Illustration",
  },
  {
    title: "Join Thousands of Successful Students",
    subtitle: "Success Stories · Results · Achievements",
    buttonText: "View Results",
    image: "/study.png",
    imageAlt: "Success Illustration",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <div className="relative rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white  rounded-lg"
        >
          <div className="flex flex-col md:flex-row items-center px-6 py-4">
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold">
                {heroSlides[currentIndex].title}
              </h2>
              <p className="text-sm text-blue-100">
                {heroSlides[currentIndex].subtitle}
              </p>
              <button className="flex place-items-center gap-0.5 text-sm mt-4 hover:underline transition-all duration-200">
                <span className="font-semibold">
                  {heroSlides[currentIndex].buttonText}
                </span>
                <ChevronRight size={15} />
              </button>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0">
              <Image
                src={heroSlides[currentIndex].image}
                alt={heroSlides[currentIndex].imageAlt}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Animated Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-6 bg-white" : "w-1.5 bg-blue-300"
            }`}
            onClick={() => {
              setAutoplay(false);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
