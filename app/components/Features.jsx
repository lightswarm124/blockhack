// app/components/Features.jsx
export default function Features() {
  return (
    <section id="features" className="bg-background py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What to Expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Inspiring Insights</h3>
            <p>
              Gain valuable knowledge from industry experts who will spark fresh
              ideas and provide strategic insights.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Dynamic Collaboration
            </h3>
            <p>
              Collaborate with like-minded innovators in a vibrant, supportive
              environment that encourages creativity and teamwork.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Exciting Prizes</h3>
            <p>
              Compete for exciting prizes that recognize and celebrate
              groundbreaking projects and innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
