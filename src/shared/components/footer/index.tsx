import "@shared/styles/index.css";
import "./Footer.css";
import { Body, PrimaryHeading } from "../typography";
import content from "@/content/main";
import EmailIcon from "@assets/icons/email.svg";
import LinkedInIcon from "@assets/icons/linkedin.svg";

export default function Footer() {
  return <footer>
    <div className="row">
      <div className="centered-column">
        <PrimaryHeading className="footer-heading">
          {content.footer.sendMeMessage}
        </PrimaryHeading>
      </div>
    </div>
    <div className="row">
      <div className="centered-column contacts">
        <span>
          <img className="footer-icon" src={EmailIcon} alt="Email Icon" />
          <a className="footer-link" href={`mailto:${content.footer.email}`}>
            {content.footer.email}
          </a>
        </span>
        <span>
          <img className="footer-icon" src={LinkedInIcon} alt="LinkedIn Icon" />
          <a className="footer-link" href={content.footer.linkedin}>
            LinkedIn
          </a>
        </span>
      </div>
    </div>
  </footer>
}
