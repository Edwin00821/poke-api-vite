import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { watch, register, handleSubmit, setValue, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "Bill",
      lastName: "Luo",
      age: 30,
    },
  });
  const onSubmit = (data) => console.log(data);

  const [a, b] = watch(["a", "b"]);

  React.useEffect(() => {
    if (formState.touchedFields.a && formState.touchedFields.b && a && b) {
      setValue("c", `${a} ${b}`);
    }
  }, [setValue, a, b, formState]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("a")} placeholder="a" />
      <input {...register("b")} placeholder="b" />
      <input {...register("c")} placeholder="c" />
      <input type="submit" />

      <button
        type="button"
        onClick={() => {
          setValue("a", "what", { shouldTouch: true });
          setValue("b", "ever", { shouldTouch: true });
        }}
      >
        trigger value
      </button>
    </form>
  );
}
