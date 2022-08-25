import { randomNumber } from "../components/game";


const gameReducer = (state = 0, action) => {
    switch (action.type) {
        case "RIGHT":
            state === randomNumber;
            return alert("You are correct!")
        case "HIGHER":
            state < randomNumber;
            return alert ("Try higher")
        case "LOWER":
            state > randomNumber;
            return alert ("Try lower")
        default:
            return state;
    }
};

export default gameReducer;