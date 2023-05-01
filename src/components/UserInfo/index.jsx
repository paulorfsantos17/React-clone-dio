import React from "react";
import { Container, NameText, Progress } from "./styles";
import { PictureProfile } from "../PictureProfile";

export const UserInfo = ({name, image, percetual}) => {
  return (
    <Container>
      <PictureProfile picture={image}/>
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percetual}/>
      </div>
    </Container>
  );
};
