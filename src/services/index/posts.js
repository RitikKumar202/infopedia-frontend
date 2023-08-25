import axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get("/api/post");
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
