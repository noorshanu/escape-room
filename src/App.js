import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import About from "./section/About";
import Cards from "./section/Cards";
import Hero from "./section/Hero";
import Partners from "./section/Partners";
import Roadmap from "./section/Roadmap";

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Chart/>
   <Roadmap/>
   <Partners/>

    </>
  );
}

export default App;
