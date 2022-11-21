import React from 'react'
import OpenImage from './open_image'

import './open_navbar.css'

/**
 * 使用interface定义props类型
 * @param logo:  string 标题栏logo
 * @param title: string 标题栏网站名
 * @param data:  any[]  菜单栏数据，类型是任意的数组类型
*/ 
interface OpenNavbarProps {
    logo?:string,
    title?:string,
    menu?: any[],
    top: number
}

/**
 * 菜单栏的默认数据
 * :any[] 定义类型为任意数组类型
*/
var menu:any[] = [
    {
        title: '首页',
        link: '/'
    },
    {
        title: '产品',
        link: '/'
    },
    {
        title: '哈哈',
        childs: [
            {
                title: '首页',
                link: '/'
            },
            {
                title: '产品',
                link: '/'
            }
        ]
    },
] 

/**
 * open-navbar组件
 * @param any,OpenNavbarProps类型
*/
class OpenNavbar extends React.Component <any,OpenNavbarProps> {
    //props后需要定义类型
    constructor(props:OpenNavbarProps) {
        super(props);
        //获取props参数并设置默认值
        this.state = {
            logo: this.props.logo || require('../../assets/img/open.png'),
            title: this.props.title || 'openui-react',
            menu: this.props.menu || menu,
            top: 0
        }
    }
    componentDidMount() {
        // 类型断言，需要手动指定值的类型
        let el = this.refs.opennavbar as HTMLElement;
        this.setState({top: el.offsetHeight});
    }
    render() {
        //需要判断一下菜单栏数据，因为是用的本地生命的数据，所以确定有，但是一直报错，判断一下后正常显示了
        const menus = this.state.menu ? this.state.menu : [];
        return  <div className="open-navbar" ref="opennavbar">
                    <div className="open-navbar-brand">
                        <OpenImage width={40} height={40} img={'aaaa'}></OpenImage>
                        <p className="open-nav-brand-title">{this.state.title}</p>
                    </div>
                    <ul className="open-navbar-nav">
                        {menus.map((item:any,i)=>{
                        return  <li key={i}>
                                {item.childs
                                ?   <div>
                                        <p>{item.title}</p>
                                        <ul style={{top:`${this.state.top}px`}}>
                                            {item.childs.map((items:any,index:any)=>{
                                                return <li key={index} >{items.title}</li>
                                            })}
                                        </ul>
                                    </div>
                                : <div><p>{item.title}</p></div>
                                }
                                </li>
                        })}
                    </ul>
                </div>
    }
}

export default OpenNavbar;