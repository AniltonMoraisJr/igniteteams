import React from "react";
import { View } from "react-native";

import { Container, Icon, Name } from "./styles";
import ButtonIcon from "@components/ButtonIcon";

type Props = {
  name: string;
  onRemove: (name: string) => void;
};

const PlayerCard: React.FC<Props> = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={() => onRemove(name)}
      />
    </Container>
  );
};

export default PlayerCard;
