import React,{Component} from "react"

import ChildclassForm from "./Childclassform.js"


class  ClassForm extends Component{

    constructor(){
        super()
        console.log('hellow')

        this.state={
            name:'tamil',
            // count1:0,
            count2:0
        }
    }

    // componentDidMount(){
    //    setInterval(()=>{
    //         this.setState({count2:this.state.count2++})

    //     },1000)
      
       
        
    //     console.log('parent import')
    // }

    componentDidUpdate(prevprops,prestate){
        // console.log(prestate,prevprops)

        if(prestate.name!==this.state.name){
            console.log('nameupdated')
        }
        else{
            console.log('updated') 
        }
    }

  
    

    render(){
        

        let handle=()=>{
            this.setState({name:"resh"})
        }

    return <section>
        <h1 onClick={handle}>{this.state.name}</h1>
        <h2>{this.state.count2}</h2>
        <button>click</button>
        <h2>{this.state.count2}</h2>

     <ChildclassForm/>

    </section>
}
}


export default ClassForm