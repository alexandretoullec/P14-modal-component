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

<!-- DOCUMENTATION -->

## documentation

To use the modal, you will need to import the custom hook useModal() along with the modal component itself. The only required props are isOpen and closeModal, which indicates whether the modal should be displayed, and a function to close the modal.
The following is an example of using the modal specifying all the possible props:

```Javascript
import { Modal, useModal } from 'julie-react-ts-modal'

function App() {

const { isOpen, openModal, closeModal, handleEscClose } = useModal()

const onAfterCloseFunction = () => { console.log('Modal closed') }

return (

<button onClick={() => openModal()}>

<Modal

isOpen={

isOpen

/* State variable (boolean) stored in the useModal hook, describing if the modal should be shown or not.*/}

closeModal={

closeModal

/* Function to close the modal from the useModal hook*/}

modalVisible={

'visible'

/* String (default: 'visible') className of the modal when it is visible (controls opacity and visibility)*/}

showClose={

true

/* Boolean (default: true) indicating if the close button is displayed*/}

closeText={

'Close'

/* String (default: 'Close') containing the text displayed in the close button */}

handleEscClose={

handleEscClose

/* Function closing the modal by pressing the escape key*/}

clickOverlayClose={

true

/* Boolean (default: true) indicating if the modal can be closed by clicking on the overlay*/}

onAfterClose={

onAfterCloseFunction

/* Function (default: null) to be executed after the modal has been closed*/}

afterCloseEventDelay={

500

/* Number (default: 0) indicating the delay in ms before the onAfterClose function is executed*/}

modalClass={

'modalClassName'

/*String (default: undefined) additional className for the modal div*/}

overlayClass={

'overlayClassName'

/*String (default: undefined) additional className for the modal overlay div*/}

modalTitle={

'Modal Title'

/* String (default: undefined) containing the title of the modal*/}

textContent={

'Example text content'

/* String (default: undefined) containing the text to be displayted inside the modal content div*/}

htmlContent={

'<div>Insert HTML</div>'

/* String (default: null) containing some HTML content to be displayed in the modal content div*/}

ChildComponent={

<ChildComponent props={'componentProps'} />

/* React Component (default: null) to be displayed inside the modal content div*/}

animationClass={

'fade'

/* String (default: 'fade') className to be applied to the modal when it is opened or closed*/}

animationDuration={

'0.3s'

/* String (default: '0.3s') duration of the open/close animation*/}

showSpinner={

true

/* Boolean (default: false) indicating if a spinner should be displayed while the modal is opening*/}

customSpinner={

'<div>Loading...</div>'

/* String (default: undefined) containing some HTML content to be displayed as a custom spinner*/}

spinnerDuration={

2000

/* Number (default: 1000) in ms indicating the duration during which the spinner is displayed before the modal content appears*/}

/>

)

}
```

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
