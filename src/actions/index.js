import equipment from '../data/equipment.json';
import malfunction from '../data/malfunction.json';

export const SELECT_EQUIPMENT = 'SELECT_EQUIPMENT';
export const SELECT_MALFUNCTION = 'SELECT_MALFUNCTION';

export const selectEquipment = equipment => {
    return {
        type: SELECT_EQUIPMENT,
        equipment
    }
};

export const selectDelayed = malfunction => {
    return {
        type: SELECT_MALFUNCTION,
        malfunction
    }
};
