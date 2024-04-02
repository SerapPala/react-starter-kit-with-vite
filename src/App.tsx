

function App() {

    console.log(process.env.REACT_APP_API_URL)

  return (
      <div>

          <h1>Hello World</h1>

          <p>{process.env.REACT_APP_API_URL}</p>


      </div>
  )
}

export default App
