import styles from  "./App.module.css"
import Test from "./components/Test"
import {Title} from "./components/StyledComponent"
import Bootstrap from "./components/Bootstrap"
import './tailwind.css'
import Tailwind from "./components/Tailwind"
function App() {

    console.log(process.env.REACT_APP_API_URL)
console.log(styles)
  return (
      <div className={styles.App}>

          <h1>Hello World</h1>
<Title theme="dark">Styled Components Test</Title>
          <p>{process.env.REACT_APP_API_URL}</p>

          <Test/>
<Bootstrap/>
          <Tailwind/>

      </div>
  )
}

export default App
