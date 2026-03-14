import { Link } from 'react-router-dom';
import { FileCode, Image, Plus, Edit, Trash2, Folder } from 'lucide-react';

export default function AdminGuide() {
  return (
    <div className="animate-fade-in py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-modo-red">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Admin Guide</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          HOW TO MANAGE PRODUCTS
        </h1>
        <p className="text-gray-600 mb-8">
          This guide will help you add, edit, and manage products on your MODO store.
        </p>

        {/* Overview */}
        <div className="bg-modo-red/10 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FileCode className="w-6 h-6 text-modo-red" />
            Quick Overview
          </h2>
          <p className="text-gray-700">
            All products are stored in the file <code className="bg-gray-200 px-2 py-1 rounded">src/data/products.ts</code>. 
            To add or modify products, you need to edit this file following the structure below.
          </p>
        </div>

        {/* Product Structure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Structure</h2>
          <p className="text-gray-600 mb-4">
            Each product must follow this exact format:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`{
  id: 'unique-product-id',           // Unique identifier (no spaces)
  name: 'Product Name',              // Display name
  price: 299,                        // Current price in LE
  originalPrice: 450,                // Original price (for sale items)
  image: 'https://image-url.jpg',    // Product image URL
  category: 'watches',               // Category ID
  description: 'Product description', // Detailed description
  inStock: true,                     // Availability
  sale: true                         // Is on sale?
}`}
            </pre>
          </div>
        </section>

        {/* How to Add a Product */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plus className="w-6 h-6 text-green-600" />
            How to Add a New Product
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Step 1: Open the Products File</h3>
              <p className="text-gray-600">
                Navigate to <code className="bg-gray-100 px-2 py-1 rounded">src/data/products.ts</code> in your project folder.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Step 2: Find the Products Array</h3>
              <p className="text-gray-600">
                Look for the line that says: <code className="bg-gray-100 px-2 py-1 rounded">export const products: Product[] = [</code>
              </p>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Step 3: Add Your Product</h3>
              <p className="text-gray-600 mb-3">
                Add a new product object inside the array. Make sure to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Use a unique ID (e.g., 'watch-5', 'belt-3')</li>
                <li>Choose an appropriate category from the list below</li>
                <li>Use a valid image URL (Unsplash or your own hosting)</li>
                <li>Add a comma after the closing brace of the previous product</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Step 4: Save and Rebuild</h3>
              <p className="text-gray-600">
                Save the file and run <code className="bg-gray-100 px-2 py-1 rounded">npm run build</code> to update your website.
              </p>
            </div>
          </div>
        </section>

        {/* Example */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example: Adding a New Watch</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`// Add this after the last product in the array:
{
  id: 'watch-5',
  name: 'Rolex Submariner Black',
  price: 2500,
  originalPrice: 3500,
  image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=600&fit=crop',
  category: 'watches',
  description: 'Iconic diving watch with black dial and stainless steel bracelet.',
  inStock: true,
  sale: true
},`}
            </pre>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Folder className="w-6 h-6 text-blue-600" />
            Available Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'watches', name: 'Watches' },
              { id: 'belts', name: 'Belts' },
              { id: 'wallets', name: 'Wallets' },
              { id: 'earbuds', name: 'Earbuds' },
              { id: 'hats', name: 'Hats' },
              { id: 'iphone-accessories', name: 'iPhone Accessories' },
              { id: 'mens-accessories', name: "Men's Accessories" },
              { id: 'womens-accessories', name: "Women's Accessories" },
              { id: 'shavers', name: 'Shavers' },
            ].map((cat) => (
              <div key={cat.id} className="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                <span className="font-medium">{cat.name}</span>
                <code className="bg-white px-2 py-1 rounded text-sm text-gray-600">{cat.id}</code>
              </div>
            ))}
          </div>
        </section>

        {/* How to Edit */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Edit className="w-6 h-6 text-orange-600" />
            How to Edit a Product
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
            <li>Open <code className="bg-gray-100 px-2 py-1 rounded">src/data/products.ts</code></li>
            <li>Find the product you want to edit by searching for its ID or name</li>
            <li>Modify the desired fields (price, description, etc.)</li>
            <li>Save the file and rebuild</li>
          </ol>
        </section>

        {/* How to Delete */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Trash2 className="w-6 h-6 text-red-600" />
            How to Delete a Product
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
            <li>Open <code className="bg-gray-100 px-2 py-1 rounded">src/data/products.ts</code></li>
            <li>Find the product you want to remove</li>
            <li>Delete the entire product object (including the curly braces)</li>
            <li>Make sure to remove the trailing comma if it was the last product</li>
            <li>Save and rebuild</li>
          </ol>
        </section>

        {/* Image Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Image className="w-6 h-6 text-purple-600" />
            Product Image Tips
          </h2>
          <div className="bg-white border rounded-lg p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-modo-red">•</span>
                <span>Use square images (1:1 ratio) for best results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-modo-red">•</span>
                <span>Recommended size: 600x600 pixels or larger</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-modo-red">•</span>
                <span>Use high-quality, clear images with good lighting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-modo-red">•</span>
                <span>You can use free images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-modo-red underline">Unsplash</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-modo-red">•</span>
                <span>Add <code className="bg-gray-100 px-1 rounded">?w=600&h=600&fit=crop</code> to Unsplash URLs for consistent sizing</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Need Help */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            If you need assistance with managing your products, feel free to contact us:
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="font-medium">Email:</span>
            <a href="mailto:youssifkarim12@gmail.com" className="text-modo-red hover:underline">
              youssifkarim12@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
