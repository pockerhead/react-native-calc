const initialState = {
    result: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SUM':
            return {
                result: action.payload.sum1 + action.payload.sum2
            }
            break;
        case 'DIFF':
            return {
                result: action.payload.sum1 - action.payload.sum2
            }
            break;
            case 'INC':
            return {
                result: action.payload.sum1 * action.payload.sum2
            }
            break;
            case 'DIV':
            return {
                result: action.payload.sum1 / action.payload.sum2
            }
            break;

        case 'INPUT':
            return {
                result: state.result + action.payload.input
            }
            break;
        case 'CLEAR':
            return {result: action.payload.input}
            break;

        default:
            return state
            break;
    }
}