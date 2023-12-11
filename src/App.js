import "./App.css";
import { HomePage } from "./components/screens/Home";
import { Footer } from "./components/shared/Footer";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Footer />
      {/* needs routing for different page  */}
    </div>
  );
}

export default App;
