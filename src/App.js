import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation'
import Char from './Char/Char';

import './UserOutput/UserOutput.css';
import './UserInput/UserInput.css';
import './Char/Char.css';

/**
 * StateFull component sample.
 */
class App extends Component {

    //React lifecycle hooks. Used for study proposal
    constructor(props){
        super(props);
        console.log('[App] inside constructor', props)
    }

    componentWillMount(){
        console.log('[App] inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[App] inside componentDidMount()');
    }

    componentWillUnmount(){
        console.log('[App] inside componentWillUnmount()');
    }

    //StateFull component can access state.
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
        const charArray = this.state.text.split('');
        charArray.splice(index, 1);
        const updatedText = charArray.join('');
        this.setState({text: updatedText});
    }

    render() {
        console.log('[App] inside render()');

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
