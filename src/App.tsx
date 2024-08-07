import "./App.scss";
import Cases from "./components/Cases/Cases.tsx";
import Mogu from "./components/Mogu/Mogu.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import {
  CasesContent,
  HeaderContent,
  HeroContent,
  MainContent,
  PictureContent,
  FooterContent,
} from "./constants/copyright.ts";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header HeaderContentProp={HeaderContent} />
      <Hero HeroContnentProps={HeroContent} PictureContent={PictureContent} />
      <Mogu />
      <About MainContnentProps={MainContent} PictureContent={PictureContent} />
      <Cases
        CasesContnentProps={CasesContent}
        PictureContent={PictureContent}
      />
      <Footer
        FooterContnentProps={FooterContent}
        PictureContent={PictureContent}
      />
    </>
  );
}

export default App;
