import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import AboutOnam from "./components/AboutOnam";
import Mahabali from "./components/Mahabali";
import TenDays from "./components/TenDays";
import Pookalam from "./components/Pookalam";
import Sadya from "./components/Sadya";
import BoatRace from "./components/BoatRace";
import Traditions from "./components/Traditions";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
import Footer from "./components/Footer";

function AppRoute() {
  return (
    <div className="bg-[#FFF8E7] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Countdown />
      <AboutOnam />
      <Mahabali />
      <TenDays />
      <Pookalam />
      <Sadya />
      <BoatRace />
      <Traditions />
      <Gallery />
      <Wishes />
      <Footer />
      {/* give next set of code */}
    </div>
  );
}

export default AppRoute;