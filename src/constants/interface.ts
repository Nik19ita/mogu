export interface IHeaderContnentProps {
  nav: {
    aboutUs: string;
    cases: string;
    feedback: string;
  };
  button: string;
}

export interface IHeroContnentProps {
  h1: string;
  paragraf: string;
  spans: {
    span_1: string;
    span_2: string;
    span_3: string;
  };
  input: string;
}

interface MainBlock {
  h2: string;
  p: string;
}

interface MainBlockPlus  {
  h2: string;
  p: string;
  span_1: string;
  span_2: string;
  span_3: string;
}

export interface IMainContnentProps {
  block_1: MainBlock;
  block_2: MainBlock;
  block_3: MainBlockPlus;
  block_4: MainBlock;
  block_5: MainBlock;
}
