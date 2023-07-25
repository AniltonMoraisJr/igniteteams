import React, { useState, useCallback } from "react";

import Button from "@components/Button";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";
import { groupsGetAll } from "@storage/group/groupGetAll";

const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroups = () => {
    navigation.navigate("new");
  };

  const fetchGroups = useCallback(async () => {
    try {
      const data: string[] = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useFocusEffect(() => {
    fetchGroups();
  });

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroups} />
    </Container>
  );
};

export default Groups;
