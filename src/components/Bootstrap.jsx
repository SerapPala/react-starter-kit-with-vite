import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
export default  function  Bootstrap(){
return(
<>
    <Button variant="success">buton</Button>
    <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
    >
        <Tab eventKey="home" title="Home">
            Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
            Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
        </Tab>
    </Tabs>

</>
)
}
