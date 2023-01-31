import {useSelector,useDispatch} from 'react-redux'
import { decNumber, incNumber } from './actions/index';

const App=()=>{

  const myState=useSelector((state)=>state.ChangeNumber)
  const dispatch=useDispatch();
  return(
    <>

        <button onClick={()=> dispatch(incNumber())} >+</button>
        <input type="text" value={myState} />
        <button onClick={()=> dispatch(decNumber())}>-</button>

    </>
  )
}


export default App;