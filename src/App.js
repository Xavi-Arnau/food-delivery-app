import Download from "./components/Download";
import Easy from "./components/Easy";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState, useRef } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const refFood = useRef();
  const refDownload = useRef();

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  function handleScrollToSection(ref) {
    console.log(ref);
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <Navbar
        toggleCartVisibility={toggleCartVisibility}
        handleScrollToSection={handleScrollToSection}
        refFood={refFood}
        refDownload={refDownload}
      />
      <Hero />
      <Food isCartVisible={isCartVisible} refFood={refFood} />
      <Easy />
      <Download refDownload={refDownload} />
      <Footer />
    </div>
  );
}

export default App;
