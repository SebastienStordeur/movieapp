import React from "react";

export interface IMovie {
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
}

const TrendingMovie: React.FC<IMovie> = (props) => {
  return (
    <article className="trending-movie">
      <img
        /* src={props.thumbnail.trending.small} */
        src={require("../../../assets/thumbnails/beyond-earth/trending/small.jpg")}
        alt={props.title}
        className="movie-img"
      />
      <div className="movie-infos">
        <div className="secondary-infos">
          <span>{props.year}</span>
          <span>{props.category}</span>
          <span>{props.rating}</span>
        </div>
        <h3 className="movie-title">{props.title}</h3>
      </div>
    </article>
  );
};

export default React.memo(TrendingMovie);
