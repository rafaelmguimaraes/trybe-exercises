export const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });
export const updAssignment = (value) => ({ type: 'UPDATE_ELEMENT', value });
export const fltAssignment = (value) => ({ type: 'FILTER_ELEMENT', value });
export const undAssignment = () => ({ type: 'UNDO_ACTION' });