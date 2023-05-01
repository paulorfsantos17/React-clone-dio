import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 80%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 1rem;
  line-height: 2rem;
  color: #fff;
  margin-left: 12px;
  text-decoration: none;
`;
export const MenuRight = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 0.8rem;
  line-height: 2rem;
  color: #fff;
  margin-left: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #fff;
`;


export const SearchInputContent = styled.div`
  width: 175px;
  height: 30px;
  background-color: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  
`;

export const Input = styled.input`

    background-color: transparent;
    width: 100%;
    height: 100%;
    flex: 1;
    border: 0;
    color: #fff;
    border-radius: 8px;

  &:focus {
    outline: none;
  }


`;
