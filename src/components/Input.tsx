import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Controller, Control as RHFControl } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import BaseReactSelect, { Props as ReactSelectProps } from "react-select";
import BaseReactSelectAsync, {
  AsyncProps as ReactSelectAsyncProps,
} from "react-select/async";
import BaseReactSelectCreatable, {
  CreatableProps as ReactSelectCreatableProps,
} from "react-select/creatable";
import BaseReactSelectAsyncCreatable, {
  AsyncCreatableProps as ReactSelectAsyncCreatableProps,
} from "react-select/async-creatable";

// type Props = InputHTMLAttributes<HTMLInputElement> & {
//   endIcon?: boolean;
//   label?: any;
//   id?: string;
//   type?: string;
//   name: string;
//   as?: any;
//   placeholder?: string;
//   register?: any;
//   errors?: any;
//   control?: RHFControl<any>;
//   className?: string;
//   classNameLabel?: string;
//   classNameContainer?: string;
//   textClassName?: string;
//   refCallback?: any;
//   action?: React.ReactNode;
//   rows?: number;
//   labelRequired?: boolean;
//   onChangeValue?: any;
//   repeaterError?: any;
//   disabled?: boolean | undefined;
//   [x: string]: any;
// };

const Input = ({ children }: any) => {
  return children;
};

interface InputProps {
  id?: string;
  name: string;
  label?: any;
  type?: HTMLInputTypeAttribute;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  register?: any;
  errors?: any;
  [x: string]: any;
}

const Control = ({
  id,
  name,
  label,
  type = "text",
  className,
  classNameLabel,
  classNameContainer,
  placeholder,
  rows,
  disabled,
  required,
  register,
  errors,
  ...props
}: InputProps) => {
  return (
    <div className={classNameContainer}>
      {label && (
        <label className={classNameLabel} htmlFor={id}>
          {label} {required && <span className="text-sm text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        aria-invalid={errors?.[name] ? true : false}
        disabled={disabled}
        rows={rows}
        {...(register && register(name))}
        {...props}
      />

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <div className="text-sm text-red-600">{message}</div>
          )}
        />
      )}
    </div>
  );
};

interface SelectProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  register?: any;
  errors?: any;
  [x: string]: any;
}

const Select = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder,
  disabled,
  required,
  register,
  errors,
  children,
  ...props
}: SelectProps) => {
  return (
    <div className={classNameContainer}>
      {label && (
        <label className={classNameLabel} htmlFor={id}>
          {label} {required && <span className="text-sm text-red-600">*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        aria-invalid={errors?.[name] ? true : false}
        disabled={disabled}
        {...(register && register(name))}
        {...props}
      >
        {children}
      </select>

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <div className="text-sm text-red-600">{message}</div>
          )}
        />
      )}
    </div>
  );
};

interface RSProps extends ReactSelectProps {
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  required?: boolean;
  options?: any;
  onChangeValue?: Function;
  control?: any;
  register?: any;
  errors?: any;
  [x: string]: any;
}

const ReactSelect = ({
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz...",
  required,
  control,
  register,
  errors,
  options,
  onChangeValue,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  ...props
}: RSProps) => {
  return (
    <div className={classNameContainer}>
      {label && (
        <label className={classNameLabel}>
          {label} {required && <span className="text-sm text-red-600">*</span>}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <BaseReactSelect
            className={`react-select react-select-container ${
              errors?.[name] ? "is-invalid" : ""
            } ${className}`}
            classNamePrefix="react-select"
            placeholder={placeholder}
            noOptionsMessage={() => "Bulunamadı"}
            options={options}
            isMulti={isMulti}
            isClearable={isClearable}
            // filterOption={(option, query) => String(option.data.label).toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))}
            value={value}
            onChange={(e) => {
              onChange(e);
              if (onChangeValue) {
                onChangeValue(e);
              }
            }}
            isLoading={isLoading}
            {...props}
          />
        )}
      />

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <div className="text-sm text-red-600">{message}</div>
          )}
        />
      )}
    </div>
  );
};

interface RSAProps extends ReactSelectAsyncProps<any, any, any> {
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  required?: boolean;
  options?: any;
  onChangeValue?: Function;
  control?: any;
  register?: any;
  errors?: any;
  [x: string]: any;
}

