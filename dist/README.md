<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">

<h1 align="center">React Modal</h3>

  <p align="center">
    A simple customizable fullscreen modal component for React.JS
  </p>
</div>

<!-- TABLE OF CONTENTS -->

  <h2>Table of Contents</h2>
  <ul>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#documentation">Documentation</a>
    </li>
    <li>
      <a href="#example">Example</a>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
  </ul>

<!-- GETTING STARTED -->

## Installation

To install, you can use [npm](https://npmjs.org/), [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/installation).

```
$ npm install alexandretoullec-react-ts-modal
$ yarn add alexandretoullec-react-ts-modal
$ pnpm add alexandretoullec-react-ts-modal
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Documentation -->

## Documentation

The basic documentation can be consulted here: [Documentation](https://jv-react-modal-doc.netlify.app/)

The documentation contains the description of all the props available for the modal component, and examples of usage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- EXAMPLE -->

## Example

Here is a simple example of the modal being used in an app.

```Javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Modal, useModal } from 'alexandretoullec-react-ts-modal'
import 'alexandretoullec-react-ts-modal/dist/index.css' // if you are using Next, place this import in your _app.js or _app.ts file.

function App() {
  // if you only need one modal, use this hook
  const { isOpen, openModal, closeModal, handleEscClose } = useModal()

  // if you need more than one modal, you need to use different names for the hooks.
  // for example, if you have a confirmation modal and a modal with a form, you can do this:
  const {
    isOpen: isOpenForm,
    openModal: openModalForm,
    closeModal: closeModalForm,
    handleEscClose: handleEscCloseForm
  } = useModal()
  const {
    isOpen: isOpenConfirm,
    openModal: openModalConfirm,
    closeModal: closeModalConfirm,
    handleEscClose: handleEscCloseConfirm
  } = useModal()

  return (
    <div>
      <button onClick={() => openModal()}>
      {/*in the case of multiple modals, use your custom name for the function:
      <button onClick={() => openModalConfirm()}>
      <button onClick={() => openModalForm()}>*/}
      <Modal
        isOpen={isOpen} {/* use custom name for multiple modals*/}
        closeModal={closeModal} {/* use custom name for multiple modals*/}
        handleEscClose={handleEscClose} {/* use custom name for multiple modals*/}
        modalTitle={"My custom modal"}
        textContent={"Lorem ipsum dolor sit amet"}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEMO -->

## Demo

Several demos of the various features are available here: [Modal demos](https://jv-react-modal-doc.netlify.app/#/examples/)
