function App() {
  const dom = <h1 className="foo">Hi!</h1>
  return (
    <div>
      <User name={"Taro"} age={10} />
      <User name={"Ken"} age={12} />
      <User name={"Kenta"} />
    </div>
  )
}

const User = (props) => {
  return <div>Hi! {props.name}, {props.age}</div>
}
User.defaultProps = {
  age: 20
}

export default App;
