import Card from "@/app/components/SignUp/Showcase/components/Advantages/components/Card";

import Coach from "./components/Coach";
import PoweredByAI from "./components/PoweredByAI";

const Advantages = () => (
  <div className="absolute right-0 bottom-0 left-0 flex gap-4 *:flex-1">
    <Card title="People find their own coach">
      <Coach />
    </Card>
    <Card title="Powered by AI">
      <PoweredByAI />
    </Card>
  </div>
);

export default Advantages;
