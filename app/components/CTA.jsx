import Link from "next/link";

export default function CTA() {
  return (
    <section id="register" className="bg-accent text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
      <p className="text-lg mb-8">
        Don’t miss out on the opportunity to be part of Hackathon 2024. Register
        now!
      </p>
      <Link
        href="https://dorahacks.io/org/blockhack/hackathon"
        passHref
        legacyBehavior
      >
        <div
          className="inline-flex bg-primary hover:bg-#7091e6 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 cursor-pointer"
          target="_blank" // Open the link in a new tab
          rel="noopener noreferrer"
        >
          Register Now
        </div>
      </Link>
    </section>
  );
}
