
import React from 'react'

export default class DigitalClicker extends React.Component{

    constructor(){
        super()
        this.state ={
            timesClicked: 0
        }
    }

    updatetime = () => {
        this.setState((previouse)=>{
            return {timesClicked: previouse.timesClicked+1}
        })
    }

    render(){
        return(
            <div>
                <button onClick = {this.updatetime}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
