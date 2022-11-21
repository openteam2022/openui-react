import React from 'react'

import './open_step.css'

interface OpenStepProps {
    active?: number,//激活到第几个
    children?: React.ReactNode

}

class OpenStep extends React.Component <any,OpenStepProps> {
    
    render () {
        let step;
        let child = this.props.children;
        let active = this.props.active;
        // 判断active是否比子组件数组长度
        if(active > child.length){
            active = child.length
        }
        if(child){
            step =  <ul className="open-step-list"> 
                            {child.map((item:any,i:any)=>{
                                let activeClass = i < active ? 'open-step-active ':' ';
                                let lineClass = i != child.length -1 ? 'open-step-base-line ' : 'open-step-none-line ';
                                let activeLine = i < active - 1 ? 'open-step-active-line ':' ';
                                let className = 'open-step-list-item ' + activeClass + lineClass + activeLine;
                                let markClass = 'osli-mark ' + activeClass;
                                return  <li className={className} key={i} >
                                            <div className={markClass} style={{border: i < active ? '2px #1890ff solid' : ''}}>{i + 1}</div>
                                            <div className="osli-item">{item}</div>
                                        </li>
                                })}
                        </ul>
        }
        return  <div className="open-step">
                    {step}
                </div>
    }
}

export default OpenStep;