import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  createNewComment,
  deleteComment,
  updateComment,
} from "../../services/index/comments";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const CommentsContainer = ({
  classname,
  logginedUserId,
  comments,
  postSlug,
}) => {
  const [affectedComment, setAffectedComment] = useState(null);
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
    useMutation({
      mutationFn: ({ token, desc, slug, parent, replyOnUser }) => {
        return createNewComment({ token, desc, slug, parent, replyOnUser });
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["article", postSlug]);
      },
    });

  const { mutate: mutateUpdateComment } = useMutation({
    mutationFn: ({ token, desc, commentId }) => {
      return updateComment({ token, desc, commentId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["article", postSlug]);
    },
  });

  const { mutate: mutateDeleteComment } = useMutation({
    mutationFn: ({ token, commentId }) => {
      return deleteComment({ token, commentId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["article", postSlug]);
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
    mutateUpdateComment({
      token: userState.userInfo.token,
      desc: value,
      commentId,
    });
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    mutateDeleteComment({ token: userState.userInfo.token, commentId });
  };

  return (
    <div className={`${classname}`}>
      {logginedUserId && (
        <CommentForm
          btnLabel="Comment"
          formSubmitHandler={(value) => addCommentHandler(value)}
          loading={isLoadingNewComment}
        />
      )}

      <div className="space-y-4 mt-8">
        <h2 className="text-xl md:text-2xl font-medium">All Comments</h2>
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
