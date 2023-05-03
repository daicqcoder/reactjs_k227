import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
const Up = () => {
    const dispatch = useDispatch();

    const updateNumber = () => {
        console.log("UP");
       dispatch({ type: "UP",});
      }
    
    const resetNumber = () => {
        dispatch({ type: "RESET_UP",});
    }
    const number = useSelector((test) => {
        return test.Reducer1.num;
    })
    return (
        <div className="timer bg-info" id="timer-up">
        <p>{number}</p>
        <button onClick={updateNumber} type="button" className="btn btn-dark">Up </button>
        <button onClick={resetNumber} type="button" className="btn btn-dark">Reset</button>
      </div>
    );
}

export default Up;