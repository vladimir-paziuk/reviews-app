import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import s from './Modals.module.scss';

const ModalsContext = React.createContext();

const TIMEOUT = 300;
const CLASSNAMES = {
    enterActive: s.modals_state_enter_active,
    enterDone: s.modals_state_enter_done,
    exitActive: s.modals_state_exit_active,
};
const MODAL_CONTAINER_ID = "__MODAL_CONTAINER__";

export const useModals = () => React.useContext(ModalsContext);

export const ModalsProvider = ({ children }) => {
    const [isOpen, toggleIsOpen] = React.useState(false);

    const close = () => {
        toggleIsOpen(false);
    };

    const setTemplate = (template) => {
        const render = template ? template({ close }) : null;
        ReactDOM.render(render, document.getElementById(MODAL_CONTAINER_ID));
    };

    const show = (template) => {
        setTemplate(template);
        toggleIsOpen(true);
    };

    return (
        <ModalsContext.Provider value={{ show, close }}>
            <CSSTransition
                in={isOpen}
                timeout={TIMEOUT}
                classNames={CLASSNAMES}
                onExited={() => setTemplate()}
            >
                <div className={s.modals}>
                    <div className={s.modals__bg} onClick={close} />
                    <div className={s.modals__container} id={MODAL_CONTAINER_ID} />
                </div>
            </CSSTransition>
            {children}
        </ModalsContext.Provider>
    );
};
