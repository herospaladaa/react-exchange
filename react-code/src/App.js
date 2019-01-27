import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './components/Cards/Cards';
import axios from 'axios';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.addForm = React.createRef()
        this.name = React.createRef()
        this.definition = React.createRef()


    }

    state = {
        rates: {},
        reqSymbols: [
            { name: 'CAD', definition: 'Canadian Dollar' },
            { name: 'IDR', definition: 'Indonesian Rupiah' },
            { name: 'GBP', definition: 'Pound Sterling' },
        ],
        usd: 10000
    }

    componentDidMount() {
        axios.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW')
            .then(response => {
                this.setState({ rates: response.data.rates })
                console.log(response);
            });

    }

    addCurency = (e) => {
        e.preventDefault();

        let reqSymbols = this.state.reqSymbols;
        let name = this.name.current.value.toUpperCase();
        let definition = this.definition.current.value;

        let add = {
            name,
            definition
        }
        reqSymbols.push(add)

        console.log("Nama Currency: "+name)
        console.log("Definisi: "+definition)

        this.setState({
            reqSymbols: reqSymbols
        });

        this.addForm.current.reset();
    }

    removeSymbol = (i) => {
        let reqSymbols = this.state.reqSymbols;
        reqSymbols.splice(i, 1);
        this.setState({
            reqSymbols: reqSymbols
        });
    }

    render() {

        const rates = Object.keys(this.state.rates).map((key, index) => {

            let idx = this.state.reqSymbols.findIndex(x => x.name == key)
            if (idx > -1) {
                return <Cards
                    oneDollars={this.state.rates[key]}
                    mataUang={key}
                    definition={this.state.reqSymbols[idx].definition}
                    key={index}
                    usd={this.state.usd}
                    clickDelete={this.removeSymbol.bind(this, idx)} />;
            }

        })

        const opts = Object.keys(this.state.rates).map((key, index) => {
            let idx = this.state.reqSymbols.findIndex(x => x.name == key)
            if(idx == -1) {
                return <option value={key}>{key}</option> 
            }
        })

        return (
            <div className="row">
                <div className="col align-self-start">

                </div>
                <div className="col align-self-center">
                    <div className="card">
                        <div className="card-header">
                            <small><i>USD - United States Dollars</i></small>
                            <div className="row">
                                <div className="col">
                                    <h5>USD</h5>
                                </div>
                                <div className="col">
                                    <h5 style={{ textAlign: "right" }}>{this.state.usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {rates}
                            <form ref={this.addForm}>
                                <select ref={this.name} className="form-control inputMargin-10">
                                    {opts}
                                </select>
                                <input type="text" ref={this.definition} className="form-control inputMargin-10" placeholder="Definition" />
                                <button className="btn btn-block btn-primary" onClick={this.addCurency} type="button">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col align-self-end">

                </div>
            </div>
        );
    }
}

export default App;
