import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const year = new Date().getFullYear();

  const SOCIAL_MEDIA_ACCOUNTS = {
    Instagram: "https://instagram.com/tacssuki",
    Facebook: "https://facebook.com/tacssuki",
    Github: "https://github.com/tacssuki",
  };

  return (
    <footer className={darkMode ? "dark-mode" : ""}>
      <div className="footer-content">
        <p className="footer-text">Jushtine Kylle Taculad ⓒ {year}</p>
        <span>
          <big>|</big>
        </span>
        <div className="footer-icons">
          <a
            className="social-icon"
            href={SOCIAL_MEDIA_ACCOUNTS.Instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="social-icon"
            href={SOCIAL_MEDIA_ACCOUNTS.Facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="social-icon"
            href={SOCIAL_MEDIA_ACCOUNTS.Github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
