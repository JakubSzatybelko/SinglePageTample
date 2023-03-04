import React, { useState } from "react";
import Carousel from "../components/carusel/carusel";

const MainPage = () => {
  const [isSmallScreen, setisSmallScreen] = useState(false);
  function checkScreenSize() {
    if (window.innerWidth < 400) setisSmallScreen(true);
    if (window.innerWidth > 400) setisSmallScreen(false);
  }
  function chceckWidonwWidth() {
    window.onresize = checkScreenSize;
    console.log(isSmallScreen);
  }
  const FontSize = () => {
    return isSmallScreen ? "fs-6" : "fs-5";
  };
  return (
    <div>
      {chceckWidonwWidth()}
      <div className="container mt-5">
        <div data-aos="fade-up" className="mb-5">
          <h2 className="text-dark">O Nas</h2>
          <hr />
          <div className="d-lg-flex">
            <p className={FontSize()}>
              Witamy w [Nazwa firmy], głównym źródle wysokiej jakości okien,
              które zostały zaprojektowane tak, aby zwiększyć piękno,
              funkcjonalność i efektywność energetyczną Twojego domu lub firmy.
              Jesteśmy dumni, że możemy zaoferować szeroką gamę stylów i
              materiałów okiennych, aby zaspokoić każdy gust i budżet, od
              tradycyjnych okien drewnianych do nowoczesnych, energooszczędnych
              okien winylowych.
            </p>
            <div className="col-lg-4 ms-lg-3 ">
              <img
                data-aos="slide-left"
                className="rounded ms-auto img-fluid w-100"
                src="Pic.jpg"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="mb-5 overflow-hidden">
          <div className="d-lg-flex">
            <div className="col-lg-4 me-lg-3">
              <img
                data-aos="slide-right"
                className="rounded ms-auto img-fluid w-100"
                src="Pic.jpg"
              />
            </div>
            <p className={FontSize()}>
              W [Nazwa firmy] wierzymy, że okna to coś więcej niż tylko sposób
              na wpuszczenie światła i świeżego powietrza. Są one integralną
              częścią projektu Twojego domu lub firmy i mogą w znacznym stopniu
              wpłynąć na jego ogólny wygląd i samopoczucie. Dlatego oferujemy
              szeroką gamę stylów okiennych do wyboru, w tym jednoskrzydłowe,
              dwuskrzydłowe, skrzydłowe, przesuwne i inne. Niezależnie od tego,
              czy szukasz klasycznego, tradycyjnego wyglądu, czy czegoś bardziej
              nowoczesnego i eleganckiego, mamy cię pod opieką.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="mb-5 overflow-hidden">
          <div className="d-lg-flex">
            <p className={FontSize()}>
              Oprócz oferowania szerokiej gamy stylów, oferujemy również okna z
              różnych materiałów, w tym drewna, winylu, włókna szklanego i
              aluminium. Każdy materiał ma swoje unikalne zalety i wady, a nasi
              eksperci mogą pomóc Ci wybrać odpowiedni dla Twoich konkretnych
              potrzeb i preferencji.
            </p>
            <div className="col-lg-4 ms-lg-3">
              <img
                data-aos="slide-right"
                className="rounded ms-auto img-fluid w-100"
                src="Pic.jpg"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="mb-5 d-lg-flex">
          <div className="col-lg-4 me-lg-3">
            <img
              data-aos="slide-left"
              className="roundedimg-fluid w-100"
              src="Pic.jpg"
            />
          </div>
          <div>
            <p className={FontSize()}>
              W [Nazwa firmy] rozumiemy, że efektywność energetyczna jest ważna
              dla naszych klientów. Dlatego oferujemy szereg energooszczędnych
              okien, które pomogą Ci zaoszczędzić pieniądze na rachunkach za
              energię, a jednocześnie zmniejszyć emisję dwutlenku węgla. Nasze
              energooszczędne okna zostały zaprojektowane tak, aby zapewnić
              komfort w Twoim domu lub firmie przez cały rok, zapobiegając
              przeciągom i utrzymując stałą temperaturę.
            </p>
          </div>
        </div>
        <div id="galeria" data-aos="fade-up">
          <h2 className="text-dark">Galeria</h2>
          <hr />
          <Carousel />
        </div>
      </div>
      <div id="kontakt" data-aos="fade" className="container mb-4 mt-4">
        <h2 className="text-dark">Kontakt</h2>
        <hr />
        <div className="d-flex">
          <i className="bi bi-geo-alt text-primary me-2 fs-5"></i>
          <span>
            <div>Dakar - Darek Kołakowski</div>
            <div>xxxxxxxxxxxxx - warpuny</div>
          </span>
        </div>
        <span className="d-flex align-items-center">
          <i className="bi bi-envelope me-2 fs-5 text-primary"></i>
          <div>xxxxxxxxxxx@xxx.pl</div>
        </span>
        <div>
          <i className="bi bi-telephone text-primary me-2 fs-5"></i>+xx xxx xxx
          xxx
        </div>
      </div>
    </div>
  );
};
export default MainPage;
