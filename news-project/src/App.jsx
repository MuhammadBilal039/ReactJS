import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./pages/News";

function App() {
  return (
    <>
      <Navbar className="sticky top-0 z-20" />
      <Category className="py-10 sticky top-15 z-10 bg-base-100" />
      <News className="pb-10" />
      <Footer />
    </>
  );
}

export default App;
