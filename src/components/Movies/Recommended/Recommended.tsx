import React, { useState, useEffect } from "react";
import { Movie } from "../Trending/Trending";
import data from "../../../data.json";
import TrendingMovie from "../Trending/TrendingMovie";

const Recommended: React.FC = () => {
  const [recommended, setRecommended] = useState<any>([]);

  useEffect(() => {
    const recommendedMovies = data.filter(
      (movie) => movie.isBookmarked !== true
    );
    console.log(recommendedMovies);
    setRecommended(recommendedMovies);
  }, []);

  //console.log(recommended);

  return (
    <section id="recommended" className="recommended-section">
      <h2 className="recommended-title">Recommended for you</h2>
      <div className="recommended-grid">
        {/*         {recommended
          ? recommended.map((movie: Movie) => {
              return (
                <TrendingMovie {...movie} key={Math.random().toString()} />
              );
            })
          : ""} */}
      </div>
    </section>
  );
};

export default Recommended;
