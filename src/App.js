import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./components/screens/Home";
import { ContextWrapper } from "./components/shared/ContextWrapper";
import { Footer } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";

function App() {
  const [errors, setErrors] = useState({});
  const [showSearch, setSearch] = useState(false);
  const [inputs, setInputs] = useState({ emailAddress: "" });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(false);
    if (!errors.emailError && inputs.emailAddress) {
      setSuccess(true);
    }
  }, [errors, inputs]);

  const onEmailSubscribe = (errorState) => {
    setErrors({ ...errors, emailError: errorState });
  };

  const setInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const toggleSearch = () => {
    setSearch(!showSearch);
  };

  return (
    <ContextWrapper.Provider value={errors}>
      <Navbar showSearch={showSearch} toggleSearch={toggleSearch} />
      <div className="App">
        <HomePage />
      </div>
      <Footer
        onEmailSubscribe={onEmailSubscribe}
        success={success}
        setInput={setInput}
      />
    </ContextWrapper.Provider>
  );
}

export default App;
