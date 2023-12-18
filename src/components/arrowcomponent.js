export const NextArrow=(props)=>{
    //const {className,style,onClick}=props;
    return (
        <>
        <div
            className={props.className}
            style={{ ...props.style,backgroundColor:"red",paddingTop:"20px",paddingBottom:"40px",marginRight:"120px"}}
            onClick={props.onClick}
        />
        {/* we dont any text to write in div so we make it self-closing tag */}
        </>
    )
}

export const PrevArrow=(props)=>{
    return (
        <>
        <div
            className={props.className}
            style={{ ...props.style,backgroundColor:"red",paddingTop:"20px",paddingBottom:"40px"}}
            onClick={props.onClick}
        />
        </>
    )
}