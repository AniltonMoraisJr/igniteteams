import React from "react";
import { View } from "react-native";

import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

const Highlight: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Highlight;
