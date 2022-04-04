"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOverlapping = void 0;
const checkOverlapping = (propName, ...props) => {
    let foundOne = false;
    props.forEach((prop) => {
        if (prop) {
            if (foundOne) {
                console.warn(`[@react-css/grid] Multiple values have been provided for ${propName}.`);
                return;
            }
            foundOne = true;
        }
    });
};
exports.checkOverlapping = checkOverlapping;