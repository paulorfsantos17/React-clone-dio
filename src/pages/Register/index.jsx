import React from "react";
import { Header } from "../../components/Header";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

import {
  Container,
  Column,
  Title,
  TitleLogin,
  SubTitleLogin,
  Wrapper,
  TextTerms,
  SingIn,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Register = () => {
  const navigate = useNavigate();
  const schema = yup
  .object({
    name: yup
    .string()
    .required("Campo obrigátorio"),
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
  const handleClickSignIn = () => {
    navigate("/login");
  };

  
  const onSubmit = async (formData) => {
    try {
      const id  = Math.floor(Date.now() * Math.random()).toString(36);
      console.log(id)
      const user = {...formData, id}
      api.post('users', user)
      navigate('/feed')
    } catch (error) {
      alert('Tivemos problema ao cadastrar')
    }
  };
  return (
    <>
      <Header />
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
            <TitleLogin>Comece agora Gratis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                placeholder="Nome Completo"
                messageError={errors?.name?.message}
                control={control}
                leftIcon={<PersonIcon sx={{ color: "#8647AD" }} />}
              />
              <Input
                name="email"
                placeholder="E-mail"
                messageError={errors?.email?.message}
                control={control}
                leftIcon={<EmailIcon sx={{ color: "#8647AD" }} />}
              />
              <Input
                name="password"
                placeholder="Password"
                messageError={errors?.password?.message}
                control={control}
                leftIcon={<LockIcon sx={{ color: "#8647AD" }} />}
              />

              <Button title="Criar minha conta" variant="primary" type='submit'/>
            </form>
            <TextTerms>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </TextTerms>
            <SingIn onClick={handleClickSignIn}>
              Já tenho conta. <span> Fazer login</span>
            </SingIn>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
