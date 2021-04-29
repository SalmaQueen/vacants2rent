import YelloRoundButton from "components/Buttons/YelloRoundButton";
import AppLayout from "components/Layouts/AppLayout";
import PaymentCard from "components/Payment/PaymentCard";

import PaymentPartners from "components/Payment/PaymentPartners";
import PaymentTableComponent from "components/Payment/PaymentTableComponent";
import React from "react";

function Payment() {
  return (
    <AppLayout>
      <main style={{backgroundColor:"blue",backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundImage:`url("https://images.pexels.com/photos/3397348/pexels-photo-3397348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`}}>
        <div className="container ">
          <div style={{ padding: "100px 0 50px 0" }}>
            <h1 className="text-white text-center">Cart</h1>
          </div>
          <div className="cards row justify-content-around" >
            <PaymentCard
              bgr="red"
              bgl="red"
              btnTextColor="white"
              week="1 week"
              btnWidth="50%"
              btnText="Select"
              price="800"
            />
            <PaymentCard
              bgr="green"
              bgl="green"
              btnTextColor="white"
              week="2 week"
              btnWidth="50%"
              btnText="Select"
              price="2,500"
            />
            <PaymentCard
              bgr="orange"
              bgl="orange"
              btnTextColor="white"
              week="4 week"
              btnWidth="50%"
              btnText="Select"
              price="4,000"
            />
          </div>
          <PaymentTableComponent />
          
          <PaymentPartners />
        </div>
      </main>
    </AppLayout>
  );
}

export default Payment;
