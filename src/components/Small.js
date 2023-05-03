const Small = ({updateImgUrl,imgUrl}) => {
    const imgs = [
       "images/img-1.jpg",
       "images/img-2.jpg",
       "images/img-3.jpg",
    ];

    return (
        <div id="small">
           {
            imgs.map((value, index)=>
                <img 
                    className= {imgUrl === value ? "active":""} 
                    src={value} 
                    onClick={()=>{updateImgUrl(value)}}/>
            )
           }
        </div>
    );
}

export default Small;