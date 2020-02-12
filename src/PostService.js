import axios from "axios";
import moment from "moment";

const url = "links";
moment.locale("es");
class PostService {
  // Get Posts

  static login(user, pass) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + endpoint);
        console.log(res);
        const data = res.data;
        resolve(
          data.map(user => ({
            ...user
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static getPosts(endpoint) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + endpoint);
        // console.log(res);
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

  static getPublicPosts(endpoint) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + endpoint);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
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

  // Create User
  static NewUser(data) {
    return axios
      .post(url + "/newUser", {
        username: data.username,
        mail: data.mail,
        password: data.password,
        repassword: data.repassword
      })
      .then(
        response => {
          return response.data;
          // console.log(response.status);
        },
        error => {
          console.log(error);
        }
      );
  }

  // Login
  static login(data) {
    return axios
      .post(url + "/login", {
        mail: data.mail,
        password: data.password
      })
      .then(
        response => {
          // console.log(response.status);
          return response.data;
        },
        error => {
          console.log(error);
        }
      );
  }

  // Logout
  static logout() {
    return axios.get(url + "/logout").then(
      response => {
        console.log(response);
        return response.data;
      },
      error => {
        console.log(error);
      }
    );
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

  // Video
  static getVideos() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/videos");
        // console.log(res);
        const data = res.data;
        resolve(
          data.map(videos => ({
            ...videos
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static getPublicVideos() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/publicvideos");
        // console.log(res);
        const data = res.data;
        resolve(
          data.map(videos => ({
            ...videos
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static NewVideo(data) {
    return axios
      .post(url + "/videos", {
        Name: data.name,
        VideoURL: data.URL
      })
      .then(
        response => {
          return response.data;
          // console.log(response.status);
        },
        error => {
          console.log(error);
        }
      );
  }

  static editVideo(data) {
    return axios.post(url + "/editVideo", {
      data
    });
  }
}

export default PostService;
