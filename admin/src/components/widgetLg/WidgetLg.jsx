import { useEffect, useState } from "react"; 
import { userRequest } from "../../requestMethods";
import "./widgetLg.css"; 
import { format } from "timeago.js"


export default function WidgetLg() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders");
                setOrders(res.data); 
            } catch {} 
        };
        getOrders(); 
    }, []); 
    const Button = ({ type }) => {
        return <button className={"widthLgButton"+type}>{type}</button>;

    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widthLgTable">
                <tr className="widgetLgTr">
                    <tr className="widgetLgTh">Customer</tr>
                    <tr className="widgetLgTh">Date</tr>
                    <tr className="widgetLgTh">Amount</tr>
                    <tr className="widgetLgTh">Status</tr>

                </tr>
                {orders.map((order) => (
                    <tr className="widgetLgTr" key={order._id}>
                        <td className="widgetLgUser">
                            <span className="widgetLgName">{order.userId}</span>
                        </td>
                        <td className="widgetLgDate">{format(order.createAt)}</td>
                        <td className="widgetLgAmount">${order.amount}</td>
                        <td className="widgetLgStatus">
                            <button type={order.status} />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}