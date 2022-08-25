
const initialState = {
    count: 0,
    randomNumber: Math.floor(Math.random() * 100),
    isTrue: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            console.log("inc", state + 1);
            return {
                ...state,
                count: state.count + 1
            }
        case "DEC":
            console.log("dec", state - 1);
            return {
                ...state,
                count: state.count - 1
            }
        case "INPUT_VALUE":
            console.log(state.randomNumber);
            return {
                ...state,
                isTrue: action.payload === state.randomNumber,
            }
        // case "RIGHT":
        //     state === randomNumber;
        //     return alert("You are correct!")
        // case "HIGHER":
        //     state < randomNumber;
        //     return alert("Try higher")
        // case "LOWER":
        //     state > randomNumber;
        //     return alert("Try lower")
        default:
            return state;
    }
};

export default reducer;