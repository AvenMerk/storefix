import React from 'react';
import {connect} from 'react-redux'
import Field from '../components/field.js';
import Button from '../components/button.js';
import {selectEquipment, selectMalfunction} from "../actions";

class RequestContainer extends React.Component  {

    state = {
        numberOfEquipments: 1,
        numberOfMalfunctions: 1,
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(selectEquipment());
        dispatch(selectMalfunction());
    }

    addMalfunction = (e) => {
        e.preventDefault();
        console.log('add');
        this.setState({numberOfMalfunctions: this.state.numberOfMalfunctions + 1})
    };

    addEquipment = (e) => {
        e.preventDefault();
        this.setState({numberOfEquipments: this.state.numberOfEquipments + 1});
    };

    render() {
        const children = [];
        if (!this.props.selectedEquipment.equipment) {
            return <div>Loading...</div>
        }  else {
            for (let i = 0; i < this.state.numberOfEquipments; i++) {
                children.push(
                    <div>
                        <p>Оборудование</p>
                        <Field array={this.props.selectedEquipment.equipment.equipment}
                               key={`Equipment${i}`}
                               placeHolder='Выберите оборудование'/>
                        <p>Неисправности</p>
                        <div>
                            <Field array={this.props.selectedMalfunction.malfunction.malfunction}
                                   key={`Malfunction${i}`}
                                   placeHolder='Выберите неисправность'/>
                        </div>
                    </div>)
            }
        }

        return (
            <React.Fragment>
                {!this.props.selectedEquipment.equipment ? <div>Loading...</div> :
                    <div>
                        <div id='selection-window'>
                            {children}
                        </div>
                        <Button buttonName='Добавить новое оборудование'
                                onClickFunction={this.addEquipment}/>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { selectedEquipment, selectedMalfunction } = state;
    return {
        selectedEquipment,
        selectedMalfunction,
    };
};

export default connect(mapStateToProps)(RequestContainer);