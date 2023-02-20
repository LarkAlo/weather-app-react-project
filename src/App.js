import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="El Paso" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://lambent-stardust-e12e68.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kimberly Cossio
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LarkAlo/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
