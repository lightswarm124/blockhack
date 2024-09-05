// app/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-20 bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/BlockHackLogo.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">About BlockHack 2024</h2>
        <p className="text-lg">
          BlockHack is a weekend hackathon dedicated to combining the efforts of
          entrepreneurs and developers to foster the growth of
          blockchain-related projects and ventures. We are seeking creative
          hackers and ambitious students to apply blockchain technology across
          various industry sectors, driving innovation and new possibilities in
          the Web3 space.
        </p>
      </div>
    </section>
  );
}
