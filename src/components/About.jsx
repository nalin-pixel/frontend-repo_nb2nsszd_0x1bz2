export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We exist to ensure every orphaned child finds safety, belonging, and opportunity. Our programs provide safe housing, nutritious meals, healthcare, quality education, and caring mentorship. We work closely with local communities to provide long-term, sustainable support.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Transparency matters to us. We publish regular impact reports, maintain clear financial practices, and welcome volunteers and partners to see our work firsthand.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop"
              alt="Mentor teaching children"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
