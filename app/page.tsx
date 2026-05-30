"use client";


import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import SectionVisual from "../src/components/SectionVisual";
import {
  Rocket,
  Monitor,
  Palette,
  Search,
  TrendingUp,
  LayoutDashboard,
  Layers3,
  Sparkles,
  BarChart3,
  Activity,
  Star,
  Wallet,
  Trophy,
  LayoutTemplate,
  Code2,
  Quote,
BadgeCheck,
ArrowRight,
CalendarDays,
Globe,
Mail,
Phone,
MapPin,
Gem,
Zap,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
  });

  lenisRef.current = lenis;

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-x-hidden">
  <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-white/5">
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    style={{ scaleX: scrollYProgress }}
    className="h-full origin-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
  />
</div>

 {/* Mouse Follow Glow */}
<motion.div
  animate={{
    x: mousePosition.x - 250,
    y: mousePosition.y - 250,
  }}
  transition={{
    type: "spring",
    stiffness: 50,
    damping: 30,
    mass: 0.5,
  }}
  className="pointer-events-none fixed top-0 left-0 z-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[120px]"
/>     
{/* Premium Background Effects */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(168, 168, 168, 0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

  {/* Top Left Orb */}
  <motion.div
    animate={{
      x: [0, 20, 0],
      y: [0, 15, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-[-120px] left-[-120px] w-[340px] h-[340px] rounded-full bg-purple-500/25 blur-[100px]"
  />

  {/* Top Right Orb */}
  <motion.div
    animate={{
      x: [0, -15, 0],
      y: [0, 20, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-[10%] right-[-100px] w-[320px] h-[320px] rounded-full bg-blue-500/20 blur-[100px]"
  />

  {/* Center Glow */}
  <motion.div
    animate={{
      opacity: [0.3, 0.45, 0.3],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]"
  />

  {/* Bottom Glow */}
  <motion.div
    animate={{
      opacity: [0.2, 0.35, 0.2],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
  />
</div>

{/* Radial Overlay */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)] pointer-events-none" />



      {/* Premium Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-lg shadow-black/10 overflow-hidden">

           {/* Logo */}
<div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">

  {/* Logo Icon */}
  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/25">

    {/* Glow */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

    {/* Icon */}
    <Layers3 className="relative w-5 h-5 text-white" />
  </div>

  {/* Text */}
  <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-none">
    <span className="text-white">
      Task
    </span>

    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Flow
    </span>
  </h2>
</div>


           {/* Desktop Navigation */}
<nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm text-gray-300">

  <a
    href="#services"
    onClick={(e) => {
      e.preventDefault();
      lenisRef.current?.scrollTo("#services");
    }}
    className="hover:text-white transition duration-300"
  >
    Services
  </a>

  <a
    href="#projects"
    onClick={(e) => {
      e.preventDefault();
      lenisRef.current?.scrollTo("#projects");
    }}
    className="hover:text-white transition duration-300"
  >
    Projects
  </a>

  <a
    href="#testimonials"
    onClick={(e) => {
      e.preventDefault();
      lenisRef.current?.scrollTo("#testimonials");
    }}
    className="hover:text-white transition duration-300"
  >
    Testimonials
  </a>

  <a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      lenisRef.current?.scrollTo("#contact");
    }}
    className="hover:text-white transition duration-300"
  >
    Contact
  </a>

</nav>

            {/* Desktop CTA */}
<div className="hidden md:block">
  <button className="relative overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition duration-300 text-sm font-medium shadow-lg shadow-purple-500/20">

    {/* Shine Effect */}
    <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    <span className="relative z-10">
      Start Project
    </span>

  </button>
</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 flex-shrink-0"
            >
              <span className="w-6 h-[2px] bg-white rounded-full" />
              <span className="w-6 h-[2px] bg-white rounded-full" />
              <span className="w-6 h-[2px] bg-white rounded-full" />
            </button>
          </div>
        

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-2 sm:px-4 mt-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 space-y-5 shadow-xl shadow-black/20">

               <a
  href="#services"
  className="block text-gray-300 hover:text-white transition"
>
  Services
</a>

<a
  href="#projects"
  className="block text-gray-300 hover:text-white transition"
>
  Projects
</a>

<a
  href="#testimonials"
  className="block text-gray-300 hover:text-white transition"
>
  Testimonials
</a>

<a
  href="#contact"
  className="block text-gray-300 hover:text-white transition"
>
  Contact
</a>

                <button className="relative overflow-hidden w-full mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium shadow-lg shadow-purple-500/20">

  <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  <span className="relative z-10">
    Start Project
  </span>
</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </header>

      {/* EVERYTHING BELOW THIS REMAINS THE SAME */}

      {/* Hero Section */}
      <section
  id="home"
  className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 pt-28 md:pt-32 pb-24 md:pb-32 overflow-hidden"
>
        {/* Ambient Background Glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[900px] h-[500px] md:h-[900px] bg-purple-500/20 rounded-full blur-[100px] md:blur-[180px] opacity-30 pointer-events-none" />

<div className="absolute top-40 right-0 w-[260px] md:w-[500px] h-[260px] md:h-[500px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[160px] pointer-events-none" />        
<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            className="max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-xl shadow-lg shadow-purple-500/10 mb-6 md:mb-8">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm uppercase tracking-[0.2em] text-gray-300">
                Premium Digital Agency
              </span>
            </div>

            <h1 className="text-[52px] sm:text-6xl md:text-7xl lg:text-[76px] font-black leading-[0.95] tracking-[-0.05em]">
              We Build
              <span className="block mt-2 bg-gradient-to-r from-purple-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Modern Websites
              </span>
              That Convert
            </h1>

            <p className="mt-8 md:mt-10 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              We craft high-performance digital experiences for ambitious
              businesses using cutting-edge design and modern frontend
              technologies.
            </p>

            {/* Buttons */}
<div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-5">

  <button className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 font-medium transition-all duration-500 hover:scale-[1.03] shadow-[0_0_40px_rgba(168,85,247,0.35)]">

    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    <span className="relative z-10">
      Start Your Project
    </span>

  </button>

  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:border-white/20 text-sm md:text-base">
    View Portfolio
  </button>

</div>

            {/* Stats */}
            <div className="mt-14 md:mt-16 flex flex-wrap gap-10 md:gap-12">
              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">120+</h3>
                <p className="text-gray-500 mt-3 text-xs uppercase tracking-[0.25em]">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">98%</h3>
                <p className="text-gray-500 mt-3 text-xs uppercase tracking-[0.25em]">Client Satisfaction</p>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight">5★</h3>
                <p className="text-gray-500 mt-3 text-xs uppercase tracking-[0.25em]">Average Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative p-5 sm:p-8 rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-3xl shadow-[0_0_60px_rgba(168,85,247,0.18)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
              {/* Top Bar */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

             {/* Premium Dashboard UI */}
<div className="space-y-5">

  {/* Top Search/Header */}
  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

    <div>
      <p className="text-xs text-gray-400">
        Welcome back
      </p>

      <h4 className="text-lg font-semibold mt-1">
        Analytics Overview
      </h4>
    </div>

    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-xs">
      Live
    </div>
  </div>

  {/* Small Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    {/* Revenue */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Revenue
        </p>

        <span className="text-green-400 text-xs">
          +18%
        </span>
      </div>

      <h4 className="mt-4 text-3xl font-bold">
        $24K
      </h4>

      <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="w-[78%] h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
      </div>
    </div>

    {/* Users */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Users
        </p>

        <span className="text-cyan-400 text-xs">
          +9%
        </span>
      </div>

      <h4 className="mt-4 text-3xl font-bold">
        12.8K
      </h4>

      <div className="mt-5 flex items-end gap-1 h-10">
        <div className="w-full h-[30%] rounded-full bg-purple-500" />
        <div className="w-full h-[60%] rounded-full bg-blue-500" />
        <div className="w-full h-[90%] rounded-full bg-cyan-400" />
        <div className="w-full h-[70%] rounded-full bg-pink-500" />
      </div>
    </div>
  </div>
  </div>

  {/* Large Chart Card */}
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

    <div className="flex items-center justify-between mb-6">
      <div>
        <p className="text-sm text-gray-400">
          Performance
        </p>

        <h4 className="text-xl font-semibold mt-1">
          Weekly Analytics
        </h4>
      </div>

      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
    </div>

    {/* Chart */}
    <div className="flex items-end gap-3 h-32">

      <div className="w-full h-[35%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[55%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[48%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[80%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[65%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

    </div>
  </div>
</div>

            {/* Floating Glow */}
            <div className="absolute -z-10 inset-0 scale-110 bg-gradient-to-r from-purple-600/40 via-blue-500/30 to-cyan-500/20 blur-[70px] md:blur-[120px]" />
          </motion.div>
        </div>
        
        {/* Floating Dashboard Mockups */}
<div className="relative mt-24 flex items-center justify-center px-1 overflow-hidden">

  {/* Main Dashboard Card */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-20 w-full max-w-3xl rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-8 shadow-2xl shadow-purple-500/10 overflow-hidden"
  >

    {/* Top Bar */}
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3 className="text-2xl font-semibold">
          Analytics Dashboard
        </h3>

        <p className="text-gray-400 mt-1">
          Premium business insights
        </p>
      </div>

      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-sm">
        Live Data
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-gray-400 text-sm">
          Revenue
        </p>

        <h4 className="mt-3 text-3xl font-bold">
          $48.2K
        </h4>

        <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="w-[78%] h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-gray-400 text-sm">
          Growth
        </p>

        <h4 className="mt-3 text-3xl font-bold">
          +124%
        </h4>

        <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="w-[88%] h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-gray-400 text-sm">
          Active Users
        </p>

        <h4 className="mt-3 text-3xl font-bold">
          12.8K
        </h4>

        <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="w-[70%] h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>
      </div>
    </div>

    {/* Chart Area */}
    <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8">

      <div className="flex items-end gap-3 md:gap-4 h-36 md:h-48">

        <div className="w-full h-[40%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

        <div className="w-full h-[65%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

        <div className="w-full h-[55%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

        <div className="w-full h-[85%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

        <div className="w-full h-[72%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

        <div className="w-full h-[95%] rounded-t-2xl bg-gradient-to-t from-purple-500 to-blue-500" />

      </div>
    </div>
  </motion.div>

  {/* Floating Side Card Left */}
  <motion.div
    animate={{ y: [0, 14, 0] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="hidden xl:block will-change-transform absolute left-0 top-10 z-10 w-64 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-xl"
  >
    <div className="flex items-center justify-between">
      <p className="text-gray-400 text-sm">
        Conversion
      </p>

      <span className="text-green-400 text-sm">
        +18%
      </span>
    </div>

    <h4 className="mt-4 text-4xl font-bold">
      86%
    </h4>

    <div className="mt-6 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-end gap-2 p-4">
      <div className="w-full h-[40%] rounded-full bg-purple-400" />
      <div className="w-full h-[65%] rounded-full bg-blue-400" />
      <div className="w-full h-[90%] rounded-full bg-cyan-400" />
    </div>
  </motion.div>

  {/* Floating Side Card Right */}
  <motion.div
    animate={{ y: [0, -14, 0] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="hidden xl:block will-change-transform absolute right-0 bottom-10 z-10 w-64 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-xl"
  >
    <p className="text-gray-400 text-sm">
      Team Performance
    </p>

    <div className="mt-5 flex -space-x-3">
      <div className="w-12 h-12 rounded-full bg-purple-500 border border-black" />
      <div className="w-12 h-12 rounded-full bg-blue-500 border border-black" />
      <div className="w-12 h-12 rounded-full bg-pink-500 border border-black" />
    </div>

    <div className="mt-6">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-400">
          Progress
        </span>

        <span className="text-white">
          92%
        </span>
      </div>

      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="w-[92%] h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
      </div>
    </div>
  </motion.div>
</div>
      </section>
      {/* Premium Stats Section */}
<section
  className="relative z-10 py-24 md:py-32 px-5 sm:px-6 overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 mb-5 md:mb-6">
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

        <span className="text-sm text-gray-300">
          Trusted Performance
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05]">
        Results That
        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Speak For Themselves
        </span>
      </h2>

      <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
        We craft high-converting digital experiences that help ambitious
        brands scale faster and stand out online.
      </p>
    </motion.div>

    {/* Stats Grid */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mt-16 md:mt-24"
    >

      {/* Stat Card 1 */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] 
        backdrop-blur-2xl p-6 md:p-8 transition-all duration-500 hover:border-purple-500/20 hover:bg-white/[0.07] 
        hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/0 
        before:via-white/5 before:to-blue-500/0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/20">
            <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-8 text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            120+
          </h3>

          <p className="mt-3 text-sm uppercase tracking-[0.14em] md:tracking-[0.18em] text-gray-500">
            Projects Completed
          </p>
        </div>
      </motion.div>

      {/* Stat Card 2 */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] 
        backdrop-blur-2xl p-6 md:p-8 transition-all duration-500 hover:border-purple-500/20 hover:bg-white/[0.07] 
        hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/0 
        before:via-white/5 before:to-blue-500/0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
            <Star className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-8 text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            98%
          </h3>

          <p className="mt-3 text-sm uppercase tracking-[0.14em] md:tracking-[0.18em] text-gray-500">
            Client Satisfaction
          </p>
        </div>
      </motion.div>

      {/* Stat Card 3 */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] 
        backdrop-blur-2xl p-6 md:p-8 transition-all duration-500 hover:border-purple-500/20 hover:bg-white/[0.07] 
        hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/0 
        before:via-white/5 before:to-blue-500/0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg shadow-pink-500/20">
            <Wallet className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-8 text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            $2M+
          </h3>

          <p className="mt-3 text-sm uppercase tracking-[0.14em] md:tracking-[0.18em] text-gray-500">
            Revenue Generated
          </p>
        </div>
      </motion.div>

      {/* Stat Card 4 */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] 
        backdrop-blur-2xl p-6 md:p-8 transition-all duration-500 hover:border-purple-500/20 hover:bg-white/[0.07] 
        hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/0 
        before:via-white/5 before:to-blue-500/0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20">
            <Trophy className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-8 text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
            5+
          </h3>

          <p className="mt-3 text-sm uppercase tracking-[0.14em] md:tracking-[0.18em] text-gray-500">
            Years Experience
          </p>
        </div>
      </motion.div>

    </motion.div>
  </div>
</section>
      {/* Services Section */}
<section
  id="services"
  className="relative z-10 py-24 md:py-32 px-5 sm:px-6 will-change-transform overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
<div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-16 md:mt-24">

  {/* Left Content */}
  <div className="max-w-2xl mx-auto lg:mx-0">

    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 mb-6 md:mb-8">
      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

      <span className="text-sm tracking-wide text-gray-300 uppercase">
        Our Services
      </span>
    </div>

    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
      Premium Digital

      <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Solutions
      </span>
    </h2>

    <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-400 leading-relaxed max-w-xl">
      We help ambitious brands grow online through world-class design,
      development, and digital strategy.
    </p>
  </div>

  {/* Right Visual */}
  <div className="flex justify-center lg:justify-end">
    <SectionVisual />
  </div>

</div>
    

    {/* Services Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 mt-16 md:mt-24">

      {/* Card 1 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] 
        backdrop-blur-2xl p-6 md:p-9 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/30 
        hover:bg-white/[0.07] hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-purple-500/0 before:via-white/5 before:to-blue-500/0 before:opacity-0 
        hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl md:blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/20">
            <LayoutTemplate className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-9 text-2xl md:text-[30px] font-bold tracking-tight leading-tight">
            Web Design
          </h3>

          <p className="mt-4 md:mt-5 text-gray-400 leading-relaxed">
            Beautiful modern interfaces designed to captivate users and
            elevate your brand identity.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-purple-300">
  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
  Premium Solution
</div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] 
        backdrop-blur-2xl p-6 md:p-9 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/30 
        hover:bg-white/[0.07] hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-purple-500/0 before:via-white/5 before:to-blue-500/0 before:opacity-0 
        hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl md:blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
            <Code2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-9 text-2xl md:text-[30px] font-bold tracking-tight leading-tight">
            Web Development
          </h3>

          <p className="mt-4 md:mt-5 text-gray-400 leading-relaxed">
            High-performance websites built using cutting-edge frontend
            technologies and modern frameworks.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-purple-300">
  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
  Premium Solution
</div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] 
        backdrop-blur-2xl p-6 md:p-9 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/30 
        hover:bg-white/[0.07] hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] before:absolute 
        before:inset-0 before:bg-gradient-to-r before:from-purple-500/0 before:via-white/5 
        before:to-blue-500/0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl md:blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/20">
            <Palette className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-9 text-2xl md:text-[30px] font-bold tracking-tight leading-tight">
            Branding
          </h3>

          <p className="mt-4 md:mt-5 text-gray-400 leading-relaxed">
            Strong visual branding systems that make your business look
            premium, trustworthy, and memorable.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-purple-300">
  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
  Premium Solution
</div>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
       className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] 
       backdrop-blur-2xl p-6 md:p-9 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/30 
       hover:bg-white/[0.07] hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] 
       before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/0 before:via-white/5 
       before:to-blue-500/0 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl md:blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/20">
            <Rocket className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="mt-9 text-2xl md:text-[30px] font-bold tracking-tight leading-tight">
            SEO Optimization
          </h3>

          <p className="mt-4 md:mt-5 text-gray-400 leading-relaxed">
            Optimized websites that rank better on search engines and
            generate more traffic and leads.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-purple-300">
  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
  Premium Solution
</div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* Featured Projects Section */}
<section
  id="projects"
  className="relative z-10 py-24 md:py-28 px-4 sm:px-6 overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

{/* Section Header */}
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16 md:mt-20">

  {/* Left Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-2xl"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 mb-6">
      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

      <span className="text-sm uppercase tracking-wide text-gray-300">
        Featured Projects
      </span>
    </div>

    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
      Selected
      <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Case Studies
      </span>
    </h2>

    <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
      A collection of premium digital experiences crafted for ambitious
      brands focused on growth, conversions, and modern design.
    </p>
  </motion.div>

  {/* Right Visual */}
  <div className="flex justify-center lg:justify-end">
    <SectionVisual />
  </div>

</div>

  
    {/* Projects Grid */}
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-16 md:mt-24"
>

      {/* Project Card 1 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        style={{
  transformStyle: "preserve-3d",
}}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl h-full flex flex-col transition-all duration-500 hover:border-purple-500/20"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none z-20" />
        {/* Image Placeholder */}
       {/* Premium Project Mockup */}
<div className="relative h-[320px] sm:h-80 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#111827] p-6 shadow-2xl">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />

  {/* Floating Analytics Card */}
  {/* Floating Analytics Card */}
<motion.div
  whileHover={{ y: -4 }}
  className="absolute top-4 left-4 z-20 w-32 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-3"
>
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-400">
        Revenue
      </span>

      <span className="text-green-400 text-xs">
        +24%
      </span>
    </div>

    <h4 className="mt-3 text-2xl font-bold">
      $48K
    </h4>

    <div className="mt-4 flex items-end gap-1 h-12">
      <div className="w-full h-[40%] rounded-full bg-purple-500" />
      <div className="w-full h-[65%] rounded-full bg-blue-500" />
      <div className="w-full h-[90%] rounded-full bg-cyan-400" />
      <div className="w-full h-[70%] rounded-full bg-pink-500" />
    </div>
  </motion.div>

  {/* Main Dashboard */}
 {/* Main Dashboard */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className="absolute bottom-4 right-4 left-20 z-10 rounded-2xl border border-white/10 bg-[#0b1120]/90 backdrop-blur-2xl p-4 shadow-2xl"
>

    {/* Top */}
    <div className="flex items-center justify-between mb-5">
      <div>
        <h4 className="text-base font-semibold">
          Dashboard Overview
        </h4>

        <p className="text-xs text-gray-400 mt-1">
          Real-time analytics
        </p>
      </div>

      <Activity className="w-5 h-5 text-green-400" />
    </div>

    {/* Graph */}
    <div className="flex items-end gap-2 h-16">

      <div className="w-full h-[45%] rounded-t-xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[70%] rounded-t-xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[55%] rounded-t-xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[95%] rounded-t-xl bg-gradient-to-t from-purple-500 to-blue-500" />

      <div className="w-full h-[78%] rounded-t-xl bg-gradient-to-t from-purple-500 to-blue-500" />

    </div>

    {/* Bottom Stats */}
    <div className="grid grid-cols-3 gap-2 mt-4">

      <div className="rounded-xl bg-white/5 p-2">
        <p className="text-xs text-gray-400">
          Users
        </p>

        <h5 className="mt-1 font-semibold">
          12.8K
        </h5>
      </div>

      <div className="rounded-xl bg-white/5 p-3">
        <p className="text-xs text-gray-400">
          Growth
        </p>

        <h5 className="mt-1 font-semibold">
          +86%
        </h5>
      </div>

      <div className="rounded-xl bg-white/5 p-3">
        <p className="text-xs text-gray-400">
          Sales
        </p>

        <h5 className="mt-1 font-semibold">
          $24K
        </h5>
      </div>

    </div>
  </motion.div>
</div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
              Web Design
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">
              SaaS
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Nova Finance
          </h3>

          <p className="mt-4 md:mt-5 text-sm sm:text-base text-gray-400 leading-relaxed">
            A premium fintech platform designed with a modern SaaS
            experience focused on trust, speed, and conversions.
          </p>
        </div>
      </motion.div>

      {/* Project Card 2 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        style={{
  transformStyle: "preserve-3d",
}}
        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl h-full flex flex-col transition-all duration-500 hover:border-purple-500/20"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none z-20" />
      {/* Startup Platform Mockup */}
<div className="relative h-[320px] sm:h-80 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#07111f] to-[#0f172a] p-6 shadow-2xl">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

  {/* Sidebar */}
  <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-white/10 bg-white/[0.03] flex flex-col items-center py-6 gap-5">

    <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
      <Layers3 className="w-5 h-5 text-cyan-300" />
    </div>

    <div className="w-10 h-10 rounded-xl bg-white/5" />
    <div className="w-10 h-10 rounded-xl bg-white/5" />
    <div className="w-10 h-10 rounded-xl bg-white/5" />

  </div>

  {/* Main App Area */}
  <div className="ml-20">

    {/* Top */}
    <div className="flex items-center justify-between">

      <div>
        <h4 className="text-lg font-semibold">
          Workflow Manager
        </h4>

        <p className="text-xs text-gray-400 mt-1">
          Team productivity overview
        </p>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
        <TrendingUp className="w-4 h-4 text-cyan-300" />

        <span className="text-xs text-cyan-300">
          +18%
        </span>
      </div>

    </div>

    {/* Task Cards */}
    <div className="mt-6 space-y-3">

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium">
              Product Dashboard
            </p>

            <p className="text-xs text-gray-400 mt-1">
              UI Design System
            </p>
          </div>

          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium">
              Mobile Experience
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Development Phase
            </p>
          </div>

          <div className="w-20 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="w-[72%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium">
              Launch Campaign
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Marketing Assets
            </p>
          </div>

          <Rocket className="w-5 h-5 text-cyan-300" />
        </div>
      </div>

    </div>
  </div>
</div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-300">
              Development
            </span>

            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
              Startup
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            OrbitX Platform
          </h3>

          <p className="mt-4 md:mt-5 text-sm sm:text-base text-gray-400 leading-relaxed">
            A sleek startup dashboard experience optimized for performance,
            scalability, and user engagement.
          </p>
        </div>
      </motion.div>

      {/* Project Card 3 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        style={{
  transformStyle: "preserve-3d",
}}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl h-full flex flex-col transition-all duration-500 hover:border-purple-500/20"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none z-20" />
    {/* Premium Project Mockup */}
{/* Creative Agency Mockup */}
<div className="relative h-[320px] sm:h-80 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#140c1c] to-[#111827] p-6 shadow-2xl">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />

  {/* Floating Badge */}
  <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center gap-2">
    <Sparkles className="w-4 h-4 text-pink-300" />

    <span className="text-xs text-pink-200">
      Creative Direction
    </span>
  </div>

  {/* Main Visual */}
  <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10 p-6 flex flex-col justify-between">

    {/* Top */}
    <div>
      <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
        <Palette className="w-8 h-8 text-white" />
      </div>

      <h4 className="mt-6 text-2xl font-bold">
        Visionary Studio
      </h4>

      <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
        Futuristic branding experience for next-generation creative companies.
      </p>
    </div>

    {/* Bottom UI */}
    <div className="grid grid-cols-3 gap-3">

      <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4">
        <Monitor className="w-5 h-5 text-pink-300" />

        <p className="mt-4 text-xs text-gray-400">
          UI Systems
        </p>
      </div>

      <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4">
        <Palette className="w-5 h-5 text-purple-300" />

        <p className="mt-4 text-xs text-gray-400">
          Branding
        </p>
      </div>

      <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4">
        <BarChart3 className="w-5 h-5 text-cyan-300" />

        <p className="mt-4 text-xs text-gray-400">
          Strategy
        </p>
      </div>

    </div>
  </div>
</div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-300">
              Branding
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">
              Creative
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Visionary Studio
          </h3>

          <p className="mt-4 md:mt-5 text-sm sm:text-base text-gray-400 leading-relaxed">
            A bold digital branding experience crafted for a creative agency
            seeking a futuristic and premium online presence.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
{/* Testimonials Section */}
<section
  id="testimonials"
  className="relative z-10 py-24 md:py-28 px-5 sm:px-6 overflow-hidden will-change-transform"
>
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
<div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-16 md:mt-20">

  {/* Left Content */}
  <div className="max-w-2xl">

    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 mb-6">
      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
      <span className="text-sm uppercase tracking-wide text-gray-300">
        Client Testimonials
      </span>
    </div>

    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
      Trusted By
      <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Modern Brands
      </span>
    </h2>

    <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
      We partner with ambitious businesses to create premium digital
      experiences that deliver real results.
    </p>

  </div>

  {/* Right Visual */}
  <div className="flex justify-center lg:justify-end">
    <SectionVisual />
  </div>

</div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-16 md:mt-24">

      {/* Testimonial 1 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -12, scale: 1.02 }}
        style={{
  transformStyle: "preserve-3d",
}}
        className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:shadow-[0_0_70px_rgba(168,85,247,0.18)] transition-all duration-500"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
        <div className="relative z-10">

          {/* Stars */}
        <div className="flex items-center justify-between">
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 fill-yellow-400 text-yellow-400"
      />
    ))}
  </div>

  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
    <Quote className="w-5 h-5 text-purple-300" />
  </div>
</div>

          {/* Review */}
          <p className="mt-6 md:mt-7 text-[15px] md:text-[17px] text-gray-300 leading-relaxed">
            “The quality of the design and development exceeded our
            expectations. Our new website feels premium and converts
            significantly better.”
          </p>

          {/* Client */}
          <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-10 pt-5 md:pt-6 border-t border-white/10">
            <div className="relative">
  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/30">
    AJ
  </div>

  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-white/10 flex items-center justify-center">
    <BadgeCheck className="w-3 h-3 text-cyan-400" />
  </div>
</div>

            <div>
              <h4 className="font-semibold text-[16px] md:text-[18px] tracking-tight">
                Alex Johnson
              </h4>

              <p className="text-gray-400 text-sm">
                Founder, Nova Finance
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -12, scale: 1.02 }}
        style={{
  transformStyle: "preserve-3d",
}}
        className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:shadow-[0_0_70px_rgba(168,85,247,0.18)] transition-all duration-500"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
        <div className="relative z-10">

          {/* Stars */}
          <div className="flex items-center justify-between">
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 fill-yellow-400 text-yellow-400"
      />
    ))}
  </div>

  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
    <Quote className="w-5 h-5 text-purple-300" />
  </div>
</div>

          {/* Review */}
          <p className="mt-6 md:mt-7 text-[15px] md:text-[17px] text-gray-300 leading-relaxed">
            “Working with this agency was seamless from start to finish.
            The attention to detail and modern UI quality were exceptional.”
          </p>

          {/* Client */}
          <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-10 pt-5 md:pt-6 border-t border-white/10">
            <div className="relative">
  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/30">
    SM
  </div>

  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-white/10 flex items-center justify-center">
    <BadgeCheck className="w-3 h-3 text-cyan-400" />
  </div>
</div>

            <div>
              <h4 className="font-semibold text-[16px] md:text-[18px] tracking-tight">
                Sarah Mitchell
              </h4>

              <p className="text-gray-400 text-sm">
                CEO, OrbitX
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial 3 */}
      <motion.div
        variants={fadeUp}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ y: -12, scale: 1.02 }}
        style={{
  transformStyle: "preserve-3d",
}}    
        className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:shadow-[0_0_70px_rgba(168,85,247,0.18)] transition-all duration-500"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
        <div className="relative z-10">

          {/* Stars */}
          <div className="flex items-center justify-between">
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 fill-yellow-400 text-yellow-400"
      />
    ))}
  </div>

  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
    <Quote className="w-5 h-5 text-purple-300" />
  </div>
</div>

          {/* Review */}
          <p className="mt-6 md:mt-7 text-[15px] md:text-[17px] text-gray-300 leading-relaxed tracking-normal">
            “Our brand finally feels world-class online. The visual design,
            animations, and responsiveness are all incredibly polished.”
          </p>

          {/* Client */}
          <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-10 pt-5 md:pt-6 border-t border-white/10">
            <div className="relative">
  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/30">
    DV
  </div>

  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-white/10 flex items-center justify-center">
    <BadgeCheck className="w-3 h-3 text-cyan-400" />
  </div>
</div>

            <div>
              <h4 className="font-semibold text-[16px] md:text-[18px] tracking-tight">
                Daniel Vega
              </h4>

              <p className="text-gray-400 text-sm">
                Creative Director, Visionary Studio
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
</section>
{/* CTA Section */}
<section className="relative z-10 py-24 md:py-32 px-5 sm:px-6 overflow-hidden will-change-transform">
  
  {/* Background Glow */}
  <div className="absolute top-1/2 left-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-purple-600/20 blur-[100px] md:blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

  <motion.div
    variants={fadeUp}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
style={{
  transformStyle: "preserve-3d",
}}
    className="group relative max-w-6xl mx-auto overflow-hidden rounded-[28px] md:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-10 md:p-20 text-center"
  >
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none" />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />

    <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

<div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
    <div className="relative z-10">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 mb-8">
        <Sparkles className="w-4 h-4 text-purple-300" />

        <span className="text-sm text-gray-300">
          Let’s Build Something Amazing
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] md:leading-tight max-w-4xl mx-auto">
        Ready To Elevate
        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Your Digital Presence?
        </span>
      </h2>

      {/* Paragraph */}
      <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
        We create premium websites and digital experiences designed to
        help ambitious brands grow faster, look better, and convert more customers.
      </p>

      {/* Buttons */}
      <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">

        <a href="#contact">
        <button className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-2xl shadow-purple-500/30 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-500">

  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  <span className="relative z-10">
    Start Your Project
  </span>

  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
</button>
        </a>

        <button className="group inline-flex items-center gap-3 px-7 md:px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 text-white font-medium text-sm md:text-base">
  <CalendarDays className="w-5 h-5 text-purple-300" />

  Book A Consultation
</button>
      </div>
    </div>
  </motion.div>
</section>

{/* Premium Contact Section */}
<section
  id="contact"
  className="relative z-10 py-24 md:py-28 px-4 sm:px-6 overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2" />

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-xl mb-6">

        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

        <span className="text-sm text-gray-300">
          Start Your Project
        </span>
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
        Let’s Build Something
        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Exceptional Together
        </span>
      </h2>

      <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
        We create premium digital experiences designed to elevate your
        brand, increase conversions, and help your business grow faster online.
      </p>
    </motion.div>

    {/* Main Grid */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mt-16 md:mt-20 items-stretch">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ transformStyle: "preserve-3d" }}
       className="group relative h-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 md:p-10"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />

        <div className="relative z-10">

          <h3 className="text-3xl font-bold">
            Why Brands Choose Us
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            We combine premium UI design, modern frontend technologies,
            and conversion-focused strategy to help ambitious businesses stand out.
          </p>

          {/* Feature Blocks */}
          <div className="mt-10 space-y-6">

            {/* Feature 1 */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 sm:gap-5 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
            >

              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden">

  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />

  <Gem className="relative w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />

</div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold tracking-tight">
                  Premium UI Design
                </h4>

                <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                  Modern high-end interfaces inspired by elite SaaS platforms.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 sm:gap-5 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
            >

              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden">

  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />

  <Zap className="relative w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />

</div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold tracking-tight">
                  High Performance
                </h4>

                <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                  Fast-loading responsive websites optimized for speed and conversions.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 sm:gap-5 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
            >

              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center shadow-lg shadow-pink-500/20 overflow-hidden">

  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />

  <TrendingUp className="relative w-5 h-5 sm:w-6 sm:h-6 text-pink-300" />

</div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold tracking-tight">
                  Growth Focused
                </h4>

                <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
                  Every experience is built to attract more leads and customers.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 md:p-10"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />

        <div className="relative z-10 space-y-5 sm:space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-3">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-2xl text-sm sm:text-base border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50 focus:bg-white/10 transition duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-3">
              Email Address
            </label>

            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full rounded-2xl text-sm sm:text-base border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/10 transition duration-300"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm text-gray-300 mb-3">
              Company Name
            </label>

            <input
              type="text"
              placeholder="Your Company"
              className="w-full rounded-2xl text-sm sm:text-base border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50 focus:bg-white/10 transition duration-300"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm text-gray-300 mb-3">
              Budget Range
            </label>

            <select
              className="w-full rounded-2xl text-sm sm:text-base border border-white/10 bg-[#0b1120] px-5 py-4 text-white outline-none focus:border-blue-500/50 transition duration-300"
            >
              <option>$500 - $1,000</option>
              <option>$1,000 - $3,000</option>
              <option>$3,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-3">
              Project Details
            </label>

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl text-sm sm:text-base border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-purple-500/50 focus:bg-white/10 transition duration-300 resize-none"
            />
          </div>

          {/* Button */}
          <button
  type="submit"
  className="group relative overflow-hidden w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-2xl shadow-purple-500/20 hover:scale-[1.02] hover:shadow-purple-500/40 transition duration-500"
>

  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full" />

  <span className="relative z-10">
    Send Project Inquiry
  </span>

</button>

        </div>
      </motion.form>
    </div>
  </div>
</section>

{/* Footer Section */}
<footer
  id="contact"
  className="relative z-10 px-4 sm:px-6 pb-8 md:pb-10 pt-20 md:pt-24 overflow-hidden will-change-transform"
>

  {/* Background Glow */}
  <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full -translate-x-1/2" />

  <motion.div
    variants={fadeUp}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
style={{ transformStyle: "preserve-3d" }}
    className="group relative max-w-7xl mx-auto overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-10 md:p-16"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full pointer-events-none" />

    {/* Top Footer */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
    <Layers3 className="w-6 h-6 text-white" />
  </div>

  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
    Task<span className="text-purple-400">Flow</span>
  </h2>
</div>

        <p className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
          We build premium digital experiences for modern businesses
          through cutting-edge design and development.
        </p>

       {/* Socials */}
<div className="flex gap-4 mt-8">

  {/* X / Twitter */}
  <div className="group w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:scale-110 transition-all duration-300">
    <span className="text-sm font-semibold text-gray-300 group-hover:text-white">
      X
    </span>
  </div>

  {/* LinkedIn */}
  <div className="group w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:scale-110 transition-all duration-300">
    <span className="text-sm font-semibold text-gray-300 group-hover:text-white">
      in
    </span>
  </div>

  {/* Instagram */}
<a
  href="https://instagram.com/chiagozie.jude"
  target="_blank"
  rel="noopener noreferrer"
  className="group w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:scale-110 transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-gray-300 group-hover:text-white transition duration-300"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-2.37-2.37 4 4 0 0 1 2.37 2.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
</a>

</div>
</div>

      {/* Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-6">
          Navigation
        </h3>

        <ul className="space-y-3 text-sm sm:text-base text-gray-400">
          <li>
  <a
    href="#services"
    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
  >
    Home
  </a>
</li>

          <li>
  <a
    href="#services"
    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
  >
    Services
  </a>
</li>

          <li>
  <a
    href="#services"
    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
  >
    Projects
  </a>
</li>

          <li>
  <a
    href="#services"
    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
  >
    Testimonials
  </a>
</li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-lg font-semibold tracking-tight mb-5">
          Services
        </h3>

        <ul className="space-y-3 text-sm sm:text-base text-gray-400">
          <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
            Web Design
          </li>

          <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
            Web Development
          </li>

          <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
            Branding
          </li>

          <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
            SEO Optimization
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="space-y-4 text-sm sm:text-base text-gray-400">

  <a
  href="mailto:chiagoziejude5@gmail.com"
  className="flex items-center gap-3 hover:text-white transition duration-300 group"
>
  <Mail className="w-4 h-4 text-purple-300 group-hover:scale-110 transition duration-300" />

  <p className="break-all">
    chiagoziejude5@gmail.com
  </p>
</a>

  <a
  href="https://wa.me/2348027291870"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-white transition duration-300 group"
>
  <Phone className="w-4 h-4 text-blue-300 group-hover:scale-110 transition duration-300" />

  <p>
    (+234) 802 729 1870
  </p>
</a>

  <div className="flex items-start gap-3 leading-relaxed">
    <MapPin className="w-4 h-4 text-pink-300 mt-1" />
    <p>
      123 Creative Avenue <br />
      Enugu, Enugu State, Nigeria
    </p>
  </div>

</div>
    </div>

    {/* Bottom Footer */}
    <div className="mt-14 md:mt-16 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">

      <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left leading-relaxed">
        © 2026 TaskFlow Agency. All rights reserved. Chiagozie Jude.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
        <span className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
          Privacy Policy
        </span>

        <span className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
          Terms of Service
        </span>
      </div>
    </div>
  </motion.div>
</footer>
    </main>
  );
}