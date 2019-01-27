import React from 'react';
import './Cards.css';

const cards = (props) => {
    return (
        <div className="card marginBottomCards">
            <div className="card-body">
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                            <div className="col">
                                <h5>{props.mataUang}</h5>
                            </div>
                            <div className="col">
                                <h5 style={{ textAlign: "right" }}>{parseFloat(props.oneDollars * props.usd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                            </div>
                        </div>
                        <small><i>{props.mataUang} - {props.definition}</i><br /></small>
                        <small><i>1 USD = {props.mataUang} {props.oneDollars}</i></small>
                    </div>
                    <div className="col-2 text-center cardMinus">
                        <button className="btn btn-danger" onClick={props.clickDelete}>(-)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cards;
