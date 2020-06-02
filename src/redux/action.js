const defaultAction = () => {
    return {
        type: 'DefaultAction'
    }
};

const updateFirstComponentValue = (value) => {
    return {
        type: 'FirstComponentValue',
        payload: value
    }
};

const updateThirdComponentValue = (value) => {
    return {
        type: 'ThirdComponentValue',
        payload: value
    }
};

export { updateFirstComponentValue, defaultAction, updateThirdComponentValue };