import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {};

const Input: React.FC<Props> = ({ ...rest }) => {
  const { COLORS } = useTheme();
  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
};

export default Input;
