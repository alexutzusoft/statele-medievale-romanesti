import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Users, Crown, Building } from 'lucide-react';

export const Transylvania: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4">Transilvania</h1>
          <p className="text-xl text-stone-600">Voievodat autonom sub suzeranitatea Regatului Maghiar</p>
        </header>

        {/* Main Concept Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4">Organizarea Politică: Voievodatul</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Spre deosebire de Țara Românească și Moldova, Transilvania a fost cucerită treptat de maghiari între secolele XI-XIII. Totuși, datorită rezistenței locale, ea și-a păstrat o <strong>autonomie internă</strong> puternică, fiind organizată ca <strong>voievodat</strong>. La 1111 este prezentat în documente un „Mercurius princep Ultrasylvanus”, dar la 1176 apare menționat Leustachius ca voievod, demonstrând că forma de organizare politică autohtonă a fost menținută.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Voievodul Transilvaniei era numit de regele Ungariei, dar avea puteri administrative, judecătorești și militare proprii, comportându-se adesea ca un veritabil suveran.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Crown className="w-32 h-32 text-brand-200" />
            </div>
          </div>
        </section>

        {/* Ethnic Groups Grid */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">Populații și Organizare</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 hover:border-brand-300 transition-colors">
              <Users className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Românii</h3>
              <p className="text-sm text-stone-600">
                În Gesta Hungarorum, scrisă de regele maghiar Béla (probabil al III-lea), românii sunt menționați ca fiind cei mai vechi locuitori ai Transilvaniei.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 hover:border-brand-300 transition-colors">
              <Building className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Sașii</h3>
              <p className="text-sm text-stone-600">
                Au fost colonizați în secolele XII-XIII cu scopul de a stimula dezvoltarea economică din regiune.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 hover:border-brand-300 transition-colors">
              <Users className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Secuii</h3>
              <p className="text-sm text-stone-600">
                Au participat împreună cu maghiarii la cucerirea Pannoniei (898-899) și apoi la expediția împotriva lui Menumorut.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison/Integration */}
        <section className="bg-brand-50 p-8 rounded-2xl border border-brand-100">
          <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">Relația cu Regatul Ungariei</h2>
          <p className="text-stone-700 leading-relaxed">
            Deși parte a Coroanei Sfântului Ștefan, Transilvania a fost întotdeauna un corp distinct ("Regnum Transilvaniae"). Voievozii transilvăneni, precum <strong>Roland Borșa</strong> sau <strong>Ladislau Kán</strong>, și-au asumat în diverse momente o autoritate aproape independentă, sfidând puterea centrală maghiară, mai ales în perioadele de criză dinastică.
          </p>
        </section>
      </div>
    </PageTransition>
  );
};