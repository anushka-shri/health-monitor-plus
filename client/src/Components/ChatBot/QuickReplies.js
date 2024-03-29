import React, { Component } from "react";
import QuickReply from "./QuickReply";


class QuickReplies extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, payload, text) {
    this.props.replyClick(event, payload, text);
  }

  renderQuickReply(reply, i) {
    return <QuickReply key={i} click={this.handleClick} reply={reply} />;
  }

  renderQuickReplies(quickReplies) {
    if (quickReplies) {
      return quickReplies.map((reply, i) => {
        return this.renderQuickReply(reply, i);
      });
    } else {
      return null;
    }
  }
  render() {
    return (
			<div className='col s12 m8 offset-m2 l6 offset-l3'>
				<div className='card-panel grey lighten-5 z-depth-1'>
					<div className='row valign-wrapper'>
						<div className='col s8'>
							<a
								className='btn-floating btn-large waves-effect waves-light'
								style={{ background: 'darkblue'  }}
								href='#'>
								{this.props.speaks}
							</a>
						</div>
						<div id='quick-replies' className='col s7'>
							{this.props.text && <p>{this.props.text.stringValue}</p>}
							{this.renderQuickReplies(this.props.payload)}
						</div>
					</div>
				</div>
			</div>
		);
  }
}

export default QuickReplies;