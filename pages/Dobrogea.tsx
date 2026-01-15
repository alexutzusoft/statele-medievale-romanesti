import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Shield, BookOpen, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface DobrogeaEvent {
    title: string;
    icon: React.ReactNode;
    description: string;
}

const events: DobrogeaEvent[] = [
    {
        title: 'Ocupația',
        icon: <Shield className="w-6 h-6" />,
        description: 'Teritoriul dintre Dunăre și Marea Neagră se afla sub stăpânire bizantină.'
    },
    {
        title: 'Alexiada',
        icon: <BookOpen className="w-6 h-6" />,
        description: 'Alexiada este opera singurei femei istoric a Bizanțului. Anna Comnena menționează în Dobrogea de astăzi trei șefi locali de la sfârșitul secolului al XI-lea: Tatos, Sestlav si Satza.'
    },
    {
        title: 'Atestarea',
        icon: <MapPin className="w-6 h-6" />,
        description: 'Între Mangalia și Varna este atestată la 1230 Țara Căvurnei, fiind recunoscută de Bizanț în 1325.'
    }
];

export const Dobrogea: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleEvent = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8 text-center">Dobrogea. Alăturarea ei la Țara Românească</h1>
                <p className="text-lg text-stone-600 text-center mb-12 max-w-2xl mx-auto">
                    În secolul al X-lea, în Dobrogea se constată existența unor formațiuni prestatale, precum cele conduse de Gheorghe și jupan Dimitrie.
                </p>

                <div className="grid gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            onClick={() => toggleEvent(index)}
                            className={`bg-white rounded-xl shadow-sm border transition-all duration-300 cursor-pointer overflow-hidden ${expandedIndex === index ? 'border-brand-400 ring-1 ring-brand-200' : 'border-stone-200 hover:border-brand-300'
                                }`}
                        >
                            <div className="p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-full ${expandedIndex === index ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700'
                                        }`}>
                                        {event.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-800">{event.title}</h3>
                                </div>
                                {expandedIndex === index ? <ChevronUp className="text-stone-400" /> : <ChevronDown className="text-stone-400" />}
                            </div>

                            <div className={`px-6 pb-6 text-stone-600 leading-relaxed transition-all duration-300 ${expandedIndex === index ? 'block opacity-100' : 'hidden opacity-0'
                                }`}>
                                <div className="border-t border-stone-100 pt-4">
                                    {event.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};
