import {
    // consts
} from "../actions";

const INITIAL_STATE = {
    //
};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH-N_E_S_T_O":
            return { ...state, nesto: action.payload };

        default:
            return state;
    }
};

export default rootReducer;

// IF I MAKE MORE COMBINED REDUCERS --->

// import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
// import someReducer from "./someReducer"; // make this as someReducer.js in /reducers folder

// export default combineReducers({ 
//     form: formReducer,
//     skills: skillsReducer,
//     posts: postsReducer
// });

// this is someReducer.js file --->

// const INITIAL_STATE = {
//     posts: [],
// };
// export default (state = INITIAL_STATE, action) => {
//     switch(action.type) {
//         case FETCH_ALL_POSTS:
//             return  { ...state, allJobPosts: action.payload };
//         default:
//             return state;
//     }
// };