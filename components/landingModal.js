import Image from "next/image";
import graph from "../public/graph.jpeg";

import {
  NewspaperIcon,
  UploadIcon,
  SupportIcon,
} from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Data Backup & Recovery",
    href: "#name",
    description:
      "Private, secure, and HIPAA compliant data recovery, and delivery service hosted on Source Projects cloud enviornment.",
    icon: UploadIcon,
  },
  {
    name: "Open Source Initiatives",
    href: "https://github.com/useSource",
    description:
      "Source Projects focus is on driving community first solutions. Our objective is to provide a unique developer experience for those looking to contribute to open source projects.",
    icon: SupportIcon,
  },
  {
    name: "Help Build Community",
    href: "#name",
    description:
      "Are you a developer looking to make an impact? If so then please reach out, we are looking to expand and grow a community of technologist who are passionate about their work.",
    icon: NewspaperIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-black">
      {/* Header */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-white tracking-wide uppercase">
              WELCOME TO
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              THE SOURCE PROJECT
            </p>
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">
                Our way forward is through solving workflow inadequacies by
                leveraging technology. We strive to make meaningful
                contributions to the lives of those who use our products. The
                source for your success!
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

      {/* Overlapping cards */}
      <section
        className="pt-44 -mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="text-white sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-black rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-black hover:text-blue-600"
                >
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
