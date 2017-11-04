import React, { Component, PropTypes } from 'react'

export default class ImageCompare extends Component {
    constructor(props) {
        super(props);
        this.state = { percentage: props.percentage || 50 }
        this._slide = this._slide.bind(this)
    }

    render() {
        const { vertical, srcOver, srcUnder, controls, styles } = this.props
        return (
            <div className='comparison' style="width:100%;height:100%;position:relative;">
                <figure style="margin:0;width:100%;height:100%;position:relative;">
                    <img src={ srcOver } alt="" style="display:block;position:relative;width:100%;height:100%;object-fill:fill;" />
                    <div style={{
                        height:'100%',
                        width: `${this.state.percentage}%`,
                        left:0,
                        right:0,
                        bottom:0,
                        backgroundImage: `url(${srcUnder})`,
                        ...styles
                    }}></div>

                </figure>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={this.state.percentage}
                        ref={(c) => this._input = c}
                        onChange={this._slide}
                        style="width:100%;height:100%;opacity:0;top:0;position:absolute;"
                    />
            </div>

        )
    }

    _slide() {
        this.setState({
            percentage: this._input.value
        })
    }

}
