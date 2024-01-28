import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./components/screens/Home";
import { ContextWrapper } from "./components/shared/ContextWrapper";
import { Footer } from "./components/shared/Footer";

function App() {
  const [errors, setErrors] = useState({});
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

  return (
    <ContextWrapper.Provider value={errors}>
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
