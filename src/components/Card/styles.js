import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
`;

export const Imagebackground = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
      margin-left: 12px;
    }

    h4{
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 25px;
      color: #fff;
    }

    p{
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: .8rem;
      line-height: 16px;
      color: #fff;
    } 
  `;


export const HasInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 25px;
    color: #fff;
    margin-bottom: 12px;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 16px;
    color: #fff;
  }
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 25px;
    color: #fff;
    margin-bottom: 12px;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 16px;
    color: #fff;
  }
`;
