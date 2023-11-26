import { useState } from "react";
import Button from "../common/Button/Button";
import TextInput from "../common/TextInput/TextInput";
import"./HomePage.css";
import { useNavigate } from "react-router-dom";
import { isPlate, isDate, isTime } from "../../utils/validator";

const HomePage = () => {
    const [plate, setPlate] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handlePredict = () => {
        if (!plate || !date || !time) {
            setError("All fields are required");
            return;
        }

        if (!isPlate(plate)) {
            setError("Invalid plate format: Must follow ABC-1234 format");
            return;
        }

        if (!isDate(date)) {
            setError("Invalid date format: Must follow YYYY-MM-DD format");
            return;
        }

        if (!isTime(time)) {
            setError("Invalid time format: Must follow HH:MM format");
            return;
        }

        navigate("/results", { state: { plate, date, time } });
    }

    return (
        <div className="home-page">
            <h1>Pico y Placa Predictor</h1>
            {error && (
                <div className="error-container">
                    <h4 className="text-error">Error!</h4>
                    <small className="text-error">{error}</small>
                </div>
            )}
            <TextInput label="Plate" value={plate} placeholder={"PBX-1234"} onChange={(p) => setPlate(p.toUpperCase())}/>
            <TextInput label="Date" placeholder={"YYYY-MM-DD"} onChange={(d) => setDate(d)}/>
            <TextInput label="Time" type={"time"} onChange={(t) => setTime(t)}/>
            <Button onClick={handlePredict}>Predict</Button>
        </div>
    )
}

export default HomePage;
