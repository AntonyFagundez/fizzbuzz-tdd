const { FIZZ, BUZZ, FIZZBUZZ } = require("./constants")

function fizzbuzz(num){

    /**
     * @param {number} num number to evaluate
     * @param {mult} mult multiple to evaluate the module operator
     */
    const isMultiple = (num, mult) => !(num % mult);

    if(typeof num !== 'number') {
        throw new Error("The argument must be a number")
    }

    if(num === 0){
        return 0;
    }

    if(isMultiple(num, 3) && isMultiple(num, 5)){
        return FIZZBUZZ;
    }

    if(isMultiple(num, 3)){
        return FIZZ;
    }

    if(isMultiple(num, 5)){
        return BUZZ;
    }

    return num;
}

module.exports = fizzbuzz;