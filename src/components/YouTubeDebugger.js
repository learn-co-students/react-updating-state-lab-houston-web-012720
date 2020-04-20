// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state={
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
    handleClick = ()=>{
        this.setState({
            settings:{ ...this.state.settings, bitrate: 12}
        })
    }
  newHandleClick = ()=>{
      this.setState({
          settings:{
              ...this.state.settings, video:{
                ...this.state.video, resolution: '720p'
              }
          }
      })

  }
        
    render(){
        return(
            <div>
                Youtube Debugger
            <button className='bitrate' onClick={this.handleClick}>{this.state.settings.bitrate}</button>
            <button className='resolution' onClick={this.newHandleClick}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}