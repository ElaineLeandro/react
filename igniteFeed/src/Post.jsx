/* eslint-disable react/prop-types */

export function Post(props ){
    return (
        <>
         <span>{props.author}</span>
         <p>{props.content}</p>
        </>
       
    )
}