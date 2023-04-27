import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import { Header } from "../../components/Header";
import {
  Container,
  Title,
  Column,
  CreateText,
  ForgotPassword,
  Row,
  SubTitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";
import { Button } from "../../components/Button";

import { Input } from "../../components/Input";

export const Login = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Column>
          <Title>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Login</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form>
              <Input
                placeholder="E-mail"
                leftIcon={<EmailIcon sx={{ color: "#fff" }} />}
              />
              <Input
                placeholder="Digite sua senha..."
                type="password"
                leftIcon={<LockIcon sx={{ color: "#fff" }} />}
              />
              <Button title="Entrar" variant="prymary" />
            </form>
            <Row>
              <ForgotPassword>Esqueci minha senha.</ForgotPassword>
              <CreateText>Criar conta.</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
