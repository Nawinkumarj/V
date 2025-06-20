import { useEffect } from "react";
import { assets } from "../assets/assets";
import { Helmet } from "react-helmet";


const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-hovercard-main");

    cards.forEach((card) => {
      const blur = card.querySelector(".blurred-color");
      const trackArea = card.querySelector(".service-hovercards");

      const handleMouseMove = (e) => {
        const rect = trackArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        blur.style.left = `${x}px`;
        blur.style.top = `${y}px`;
      };

      const handleMouseEnter = () => {
        blur.style.opacity = 1;
      };

      const handleMouseLeave = () => {
        blur.style.opacity = 0;
      };

      trackArea.addEventListener("mousemove", handleMouseMove);
      trackArea.addEventListener("mouseenter", handleMouseEnter);
      trackArea.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        trackArea.removeEventListener("mousemove", handleMouseMove);
        trackArea.removeEventListener("mouseenter", handleMouseEnter);
        trackArea.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
    <Helmet>
        <title>Vcraftyu Company - A Digital Studio</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Vcraftyu Company - A Digital Studio" />
      </Helmet>
    <div className="service-container">
      <div className="service-main">
        <div className="service-hovercard-main item-1">
          <div className="blurred-color" />
          <div className="service-hovercards">
            <div className="service-content">
              <img
                className="service-content-img grid-img1"
                src={assets.web}
                alt="Web Development"
              />
              <div className="service-content-text">
                <h1>Web Design & Development</h1>
                <p>
                  Navigate the complexities of the digital landscape with our
                  expert IT consultancy and advisory services, tailored to
                  optimize your business technology for success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-hovercard-main item-2">
          <div className="blurred-color" />
          <div className="service-hovercards">
            <div className="service-content content-reverse">
              <div className="service-img-section">
                <img
                  className="service-content-img second-img mobile-design"
                  src={assets.works3}
                  alt="App Development"
                />
              </div>
              <div className="service-content-text">
                <h1>App Development</h1>
                <p>
                  Navigate the complexities of the digital landscape with our
                  expert IT consultancy and advisory services, tailored to
                  optimize your business technology for success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-hovercard-main item-3">
          <div className="blurred-color" />
          <div className="service-hovercards">
            <div className="service-content ">
              <img
                className="service-content-img second-img   "
                src={assets.works1}
              />
              <div className="service-content-text">
                <h1>Branding and SEO</h1>
                <p>
                  Navigate the complexities of the digital landscape with our
                  expert IT consultancy and advisory services, tailored to
                  optimize your business technology for success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-hovercard-main item-4">
          <div className="blurred-color" />
          <div className="service-hovercards">
            <div className="service-content content-reverse content-card-1">
              <img
                className="service-content-img second-img"
                src="https://educationalvoice.co.uk/wp-content/uploads/2024/11/v2-ljikk-3c2li.jpg.webp"
              />
              <div className="service-content-text">
                <h1>Shopify & Wordpress</h1>
                <p>
                  Navigate the complexities of the digital landscape with our
                  expert IT consultancy and advisory services, tailored to
                  optimize your business technology for success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-hovercard-main item-5">
          <div className="blurred-color" />
          <div className="service-hovercards">
            <div className="service-content ">
              <img
                className="service-content-img second-img"
                src="https://educationalvoice.co.uk/wp-content/uploads/2024/11/v2-ljikk-3c2li.jpg.webp"
              />
              <div className="service-content-text">
                <h1>E-Commerce</h1>
                <p>
                  Navigate the complexities of the digital landscape with our
                  expert IT consultancy and advisory services, tailored to
                  optimize your business technology for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
