import PropTypes from 'prop-types'

function App() {
  const dom = <h1 className="foo">Hi!</h1>
  return (
    <div>
      <User name={"Taro"} age={10} />
      <User name={"Ken"} age={12} />
      <User name={"Kenta"} age={20} />
    </div>
  )
}

const User = (props) => {
  return <div>Hi! {props.name}, {props.age}</div>
}
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
