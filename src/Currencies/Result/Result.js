import './Result.css';


function Result(props) {

    return (
        <div>
            <h1>{props.rate.toFixed(2)}</h1>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Result;
