import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <img src={AlexaImage} />
      <img src={SiriImage} />

      <ProfileCard title="Alexa" handle="@alexa99"></ProfileCard>
      <ProfileCard title="Cortana" handle="@cortana32"></ProfileCard>
      <ProfileCard title="Siri" handle="@siri01"></ProfileCard>
    </div>
  );
}

export default App;
