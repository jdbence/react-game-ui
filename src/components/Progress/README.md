#### EXAMPLES:

---

The basic progress element
```js
<div>
  <Progress value={0.1} />
  <Progress value={0.25} status='success' />
  <Progress value={0.5} status='danger'/>
  <Progress value={0.75} status='warning'/>
  <Progress value={1} status='info'/>
</div>
```

Animated progress element
```js
const {between} = require('../../utility');
class RndProgress extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      size: 1
    }
    this.resize = this.resize.bind(this)
  }
  resize () {
    const that = this;
    this.timer = setTimeout(function(){
      const size = between(0, 1);
      that.setState({
        size
      }, that.resize);
    }, 1000);
  }
  componentDidMount(){
    this.resize();
  }
  componentWillUnmount(){
    clearTimeout(this.timer);
  }
  render(){
    const {size} = this.state;
    return <Progress value={size} />
  }
}
;<RndProgress />
```