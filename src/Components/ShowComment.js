import React from "react";
import stylse from "../assets/styles/Comment.module.css";
const ShowComment = ({ data }) => {
  return (
    <div className={stylse.container}>
      <div className={stylse.main}>
        <h2>Name :</h2>
        <p>{data.name}</p>
        <span className={stylse.date}>
          Date : {data.date} {data.time}
        </span>
      </div>
      <div className={stylse.commenttext}>
        <h2>Comment</h2><span>:</span>
        <p>{data.text}</p>
      </div>
      <hr/>
    </div>
  );
};

export default ShowComment;
