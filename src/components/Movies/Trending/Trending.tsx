import React from "react";
import data from "../../../data/data.json";
import TrendingMovie from "./TrendingMovie";

export type Movie = {
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
};

const Trending: React.FC = () => {
  const trendingMovies = data.filter((movie) => movie.thumbnail.trending !== undefined);

  return (
    <section id="trending" className="trending-section">
      <h2 className="trending-title">Trending</h2>
      <div className="trending-grid">
        {trendingMovies &&
          trendingMovies.map((movie: any) => {
            return <TrendingMovie movie={movie} key={Math.random().toString()} />;
          })}
      </div>
    </section>
  );
};

export default Trending;
