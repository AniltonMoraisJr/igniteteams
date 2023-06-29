import React from "react";

import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

const GroupCard: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
