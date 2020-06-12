import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import MainText from '../components/shared/MainText';
import H1 from '../components/shared/H1';
import Background from '../components/layout/Background';
class Index extends React.Component {
    render(){
        return (
            <BaseLayout>
                <Background/>
                <H1 content ='Akordy.cz - Domovská stránka'/>
                <MainText >
                    Vítejte na stránce Akordy.cz kde najdete akordy pro všechny písničky co hledáte. Pokud ne můžete je samy vytvořit. 
                 </MainText>
            </BaseLayout>
               
            
        );
    }
}
export default Index;
