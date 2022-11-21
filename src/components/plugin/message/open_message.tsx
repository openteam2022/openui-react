import React from 'react'
import './open_message.css'

interface OpenMessageProps {
    type?: string,//类型
    message?: string,//文本内容
}
class OpenMessage extends React.Component <any,OpenMessageProps> {
    constructor(props:OpenMessageProps){
        super(props);
        this.state = {
            message: this.props.message || '消息提示',//消息提示文本，没有则设置默认值
        }
    }
    render () {
        // 把type类型放到一个数组中
        let arr = ['base', 'success', 'error'];
        // 判断type是否有值，没有则设置默认值
        let type = this.props.type || 'base';
        //判断type值是否是type数组中约定好的值，如果不是就默认base类型
        type = arr.indexOf(type) ? type : 'base';
        //type同样也是css样式名的一部分，方便指定type值时设置对应的样式
        let className = `open-message open-message-${type}`;
        return  <div className={className}>
                    {this.state.message}
                </div>
    }
}


export default OpenMessage;