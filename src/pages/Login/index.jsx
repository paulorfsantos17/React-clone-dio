import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";


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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

export const Login = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Email não é valido")
        .required("Campo obrigátorio"),
      password: yup
        .string()
        .min(3, "No minímo 3 caracteres")
        .required("Campo obrigátorio"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );

      if(data.length === 1) {
        navigate('/feed')
      } else  {
        alert('Email ou senha inválido.')
      }
    } catch (error) {
      alert("Houve um erro, tente novamente.");
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                messageError={errors.email?.message}
                name="email"
                control={control}
                placeholder="E-mail"
                leftIcon={<EmailIcon sx={{ color: "#fff" }} />}
              />
              <Input
                messageError={errors.password?.message}
                name="password"
                placeholder="Digite sua senha..."
                type="password"
                control={control}
                leftIcon={<LockIcon sx={{ color: "#fff" }} />}
              />
              <Button title="Entrar" variant="primary" type="submit" />
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
