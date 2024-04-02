import styles from  "../../App.module.css"
import Test from "../../components/styleComponents/Test"
import {Title} from "../../components/styleComponents/StyledComponent"
import Bootstrap from "../../components/styleComponents/Bootstrap"
import '../../syles.scss'
import Tailwind from "../../components/styleComponents/Tailwind"
function StyleComponents() {

    console.log(process.env.REACT_APP_API_URL)
    console.log(styles)
    return (
        <div className={styles.App}>
            <p className={"sass-class"}>sass test</p>

            <h1>Hello World</h1>
            <Title theme="dark">Styled Components Test</Title>
            <p>{process.env.REACT_APP_API_URL}</p>

            <Test/>
            <Bootstrap/>
            <Tailwind/>

        </div>
    )
}

export default StyleComponents
