import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
const Down = () => {
    const dispatch = useDispatch();
    const number = useSelector((test) => {
        return test.Reducer2.num;
    })
    const updateNumber = () => {

       dispatch({ type: "DOWN",});
      }
    
    const resetNumber = () => {
        dispatch({ type: "RESET_DOWN",});
    }
    return (
        <div className="timer bg-danger" id="timer-down">
        <p>{number}</p>
        <button onClick={updateNumber} type="button" className="btn btn-dark">Down</button>
        <button onClick={resetNumber} type="button" className="btn btn-dark">Reset</button>
      </div>
    );
}

export default Down;