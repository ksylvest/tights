import type { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { faHeart, faUpload, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form: FC = (props) => <form {...props} />;

import { Button } from "./button";
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
import { Textarea } from "./textarea";

const meta = {
  title: "Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicStory: Story = {
  render: () => (
    <form>
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
      <Field grouped>
        <Control>
          <Button color="info">Save</Button>
        </Control>
        <Control>
          <Button color="text">Cancel</Button>
        </Control>
      </Field>
    </form>
  ),
};
