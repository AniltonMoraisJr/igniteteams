import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, FilterStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

const Filter: React.FC<Props> = ({ title, isActive, ...rest }) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Filter;
