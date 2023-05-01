import React from "react";
import {PictureProfile} from '../PictureProfile'

import {
  Container,
  Menu,
  MenuRight,
  Row,
  SearchInputContent,
  Wrapper,
  Input,
} from "./styles";
import Logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const Header = ({ auth }) => {
  const navigate = useNavigate()
  
  const handleClickSignIn = () => {
    navigate('/login')
  }
  const handleClickRegister = () => {
    navigate('/register')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo da Dio" />
          {auth ? (
            <>
              <SearchInputContent>
                <Input placeholder="Buscar..." />
              </SearchInputContent>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {auth ? (
            <>
            <PictureProfile picture='https://github.com/paulorfsantos17.png'/>
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" onClick={handleClickRegister}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};
