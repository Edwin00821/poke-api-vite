import Input from "./Input";

export default function ListOfInputs({ data }) {
  console.log("data", data);
  return (
    <>
      {data.map((Input1, Input2) => {
        console.log(Input1.register, Input2.register);
        return (
          <div className="mb-4 md:flex md:justify-between" key={`ListOfInputs_${Input1.name}_${Input2.name}`}>
            <div className="mb-4 md:mr-2 md:mb-0">
              <Input
                label={Input1.label}
                name={Input1.name}
                placeholder={Input1.placeholder}
                errors={Input1.errors}
                register={Input1.register}
              />
            </div>
            <div className="md:ml-2">
              <Input
                label={Input2.label}
                name={Input2.name}
                placeholder={Input2.placeholder}
                errors={Input2.errors}
                register={Input2.register}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
