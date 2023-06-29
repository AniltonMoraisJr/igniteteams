import React from "react";

import Header from "@components/Header";
import { Container } from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";

const Groups: React.FC = () => {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  );
};

export default Groups;
