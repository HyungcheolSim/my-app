import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "심형철",
    comment: "안녕하세요 devsim입니다.",
  },
  {
    name: "유재석",
    comment: "안녕하세요 NAL U 입니다.",
  },
  {
    name: "강민경",
    comment: "안녕하세요 리액트 재밌습니까?",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
