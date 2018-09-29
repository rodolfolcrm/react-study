import React, { PureComponent }from 'react';
import PropTypes from 'prop-types';

/**
 * Child StateFull component
 *
 * PureComponent implements shouldComponentUpdate by default
 * and just re render next phases in case of having something different to re render, improving performance;
 */
class Char extends PureComponent {
    //React [create] lifecycle hooks. Used for study proposal
    constructor(props){
        super(props);
        console.log('[Char] inside constructor', props)
    }

    componentWillMount(){
        console.log('[Char] inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Char] inside componentDidMount()');
    }

    //React [destruction] lifecycle hooks.
    componentWillUnmount(){
        console.log('[Char] inside componentWillUnmount()');
    }

    //React [Update] lifecycle hooks.
    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Char] inside componentWillReceiveProps()', nextProps);
    }

    /*
    shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE Char] inside shouldComponentUpdate()', nextProps, nextState);
        return true; // returning true update process continues otherwise stops. Can be used to improve performance. If stops render is not called.
    }
    */

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Char] inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState){
        console.log('[UPDATE Char] inside componentDidUpdate()', nextProps, nextState);
    }

    render(){
        console.log('[Char] inside render()');

        return (
            <div className="Char" onClick={this.props.click}>
                {this.props.character}
            </div>
        );
    }

}

//Prop-Types is a way of define props types of the component.
// It throws an error in case that someone uses the component informing prop types differently of defined here.
//Good approach to discovery error on development phase.
Char.propTypes = {
    click: PropTypes.func
}

export default Char;