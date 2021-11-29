import Image from 'next/image';
import graph from '../public/graph.jpeg';

export default function Modal() {
  return (
    <div className="bg-white py-10 pb-14 lg:pb-24 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-28 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
            <Image
              src={graph}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1">
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">
                Our way forward is through solving workflow inadequacies
                by leveraging technology. We strive to make meaningful contributions
                to the lives of those who use our products. The source for your success!
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>Core Developers,</span>
                  <span>Source Project</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
