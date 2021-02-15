import { IRootState } from '../store/index'

export function updateCount(count: number) {
    return async (dispatch: Function, getState: () => IRootState) => {
        dispatch({
            type: 'setCurrentCount',
            payload: {
              currentCount: count
            }
        })
    }
}