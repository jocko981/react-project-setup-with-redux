import axios from "axios";
import history from "../history";

const API_URLS = {
    FETCH_ALL_POSTS: "/posts",
    FETCH_SELECTED_POST: "/post/", // + ${id} of a post
}
// dispatch Types:
export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const FETCH_SELECTED_POST = "FETCH_SELECTED_POST";

// example function
export const fetchAllPosts = () => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_ALL_POSTS);

    dispatch({ type: FETCH_ALL_POSTS, payload: response.data });
};