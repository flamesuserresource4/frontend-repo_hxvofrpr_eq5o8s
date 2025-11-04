import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Star className="h-4 w-4 text-fuchsia-300" />
          <span>Crafted for magical learning</span>
        </div>
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Arcane Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
