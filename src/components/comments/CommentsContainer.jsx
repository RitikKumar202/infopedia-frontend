import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { createNewComment } from "../../services/index/comments";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const CommentsContainer = ({
  classname,
  logginedUserId,
  comments,
  postSlug,
}) => {
  const [affectedComment, setAffectedComment] = useState(null);
  const userState = useSelector((state) => state.user);

  const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
    useMutation({
      mutationFn: ({ token, desc, slug, parent, replyOnUser }) => {
        return createNewComment({ token, desc, slug, parent, replyOnUser });
      },
    });

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    mutateNewComment({
      desc: value,
      parent,
      replyOnUser,
      token: userState.userInfo.token,
      slug: postSlug,
    });
    setAffectedComment(null);
  };

  const updateCommentHandler = (value, commentId) => {
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {};

  return (
    <div className={`${classname}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
        loading={isLoadingNewComment}
      />
      <div className="space-y-4 mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
