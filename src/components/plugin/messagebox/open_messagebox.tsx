import React from 'react'
import './open_messagebox.css'

interface OpenMessageboxProps {
    title?: string,//标题
    message?: string,//文本内容
}
class OpenMessagebox extends React.Component <any,OpenMessageboxProps> {
    constructor(props:OpenMessageboxProps){
        super(props);
        this.state = {
            title: this.props.title || '标题',
            message: this.props.message || '这是一条对话消息'
        }
    }
    // 确认时触发
    onConfirm(){
        let res = true;
        this.props.onConfirm(res)
    }
    // 返回或者关闭时触发
    onClose(){
        let res = false;
        this.props.onClose(res)
    }
    render () {
        return  <div className="open-messagebox">
                    <div className="open-messagebox-box">
                        <div className="open-messagebox-box-title">
                            <span>{this.state.title}</span><span onClick={()=>{this.onClose()}}>x</span>
                        </div>
                        <div className="open-messagebox-box-content">{this.state.message}</div>
                        <div className="open-messagebox-box-footer">
                            <span className="ombf-cancel" onClick={()=>{this.onClose()}}>返回</span>
                            <span className="ombf-confirm" onClick={()=>{this.onConfirm()}}>确定</span>
                        </div>
                    </div>
                </div>
    }
}


export default OpenMessagebox;