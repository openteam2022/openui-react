import React from 'react'
import './open_button.css'

interface OpenButtonProps {
    type?: string,//定义type类型
    plain?: boolean,//定义按钮是否有背景颜色
    children?: string,//按钮标题

}

class OpenButton extends React.Component <any,OpenButtonProps>{
    constructor(props:OpenButtonProps){
        super(props);
        this.state = {
            type: this.props.type || 'default',
            plain: this.props.plain || false,
            children: this.props.children || '按钮',
        }
    }

    render () {
        let plain = this.state.plain;
        let button;
        let className = 'open-button-default ' + this.state.type;
        if(plain){
            button = <button className={className}>{this.state.children}</button>;
        }else{
            button = <button className={className}>{this.state.children}</button>;
        }
        return  <div className="open-button" onClick={()=>{this.props.onClick()}}>
                    {button}
                </div>
    }
}

export default OpenButton;