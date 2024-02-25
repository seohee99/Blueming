import instance from "./base";

// 게시글
export async function fetchBoardList() {
  const response = await instance.get(`/assignment`);
  return response;
}

export async function fetchBoardDetail(boardId) {
  const response = await instance.get(`/assignment/${boardId}`);
  return response;
}

export async function fetchBoardWrite() {
  const response = await instance.post(`/assignment/write`);
  return response;
}

export async function fetchBoardEdit(boardId, newBoardData) {
  const response = await instance.put(
    `/assignment/${boardId}/edit`,
    newBoardData
  );
  return response.data;
}

export async function fetchBoardDelete(boardId) {
  const response = await instance.delete(`/assignment/${boardId}`);
  return response.data;
}

// 댓글
// TODO
export async function fetchBoardCommentList(boardId) {
  const response = await instance.get(`/assignment/${boardId}/comment`);
  return response;
}

export async function fetchBoardCommentWrite(boardId, commentData) {
  const response = await instance.post(
    `/assignment/${boardId}/comment`,
    commentData
  );
  return response.data;
}

export async function fetchBoardCommentDelete(boardId, commentId) {
  const response = await instance.delete(
    `/assignment/${boardId}/comment/${commentId}`
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
    `/notice/${boardId}/comment/${commentId}`,
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
    `/notice/${boardId}/comment/${commentId}/commentReply/${commentReplyId}`
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
