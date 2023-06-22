import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "..";
import { Delete } from "..";
import { Modal } from "..";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Modal {...args}>
      <Modal.Background />
      <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>Modal</Modal.Card.Title>
          <Delete />
        </Modal.Card.Head>
        <Modal.Card.Body>Lorem Ipsum</Modal.Card.Body>
        <Modal.Card.Foot>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </Modal.Card.Foot>
      </Modal.Card>
      <Modal.Close size="medium" />
    </Modal>
  ),
};
