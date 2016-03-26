import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
    switch(action.type) {
        case FETCH_WEATHER:
            // Returning a new version of state through concat
            // (Don't use state.push, don't mutate state)
            // return state.concat([action.payload.data]);
            // ES6 equivalent below, '...' flattens state
            return [ action.payload.data, ...state];
    }
    return state;
}