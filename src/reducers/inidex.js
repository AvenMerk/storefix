import { SELECT_EQUIPMENT, SELECT_MALFUNCTION  } from '../actions';
import { combineReducers } from 'redux';

const selectedEquipment = (state = [], action) => {
    switch (action.type) {
        case SELECT_EQUIPMENT:
            return action.equipment;
        default:
            return state;
    }
};

const selectedMalfunction = (state = [], action) => {
    switch (action.type) {
        case SELECT_MALFUNCTION:
            return action.malfunction;
        default:
            return state;
    }
};

export default combineReducers({
    selectedEquipment,
    selectedMalfunction,
})