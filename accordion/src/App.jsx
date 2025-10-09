import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/faqs.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data.faqs))
      .catch((err) => console.error("Failed to load FAQs", err));
  }, []);

  return (
    <div className="faq">
      <h1>FAQ </h1>
      <Accordion faqs={faqs} />
    </div>
  );
}

export default App;