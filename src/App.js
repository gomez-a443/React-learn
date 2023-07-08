import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Contacts from "./components/Contacts";
import Copy from "./components/Copy";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Slider />
        <About />
        <Sponsors />
      </main>
      <Contacts />
      <Copy />
    </>
  );
}

export default App;
