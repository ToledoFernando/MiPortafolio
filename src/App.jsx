import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import { useEffect, useRef } from "react";

function App() {
  const xd = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", paralax);

    function paralax(e) {
      const move = xd.current;
      let moving_value = move.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 250;
      let y = (e.clientY * moving_value) / 250;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  });

  return (
    <>
      <NavBar />
      <main>
        <Home mov={xd} />
        <About />
      </main>
    </>
  );
}

export default App;
