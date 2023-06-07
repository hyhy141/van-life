import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <img
        src={require("../assets/about.png")}
        className="about_img"
        alt="about"
      />
      <section className="about_section">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <div className="about_text">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about_offer">
          <h2>
            Your destination is waiting. <br />
            Your van is ready.
          </h2>
          <button>Explore our vans</button>
        </div>
      </section>
    </>
  );
};

export default About;
