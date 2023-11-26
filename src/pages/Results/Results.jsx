import { Link, useLocation } from "react-router-dom";
import ResultsPage from "../../components/ResultsPage/ResultsPage";

const Results = () => {
    const { state } = useLocation();

    return (
        <>
            {state === null ? (
                <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p style={{marginTop: '2rem'}}>
                        <Link to={"/"}>Return to Home</Link>
                    </p>
                </div>
            ) : (
                <ResultsPage state={state} />
            )}
        </>
    );
}

export default Results;
