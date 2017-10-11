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
        case 'REPL_OP':
            return {
                result: state
                    .result.toString()
                    .replace(state.result.toString().match(/\D?\d+\.?\d*([\+\-\*\/])/)[1], action.payload.operator)
            }
            break;
        case 'CNG_ZNK':
            switch (action.payload.num) {
                case 1:
                    return {
                        result: state
                            .result.toString()
                            .replace(state.result.toString().match(/(\D?\d+\.?\d*)/)[1], '-' + state.result)
                    }
                    break;
                case 2:
                return {
                    result: state
                        .result.toString()
                        .replace(/.*/,state.result.toString().match(/(\D?\d+\.?\d*[\+\-\*\/])/)[1]+ '-' + state.result.match(/\D?\d+\.?\d*[\+\-\*\/](\D?\d*\.?\d*)/)[1])
                }
                    break;

                default:
                    break;
            }
            break;

        default:
            return state
            break;
    }
}