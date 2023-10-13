import React from 'react';
import { Link } from 'react-router-dom';
import './PricingPlan.css'

function PricingPlan() {
  return (
    <div>
      <h1>Pricing Plans</h1>
      <div className="plan">
        <h2>Free Plan</h2>
        <p>Basic features</p>
        <p>Price: $0/month</p>
        <p>Currently Using</p>
      </div>
      <div className="premplan">
        <h2>Premium Plan</h2>
        <p>Advanced features</p>
        <p>Price: 999/month</p>
        <Link to="https://buy.stripe.com/test_5kA6qI7HvaCQ6NGdQQ">Select Premium Plan</Link>
      </div>
      <div className='goldplan'>
        <h2>Gold Plan</h2>
        <p>All Features + Extra benefits</p>
        <p>Price: 9999/year</p>
        <Link to="https://buy.stripe.com/test_9AQ16oaTHbGU1tm7st">Select Gold Plan</Link>
      </div>
    </div>
  );
}

export default PricingPlan;
