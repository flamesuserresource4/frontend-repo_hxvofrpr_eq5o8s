import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Beaker, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-[70vw] h-[70vw] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        {/* Copy */}
        <div className="relative z-10 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-fuchsia-200">
              <Beaker className="h-3.5 w-3.5" />
              Fantasy Learning Portal
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Brew knowledge in a whimsical lab of ideas
            </h1>
            <p className="text-white/80 max-w-xl">
              Explore concepts with interactive 3D objects, animated diagrams, and magical visuals. Move the beaker, watch reactions, and learn through play.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#learn" className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-3 font-medium shadow-lg shadow-fuchsia-500/30 transition-colors">
                Begin Lesson
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#showcase" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium transition-colors">
                View Showcase
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full">
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <Spline
              scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft overlay gradient for legibility, but don't block pointer interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
