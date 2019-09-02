import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Container } from "../components";
import { Hero } from "../components";
import { Subtitle } from "../components";
import { Title } from "../components";

const stories = storiesOf("Layout|Hero", module);

stories.add("Basic", () => (
  <Hero bold color="primary" size="medium">
    <Hero.Head>Head</Hero.Head>
    <Hero.Body>
      <Container>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
      </Container>
    </Hero.Body>
    <Hero.Foot>Foot</Hero.Foot>
  </Hero>
));
