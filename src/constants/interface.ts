export interface IHeaderContentProps {
  nav: {
    aboutUs: string;
    cases: string;
    feedback: string;
  };
  button: string;
}

export interface IHeroContentProps {
  h1: string;
  paragraf: string;
  spans: {
    span_1: string;
    span_2: string;
    span_3: string;
  };
  input: string;
  button: string;
  popup_1: string;
}

interface MainBlock {
  h2: string;
  p: string;
}

interface MainBlockPlus {
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

export interface ISources {
  srcSet: string;
  media: string;
}

export interface IimgAttr {
  src: string;
  alt: string;
}

export interface ICasesContentProps {
  "button 1": string;
  "button 2": string;
  "button 3": string;
  "button 4": string;
  "button 5": string;

  h2: string;
  p: string;
}

export interface IFooterContentProps {
  h2: string;
  input_1: string;
  input_2: string;
  button: string;
}
