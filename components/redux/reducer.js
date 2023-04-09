


export const dataReducer = (state = { data: [], loading: false, error: '' }, action) => {

    switch (action.type) {
        case "data":
            return { ...state, data: action.payload, loading: false, error: false };
        case "loading":
            return { ...state, loading: true, error: false };
        case "error":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    };

};