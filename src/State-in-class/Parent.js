import React from 'react'
import { useState } from 'react'

import Child from './Child.js'
// import funt from 'Parent.js'

const Parent = () => {

    const random=Math.floor(Math.random()*(10))+1
    console.log(random)


    const ques=[
        {
            id:0,
            ques:"What is React and why it is used?",
            ans:"React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
            boolean:"true"

        },


        {
            id:1,
            ques:"What is the main function of React?",
            ans:"Like javascript, React also allows us to call functions and execute a piece of code when a user interacts with DOM elements.",
            boolean:"true"

        },

        {
            id:2,
            ques:"What is a React component example?",
            ans:"React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.",
            boolean:"true"

        },

        {
            id:3,
            ques:"What is the difference between React element and functional component?",
            ans:"Element is used to render JSX elements at runtime, while React. FC is used to render a React component function. A JSX element is simply a coded representation of a DOM element, while a React component function is a function that returns a JSX element.",
            boolean:"true"

        },

        {
            id:4,
            ques:"What is Reactjs functional component and class component?",
            ans:"A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element.",
            boolean:"true"

        },

        {
            id:5,
            ques:"What is JSX in React?",
            ans:"JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.",
            boolean:"true"

        },

        {
            id:6,
            ques:"What are Hooks in React?",
            ans:"Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Although Hooks generally replace class components, there are no plans to remove classes from React.",
            boolean:"true"

        },

        {
            id:7,
            ques:"What is the difference between props and state?",
            ans:"Props are used to pass data from one component to another. The state is local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.",
            boolean:"true"

        },

        {
            id:8,
            ques:"What is difference between DOM and virtual DOM?",
            ans:"The main difference between the DOM and the virtual DOM is that the DOM is the actual representation of a web page's structure and content, while the virtual DOM is an abstract, lightweight copy of the real DOM that can be used to optimize and speed up web development and rendering.",
            boolean:"true"

        },

        {
            id:9,
            ques:"What is difference between NPX and npm?",
            ans:"The command npm is used to download JavaScript packages from Node Package Manager, and npx is used to execute JavaScript packages downloaded this way.",
            boolean:"true"

        }
        
    ]

    const [quesobj, setQuesobj]=useState(ques)


    let quesansfun=(idval)=>{

        let ansdisplay=quesobj.map((e)=>{
            
            return idval===e.id?{...e,boolean:'false',ans:e.ans,ques:e.ques}:''
            
        })

        console.log(ansdisplay)
        setQuesobj(ansdisplay)

    }

    return(
        <div style={{padding:'20px'}}>
            <h2 style={{textAlign:"center",padding:'10px'}}>Question & Answer</h2>
            <Child question={quesobj}  quesans={quesansfun} />
        </div>

    )
}

   

export default Parent