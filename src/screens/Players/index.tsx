import React, { useState } from "react";

import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { FlatList } from "react-native";
import PlayerCard from "@components/PlayerCard";

const Players: React.FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["Rodrigo", "Rio", "Stargaz"]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          style={{ width: "80%" }}
          data={[
            "Time A",
            "Time B",
            "Time C",
            "Time D",
            "Time E",
            "Time F",
            "Time G",
            "Time H",
          ]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={(player) => {
              console.log(player);
            }}
          />
        )}
      />
    </Container>
  );
};

export default Players;
