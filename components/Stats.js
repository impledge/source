/* This example requires Tailwind CSS v2.0+ */
export default function Stats() {
  return (
    <div className="bg-black pt-6 sm:pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl font-extrabold text-white sm:text-4xl">
            Data the right way
          </p>
          <p className="mt-3 text-xl text-white sm:mt-4">
            We offer custom backup & recovery plans for your needs. 
          </p>
        </div>
      </div>
      <div className="mt-10 pb-24 bg-black sm:pb-40">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-black" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Storage
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-400">
                    1TB
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Delivery
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-400">
                    12 Mbps
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Recovery
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-400">
                    24/7
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
