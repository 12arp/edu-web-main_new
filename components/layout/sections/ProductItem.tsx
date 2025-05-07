import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BACKEND_URL = 'https://sahu-final.onrender.com';

interface ProductItemProps {
  product: {
    _id: string;
    image?: string;
    title: string;
    description?: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { _id, image, title } = product;

  const getFullImageUrl = (imageUrl?: string) => {
    if (!imageUrl) return '/placeholder.png';
    if (imageUrl.startsWith('http')) return imageUrl;
    return `${BACKEND_URL}${imageUrl}`;
  };

  return (
    <Link href={`/products/${_id}`} className="block group">
      <div className="bg-muted/60 dark:bg-card rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col items-center p-4 h-full">
        <div className="w-full h-40 flex items-center justify-center mb-3 bg-white rounded">
          <Image
            src={getFullImageUrl(image)}
            alt={title}
            width={200}
            height={160}
            className="object-contain w-auto h-32"
            onError={(e: any) => {
              e.target.src = '/placeholder.png';
            }}
          />
        </div>
        <div className="w-full text-center">
          <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem; 