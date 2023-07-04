import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps, View } from "react-native";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

const ButtonIcon: React.FC<Props> = ({ icon, type = "PRIMARY", ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};

export default ButtonIcon;
