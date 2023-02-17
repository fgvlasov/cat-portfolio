import ContactFormOne from "../forms/ContactFormOne";

const AboutTwo = () => {
  return (
    <div className="axil-about-area ax-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5 col-md-12 col-12">
            <div className="contact-form-wrapper">
              <div className="axil-contact-form contact-form-style-1">
                <h3 className="title">Получите нашу бесплатную консультацию</h3>
                <ContactFormOne/>
                <div className="callto-action-wrapper text-center">
                  <span className="text">Или позвоните нам</span>
                  <span>
                    <i className="fal fa-phone-alt"></i>{" "}
                    <a href={`tel:${process.env.PHONE}`}>{process.env.PHONE_VISUAL}</a>
                  </span>
                </div>

                <div className="shape-group">
                  <div className="shape shape-01">
                    <i className="icon icon-shape-07"></i>
                  </div>
                  <div className="shape shape-02">
                    <i className="icon icon-shape-16"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-2 col-md-12 col-12 mt_md--40 mt_sm--40">
            <div className="axil-about-inner">
              <div className="section-title text-start">
                <span className="sub-title extra08-color">About us</span>
                <h2 className="title">
                  Почему брендинг <br /> имеет значение?
                </h2>
                <p className="subtitle-2">
				Успех брендинга обеспечивают качество товара, точность и понятность образа для целевой аудитории бренда сила рекламных воздействий и др. маркетинговых мероприятий, репутация компании-производителя. 
                </p>
              </div>

              <div
                id="accordion"
                className="axil-accordion mt--15 mt_md--15 mt_sm--15"
              >
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="fal fa-compress-wide"></i>
                        <span>Стратегия</span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
					Эффективная стратегия бренда подчеркивает уникальную идентичность вашего бренда и необходима для долгосрочного успеха.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="fal fa-code"></i>
                        <span>Дизайн</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
					Бренд-дизайн учитывает целый комплекс знаний о потребителе и его потребностях, реализует его в дизайне бренда, символике, цветовой гамме, фирменных шрифтах компании и тем самым мотивирует неосознанный потребительский выбор, является орудием завоевания лояльности покупателей.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="fal fa-globe"></i>
                        <span>Разработка</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
					Разработка бренда или brandbuilding – это целый комплекс мероприятий, включающий разработку стратегии позиционирования, нейминг, дизайн логотипа, фирменного стиля и упаковки, оформление мест продаж и т. п.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
