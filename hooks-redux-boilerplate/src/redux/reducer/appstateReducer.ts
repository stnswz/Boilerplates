interface IAppState {
  currentCount: number
}

const initialState:IAppState = {
  currentCount: 0
}

const reducer = (state:IAppState = initialState, action:any) => {
    switch (action.type) {
        case 'setCurrentCount':
            return { ...state, currentCount: action.payload.currentCount }
        default:
            return state
    }
}
export default reducer