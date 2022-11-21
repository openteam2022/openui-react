import React from 'react'
import './open_container.css'

interface OpenContainerProps{
    bagColor?: string,
    headerH:   number,
    asideW:    number,
    direction: any,
    children?: React.ReactNode
}

class OpenContainer extends React.Component <any,OpenContainerProps> {
    constructor(props:OpenContainerProps) {
        super(props);
        this.state = {
            bagColor: this.props.bagColor || '#fff',
            headerH:  0,
            asideW:   0,
            direction: 'row',
        }
    }

    componentDidMount () {
        this.setState({
            direction: 'column'
        })
        let el = this.refs.opencontainer as HTMLElement;
        let pel = el.parentNode as HTMLElement;
        let cel = pel.childNodes;
        this.eachNode(cel,(className:any,item:any)=>{
            if(className.includes('open-header')){
                this.setState({
                    headerH: item.offsetHeight,
                })
            }
            if(className.includes('open-aside')){
                this.setState({
                    asideW: item.offsetWidth,
                })
            }
        })

        let elChild = el.childNodes;
        let mark = true;
        this.eachNode(elChild,(className:any)=>{
            if(className.includes('open-aside')){
                this.setState({direction: 'row'})
                mark = false;
            }
        })
        if(mark){
           this.setState({
                direction: 'column'
            }) 
        }
    }
    // 遍历节点
    eachNode(el:any,fn:any){
        el.forEach((item:any)=>{
            let className = item.getAttribute('class')
            return fn(className,item)
        })
    }

    render () {
        return  <div className="open-container" style={{background: this.state.bagColor,width:`calc(100% - ${this.state.asideW}px)`,height:`calc(100% - ${this.state.headerH}px)`,display:'flex',flexDirection: this.state.direction}} ref="opencontainer">
                    {this.props.children}
                </div>
    }
}


export default OpenContainer;