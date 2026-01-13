import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const Moldova: React.FC = () => {
  return (
    <PageTransition>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Content Column */}
        <div className="lg:col-span-8 space-y-12 order-2 lg:order-1">
          <div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6">Moldova</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Formarea Moldovei este legată de tradiția "descălecatului" voievozilor din Maramureș la est de Carpați, un proces desfășurat în două etape distincte la mijlocul secolului al XIV-lea.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Dragoș și Marca de Apărare</h2>
            <p className="text-stone-700 leading-7 mb-4">
              Primul "descălecat" a fost cel al lui <strong>Dragoș</strong>, un voievod maramureșean trimis de regele Ungariei pentru a organiza o marcă de apărare împotriva tătarilor în nordul Moldovei (cca. 1347-1350). Această formațiune politică era dependentă de Ungaria, având rolul de a proteja regatul de invazii.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Bogdan I și Independența</h2>
            <p className="text-stone-700 leading-7 mb-4">
              Adevăratul întemeietor al statului independent Moldova este <strong>Bogdan I</strong> (1359-1365). Nemulțumit de regele Ungariei, Bogdan a trecut munții din Maramureș în Moldova, i-a alungat pe urmașii lui Dragoș (Bâlc și Sas) și a proclamat independența statului.
            </p>
            <div className="bg-stone-100 p-4 rounded border-l-4 border-stone-400 my-4">
              <p className="text-stone-800 font-medium">Regele Ludovic I al Ungariei l-a numit pe Bogdan "necredinciosul nostru", recunoscând implicit eșecul de a-l supune.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Rolul Strategic și Roman I</h2>
            <p className="text-stone-700 leading-7">
              Moldova a devenit rapid o putere regională, controlând drumul comercial care lega Marea Baltică de Marea Neagră. Sub voievodul <strong>Roman I</strong> (sfârșitul sec. XIV), statul a ajuns la extinderea sa maximă teritorială, voievodul intitulându-se:
            </p>
            <blockquote className="mt-4 p-4 border border-brand-200 bg-white shadow-sm rounded italic text-center text-brand-900 font-serif text-lg">
              "Domn al Țării Moldovei de la munte până la mare"
            </blockquote>
          </section>
        </div>

        {/* Sidebar / Image Column */}
        <div className="lg:col-span-4 space-y-6 order-1 lg:order-2">
           <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-stone-100">
            <img 
              src="https://picsum.photos/800/1000?random=2" 
              alt="Cetatea de Scaun a Sucevei (reprezentare)" 
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-stone-50">
              <p className="text-sm text-stone-500 italic text-center">Cetatea de Scaun (reprezentare)</p>
            </div>
          </div>
          
          <div className="bg-stone-800 text-stone-100 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-brand-400 mb-3 font-serif text-lg">Legenda Zimbrului</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Legenda spune că Dragoș Vodă a ajuns în Moldova urmărind un zimbru (sau bour). Capul de bour a devenit stema istorică a Moldovei, simbolizând puterea și independența noului stat.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};