import React, {Component} from 'react'
import {Helmet} from 'react-helmet';
import music from './assets/birthday.webm';
import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import cake from './assets/cake.svg';
import Confetti from 'react-canvas-confetti';

const styles = {
  bounceInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class App extends Component{


    constructor(props) {
    super(props);
    this.state = {
      isLightsOn: false,
      isHideMusicButton: false,
      isShowBirthday: false,
      isShowMessage: false
    }
  }

  showBirthday = () => {

    this.setState({
      isShowBirthday: true,
    })
    
    setTimeout(() => {
      this.refConfetti({particleCount: 300});
    }, 1500);
    
  }

  showMessage = () => {
      this.setState({
        isShowMessage: true
      })
  }


  turnOnLights = () => {
    this.setState({
      isLightsOn: true
    })
  }

  turnOnMusic = () => {
    const musics = new Audio(music);
    musics.play();
    this.setState({
      isHideMusicButton: true,
    })
  }

  showConfetti = () => {
    this.reward.rewardMe();
  }

  render() {
    const style = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      
    };
    if(this.state.isLightsOn) {
      return (
        <div>
          <Helmet>
            <style>{'body {background-color: black; transition: all 5s linear; } button {transition: all 5s linear;}'}</style>
          </Helmet>
          <div className="penguin pb-2">
            <div className="bubble"></div>
            <div className="hi">Hi! Sreesha</div>
          <div className="penguin-bottom">
            <div className="right-hand"></div>
            <div className="left-hand"></div>
            <div className="right-feet"></div>
            <div className="left-feet"></div>
          </div>
          <div className="penguin-top">
            <div className="right-cheek"></div>
            <div className="left-cheek"></div>
            <div className="belly"></div>
            <div className="right-eye">
              <div className="sparkle"></div>
            </div>
            <div className="left-eye">
              <div className="sparkle"></div>
            </div>
            <div className="blush-right"></div>
            <div className="blush-left"></div>
            <div className="beak-top"></div>
            <div className="beak-bottom"></div>
          </div>
          </div><br/>
          
        <Confetti
        style={style}
          className={'yourClassName'}
          refConfetti={(ref) => this.refConfetti = ref}
          fire={true}
        />
        
          {this.state.isShowBirthday ? 
          <StyleRoot>
            <center>
              <div style={styles.bounceInDown}>
                <h1 className="text-light">HAPPY BIRTHDAY SREESHA</h1>
                <img src={cake} alt="cake" height="200px" />
              </div>
            </center>
          </StyleRoot>: null}
          
          {!this.state.isHideMusicButton ?  
            <div className="navbar fixed-bottom pb-5 navbar-fade">
            <button className="btn btn-primary mx-auto" onClick={this.turnOnMusic}>Play Music</button>
          </div> : (!this.state.isShowBirthday) ? <div className="navbar fixed-bottom pb-5 navbar-fade">
            <button className="btn btn-primary mx-auto" onClick={this.showBirthday}>Click Here</button>
          </div> : <div className="navbar fixed-bottom pb-5 navbar-fade">
            <button className="btn btn-primary mx-auto" onClick={this.showMessage}>A message for you</button>
          </div>
          }
          {this.state.isShowMessage ? 
          <div className="sp-container">
	<div className="sp-content">
		<div className="sp-globe"></div>
		<p className="frame-1">Today is as beautiful as other days</p>
		<p className="frame-2">but you realize another year has gone in a blink of the eyes</p>
		<p className="frame-3">however, Do you know..?</p>
		<p className="frame-4">today is just special</p>
    <p className="frame-6">so special to you</p>
    <p className="frame-7">that's why Let's make it...</p>
    <p className="frame-8">the best celebration ever</p>
    <p className="frame-9">and let me share a piece of happiness to you</p>
    <p className="frame-10">I made all this as a birthday present to you</p>
    <p className="frame-11">I wish you all the best</p>
    <p className="frame-12">May your life be at ease</p>
    <p className="frame-13">May all your wishes come true</p>
    <p className="frame-14">Remember your ambitions</p>
    <p className="frame-15">you live as a free bird flying in the blue sky</p>
    <p className="frame-16">Now things are different...</p>
    <p className="frame-17">real story of your life is just about to begin</p>
    <p className="frame-18">indeed..</p>
    <p className="frame-19">but don't worry everything's gonna be go good for you</p>
    <p className="frame-20">and I hope you'll find happiness along the way</p>
    <p className="frame-21">keep your spirit up</p>
    <p className="frame-22">enjoy every single moment that you experience today</p>
    <p className="frame-23">fill it with your most beautiful smile</p>
    <p className="frame-24">and make it the best memory..</p>
    <p className="frame-25">lastly...</p>
    <p className="frame-26">I'd like to wish you one more time</p>
		<p className="frame-5">
			<span>A{" "}</span>
			<span>VERY {" "}</span>
			<span>HAPPY {" "}</span>
      <span>BIRTHDAY {" "}</span>
			<span>SREESHA {" "}</span>
		</p>
		
	</div>
</div> : null}
        </div>
      )
    }
   return (
     <div>
       <Helmet>
            <style>{'body { background-color: black;} '}</style>
        </Helmet> 
       <div className="navbar fixed-bottom pb-5">
          <button className="btn btn-primary mx-auto" onClick={this.turnOnLights}>Say Hi!</button>
       </div>
     </div>
   )
  } 
}

export default App;