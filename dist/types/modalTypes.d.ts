import { ReactNode } from 'react';
export interface IModalRequiredProps {
    closeModal: () => void;
    isOpen: boolean;
}
export interface IModalOptionalProps {
    clickOverlayClose?: boolean;
    handleEscClose?: () => void;
    showClose?: boolean;
    closeText?: string;
    textContent?: string;
    htmlContent?: any;
    modalTitle?: string;
    ChildComponent?: ReactNode;
    animationClass?: string;
    modalVisible?: string;
    onAfterClose?: () => void;
    afterCloseEventDelay?: number;
    animationDuration?: string;
    showSpinner?: boolean;
    customSpinner?: string;
    spinnerDuration?: number;
    modalClass?: string;
    overlayClass?: string;
    children?: ReactNode;
}
export interface IModalProps extends IModalRequiredProps, IModalOptionalProps {
}
export declare const defaultProps: IModalOptionalProps;
