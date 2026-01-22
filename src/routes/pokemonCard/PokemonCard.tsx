import { createFileRoute } from '@tanstack/react-router'
import { Avatar, Card, Group, Image, Text } from '@mantine/core';
import classes from '../../assets/css/pokemonCard.module.css';

export const Route = createFileRoute('/pokemonCard/PokemonCard')({
  component: PokemonCard,
})


export function PokemonCard({card}:{card:PokemonCardtype}) {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Image
        src={`${card.card_image}/low.png`}
        className={classes.image}
      />

      <div className={classes.body}>
        <Text tt="uppercase" c="dimmed" fw={700} size="xs">
          technology
        </Text>
        <Text className={classes.title} mt="xs" mb="md">
          The best laptop for Frontend engineers in 2022
        </Text>
        <Group wrap="nowrap" gap="xs">
          <Group gap="xs" wrap="nowrap">
            <Avatar
              size={20}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            />
            <Text size="xs">Elsa Typechecker</Text>
          </Group>
          <Text size="xs" c="dimmed">
            •
          </Text>
          <Text size="xs" c="dimmed">
            Feb 6th
          </Text>
        </Group>
      </div>
    </Card>
  );
}