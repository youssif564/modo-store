import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, User, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="animate-fade-in py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Contact</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
          CONTACT US
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg border">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              SEND US A MESSAGE
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  rows={5}
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-modo-red text-white py-4 h-auto text-lg font-bold hover:bg-red-700"
              >
                <Send className="w-5 h-5 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a question or need assistance? We're here to help! Reach out to us 
              through any of the following channels and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {/* Owner Name */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-modo-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-modo-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Store Owner</h3>
                  <p className="text-gray-600">Youssif Karim</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-modo-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-modo-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <a 
                    href="mailto:youssifkarim12@gmail.com"
                    className="text-gray-600 hover:text-modo-red transition-colors"
                  >
                    youssifkarim12@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-modo-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-modo-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">Egypt</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">BUSINESS HOURS</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Saturday - Thursday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
