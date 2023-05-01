import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  border-bottom: 1px solid #fff;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  width: 100%;
  color: #fff;
  border:0;
  height: 30px;
`

export const TextError = styled.p`
  font-size: .8rem;
  color: red;
  font-weight: 700;
  margin-bottom: 12px;
`