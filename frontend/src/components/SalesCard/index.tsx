
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(( ) => {
        axios.get("http://localhost:8080/sales")
        .then(response =>{
            console.log(response, data);
        } );
    }, []);

    return (

        <div className="dsmeta-card">


            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendendor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="show992">#341</th>
                                <th className="show576">08/07/2022</th>
                                <th>Anakim</th>
                                <th className="show992">15</th>
                                <th className="show992">11</th>
                                <th>R$ 55300.00</th>
                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className="show992">#341</th>
                                <th className="show576">08/07/2022</th>
                                <th>Anakim</th>
                                <th className="show992">15</th>
                                <th className="show992">11</th>
                                <th>R$ 55300.00</th>

                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className="show992">#341</th>
                                <th className="show576">08/07/2022</th>
                                <th>Anakim</th>
                                <th className="show992">15</th>
                                <th className="show992">11</th>
                                <th>R$ 55300.00</th>

                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default SalesCard;
function data(response: AxiosResponse<any, any>, data: any) {
    throw new Error("Function not implemented.");
}

