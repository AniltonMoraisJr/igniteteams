import React, { useState, useCallback } from "react";

import Button from "@components/Button";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";
import { groupsGetAll } from "@storage/group/groupGetAll";
import Loading from "@components/Loading";

const Groups: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroups = () => {
    navigation.navigate("new");
  };

  const handleOpenGroup = useCallback((group: string) => {
    navigation.navigate("players", { group });
  }, []);

  const fetchGroups = async () => {
    setIsLoading(true);
    try {
      const data: string[] = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Turmas", "Não foi possível listar as turmas");
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroups} />
    </Container>
  );
};

export default Groups;
