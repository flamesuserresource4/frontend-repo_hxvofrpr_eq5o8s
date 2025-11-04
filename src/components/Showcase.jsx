import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'States of Matter',
    image: 'https://images.unsplash.com/photo-1629575363813-2e200b0f714a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGF0ZXMlMjBvZiUyME1hdHRlcnxlbnwwfDB8fHwxNzYyMjU5ODI2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Visualize transitions like melting and evaporation with particle motion.',
  },
  {
    title: 'Lab Safety',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Interactive hotspots highlight best practices using the 3D beaker.',
  },
  {
    title: 'Mixtures & Solutions',
    image: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaXh0dXJlcyUyMCUyNiUyMFNvbHV0aW9uc3xlbnwwfDB8fHwxNzYyMjU5ODI3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'See how solutes dissolve and precipitate with animated diagrams.',
  },
  {
    title: 'Energy & Reactions',
    image: 'https://images.unsplash.com/photo-1760408582263-63f1377c7249?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbmVyZ3klMjAlMjYlMjBSZWFjdGlvbnN8ZW58MHwwfHx8MTc2MjI1OTgyN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Track endothermic vs exothermic changes through color and motion.',
  },
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Showcase</h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            A glimpse of topics that shine with 3D and animation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, idx) => (
            <motion.figure
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-white/80 text-sm mt-1">{it.caption}</p>
              </figcaption>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fuchsia-600/20 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
