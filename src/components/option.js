import React from 'react';

export default class Option extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <span>{children}</span>
        )
    }
}
