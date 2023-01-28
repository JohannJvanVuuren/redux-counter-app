import {useDispatch, useSelector} from "react-redux";
import {Decrement, Increment} from "../actions/counterAction";




export const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    return (
        <div className={"counter-app"}>
            <h1>Counter Application</h1>
            <div className={"counter"}>
                <button className={"btn-increment"} onClick={() => dispatch(Increment())}>Increment</button>
                    <span>{counter}</span>
                <button className={"btn-decrement"} onClick={() => dispatch(Decrement())}>Decrement</button>
            </div>
        </div>
    )
}