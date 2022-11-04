
export default function card(props) {
    return (
        <div className="card">
            {props.url && <img src={props.url} alt="img" className="cardImg"/>}
            <div className="cardStats">
                
                <span>{props.rating}</span>
                <span>India</span>
                <div>
                    <p>Life lesson with {props.name}</p>
                    <p className="bold">From ${props.price} / person</p>
                </div>
            </div>
        </div>

    )
};
