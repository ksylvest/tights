import React from "react";
import type { ComponentProps, FC } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { faHeart, faUpload, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Control } from "./control";
import { Field } from "./field";
import { File } from "./file";
import { FileCTA } from "./file_cta";
import { FileIcon } from "./file_icon";
import { FileInput } from "./file_input";
import { FileLabel } from "./file_label";
import { FileName } from "./file_name";
import { Help } from "./help";
import { Icon } from "./icon";
import { Input } from "./input";
import { Label } from "./label";
import { Radio } from "./radio";
import { Select } from "./select";
import { Textarea } from "./textarea";

const Form: FC<ComponentProps<"form">> = (props) => <form {...props} />;

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
      <Field>
        <Label>Name:</Label>
        <Control icons="both">
          <Input type="text" />
          <Icon alignment="left">
            <FontAwesomeIcon icon={faUser} />
          </Icon>
          <Icon alignment="right">
            <FontAwesomeIcon icon={faHeart} />
          </Icon>
        </Control>
        <Help>Lorem Ipsum</Help>
      </Field>

      <Field>
        <Label>About:</Label>
        <Control>
          <Textarea />
        </Control>
      </Field>

      <Field>
        <Label>Avatar:</Label>
        <Control>
          <File name="File.zip">
            <FileLabel>
              <FileInput />
              <FileCTA>
                <FileIcon>
                  <FontAwesomeIcon icon={faUpload} />
                </FileIcon>
                Choose
              </FileCTA>
              <FileName>File.zip</FileName>
            </FileLabel>
          </File>
        </Control>
      </Field>

      <Field>
        <Label>Language:</Label>
        <Control>
          <Select>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </Select>
        </Control>
      </Field>

      <Field>
        <Control>
          <Checkbox>
            I agree to the <a href="#">terms</a>.
          </Checkbox>
        </Control>
      </Field>

      <Field>
        <Label>Language:</Label>
        <Control>
          <Radio>Yes</Radio>
        </Control>
      </Field>

      <Field grouped>
        <Control>
          <Button color="info">Save</Button>
        </Control>
        <Control>
          <Button color="text">Cancel</Button>
        </Control>
      </Field>
    </Form>
  ),
};
