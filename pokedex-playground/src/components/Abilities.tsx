import styled from "@emotion/styled/macro";
import React from "react";
import { useAbilities } from "../hooks/useAbilities";
import { Ability, Color } from "../types";
import { mapColorToHex } from "../utils";

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const Base = styled.div`
  margin-top: 32px;
`;

const ListItem = styled.li`
  display: flex;
`;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  list-style: none;
  ${ListItem} + ${ListItem} {
    margin-top: 12px;
  }
`;

const Label = styled.span`
  flex: 1 0 30%;
  text-transform: capitalize;
  color: #374151;
  font-size: 12px;
  font-weight: bold;
`;

const Description = styled.span`
  flex: 1 0 70%;
  font-weight: 400;
  font-size: 12px;
  color: #374151;
  word-wrap: break-word;
`;

interface Props {
  abilities: Array<Ability>;
  color?: Color;
}

export const Abilities: React.FC<Props> = ({
  abilities,
  color,
}): JSX.Element => {
  const results = useAbilities(abilities);
  return (
    <Base>
      <Title color={mapColorToHex(color?.name)}>Abilities</Title>
      <List>
        {results.map(
          ({ data }, idx) =>
            data && (
              <ListItem>
                <Label>{data.data.name}</Label>
                <Description>{data.data.effect_entries[0].effect}</Description>
              </ListItem>
            )
        )}
      </List>
    </Base>
  );
};
