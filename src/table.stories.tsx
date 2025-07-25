import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from "./table";
import { TableContainer } from "./table_container";

const meta = {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <TableContainer>
      <Table bordered fullwidth hoverable striped {...args}>
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
    </TableContainer>
  ),
};
