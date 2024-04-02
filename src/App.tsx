import styles from  "./App.module.css"
import Test from "./components/Test"
import {Title} from "./components/StyledComponentTest"
function App() {

    console.log(process.env.REACT_APP_API_URL)
console.log(styles)
  return (
      <div className={styles.App}>

          <h1>Hello World</h1>
<Title theme="dark">Styled Components Test</Title>
          <p>{process.env.REACT_APP_API_URL}</p>

          <Test/>


      </div>
  )
}

export default App
