import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="animate-fade-in">
      <div className="policy-content">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Privacy Policy</span>
        </div>

        <h1>Privacy Policy</h1>
        
        <p>
          At MODO, we take your privacy seriously. This Privacy Policy describes how we collect, 
          use, and protect your personal information when you visit our website or make a purchase.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, including:
        </p>
        <ul>
          <li>Name and contact information (email address, phone number)</li>
          <li>Shipping and billing addresses</li>
          <li>Payment information (processed securely through our payment providers)</li>
          <li>Order history and preferences</li>
          <li>Communications with our customer service team</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about your orders and account</li>
          <li>Send you promotional emails and updates (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Prevent fraud and ensure security</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell your personal information to third parties. We may share your information with:
        </p>
        <ul>
          <li>Shipping carriers to deliver your orders</li>
          <li>Payment processors to handle transactions</li>
          <li>Service providers who assist our business operations</li>
          <li>Law enforcement when required by law</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information 
          from unauthorized access, alteration, disclosure, or destruction. All payment 
          information is encrypted using SSL technology.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience, remember your preferences, 
          and analyze website traffic. You can disable cookies in your browser settings, 
          but this may affect some website functionality.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Withdraw consent where applicable</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> youssifkarim12@gmail.com<br />
          <strong>Owner:</strong> Youssif Karim
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted 
          on this page with an updated effective date.
        </p>

        <p className="text-gray-500 mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
