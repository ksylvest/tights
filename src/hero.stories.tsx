import type { Meta, StoryObj } from "@storybook/react-vite";

import { Container } from "./container";
import { Hero } from "./hero";
import { HeroBody } from "./hero_body";
import { HeroFoot } from "./hero_foot";
import { HeroHead } from "./hero_head";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

const meta = {
  title: "Hero",
  component: Hero,
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Hero {...args}>
      <HeroHead>Lorem Ipsum</HeroHead>
      <HeroBody>
        <Container>
          <Title>Lorem Ipsum</Title>
          <Subtitle>Lorem Ipsum</Subtitle>
        </Container>
      </HeroBody>
      <HeroFoot>Lorem Ipsum</HeroFoot>
    </Hero>
  ),
};
