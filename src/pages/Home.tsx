import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "~/components/Input";
import { LoginSchema } from "~/validation";

const Home = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div className="mx-64 rounded bg-gray-700 p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input.Control
          id="email"
          type="text"
          name="email"
          label="E-posta"
          className="input"
          classNameLabel="label"
          classNameContainer="mb-3"
          register={register}
          errors={errors}
          required
        />
        <Input.Control
          id="password"
          type="password"
          name="password"
          label="Şifre"
          className="input"
          classNameLabel="label"
          classNameContainer="mb-3"
          register={register}
          errors={errors}
          required
        />
        <Input.Select
          id="select"
          label="Cinsiyet"
          name="select"
          className="input"
          classNameLabel="label"
          classNameContainer="mb-3"
          register={register}
          errors={errors}
        >
          <option value="1">Erkek</option>
          <option value="2">Kadın</option>
        </Input.Select>
        <Input.Control
          id="check"
          name="check"
          label="Onaylıyor musunuz?"
          type="checkbox"
          className="order-first"
          classNameLabel="text-white"
          classNameContainer="mb-3 flex gap-2"
          register={register}
          errors={errors}
        />
        <Input.Control
          id="range"
          type="range"
          label="Yaş"
          name="range"
          className="input px-0"
          classNameLabel="label"
          classNameContainer="mb-3"
          register={register}
          errors={errors}
        />
        <Input.ReactSelect
          label="Cinsiyet"
          name="reactselect"
          options={[
            { label: "Erkek", value: "1" },
            { label: "Kadın", value: "2" },
          ]}
          classNameLabel="label"
          classNameContainer="mb-3"
          control={control}
          register={register}
          errors={errors}
          
        />
        <Input.ReactSelectCreatable
          label="Cinsiyet"
          name="reactselectcreatable"
          options={[
            { label: "Erkek", value: "1" },
            { label: "Kadın", value: "2" },
          ]}
          classNameLabel="label"
          classNameContainer="mb-3"
          control={control}
          register={register}
          errors={errors}
          onCreateOption={(e: any) => console.log(e)}
          
        />
        {/* <FormInput
        label="Tarih"
        type="date"
        name="date"
        containerClass={"mb-3"}
        register={register}
        errors={errors}
        control={control}
      /> */}
        <button className="button" type="submit">
          Kaydet
        </button>
      </form>
    </div>
  );
};
export default Home;
