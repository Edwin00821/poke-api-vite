export default function Input({
  label = "Label",
  name = "name",
  placeholder = "placeholder",
  errors,
  register,
}) {
  return (
    <>
      <label
        className={`block mb-2 text-sm font-bold text-gray-700 ${
          errors && "text-red-600"
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...register(name)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded
        border-gray-600 shadow appearance-none focus:outline-sky-500 focus:shadow-outline ${
          errors && "border-red-600 focus:outline-red-500 "
        }`}
      />
      <p className="text-xs italic text-red-500 first-letter:uppercase">
        {errors?.message}
      </p>
    </>
  );
}
