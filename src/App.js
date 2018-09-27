import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './UserOutput/UserOutput.css';
import './UserInput/UserInput.css';

class App extends Component {
    state = {
        users: [
            {username: 'Rodolfo', age: 34}
        ]
    }

    userChangedHandler = (event) => {
        let users = [...this.state.users];
        users[0].username = event.target.value;
        this.setState(users);
    }

    render() {
        return (
            <div className="App">
                <h1>Hi I'm a react App</h1>
                <h2>This is really working!!!</h2>
                <UserInput  username={this.state.users[0].username} change={this.userChangedHandler}/>
                <UserOutput
                    username={this.state.users[0].username}
                    age={this.state.users[0].age} />
            </div>
        );
    }
}

export default App;
