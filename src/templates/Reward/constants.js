const numRegExp = /^-?\d*\.?\d*$/;

export const rewardValidation = (values) => {
    const errors = {};

    if (!values.destination) {
        errors.destination = "Required";
    }
    if (!values.reason) {
        errors.reason = "Required";
    }
    if (!values.amount) {
        errors.amount = "Required";
    } else if (!values.amount.toString().match(numRegExp)) {
        errors.amount = "Should be a number";
    }
    return errors;
};