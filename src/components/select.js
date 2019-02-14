import React from 'react';

export default class Select extends React.Component {
    state = {
        expand: false,
    };

    dropDown = () => this.setState(prevState => ({
        expand:  !prevState.expand,
    }));

    render () {
        const { placeHolder, value, onClick, children } = this.props;
        const { expand } = this.state;

        return <div className='select-box--box'>
            <div className='select-box--container'>

                <input type='text'
                       className='select-box--selected-item'
                       placeholder={placeHolder}
                       value={value ? value : ''}/>

                <div className="select-box--arrow" onClick={this.dropDown}>
                </div>
            </div>

            <div style={{display: expand ? 'block' : 'none'}}>
                <div className='select-box--items-container'>
                    {children.map((child, index) =>
                        <div key={index}
                            className='select-box--item'
                            onClick={() => onClick(child.props.value)}>
                            {child}
                        </div>
                    )}
                </div>
            </div>
        </div>
    }
}
