import { connect } from "react-redux";
import { right, higher, lower, inputValue } from "../../actions";

// const random = () => {
//     return console.log(Math.floor(Math.random() * 101)); 
// }

// export const randomNumber = random()
// console.log(+randomNumber);

// const changeInput = (e) => {
//     console.log(e.target.value);
// }

// const variants = (rightNumber, tryHigher, tryLower) => {
//     return {
//         rightNumber, tryHigher, tryLower
//     }
// }

const Game = ({number, isCorrect, inputValue}) => {

    const getResult = () => {
        const text = isCorrect ? "Success" : "Try again"
        alert(text)
    }

    return <>

        <h2>Game</h2>
        <h3>Guess the number from 0 to 100</h3>
        <input type= "number" placeholder = "Type the number" onChange={(e) => inputValue(+e.target.value)} />
        <button onClick={getResult}>Submit</button>
        <button >Try again</button>
        
    </>
};

const mapStateToProps = ({randomNumber, isTrue}) => {
    return{
        number: randomNumber,
        isCorrect: isTrue
    }
}

const mapDispatchToProps = {
    rightNumber: right,
    tryHigher: higher,
    tryLower: lower,
    inputValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

// const Comp = () => {
//     return <Game number={randomNumber} isCorrect={isTrue} />
// }