import { useDispatch, useSelector } from "react-redux";
import { updateCount } from '../redux/actions/appstateActions';
import { IRootState } from '../redux/store/index';
import { useEffect, /* useState, useRef */ } from "react";
import './Compo1.scss';

function Compo1() {
  console.log('Compo1')

  // Redux Hooks
  const count: number = useSelector( (state: IRootState) => state.appState.currentCount);
  const dispatch: Function = useDispatch()

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    console.log('Compo1 -> useEffect');
    dispatch(updateCount(count + 1));
  // eslint-disable-next-line 
  }, []);

  return (
    <div className="compo1-main">
      Count: {count}
    </div>
  );
}

export default Compo1;