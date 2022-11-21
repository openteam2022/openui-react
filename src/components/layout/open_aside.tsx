import React from 'react'

interface OpenAsideProps{
    width?:    number,
    bagColor?: string,
    headerH?:  number,
    child?:    React.ReactNode
}

class OpenAside extends React.Component <any,OpenAsideProps> {
    constructor(props:OpenAsideProps) {
        super(props);
        this.state = {
            width:    this.props.width    || 200,
            bagColor: this.props.bagColor || '#fff',
            child:    this.props.child,
            headerH:  0
        }
    }

    componentDidMount () {
        let el = this.refs.openaside as HTMLElement;
        let pel = el.parentNode as HTMLElement;
        let cel = pel.childNodes;
        cel.forEach((item:any)=>{
            let className = item.getAttribute('class')
            if(className.indexOf('open-header') != -1){
                this.setState({
                    headerH: item.offsetHeight
                })
                return;
            }
        })
    }

    render () {
        return  <div className="open-aside" style={{background: `${this.state.bagColor}`,width:`${this.state.width}px`,minWidth:`${this.state.width}px`,height:`calc(100% - ${this.state.headerH}px)`}} ref="openaside">
                    {this.state.child}
                </div>
    }
}

export default OpenAside;