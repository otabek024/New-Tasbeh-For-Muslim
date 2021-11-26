import React, { useState } from "react";
import Footer from "./Footer";

const Counter = () => {
  
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  


  return (
    <>
      <div className="counter-container">
        {/* <button>
          <a href="/">Back</a>
        </button> */}
        <div className="home"><a href="/"><i className="fas fa-mosque"></i></a></div>
        <div className="c-title"><h1>Jannatdagi darajangizni oshiring</h1></div>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>subhanallah</option>
          <option value="1">alhamdulillah</option>
          <option value="2">allohu akbar</option>
          <option value="3">astaghfirullah wa atubu ilaih</option>
          <option value="4">subhanallahi wa bihamdihi</option>
          <option value="6">sallallahu alaihi wasallam</option>
      </select>
        <div class="count-box">
          <h1 className="value">{value}</h1>
          <div className="counter-btns">
            <button className="btn btn-secondary" onClick={reset}>O'chirish</button>
            <button className="btn btn-secondary" onClick={() => setValue(value + 1)}>Qoshish</button>
          </div>
         <a href="/list">
         <button type="submit" className="btn btn-success save">Saqlash</button>
         </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Counter;
