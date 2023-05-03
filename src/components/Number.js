import { useSelector } from "react-redux";

const Number = () => {
    const number = useSelector((test) => {
        console.log(test)
        return test.Reducer1.num;
    })
    return (
    <h3>{number}</h3>
    );
}

export default Number;