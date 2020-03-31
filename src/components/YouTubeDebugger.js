
import React from 'react'
export default class YouTubeDebugger extends React.Component{

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
          
    }

    changebitrate = () => {
        this.setState((previouse) => {
            return {...previouse, settings:{...previouse.settings , bitrate: 12}}
        }, ()=> console.log(this.state))
        
    }

    changereso = () =>{
        this.setState((previouse) => {
            return {...previouse, settings:{...previouse.settings , video: {resolution: '720p'}}}
        },()=> console.log(this.state))
    }



    render(){
        return(
            <div>
                <button className = "bitrate" onClick ={this.changebitrate}>chnage bitrate</button>
                <button className = 'resolution' onClick ={this.changereso} > </button>
            </div>
        )
    }
}