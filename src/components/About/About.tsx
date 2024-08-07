/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMainContnentProps } from "../../constants/interface";
import { FC } from "react";
import { Picture } from "../../UI/Picture/Picture";
import ArrowRight from "../../assets/img/about/arrow-right.svg?react";
import "./About.scss";

interface IMain {
  MainContnentProps: IMainContnentProps;
  PictureContent: any;
}

export const Main: FC<IMain> = ({ MainContnentProps, PictureContent }) => {
  return (
    <>
      <section className="about" id="about">
        <div className="container about__container">
          <div className="about__content">
            <div className="about__top-block">
              <article className="about__artical artical-1">
                <Picture
                  className="artical-1__img"
                  imgAttr={PictureContent.about.artical_1.imgAttr}
                  sources={PictureContent.about.artical_1.sources}
                />
                <h2 className="artical-1__h2">
                  {MainContnentProps.block_1.h2}
                </h2>
                <p className="artical-1__p">{MainContnentProps.block_1.p}</p>
              </article>

              <article className="about__artical artical-2">
                <h2 className="artical-2__h2">
                  {MainContnentProps.block_2.h2}
                </h2>
                <p className="artical-2__p">{MainContnentProps.block_2.p}</p>
                <Picture
                  imgAttr={PictureContent.about.artical_2.imgAttr}
                  sources={PictureContent.about.artical_2.sources}
                />
              </article>
            </div>

            <article className="about__artical artical-3">
              <h2 className="artical-3__h2">{MainContnentProps.block_3.h2}</h2>
              <p className="artical-3__p">{MainContnentProps.block_3.p}</p>
              <Picture
                className="artical-3__img"
                imgAttr={PictureContent.about.artical_3.imgAttr}
                sources={PictureContent.about.artical_3.sources}
              />
              <div className="artical-3__span-block">
                <span className="artical-3__span">
                  {MainContnentProps.block_3.span_1}
                </span>
                <ArrowRight />
                <span className="artical-3__span">
                  {MainContnentProps.block_3.span_2}
                </span>
                <ArrowRight />
                <span className="artical-3__span">
                  {MainContnentProps.block_3.span_3}
                </span>
              </div>
            </article>

            <div className="about__bottom-block ">
              <article className="about__artical artical-4">
                <h2 className="artical-4__h2">
                  {MainContnentProps.block_4.h2}
                </h2>
                <p className="artical-4__p">{MainContnentProps.block_4.p}</p>
              </article>

              <Picture
                className="about__bottom-block-img"
                imgAttr={PictureContent.about.between.imgAttr}
                sources={PictureContent.about.between.sources}
              />

              <article className="about__artical artical-5">
                <h2 className="artical-5__h2">
                  {MainContnentProps.block_5.h2}
                </h2>
                <p className="artical-5__p">{MainContnentProps.block_5.p}</p>
              </article>
            </div>

            <Picture
              imgAttr={PictureContent.about.separator.imgAttr}
              sources={PictureContent.about.separator.sources}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
