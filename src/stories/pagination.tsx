import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { SIZES } from "./knobs";

import { Pagination } from "../components";

const stories = storiesOf("Components|Pagination", module);

stories.add("Basic", () => (
  <Pagination size={select("Size", SIZES, "medium")}>
    <Pagination.Prev onClick={action("prev")} children={text("Prev", "Prev")} />
    <Pagination.Next onClick={action("next")} children={text("Next", "Next")} />
    <Pagination.List>
      <Pagination.Item>
        <Pagination.Link onClick={action("1")} children="1" />
      </Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>
        <Pagination.Link onClick={action("4")} children="4" />
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link onClick={action("5")} children="5" current />
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link onClick={action("6")} children="6" />
      </Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>
        <Pagination.Link onClick={action("9")} children="9" />
      </Pagination.Item>
    </Pagination.List>
  </Pagination>
));
