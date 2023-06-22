import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./container";
import { Hero } from "./hero";
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
      <Hero.Head>Lorem Ipsum</Hero.Head>
      <Hero.Body>
        <Container>
          <Title>Lorem Ipsum</Title>
          <Subtitle>Lorem Ipsum</Subtitle>
        </Container>
      </Hero.Body>
      <Hero.Foot>Lorem Ipsum</Hero.Foot>
    </Hero>
  ),
};
