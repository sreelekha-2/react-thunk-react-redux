const initialState = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      desc: 'Post description 1',
    },
    {
      id: 2,
      title: 'Post 2',
      desc: 'Post description 2',
    },
    {
      id: 3,
      title: 'Post 3',
      desc: 'Post description 3',
    },
  ],
};

export function postsReducer(state = initialState, actions) {
  console.log('reducer');
  switch (actions.type) {
    case 'posts':
      return { posts: state.posts };
    default:
      return state;
  }
}
