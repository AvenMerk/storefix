import React from 'react';

export default class Select extends React.Component {
    state = {
        expand: false,
        subStr: ''
    };

    onChange = (event) => {
        this.setState({subStr: event.target.value});
    };

    dropDown = () => this.setState(prevState => ({
        expand:  !prevState.expand,
    }));

    filter = ({props}) => {
        const {subStr} = this.state;

        if (!subStr || subStr === '') {
            return true;
        } else {
            return props.children.includes(subStr)
        }
    };

    onClickCollapseMenu = (name) => () => {
        this.dropDown();
        this.props.onClick(name);
    };

    render () {
        const { placeHolder, value, children } = this.props;
        const { expand, subStr } = this.state;

        return <div className='select-box--box'>
            <div className='select-box--container'>
                <input type='text'
                       className='select-box--selected-item'
                       placeholder={placeHolder}
                       value={value ? value : subStr}
                       onChange={this.onChange}/>

                <span className={ value ? "select-box--close" : expand ? "select-box--arrow-up" : "select-box--arrow-down"}
                      onClick={this.dropDown}/>
            </div>

            <div style={{display: expand ? 'block' : 'none'}}>
                <div className='select-box--items-container'>
                    {children.filter(this.filter).map((child, index) =>
                        <div key={index}
                            className='select-box--item'
                            onClick={this.onClickCollapseMenu(child.props.children)}>
                            {child}
                        </div>
                    )}
                </div>
            </div>
        </div>
    }
}

//onFocus={() => this.setState({expand: true})}
//onBlur={() => this.setState({expand: false})}