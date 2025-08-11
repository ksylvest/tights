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

Components follow the standard naming convention within Bulma:

```typescript
import {
  Button,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHead,
  ModalCardBody,
  ModalCardFoot,
  ModalCardTitle,
  ModalCardClose,
} from "tights";

const Confirmation: FC<{
  onConfirm(): void;
  onCancel(): void;
  onClose(): void;
}> = ({ onConfirm, onCancel, onClose }) => (
  <Modal>
    <ModalBackground />
    <ModalCard>
      <ModalCardHead>
        <ModalCardTitle>Modal</ModalCardTitle>
        <Delete onClick={onClose} />
      </ModalCardHead>
      <ModalCardBody>...</ModalCardBody>
      <ModalCardFoot>
        <Button onClick={onConfirm}>Confirm</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </ModalCardFoot>
    </ModalCard>
    <ModalClose size="medium" onClick={onClose} />
  </Modal>
);
```

## Copyright

Copyright (c) 2025 [Kevin Sylvestre](https://ksylvest.com). See LICENSE for details.
