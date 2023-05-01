import React from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import { Column, Container, Title, TitleHighLight } from "./styles";
import { UserInfo } from "../../components/UserInfo";

export const Feed = () => {
  return (
    <>
      <Header auth={true}/>
      <Container>
        <Column flex={3}>
          <Title>FEED</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight>
            #RANKING TOP 5 DA SEMANA
          </TitleHighLight>
          <UserInfo
            name="Paulo Santos"
            image="https://github.com/paulorfsantos17.png"
            percetual={35}
          />
          <UserInfo
            name="Paulo Santos"
            image="https://github.com/paulorfsantos17.png"
            percetual={60}
          />
          <UserInfo
            name="Paulo Santos"
            image="https://github.com/paulorfsantos17.png"
            percetual={50}
          />
          <UserInfo
            name="Paulo Santos"
            image="https://github.com/paulorfsantos17.png"
            percetual={90}
          />
        </Column>
      </Container>
    </>
  );
};
