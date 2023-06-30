import React from "react";
import { Container, Message } from "./styles";

type Props = {
  message: string;
};
const ListEmpty: React.FC<Props> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ListEmpty;
