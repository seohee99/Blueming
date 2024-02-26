import instance from "./base";

export async function fetchMypageBoardList(userId) {
  const response = await instance.get(`users/${userId}/boards`);
  // console.log(response);
  return response.data;
}
