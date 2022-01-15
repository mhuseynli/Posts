export function SET_POSTS(state, payload) {
  state.allPosts = payload;
}

export function SET_SINGLE_POST(state, payload) {
  state.singlePost = payload;
}

export function CLEAR_SINGLE_POST(state) {
  state.singlePost = {};
}
