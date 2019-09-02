import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Box } from "../components";
import { Subtitle } from "../components";
import { Tile } from "../components";
import { Title } from "../components";

const stories = storiesOf("Layout|Tiles", module);

stories.add("Basic", () => (
  <>
    <Tile ancestor>
      <Tile parent>
        <Tile child>
          <Box>
            <Title>One</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child>
          <Box>
            <Title>Two</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child>
          <Box>
            <Title>Three</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child>
          <Box>
            <Title>Four</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
    </Tile>

    <Tile ancestor>
      <Tile vertical size={9}>
        <Tile>
          <Tile parent>
            <article className="tile is-child box">
              <Title>Five</Title>
              <Subtitle>Subtitle</Subtitle>
            </article>
          </Tile>
          <Tile vertical size={8}>
            <Tile>
              <Tile parent>
                <article className="tile is-child box">
                  <Title>Six</Title>
                  <Subtitle>Subtitle</Subtitle>
                </article>
              </Tile>
              <Tile parent>
                <article className="tile is-child box">
                  <Title>Seven</Title>
                  <Subtitle>Subtitle</Subtitle>
                </article>
              </Tile>
            </Tile>
            <Tile parent>
              <article className="tile is-child box">
                <Title>Eight</Title>
                <Subtitle>Subtitle</Subtitle>
              </article>
            </Tile>
          </Tile>
        </Tile>
        <Tile>
          <Tile parent size={8}>
            <article className="tile is-child box">
              <Title>Nine</Title>
              <Subtitle>Subtitle</Subtitle>
            </article>
          </Tile>
          <Tile parent>
            <article className="tile is-child box">
              <Title>Ten</Title>
              <Subtitle>Subtitle</Subtitle>
            </article>
          </Tile>
        </Tile>
      </Tile>
      <Tile parent>
        <article className="tile is-child box">
          <div className="content">
            <Title>Eleven</Title>
            <Subtitle>Subtitle</Subtitle>
          </div>
        </article>
      </Tile>
    </Tile>

    <Tile ancestor>
      <Tile parent>
        <article className="tile is-child box">
          <Title>Twelve</Title>
          <Subtitle>Subtitle</Subtitle>
        </article>
      </Tile>
      <Tile parent size={6}>
        <article className="tile is-child box">
          <Title>Thirteen</Title>
          <Subtitle>Subtitle</Subtitle>
        </article>
      </Tile>
      <Tile parent>
        <article className="tile is-child box">
          <Title>Fourteen</Title>
          <Subtitle>Subtitle</Subtitle>
        </article>
      </Tile>
    </Tile>
  </>
));
