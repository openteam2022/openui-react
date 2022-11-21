import React from 'react'

import './open_image.css'


interface OpenImageProps {
    src?:    string,//图片路径
    load?:   string,//默认占位图路径
    error?:  string,//加载错误时图片占位图路径
    width?:  number,//图片宽度
    height?: number,//图片高度
    className?:any,//父组件自定义图片class
}

class OpenImage extends React.Component <any,OpenImageProps> {

    constructor(props:OpenImageProps) {
        super(props);
        this.state = {
            // 设置默认值
            load:   this.props.load  || require('../../assets/img/logo512.png'),//占位图片设置默认图片
            error:  this.props.error || require('../../assets/img/logo512.png'),//加载错误图片设置默认图片
        }
    }
    // 图片错误时加载error占位图
    imgError(e:any) {
        e.onError = null;
        e.target.src = this.state.error;
    }

    render () {
        // 图片父元素默认class 和 父组件自定义class
        let className = 'open-image ' + this.props.className;
        let img;
        // 当父组件调用时参数有图片src时，渲染传参图片
        if(this.props.src){
            //img的样式，宽，高，圆角基本继承外部div的样式
            img = <img src="{this.props.img}" className="open-image-item" onError={(e)=> this.imgError(e)} alt=""/>
        }else{
             // 当父组件调用时参数没有图片src时，渲染默认load占位图
            img = <img src={this.state.load} className="open-image-item" alt=""   />
        }
                //外部div的样式，由父组件传参宽，高，或自定义class配置或者默认的样式配置
        return  <div className={className} style={{height:`${this.props.height}px`,width:`${this.props.width}px`}}>
                    {img}
                </div>
    }

}

export default OpenImage;