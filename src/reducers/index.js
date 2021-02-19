// 12の15:52あたりから
const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = {title: action.title, body: action.body};
      const length = state.length;
      const id = state.length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, {id, ...event}];
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENT':
      return [];
    default:
      return state;
  }
}

export default events;