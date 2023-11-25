import Button from "../common/Button/Button";
import TextInput from "../common/TextInput/TextInput";
import"./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Pico y Placa Predictor</h1>
            <TextInput label="Plate" placeholder={"PBX-1234"}/>
            <TextInput label="Date" placeholder={"DD/MM/YYYY"}/>
            <TextInput label="Time" type={"time"}/>
            <Button>Predict</Button>
        </div>
    )
}

export default HomePage;
