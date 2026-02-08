import { ArrowUpRight } from "lucide-react";

const Card = ({ title, children }) => (
  <div className="rounded-3xl border border-white bg-white/50 p-6">
    <div className="mb-12 flex gap-4">
      <div className="text-lg font-bold">{title}</div>
      <div>
        <div className="ml-2 flex size-8 items-center justify-center rounded-full bg-white">
          <ArrowUpRight />
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default Card;
