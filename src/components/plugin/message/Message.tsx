import React from 'react'
import ReactDOM from 'react-dom/client'
import OpenMessage from './open_message'


/**
 * 封装message组件函数
 * @param options:object类型 
 * options参数是组件自定义的数据：type类型，message文本，这些是message需要的props参数
 * 另外还有一个参数duration，是组件隐藏的时间，如果没有写，默认是2秒后隐藏
*/
function Message (options?:any) {
    // 初始化options
    let option = options || {};
    // 检测option如果有值是否是对象类型
    if(typeof option != 'object'){
        console.error('Message 参数不是 object');
        return false;
    }
    // 判断dom是否已经存在message组件，如果存在先不执行
    let messageDom = document.getElementsByClassName('open-message')[0];
    if(messageDom){
        return;
    }
    // 初始化组件隐藏时间，并设置默认值2000
    let duration = option.duration || 2000;

    // 创建组件挂载的dom，并添加到body上
    let div = document.createElement('div');
        document.body.appendChild(div);
    // 渲染组件 
    const root = ReactDOM.createRoot(div) 
    root.render(
        // 渲染组件传递props值
        <OpenMessage type={option.type} message={option.message}/>
    );
    // 定时清除组件
    let time;
    time&&clearTimeout(time); 
    time = setTimeout(() => {
        root.unmount();
        document.body.removeChild(div);
    }, duration + 500);  
}
export default Message;