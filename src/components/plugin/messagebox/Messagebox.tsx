import React from 'react'
import ReactDOM from 'react-dom/client'
import OpenMessagebox from './open_messagebox'

/**
 * 封装messagebox组件函数
 * @param options:object类型 
 * options是组件props的参数：title标题，message文本
 * @param fn:function 回调函数，组件触发点击事件后，可以通过回调函数获取结果
 * 
*/
function Messagebox (options?:any,fn?:any) {
    //初始化options
    let option = options || {};

    //判断option是否是object类型
    if(typeof option != 'object'){
        console.error('Message 参数不是 object');
        return false;
    }

     // 判断dom是否已经存在messagebox组件，如果存在先不执行
    let messageboxDom = document.getElementsByClassName('open-messagebox')[0];
    if(messageboxDom){
        return;
    }

    // 创建组件挂载的dom，并添加到body上
    let div = document.createElement('div');
        document.body.appendChild(div);

    // 渲染组件
    const root = ReactDOM.createRoot(div) 
    root.render(
        //设置props参数，对messagebox触发的点击事件进行处理
        <OpenMessagebox title={option.title} message={option.message} onClose={(res:any)=>{handle(root,div,fn,res)}} onConfirm={(res:any)=>{handle(root,div,fn,res)}} />
    );


}
/**
 * messagebox点击事件触发时的执行方法
 * @param root: 用来卸载渲染元素
 * @param div:  用来删除组件
 * @param fn: 回调函数
 * @param res: messagebox点击事件传递的值
*/
function handle(root:any,div:any,fn:any,res:any){
    //触发点击事件返回值传参给回调函数
    if(fn){
        fn(res);
    }
    //点击事件触发后，从dom清除组件
    setTimeout(() => {
        root.unmount();
        document.body.removeChild(div);
    }, 500);  
}
export default Messagebox;