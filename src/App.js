import './scss/main.css';
import {Counter} from "./components/Counter";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./reducers/counterReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export const App = () => {

    return (
        <div>
            <Provider store={store}>
                <Counter/>
            </Provider>
        </div>
    );
}


