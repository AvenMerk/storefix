import equipment from '../data/equipment';
import malfunction from '../data/malfunction';

export const SELECT_EQUIPMENT = 'SELECT_EQUIPMENT';
export const SELECT_MALFUNCTION = 'SELECT_MALFUNCTION';

export const selectEquipment = () => {
    return {
        type: SELECT_EQUIPMENT,
        equipment
    }
};

export const selectMalfunction = () => {
    return {
        type: SELECT_MALFUNCTION,
        malfunction
    }
};
