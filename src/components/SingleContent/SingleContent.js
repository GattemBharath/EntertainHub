import React from "react";
import "./singlecontent.css";
import "../../config/config";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";

import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  badge: {
    fontSize: 15,
    color: "white",
    backgroundColor: "#b928c9",
    padding: 5,
    paddingTop: 12,
    paddingBottom: 12,
  },
}));

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const classes = useStyles();
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={Math.round(vote_average * 10) / 10}
        color={vote_average > 6 ? "error" : "secondary"}
        classes={{ badge: classes.badge }}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
