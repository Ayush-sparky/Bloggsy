export const initialCommentState = {
  comments: null,
  loading: false,
  error: null,
};

export const commentReducer = (state, action) => {
  switch (action.type) {
    case "POST_OR_FETCH_COMMENTS_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "POST_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };

    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        comments: null,
        loading: false,
        error: action.payload,
      };

    case "POST_COMMENT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
