import React from 'react';
import {connect} from 'react-redux'
import Field from '../components/field.js';
import Button from '../components/button.js';
import {selectEquipment, selectMalfunction} from "../actions";

class RequestContainer extends React.Component  {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(selectEquipment());
        dispatch(selectMalfunction());
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.selectedEquipment.equipment ? <div>Loading...</div> :
                    <div>
                        <div>
                            <Field array={this.props.selectedEquipment.equipment.equipment}/>
                            <Field array={this.props.selectedMalfunction.malfunction.malfunction}/>
                        </div>
                        <Button buttonName='Добавить новое оборудование'/>
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