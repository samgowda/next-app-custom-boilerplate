import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

export interface ApplicationState {
  loadingBar: any;
  layout: LayoutState;
  giphs: GiphsState;
}

// Import reducers and reducer types
import { giphsReducer, ReducerState as GiphsState } from './giphs/reducer';
import { layoutReducer, ReducerState as LayoutState } from './layout/reducer';

// Combine all reducers to a single reducer function
const rootReducer = combineReducers<ApplicationState>({
  loadingBar: loadingBarReducer,
  layout: layoutReducer,
  giphs: giphsReducer,
});

export default rootReducer;
