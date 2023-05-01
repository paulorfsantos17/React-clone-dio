import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 120px;
`

export const Title = styled.h3`
  font-family: 'Open Sans';
  font-size: 1.1rem;
  font-weight: 700;
  font-style: normal;

  margin-bottom: 24px;
  line-height: 25px;

  color: #fff;
`

export const TitleHighLight = styled.h3`
   font-family: 'Open Sans';
  font-size: 1.1rem;
  font-weight: 700;
  font-style: normal;

  margin-bottom: 24px;
  line-height: 25px;

  color: #ffffff70;
`

export const Column = styled.div`
  flex:${({flex}) => flex};
  padding-right: 24px;
`