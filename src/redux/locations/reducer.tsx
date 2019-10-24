import actions from './actions';
const initialState = {
  loading: false,
  error: false,
  list: [],
  meta: {},
};

export default function(state: {} = initialState, action: { type: string, list?: Array<{}>, meta?: {} }) {
  switch (action.type) {
    case actions.FETCH_LOCATIONS:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case actions.LOCATIONS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        list: action.list,
        meta: action.meta,
      });
    case actions.LOCATIONS_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    default:
      return state;
  }
}
