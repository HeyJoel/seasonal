import FocusTrap from "focus-trap-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface ModalProps {
    children: React.ReactNode,
    header: React.ReactNode,
    onDismiss: () => void
}

export default function Modal(props: ModalProps) {

    useEffect(() => {
        window.addEventListener('keyup', onKeyUp);
        return () => window.removeEventListener('keyup', onKeyUp);
    });

    function onKeyUp(e: KeyboardEvent) {
        switch (e.key) {
            case 'Escape':
            case 'Esc':
                onDismiss();
                break;
        }
    }

    function onDismiss() {
        props.onDismiss();
    }

    return createPortal(
        <FocusTrap>
            <div className={`bg-black/75 fixed top-0 left-0 w-full h-screen flex justify-center`} onClick={onDismiss}>
                <div className="bg-white w-full md:m-7 max-w-5xl rounded relative overflow-y-scroll" 
                    role="dialog" arial-modal="true" aria-live="assertive"
                    onClick={e => e.stopPropagation()}>
                    <div className="pl-7 pr-9 py-5 bg-green-700 text-white rounded-t">{ props.header }</div>
                    <button className={`modal-btn-cross`}
                        onClick={onDismiss}>Close</button>
                    <div className="p-7">
                        {props.children}
                    </div>
                </div>
            </div>
        </FocusTrap>,
    document.body
    );
}