"use client";

import { useEffect, useState } from "react";
import { AVATARS } from "@/lib/constants";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  UserRound,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarthak Chadha",
    role: "Student",
    rating: 5,
    avatar: "/",
    text: "Super smooth process. I was stressed about the assignment, and the deadline was very close. Thank you very much!",
  },
  {
    name: "Anjali Sharma",
    role: "Graduate",
    rating: 5,
    avatar: "/",
    text: "Very helpful content and support. I loved the experience!",
  },
  {
    name: "Ravi Verma",
    role: "CUET Aspirant",
    rating: 4,
    avatar: "/",
    text: "Helped me boost my confidence. Worth every minute!",
  },
];

const blogs = [
  {
    title: "Everything you need to know about CUET 2023",
    date: "3 days ago",
    image: "/placeholder.svg?height=160&width=300",
  },
  {
    title: "Top 10 CUET Preparation Tips",
    date: "1 week ago",
    image: "/placeholder.svg?height=160&width=300",
  },
  {
    title: "How to Manage Time During Exams",
    date: "2 weeks ago",
    image: "/placeholder.svg?height=160&width=300",
  },
];

export default function RightSidebar() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [blogIndex, setBlogIndex] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    const blogTimer = setInterval(() => {
      setBlogIndex((prev) => (prev + 1) % blogs.length);
    }, 7000);

    return () => {
      clearInterval(testimonialTimer);
      clearInterval(blogTimer);
    };
  }, []);

  const handlePrevTestimonial = () =>
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const handleNextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrevBlog = () =>
    setBlogIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  const handleNextBlog = () =>
    setBlogIndex((prev) => (prev + 1) % blogs.length);

  return (
    <div className="w-sm border-l border-gray-800 p-6 hidden lg:block space-y-6 overflow-auto">
      {/* Avatars */}
      <div className="flex flex-wrap gap-2 justify-between">
        {AVATARS.map((avatar, index) => (
          <div key={index} className={`p-2 rounded-full ${avatar.color}`}>
            <UserRound />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="bg-gray-900 border-2 border-green-300 rounded-lg p-3 flex items-center gap-3">
        <UsersRound className="text-green-300" size={20} />
        <span className="text-green-300 text-sm">
          1024 learners took a test today
        </span>
      </div>

      {/* Testimonials */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Testimonials
          </h3>
          <div className="flex gap-1">
            <button
              onClick={handlePrevTestimonial}
              className="p-1 text-gray-400 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="p-1 text-gray-400 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-[#1e1e1e] rounded-lg p-4"
            >
              <div className="flex items-center mb-2">
                <div className="size-14 rounded-full bg-gray-700 mr-3 overflow-hidden">
                  <Image
                    src={testimonials[testimonialIndex].avatar}
                    alt={testimonials[testimonialIndex].name}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {testimonials[testimonialIndex].name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonials[testimonialIndex].role}
                  </p>
                  <div className="flex gap-0.5">
                    {Array.from({
                      length: testimonials[testimonialIndex].rating,
                    }).map((_, i) => (
                      <Star key={i} fill="gold" size={12} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm">{testimonials[testimonialIndex].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-1 mt-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === testimonialIndex
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/30"
              }`}
              onClick={() => setTestimonialIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Refer */}
      <div className="bg-amber-100 text-amber-900 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">Refer & Earn 100 coins</h3>
            <p className="text-sm">Invite your friends today!</p>
          </div>
          <button className="bg-amber-900 text-amber-100 p-1 rounded">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Blog */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Blog
          </h3>
          <div className="flex gap-1">
            <button
              onClick={handlePrevBlog}
              className="p-1 text-gray-400 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNextBlog}
              className="p-1 text-gray-400 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative h-[220px] overflow-hidden rounded-lg bg-[#1e1e1e]">
          <AnimatePresence mode="wait">
            <motion.div
              key={blogIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <div className="relative h-40">
                <Image
                  src={blogs[blogIndex].image}
                  alt={blogs[blogIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-400 mb-2">
                  {blogs[blogIndex].date}
                </div>
                <h3 className="font-medium">{blogs[blogIndex].title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-1 mt-2">
          {blogs.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === blogIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"
              }`}
              onClick={() => setBlogIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
