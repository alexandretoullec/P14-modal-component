import { ReactNode } from 'react'

// Required props
export interface IModalRequiredProps {
  closeModal: () => void
  isOpen: boolean
}
// Optional props
export interface IModalOptionalProps {
  clickOverlayClose?: boolean
  handleEscClose?: () => void
  showClose?: boolean
  closeText?: string
  textContent?: string
  htmlContent?: any
  modalTitle?: string
  ChildComponent?: ReactNode
  animationClass?: string
  modalVisible?: string
  onAfterClose?: () => void
  afterCloseEventDelay?: number
  animationDuration?: string
  showSpinner?: boolean
  customSpinner?: string
  spinnerDuration?: number
  modalClass?: string
  overlayClass?: string
  children?: ReactNode
}
// All modal props
export interface IModalProps extends IModalRequiredProps, IModalOptionalProps {}
// Default props
export const defaultProps: IModalOptionalProps = {
  clickOverlayClose: true,
  handleEscClose: () => {},
  showClose: true,
  closeText: 'Close',
  textContent: undefined,
  htmlContent: null,
  modalTitle: undefined,
  ChildComponent: null,
  animationClass: 'fade',
  modalVisible: 'visible',
  onAfterClose: () => {},
  afterCloseEventDelay: 0,
  animationDuration: '.3s',
  showSpinner: false,
  customSpinner: undefined,
  spinnerDuration: 1000,
  modalClass: undefined,
  overlayClass: undefined,
  children: null
}
