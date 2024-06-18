export default function Input({
  placeholder,
  type = "text",
  error,
  value,
  onChange,
  name,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-neutral-700  px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "bg-neutral-700  border-amber-500 hover:outline outline-white focus:outline-none focus:ring-1 ring-white"
        }`}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </>
  );
}
