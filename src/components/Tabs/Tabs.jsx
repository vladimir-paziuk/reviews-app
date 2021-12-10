import React from 'react';

const { Provider, Consumer } = React.createContext();

export const TabNav = ({ id, children }) => (
    <Consumer>
        {({ active, setActive }) => children({
            isActive: id === active,
            setActive,
        })}
    </Consumer>
);

export const TabContent = ({ id, children }) => (
    <Consumer>
        {({ active }) => active === id ? children : null}
    </Consumer>
);

export const TabSwitcher = ({ initial, children }) => {
    const [active, setActive] = React.useState(initial);

    return (
        <Provider value={{ active, setActive }}>
            {children}
        </Provider>
    );
};
