import React from 'react';
import './App.css';
import Animations from "./Animations"
import {Button, Container,} from "semantic-ui-react";


class App extends React.Component{
  state = {
    // ballx: 0,
    // bally: 10,
    // dx: 5,
    // dy: 4,

    showData: false,
  }

  toggleData = () => {
    this.setState({
      showData: !this.state.showData // setting state to the opposite of what it is
    })
  }


  render(){
    const {ballx, bally, dx, dy} = this.state
    return(
      <Container  style={styles}>
        {this.state.showData && <Animations/>}
        <Button onClick={this.toggleData}  inverted color='#e5e5e5'>Show Animation </Button>
      </Container>
    )
  }
}




const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px",
}
export default App;
