import { connect } from "react-redux";
import { decriment, increment } from "../../actions";

const App = ({count, addCount, minusCount}) => {
    return <> 
        <h2>{count}</h2> 
        <button onClick={addCount}>inc</button>
        <button onClick={minusCount}>dec</button>

    </>
};

const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}

const mapDispatchToProps = {
    addCount: increment,
    minusCount: decriment,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);