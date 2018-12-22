import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import faker from 'faker';

const App = () => {

    return (
        <div className="ui container comments">
            <Comment
            author={faker.name.firstName()}
            datetime={faker.date.past().toLocaleString()}
            content={faker.lorem.sentence()}
            avatar={faker.image.avatar()}
            />
        </div>
    
    
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
