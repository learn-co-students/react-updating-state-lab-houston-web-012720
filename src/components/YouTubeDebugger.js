// Code YouTubeDebugger Component Here
import React , {Component} from 'react'

export default class YouTubeDebugger extends Component {
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

    changeState(bitrate_val,resolution_val = this.state.settings.video.resolution){
        this.setState({
            settings: {
                bitrate: bitrate_val,
                video: {
                    resolution: resolution_val
                }
            }
        })
    }

    render(){
        return (
            <div>
                <button className= "bitrate" onClick={() => this.changeState(12)}></button>
                <button className= "resolution" onClick={() => this.changeState(this.state.settings.bitrate,"720p")}></button>
            </div>
        )
    }
}