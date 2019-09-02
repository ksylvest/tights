import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Pagination } from "../components";

const stories = storiesOf("Components|Pagination", module);

stories.add("Basic", () => (
  <Pagination>
    <Pagination.Prev>Prev</Pagination.Prev>
    <Pagination.Next>Next</Pagination.Next>
    <Pagination.List>
      <Pagination.Item>
        <Pagination.Link>1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>
        <Pagination.Link>4</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link current>5</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>6</Pagination.Link>
      </Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>
        <Pagination.Link>9</Pagination.Link>
      </Pagination.Item>
    </Pagination.List>
  </Pagination>
));
