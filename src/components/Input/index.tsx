import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";
import { TextInput } from "react-native-gesture-handler";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

const Input: React.FC<Props> = ({ inputRef, ...rest }) => {
  const { COLORS } = useTheme();
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
};

export default Input;
