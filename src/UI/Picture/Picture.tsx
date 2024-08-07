import { FC } from "react";
import { IimgAttr, ISources } from "../../constants/interface";
import './Picture.scss'

interface IPicture {
  sources?: ISources[];
  imgAttr: IimgAttr;
  className?: string;
}

export const Picture: FC<IPicture> = ({ sources, imgAttr, className }) => {
  return (
    <>
      {sources && imgAttr && (
        <>
          <picture>
            {sources.map((source, index) => {
              return (
                <source
                  srcSet={source.srcSet}
                  media={source.media}
                  key={index}
                />
              );
            })}

            <img className={className} src={imgAttr.src} alt={imgAttr.alt} />
          </picture>
        </>
      )}
      {!sources && imgAttr && (
        <img className={className} src={imgAttr.src} alt={imgAttr.alt} />
      )}
    </>
  );
};
