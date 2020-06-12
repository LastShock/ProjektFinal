import React from 'react';
import Link from 'next/link';

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav>
                <Link href="/">
                    <a>Domovská stránka</a>
                </Link>
                <Link href="/main">
                    <a>Hlavní stránka</a>
                </Link>
                <Link href="/songs">
                    <a>Písničky</a>
                </Link>
                <Link href="/about">
                    <a>O nás</a>
                </Link>
                
                </nav>
                <style jsx>
                    {
                        `
                        a{
                            font-size: 20px;
                            margin-left: 30px;
                            color: white;
                        };
                        h1{
                            font-size: 36px;
                            margin-left: 10px;
                            
                        }
                        nav{
                            background-color:#3b444b;
                        }
                        
                        `
                    }
                </style>
            </React.Fragment>

        )
    }
}

export default Header;