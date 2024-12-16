import React from "react";
import { useState } from "react";

const About = ({ companyName }) => {
  const [mailTo, setMailTo] = useState("mailto:zand.software.co@gmail.com");
  const handleEmailChange = () => {
    const names = [
      "mailto:zand.software.supp@gmail.com",
      "mailto:zand.software.sales@gmail.com",
      "mailto:zand.software.co@gmail.com",
    ];
    const int = Math.floor(Math.random() * 3);
    setMailTo(names[int]);
  };
  const companyEmail = mailTo.slice(7);

  return (
    <main className="About">
      {/* Creating a two-column layout in React using Flexbox is straightforward. */}
      {/* We set Up our React Component: First, create a React component where we’ll define our layout. */}
      <div className="column">
        {" "}
        <h3>About &copy; {companyName}</h3>
        <p style={{ marginTop: "1rem" }}>
          {/* <button className="button" onClick={handleEmailChange}>
          Change Email
        </button> */}
          Email:&nbsp;
          <a className="E-mail" href={mailTo}>
            {companyEmail}
          </a>
        </p>
      </div>
      <div className="column">
        <img
          style={{ marginTop: "1rem" }}
          src="./ZS_logo.png"
          className="App-logoZS"
          alt="Zand-Software"
        ></img>
      </div>
      <div className="column">
        <p style={{ marginTop: "1rem" }}>This app is a React project.</p>
        <p>Used:</p>
        <ul>
          <li>_React</li>
          <li>_Router</li>
          <li>_Hooks & Links</li>
          <li>_useState Hook</li>
          <li>_useEffect Hook</li>
          <li>_JSON Server</li>
          <li>_Axios API Requests</li>
          <li>_Custom_Hooks</li>
          <li>_Context API</li>
          <li>_useContext Hook</li>
          <li>_DataContext Provider</li>
        </ul>
      </div>
    </main>
  );
};

export default About;
