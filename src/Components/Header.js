import React from "react";
import myimage from "../assets/myimage.png";

export default function Header() {
  return (
    <header className="header">
      <div className="text-center mb-4">
        <img src={myimage} alt="me" className="rounded-circle profile-img" />
      </div>
      <h1>MACHMOUM Hajar</h1>
      <h2>Étudiante ingénieur en 3ème année ENSAJ</h2>
    </header>
  );
}
