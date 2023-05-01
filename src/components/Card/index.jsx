import React from "react";
import  {FiThumbsUp} from 'react-icons/fi'
import backgroundPost from '../../assets/banner.png'

import {
  CardContainer,
  Content,
  HasInfo,
  Imagebackground,
  UserInfo,
  PostInfo,
} from "./styles";
import { PictureProfile } from "../PictureProfile";

export const Card = () => {
  return (
    <CardContainer>
      <Imagebackground src={backgroundPost}/>
      <Content>
        <UserInfo>
          <PictureProfile picture="https://github.com/paulorfsantos17.png"/>
          <div>
            <h4>Pablo Henrique</h4>
            <p>
              Há 8 minutos
            </p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito o curso de html e css no boot camp ... <strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS</h4>
          <p><FiThumbsUp /> 16</p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
