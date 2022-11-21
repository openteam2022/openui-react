import React from 'react'
import './open_badge.css'

interface OpenBadgeProps {
    num?: number,// 数字显示的值
    dot?: boolean,// true显示小红点，默认false，显示数字类型
    children?: React.ReactNode,//子组件
    width: number,//当显示数字时，计算badge元素的宽除以2，用来设置绝对定位right的值

}

class OpenBadge extends React.Component <any,OpenBadgeProps>{
    constructor(props:OpenBadgeProps){
        super(props);
        this.state = {
            num: this.props.num || 1,//默认显示0
            dot: this.props.dot || false,//dot默认false，显示数字，不显示小红点
            children: this.props.children, //包裹的子组件
            width: 0,//宽度默认为0
        }
    }
    componentDidMount() {
        /**
         * 计算badge元素宽度
         * 当dot为false和num不为0时
        */
        if(!this.state.dot && this.state.num){
            let el = this.refs.openbadgemark as HTMLElement;
            this.setState({
                width: el.offsetWidth / 2
            })
        }
    }
    render () {
        // 获取dot的值
        let dot = this.state.dot;
        let badge;
        //如果dot为true，num值为大于0的值时显示红点
        if(dot && this.state.num){
            badge = <span className="open-badge-dot"></span>
        }else{
            // 如果dot值为false,且num的值大于0显示数字
            if(this.state.num){
                badge = <span className="open-badge-num" style={{right: `-${this.state.width}px`}} ref="openbadgemark">{this.state.num}</span>;

            }
        }
        return  <div className="open-badge">
                    {badge}
                    {this.props.children}
                </div>
    }
}

export default OpenBadge;