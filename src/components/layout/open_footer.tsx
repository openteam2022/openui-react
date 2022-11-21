import React from 'react'

import './open_footer.css'

/**
 * 使用interface定义props类型
 * @param height:number 元素的高
 * @param bagColor:string 元素的背景色
 * @param child:React.ReactNode 标识子元素
 * @param:?  问号意思是可有可无
*/ 
interface OpenFooterProps {
    height?: number,
    bagColor?: string,
    borColor?: string,
    children?: React.ReactNode
}

/**
 * open-footer布局头部元素
 * @param props传参的数据 并定义类型为OpenFooterProps
*/
function OpenFooter (props:OpenFooterProps) {
    // 设置默认值
    const height = props.height || 55;
    const bagColor = props.bagColor || '#fff'; 
    const borColor = props.borColor || '#fff'; 
    return (
        <div className="open-footer" style={{height:`${height}px`,minHeight:`${height}px`,background:`${bagColor}`,borderBottom:`1px ${borColor} solid`}}>
            {props.children}
        </div>
    );
}

export default OpenFooter;