import React, { useState, useEffect } from "react";
import { Movie } from "../Trending/Trending";
import data from "../../../data/data.json";
import MediaCard from "./MediaCard";

interface IMedias {
  title: string;
  medias?: {
    title: string;
    thumbnail: {
      trending: {
        small: string;
        large: string;
      };
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
  console.log("props", props.medias);
  /*   const [recommended, setRecommended] = useState<any>([]);

  useEffect(() => {
    const recommendedMovies = data.filter(
      (movie) => (movie.isBookmarked = true)
    );
    console.log(recommendedMovies);
    setRecommended(recommendedMovies);
  }, []); */

  //console.log(recommended);

  return (
    <section id="recommended" className="recommended-section">
      <h2 className="recommended-title">{props.title}</h2>
      <div className="recommended-grid">
        {props.medias
          ? props.medias.map((movie: Movie) => {
              return <MediaCard {...movie} key={Math.random().toString()} />;
            })
          : ""}
      </div>
    </section>
  );
};

export default Medias;
