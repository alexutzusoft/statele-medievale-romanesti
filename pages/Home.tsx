import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowRight, Map, Shield, ScrollText } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="text-center py-16 lg:py-24 space-y-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 tracking-tight">
          Formarea Statelor <br className="hidden md:block" />
          <span className="text-brand-700">Medievale Românești</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          O prezentare a formarea statelor care, în 1859, vor deveni Principatele Române
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/context" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-700 hover:bg-brand-800 transition-colors shadow-sm">
            Context Istoric
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Decorative Image Area */}
      <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl mb-16 relative group">
        <img
          src="https://preview.redd.it/eu5s-new-loading-screens-v0-euibfjkud2yf1.png?width=1080&crop=smart&auto=webp&s=fc7769d536ab5ee9c377592e015e92a79b52b1ad"
          alt="Medieval Landscape"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-stone-900/30 flex items-center justify-center">
          <span className="text-white/80 font-serif italic text-2xl md:text-4xl">Secolele IX - XIV</span>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Link to="/tara-romaneasca" className="group block">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all h-full text-center">
            <div className="inline-flex items-center justify-center p-4 bg-brand-100 rounded-full mb-6 group-hover:bg-brand-200 transition-colors">
              <Shield className="h-8 w-8 text-brand-800" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Țara Românească</h3>
            <p className="text-stone-600">De la descălecatul legendar la Basarab I și victoria de la Posada.</p>
          </div>
        </Link>

        <Link to="/moldova" className="group block">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all h-full text-center">
            <div className="inline-flex items-center justify-center p-4 bg-brand-100 rounded-full mb-6 group-hover:bg-brand-200 transition-colors">
              <Map className="h-8 w-8 text-brand-800" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Moldova</h3>
            <p className="text-stone-600">Dragoș, Bogdan I și obținerea independenței față de Ungaria.</p>
          </div>
        </Link>

        <Link to="/transilvania" className="group block">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all h-full text-center">
            <div className="inline-flex items-center justify-center p-4 bg-brand-100 rounded-full mb-6 group-hover:bg-brand-200 transition-colors">
              <ScrollText className="h-8 w-8 text-brand-800" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Transilvania</h3>
            <p className="text-stone-600">Voievodatul autonom, colonizarea sașilor și secuilor, și relația cu Regatul Maghiar.</p>
          </div>
        </Link>
      </div>
    </PageTransition>
  );
};
