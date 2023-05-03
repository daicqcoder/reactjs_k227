import { useDispatch } from "react-redux"
const Botton = () => {
    const dispatch = useDispatch();

    const updateNumber = () => {
        dispatch({ type: "GET NUMBER",});
      }
    
    const resetNumber = () => {
        dispatch({ type: "RESET NUMBER",});
    }

    return (
        <div>
            <button onClick={updateNumber} className="btn btn-dark">Get number</button>
            <button onClick={resetNumber} className="btn btn-dark">Reset</button>
        </div>
    );
}

export default Botton;