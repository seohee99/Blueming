import instance from "./base";

// 게시글
export async function fetchBoardList() {
  const response = await instance.get(`/board`);
  return response;
}

export async function fetchBoardDetail(boardId) {
  const response = await instance.get(`/board/${boardId}`);
  return response;
}

export async function fetchBoardWrite(newBoardData) {
  const response = await instance.post(`/board`, newBoardData); // TODO
  return response;
}

export async function fetchBoardEdit(boardId, newBoardData) {
  const response = await instance.put(`/board/${boardId}/edit`, newBoardData);
  return response.data;
}

export async function fetchBoardDelete(boardId) {
  const response = await instance.delete(`/board/${boardId}`);
  return response.data;
}

// 댓글
// TODO
export async function fetchBoardCommentList(boardId) {
  const response = await instance.get(`/board/${boardId}/comment`);
  return response;
}

export async function fetchBoardCommentWrite(boardId, commentData) {
  const response = await instance.post(
    `/board/${boardId}/comment`,
    commentData
  );
  return response.data;
}

export async function fetchBoardCommentDelete(boardId, commentId) {
  const response = await instance.delete(
    `/board/${boardId}/comment/${commentId}`
  );
  return response.data;
}

//대댓글
export async function fetchBoardCommentReplyWrite(
  boardId,
  commentId,
  commentReplyData
) {
  const response = await instance.post(
    `/board/${boardId}/comment/${commentId}`,
    commentReplyData
  );
  return response.data;
}

export async function fetchBoardCommentReplyDelete(
  boardId,
  commentId,
  commentReplyId
) {
  const response = await instance.delete(
    `/board/${boardId}/comment/${commentId}/commentReply/${commentReplyId}`
  );
  return response.data;
}

export default {
  fetchBoardList,
  fetchBoardDetail,
  fetchBoardWrite,
  fetchBoardEdit,
  fetchBoardDelete,
  fetchBoardCommentList,
  fetchBoardCommentWrite,
  fetchBoardCommentDelete,
  fetchBoardCommentReplyWrite,
  fetchBoardCommentReplyDelete,
};
