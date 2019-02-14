import React from 'react';
import {connect} from 'react-redux'
import Field from '../components/field.js';
import Button from '../components/button.js';
import {selectEquipment, selectMalfunction} from "../actions";

class RequestContainer extends React.Component  {

    equipment = () => this.props.dispatch(selectEquipment());
    malfunction = () => this.props.dispatch(selectMalfunction());

    render() {
        return(
            <div>
                {console.log(this.equipment)}
                {console.log(this.malfunction)}
                <div>
                    <Field />
                    <Field />
                    <Field />
                </div>
                <Button buttonName='Добавить новое оборудование' />
            </div>
        )
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