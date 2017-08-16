import React, { Component, PropTypes } from 'react';
import style from './TextablesList.css';
import { faces } from '../assets/faces';


export default class TextablesList extends Component {

    constructor(props){
        super();
    }

    copy(text){
        console.log(text);
        window.copyToClipboard(text);
    }

    render(){                
        return (
            <div>
                {Object.keys(faces).map( (cat) => {
                    return (
                        <div  key={cat}>
                            <div className={style.title} > {cat} </div>
                            <div className={style.wrap}>
                            {faces[cat].map( (face) => {
                                return (
                                    <div key={face.art} className={style.col}>
                                        <button 
                                            className={style.ripple}
                                            onClick={this.copy.bind(this, face.art)} 
                                            ref="button"> 
                                            {face.art} 
                                        </button>
                                    </div>
                                )
                            })}
                            </div>
                            <div className={style.clearfix}></div>
                        </div>

                    )
                })}
            </div>
        )
    }
}