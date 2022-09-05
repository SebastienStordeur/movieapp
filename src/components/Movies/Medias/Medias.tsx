import React, { useState, useEffect } from "react";
import { Movie } from "../Trending/Trending";
import data from "../../../data.json";
import MediaCard from "./MediaCard";

interface IMedias {
  title: string;
}

const Medias: React.FC<IMedias> = (props) => {
  const [recommended, setRecommended] = useState<any>([]);

  useEffect(() => {
    const recommendedMovies = data.filter(
      (movie) => (movie.isBookmarked = true)
    );
    console.log(recommendedMovies);
    setRecommended(recommendedMovies);
  }, []);

  //console.log(recommended);

  return (
    <section id="recommended" className="recommended-section">
      <h2 className="recommended-title">{props.title}</h2>
      <div className="recommended-grid">
        {recommended
          ? recommended.map((movie: Movie) => {
              return <MediaCard {...movie} key={Math.random().toString()} />;
            })
          : ""}
      </div>
    </section>
  );
};

export default Medias;
