import { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState('25');
  const presets = ['10', '25', '50', '100'];

  const submit = (e) => {
    e.preventDefault();
    alert(`Thank you for your pledge of $${amount}. A brighter future starts with you!`);
  };

  return (
    <section id="donate" className="bg-blue-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Make a Difference Today</h2>
          <p className="mt-2 text-center text-gray-600">
            Your gift provides shelter, food, school supplies, and caring mentorship.
          </p>
          <form onSubmit={submit} className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(p)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition ${amount === p ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
                >
                  ${p}
                </button>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative flex-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full rounded-lg border border-gray-300 pl-7 pr-3 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter amount"
                  inputMode="numeric"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Donate
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center">
              This demo collects pledges only. For secure payments, integrate your preferred processor.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
