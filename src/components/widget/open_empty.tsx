import React from 'react'
import OpenImage from './open_image'
import './open_empty.css'

interface OpenEmptyProps {
    isImg?: boolean,//是否显示图片
    src?: string,//图片路径
    size?: number,//图片高和宽
    title?: string,//文字
    error?: string,//图片错误时默认占位图
}

function OpenEmpty (props:OpenEmptyProps) {
    //设置isImg默认值
    let isImg = props.isImg || true;
    //设置src默认值
    let src = props.src || '';
    //设置size默认值
    let size = props.size || 150;
    //设置title默认值
    let title = props.title || '暂无数据';

    let empty;
    if(isImg){
        empty = <div className="open-empty-box">
                    <OpenImage className={'open-empty-box-img'} src={src} width={size} height={size} error={props.error}></OpenImage>
                    <p className="open-empty-box-title">{title}</p>
                </div>;
    }else{
        empty = <div className="open-empty-box">
                    <p className="open-empty-box-title">{title}</p>
                </div>;
    }
    return (
        <div className="open-empty">
           {empty}
        </div>
    )
}

export default OpenEmpty;