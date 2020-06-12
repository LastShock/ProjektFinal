import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import H1 from '../components/shared/H1';
import Background from '../components/layout/Background';
import SongsBody from '../components/songs/SongsBody';

class Songs extends React.Component {
    render(){
        return (
            <BaseLayout>
                <Background/>
                <H1 content ='Písničky'/>
                <SongsBody/>
            </BaseLayout>   
        );
    }
}
export default Songs;
