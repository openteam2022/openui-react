import React from 'react'
import './open_card.css'
import OpenImage from './open_image'

interface OpenCardProps {
    src: string,//定义图片路径
    title: string,// 定义标题
    text?: any,//文本内容
}

class OpenCard extends React.Component <any,OpenCardProps>{
    constructor(props:OpenCardProps){
        super(props);
        this.state = {
            src: this.props.src,//图片路径
            title: this.props.title,//标题路径
            text: this.props.text || '',//文本内容可有可无
        }
    }
    // 点击card时触发父组件onClick
    onclick(){
        this.props.onClick();
    }
    render () {
        return  <div className="open-card" onClick={()=>{this.onclick()}}>
                    <div className="open-card-img">
                        <OpenImage src={this.props.src}></OpenImage>
                    </div>
                    <div className="open-card-content">
                        <div className="open-card-content-title">{this.state.title}</div>
                        <div className="open-card-content-text">{this.state.text}</div>
                    </div>
                </div>
    }
}

export default OpenCard;