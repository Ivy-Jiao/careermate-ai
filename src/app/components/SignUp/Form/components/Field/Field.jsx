import { Eye, EyeClosed } from "lucide-react";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";

const Field = ({ label, value, placeholder, onChange, type, error }) => {
  const id = useId();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="mb-2">
        <label className="text-sm text-gray-700" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          className={twMerge(
            "h-12 w-full rounded-3xl border border-gray-300 px-4",
            error && "border-red-500"
          )}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-0 right-0 bottom-0 flex cursor-pointer items-center px-4 text-gray-300"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
      <div className="relative mt-1 text-sm text-red-500">
        <div className="absolute">{error}</div>
      </div>
    </div>
  );
};

export default Field;
