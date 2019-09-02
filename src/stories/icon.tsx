import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Icon } from "../components";

const stories = storiesOf("Elements|Icon", module);

stories.add("Basic", () => (
  <Icon>
    <FontAwesomeIcon icon={faRocket} />
  </Icon>
));

stories.add("Colors", () => (
  <>
    <Icon color="white">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="light">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="dark">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="black">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="text">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="primary">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="link">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="info">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="success">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="warning">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
    <Icon color="danger">
      <FontAwesomeIcon icon={faRocket} />
    </Icon>
  </>
));

stories.add("Sizes", () => (
  <>
    <Icon size="small">
      <FontAwesomeIcon icon={faRocket} size="1x" />
    </Icon>
    <Icon size="medium">
      <FontAwesomeIcon icon={faRocket} size="2x" />
    </Icon>
    <Icon size="large">
      <FontAwesomeIcon icon={faRocket} size="3x" />
    </Icon>
  </>
));
