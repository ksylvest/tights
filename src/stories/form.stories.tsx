import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { faHeart, faUpload, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form } from "..";
import { Icon } from "..";
import { Button } from "..";

const meta = {
  title: "Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: (args) => (
    <Form {...args}>
      <Form.Field>
        <Form.Label>Name:</Form.Label>
        <Form.Control icons="both">
          <Form.Input type="text" />
          <Icon alignment="left">
            <FontAwesomeIcon icon={faUser} />
          </Icon>
          <Icon alignment="right">
            <FontAwesomeIcon icon={faHeart} />
          </Icon>
        </Form.Control>
        <Form.Help>Lorem Ipsum</Form.Help>
      </Form.Field>
      <Form.Field>
        <Form.Label>About:</Form.Label>
        <Form.Control>
          <Form.Textarea />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Avatar:</Form.Label>
        <Form.Control>
          <Form.File name="File.zip">
            <Form.File.Label>
              <Form.File.Input />
              <Form.File.CTA>
                <Form.File.Icon>
                  <FontAwesomeIcon icon={faUpload} />
                </Form.File.Icon>
                Choose
              </Form.File.CTA>
              <Form.File.Name>File.zip</Form.File.Name>
            </Form.File.Label>
          </Form.File>
        </Form.Control>
      </Form.Field>
      <Form.Field grouped>
        <Form.Control>
          <Button color="info">Save</Button>
        </Form.Control>
        <Form.Control>
          <Button color="text">Cancel</Button>
        </Form.Control>
      </Form.Field>
    </Form>
  ),
};
