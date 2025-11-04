import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, BookOpen, PlayCircle } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: '3D Interaction',
    desc: 'Rotate, zoom, and explore detailed 3D objects right in the lesson.',
    glow: 'from-fuchsia-400/30 to-purple-400/30',
  },
  {
    icon: Sparkles,
    title: 'Magical Animations',
    desc: 'Smooth motion and delightful sparkles guide your focus to key ideas.',
    glow: 'from-indigo-400/30 to-blue-400/30',
  },
  {
    icon: BookOpen,
    title: 'Bite-sized Modules',
    desc: 'Clear sections with visuals and steps that build understanding.',
    glow: 'from-emerald-400/30 to-teal-400/30',
  },
  {
    icon: PlayCircle,
    title: 'Hands-on Demos',
    desc: 'Mini activities and scenarios so you can learn by doing.',
    glow: 'from-amber-400/30 to-pink-400/30',
  },
];

const Features = () => {
  return (
    <section id="learn" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">What makes learning enchanting</h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Designed for clarity and delight, each lesson blends visuals, motion, and interaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc, glow }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden"
            >
              <div className={`pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl bg-gradient-to-br ${glow}`} />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/10 p-2.5 mb-4">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1.5">{title}</h3>
                <p className="text-white/80 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
