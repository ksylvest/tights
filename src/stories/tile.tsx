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
        <Tile child tag={Box}>
          <Title>One</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child tag={Box}>
          <Title>Two</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child tag={Box}>
          <Title>Three</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child tag={Box}>
          <Title>Four</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
    </Tile>

    <Tile ancestor>
      <Tile vertical size={9}>
        <Tile>
          <Tile parent>
            <Tile child tag={Box}>
              <Title>Five</Title>
              <Subtitle>Subtitle</Subtitle>
            </Tile>
          </Tile>
          <Tile vertical size={8}>
            <Tile>
              <Tile parent>
                <Tile child tag={Box}>
                  <Title>Six</Title>
                  <Subtitle>Subtitle</Subtitle>
                </Tile>
              </Tile>
              <Tile parent>
                <Tile child tag={Box}>
                  <Title>Seven</Title>
                  <Subtitle>Subtitle</Subtitle>
                </Tile>
              </Tile>
            </Tile>
            <Tile parent>
              <Tile child tag={Box}>
                <Title>Eight</Title>
                <Subtitle>Subtitle</Subtitle>
              </Tile>
            </Tile>
          </Tile>
        </Tile>
        <Tile>
          <Tile parent size={8}>
            <Tile child tag={Box}>
              <Title>Nine</Title>
              <Subtitle>Subtitle</Subtitle>
            </Tile>
          </Tile>
          <Tile parent>
            <Tile child tag={Box}>
              <Title>Ten</Title>
              <Subtitle>Subtitle</Subtitle>
            </Tile>
          </Tile>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child tag={Box}>
          <Title>Eleven</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
    </Tile>

    <Tile ancestor>
      <Tile parent>
        <Tile child tag={Box}>
          <Title>Twelve</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
      <Tile parent size={6}>
        <Tile child tag={Box}>
          <Title>Thirteen</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child tag={Box}>
          <Title>Fourteen</Title>
          <Subtitle>Subtitle</Subtitle>
        </Tile>
      </Tile>
    </Tile>
  </>
));
