// app/components/Timeline.jsx
export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-primary text-white py-20 px-4 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Event Schedule</h2>
        <div className="relative border-l border-white">
          <div className="mb-10 ml-10">
            <div className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2.5 border border-primary"></div>
            <h3 className="text-2xl font-semibold">Day 1</h3>
            <p className="text-lg mt-2">Kickoff and Team Formation</p>
          </div>
          <div className="mb-10 ml-10">
            <div className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2.5 border border-primary"></div>
            <h3 className="text-2xl font-semibold">Day 2</h3>
            <p className="text-lg mt-2">Hacking and Mentorship</p>
          </div>
          <div className="ml-10">
            <div className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2.5 border border-primary"></div>
            <h3 className="text-2xl font-semibold">Day 3</h3>
            <p className="text-lg mt-2">Final Presentations and Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
