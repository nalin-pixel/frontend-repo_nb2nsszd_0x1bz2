import { BookOpen, Utensils, Home } from 'lucide-react';

const programs = [
  {
    icon: Home,
    title: 'Safe Homes',
    desc: 'Warm, secure housing with round-the-clock caregivers and a nurturing family environment.'
  },
  {
    icon: Utensils,
    title: 'Nutrition & Health',
    desc: 'Daily nutritious meals, regular medical checkups, and access to mental health support.'
  },
  {
    icon: BookOpen,
    title: 'Education & Mentorship',
    desc: 'School supplies, tutoring, technology access, and mentorship to build confidence.'
  }
];

export default function Programs() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Programs that change lives</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Every child deserves stability and opportunities to thrive. Our holistic programs cover home, health, and education.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
