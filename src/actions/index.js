import equipment from '../data/equipment.json';
import malfunction from '../data/malfunction.json';

export const SELECT_EQUIPMENT = 'SELECT_EQUIPMENT';
export const SELECT_MALFUNCTION = 'SELECT_MALFUNCTION';

export const selectEquipment = () => {
    return {
        type: SELECT_EQUIPMENT,
        data: equipment
    }
};

export const selectMalfunction = () => {
    return {
        type: SELECT_MALFUNCTION,
        data: malfunction
    }
};
