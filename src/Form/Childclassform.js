import React,{Component} from "react"


class  ChildclassForm extends Component{

    constructor(){
        super()
        console.log('child hellow')
    }

    
    componentDidMount(){
        console.log('child import')
    }

    render(){
        let a='child hii'

    return <section>
     {
        console.log(a)
     }

    </section>
}
}


export default ChildclassForm