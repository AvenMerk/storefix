import React from 'react';
import './style.css';

class SelectMenu extends React.Component {
    state = {
        ...this.props,
        items: this.props.items || [],
        showItems: false,
    };

    dropDown = () => {
        this.setState(prevState => ({
            showItems:  !prevState.showItems,
        }))
    };

    selectItem = (item) => this.setState({
        selectedItem: item,
        showItems: false
    });

    render () {
        return <div className='select-box--box'>
            <div className='select-box--container'>

                <input type='text' className='select-box--selected-item'
                       placeholder={this.state.placeHolder}
                       value={this.state.selectedItem ? this.state.selectedItem.name : ''}
                >
                    {/*{this.state.selectedItem.name}*/}
                </input>
                <div className="select-box--arrow"
                     onClick={this.dropDown}>
                <span
                    className={`${this.state.showItems ? 'select-box--arrow-up' :
                        'select-box--arrow-down'}`}/>
                </div>
            </div>
            <div style={{display: this.state.showItems ? 'block' : 'none'}}
                 className='select-box--items'>
                {
                    this.state.items.map(item =>
                        <div key={item.id}
                             onClick={() => this.selectItem(item)}
                             className={this.state.selectedItem === item ? 'selected' : ''}>
                            {item.name}
                        </div>)
                }
            </div>
        </div>
    }
}

export default SelectMenu;