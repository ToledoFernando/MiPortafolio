import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
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
    <div>
      <NavBar />
      <Home mov={xd} />
      <About />
    </div>
  );
}

export default App;
