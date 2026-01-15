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
              Spre deosebire de celelalte țări românești, informațiile narative sunt reduse, dar descoperirile arheologice atestă existența unor formațiuni medievale alcătuite din mai multe uniuni de obști.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Dragoș și Marca de Apărare</h2>
            <p className="text-stone-700 leading-7 mb-4">
              Dragoș a condus o marcă de apărare, în nord-vestul Moldovei. Aceasta a fost întemeiată în urma unor expediții maghiare repetate între 1345-1354, Dragoș reprezentând autoritatea regală în zonă.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4 pb-2 border-b border-stone-200">Bogdan I și Independența</h2>
            <p className="text-stone-700 leading-7 mb-4">
              Adevăratul întemeietor al statului independent Moldova este <strong>Bogdan I</strong> (1359-1365). Nemulțumit de regele Ungariei, Bogdan a trecut munții din Maramureș în Moldova, i-a alungat pe urmașii lui Dragoș (Bâlc și Sas) și a proclamat independența statului.
            </p>
            <div className="bg-stone-100 p-4 rounded border-l-4 border-stone-400 my-4">
              <p className="text-stone-800 font-medium">Un document maghiar din 1349 îl amintește ca "fost voievod necredincios al nostru".</p>
            </div>
          </section>
        </div>

        {/* Sidebar / Image Column */}
        <div className="lg:col-span-4 space-y-6 order-1 lg:order-2">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-stone-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Szucs%C3%A1va%2C_Cetatea_de_Scaun_-_l%C3%A9gi_fot%C3%B3.jpg/900px-Szucs%C3%A1va%2C_Cetatea_de_Scaun_-_l%C3%A9gi_fot%C3%B3.jpg"
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