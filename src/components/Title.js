import { useEffect } from "react";

const Title = ({ sttTitle, updateSttTitle, isLoading, updateTitle }) => {

    const onChangeTitle = (e) => {
        if(e.target.value === "") {
            return updateSttTitle();
        }
            updateTitle(e.target.value);
    }

    const onKeyUpTitle = (e) => {
        
        if(!sttTitle && e.keyCode === 13) {
            if(e.target.value === "") {
                updateTitle("What is Lorem Ipsum?");
            }
            updateSttTitle(false);

        }
    }

    const txtTitle = () => {
        return (
            <h4 onDoubleClick={updateSttTitle} >{isLoading} </h4>
        )
    }
    const frmTitle = () => {
        return (
            <input
                onBlur={updateSttTitle}
                value={isLoading}
                type="text"
                name="txt"
                id="txt"
                onChange={onChangeTitle}
                onKeyUp={onKeyUpTitle}
            />
        )
    }

    const showTitle = () => {

        if (sttTitle) {
            return txtTitle();
        }
        else {
            return frmTitle();

        }
    }
    useEffect(() => {
        if(!sttTitle) {
            document.getElementById("txt").focus();
        }
    }, [sttTitle]);

    return (
        <>
            {showTitle()}
        </>
    );
}

export default Title;