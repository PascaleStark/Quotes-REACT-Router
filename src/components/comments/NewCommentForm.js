import { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./NewCommentForm.module.css";

import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const { sendRequest, error, status } = useHttp(addComment);
  const commentTextRef = useRef();
  console.log(commentTextRef);

  const { onAddComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      //display comment --> fetch the comments
      onAddComment();
    }
  }, [status, onAddComment, error]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const commentData = {
      quoteId: props.quoteId,
      commentData: { text: commentTextRef.current.value },
    };
    // optional: Could validate here

    // send comment to server
    sendRequest(commentData);
    commentTextRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
