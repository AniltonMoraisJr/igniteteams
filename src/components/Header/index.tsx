import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

const Header: React.FC<Props> = ({ showBackButton = false }) => {
  const navigation = useNavigation();

  const handleGoback = () => {
    navigation.navigate("groups");
  };

  return (
    <Container>
      {showBackButton && navigation.canGoBack() && (
        <BackButton onPress={handleGoback}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
