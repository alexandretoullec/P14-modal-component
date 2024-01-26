import { IModalProps } from '../../types/modalTypes';
/**
 *
 * @param isOpen boolean - indicates if the modal is open or not // required
 * @param closeModal function - closes the modal // required
 * @param handleEscClose function - closes the modal when the escape key is pressed
 * @param clickOverlayClose boolean - indicates if the modal can be closed by clicking on the overlay
 * @param showClose boolean - indicates if the close button is displayed
 * @param closeText string - text displayed on the close button
 * @param textContent string - text content displayed in the modal
 * @param htmlContent string - html content displayed in the modal
 * @param modalTitle string - title displayed in the modal
 * @param ChildComponent React.FC - component displayed in the modal
 * @param animationClass string - class name of the animation to be applied
 * @param animationDuration string - duration of the animation
 * @param modalVisible string - class name of the modal when it is visible
 * @param onAfterClose function - function to be executed after the modal is closed
 * @param afterCloseEventDelay number - delay in ms before the onAfterClose function is executed
 * @param showSpinner boolean - indicates if the loading spinner is displayed
 * @param customSpinner string - custom spinner to be displayed
 * @param spinnerDuration number - duration in ms of the spinner
 * @param modalClass string - class name of the modal
 * @param overlayClass string - class name of the overlay
 * @param children ReactNode - children to be displayed in the modal
 *
 * @returns JSX.Element - modal component
 */
declare function Modal({ isOpen, modalVisible, closeModal, handleEscClose, clickOverlayClose, showClose, closeText, textContent, htmlContent, modalTitle, ChildComponent, animationClass, animationDuration, onAfterClose, afterCloseEventDelay, showSpinner, customSpinner, spinnerDuration, modalClass, overlayClass, children, }: IModalProps): import("react/jsx-runtime").JSX.Element;
declare namespace Modal {
    var defaultProps: import("../../types/modalTypes").IModalOptionalProps;
}
export default Modal;
