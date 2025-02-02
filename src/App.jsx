import Header from "./sections/Header.jsx";
import Beranda from "./sections/Beranda.jsx";
import About from "./sections/About.jsx";
import Faq from "./sections/Faq.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./sections/Footer.jsx";
import Daftar from "./sections/Daftar.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Beranda />
      <Daftar />
      <About/>
      <Faq />
      <Contact/>
      <Footer />
    </main>
  );
};

export default App;
