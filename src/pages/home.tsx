import React from 'react'

import './home.css'

import OpenHeader from '../components/layout/open_header'
import OpenNavbar from '../components/widget/open_navbar'
import OpenButton from '../components/widget/open_button'
import OpenAside from '../components/layout/open_aside'
import OpenMain from '../components/layout/open_main'
import OpenContainer from '../components/layout/open_container'
import OpenFooter from '../components/layout/open_footer'
// import OpenAvator from '../components/widget/open_avator'
// import OpenBadge from '../components/widget/open_badge'
// import OpenCard from '../components/widget/open_card'
// import OpenEmpty from '../components/widget/open_empty'
// import OpenSkeleton from '../components/widget/open_skeleton'
import OpenTimeline from '../components/widget/open_timeline'
import OpenStep from '../components/widget/open_step'
import OpenPopup from '../components/widget/open_popup'
// import OpenMessage from '../components/plugin/message/open_message'
import Message from '../components/plugin/message/Message'
// import OpenMessagebox from '../components/plugin/messagebox/open_messagebox'
import Messagebox from '../components/plugin/messagebox/Messagebox'

// import OpenImage from '../components/widget/open_image'

interface HomeProps {
    isShow: boolean
}
class Home extends React.Component<any,HomeProps>{
    constructor(props:any){
        super(props)
        this.state = {
            isShow: false
        }
    }
    toToggole(){
        this.setState({
            isShow: this.state.isShow ? false : true
        })

        // Message({
        //     type:'error',
        //     message: '这是一条失败的消息'
        // })
        // Messagebox({
        //     title: '哈哈系统提示',
        //     message: '我们的目标是：周一笑到周七'
        // },(res:any)=>{
        //     console.log("messagebox组件点击结果：" + res)
        // })
    }
    render () {
         return <div className="home">
           {/* <OpenContainer>
                <OpenHeader height={55} borColor={'#eee'}>
                    <OpenNavbar title={"openui"}/>
                </OpenHeader>
                <OpenContainer>
                    <OpenAside bagColor={'#eee'}></OpenAside>
                    <OpenContainer>
                        <OpenMain bagColor={'#ddd'}></OpenMain>
                        <OpenFooter></OpenFooter>
                    </OpenContainer>
                </OpenContainer>
            </OpenContainer>*/}
            <OpenContainer>
                <OpenAside bagColor={'#eee'}></OpenAside>
                <OpenContainer>
                    <OpenHeader borColor={'#eee'}>
                        <OpenNavbar title={"reactui"} img={'aaa'}/>
                    </OpenHeader>
                        <OpenMain>
                            {/*<OpenMessagebox></OpenMessagebox>*/}
                            {/*<OpenMessage type={'succe'}></OpenMessage>*/}



                            {/*<OpenPopup show={this.state.isShow}>
                                <div style={{width:'300px',lineHeight:'300px',background:'#fff',textAlign:'center'}}>
                                    <OpenButton type="primary" onClick={()=>{this.toToggole()}}>关闭吧</OpenButton>
                                </div>
                                 
                            </OpenPopup>

                            <OpenButton type="primary" onClick={()=>{this.toToggole()}}>显示</OpenButton>
                            */}


                            {/*<div onClick={()=>{this.toToggole()}}>点我</div>*/}
                           {/* <OpenStep active={2}>
                                <div>第一步</div>
                                <div>第二步</div>
                                <div>第三步</div>
                            </OpenStep>*/}
                        <OpenTimeline>
                            <div>  
                                <div style={{fontSize:' 15px',color:'#333',height:'30px'}}>我是标题</div>
                                <div style={{fontSize:' 13px',color:'#999',height: '30px'}}>2022-04-12 20:46</div>
                            </div>
                            <div>  
                                <div style={{fontSize:' 15px',color:'#333',height:'30px'}}>我是标题</div>
                                <div style={{fontSize:' 13px',color:'#999',height: '30px'}}>2022-04-12 20:46</div>
                            </div>
                            <div>  
                                <div style={{fontSize:' 15px',color:'#333',height:'30px'}}>我是标题</div>
                                <div style={{fontSize:' 13px',color:'#999',height: '30px'}}>2022-04-12 20:46</div>
                            </div>
                        </OpenTimeline>



                         {/*   <OpenSkeleton>
                               
                                <div className="open-skeleton-square"></div>
                                <div className="open-skeleton-pie"></div>
                                <div className="open-skeleton-line-sm"></div>
                                <div className="open-skeleton-line-base"></div>
                                <div className="open-skeleton-line-lg"></div>
                                <div className="open-skeleton-line"></div>
                            </OpenSkeleton>*/}





                            {/*<OpenEmpty size={100}></OpenEmpty>*/}



                            {/*<OpenButton type={'danger'}>danger</OpenButton>
                            <div style={{marginBottom:'100px'}}></div>
                            <OpenAvator shape={'circle'} size={'lg'} ></OpenAvator>
                            <div style={{marginBottom:'100px'}}></div>
                            <OpenBadge num={100}>
                                <OpenButton type={'primary'}>primary</OpenButton>
                            </OpenBadge>
                            <div style={{marginTop:'100px'}}></div>
                             <OpenBadge dot={true} >
                                <OpenButton type={'primary'}>primary</OpenButton>
                            </OpenBadge>
*/}
                            {/*<OpenImage></OpenImage>*/}
                            {/*<OpenCard title={'我是宣传家'} text={'哈哈，我是宣传家'} onClick={()=>{console.log("点击了")}}></OpenCard>*/}
                        </OpenMain>
                        <OpenFooter></OpenFooter>
                    </OpenContainer>
            </OpenContainer>
        </div>
    }
   
}

export default Home;