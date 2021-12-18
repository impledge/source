/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import filesystem from "../public/filesystem.png";
import team from "../public/teamimage.jpeg";
import Image from "next/image";

export default function Feature() {
  return (
    <div className="relative bg-black pt-16 pb-24 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-white">
                  <InboxIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <p className="text-3xl font-extrabold tracking-tight text-white">
                  Highly secure data
                </p>
                <p className="mt-4 text-lg text-white">
                  Automate your data backup and recovery protocols. Your data
                  will be available in a highly secure, HIPAA compliant, private
                  and structured cloud-based data server. With automated
                  consistency, you will be able to reduce downtime and improve
                  workflow performance.
                </p>
                <div className="mt-6">
                  <a
                    href="#name"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400 hover:bg-green-400"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-24 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="object-cover mt-48 h-48 w-full rounded-xl shadow-xl ring-1 ring-white ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-md"
                src={filesystem}
                alt="Computer file system"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-52">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-white">
                  <SparklesIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <p className="text-3xl font-extrabold tracking-tight text-white">
                  24/7 customer support
                </p>
                <p className="mt-4 text-lg text-white">
                  Source Project extends beyond the bounds of traditional
                  open-source software. Our solutions are programmatically
                  tailored to each user. No matter what type of data needs your
                  business has Source Project offers around-the-clock customer
                  support.
                </p>
                <div className="mt-6">
                  <a
                    href="#name"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400 hover:bg-green-400"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-white ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={team}
                alt="Customer support team"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
