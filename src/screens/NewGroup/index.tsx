import React, { useState } from "react";
import { Container, Content, Icon } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
const NewGroup: React.FC = () => {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();
  const handleNew = async () => {
    try {
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          value={group}
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
};

export default NewGroup;
