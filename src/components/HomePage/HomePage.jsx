import { useState } from "react";
import Button from "../common/Button/Button";
import TextInput from "../common/TextInput/TextInput";
import"./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [plate, setPlate] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const navigate = useNavigate();

    const handlePredict = () => {
        navigate("/results", { state: { plate, date, time } });
    }

    return (
        <div className="home-page">
            <h1>Pico y Placa Predictor</h1>
            <TextInput label="Plate" placeholder={"PBX-1234"} onChange={(p) => setPlate(p)}/>
            <TextInput label="Date" placeholder={"YYYY-MM-DD"} onChange={(d) => setDate(d)}/>
            <TextInput label="Time" type={"time"} onChange={(t) => setTime(t)}/>
            <Button onClick={handlePredict}>Predict</Button>
        </div>
    )
}

export default HomePage;
