import "./App.scss";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Main from "./components/Main/Main.tsx";
import { HeaderContent, HeroContent, MainContent } from "./constants/copyright";

function App() {
  return (
    <>
      <Header HeaderContantProp={HeaderContent} />
      <Hero HeroContnentProps={HeroContent} />
      <Main MainContnentProps={MainContent}/>
    </>
  );
}

export default App;
