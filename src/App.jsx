import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import { useEffect, useRef } from 'react';

function App() {

  // const xd = useRef();

  

  // useEffect(()=>{
  //   document.addEventListener("mousemove", paralax)
        
      
  //     function paralax(e){
  //       const move = xd.current;
  //         var moving_value = move.getAttribute("data-value");
  //         var x = (e.clientX * moving_value) / 250;
  //         var y = (e.clientY * moving_value) / 250;
  //         move.style.transform = `translateX(${x}px) translateY(${y}px)`;}
      
  //   ;
    
  // })

  return (
    <div>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
