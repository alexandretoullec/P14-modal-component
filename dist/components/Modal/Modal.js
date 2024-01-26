import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//import './modal.scss'
import { defaultProps } from '../../types/modalTypes';
import { useEffect, useState } from 'react';
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
function Modal({ isOpen, modalVisible, closeModal, handleEscClose, clickOverlayClose, showClose, closeText, textContent, htmlContent, modalTitle, ChildComponent, animationClass, animationDuration, onAfterClose, afterCloseEventDelay, showSpinner, customSpinner, spinnerDuration, modalClass, overlayClass, children, }) {
    const [loading, setLoading] = useState(showSpinner);
    /**
     *
     * @description - useEffect hook to handle the loading spinner
     * @param setLoading function - sets the loading state
     */
    useEffect(() => {
        const handleLoading = () => {
            if (showSpinner) {
                console.log('is loading');
                setTimeout(() => {
                    setLoading(false);
                    console.log('is not loading');
                }, spinnerDuration);
            }
        };
        if (isOpen) {
            handleLoading();
        }
        else {
            setTimeout(() => {
                setLoading(true);
            }, 500); // delay to avoid the spinner to be displayed when the modal is closed
        }
    }, [isOpen, showSpinner, spinnerDuration]);
    if (handleEscClose) {
        handleEscClose(); // handle the escape key to close the modal - see useModal.tsx
    }
    /**
     * @description - function to handle the close event
     * On closing the modal, the onAfterClose function is executed after a delay specified by the afterCloseEventDelay prop
     * @param onAfterClose function - function to be executed after the modal is closed
     */
    const handleCloseEvent = () => {
        closeModal();
        onAfterClose && setTimeout(() => onAfterClose(), afterCloseEventDelay);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: `wrapper ${isOpen ? modalVisible : ''} ${animationClass && animationClass}`, style: {
                transitionDuration: animationDuration ? animationDuration : '',
            }, children: [_jsx("div", { className: `modal__overlay ${overlayClass ? overlayClass : ''}`, onClick: clickOverlayClose ? handleCloseEvent : undefined }), _jsxs("div", { className: `modal ${modalClass ? modalClass : ''}`, children: [showSpinner && loading && (_jsx("div", { className: "modal__spinner", children: _jsxs("div", { className: "lds-roller", children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] }) })), showSpinner && loading && customSpinner && (_jsx("div", { className: "modal__spinner", dangerouslySetInnerHTML: { __html: customSpinner } })), _jsxs("div", { className: "modal__content", children: [children && children, modalTitle && (_jsx("h2", { className: "modal__content__title", children: modalTitle })), ChildComponent ? ChildComponent : null, textContent && (_jsx("p", { className: "modal__content__text", children: textContent })), htmlContent && (_jsx("div", { className: "modal__content__html", dangerouslySetInnerHTML: { __html: htmlContent } }))] }), showClose && (_jsx("button", { className: "modal__btn", onClick: handleCloseEvent, children: closeText }))] })] }) }));
}
Modal.defaultProps = defaultProps;
export default Modal;
