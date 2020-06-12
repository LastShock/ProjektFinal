import React from 'react';


const MainText=(props)=>{
    return(
        <React.Fragment>
            <p>
            {props.children}
            </p>
        </React.Fragment>
    )
}


export default MainText;