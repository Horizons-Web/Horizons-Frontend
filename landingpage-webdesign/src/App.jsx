import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero  from "./components/Hero";
import Guide from "./components/Guide";
import Contact from "./components/Contact";
import Product  from "./components/Product";

function App() {

  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <Product/>
      <Guide/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
