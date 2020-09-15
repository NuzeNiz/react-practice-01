import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class App extends React.Component{
    componentWillMount(){
        axios.post('/q', {query:"{messages{title}}"}).then(response=>{
            this.props.setMessages(response.data.data.messages)
        })
    }

    render(){
        const messages = this.props.messages

        return <div>
            <ul>
                {messages.map((message)=>{return <li>{message.title}</li>})}
            </ul>
        </div>
    }
}

export default connect(
    ({messages})=>{
        return {messages:messages}
    },
    (dispatch)=>{
        return {
            setMessages:(new_messages)=>{
                dispatch({
                    type:'SET_MESSAGES',
                    new_messages:new_messages
                })
            }
        }
    }
)(App)