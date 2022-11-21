import React from 'react'
import './open_popup.css'

interface OpenPopupProps {
    show?: boolean,//是否显示
    bagColor?: string,//背景色
    children?: React.ReactNode,//子组件
}


class OpenPopup extends React.Component <any,OpenPopupProps>  {
    constructor (props:OpenPopupProps) {
        super(props);
        this.state = {
            bagColor: this.props.bagColor || 'rgba(0,0,0,0.2)',
        }
    }
    
    render () {
        let show = this.props.show;
        let className;
        if(show){
            className = 'open-popup open-popup-show';
        }else{
            className = 'open-popup open-popup-hide';
        }
     
        return  <div className={className} style={{background: this.state.bagColor}}>
                    <div className="open-popup-box">
                         {this.props.children}
                    </div>
                </div>
    }
}

export default OpenPopup;