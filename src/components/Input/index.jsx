import { IconContainer, InputContainer, InputText, TextError } from "./styles";
import { Controller } from "react-hook-form";

export const Input = ({ leftIcon, name, control, messageError, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          render={({ field }) => <InputText {...field} {...rest} />}
          name={name}
          control={control}
          rules={{ required: true }}
        />
      </InputContainer>
      {messageError ? <TextError>{messageError}</TextError> : null}
    </>
  );
};
