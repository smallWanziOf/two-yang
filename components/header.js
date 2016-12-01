/**
 * Created by tang on 2016/11/24.
 */
import React from "react";
import ReactDOM from "react-dom";
const $ = require('jquery');
/*主容器*/
class Container extends React.Component{
    componentDidMount(){
        $(window).scroll(()=>{
            //PictureContent组件的监听动画
            let PictureContentTop=document.getElementById("tang_picture").offsetTop;
            let sTop= document.body.scrollTop;
            let PictureContentresult = PictureContentTop - sTop;
            let Wheight=window.innerHeight*0.8;
            if(PictureContentresult<=Wheight){
                setTimeout(()=>{
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-picture-context")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-picture-context")[0]).style.opacity="1";
                })
            }
        });
    }
    render(){
        return(
            <div>
                <NavHeader/>
                <HeaderBanner/>
                <WelName/>
                <PictureContent/>
                <PictureBox/>
                <RJSmith/>
                <Contact/>
                <FootBanner/>
                <EndFoot/>
                <GoTop/>
            </div>
        )
    }
}
/*广告轮播组件*/
class HeaderBanner extends React.Component{
    render(){
        return(
            <div className="react-banner">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="need_data/images/slide_1.jpg" alt="..."/>
                        </div>
                        <div className="item">
                            <img src="need_data/images/slide_2.jpg" alt="..."/>
                        </div>
                        <div className="item">
                            <img src="need_data/images/slide_3.jpg" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
/*导航标题*/
class NavHeader extends React.Component{
    componentDidMount(){
        $(".react-navbar-right a").on("click",function(e){
            e.preventDefault();
            switch($(this).html()){
             case "Home" :
                 window.scrollTo(0,0);
                 break;
             case "Introduce" :
                 let PictureContentTop=document.getElementById("tang_picture").offsetTop;
                 let PictureContentscorllPosition=0;
                 let PictureContenttimer=setInterval(()=>{
                     PictureContentscorllPosition+=10;
                     window.scrollTo(0,PictureContentscorllPosition)
                     if(PictureContentscorllPosition>=PictureContentTop){
                         clearInterval(PictureContenttimer)
                     }
                 },1);
                 break;
             case "About" :
                 let RJSmithTop=document.getElementById("tang_RJSmith").offsetTop;
                 let RJSmithTopscorllPosition=0;
                 let RJSmithtimer=setInterval(()=>{
                     RJSmithTopscorllPosition+=15;
                     window.scrollTo(0,RJSmithTopscorllPosition)
                     if(RJSmithTopscorllPosition>=RJSmithTop){
                         clearInterval(RJSmithtimer)
                     }
                 },1);
                 break;
             case "Contact" :
                 let ContactTop=document.getElementById("tang_Contact").offsetTop;
                 let ContactscorllPosition=0;
                 let Contacttimer=setInterval(()=>{
                     ContactscorllPosition+=20;
                     window.scrollTo(0,ContactscorllPosition)
                     if(ContactscorllPosition>=ContactTop){
                         clearInterval(Contacttimer)
                     }
                 },1);
                 break;
                 break;
            }
        })
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-static-top" role="navigation" id="tang_banner">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand react-navbar-left" href="#">FanXi</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right react-navbar-right">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">Introduce</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
/*banner中的标语*/
class WelName extends React.Component{
    arrowClick(){
        let WelNameTop=document.getElementById("tang_picture").offsetTop;
        let WelNameTopscorllPosition=0;
        let WelNametimer=setInterval(()=>{
            WelNameTopscorllPosition+=5;
            window.scrollTo(0,WelNameTopscorllPosition)
            if(WelNameTopscorllPosition>=WelNameTop){
                clearInterval(WelNametimer)
            }
        },1);
    }
    componentDidMount(){
        setTimeout(()=>{
            ReactDOM.findDOMNode(document.getElementsByClassName("react-welname")[0]).style.top="0px";
            ReactDOM.findDOMNode(document.getElementsByClassName("react-welname")[0]).style.opacity="1";
        },500)
        let i=0;
        let timer=setInterval(()=>{
            i++;
            ReactDOM.findDOMNode(document.getElementById("react_arrow")).style.marginTop=i+"px";
            if(i>20)i=0;
        },50)
    }
    render(){
        return(
            <div className="react-welname">
                <p className="container">We love to tell you our story</p>
                <div className="react-welname-click" onClick={this.arrowClick}>Click Go</div>
                <div className="glyphicon glyphicon-arrow-down react-welname-arrow" id="react_arrow" onClick={this.arrowClick}></div>
            </div>
        )
    }
}
/*对图片的介绍模块*/
class PictureContent extends React.Component{
    render(){
        return (
            <div className="container react-picture-context" id="tang_picture" >
                <h5>INTRODUCE</h5>
                <p>If you love the life you live,you will live a life of love. </p>
                <p>How do i say i love you? how do i tell you i care? how do i tell you ive missed you, and let you know im here? </p>
                <p>Where there is great love. there are great miracles. </p>
                <p>Love and you will be loved.</p>
            </div>
        )
    }
}
/*放所有图片的一个BOX*/
class PictureBox extends React.Component{
    animate(node) {
        return ReactDOM.findDOMNode(document.getElementsByClassName(node)[0])
    }
    componentDidMount(){
        let me=this;
        $(window).scroll(()=>{
            //PictureContent组件的监听动画
            let PictureBoxTop=document.getElementById("tang_PictureBox").offsetTop;
            let sTop= document.body.scrollTop;
            let PictureBoxresult = PictureBoxTop - sTop;
            let Wheight=window.innerHeight*0.8;
            if(PictureBoxresult<=Wheight){
                let arr=["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9","img_10","img_11","img_12"];
                let i=0;
                let timer=setInterval(function(){
                    {me.animate(arr[i]).style.opacity="1"}
                    {me.animate(arr[i]).style.bottom="0"}
                    i++;
                    if(i>=arr.length){clearInterval(timer);timer=null;}
                },300);
            }
        });

    }
    render(){
        return(
            <div className="container" id="tang_PictureBox">
                <div className="row" id="react_row1">
                    <div className="col-xs-4 col-md-4 col-lg-4 img_1">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_1.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>24 years</p>
                                    <p>Try hard</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_2" >
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_2.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>1 years</p>
                                    <p>Cherish each other</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_3">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_3.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>24 years</p>
                                    <p>Rabbit boy</p>
                                </div>
                            </b>
                        </a>
                    </div>
                </div>
                <div className="row" id="react_row2">
                    <div className="col-xs-4 col-md-4 col-lg-4 img_4">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_4.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>1 years</p>
                                    <p>Together is happy</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_5">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_5.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>18 years</p>
                                    <p>The background is really suck</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_6">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_6.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>24 years</p>
                                    <p>Cool gesture of love</p>
                                </div>
                            </b>
                        </a>
                    </div>
                </div>
                <div className="row" id="react_row3">
                    <div className="col-xs-4 col-md-4 col-lg-4 img_7">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_7.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>1 years</p>
                                    <p>On the way home from Nanjing</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_8">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_8.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>18 years</p>
                                    <p>A little girl with a braid.</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_9">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_9.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>18 years</p>
                                    <p>This dress is like cooking</p>
                                </div>
                            </b>
                        </a>
                    </div>
                </div>
                <div className="row" id="react_row4">
                    <div className="col-xs-4 col-md-4 col-lg-4 img_10">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_10.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>18 years</p>
                                    <p>This dress is really nice!</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_11">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_11.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>24 years</p>
                                    <p>Ripe taste, do you smell it?</p>
                                </div>
                            </b>
                        </a>
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4 img_12">
                        <a href="#" className="thumbnail react-picture-hover">
                            <img src="need_data/images/pic_12.jpg" alt="..."/>
                            <b>
                                <div>
                                    <p>24 years</p>
                                    <p>An actor of a country</p>
                                </div>
                            </b>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
/*Rob Smith + Jean Smith*/
class RJSmith extends React.Component{
    componentDidMount(){
        $(window).scroll( ()=>{
            //Rob Smith + Jean Smith组件的监听动画
            let RJSmithTop=document.getElementById("tang_RJSmith").offsetTop;
            let sTop= document.body.scrollTop;
            let RJSmithresult = RJSmithTop - sTop;
            let Wheight=window.innerHeight*0.8;
            if(RJSmithresult<=Wheight){
                setTimeout(()=>{
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-bg")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-bg")[0]).style.opacity="1";
                },0);
                setTimeout(()=>{
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-title")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-title")[0]).style.opacity="1";
                },300);
                setTimeout(()=>{
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-left")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-left")[0]).style.opacity="1";
                },600);
                setTimeout(()=>{
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-center")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-center")[0]).style.opacity="1";
                },900);
                setTimeout(()=>{
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-right")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-right")[0]).style.opacity="1";
                },1200)
            }
        });
    }
    render(){
        return (
            <div className="react-bg" id="tang_RJSmith">
                <div className="container">
                    <div className="react-title">
                        <p>ABOUT</p>
                        <p>In the end, it’s not the years in your life that count. It’s the life in your years.</p>
                        <p>I’ll think of you every step of the way.</p>
                    </div>
                    <div className="react-name clearfix">
                        <div className="react-left">
                            <b>Tang JianGuo</b><br/>
                            <span>Trying to have a future,Trying...</span><br/>
                            <span>
                                One needs 3 things to be truly happy living in the world: some thing to do, some one to love, some thing to hope for.
                            </span>
                        </div>
                        <div className="react-center">+</div>
                        <div className="react-right">
                            <b>Fan Xi</b><br/>
                            <span>Beautiful but also lovely,Yeah...</span><br/>
                            <span>
                                Time goes by so fast, people go in and out of your life. You must never miss the opportunity to tell these people how much they mean to you.
                            </span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}
/*Contact*/
class Contact extends React.Component{
    handleClick(){
        window.open("http://fanx.applinzi.com")
    }
    componentDidMount(){
        $(window).scroll( ()=>{
            //Rob Smith + Jean Smith组件的监听动画
            let ContactTop = document.getElementById("tang_Contact").offsetTop;
            let sTop = document.body.scrollTop;
            let Contactresult = ContactTop - sTop;
            let Wheight = window.innerHeight * 0.8;
            if (Contactresult <= Wheight) {
                setTimeout(function(){
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-contact")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-contact")[0]).style.opacity="1";
                })
            }
        })

    }
    render(){
        return(
            <div className="react-contact" id="tang_Contact">
                <div className="container">
                    <h6>CONTACT</h6>
                    <h4>Webpack+React+Bootstrap+Jquery</h4>
                    <h5>This page uses the react framework, the author spent a week finally completed. Thank you for watching</h5>
                    <h5>15656550020@163.com </h5>
                    <div className="btn" onClick={this.handleClick}>GET IN TOUCH</div>
                </div>
            </div>
        )
    }
}
/*footBanner底部轮播*/
class FootBanner extends React.Component{
    componentDidMount(){
        $(window).scroll(()=>{
            let FootBannerTop = document.getElementById("tang_FootBanner").offsetTop;
            let sTop = document.body.scrollTop;
            let FootBannerresult = FootBannerTop - sTop;
            let Wheight = window.innerHeight * 0.8;
            if (FootBannerresult <= Wheight) {
                setTimeout(()=>{
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-footBanner")[0]).style.top="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-footBanner")[0]).style.opacity="1";
                });
            }
        });
        const Libanner=(i)=>{
            $(".react-active").removeClass("react-active");
            $(".react-footBanner-banner>div").eq(i).addClass("react-active")
        }
        $(".react-footBanner ul>li").on("click",(event)=>{
            let i=event.target.getAttribute("data-item");
            $(".react-liactive").removeClass("react-liactive");
            event.target.setAttribute("class","react-liactive");
            console.log(i)
            Libanner(i);
        });
        $(".react-footBanner li").hover(()=>{clearInterval(timer)},()=>{timer=setInterval(animate,4000)});
        const animate=()=>{
            let li=$(".react-liactive").attr("data-item");
            if(li<2){
                $(".react-footBanner li").eq(li).removeClass("react-liactive").next().addClass("react-liactive");
            }else{
                $(".react-footBanner li").eq(li).removeClass("react-liactive");
                $(".react-footBanner li").eq(0).addClass("react-liactive");
            }
            li=$(".react-liactive").attr("data-item");
            Libanner(li);
        }
        let timer=setInterval(animate,4000);
    }
    render(){
        return(
            <div className="react-footBanner" id="tang_FootBanner">
                    <div className="container">
                        <ul>
                            <li className="react-liactive" data-item="0"></li>
                            <li data-item="1"></li>
                            <li data-item="2"></li>
                        </ul>
                        <div className="react-footBanner-banner">
                            <div className="react-active">
                                <p>It is graceful grief and sweet sadness to think of you, but in my heart, there is a kind of soft warmth that can’t be expressed with any choice of words。</p>
                                <b>— Classic</b>
                            </div>
                            <div>
                                <p>A sad thing about life is that when you meet someone who means a lot to you only to find out in the end that it was never bound to be and you just have to let go.</p>
                                <b>— Beautiful</b>
                            </div>
                            <div>
                                <p>Do you understand the feeling of missing someone? It is just like that you will spend along hard time to turn the ice-cold water you have drunk into tears。</p>
                                <b>— Future</b>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
/*foot结尾*/
class EndFoot extends React.Component{
    componentDidMount(){
        $(window).scroll( function() {
            //Rob Smith + Jean Smith组件的监听动画
            let EndFootTop = document.getElementById("tang_endfoot").offsetTop;
            let sTop = document.body.scrollTop;
            let EndFootresult = EndFootTop - sTop;
            let Wheight = window.innerHeight ;
            if (EndFootresult <= Wheight) {
                setTimeout(function(){
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-endfoot")[0]).style.bottom="0px";
                    ReactDOM.findDOMNode(document.getElementsByClassName("react-endfoot")[0]).style.opacity="1";
                });
            }
            //$(".react-endfoot>.container").css("transform","rotateY(36000deg)")
        });
    }
    render(){
        return(
            <div className="react-endfoot" id="tang_endfoot">
                <div className="container">This is a React Page @author Tang JianGuo</div>
            </div>
        )
    }
}
/*返回顶部GoTop*/
class GoTop extends React.Component{
    handleClick(){
        let nowS=document.body.scrollTop;
        let timer=setInterval(()=>{
            nowS-=10;
            window.scrollTo(0,nowS)
            if(nowS<=0){clearInterval(timer)}
        },1)
        window.scrollTo(0,0)
    }
    componentDidMount(){
        $(window).scroll(()=>{
            let scrollP=document.body.scrollTop;
            let componentP=document.getElementById("tang_picture").offsetTop;
            if(scrollP>=componentP){
                $(".react-GoTop").css("opacity",1)
                $(".react-GoTop").css("right","50px")
                $(".react-GoTop").css("-webkit-transform","rotate(360deg)")
            }else{
                $(".react-GoTop").css("opacity",0)
                $(".react-GoTop").css("right","0px")
                $(".react-GoTop").css("-webkit-transform","rotate(720deg)")
            }
        });
    }
    render(){
        return(
            <div className="react-GoTop">
                <ul>
                    <li className="glyphicon glyphicon-arrow-up" onClick={this.handleClick}>TOP</li> 
                </ul>
            </div>
        )
    }
}
export default Container





























