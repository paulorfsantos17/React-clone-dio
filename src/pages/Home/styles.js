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
`

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-size: 2rem;
  font-weight: 700;
  font-style: normal;
  width: 320px;
  margin-bottom: 22px;
  line-height: 44px;

  color: #fff;
`

export const TitleHighLight = styled.span`
  color: #E41050;
`

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  width: 420px;
  margin-bottom: 22px;
  line-height: 22px;

  color: #fff;
`