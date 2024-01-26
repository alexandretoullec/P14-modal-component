import { useState } from 'react';
export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    // Close modal when pressing ESC key
    function handleEscClose() {
        if (typeof window === 'undefined')
            return;
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        });
    }
    // Prevent scrolling when modal is open
    if (typeof window !== 'undefined') {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
    return {
        isOpen,
        openModal,
        closeModal,
        handleEscClose,
    };
};
