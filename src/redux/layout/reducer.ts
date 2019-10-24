import { Reducer } from 'redux';
import { Actions, ActionTypes } from './actions';

export interface Toast {
  display: boolean;
  message: string;
  status: string;
  forceDismiss?: boolean;
}

export interface ReducerState {
  uiLoading: boolean;
  toast: Toast;
}

const initialState: ReducerState = {
  uiLoading: false,
  toast: {
    display: false,
    message: '',
    status: '',
    forceDismiss: false,
  },
};

export const layoutReducer: Reducer<ReducerState, Actions> = (state: ReducerState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        // sets the loading boolean at this scope
        [`${action.scope}Loading`]: action.loading,
      };
    case ActionTypes.DISPLAY_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          display: true,
          status: action.status,
          message: action.message,
          forceDismiss: action.forceDismiss,
        },
      };
    case ActionTypes.DISMISS_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          display: false,
          message: '',
          status: '',
          forceDismiss: false,
        },
      };
    default:
      return state;
  }
};
