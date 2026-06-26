import React from "react";
import codic from "../../../static/icons/favicon-64x64w.png";
import github from "../../../static/icons/github.png";
import linked from "../../../static/icons/linked.png";
import twitter from "../../../static/icons/twitter.png";

const styles = {
  socialMedia: {
    display: "flex",
    flex: 1,
    flexDirection: "row" as const,
    justifyContent: "flex-end"
  },
  iconWrapper: {
    alignItems: "center",
    display: "flex"
  },
  webIconPersonal: {
    height: 30,
    marginLeft: 20
  },
  webIconGitHub: {
    height: 35,
    marginLeft: 20
  },
  webIconLinkedin: {
    height: 30,
    marginLeft: 20
  },
  webIconTwitter: {
    height: 25,
    marginLeft: 20
  }
};

/**
 * Social Media
 */
const SocialMedia = () => {
  return (
    <div style={styles.socialMedia}>
      <div style={styles.iconWrapper}>
        <a
          href="https://github.com/hirokazutei"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} style={styles.webIconGitHub} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/hirokazutei/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linked} style={styles.webIconLinkedin} alt="linked" />
        </a>
        <a
          href="https://twitter.com/aSublimeAddict"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} style={styles.webIconTwitter} alt="twitter" />
        </a>
        <a
          href="https://hirokazutei.me"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={codic}
            style={styles.webIconPersonal}
            alt="Codic-Vorfreude"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
