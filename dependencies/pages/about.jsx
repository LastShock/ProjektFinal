import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import H1 from '../components/shared/H1';
import Background from '../components/layout/Background';


class About extends React.Component {
    render(){
        return (
            <BaseLayout>
                <Background/>
                <H1 content ='O nás'/>
            </BaseLayout>
        );
    }
}
export default About;
