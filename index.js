const Box = props => {
  //  Write your code here.
  const {boxCls, text} = props
  return (
    <div className={boxCls}>
      <p className='box-text'>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='box-bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-container'>
      <Box boxCls='box-small' text='Small' />
      <Box boxCls='box-medium' text='Medium' />
      <Box boxCls='box-large' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
