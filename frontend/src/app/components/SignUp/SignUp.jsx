import Form from "@/app/components/SignUp/Form/Form";
import Showcase from "@/app/components/SignUp/Showcase";

const SignUp = () => (
    <div className="flex *:flex-1 p-8 min-h-screen">
        <Form />
        <Showcase />
    </div>
);

export default SignUp;