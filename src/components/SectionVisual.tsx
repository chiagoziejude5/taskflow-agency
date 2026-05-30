"use client";

import { motion } from "framer-motion";

export default function SectionVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full max-w-[480px] mx-auto"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/10 blur-3xl rounded-full" />

      {/* Main Container */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(139,92,246,0.15)] p-6"
      >
        {/* Top Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-violet-500/5 pointer-events-none" />

        {/* Floating Orb */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-30 blur-3xl"
        />

        {/* Floating Mini Card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-6 right-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-xl"
        >
          <p className="text-xs text-white/60">Growth</p>
          <h4 className="mt-1 text-lg font-semibold text-white">+148%</h4>
        </motion.div>

        {/* Analytics Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/50">Performance</p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Analytics
              </h3>
            </div>

            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-violet-400" />
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <div className="h-2 w-2 rounded-full bg-fuchsia-400" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <p className="text-xs text-white/50">Revenue</p>
              <h4 className="mt-2 text-xl font-semibold text-white">$84K</h4>

              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "78%" }}
                  transition={{ duration: 1.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <p className="text-xs text-white/50">Engagement</p>
              <h4 className="mt-2 text-xl font-semibold text-white">92%</h4>

              <div className="mt-4 flex items-end gap-1 h-12">
                {[35, 55, 40, 70, 90].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                    }}
                    className="w-full rounded-full bg-gradient-to-t from-violet-500 to-cyan-400"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Dashboard */}
          <motion.div
            whileHover={{ y: -3 }}
            className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">Conversion Rate</p>
                <h4 className="mt-1 text-3xl font-bold text-white">86%</h4>
              </div>

              <div className="relative flex h-16 w-16 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-30 blur-xl" />
                <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="mt-6 space-y-4">
              {[
                { label: "Brand Growth", value: "82%" },
                { label: "User Retention", value: "91%" },
                { label: "Traffic", value: "76%" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.value }}
                      transition={{
                        duration: 1,
                        delay: i * 0.15,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}