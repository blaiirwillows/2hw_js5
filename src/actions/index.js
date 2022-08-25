const decriment = () => {
    return {
        type: "DEC"
    }
}

const increment = () => {
    return {
        type: "INC"
    }
}

const right = () => {
    return {
        type: "RIGHT"
    }
}

const higher = () => {
    return {
        type: "HIGHER"
    }
}

const lower = () => {
    return {
        type: "LOWER"
    }
}

const inputValue = (number) => {
    return{
        type: "INPUT_VALUE",
        payload: number,
    }
}

export {decriment, increment, right, higher, lower, inputValue}