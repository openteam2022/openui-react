import React from 'react'

import './open_header.css'

/**
 * 使用interface定义props类型
 * @param height:number 元素的高
 * @param bagColor:string 元素的背景色
 * @param child:React.ReactNode 标识子元素
 * @param:?  问号意思是可有可无
*/ 
interface OpenHeaderProps {
    height?: number,
    bagColor?: string,
    borColor?: string,
    children?: React.ReactNode
}

/**
 * open-header布局头部元素
 * @param props传参的数据 并定义类型为OpenHeaderProps
*/
function OpenHeader (props:OpenHeaderProps) {
    // 设置默认值
    const height = props.height || 55;
    const bagColor = props.bagColor || '#fff'; 
    const borColor = props.borColor || '#fff'; 
    return (
        <div className="open-header" style={{height:`${height}px`,minHeight:`${height}px`,background:`${bagColor}`,borderBottom:`1px ${borColor} solid`}}>
            {props.children}
        </div>
    );
}

export default OpenHeader;