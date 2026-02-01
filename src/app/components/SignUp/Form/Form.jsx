import Button from "@/app/components/SignUp/Form/components/Button";
import Field from "@/app/components/SignUp/Form/components/Field";
import LoginLink from "@/app/components/SignUp/Form/components/LoginLink";

const Form = () => (
  <form className="my-auto px-[125px]">
    <div className="mb-16">
      <h1 className="text-[40px] font-black">Create Your Account</h1>
      <p className="mt-3 text-sm text-gray-700">
        Join CareerMate AI and start your smart career journey
      </p>
    </div>

    <div className="space-y-6">
      <Field label="Full Name" placeholder={"Your full name"} />
      <Field label="Email" placeholder={"Your email"} />
      <Field label="Password" placeholder={"Create a password"} />
    </div>

    <div className="mt-10 space-y-6">
      <Button>Create Account</Button>
      <LoginLink />
    </div>
  </form>
);

export default Form;
