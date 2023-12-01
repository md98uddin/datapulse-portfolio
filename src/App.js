import "./App.css";
import { HomePage } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/shared/Footer";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      {/* needs routing for different page  */}
      {/* <HomePage /> */}
      {/* <AboutUs /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
