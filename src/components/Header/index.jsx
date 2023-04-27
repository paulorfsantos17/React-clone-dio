import React from "react";

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

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo da Dio" />
          <SearchInputContent>
            <Input placeholder="Buscar..." />
          </SearchInputContent>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  );
};
