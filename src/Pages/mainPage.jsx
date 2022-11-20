import React from "react";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div data-aos="fade-up" className="mb-5">
            <h2 className="text-dark">
              KOMPLEKSOWE USŁUGI REMONTOWO-BUDOWLANE I ELEWACYJNE, KAMIL GILL
            </h2>
            <hr />
            <div className="d-lg-flex">
              <p className="fs-5">
                Doskonale rozumiemy potrzeby współczesnych konsumentów oraz ich
                oczekiwania w zakresie prac dotyczących metamorfozy wnętrz.
                Działamy na rynku usług budowlanych i remontowych od dawna w tym
                czasie pod naszym profesjonalnym okiem dokonano na terenie
                Warmii i Mazur oraz okolic wielu udanych modernizacji. Dzięki
                zdobytemu doświadczeniu i bogatej wiedzy współpracujących z
                firmą fachowców możemy zapewnić profesjonalne usługi remontowe
                zarówno mieszkań i domów prywatnych, jak i lokali użytkowych,
                sklepów, biur, miejsc publicznych oraz elewacji i dachów.
                Towarzyszymy Państwu na każdym etapie projektu, począwszy od
                stworzenia dopasowanego do indywidualnych potrzeb planu
                architektonicznego, poprzez zakup najlepszej jakości materiałów,
                aż do terminowej i co najważniejsze, rzetelnej realizacji
                usługi.
              </p>
              <div className="col-lg-4 ms-3 ">
                <img
                  data-aos="slide-left"
                  className="rounded ms-auto img-fluid w-100"
                  src="P1.jpg"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="mb-5 overflow-hidden">
            <div className="d-lg-flex">
              <div className="col-lg-4 me-3">
                <img
                  data-aos="slide-right"
                  className="rounded ms-auto img-fluid w-100"
                  src="P3.jpg"
                />
              </div>
              <p className="fs-5">
                Przeprowadzamy kompleksowe remonty całych budynków lub wybranych
                przez Państwa pomieszczeń: salonów, kuchni oraz łazienek.
                Działamy zarówno w Morągu jak i okolicznych miastach województwa
                Warmińsko-Mazurksiego. Gwarantujemy pełne zaangażowanie w każde
                zlecenie oraz spektakularny efekt końcowy. Zajmiemy się
                malowaniem, flizowaniem czy renowacją podłóg, pracami
                elewacyjnymi, remontami dachów, łazienek, pomieszczeń użytkowych
                etc. Zmodernizujemy stare instalacje i zbudujemy nowoczesne
                pomieszczenia.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="mb-5 d-lg-flex">
            <div>
              <p className="fs-5">
                Doradzimy w kwestiach kolorystyki, układu oraz wyboru
                poszczególnych elementów, tak aby wykonany przez nas remont
                wnętrza lub elewacji budynku był jak najbliższy Państwa
                wyobrażeniom.
              </p>
              <p className="fs-5">
                Świadczymy usługi remontowe na terenie Morąga i okolic.
              </p>
            </div>
            <div className="col-lg-4  ms-3">
              <img
                data-aos="slide-left"
                className="roundedimg-fluid w-100"
                src="P2.jpg"
              />
            </div>
          </div>
        </div>
        <div id="kotakt" data-aos="fade" className="container mb-4">
          <h2>Kontakt</h2>
          <hr />
          <div className="d-flex">
            <i className="bi bi-geo-alt text-primary me-2 fs-5"></i>
            <span>
              <div>Usługi remontowo-budowlane Kamil Gill</div>
              <div>Słonecznik 14-300 Morąg</div>
            </span>
          </div>
          <span className="d-flex align-items-center">
            <i className="bi bi-envelope me-2 fs-5 text-primary"></i>
            <div>gill.kamil83@gmail.com</div>
          </span>
          <div>
            <i className="bi bi-telephone text-primary me-2 fs-5"></i>+48 696
            286 009
          </div>
        </div>
      </div>
    );
  }
}
