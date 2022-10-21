import classes from "./footer.module.css";
import facebookLogo from "../../assets/facebook-icon.svg";
import instagramLogo from "../../assets/instagram-icon.svg";
import twitterLogo from "../../assets/twitter-icon.svg";

const Footer = (props) => {
  return (
    <footer>
      <div className={classes.content}>
        <div className={classes.logo}>
          <h1 className={classes.title}>CRAFT BAR</h1>
        </div>
        <div className={classes.contact}>
          <h2>Contact</h2>
          <p>513 Loren Ipsum Drive</p>
          <p>Dolor sit amet, AX 12345</p>
          <p>(123) - 456 - 7890</p>
        </div>
        <div className={classes.socials}>
          <a href="/">
            <img src={facebookLogo} className={classes["icon"]} alt="" />
          </a>
          <a href="/">
            <img src={instagramLogo} className={classes["icon"]} alt="" />
          </a>
          <a href="/">
            <img src={twitterLogo} className={classes["icon"]} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
