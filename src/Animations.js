import React from "react"

class Animations extends React.Component{
  state = {
    ballx: 0,
    bally: 0,
    dx: 0,
    dy: 0,
  }

   componentDidMount(){
     this.ticker = setInterval(() =>{
       this.tick()
     },8)
   }

  tick() {
    const {ballx, bally, dx, dy} = this.state;

    const newballx = ballx + dx
    const newbally = bally + dy

    this.setState({
      ballx: newballx,
      bally: newbally,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.ballx > length - ballSize){
      this.setState({
        dx: -5,
        ballx: length - ballSize
      })
    }

    if(prevState.ballx < 1) {
      this.setState({
        dx:5,
        ballx: 30,
      })
    }

    // if(prevState.bally > length - ballSize){
    //   this.setState({
    //     dy: -4,
    //     bally: length - ballSize
    //   })
    // }

    // if(prevState.bally < 1){
    //   this.setState({
    //     dy: 4,
    //     bally: 10,
    //   })
    // }
  }

  render() {
    const {ballx, bally} = this.state
    return (
      <div style={styles}>
        <div style={{...ballStyles, top: bally, left: ballx}}></div>
        <div style={{...ballStyles2, left: bally, top: ballx}}></div>
        <div style={{...ballStyles2, bottom: bally, right: ballx}}></div>
        <div style={{...ballStyles2, right: bally, bottom: ballx}}></div>
        <div style={{...ballStyles2, bottom: bally, right: ballx}}></div>
        <div style={{...ballStyles2, bottom: bally, left: ballx}}></div>

      </div>
    )
  }
}


//----------------------------------------- STYLES ----------------------------------- 

const length = 400;
const ballSize = 30

const ballStyles ={
  position: "absolute",
  background: "#ea9a96",
  width: `${ballSize}px`,
  height: `${ballSize}px`,
  borderRadius: `100%`,
}
const ballStyles2 ={
  position: "absolute",
  background: "#bbf1c8",
  width: `${ballSize}px`,
  height: `${ballSize}px`,
  borderRadius: `100%`,
}

const styles = {
  position: "relative",
  background: "#303960",
  margin: "auto",
  border: "1px solid",
  borderRadius: '20px',
  width: `${length}px`,
  height: `${length}px`,
};
export default Animations