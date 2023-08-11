import React from "react";
import userProfile from "../../assets/posts/userProfile.jpg";

import { FiMessageSquare, FiTrash } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const repliedComment = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 p-3 bg-[#F2F2F5] rounded-lg">
      <img
        src={userProfile}
        alt="user profile"
        className="w-9 h-9 object-fill object-center rounded-full"
      />
      <div className="flex flex-1 flex-col">
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm font-Poppins">
          {comment.user.name}
        </h5>
        <span className="text-gray-500 opacity-70 text-xs font-Recursive">
          {new Date(comment.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="mt-[10px] text-dark-soft font-Roboto text-sm">
            {comment.desc}
          </p>
        )}
        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center flex-wrap min-[390px]:flex-nowrap gap-x-4 text-sm mt-3 mb-1 font-Roboto text-[#8f8f8f]">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button
                className="flex items-center space-x-2"
                onClick={() => deleteComment(comment._id)}
              >
                <FiTrash className="w-4 h-auto" />
                <span>Delete</span>
              </button>
              <button
                className="flex items-center space-x-2"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
              >
                <FaEdit className="w-4 h-auto" />
                <span>Edit</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, repliedComment, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}

        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={comment._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                logginedUserId={logginedUserId}
                comment={reply}
                deleteComment={deleteComment}
                updateComment={updateComment}
                replies={[]}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
