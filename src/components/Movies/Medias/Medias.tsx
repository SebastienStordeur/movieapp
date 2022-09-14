import React, { useState, useEffect } from "react";
import { NotTrendingMovie } from "../../../pages/Movies";
import MediaCard from "./MediaCard";

export interface IMedias {
  title: string;
  value?: string | undefined;
  medias:
    | {
        title: string;
        thumbnail: {
          /*           trending: {
            small: string;
            large: string;
          }; */
          regular: {
            small: string;
            medium: string;
            large: string;
          };
        };
        year: number;
        category: string;
        rating: string;
        isBookmarked: boolean;
        isTrending: boolean;
      }[];
}

const Medias: React.FC<IMedias> = (props) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  console.log("value", props.value);

  useEffect(() => {
    if (props.value !== undefined) {
      if (props.value.length > 0) {
        setIsEmpty(() => false);
      } else {
        setIsEmpty(() => true);
      }
    }
  }, [props]);

  return (
    <section id="recommended" className="recommended-section">
      {/*       {isEmpty && <h2 className="recommended-title">{props.title}</h2>}
      {!isEmpty && (
        <h2 className="recommended-title">
          Found {props.medias.length} results for ‘{props.value}’
        </h2>
      )} */}
      <div className="recommended-grid">
        {props.medias
          ? props.medias.map((movie: NotTrendingMovie) => {
              return <MediaCard movie={movie} key={Math.random().toString()} />;
            })
          : ""}
      </div>
    </section>
  );
};

export default Medias;
