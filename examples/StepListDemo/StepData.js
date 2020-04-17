export const stepData = {
    steps1: {
        stepList: [
            "新增乘除Action",
            "新增乘除Action对应的Reducer",
            "合并加减Reducer",
            "根据合并的rootReucer创建Store",
            "监听state的改变",
        ],
        contentList: [{
                code: `
                const ACTION_MULTIPLY = 'ACTION_MULTIPLY'
                const ACTION_DIVIDE = 'ACTION_DIVIDE'

                const multiplyAction = multiplicand => {
                    return {
                        type: ACTION_MULTIPLY,
                        payload: multiplicand
                    }
                }

                const divideAction = dividend => {
                    return {
                        type: ACTION_DIVIDE,
                        payload: dividend
                    }
                }`
            },
            {
                code: `
                const initialCountMDState = {
                    mdCount: 100
                }
                
                const countMDReducer = (state = initialCountMDState, action) => {
                    switch (action.type) {
                        case ACTION_MULTIPLY:
                            return {
                                ...state,
                                mdCount: state.mdCount * action.payload
                            }
                        case ACTION_DIVIDE:
                            return {
                                ...state,
                                mdCount: state.mdCount / action.payload
                            }
                        default:
                            return state
                    }
                }`
            },
            {
                code: `
                const rootReducer = combineReducers({
                    countAMReducer,
                    countMDReducer
                })
                `
            },
            "const store = createStore(rootReducer)",
            {
                code: `
                store.subscribe(() => {
                    console.log(store.getState())
                })`
            },
        ]
    },
}