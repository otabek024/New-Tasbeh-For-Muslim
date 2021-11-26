import React, {useState} from "react";
import "../App.css";
import Footer from "./Footer";

const Home = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000)

  return (
    <>
      <div className="container-fluid masjidImg">
        <div className="container asosiy">
          <h1 className="title">
            يٰۤـاَيُّهَا الَّذِيۡنَ اٰمَنُوا اذۡكُرُوۡا اللّٰهَ ذِكۡرًا
            كَثِيۡرًا <br /> وَّ سَبِّحُوۡهُ بُكۡرَةً وَّاَصِيۡلًا
          </h1>
          <button
            type="button"
            className="btn btn-warning btn-circle"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Tasbeh Aytish
          </button>
          <h1 className="time">{ctime}</h1>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Tizimga kirish
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Ismingiz
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Familyangiz
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Familyangiz kiriting"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <a href="/counter">
                    <button type="button" className="btn btn-success text-center">
                      Boshlash
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary text-center"
                    data-bs-dismiss="modal"
                  >
                    Chiqish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
