import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";
import { Delete } from "./delete";
import { Modal } from "./modal";
import { ModalBackground } from "./modal_background";
import { ModalCard } from "./modal_card";
import { ModalCardBody } from "./modal_card_body";
import { ModalCardFoot } from "./modal_card_foot";
import { ModalCardHead } from "./modal_card_head";
import { ModalCardTitle } from "./modal_card_title";
import { ModalClose } from "./modal_close";

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
      <ModalBackground />
      <ModalCard>
        <ModalCardHead>
          <ModalCardTitle>Modal</ModalCardTitle>
          <Delete />
        </ModalCardHead>
        <ModalCardBody>Lorem Ipsum</ModalCardBody>
        <ModalCardFoot>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </ModalCardFoot>
      </ModalCard>
      <ModalClose size="medium" />
    </Modal>
  ),
};
