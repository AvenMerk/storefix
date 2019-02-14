import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import Option from '../components/option';
import Button from '../components/button.js';
import {selectEquipment, selectMalfunction} from "../actions";
import Select from '../components/select'


class RequestContainer extends React.Component  {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(selectEquipment());
        dispatch(selectMalfunction());
    }

    selector = (value) => console.log("selected => ", value);

    render() {
        const { selectedEquipment } = this.props;
        return (
            <Fragment>
                {!selectedEquipment ? <div>Loading...</div> :
                    <div>
                        <div className='request-container'>
                            <Select placeHolder='Начните набирать, или выберите из списка' onClick={this.selector}>
                                {selectedEquipment.map(({id, name}, index) =>
                                    <Option key={index} value={id}>
                                        {name}
                                    </Option>
                                )}
                            </Select>
                        </div>
                        <Button buttonName='Добавить оборудование'/>
                    </div>
                }
            </Fragment>
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


// state = {
//     numberOfEquipments: 1,
//     numberOfMalfunctions: 1,
// };

// const children = [];
// if (!this.props.selectedEquipment.equipment) {
//     return <div>Loading...</div>
// }  else {
//     for (let i = 0; i < this.state.numberOfEquipments; i++) {
//         children.push(
//             <div>
//                 <p>Оборудование</p>
//                 <Field array={this.props.selectedEquipment.equipment.equipment}
//                        key={`Equipment${i}`}
//                        placeHolder='Выберите оборудование'/>
//                 <p>Неисправности</p>
//                 <div>
//                     <Field array={this.props.selectedMalfunction.malfunction.malfunction}
//                            key={`Malfunction${i}`}
//                            placeHolder='Выберите неисправность'/>
//                 </div>
//             </div>)
//     }
// }


// addMalfunction = (e) => {
//     e.preventDefault();
//     console.log('add');
//     this.setState({numberOfMalfunctions: this.state.numberOfMalfunctions + 1})
// };
//
// addEquipment = (e) => {
//     e.preventDefault();
//     this.setState({numberOfEquipments: this.state.numberOfEquipments + 1});
// };