const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="h-12 w-full cursor-pointer rounded-3xl bg-[linear-gradient(98deg,#504ffd_12%,#40c3fb_91%)] text-sm font-bold text-white"
  >
    {children}
  </button>
);

export default Button;
