import FormInput from "@/components/FormInput";
import useFormHook from "@/components/useFormHook";

const Form = () => {
  const { values, errors, handleChange, handleSubmit, handleAddField } = useFormHook();
  return (
    <div
      className="form__container"
      id="form__container"
      data-testid="form__container"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4 flex flex-col my-2"
      >
        {values?.map((value, index) => {
          return (
            <div>
              <FormInput
                type="text"
                label="Name"
                name="name"
                placeholder="-- Enter name --"
                inputType={"input"}
                value={value.name}
                error={errors[index]?.name}
                onChange={(e) => handleChange(index, e)}
              />
              <FormInput
                type="email"
                label="Email"
                name="email"
                placeholder="-- Enter email --"
                inputType={"input"}
                value={value.email}
                error={errors[index]?.email}
                onChange={(e) => handleChange(index, e)}
              />
              <FormInput
                type="text"
                label="Phone"
                name="phone"
                placeholder="-- Enter phone --"
                inputType={"input"}
                value={value.phone}
                error={errors[index]?.phone}
                onChange={(e) => handleChange(index, e)}
              />
              <FormInput
                type="text"
                label="Message"
                name="message"
                placeholder="-- Enter message --"
                inputType={"textarea"}
                value={value.message}
                error={errors[index]?.message}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          );
        })}

        <div>
          <button type="button" onClick={handleAddField}>
            Add More
          </button>
          <div>
            <button type="button" >
              Cancel
            </button>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
