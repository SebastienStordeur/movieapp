import React, { useState, useEffect } from "react";
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
  const [inTrending, setInTrending] = useState<any>([]);
  useEffect(() => {
    const trendingMovies = data.filter((movie) => (movie.isTrending = true));
    setInTrending(trendingMovies.slice(0, 5));
  }, []);

  return (
    <section id="trending" className="trending-section">
      <h2 className="trending-title">Trending</h2>
      <div className="trending-grid">
        {inTrending
          ? inTrending.map((movie: Movie) => {
              return (
                <TrendingMovie {...movie} key={Math.random().toString()} />
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Trending;
