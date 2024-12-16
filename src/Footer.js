import React from "react";

const Footer = ({ companyName }) => {
  const today = new Date();

  return (
    <footer className="Footer">
      <p>
        {" "}
        Copyright &copy; {today.getFullYear()}&nbsp;&nbsp;
        <a
          className="App-link"
          href="https://zand-software.weebly.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {companyName}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
