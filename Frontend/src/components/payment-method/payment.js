import "../../styles/payment-method/payment.css";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import axios from "axios";
import Navbar from "../admin-dashboard/Navbar/Navbar";
import Sidebar from "../admin-dashboard/Sidebar/Sidebar";

function StripePayment() {
  const [product] = useState({
    name: "Payment",
    price: 5000,
  });
  async function handleToken(token) {
    try {
      const body = {
        product,
        token: {
          id: token.id,
          email: token.email,
        },
      };
      console.log(body);
      const response = await axios.post("http://localhost:5000/checkout", body);
      // take response
      console.log(response.status);
      if (response.status === 200) {
        alert("Success! Payment is completed", { typr: "success" });
      } else {
        alert("Failure! Payment is not completed", { typr: "error" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="smDiv">
        <Sidebar />
        <div className="mainContainer">
          <div className="App">
            <div className="container">
              <br />
              <br />
              <h1 className="text">Stripe Payment Method</h1>
              <br />
              <br />
              <div className="container">
                <StripeCheckout
                  className="center"
                  stripeKey="pk_test_51MLpIsGxawDGp42F9oa2SAWFUh4mKUAbLKAhexNop0bynlGutRAItuiS6Lg97tq9neCvj8wOA71iFcz6EcgVQPBs00DpEngnBb"
                  token={handleToken}
                  amount={product.price}
                  name={product.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StripePayment;
