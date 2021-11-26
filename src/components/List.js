import React from 'react'

const List = () => {
  return (
    <>
      <div className="list-box">
      <div className="home"><a href="/"><i className="fas fa-mosque"></i></a></div>
      <div className="c-title"><h1>Jannatdagi darajangizni oshiring</h1></div>
        <div className="list-content">
          <div class="box1">
            <h3>Ism</h3>
            <h3>Tasbeh</h3>
            <h3>Soni</h3>
          </div>
        </div>
        <div className="input-content">
          <ul>
            <li> 
              <h4>Otabek Abdurakhmonov</h4>
              <h4>Subhanallah</h4>
              <h4>100</h4>
            </li>
            <li> 
              <h4>Muslimbek Yuldashev</h4>
              <h4>Sallallahu Alaihi Wasallam</h4>
              <h4>400</h4>
            </li>
            <li> 
              <h4>Muhammad Halimjonov</h4>
              <h4>Subhanallahi Wa Bihamdihi</h4>
              <h4>578</h4>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  )
}

export default List
