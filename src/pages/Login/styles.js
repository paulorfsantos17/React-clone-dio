import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-size: 1.5rem;
  font-weight: 700;
  font-style: normal;
  width: 320px;
  margin-bottom: 22px;
  line-height: 44px;

  color: #fff;
`;
export const TitleLogin = styled.p`
  font-family: "Open Sans";
  font-size: 2rem;
  font-weight: 700;
  font-style: normal;
  width: 320px;
  margin-bottom: 22px;
  line-height: 44px;
  color: #fff;
`;

export const SubTitleLogin = styled.p`
  font-family: "Open Sans";
  font-size: 1.1rem;
  font-weight: 400;
  font-style: normal;
  width: 320px;
  margin-bottom: 35px;
  line-height: 25px;
  color: #fff;
`;

export const ForgotPassword = styled.p`
  font-family: "Open Sans";
  font-size: .7rem;
  font-weight: 700;
  font-style: normal;
  line-height: 19px;

  color: #E5E044;
`;

export const CreateText = styled.p`
  font-family: "Open Sans";
  font-size: .7rem;
  font-weight: 700;
  font-style: normal;
  line-height: 19px;

  color: #E23DD7;
`;
