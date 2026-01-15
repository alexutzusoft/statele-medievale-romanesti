import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { BookOpen, User, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brand-100 text-center">
        <BookOpen className="w-16 h-16 text-brand-600 mx-auto mb-6" />

        <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Despre Proiect</h1>
        <p className="text-lg text-stone-500 mb-8">Formarea Statelor Medievale Românești</p>

        <div className="space-y-6 text-left bg-brand-50 p-8 rounded-xl border border-brand-200">
          <div className="flex items-start gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <User className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase font-bold tracking-wide">Realizat de</p>
              <ul className="text-lg font-medium text-stone-900 list-none p-0 m-0">
                <li>Ciapa Alexandru Ioan</li>
                <li>Rusu Dragoș Florin</li>
                <li>Palade Alin Constantin</li>
                <li>Arhire Dragoș Florin</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <BookOpen className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase font-bold tracking-wide">Clasa</p>
              <p className="text-lg font-medium text-stone-900">a VIII-a</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <Calendar className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase font-bold tracking-wide">An Școlar</p>
              <p className="text-lg font-medium text-stone-900">2025 - 2026</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-stone-600 text-sm italic">
          Acest site web a fost creat ca parte a unui proiect interdisciplinar de Istorie și Informatică, având ca scop prezentarea interactivă a procesului de formare a statelor medievale.
        </p>
      </div>
    </PageTransition>
  );
};