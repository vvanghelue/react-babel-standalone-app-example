
class SuperCoolGame extends React.Component {
  handleClick() {
  	alert('lol')
  }
  render() {
    return (
      <button className="square" onClick={this.handleClick.bind(this)}>
        test
      </button>
    );
  }
}

export default SuperCoolGame