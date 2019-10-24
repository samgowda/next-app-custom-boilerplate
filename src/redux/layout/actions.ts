import TypedAction from '../../types';
export enum ActionTypes {
  DISPLAY_TOAST = 'giphy-app/layout/DISPLAY_TOAST',
  DISMISS_TOAST = 'giphy-app/layout/DISMISS_TOAST',
  SET_LOADING = 'giphy-app/layout/SET_LOADING',
}

export const displayToast = (message: string, forceDismiss?: boolean) => ({
  type: ActionTypes.DISPLAY_TOAST,
  message,
  status: 'success',
  forceDismiss,
});

export const displayErrorToast = (error: string, forceDismiss?: boolean) => ({
  type: ActionTypes.DISPLAY_TOAST,
  message: error,
  status: 'error',
  forceDismiss,
});

export const dismissToast = () => ({
  type: ActionTypes.DISMISS_TOAST,
});

export const setLoading = (
  scope: string,
  loading: boolean,
  meta = { feature: ''},
) => ({
  type: ActionTypes.SET_LOADING,
  scope,
  loading,
  meta,
});

export type Actions =
  | TypedAction<ReturnType<typeof displayToast>, ActionTypes.DISPLAY_TOAST>
  | TypedAction<ReturnType<typeof displayErrorToast>, ActionTypes.DISPLAY_TOAST>
  | TypedAction<ReturnType<typeof dismissToast>, ActionTypes.DISMISS_TOAST>
  | TypedAction<ReturnType<typeof setLoading>, ActionTypes.SET_LOADING>;
