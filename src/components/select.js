import React from 'react';

export default class Select extends React.Component {
    state = {
        expand: false,
        subStr: ''
    };

    dropDown = () => this.setState(prevState => ({
        expand:  !prevState.expand,
    }));

    onChange = (event) => this.setState({subStr: event.target.value});

    filter = ({props}) => {
        const {subStr} = this.state;

        if (!subStr || subStr === '') {
            return true;
        } else {
            return props.children.includes(subStr)
        }
    };

    render () {
        const { placeHolder, onClick, value, children } = this.props;
        const { expand, subStr } = this.state;

        return <div className='select-box--box'>
            <div className='select-box--container'>

                <input type='text'
                       className='select-box--selected-item'
                       placeholder={placeHolder}
                       value={value ? value : subStr}
                       onChange={this.onChange}/>

                <span className="select-box--arrow" onClick={this.dropDown}/>
            </div>

            <div style={{display: expand ? 'block' : 'none'}}>
                <div className='select-box--items-container'>
                    {children.filter(this.filter).map((child, index) =>
                        <div key={index}
                            className='select-box--item'
                            onClick={() => onClick(child.props.children)}>
                            {child}
                        </div>
                    )}
                </div>
            </div>
        </div>
    }
}
