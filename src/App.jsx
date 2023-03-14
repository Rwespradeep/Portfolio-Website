import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import css from "./styles/app.module.scss";
import Expertise from "./components/Expertise/Expertise";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Works />
      <Portfolio />
      <Footer />

      {/* <Router>
        <Route path="/expertise" Component={Expertise} />
        <Route path="/works" Component={Works} />
        <Route path="/portfolio" Component={Portfolio} />
      </Router> */}
    </div>
  );
};

export default App;
