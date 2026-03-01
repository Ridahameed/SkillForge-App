

export default function PricePage() {
  return (
    <>
      <h1 className="pricing-title">Find the right plan for you</h1>
      <p className="pricing-description">Choose from our flexible pricing options to access the best learning experience.</p>
      <div className="pricing-components">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p>Perfect for beginners looking to explore new skills.</p>
          <ul>
            <li>Access to 50+ courses</li>
            <li>Community support</li>
            <li>Monthly updates</li>
          </ul>
          <button>Get Started</button>  
        </div>
        <div className="pricing-card">
          <h2>Pro Plan</h2>
          <p>Ideal for professionals seeking to advance their careers.</p>
          <ul>
            <li>Access to 100+ courses</li>
            <li>Priority support</li>
            <li>Advanced learning paths</li>
          </ul>
          <button>Get Started</button>  
        </div>
      </div>
    </>
  );
}

