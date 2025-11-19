'use client';

import { useRouter } from 'next/navigation';

interface GoBackButtonProps {
  className?: string; // optional for custom styling
}

export default function GoBackButton({ className }: GoBackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.back(); // navigates to previous page
  };

  return (
    <div className="mt-8 flex justify-end">
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 ${className || ''}`}
    >
      Go Back
    </button>
    </div>
  );
}
