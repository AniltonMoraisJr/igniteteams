import React from "react";

import Header from "@components/Header";
import { Container } from "./styles";
import Highlight from "@components/Highlight";

const Groups: React.FC = () => {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
};

export default Groups;
