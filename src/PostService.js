import axios from "axios";
import { format } from "timeago.js";
import moment from "moment";

const url = "http://localhost:4000/links";
moment.locale("es");
class PostService {
  // Get Posts
  static getPosts(endpoint) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + endpoint);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            id: new String(post.Id_art),
            title: new String(post.Title),
            date: new String(moment(post.Create_at, "YYYYMMDD").fromNow())
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static getUpdatePost(endpoint) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + endpoint);
        const data = res.data;
        resolve(
          data.map(editid => ({
            ...editid
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static getCategory(endpoint) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + endpoint);
        const data = res.data;
        resolve(
          data.map(category => ({
            ...category
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // Create Post
  static insertPost(data) {
    return axios.post(url + "/newPost", {
      data
    });
  }

  // Edit Post
  static editPost(data) {
    return axios.post(url + "/editPost", {
      data
    });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
