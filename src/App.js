import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import About from "./section/About";
import Footer from "./section/Footer";
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
  <Footer/>

    </>
  );
}

export default App;
