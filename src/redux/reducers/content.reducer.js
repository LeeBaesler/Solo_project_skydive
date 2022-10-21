import logbookReducer from "./logbook.reducer";

const contentReducer =(state = [], action) => {
    switch (action.type) {
        case 'FETCH_CONTENT':
            return action.payload;
        default:
            return state;
    }
}

export default contentReducer;