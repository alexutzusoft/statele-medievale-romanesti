import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Factor } from '../types';
import { Mountain, Scale, Swords, Coins, ChevronDown, ChevronUp } from 'lucide-react';

const factors: Factor[] = [
  {
    title: 'Factori Geografici',
    type: 'geo',
    icon: <Mountain className="w-6 h-6" />,
    description: 'Relieful variat (munți, dealuri, ape) a oferit protecție naturală împotriva invaziilor. Carpații nu au fost o barieră, ci un element de legătură între românii de pe ambele versante ("coloana vertebrală" a românismului).'
  },
  {
    title: 'Factori Politici Interni',
    type: 'pol',
    icon: <Scale className="w-6 h-6" />,
    description: 'Creșterea puterii cnezilor și voievozilor locali, care au început să unifice micile formațiuni statale (uniuni de obști) pentru a avea o forță mai mare de negociere și organizare administrativă.'
  },
  {
    title: 'Factori Militari (Externi)',
    type: 'mil',
    icon: <Swords className="w-6 h-6" />,
    description: 'Necesitatea apărării comune în fața amenințărilor externe: expansiunea Regatului Ungariei și dominația Hoardei de Aur. Slăbirea puterii tătare după 1300 a creat un vid de putere favorabil independenței.'
  },
  {
    title: 'Factori Economici',
    type: 'eco',
    icon: <Coins className="w-6 h-6" />,
    description: 'Dezvoltarea agriculturii, creșterea demografică și, mai ales, controlul asupra "Drumului Comercial Moldovenesc" care lega Marea Baltică de Marea Neagră, aducând venituri importante liderilor locali.'
  }
];

export const Factors: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFactor = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8 text-center">Factorii Formării Statelor</h1>
        <p className="text-lg text-stone-600 text-center mb-12 max-w-2xl mx-auto">
          Formarea statelor medievale românești nu a fost un eveniment izolat, ci rezultatul cumulării unor factori interni și externi favorabili.
        </p>

        <div className="grid gap-6">
          {factors.map((factor, index) => (
            <div 
              key={index}
              onClick={() => toggleFactor(index)}
              className={`bg-white rounded-xl shadow-sm border transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedIndex === index ? 'border-brand-400 ring-1 ring-brand-200' : 'border-stone-200 hover:border-brand-300'
              }`}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    expandedIndex === index ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700'
                  }`}>
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">{factor.title}</h3>
                </div>
                {expandedIndex === index ? <ChevronUp className="text-stone-400" /> : <ChevronDown className="text-stone-400" />}
              </div>
              
              <div className={`px-6 pb-6 text-stone-600 leading-relaxed transition-all duration-300 ${
                expandedIndex === index ? 'block opacity-100' : 'hidden opacity-0'
              }`}>
                <div className="border-t border-stone-100 pt-4">
                  {factor.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};