//

import React from "react";

function MessageForm({ onSubmit }) {
  const handleOptionClick = (option) => {
    onSubmit(option);
  };

  return (
    <div className="option-container">
      <div className="option" onClick={() => handleOptionClick("Option 1")}>
        Option 1
      </div>
      <div className="option" onClick={() => handleOptionClick("Option 2")}>
        Option 2
      </div>
      <div className="option" onClick={() => handleOptionClick("Option 3")}>
        Option 3
      </div>
      <div className="option" onClick={() => handleOptionClick("Option 4")}>
        Option 4
      </div>
    </div>
  );
}

export default MessageForm;
