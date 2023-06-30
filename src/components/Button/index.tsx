import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

const Button: React.FC<Props> = ({ title, type = "PRIMARY", ...rest }) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
