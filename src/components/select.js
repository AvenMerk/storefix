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
        // this.dropDown();
        this.props.onClick(name);
    };

    render () {
        const { placeHolder, value, children } = this.props;
        const { expand, subStr } = this.state;

        return <div className='select-box--box'
                    onFocus={() => this.setState({expand: true})}
                    onBlur={() => this.setState({expand: false})}>
            <div className='select-box--container'>
                <input type='text'
                       className='select-box--selected-item'
                       placeholder={placeHolder}
                       value={value ? value : subStr}
                       onChange={this.onChange}/>

                <span className={ expand ? "select-box--arrow-up" : "select-box--arrow-down"}
                      onClick={this.dropDown}
                      onFocus={() => console.log('onFocus')}
                      onBlur={() => console.log('onBlur')}/>
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
