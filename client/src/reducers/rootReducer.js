import{combineReducers} from 'redux'
import postSlice from './postSlice'

const rootReducer = combineReducers({
    postInfo : postSlice
})

export default rootReducer;