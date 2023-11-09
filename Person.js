import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Header from './Header';
import List from './List';

function Person(props) {
    return ( <
        p > { props.name }
        is my name. <
        br / >
        And I am { props.age }
        year old <
        br / >
        <
        br / >
        <
        br / >
        <
        Button text = "Click me!"
        onClick = {
            () => alert("Button clicked") }
        /> <
        br / >
        <
        br / >
        <
        br / >
        <
        Header title = "Artificial Intelligence" / >
        <
        br / >
        <
        br / >
        <
        br / >

        <
        List items = {
            ['apple', 'banana', 'orange'] }
        />

        <
        /p>

    );
}

export default Person;