import React, {Component} from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            date : new Date(),
            count : this.props.countStart,
            show : true
        }
    }

    componentDidMount(){
        
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    componentDidUpdate(previousProps, previousState,snapshot){
       if (previousState.count===0) {
           this.setState({show: false})
           clearInterval(this.timerID)
       }
    }

    tick(){
        this.setState({
            date: new Date(),
            count: this.state.count - 1
        })

    }

    render(){
        const view = (<div> 
                            <table>
                                <tbody>
                                    <tr className="white">
                                        <td><h2>sekarang jam : {this.state.date.toLocaleTimeString()}</h2></td>
                                        <td><h2>hitung mundur : {this.state.count}</h2></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>) 
        return(
            <div>
                {this.state.show===true ? view : null}
            </div>
            
            
        )
    }
}

export default Timer