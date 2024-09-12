// app/components/Timeline.jsx
export default function Timeline() {
  return (
    <section
      id="schedule"
      className="bg-primary text-white py-20 px-4 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Event Schedule</h2>
        <div className="relative border-l border-white">
          {/* Day 1: Friday, November 8 */}
          <div className="mb-10 ml-10">
            <div className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2.5 border border-primary"></div>
            <h3 className="text-2xl font-semibold">Friday, November 8</h3>
            <ul className="text-lg mt-2 space-y-1">
              <li>6:00 PM: Participant Check-In</li>
              <li>7:00 PM: Welcome Dinner</li>
              <li>8:00 PM: Opening Ceremony & Keynote Speaker</li>
              <li>9:00 PM: Team Formation Session</li>
            </ul>
          </div>

          {/* Day 2: Saturday, November 9 */}
          <div className="mb-10 ml-10">
            <div className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2.5 border border-primary"></div>
            <h3 className="text-2xl font-semibold">Saturday, November 9</h3>
            <ul className="text-lg mt-2 space-y-1">
              <li>10:00 AM: Workshop 1 (Blockchain Basics)</li>
              <li>12:00 PM: Lunch</li>
              <li>1:00 PM: Workshop 2 (DeFi Deep Dive)</li>
              <li>3:00 PM: Mentorship Sessions</li>
              <li>6:00 PM: Dinner & Networking</li>
            </ul>
          </div>

          {/* Day 3: Sunday, November 10 */}
          <div className="ml-10">
            <div className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2.5 border border-primary"></div>
            <h3 className="text-2xl font-semibold">Sunday, November 10</h3>
            <ul className="text-lg mt-2 space-y-1">
              <li>9:30 AM: Project Submissions Due</li>
              <li>10:30 AM: Judging Begins</li>
              <li>12:00 PM: Lunch</li>
              <li>1:00 PM: Final Judging</li>
              <li>3:00 PM: Winners Announced</li>
              <li>4:00 PM: Event Wrap-Up</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
