import React from "react";
import { TouchableOpacityProps, View } from "react-native";

import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {};

const ButtonIcon: React.FC<Props> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
};

export default ButtonIcon;
