import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa99"></ProfileCard>
      <ProfileCard title="Cortana" handle="@cortana32"></ProfileCard>
      <ProfileCard title="Siri" handle="@siri01"></ProfileCard>
    </div>
  );
}

export default App;
