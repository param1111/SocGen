import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props){
        super();
        this.state = {
            isToggleOn : true
        };
        
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }));
    }
    render() {
        return (
            <>
                <div>
                    <h2>Like Button</h2>
                    <button  onClick = {this.handleClick} className={this.state.isToggleOn ? "like-button" : "liked like-button"}  >Like |{' '}
                        <span className ="likes-counter">{this.state.isToggleOn ? '100' : '101'}</span>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}