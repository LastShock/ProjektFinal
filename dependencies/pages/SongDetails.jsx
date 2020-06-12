import React from 'react';
import {Song} from '../components/songs/Song';
import Lyrics from '../components/songs/lyrics';
import SongCSS from '../components/layout/Background';
import CSS from '../components/songs/SongDetailyCSS';
import H1 from '../components/shared/H1';
const Sappy = new Song("Sappy",'Nirvana','','');
class SongDetaily extends React.Component {
    render(){
        return(
            <React.Fragment>
            <H1 content ={Sappy.name}/>
            <h2>{Sappy.autor}</h2>
            <CSS/>
             <Lyrics/>  
             <SongCSS/> 
            </React.Fragment>
            
        );
    }
}
export default SongDetaily;
