import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white flex flex-col items-center justify-center min-h-screen relative">
      {/* Text and Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/BlockHackLogo.png"
            alt="BlockHack Logo"
            width={300}
            height={300}
            className="w-full h-auto md:w-auto" // Ensures that the image respects the aspect ratio
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
          <Link
            href="https://dorahacks.io/org/blockhack/hackathon"
            passHref
            legacyBehavior
          >
            <div
              className="inline-flex bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </div>
          </Link>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="w-full mt-8 flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-4">Our Partners</h3>
        <div className="flex justify-center items-center space-x-8 w-full px-4">
          <div className="w-1/3 md:w-1/4 lg:w-1/6 flex justify-center">
            <Image
              src="/assets/BB_Blue.png"
              alt="Bitcoin Bay Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="w-1/3 md:w-1/4 lg:w-1/6 flex justify-center">
            <Image
              src="/assets/DM_Black.png"
              alt="Decentralized Minds Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="w-1/3 md:w-1/4 lg:w-1/6 flex justify-center">
            <Image
              src="/assets/Dorahacks.png"
              alt="Dorahacks Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
