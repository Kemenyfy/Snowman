import React, { Component } from 'react';

class SnowmanImages extends Component {
    render() {
        let missedGuesses = this.props.picked.length - this.props.corrects.length
        if (missedGuesses < 8) {
            return (
                <div><img src={`./Images/step_${missedGuesses}.png`} alt={`Snowman Step ${missedGuesses}`} width="220"/>
                </div>
            );
        }
        else {
            return (
                <div>
                    <img src={`./Images/step_7.png`} alt="You Lose" width="220"/>
                </div>
            )
        }
    }
}

export default SnowmanImages;