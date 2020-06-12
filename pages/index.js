import React from 'react';
import Link from 'next/link';
class Index extends React.Component {
    render(){
        return (
            <div>
                <h1>Hlavní stránka</h1>
                <Link href="/index">
                    <a>Domovská stránka</a>
                </Link>
                <Link href="/">
                    <a>Hlavní stránka</a>
                </Link>
                <Link href="/songs">
                    <a>Písničky</a>
                </Link>
                <Link href="/about">
                    <a>O nás</a>
                </Link>
            </div>
        );
    }
}
export default Index;
