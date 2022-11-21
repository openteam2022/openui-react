import React from 'react'

interface OpenMainProps{
    bagColor?: string,
    headerH:   number,
    footerH:   number,
    asideW:    number,
    children?: React.ReactNode
}

class OpenMain extends React.Component <any,OpenMainProps> {
    constructor(props:OpenMainProps) {
        super(props);
        this.state = {
            bagColor: this.props.bagColor || '#fff',
            headerH:  0,
            footerH:  0,
            asideW:   0,
        }
    }

    componentDidMount () {
        let el = this.refs.openmain as HTMLElement;
        let pel = el.parentNode as HTMLElement;
        let cel = pel.childNodes;
        this.eachNode(cel,(className:any,item:any)=>{
            if(className.includes('open-header')){
                this.setState({
                    headerH: item.offsetHeight,
                })
            }
            if(className.includes('open-footer')){
                this.setState({
                    footerH: item.offsetHeight,
                })
            }
            if(className.includes('open-aside')){
                this.setState({
                    asideW: item.offsetWidth,
                })
            }
        })
    }
     // 遍历节点
    eachNode(el:any,fn:any){
        el.forEach((item:any)=>{
            let className = item.getAttribute('class')
            return fn(className,item)
        })
    }
    render () {
        return  <div className="open-main" style={{background: `${this.state.bagColor}`,width:`calc(100% - ${this.state.asideW}px)`,height:`calc(100% - ${this.state.headerH}px - ${this.state.footerH}px)`}} ref="openmain">
                    {this.props.children}
                </div>
    }
}

export default OpenMain;