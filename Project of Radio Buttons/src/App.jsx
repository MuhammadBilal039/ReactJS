import { useState } from "react";

function App() {
  const [payment, setPayment] = useState("");
  const payments = [
    {
      id: "UPI",
      info: "Instant transfer via UPI apps",
    },
    {
      id: "Card",
      info: "Pay using credit or debit card",
    },
    {
      id: "COD",
      info: "Pay when the order arrives",
    },
  ];

  console.log(payment);
  return (
    <>
      {payments?.map((item) => {
        return (
          <>
            <label htmlFor={item.id}>
              <input
                id={item.id}
                type="radio"
                name="payments"
                value={item.id}
                checked={payment.id === item.id}
                // Method 1
                // onChange={(e) => setPayment(e.target.value)}

                // Method 2
                onChange={() => setPayment(item)}
              />
              {item.id}
            </label>
          </>
        );
      })}
      {/* Method 1 */}
      {/* <p>Mode of Payment: {payment}</p>
      <p>Details: {payments.find(item => item.id === payment).info}</p> */}

      {/* Method 2 */}
      <p>Mode of Payment: {payment.id}</p>
      <p>Details: {payment.info}</p>
    </>
  );
}

export default App;
