import { IMainContnentProps } from "../../constants/interface";
import ArrowDown from "../../assets/img/about/people-mogu.svg?react";
import Artical_1 from "../../assets/img/about/artical-1.svg?react";
import Artical_2 from "../../assets/img/about/artical-2.svg?react";
import Artical_3 from "../../assets/img/about/artical-3.svg?react";
import ArrowRight from "../../assets/img/about/arrow-right.svg?react";
import Between from "../../assets/img/about/between.svg?react";
import "./Main.scss";

function Main({
  MainContnentProps,
}: {
  MainContnentProps: IMainContnentProps;
}) {
  return (
    <section className="about">
      <ArrowDown className="about__people-mogu" />

      <div className="container about__container">
        <div className="about__content">
          <div className="about__top-block">
            <article className="about__artical artical-1">
              <Artical_1 />
              <h2 className="artical-1__h2">{MainContnentProps.block_1.h2}</h2>
              <p className="artical-1__p">{MainContnentProps.block_1.p}</p>
            </article>

            <article className="about__artical artical-2">
              <h2 className="artical-2__h2">{MainContnentProps.block_2.h2}</h2>
              <p className="artical-2__p">{MainContnentProps.block_2.p}</p>
              <Artical_2 />
            </article>
          </div>

          <article className="about__artical artical-3">
            <h2>{MainContnentProps.block_3.h2}</h2>
            <p>{MainContnentProps.block_3.p}</p>
            <Artical_3 />
            <span>{MainContnentProps.block_3.span_1}</span>
            <ArrowRight />
            <span>{MainContnentProps.block_3.span_2}</span>
            <span>{MainContnentProps.block_3.span_3}</span>
          </article>

          <div className="about__bottom-block">
            <article className="about__artical artical-4">
              <h2>{MainContnentProps.block_4.h2}</h2>
              <p>{MainContnentProps.block_4.p}</p>
            </article>

            <Between />

            <article className="about__artical artical-5">
              <h2>{MainContnentProps.block_5.h2}</h2>
              <p>{MainContnentProps.block_5.p}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
