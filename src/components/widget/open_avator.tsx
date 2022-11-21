import React from 'react'
import './open_avator.css'
import OpenImage from './open_image'

interface OpenAvatorProps {
    size?: any,//定义avator大小
    shape?: string,//定义头像的形状:square圆角方形，circle圆形
    error?: string,//图片错误时占位图
}

class OpenAvator extends React.Component <any,OpenAvatorProps>{
    constructor(props:OpenAvatorProps){
        super(props);
        this.state = {
            size: this.props.size || 'base',
            shape: this.props.shape || 'square',
        }
    }

    render () {
        let className;
        let avator;
        let size = this.state.size;
        if(typeof size === 'number'){
            className = `open-avator-${this.state.shape} `;
            avator = <OpenImage className={className} width={size} height={size} error={this.props.error}></OpenImage>;

        }else{
            className = `open-avator-${this.state.shape} ` + `open-avator-size-${this.state.size}` ;
            avator = <OpenImage className={className} error={this.props.error}></OpenImage>;
        }
        return  <div className="open-avator">
                    {avator}
                </div>
    }
}

export default OpenAvator;