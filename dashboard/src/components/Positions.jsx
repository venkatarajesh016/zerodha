import React , {useState, useEffect}from "react";
// import { positions } from "../data/data";
import axios from "axios";
const Positions = () => {
  const [allpositions, setAllPositions] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/allpositions").then((response) => {
      setAllPositions(response.data);
    });
  }, []);
  
  return (
    <>
      <h3 className="title">Positions ({allpositions.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allpositions.map((stock, index) => {
            const Loss = stock.isLoss ? false : true;
            const isLossClass = Loss ? "profit" : "loss";
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>

                <td className={isLossClass}>{stock.net}</td>
                <td className={isLossClass}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
