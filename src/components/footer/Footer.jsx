import { socialLinks } from "../../utils/constants";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ellipses" />
      <div className="footerContainer">
        <div className="socialIcons">
          {socialLinks.map((link) => {
            const { href, id, target, rel, icon } = link;
            return (
              <a href={href} target={target} rel={rel} key={id}>
                {icon}
              </a>
            );
          })}
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span>
              Andrija Micunovic <br />
              All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
