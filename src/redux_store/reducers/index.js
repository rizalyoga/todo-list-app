// utk parent semua reducer
import { combineReducers } from "redux";
import listPost from "./postReducers";


//mau export reducer ini
const rootReducer = combineReducers({listPost,});

export default rootReducer