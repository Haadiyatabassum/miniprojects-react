import React, { useState } from "react";

function Accordion({ faqs }) {
  const [openId, setOpenId] = useState(null);

  //function to handle toggle
  const handleToggle = (id) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="accordion">
      {faqs.map(({ id, question, answer }) => (
        <div key={id} className="accord-item">
          <div
            className="accord-question"
            onClick={() => handleToggle(id)}
          >
            {question}
          </div>
          <div className="accord-answer">
            {openId === id ? <p>{answer}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;