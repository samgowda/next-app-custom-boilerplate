import * as React from 'react';

// Styles
import { StyledForceDismiss, StyledToastLayout, ToastContent } from './styles';

import X from '../uielements/icons/X';

interface Props {
  message?: string;
  display: boolean;
  status?: string;
  forceDismiss?: boolean;
  dismissToast: () => void;
}

const timedDismiss = (display, dismissToast, forceDismiss?) => {
  if (forceDismiss) {
    return;
  }
  if (display) {
    setTimeout(dismissToast, 4000);
  }
};

const Toast = ({ display, dismissToast, message, forceDismiss, status }: Props) => {
  return (
    <StyledToastLayout status={status}>
      {timedDismiss(display, dismissToast, forceDismiss)}
      <ToastContent>
        <span>{message}</span>
      </ToastContent>

      {forceDismiss && (
        <StyledForceDismiss>
          <div onClick={dismissToast}>
            <X />
          </div>
        </StyledForceDismiss>
      )}
    </StyledToastLayout>
  );
};

export default Toast;
