const Field = ({ label, placeholder }) => (
  <div>
    <div className="mb-2">
      <label className="text-sm text-gray-700">{label}</label>
    </div>
    <br />
    <div>
      <input
        className="w-full rounded-3xl border border-gray-300 px-4 py-3"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Field;
