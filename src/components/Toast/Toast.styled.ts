import styled, { css } from 'styled-components';
import { DisplayType, DisplayPosition } from './Toast';

interface ToastProps {
  type: DisplayType;
  position: DisplayPosition;
  active: boolean;
  error: boolean;
}

export const Toast = styled.div<ToastProps>`
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  background-color: lightsalmon;
  color: white;
  font-size: 14px;
  word-break: break-all;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;

  ${(props) =>
    props.type === DisplayType.Full &&
    css<ToastProps>`
      right: 0;
      left: 0;

      ${(props) =>
        props.position === DisplayPosition.Top &&
        css`
          top: 0;
        `}

      ${(props) =>
        props.position === DisplayPosition.Bottom &&
        css`
          bottom: 0;
        `}
    `}

  ${(props) =>
    props.type === DisplayType.Side &&
    css<ToastProps>`
      max-width: 500px;
      width: 100%;
      right: 30px;
      border-radius: 3px;

      ${(props) =>
        props.position === DisplayPosition.Top &&
        css`
          top: 30px;
        `}

      ${(props) =>
        props.position === DisplayPosition.Bottom &&
        css`
          bottom: 30px;
        `}
    `}

  ${(props) =>
    props.active &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  ${(props) =>
    props.error &&
    css`
      background-color: lightcoral;

      ${ToastCloseButton} {
        background-color: coral;
      }
    `}
`;

export const ToastContent = styled.div`
  min-height: 26px;
  display: flex;
  align-items: center;
`;

export const ToastClose = styled.div`
  padding-left: 15px;
  align-self: flex-start;
`;

export const ToastCloseButton = styled.button`
  padding: 8px;
  display: flex;
  border: none;
  border-radius: 999px;
  color: white;
  background-color: salmon;
  font-size: 10px;

  &:hover {
    cursor: pointer;
  }
`;
