import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Karangan Bunga Papan', href: '#', current: true }
  ];

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && (
                <ChevronRight size={16} className="text-gray-400" />
              )}
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.current
                    ? 'text-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;