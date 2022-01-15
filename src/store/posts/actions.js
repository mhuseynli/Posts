export async function getAllPosts({ commit }) {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    commit("SET_POSTS", posts);
  } catch (error) {
    console.log(error, "error");
  }
}

export async function getPostById({ commit }, payload) {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`);
    const post = await data.json();
    commit("SET_SINGLE_POST", post);
  } catch (error) {
    console.log(error, "error");
  }
}
