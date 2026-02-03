import Card from "@/app/components/SignUp/Showcase/components/Advantages/components/Card";
import Coach from "./components/Coach";
import PoweredByAI from "./components/PoweredByAI";

const Advantages = () => (
  <div className="absolute right-0 bottom-0 left-0 flex gap-4 *:flex-1">
    <Card>
      <Coach />
    </Card>
    <Card>
      <PoweredByAI />
    </Card>
  </div>
);

export default Advantages;
