import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import cn from "classnames";
import type { FC } from "react";

import { Container } from "../components";
import { Hero } from "../components";
import { Subtitle } from "../components";
import { Title } from "../components";

import { COLORS, SIZES } from "./knobs";

const stories = storiesOf("Layout|Hero", module);

stories.add("Basic", () => (
  <Hero
    bold={boolean("Bold", false)}
    color={select("Color", COLORS, "info")}
    size={select("Size", SIZES, "medium")}
  >
    <Hero.Head children={text("Head", "Head")} />
    <Hero.Body>
      <Container>
        <Title children={text("Title", "Title")} />
        <Subtitle children={text("Subtitle", "Subtitle")} />
      </Container>
    </Hero.Body>
    <Hero.Head children={text("Foot", "Foot")} />
  </Hero>
));
