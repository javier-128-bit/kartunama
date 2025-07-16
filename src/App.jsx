import { useState, useEffect } from "react";
import "./index.css";

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fab ${icon}`}></i>
    </button>
  );
}
function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-facebook"></SocialButton>
        <SocialButton
          icon="fa-instagram"
          link="https://www.instagram.com/javiereles/"
        ></SocialButton>
        <SocialButton icon="fa-twitter"></SocialButton>
      </div>
      <div className="social-buttons right">
        <SocialButton icon="fa-linkedin"></SocialButton>
        <SocialButton
          icon="fa-github"
          link="https://github.com/javier-128-bit"
        ></SocialButton>
      </div>
    </>
  );
}
function Identitas(props) {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">{props.nama}</div>
      </div>
      <div className="title">{props.kerja}</div>
    </div>
  );
}
function Deskripsi(props) {
  return (
    <div className="desc">
      <p>
        A passionate Software Engineering student in 5th semester, currently
        diving deep into modern web development using{" "}
        <span style={{ fontWeight: "bold" }}>
          React.js, Laravel, and Tailwind CSS
        </span>
        . Dedicated to building responsive, efficient, and user-centered
        applications while constantly learning and experimenting with new
        technologies.
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <>
      <button>
        <div className="height">{text}</div>
      </button>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="buttons">
        <Badge text="Sistem Informasi"></Badge>
        <Badge text="Universitas Airlangga"></Badge>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header></Header>
        <Identitas
          nama="Mochamad Javier Elsyera"
          kerja="Software Engineer Enthusiast"
        ></Identitas>
      </div>
      <div className="bottom">
        <Deskripsi></Deskripsi>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
