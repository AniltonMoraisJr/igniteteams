import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.SM}px`};
  color: ${(props) => props.theme.COLORS.WHITE};
`;
