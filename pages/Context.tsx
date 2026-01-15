import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Clock } from 'lucide-react';

export const Context: React.FC = () => {
  const events = [
    { year: '1241', title: 'Marea Invazie Tătară', desc: 'Distrugerea structurilor politice incipiente și încetinirea procesului de unificare statală.' },
    { year: '1247', title: 'Diploma Cavalerilor Ioaniți', desc: 'Menționează primele formațiuni politice românești (cnezate și voievodate) la sud de Carpați.' },
    { year: '1301', title: 'Stingerea dinastiei Arpadiene', desc: 'Criza dinastică în Ungaria slăbește autoritatea regală, permițând emanciparea românilor.' },
    { year: 'Sec. XIV', title: 'Centralizarea', desc: 'Unificarea formațiunilor politice sub o singură autoritate centrală (Voievodul).' },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-b border-brand-200 pb-8">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Context Istoric</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Întemeierea statelor medievale românești este rezultatul unui proces îndelungat asemănător cu cel din alte spații europene. Împrejurări externe nefavorabile au întârziat consituirea statelor românești și au menținut pluralitatea statală în întreg Evul Mediu. Organizarea societății medievale românești au avut ca nucleu satul. Transformările demografice și economico-sociale din sate au deschis evoluția spre structuri noi: țări, cnezate, voievodate. Acest proces poate fi definit prin formula „de la sat la stat”.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-100">
            <h2 className="text-2xl font-serif font-bold mb-4 text-brand-800">Factori Externi</h2>
            <ul className="list-disc pl-5 text-stone-700 space-y-2">
              <li>Invazia mongolă din 1241 sub conducerea lui Batu-Han</li>
              <li>Criza politică din Ungaria unde caracterul electiv al tronului și disputele iscate astfel pentru tron ofereau un răgaz românilor</li>
              <li>Tendințele Ungariei și Poloniei de a înlătura dominația Hoardei de Aur din spațiul carpato-nistrean</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-100">
            <h2 className="text-2xl font-serif font-bold mb-4 text-brand-800">Factori Interni</h2>
            <ul className="list-disc pl-5 text-stone-700 space-y-2">
              <li>Factorul demografic</li>
              <li>Dezvoltarea economică</li>
              <li>Factorul social</li>
              <li>Consolidarea formațiunilor prestatale menționate de statele vremii</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-bold text-center mb-10">Cronologie Esențială</h2>

        <div className="relative border-l-4 border-brand-200 ml-4 md:ml-0 md:pl-0 space-y-12">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between group">
                {/* Desktop layout: alternating sides could be done here but keeping it simple linear for readability */}
                <div className="hidden md:block md:w-5/12 text-right pr-8">
                  <span className="text-3xl font-serif font-bold text-brand-600 block">{event.year}</span>
                </div>

                <div className="absolute left-[-10px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-brand-500 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform"></div>

                <div className="md:w-5/12 md:pl-8">
                  <span className="md:hidden text-2xl font-serif font-bold text-brand-600 block mb-1">{event.year}</span>
                  <div className="bg-brand-50 p-4 rounded-lg border border-brand-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-400" />
                      {event.title}
                    </h3>
                    <p className="text-stone-600 mt-2 text-sm">{event.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};