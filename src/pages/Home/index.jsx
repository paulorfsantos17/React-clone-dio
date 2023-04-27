import React from "react";

import { Header } from "../../components/Header";
import imgMain from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import { Button } from "../../components/Button";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title='Comece seu Futuro' variant='prymary'/>
        </div>
        <div>
          <img src={imgMain} alt="figure main" />
        </div>
      </Container>
    </>
  );
};
