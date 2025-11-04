import React from 'react';
import { Sparkles, BookOpen, PlayCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-fuchsia-300 drop-shadow" />
              <span className="absolute -inset-2 rounded-full bg-fuchsia-500/20 blur-md -z-10" />
            </div>
            <span className="font-semibold tracking-wide">Arcane Academy</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#learn" className="hover:text-fuchsia-300 transition-colors flex items-center gap-2"><BookOpen className="h-4 w-4"/> Learn</a>
            <a href="#showcase" className="hover:text-fuchsia-300 transition-colors flex items-center gap-2"><PlayCircle className="h-4 w-4"/> Showcase</a>
          </nav>
          <a href="#showcase" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/30 transition-colors">
            Start Exploring
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
