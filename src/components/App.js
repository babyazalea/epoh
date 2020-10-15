import React from "react";
import AppRouter from "./Router";
import '../style.scss'
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <AppRouter />
      <footer>
        <span className="footer-text">&copy; {new Date().getFullYear()}</span>
        <a href="https://github.com/babyazalea" className="text-decoration-none text-reset">babyazalea</a>
      </footer>
    </>
  );
}

export default App;
