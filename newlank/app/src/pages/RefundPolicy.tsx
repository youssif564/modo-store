import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  return (
    <div className="animate-fade-in">
      <div className="policy-content">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Refund Policy</span>
        </div>

        <h1>Refund Policy</h1>
        
        <p>
          At MODO, we want you to be completely satisfied with your purchase. If you're not 
          happy with your order, we offer a straightforward refund and return policy.
        </p>

        <h2>Return Eligibility</h2>
        <p>
          You can return items within 14 days of delivery if:
        </p>
        <ul>
          <li>The item is unused and in original condition</li>
          <li>All original tags and packaging are intact</li>
          <li>You have the receipt or proof of purchase</li>
          <li>The item is not in the excluded categories listed below</li>
        </ul>

        <h2>Non-Returnable Items</h2>
        <p>
          The following items cannot be returned:
        </p>
        <ul>
          <li>Items that have been used, worn, or washed</li>
          <li>Items with removed tags or damaged packaging</li>
          <li>Personalized or customized items</li>
          <li>Items marked as final sale</li>
          <li>Gift cards</li>
        </ul>

        <h2>How to Return</h2>
        <p>
          To initiate a return:
        </p>
        <ul>
          <li>Contact us at youssifkarim12@gmail.com within 14 days of receiving your order</li>
          <li>Provide your order number and reason for return</li>
          <li>We will provide you with return instructions and a return authorization</li>
          <li>Pack the item securely in its original packaging</li>
          <li>Ship the item to the address we provide</li>
        </ul>

        <h2>Refund Process</h2>
        <p>
          Once we receive and inspect your return:
        </p>
        <ul>
          <li>We will notify you of the approval or rejection of your refund</li>
          <li>If approved, your refund will be processed within 5-7 business days</li>
          <li>Refunds will be issued to the original payment method</li>
          <li>For Cash on Delivery orders, we will arrange a bank transfer</li>
        </ul>

        <h2>Exchange Policy</h2>
        <p>
          We currently do not offer direct exchanges. If you need a different size or color, 
          please return the original item and place a new order for the desired item.
        </p>

        <h2>Damaged or Defective Items</h2>
        <p>
          If you receive a damaged or defective item:
        </p>
        <ul>
          <li>Contact us within 48 hours of delivery</li>
          <li>Include photos of the damaged item and packaging</li>
          <li>We will arrange a replacement or full refund at no additional cost</li>
        </ul>

        <h2>Return Shipping Costs</h2>
        <p>
          <strong>Customer's responsibility:</strong> Return shipping costs are the responsibility 
          of the customer unless the item is defective or we made an error with your order.
        </p>
        <p>
          <strong>Our responsibility:</strong> We will cover return shipping costs for defective 
          items or errors on our part.
        </p>

        <h2>Late or Missing Refunds</h2>
        <p>
          If you haven't received your refund after 10 business days:
        </p>
        <ul>
          <li>Check your bank account again</li>
          <li>Contact your credit card company (refunds may take time to post)</li>
          <li>Contact your bank</li>
          <li>If you've done all of this and still haven't received your refund, contact us at youssifkarim12@gmail.com</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For any questions about our refund policy, please contact:
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
