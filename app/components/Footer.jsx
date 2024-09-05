import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 text-center">
      <p>&copy; 2024 BlockHack Toronto</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://www.facebook.com" className="hover:text-primary">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a href="https://www.twitter.com" className="hover:text-primary">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://www.linkedin.com" className="hover:text-primary">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
      </div>
      <p className="mt-4">Contact us: sponsorship@bitcoinbay.ca</p>
    </footer>
  );
}
