import React from "react"

class Animations extends React.Component{
  state = {
    ballx: 2,
    bally: 10,
    dx: 5,
    dy: 4,
  }

   componentDidMount(){
     this.ticker = setInterval(() =>{
       this.tick()
     },100)
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

  componentDidUpdate(prevProps, PrevState) {
    if(PrevState.ballx > length - ballSize){
      this.setState({
        dx: -5,
        ballx: length - ballSize
      })
    }
  }

  render() {
    const {ballx, bally} = this.state
    return (
      <div style={styles}>
        <div style={{...ballStyles, top: bally, left: ballx}}></div>
      </div>
    )
  }
}


//----------------------------------------- STYLES ----------------------------------- 

const length = 500;
const ballSize = 30

const ballStyles ={
  position: "absolute",
  background: "#ea9a96",
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