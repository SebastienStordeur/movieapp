import React from "react";
import MediaCard from "../Medias/MediaCard";
import { IMedias } from "../Medias/Medias";

const BookmarkSection: React.FC<IMedias> = (props) => {
  return (
    <section className="bookmark-section">
      <h2 className="bookmark-title">{props.title}</h2>
      <div className="bookmark-grid">
        {props.medias.map((movie) => {
          return <MediaCard movie={movie} key={Math.random().toString()} />;
        })}
      </div>
    </section>
  );
};

export default BookmarkSection;
