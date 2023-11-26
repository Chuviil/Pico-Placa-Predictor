import { Link, useLocation } from "react-router-dom";
import "./ResultsPage.css";
import { Player } from "@lottiefiles/react-lottie-player";
import car_on_road from "../../assets/car_on_road.json";
import bus from "../../assets/bus.json";
import bicycle from "../../assets/bicycle.json";
import isAllowedToCirculate from "../../utils/predictor";

const ResultsPage = () => {
    let {state:{plate, date, time}} = useLocation();

    const allowedToCirculate = isAllowedToCirculate(plate, date, time);

    return (
        <div className="results-page">
            <h1>You are {allowedToCirculate || "not"} allowed to circulate!</h1>
            {allowedToCirculate ? (
                <>
                    <p>You&#39;re all set to circulate at this time. Drive safely!</p>
                    <Player autoplay loop src={car_on_road} style={{ width: 300 }} />
                </>
            ) : (
                <>
                    <p>Maybe you should consider another option to reach your destination</p>
                    <div className="anim-container">
                        <Player autoplay loop src={bus} style={{ width: 300 }} />
                        <Player autoplay loop src={bicycle} style={{ width: 300 }} />
                    </div>
                </>
            )}
            <Link to={"/"}>New Query</Link>
        </div>
    );
}

export default ResultsPage;
