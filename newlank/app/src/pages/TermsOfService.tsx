import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="animate-fade-in">
      <div className="policy-content">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Terms of Service</span>
        </div>

        <h1>Terms of Service</h1>
        
        <p>
          Welcome to MODO. By accessing or using our website, you agree to be bound by these 
          Terms of Service. Please read them carefully before making a purchase.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, placing an order, or creating an account, you 
          agree to these Terms of Service and our Privacy Policy. If you do not agree with 
          any part of these terms, you may not use our services.
        </p>

        <h2>2. Account Registration</h2>
        <p>
          To make purchases, you may need to create an account. You are responsible for:
        </p>
        <ul>
          <li>Providing accurate and complete information</li>
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized use</li>
        </ul>

        <h2>3. Product Information</h2>
        <p>
          We make every effort to display our products accurately, including:
        </p>
        <ul>
          <li>Product descriptions and specifications</li>
          <li>Pricing information</li>
          <li>Product images</li>
        </ul>
        <p>
          However, we do not guarantee that product descriptions, images, or other content 
          are accurate, complete, reliable, current, or error-free. Colors may appear 
          differently on different devices.
        </p>

        <h2>4. Pricing and Payment</h2>
        <p>
          All prices are listed in Egyptian Pounds (LE) and are subject to change without notice. 
          We reserve the right to:
        </p>
        <ul>
          <li>Modify prices at any time</li>
          <li>Cancel orders due to pricing errors</li>
          <li>Refuse service to anyone</li>
        </ul>
        <p>
          Payment must be made in full before orders are processed. We accept:
        </p>
        <ul>
          <li>Cash on Delivery (COD)</li>
          <li>Credit/Debit Cards</li>
          <li>Other payment methods as indicated at checkout</li>
        </ul>

        <h2>5. Order Acceptance</h2>
        <p>
          Your receipt of an order confirmation does not constitute our acceptance of your order. 
          We reserve the right to:
        </p>
        <ul>
          <li>Accept or decline any order for any reason</li>
          <li>Limit quantities purchased per person or order</li>
          <li>Discontinue any product at any time</li>
        </ul>

        <h2>6. Shipping and Delivery</h2>
        <p>
          Delivery times are estimates and not guaranteed. We are not responsible for delays 
          caused by:
        </p>
        <ul>
          <li>Courier services</li>
          <li>Weather conditions</li>
          <li>Incorrect address information provided by customer</li>
          <li>Other circumstances beyond our control</li>
        </ul>

        <h2>7. Returns and Refunds</h2>
        <p>
          Our return and refund policies are outlined in our Refund Policy. By making a purchase, 
          you agree to the terms of our Refund Policy.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, images, and software, 
          is the property of MODO or our content suppliers and is protected by copyright and 
          other intellectual property laws. You may not:
        </p>
        <ul>
          <li>Copy, reproduce, or distribute our content without permission</li>
          <li>Use our trademarks without written consent</li>
          <li>Modify or create derivative works from our content</li>
        </ul>

        <h2>9. User Conduct</h2>
        <p>
          When using our website, you agree not to:
        </p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Impersonate any person or entity</li>
          <li>Interfere with the operation of our website</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Engage in fraudulent activities</li>
        </ul>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, MODO shall not be liable for:
        </p>
        <ul>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of profits, revenue, or data</li>
          <li>Damages exceeding the amount paid for the product</li>
        </ul>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold MODO harmless from any claims, damages, or expenses 
          arising from your use of our website or violation of these terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws 
          of Egypt. Any disputes shall be resolved in the courts of Egypt.
        </p>

        <h2>13. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be 
          effective immediately upon posting. Your continued use of our website constitutes 
          acceptance of the modified terms.
        </p>

        <h2>14. Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact:
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
