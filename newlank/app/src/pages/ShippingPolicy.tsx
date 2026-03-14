import { Link } from 'react-router-dom';

export default function ShippingPolicy() {
  return (
    <div className="animate-fade-in">
      <div className="policy-content">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Shipping Policy</span>
        </div>

        <h1>Shipping Policy</h1>
        
        <p>
          At MODO, we strive to deliver your orders quickly and efficiently. Here's everything 
          you need to know about our shipping services.
        </p>

        <h2>Shipping Areas</h2>
        <p>
          We currently ship to all locations within Egypt. We are working on expanding our 
          shipping services to other countries soon.
        </p>

        <h2>Shipping Methods</h2>
        <p>
          We offer the following shipping options:
        </p>
        <ul>
          <li><strong>Standard Shipping:</strong> 3-5 business days</li>
          <li><strong>Express Shipping:</strong> 1-2 business days (additional fees apply)</li>
          <li><strong>Same Day Delivery:</strong> Available in select areas for orders placed before 12 PM</li>
        </ul>

        <h2>Shipping Costs</h2>
        <p>
          <strong>Free Shipping:</strong> We offer FREE standard shipping on all orders over LE 500.
        </p>
        <p>
          <strong>Standard Shipping:</strong> LE 50 for orders under LE 500.
        </p>
        <p>
          <strong>Express Shipping:</strong> LE 100 (available at checkout).
        </p>

        <h2>Order Processing</h2>
        <p>
          All orders are processed within 1-2 business days. Orders placed on weekends or 
          holidays will be processed on the next business day.
        </p>

        <h2>Order Tracking</h2>
        <p>
          Once your order is shipped, you will receive an email with your tracking number. 
          You can use this number to track your package on our website or the courier's website.
        </p>

        <h2>Delivery Information</h2>
        <p>
          Please ensure that:
        </p>
        <ul>
          <li>Your shipping address is complete and accurate</li>
          <li>Someone is available to receive the package at the delivery address</li>
          <li>You have a valid phone number for delivery contact</li>
        </ul>

        <h2>Failed Delivery Attempts</h2>
        <p>
          If delivery fails due to:
        </p>
        <ul>
          <li>Incorrect address provided</li>
          <li>No one available to receive the package</li>
          <li>Unreachable phone number</li>
        </ul>
        <p>
          The package will be returned to us. You will need to pay additional shipping fees 
          for re-delivery or receive a refund minus shipping costs.
        </p>

        <h2>Cash on Delivery (COD)</h2>
        <p>
          We offer Cash on Delivery for all orders within Egypt. With COD:
        </p>
        <ul>
          <li>Pay for your order when it arrives at your door</li>
          <li>Please have the exact amount ready for the delivery driver</li>
          <li>COD orders may require phone verification before shipping</li>
        </ul>

        <h2>Delayed Shipments</h2>
        <p>
          While we strive to meet our delivery times, delays may occur due to:
        </p>
        <ul>
          <li>High order volumes during sale periods</li>
          <li>Weather conditions</li>
          <li>Courier delays</li>
          <li>Public holidays</li>
        </ul>
        <p>
          We will notify you of any significant delays and work to get your order to you as soon as possible.
        </p>

        <h2>Damaged or Lost Packages</h2>
        <p>
          If your package arrives damaged or is lost in transit:
        </p>
        <ul>
          <li>Contact us within 48 hours of expected delivery</li>
          <li>For damaged items, include photos of the package and contents</li>
          <li>We will investigate and provide a replacement or refund</li>
        </ul>

        <h2>International Shipping</h2>
        <p>
          We currently do not offer international shipping. We hope to expand our services 
          to other countries in the near future.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any shipping-related questions, please contact:
        </p>
        <p>
          <strong>Email:</strong> youssifkarim12@gmail.com<br />
          <strong>Owner:</strong> Youssif Karim
        </p>

        <p className="text-gray-500 mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
