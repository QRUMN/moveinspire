import React from 'react';
import { Clock, Zap } from 'lucide-react';
import { PageHeader } from './layout/PageHeader';
import { Container } from './layout/Container';

interface ClassesProps {
  standalone?: boolean;
}

export function Classes({ standalone = false }: ClassesProps) {
  const classes = [
    {
      name: 'Hip-Hop',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      schedule: ['Mon 6pm', 'Wed 6pm', 'Sat 10am'],
      intensity: 'Medium-High',
      description: 'Energetic cardio sessions focused on self-expression and confidence building through hip-hop dance.'
    },
    {
      name: 'Stretch & Release',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      schedule: ['Tue 7pm', 'Thu 7pm', 'Sun 9am'],
      intensity: 'Low-Medium',
      description: 'Mindful movement sessions combining stretching and relaxation techniques for stress relief.'
    }
  ];

  const content = (
    <div className="grid md:grid-cols-2 gap-12">
      {classes.map((cls) => (
        <div key={cls.name} className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
          <div className="relative h-64">
            <img
              src={cls.image}
              alt={cls.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{cls.name}</h3>
            <p className="text-gray-600 mb-6">{cls.description}</p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">{cls.schedule.join(' | ')}</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">{cls.intensity}</span>
              </div>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition">
              Book Class
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  if (standalone) {
    return (
      <section className="py-12">
        <Container>
          <PageHeader 
            title="Our Classes" 
            subtitle="Discover your perfect movement practice"
            className="mb-12"
          />
          {content}
        </Container>
      </section>
    );
  }

  return (
    <section id="classes" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Classes</h2>
          <p className="text-xl text-gray-600">Discover your perfect movement practice</p>
        </div>
        {content}
      </Container>
    </section>
  );
}