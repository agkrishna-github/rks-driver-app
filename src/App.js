import React, { useState } from "react";

function App() {
  const [source, setSource] = useState("");
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  return (
    <div>
      <h5>Capture your image</h5>
      <div>
        {source && (
          <div className="maindiv ">
            <img src={source} alt={"snap"} className="imgdiv"></img>
          </div>
        )}
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
        />
        <label htmlFor="icon-button-file">Take a photo</label>
      </div>
    </div>
  );
}

export default App;
