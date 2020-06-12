import {useState} from 'react';
import { Song } from '../songs/Song';
import SongCSS from '../layout/SongCSS';


const Sappy= new Song (
    'Sappy',
    'Nirvana',
     '',
    'https://i.pinimg.com/originals/51/48/45/514845fae6d2e8f38e7fa5631984fe6e.jpg'    
);
const RapeMe= new Song (
    'Rape Me',
    'Nirvana',
     '',
    'https://i.pinimg.com/originals/51/48/45/514845fae6d2e8f38e7fa5631984fe6e.jpg'    
);
const Glycerin= new Song (
    'Glycerin',
    'Bush',
     '',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAtFBMVEX9/f0jHx4AAAAdFhgkHh4JAAD//P0mHR4iIB6cmJn8/v0iHx8RCAkfGxz6+vokHx8dGBcMAAAZExJSUFGtqKrm5uYzLS/c3NwfGx1paGjHx8dYVlcgFhkOAAXt8O8NBQiGhYWioaLS0tI6NjePjo41LzF4dXbExMRvbG3j4uKwsLAnHCAWDhCko6OMiYrx7e59enlLSUhgXV5GQEIsLCosJSgvLy9PSkw2NzQREA69ubri3N5HBc3iAAAIFklEQVR4nO2ai3KiShBAoR1UlLdBfD+QGDUYo0k2i/n//7oDIk6jkLtbam7d6pNNVRaGhsPM9DxUkgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIH6Yxk8/wG1pGJsRYrNJDxhpgcaxYHr40gsxNsaJhoHKVJd79XW35fTnwcofxYeq58/BgxxvmTIqjvkn7Ia2ogzDwXPteRAObUiww0H78a01D/bLrGCgxCcG7bdd4OeDeIr50f74aLcfObP2/GTXe50BaKFjxTiaAuNt4Felc8Nevz0IxANG5b3NI8bwoB/qX/pJ/UGTo+ud+KcT/82YGR/QO5WQP9DbdHMo+BoeCupOCIvc+/SA6fEVekK4Oz7j6g1CvdmUM0zGKiHM1KWUYw8DfYwFgYfrdNKY9t8LVuRSLOVjn9jMw9NBZYGD+FCrn85WEsGq5L+BdTmoBgtPaKgNaenIdVl7EWvWUBjLLqhrNxOU5RpM4oILQdCEJxSkBzXhgoOgpBbpxYQw3wiCrbhohAXBvJMgiw0bSLDpdMsE+/GxCTTPQgmviIWVU1dWlfpBUMAQY95UkIcH3koXjnDEekcZ70k5E1Thm6Bm2D9e7kNSV1xQ6NqG2OxvLCgPZgYWlAGlCS4o9sGWJH1951dn4KZXj97rPy3IoIeaKBdEQ8UT1IT2GAvuvg0Lq8O1DakbHY5o+SZ6pz6Y3DvI1+C+VNAD85uIznEskabHstoEC7JTu7+5IE8qc1SDyqpE8FMKxgxdbzmOJdfFA9axE/vwXCBYu7pg04zAHibTmTGriY9o9csFUR8ctKSZLpRlz/A5n+8+AMLKIfXX4zaf0Bg9ZoOJIwhWq4bYi68kaI6nafTluo4GMS74WiLYywkatlhW73hJqU3v5Q20RF3JJi1C146KBeUrCQ6n2XE3EmvQmecFUR/E4+CgtUQP57zyKfshPza8QLcZc/rHfPmgnDprXlDsxldqooIgSipNXrUTnEXzgsLrGLQ8JMjeXWFVtlGHQzOd30q+WNXRRBwmRiBM1W4hOBcFwcsLormaXy5Ycyb+5lR6ucvGmF9iRxD7YJJFry4oD9fZcTcUwvMmJU00JNgrFqzwJio+nMzkCNh2svJGxwvSmnLHYkz5bdEVQMPSlQS1VLDqrt/Fd6t8VaUXXIOlgpLCxE6ZYDkKNFtBT5jjNVz00mTdEUGnriRYf599tvr9z8fhsHYatiyeUar5JopmMjnBLY96JhhPsPkSE2qL/dExL1jC1Qb6ZOUtVB57ZsoskSkT9LDgp7QqnsnoDvxSN0kj/QnBPGYlUg8v/A8EW5LRLg1r6w/Sf0TQ2o3Sfac/EuSTt9KwDHhcLjguLXUPQdnq7v9VDYrLpXihN4Vnlo8lUI9mo8Z/QlB24HF/QRBl0QuC0hqcfChEuK3mh4l7CDaPnA6xCiyMM0E0k/FArK10T8bbgmWahfsWzA5+SLCT/KKj474hBSghKA/itMpHPW6Y7otW9zMIO8UPDZv7JxkHhuPxMN7iRbc2lYm0HqKCaHthrwinLHOUneq9RqAVba4p65FdcOpWglkYwwvESmmasNyjh7FaYpDp6XWwWrZdc9D0gzeAYYWZZj7pWDsXC5q6zuLdXsY6HaajUzeYbHtircjhpIf+L1c2YpBTJTHcOxM2vaDP19Bn6azuolYhm2bHNM0P8yOmfSXBVpGg9CJmQf03XiGI83LpS3CH4Nh2e2hNbPjTfj6vgocENbR1791gwdsUn1pao244yCeEyI8/eopXso1tVoHP2ecSkhfBLFeZ7gJnTfBRZhZ3thtXE2wVCm7F5MBg2cfJQlfSOVzvt5P1rsrsOJEevVvMUmarDbpbF8XI1yAS/LqBoGyfWpWL12MyLIN8Th9Wuqr6+gjWaW0UeunWhLF14tmbroTdlZsFNVpIsL5ESSYvKCalKwlafVWdTlVVnXzm1mOy4vrA8qO2o2nOKdux0/Df6GZvw1G02Xy98pf+PmjndrJwFsV9cIlmR1cSlC1NG3O08Gzs6hjSr075bi6D7Ckm6MMK2UmGVkXT0RvSgm8ExXNXErw0VTuYf/KsY5dNn/lDpJ8aNvhMG21ZyCaPywcAGX0WaoK/LBF0byNYBPAFXPWjVNB6M9Iu9M1aKRXkC/8lGls1NDtyb9JEix8nXoOXPrhlfaU5wg2f/01EeMoLBj8m+Jx+FDRRCh+dKdlGog86Y+WtmTPmU3LcRKOfE4TjluxuKBesf0CYBH09KvXLpU44n9Vqwy2pwdH9BPXMryF14XLV8ASaPVxVMoIoKo9pt4xYMJ9k7i/YZB3bFGdcUwjZ2XjI+HIK407Cod4pqG2+hJ7EM57clgXOovcRtDRoqni2tdxBlH9we3EeeDOdxUvBC0OnA9vDjk5uVw1LXEtwC4rNURSN/9rJn4f/86FZiWYvPQN/84pPrr1XS4ksna/wkhHTbEL38jfePPW3AnyuE5fkP/wf428sWhw3rBouvzm/M8e2NRtyNWjHJ1PgrwX36/V6mrF+SFk/rJ78L6PgIqOn7jqgQMrk/JtZR9wndTEbZ0Ur/eBpJMRZPWQ3X68f0E6dMX0QWJ99feymJEIjz/d7vZ7vj74rLo2WvKzvLTfflrwFaYLMN7I7fc2y+Db/8+95EgRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB3It/AOxftguryZbWAAAAAElFTkSuQmCC'    
);
export default ()=>{
    const [songs, setSongs]= useState([Sappy,RapeMe,Glycerin]);
    const [song, setSong] = useState('');
    const removeSong= song =>{
        setSongs(songs.filter(t=> t != song));
    }
    return(
        <React.Fragment>
            <input value={song} onChange={e=> setSong(e.target.value)}/>
            <button onClick={()=>setSongs([...songs,song])}>Přidat písničku</button>
            {
                
                songs.map(song =>(
                <div className="song">
                <h2>Název: {song.name}</h2>
                <h3>Autor: {song.autor}</h3>
                <img  src={song.pic} width="500" height="600"/>
                <br></br>
                <button onClick={()=>removeSong(song.name)}>Odstranit</button>
                <button onClick={()=>removeSong(song)}>Upravit</button>
                </div>
                
            ))}
        <SongCSS/>
        </React.Fragment>
        
    )
}