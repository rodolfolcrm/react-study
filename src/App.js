import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation'
import Char from './Char/Char';

import './UserOutput/UserOutput.css';
import './UserInput/UserInput.css';
import './Char/Char.css';

class App extends Component {
    state = {
        users: [
            {username: 'Rodolfo', age: 34}
        ],
        text: ''
    }

    userChangedHandler = (event) => {
        let users = [...this.state.users];
        users[0].username = event.target.value;
        this.setState(users);
    }

    inputTextChangedHandler = (event) => {
        this.setState({text: event.target.value});
    }

    inputTextDeleteCharHandler = (index) => {
        console.log(index);
        const charArray = this.state.text.split('');
        console.log(charArray);
        charArray.splice(index, 1);
        console.log(charArray);
        const updatedText = charArray.join('');
        console.log(updatedText);
        this.setState({text: updatedText});
    }

    render() {
        let charList = this.state.text.split('').map((c, index) => {
            return <Char
                key={index}
                character={c}
                click={() => this.inputTextDeleteCharHandler(index)}/>
        })


        return (
            <div className="App">
                <h1>Hi I'm a react App</h1>
                <h2>Two way data biding</h2>
                <UserInput username={this.state.users[0].username} change={this.userChangedHandler}/>
                <UserOutput
                    username={this.state.users[0].username}
                    age={this.state.users[0].age}/>

                <hr/>
                <h2>List Manipulation</h2>
                <input onChange={this.inputTextChangedHandler} type="text" value={this.state.text}/>
                <p>{this.state.text}</p>
                <p>Text size: {this.state.text.length}</p>
                <Validation textLength={this.state.text.length}/>

                {charList}
            </div>
        );
    }
}

export default App;
