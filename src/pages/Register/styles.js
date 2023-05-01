import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleLogin = styled.p`
  font-family: "Open Sans";
  font-size: 2rem;
  font-weight: 700;
  font-style: normal;
  width: 420px;
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
export const Wrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  form {
    width: 320px;
  }
`;

export const TextTerms = styled.p`
  margin-top: 36px;
  font-family: "Open Sans";
  font-size: 1.1rem;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 12px;
  width: 320px;
  line-height: 25px;
  color: #fff;
`;

export const SingIn = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  
  span{
    color: #23dd7a
  }

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;
