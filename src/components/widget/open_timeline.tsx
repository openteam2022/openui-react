import React from 'react'

import './open_timeline.css'

interface OpenTimelineProps {
    children?: React.ReactNode

}

class OpenTimeline extends React.Component <any,OpenTimelineProps> {
    
    render () {
        let timeline;
        let child = this.props.children ? this.props.children : [];
        //判断子组件是否存在
        if(child){
            timeline =  <ul className="open-timeline-list"> 
                            {child.map((item:any,i:any)=>{
                            return  <li className="open-timeline-box" key={i} style={{borderLeft: i != child.length -1 ? '2px #e4e7ed solid' : ''}}>
                                        <div className="open-timeline-box-mark"></div>
                                        <div className="open-timeline-box-content">{item}</div>
                                    </li>
                            })}
                        </ul>
        }
        return  <div className="open-timeline">
                    {timeline}
                </div>
    }
}

export default OpenTimeline;