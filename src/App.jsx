import Home from "./pages/Home";
import Equipiers from "./pages/Equipiers";
import PlanSite from "./pages/PlanSite";
import Repas from "./pages/Repas";
import Hebergement from "./pages/Hebergement";
import Exposants from "./pages/Exposants";
import Mecena from "./pages/Mecena";
import Organisation from "./pages/Organisation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const path = window.location.pathname;

  let Page;

  switch (path) {
    case "/equipiers":
      Page = Equipiers;
      break;
    case "/carte-site":
      Page = PlanSite;
      break;
    case "/repas":
      Page = Repas;
      break;
    case "/hebergement":
      Page = Hebergement;
      break;
    case "/exposants":
      Page = Exposants;
      break;
    case "/mecena":
      Page = Mecena;
      break;
    case "/organisation":
      Page = Organisation;
      break;
    case "/":
    default:
      Page = Home;
      break;
  }

  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}