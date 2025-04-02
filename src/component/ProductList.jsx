import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products"); // Update with your backend URL
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <div className="mt-12 px-6 pb-12">
      <div className="bg-gray-200 border-2 border-black rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link to="/productpage" key={product._id}>
              <div className="bg-white p-6 rounded-lg shadow-md h-64 group relative">
                {/* Image */}
                <img
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out"
                />

                {/* Hover Effect - Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
                  {/* Text with Price */}
                  <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    ${product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

