import { storiesOf } from "@storybook/react";
import React from "react";

import { Table } from "../components";

const stories = storiesOf("Elements|Table", module);

stories.add("Basic", () => (
  <Table.Container>
    <Table bordered fullwidth hoverable striped>
      <thead>
        <tr>
          <th>Person</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Paul</td>
        </tr>
        <tr>
          <td>George</td>
        </tr>
        <tr>
          <td>Rigno</td>
        </tr>
      </tbody>
    </Table>
  </Table.Container>
));
