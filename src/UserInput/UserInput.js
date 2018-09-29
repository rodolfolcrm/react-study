import React, {Component} from 'react';

/**
 * Stateless component sample.
 *
 * @param props
 * @returns {XML}
 */
class UserInput extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        this.inputElement.current.focus();
    }

    render() {
        return (
            <div><input className="UserInput"
                        ref={this.inputElement}
                        type="text"
                        onChange={this.props.change}
                        value={this.props.username}/></div>
        );
    }
}

export default UserInput;