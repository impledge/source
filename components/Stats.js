import styles from "../styles/Home.module.css";

const metrics = [
  {
    id: 1,
    stat: "62%",
    emphasis: "Companies",
    rest: " have up to 25% of their business processes modeled, but just 2% of the organizations surveyed have all of their processes modeled.",
  },
  {
    id: 2,
    stat: "31%",
    emphasis: "Organizations",
    rest: "have automated at least one business function",
  },
  {
    id: 3,
    stat: "43%",
    emphasis: "Clients",
    rest: "deem too much paperwork to be the biggest cause of wasted time",
  },
  {
    id: 4,
    stat: "50M+",
    emphasis: "Invested",
    rest: "in big data and AI initiatives in 2020, up from 39.7% in 2018 from within the industry",
  },
];

export default function Stats() {
  return (
    <div className={styles.stats}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
            Data
          </h2>
          <p className="mt-3 text-3xl justify-items-center font-extrabold text-white">Solutions</p>
          <p className="mt-5 text-lg text-white">
            Our solutions are programitically tailored to each problem. The
            overall objective is to build technology that allows for easier
            decision making.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-white">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{" "}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
