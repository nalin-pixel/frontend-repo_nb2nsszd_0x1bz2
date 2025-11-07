import { Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-700 text-sm font-medium">
            <Heart className="h-4 w-4" />
            Hope for every child
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Bright Futures Orphan Care
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            We provide safe shelter, education, and loving mentorship for orphaned and vulnerable children. Together, we can turn compassion into lifelong opportunity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#donate" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Donate Now
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50">
              <Users className="h-5 w-5" />
              Learn More
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 items-center gap-6 text-center text-sm text-gray-600">
            <div>
              <div className="text-2xl font-bold text-gray-900">150+</div>
              Children supported
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">30</div>
              Caring staff
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">12</div>
              Years of impact
            </div>
          </div>
        </div>
        <div className="relative mt-12 h-72 w-full flex-1 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 p-1 shadow-lg lg:mt-0 lg:h-[420px]">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
            <div className="p-8 text-center">
              <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop" alt="Children smiling together" className="mx-auto mb-4 h-40 w-40 rounded-full object-cover shadow-md" />
              <p className="text-sm text-gray-600">
                Your kindness becomes a child’s confidence. Your support funds meals, tutoring, healthcare, and safe homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
