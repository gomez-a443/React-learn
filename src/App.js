import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Slider />
        <About />
        <Sponsors />
      </main>
      {/* Footer */}
    </>
  );
}

export default App;
