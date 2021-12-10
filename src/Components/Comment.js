import React, { useState } from "react";
import stylse from "../assets/styles/Comment.module.css";
import { v4 } from "uuid";
import ShowComment from "./ShowComment";
const Comment = () => {
  const today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const namehandler = (event) => {
    setName((event.target.name = event.target.value));
  };
  const texthandler = (event) => {
    setText((event.target.name = event.target.value));
  };
  const submmithandler = (event) => {
    event.preventDefault();
    if (name.length === 0 || text.length === 0) {
      setError("Name and Comment can not be empty !!!");
    } else {
      setPost([...post, { name, text, date: date, time: time }]);
      setText("");
      setName("");
      setError(" ");
    }
  };
  return (
    <div className={stylse.formstylse}>
      <div>
        {post.map((item) => (
          <ShowComment key={v4} data={item} />
        ))}
      </div>

      <form>
        <div>
          <input
            type="text"
            value={name}
            name="name"
            onChange={namehandler}
            placeholder="Enter your name"
          />
        </div>
        <div className={stylse.textarea}>
          <textarea
          cols="30"
          rows="10"
          value={text}
          name="text"
          onChange={texthandler}
          placeholder="Comment..."
        />  
        </div>
        
      
        <button onClick={submmithandler}>send</button>
        <h4>{error}</h4>
      </form>
    </div>
  );
};

export default Comment;
