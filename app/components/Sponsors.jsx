import Image from "next/image";
import { sponsorsData } from "../data/sponsorsData";

const SponsorSection = ({ title, sponsors }) => {
  if (!sponsors || sponsors.length === 0) return null;

  return (
    <div className="mb-12">
      {title && <h3 className="text-2xl font-semibold mb-6">{title}</h3>}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Sponsors() {
  const { platinum, gold, silver, bronze, communityPartners } = sponsorsData;

  return (
    <section id="sponsors" className="py-20 px-4 md:px-20 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Sponsors</h2>

        <SponsorSection title="Platinum Sponsors" sponsors={platinum} />
        <SponsorSection title="Gold Sponsors" sponsors={gold} />
        <SponsorSection title="Silver Sponsors" sponsors={silver} />
        <SponsorSection title="Bronze Sponsors" sponsors={bronze} />

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Community Partners</h2>
          <SponsorSection sponsors={communityPartners} />
        </div>
      </div>
    </section>
  );
}
