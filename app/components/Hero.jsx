import Image from "next/image";
import Link from "next/link";
import { partnersData } from "../data/partnersData"; // Import the partner data

export default function Hero() {
  return (
    <section
      id=""
      className="bg-gradient-to-r from-primary via-secondary to-accent text-white flex flex-col items-center justify-center min-h-screen relative mt-[4rem]" // Adds top margin to avoid overlap with header
    >
      {/* Text and Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 pt-12 md:pt-20">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/BlockHackLogo.png"
            alt="BlockHack Logo"
            width={300}
            height={300}
            className="w-full h-auto md:w-auto"
          />
        </div>
        <div className="md:w-1/2 text-left mb-6 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BlockHack 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bridging the gap between entrepreneurs and blockchain technology,
            BlockHack 2024 is your gateway to launching groundbreaking Web3
            ventures.
          </p>
          <p className="text-xl md:text-2xl mb-8">
            November 8th to 10th
            <br />
            <Link
              href="https://www.google.com/maps/place/51+Dockside+Dr,+Toronto,+ON+M5A+1B6/@43.6440702,-79.3680668,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb243773f663:0xaada5b1e44cb76cc!8m2!3d43.6440702!4d-79.3654865!16s%2Fg%2F11bw3g48zg?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              passHref
              legacyBehavior
            >
              <a
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                George Brown College - Waterfront Campus
                <br />
                51 Dockside Dr, Toronto ON
              </a>
            </Link>
            <br />
            <Link
              href="https://dorahacks.io/hackathon/555/detail"
              passHref
              legacyBehavior
            >
              <a
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Link>
          </p>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="w-full mt-8 flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-4">Our Partners</h3>
        <div className="flex justify-center items-center space-x-8 w-full px-4">
          {partnersData.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/3 md:w-1/4 lg:w-1/6 flex justify-center"
            >
              <Image
                src={partner.image}
                alt={`${partner.name} Logo`}
                width={250}
                height={150}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
