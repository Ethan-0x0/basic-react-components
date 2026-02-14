//This imports the react for useState so that it can  manage its own state
import React, { useState } from 'react';
//This imports the css module and styles the object containing the class name
import styles from "../styles/button.module.css";
export default function Counter() {
//This declares the state var count and has the function to update it
const [count, setCount] = useState(0);
return (
<div>
{/* This shows the current count*/}
<p>You clicked {count} times</p>
{/* This uses the increment class from the css module for the button
    This also updates the state by one. */}
<button className ={styles.increment} onClick={() => setCount(count + 1)}>Increment</button>
<div></div>
{/* This uses the Decrement class from the css module for the button
    This also updates the state to minus it by one. */}
<button className ={styles.Decrement} onClick={() => setCount(count - 1)}>Decrement</button>
</div>
);
};