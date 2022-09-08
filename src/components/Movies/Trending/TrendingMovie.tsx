import React from "react";
import MovieIcn from "../../../assets/icon-category-movie.svg";

export interface IMovie {
  movie: {
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
}

const TrendingMovie: React.FC<IMovie> = (props) => {
  return (
    <article className="trending-movie">
      <img
        src={props.movie.thumbnail.trending.small}
        alt={props.movie.title}
        className="movie-img"
      />
      <div className="movie-infos">
        <div className="secondary-infos">
          <span>{props.movie.year}</span>
          <div className="dot"></div>
          <img src={MovieIcn} alt="Icon" />
          <span>{props.movie.category}</span>
          <div className="dot"></div>
          <span>{props.movie.rating}</span>
        </div>
        <h3 className="movie-title">{props.movie.title}</h3>
      </div>
    </article>
  );
};

export default React.memo(TrendingMovie);