const ReactSelectAsync = ({
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz...",
  required,
  control,
  register,
  errors,
  options,
  onChangeValue,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  ...props
}: RSAProps) => {
  return (
    <div className={classNameContainer}>
      {label && (
        <label className={classNameLabel}>
          {label} {required && <span className="text-sm text-red-600">*</span>}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <BaseReactSelectAsync
            className={`react-select react-select-container ${
              errors?.[name] ? "is-invalid" : ""
            } ${className}`}
            classNamePrefix="react-select"
            placeholder={placeholder}
            noOptionsMessage={() => "Bulunamadı"}
            options={options}
            isMulti={isMulti}
            isClearable={isClearable}
            // filterOption={(option, query) => String(option.data.label).toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))}
            value={value}
            onChange={(e) => {
              onChange(e);
              if (onChangeValue) {
                onChangeValue(e);
              }
            }}
            // escapeClearsValue
            cacheOptions
            defaultOptions
            loadingMessage={() => "Yükleniyor..."}
            isLoading={isLoading}
            {...props}
          />
        )}
      />

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <div className="text-sm text-red-600">{message}</div>
          )}
        />
      )}
    </div>
  );
};

interface RSCProps extends ReactSelectCreatableProps<any, any, any> {
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  required?: boolean;
  options?: any;
  onChangeValue?: Function;
  control?: any;
  register?: any;
  errors?: any;
  [x: string]: any;
}

const ReactSelectCreatable = ({
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz...",
  required,
  control,
  register,
  errors,
  options,
  onChangeValue,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  ...props
}: RSCProps) => {
  return (
    <div className={classNameContainer}>
      {label && (
        <label className={classNameLabel}>
          {label} {required && <span className="text-sm text-red-600">*</span>}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <BaseReactSelectCreatable
            className={`react-select react-select-container ${
              errors?.[name] ? "is-invalid" : ""
            } ${className}`}
            classNamePrefix="react-select"
            placeholder={placeholder}
            noOptionsMessage={() => "Bulunamadı"}
            options={options}
            isMulti={isMulti}
            isClearable={isClearable}
            // filterOption={(option, query) => String(option.data.label).toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))}
            value={value}
            onChange={(e) => {
              onChange(e);
              if (onChangeValue) {
                onChangeValue(e);
              }
            }}
            formatCreateLabel={(e: any) => e + " oluştur"}
            onCreateOption={props.onCreateOption}
            loadingMessage={() => "Yükleniyor..."}
            isLoading={isLoading}
            {...props}
          />
        )}
      />

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <div className="text-sm text-red-600">{message}</div>
          )}
        />
      )}
    </div>
  );
};

interface RSACProps extends ReactSelectAsyncCreatableProps<any, any, any> {
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  required?: boolean;
  options?: any;
  onChangeValue?: Function;
  control?: any;
  register?: any;
  errors?: any;
  [x: string]: any;
}

const ReactSelectAsyncCreatable = ({
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz...",
  required,
  control,
  register,
  errors,
  options,
  onChangeValue,
  isMulti = false,
  isClearable = true,
  isLoading = false,
  ...props
}: RSACProps) => {
  return (
    <div className={classNameContainer}>
      {label && (
        <label className={classNameLabel}>
          {label} {required && <span className="text-sm text-red-600">*</span>}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <BaseReactSelectAsyncCreatable
            className={`react-select react-select-container ${
              errors?.[name] ? "is-invalid" : ""
            } ${className}`}
            classNamePrefix="react-select"
            placeholder={placeholder}
            noOptionsMessage={() => "Bulunamadı"}
            options={options}
            isMulti={isMulti}
            isClearable={isClearable}
            // filterOption={(option, query) => String(option.data.label).toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))}
            value={value}
            onChange={(e) => {
              onChange(e);
              if (onChangeValue) {
                onChangeValue(e);
              }
            }}
            // escapeClearsValue
            cacheOptions
            defaultOptions
            loadingMessage={() => "Yükleniyor..."}
            isLoading={isLoading}
            formatCreateLabel={(e: any) => e + " oluştur"}
            onCreateOption={props.onCreateOption}
            {...props}
          />
        )}
      />

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <div className="text-sm text-red-600">{message}</div>
          )}
        />
      )}
    </div>
  );
};

Input.Control = Control;
Input.Select = Select;
// Input.Check = Check;
// Input.Range = Range;
Input.ReactSelect = ReactSelect;
Input.ReactSelectAsync = ReactSelectAsync;
Input.ReactSelectCreatable = ReactSelectCreatable;
Input.ReactSelectAsyncCreatable = ReactSelectAsyncCreatable;

export default Input;
