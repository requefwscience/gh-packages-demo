import React, { useEffect } from 'react';
import * as Styled from './Toast.styled';

const Toast: React.FC<Props> = ({
  type = DisplayType.Full,
  position = DisplayPosition.Top,
  show,
  error = false,
  persistent = false,
  timer = 5,
  closable = false,
  onClose,
  children,
  className,
}) => {
  useEffect(() => {
    if (show && !persistent && timer) {
      const timeoutId = setTimeout(onClose, timer * 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [show, persistent, timer]);

  return (
    <Styled.Toast
      className={className}
      type={type}
      position={position}
      active={show}
      error={error}
    >
      <Styled.ToastContent>{children}</Styled.ToastContent>

      {closable && (
        <Styled.ToastClose>
          <Styled.ToastCloseButton data-testid="close-button" onClick={onClose}>
            <i className="icon-Close" />
          </Styled.ToastCloseButton>
        </Styled.ToastClose>
      )}
    </Styled.Toast>
  );
};

export enum DisplayType {
  Full = 'full',
  Side = 'side',
}

export enum DisplayPosition {
  Top = 'top',
  Bottom = 'bottom',
}

export interface Props {
  show: boolean; // displays (or not) the toast
  closable?: boolean; // displays (or not) the close button
  onClose: React.MouseEventHandler; // callback to run when toast hides
  error?: boolean; // sets the toast color to red
  persistent?: boolean; // sets if it stays displayed until closed
  timer?: number; // number in seconds to close it automatically
  children?: React.ReactNode; // contents of the toast
  type?: DisplayType; // display type for the toast
  position?: DisplayPosition; // display position for the toast
  className?: string; // className to be applied from the outside
}

export default Toast;
