import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import Option from '../components/option';
import Button from '../components/button.js';
import {selectEquipment, selectMalfunction} from "../actions";
import Select from '../components/select'


class RequestContainer extends React.Component  {
    state = {
        numberOfEquipments: 1,
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(selectEquipment());
        dispatch(selectMalfunction());
    }

    addEquipment = (e) => {
        e.preventDefault();
        this.setState({numberOfEquipments: this.state.numberOfEquipments + 1});
    };

    setEquipValue = (name) => (value) => this.setState({[name]: value});

    setMalfunctionValue = (name) => (value) => this.setState({[name]: value});

    render() {
        const { selectedEquipment, selectedMalfunction } = this.props;
        return (
            <Fragment>
                <div>
                    <div className='request-container'>
                        {Array.from({length: this.state.numberOfEquipments}, (v, k) => k + 1).map((i) =>
                            <div key={i}>

                                <p>Оборудование</p>

                                <div className="selects-box--container">
                                    <Select placeHolder='Начните набирать, или выберите из списка'
                                            value={this.state[`equipValue${i}`]}
                                            onClick={this.setEquipValue(`equipValue${i}`)}
                                    >

                                        {selectedEquipment.map(({id, name}, index) =>
                                            <Option key={index} value={id}>
                                                {name}
                                            </Option>
                                        )}
                                    </Select>
                                </div>

                                <p>Неисправности:</p>

                                <div className="selects-box--container">
                                    <Select placeHolder='Начните набирать, или выберите из списка'
                                            value={this.state[`malfunctionValue${i}_1`]}
                                            onClick={this.setMalfunctionValue(`malfunctionValue${i}_1`)}
                                    >

                                        {selectedMalfunction.map(({id, name}, index) =>
                                            <Option key={index} value={id}>
                                                {name}
                                            </Option>
                                        )}
                                    </Select>
                                    <Select placeHolder='Начните набирать, или выберите из списка'
                                            value={this.state[`malfunctionValue${i}_2`]}
                                            onClick={this.setMalfunctionValue(`malfunctionValue${i}_2`)}
                                    >

                                        {selectedMalfunction.map(({id, name}, index) =>
                                            <Option key={index} value={id}>
                                                {name}
                                            </Option>
                                        )}
                                    </Select>
                                    <Select placeHolder='Начните набирать, или выберите из списка'
                                            value={this.state[`malfunctionValue${i}_3`]}
                                            onClick={this.setMalfunctionValue(`malfunctionValue${i}_3`)}
                                    >

                                        {selectedMalfunction.map(({id, name}, index) =>
                                            <Option key={index} value={id}>
                                                {name}
                                            </Option>
                                        )}
                                    </Select>
                                </div>
                            </div>
                        )}
                    </div>
                    <Button buttonName='Добавить оборудование'
                            onClickFunction={this.addEquipment}/>
                </div>
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
