import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Message from './Message';
import Card from './Card';
import './chatapp.css';


import QuickReplies from "./QuickReplies";

class Chatbot extends Component {
	messagesEnd;
	talkInput;
    constructor(props) {
        super(props);
    
	this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
	this.handleQuickReplyPayload = this.handleQuickReplyPayload.bind(this);
	this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
     this.state = {
            messages: [],
			showBot: false
        };
        
    }

    async df_text_query(text) {
        let says = {
            speaks: 'user',
            msg: {
                text : {
                    text: text
                }
            }
        }
        this.setState({ messages: [...this.state.messages, says]});
		const res =  await axios.post('http://localhost:3005/api/v1/dialogFlow/textQuery',{text});
		for (let msg of res.data.fulfillmentMessages) {
			says = {
				speaks: 'bot',
				msg: msg,
			};
			this.setState({ messages: [...this.state.messages, says] });
		}
	}

	async df_event_query(event) {
		const res = await axios.post(
			'http://localhost:3005/api/v1/dialogFlow/eventQuery',
			{ event },
		);
		for (let msg of res.data.fulfillmentMessages) {
			let says = {
				speaks: 'bot',
				msg: msg,
			};
			this.setState({ messages: [...this.state.messages, says] });
		}
	}

	async componentDidMount() {
		this.df_event_query('Welcome');
	}

	componentDidUpdate() {
		this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
		if (this.talkInput) {
			this.talkInput.focus();
		}
	}

	show(event) {
		event.preventDefault();
		event.stopPropagation();
		this.setState({ showBot: true });
	}

    hide(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: false});
    }
    
	handleQuickReplyPayload(event, payload, text) {
		event.preventDefault();
		event.stopPropagation();
	
		switch (payload) {
		  case "recommend_yes":
			this.df_event_query("SHOW_RECOMMENDATIONS");
			break;
		  case "training_masterclass":
			this.df_event_query("MASTERCLASS");
			break;
		  default:
			this.df_text_query(text);
			break;
		}
	  }
	

	renderCards(cards) {
        return cards.map((card, i) => <Card key={i} payload={card}/>);
    }

    renderOneMessage(message, i) {

        if (message.msg && message.msg.text && message.msg.text.text) {
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;

        } else if (message.msg
            && message.msg.payload
            && message.msg.payload.cards) { //message.msg.payload.fields.cards.listValue.values

            return <div key={i}>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div style={{overflow: 'hidden'}}>
                        <div className="col s2">
                            <a href="/" className="btn-floating btn-large waves-effect waves-light ">{message.speaks}</a>
                        </div>
                        <div style={{ overflow: 'auto', overflowY: 'scroll'}}>
                            <div style={{ height: 300, width:message.msg.payload.cards.length * 270}}>
                                {this.renderCards(message.msg.payload.cards)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }else if (
			message.msg &&
			message.msg.payload &&
			message.msg.payload.fields &&
			message.msg.payload.fields.quick_replies
		  ) {
			return (
			  <QuickReplies
				text={
				  message.msg.payload.fields.text
					? message.msg.payload.fields.text
					: null
				}
				key={i}
				replyClick={this.handleQuickReplyPayload}
				speaks={message.speaks}
				payload={message.msg.payload.fields.quick_replies.listValue.values}
			  />
			);
		  }
	}

	renderMessages(returnedMessages) {
		if (returnedMessages) {
			return returnedMessages.map((message, i) => {
				return this.renderOneMessage(message, i);
			});
		} else {
			return null;
		}
	}

	_handleInputKeyPress(e) {
		if (e.key === 'Enter') {
			this.df_text_query(e.target.value);
			e.target.value = '';
		}
	}

	render() {
		if (this.state.showBot) {
			return (
				<div
					style={{
						minHeight: 500,
						backgroundColor: 'rgb(191,193,194)',
						maxHeight: 470,
						width: 400,
						position: 'fixed',
						bottom: 0,
						right: 0,
						border: '1px solid lightgray',
					}}>
					<nav>
						<div className='nav-wrapper purple lighten-1'>
							<a href='/' className='brand-logo '>
								Chatbot
							</a>
							<ul
								id='nav-mobile'
								className='right hide-on-med-and-down '>
								<li>
									<a href='/' onClick={this.hide}>
										Close
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<div
						id='chatbot'
						style={{
							minHeight: 388,
							maxHeight: 388,
							width: '100%',
							overflow: 'auto',
						}}>
						{this.renderMessages(this.state.messages)}
						<div
							ref={(el) => {
								this.messagesEnd = el;
							}}
							style={{ float: 'left', clear: 'both' }}></div>
					</div>
					<div className=' col s12'>
						<input
							style={{
								margin: 0,
								paddingLeft: '1%',
								paddingRight: '1%',
								width: '100%',
								color: 'white',
								backgroundColor: 'rgb(105,105,105)',
							}}
							ref={(input) => {
								this.talkInput = input;
							}}
							placeholder='Enter message here:'
							onKeyPress={this._handleInputKeyPress}
							id='user_says'
							type='text'
						/>
					</div>
				</div>
			);
		} else {
			return (
				<div
					style={{
						minHeight: 40,
						maxHeight: 500,
						width: 400,
						position: 'fixed',
						bottom: 0,
						right: 0,
						border: '1px solid lightgray',
					}}>
					<nav>
						<div className='nav-wrapper purple lighten-1 .chatbot_css_fix'>
							<a href='/' className='brand-logo'>
								Chatbot
							</a>
							<ul id='nav-mobile' className='right hide-on-med-and-down'>
								<li>
									<a href='/' onClick={this.show}>
										Show
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<div
						ref={(el) => {
							this.messagesEnd = el;
						}}
						style={{ float: 'left', clear: 'both' }}></div>
				</div>
			);
		}
	}
}

export default withRouter(Chatbot);
