import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const Wallachia: React.FC = () => {
  return (
    <PageTransition>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Sidebar / Image Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-stone-100">
            <img 
              src="https://picsum.photos/800/1000?random=1" 
              alt="Reprezentare Țara Românească" 
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-stone-50">
              <p className="text-sm text-stone-500 italic text-center">Basarab I Întemeietorul</p>
            </div>
          </div>
          
          <div className="bg-brand-100 p-6 rounded-xl border border-brand-200">
            <h3 className="font-bold text-brand-900 mb-2 font-serif">Știai că?</h3>
            <p className="text-stone-800 text-sm">
              Numele de "Țara Românească" provine de la "Romanian Land", fiind primul stat medieval format de români care și-a asumat această identitate în mod oficial.
            </p>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6">Țara Românească</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Procesul de unificare a formațiunilor politice de la sud de Carpați s-a încheiat la începutul secolului al XIV-lea, sub conducerea voievodului <strong>Basarab I</strong>.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Basarab I și Întemeierea</h2>
            <p className="text-stone-700 leading-7 mb-4">
              Basarab I (cca. 1310–1352) este considerat întemeietorul statului medieval Țara Românească. El a reușit să unească cnezatele și voievodatele existente (Seneslau, Litovoi) sub o singură autoritate centrală. Inițial vasal al regelui Ungariei, Carol Robert de Anjou, Basarab a căutat treptat independența țării.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Bătălia de la Posada (1330)</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-500 mb-6">
              <blockquote className="italic text-stone-600 text-lg mb-2">
                "Și s-a făcut o mare pieire a oștirii ungurești..."
              </blockquote>
              <cite className="text-sm font-bold text-stone-500">- Cronica Pictată de la Viena</cite>
            </div>
            <p className="text-stone-700 leading-7 mb-4">
              Momentul decisiv al independenței a fost <strong>Bătălia de la Posada (9-12 noiembrie 1330)</strong>. Regele Ungariei a invadat țara pentru a-l pedepsi pe Basarab. Într-o trecătoare îngustă din munți, oastea valahă a surprins armata maghiară, obținând o victorie zdrobitoare. Această victorie a consfințit independența statului.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Consolidarea Statului</h2>
            <p className="text-stone-700 leading-7">
              Urmașii lui Basarab, precum <strong>Nicolae Alexandru</strong> și <strong>Vladislav Vlaicu</strong>, au continuat procesul de consolidare:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-stone-700">
              <li>Au înființat <strong>Mitropolia Țării Românești</strong> (1359), asigurând recunoașterea religioasă și politică internațională.</li>
              <li>Au bătut primii bani proprii, semn de suveranitate economică.</li>
              <li>Au organizat sfatul domnesc și cancelaria domnească.</li>
            </ul>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};