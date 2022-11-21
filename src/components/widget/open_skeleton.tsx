import React from 'react'

import './open_skeleton.css'

interface OpenSkeletonProps {
    children?: React.ReactNode,//子组件
}

function OpenSkeleton (props:OpenSkeletonProps) {
      
    //子组件为div或其他块元素，设置对应的class实现圆形，方形，和行
  
    return (
        <div className="open-skeleton">
            {props.children}
        </div>
    )
}

export default OpenSkeleton;