export const REQUEST_PINS = 'REQUEST_PINS';
export const RECEIVE_PINS = 'RECEIVE_PINS';

function requestPins() {
  return {
    type: REQUEST_PINS
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_PINS,
    pins: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPins());

  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}