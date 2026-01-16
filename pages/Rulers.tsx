import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Ruler } from '../types';

const rulers: Ruler[] = [
  {
    id: 'basarab',
    name: 'Basarab I',
    years: 'cca. 1310 - 1352',
    region: 'TaraRomaneasca',
    description: 'Întemeietorul Țării Românești. A câștigat independența statului prin victoria de la Posada (1330) împotriva regelui Ungariei Carol Robert de Anjou.',
    imageUrl: 'https://picsum.photos/400/300?random=10'
  },
  {
    id: 'bogdan',
    name: 'Bogdan I',
    years: '1359 - 1365',
    region: 'Moldova',
    description: 'Voievod maramureșean care a trecut Carpații, a înlăturat suzeranitatea maghiară și a întemeiat statul independent Moldova.',
    imageUrl: 'https://picsum.photos/400/300?random=11'
  },
  {
    id: 'mircea',
    name: 'Mircea cel Bătrân',
    years: '1386 - 1418',
    region: 'TaraRomaneasca',
    description: 'Domnitor sub care Țara Românească a ajuns la cea mai mare întindere teritorială. A apărat țara împotriva Imperiului Otoman (Rovine, 1395).',
    imageUrl: 'https://picsum.photos/400/300?random=12'
  },
  {
    id: 'gelu',
    name: 'Gelu (Gylas)',
    years: 'Sec. X',
    region: 'Transilvania',
    description: 'Voievod român al unei formațiuni politice din Transilvania, menționat în cronica Gesta Hungarorum ca rezistând triburilor maghiare.',
    imageUrl: 'https://picsum.photos/400/300?random=13'
  },
  {
    id: 'roman',
    name: 'Roman I',
    years: 'cca. 1391 - 1394',
    region: 'Moldova',
    description: 'A finalizat unificarea teritorială a Moldovei, extinzând statul până la Marea Neagră și la gurile Dunării.',
    imageUrl: 'https://picsum.photos/400/300?random=14'
  },
   {
    id: 'iancu',
    name: 'Iancu de Hunedoara',
    years: '1441 - 1456',
    region: 'Transilvania',
    description: 'Voievod al Transilvaniei și regent al Ungariei. Mare comandant militar, a oprit expansiunea otomană la Belgrad (1456).',
    imageUrl: 'https://picsum.photos/400/300?random=15'
  }
];

export const Rulers: React.FC = () => {
  return (
    <PageTransition>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Domnitori și Voievozi</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">Personalități istorice marcante care au contribuit la formarea, independența și consolidarea statelor medievale românești.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rulers.map((ruler) => (
          <div key={ruler.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img src={ruler.imageUrl} alt={ruler.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-600 px-2 py-1 rounded inline-block mb-1">
                  {ruler.region === 'TaraRomaneasca' ? 'Țara Românească' : ruler.region}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold font-serif text-stone-900">{ruler.name}</h3>
                <span className="text-xs font-mono text-stone-500">{ruler.years}</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">{ruler.description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
};
