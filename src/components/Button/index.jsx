import React from 'react'
import { ButtonContainer } from './styles'

export const Button = ({title, variant, onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}
