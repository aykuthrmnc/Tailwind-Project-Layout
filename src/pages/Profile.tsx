import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "~/components/Custom/Input";
import { LoginSchema } from "~/validation";

const Profile = () => {
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
    <div className="mx-auto rounded bg-gray-200 p-5 dark:bg-gray-700 lg:mx-64">
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
          showPasswordButton
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
          classNameLabel="label"
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
        <Input.ReactDatePicker
          label="Tarih"
          name="date"
          className="input"
          classNameLabel="label"
          classNameContainer="mb-3"
          control={control}
          register={register}
          errors={errors}
        />
        <Input.Control
          id="search"
          name="search"
          // label="Arama"
          type="search"
          placeholder="Arama"
          className="input"
          classNameLabel="label"
          classNameSearch="opacity-0"
          classNameContainer="mb-3"
          register={register}
          showSearchButton
          errors={errors}
          required
        />
        <Input.Button
          type="button"
          className="mx-auto block"
          classNameContainer="mb-3"
          onClick={() => console.log("csdsdsasd")}
        >
          Kaydet
        </Input.Button>
      </form>
    </div>
  );
};
export default Profile;
