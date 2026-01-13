import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-brand-400" />
            <div>
              <h3 className="text-lg font-serif font-bold text-white">Proiect Istorie</h3>
              <p className="text-sm text-stone-400">Clasa a VII-a • Interdisciplinar</p>
            </div>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>&copy; {new Date().getFullYear()} Formarea Statelor Medievale Românești.</p>
            <p className="mt-1 text-stone-500">Imaginile sunt utilizate în scop educativ.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};