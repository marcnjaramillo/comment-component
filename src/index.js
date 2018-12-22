import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment
                    author={faker.name.firstName()}
                    datetime={faker.date.past().toLocaleString()}
                    content={faker.random.words()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    
    
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
