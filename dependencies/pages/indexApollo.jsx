import {qql, graphql} from 'react-apollo';
import withData from '../apollo/withData';

const query=qql`
    {
        allUsers{
            username
        }
    }

`;

const index = ()=> <div>Graph QL index</div>;
const GraphqlIndex = graphql(query)(index);
export default withData(GraphqlIndex);