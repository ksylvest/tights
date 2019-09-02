# Tights

Tights is a set of [React](https://reactjs.org) components for [Bulma](https://bulma.io).

## Installation

### Yarn

```sh
yarn add bulma
yarn add tights
```

### NPM

```sh
npm install bulma
npm install tights
```

## Usage

Components for Tights can be easily

```typescript
import {
  Button,
  Delete,
  Modal,
} from "tights";
import { Modal } from "tights";

const Confirmation: React.FC<{
  onConfirm(): void;
  onCancel(): void;
  onClose(): void;
}> = ({
  onConfirm,
  onCancel,
  onClose,
}) => (
  <Modal>
    <Modal.Background />
    <Modal.Card>
      <Modal.Card.Head>
        <Modal.Card.Title>Modal</Modal.Card.Title>
        <Delete onClick={onClose} />
      </Modal.Card.Head>
      <Modal.Card.Body>
        ...
      </Modal.Card.Body>
      <Modal.Card.Foot>
        <Button onClick={onConfirm}>Confirm</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Modal.Card.Foot>
    </Modal.Card>
    <Modal.Close size="medium" onClick={onClose} />
  </Modal>
);

## Copyright

Copyright (c) 2019 [Kevin Sylvestre](https://ksylvest.com). See LICENSE for details.
