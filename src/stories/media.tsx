import { storiesOf } from "@storybook/react";
import cn from "classnames";
import type { FC } from "react";

import { Content, Delete, Image, Media } from "../components";

const stories = storiesOf("Layout|Media", module);

const SAMPLE_URL = "https://source.unsplash.com/BDIcmo7netA/96x96";

stories.add("Basic", () => (
  <>
    <Media>
      <Media.Left>
        <Image square dimensions={48} src={SAMPLE_URL} />
      </Media.Left>
      <Media.Content>
        <Content>
          <strong>Ringo</strong> <span>@ringo</span>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </Content>
      </Media.Content>
      <Media.Right>
        <Delete />
      </Media.Right>
    </Media>
  </>
));
