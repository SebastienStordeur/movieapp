import React from "react";
import { IMovie } from "../Trending/TrendingMovie";
import MovieIcn from "../../../assets/icon-category-movie.svg";
import Bookmark from "../../../assets/icon-bookmark-empty.svg";
import Bookmarked from "../../../assets/icon-bookmark-full.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const MediaCard: React.FC<IMovie> = (props) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <article className="recommended-movie">
      {isAuthenticated && (
        <button className="bookmark">
          <img src={Bookmark} alt="Bookmark this media" />
        </button>
      )}
      <div className="image-movie">
        <picture>
          <source
            srcSet={props.thumbnail.regular.large}
            media="(min-width:1024px)"
          />
          <source
            srcSet={props.thumbnail.regular.medium}
            media="(min-width:768px)"
          />
          <img src={props.thumbnail.regular.small} alt={props.title} />
        </picture>
      </div>
      <div className="movie-infos">
        <div className="secondary-infos">
          <span>{props.year}</span>
          <div className="dot"></div>
          <img src={MovieIcn} alt="Icon" />
          <span>{props.category}</span>
          <div className="dot"></div>
          <span>{props.rating}</span>
        </div>
        <h3 className="movie-title">{props.title}</h3>
      </div>
    </article>
  );
};

export default MediaCard;
