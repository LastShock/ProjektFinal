function BackGround(){
    return(
        <style jsx global>
        {`
            
            body::after{      
                content : "";
                display: block;
                position: fixed; 
                top: 0;
                left: 0;
                background-image: url(https://i.pinimg.com/originals/ea/3f/d3/ea3fd3102ccf575e3c33954f73eab78d.jpg);
                width: 100%;
                height: 100%;
                opacity : 0.6;
                z-index: -1;
            }
            body{
                color:white;
            }
            `}
        </style> 
    ) 
}
export default BackGround;