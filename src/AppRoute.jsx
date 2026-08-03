import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Countdown from "./pages/Countdown";
import AboutOnam from "./pages/AboutOnam";
import Mahabali from "./pages/Mahabali";
import TenDays from "./pages/TenDays";
import Pookalam from "./pages/Pookalam";
import Sadya from "./pages/Sadya";
import BoatRace from "./pages/BoatRace";
import Traditions from "./pages/Traditions";
import Gallery from "./pages/Gallery";
import Wishes from "./pages/Wishes";
import Footer from "./pages/Footer";

function AppRoute() {
  return (
    <div className="bg-[#FFF8E7] overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutOnam />
      <Countdown />
      <Mahabali />
      <TenDays />
      {/* <Pookalam /> */}
      <Sadya />
      {/* <BoatRace /> */}
      <Traditions />
      {/* <Gallery /> */}
      <Wishes />
      <Footer />
      {/* give next set of code */}
    </div>
  );
}

export default AppRoute;