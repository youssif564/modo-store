import emailjs from '@emailjs/browser';
import type { CartItem } from '@/types';

// EmailJS configuration - YOUR CREDENTIALS
const EMAILJS_SERVICE_ID = 'service_h606on5';
const EMAILJS_TEMPLATE_ID = 'template_b2saakk';
const EMAILJS_PUBLIC_KEY = 'RF_jwuITFQBc71jg5';

interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerCity: string;
  items: CartItem[];
  totalPrice: number;
  subtotal?: number;
  shippingCost?: number;
  paymentMethod: 'cod' | 'card';
  orderId: string;
}

export const sendOrderEmail = async (orderData: OrderEmailData): Promise<boolean> => {
  try {
    // Format order items for the email
    const orderItemsText = orderData.items.map(item => 
      `- ${item.name} (Qty: ${item.quantity}) - LE ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    // Calculate totals
    const subtotal = orderData.subtotal || orderData.totalPrice;
    const shipping = orderData.shippingCost || 70;
    const total = orderData.totalPrice;

    const templateParams = {
      // Customer info
      to_name: 'Youssif Karim',
      to_email: 'youssifkarim12@gmail.com',
      from_name: orderData.customerName,
      from_email: orderData.customerEmail,
      
      // Order info
      order_id: orderData.orderId,
      order_date: new Date().toLocaleString('en-EG'),
      
      // Customer details
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      customer_address: `${orderData.customerAddress}, ${orderData.customerCity}`,
      
      // Order items
      order_items: orderItemsText,
      subtotal: `LE ${subtotal.toLocaleString()}`,
      shipping: `LE ${shipping.toLocaleString()}`,
      taxes: 'LE 0 (0%)',
      order_total: `LE ${total.toLocaleString()}`,
      
      // Payment method
      payment_method: orderData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit/Debit Card',
      
      // Full message
      message: `
NEW ORDER RECEIVED!

Order ID: ${orderData.orderId}
Date: ${new Date().toLocaleString('en-EG')}

CUSTOMER INFORMATION:
Name: ${orderData.customerName}
Email: ${orderData.customerEmail}
Phone: ${orderData.customerPhone}
Address: ${orderData.customerAddress}, ${orderData.customerCity}

PAYMENT METHOD: ${orderData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit/Debit Card'}

ORDER ITEMS:
${orderItemsText}

SUBTOTAL: LE ${subtotal.toLocaleString()}
SHIPPING: LE ${shipping.toLocaleString()}
TAXES: LE 0 (0%)

TOTAL: LE ${total.toLocaleString()}
      `.trim()
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      templateParams, 
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send order email:', error);
    return false;
  }
};

// Generate a unique order ID
export const generateOrderId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `MODO-${timestamp}-${random}`;
};
