import styled,{css} from "styled-components";


export const ButtonContainer = styled.button`
  background-color: #565656;
  border:none;
  border-radius: 1.4rem;
  position: relative;

  font-family: 'Open Sans';
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 95%;
  
  &:hover {
    opacity: .6;
    cursor: pointer;
  }

  ${({ variant }) =>
    variant === "prymary" &&
    css`
      min-width: 167px;
      height: 33px;

      background-color: #E41050;

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #E41050;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height : calc(100% + 10px);
        border-radius: 1.4rem;
      }
    `}
`;
