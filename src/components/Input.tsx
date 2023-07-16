import React, { useState } from "react";
import { Controller } from "react-hook-form";
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
import BaseReactDatePicker, { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import "moment/locale/tr";
import moment from "moment";
import { FaEye, FaEyeSlash, FaSearch } from "react-icons/fa";
import classNames from "classnames";
registerLocale("tr", tr);

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
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  classNameLabel?: string;
  classNameSearch?: string;
  classNameContainer?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  searchIcon?: any;
  showSearchButton?: boolean;
  showPasswordButton?: boolean;
  register?: any;
  errors?: any;
}

const Control = ({
  id,
  name,
  label,
  type = "text",
  className,
  classNameLabel,
  classNameSearch,
  classNameContainer,
  placeholder,
  rows,
  disabled,
  required,
  searchIcon,
  showSearchButton = false,
  showPasswordButton = false,
  register,
  errors,
  ...props
}: InputProps) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className={classNameContainer}>
      {label && (
        <label className={classNameLabel} htmlFor={id}>
          {label} {required && <span className="text-sm text-red-600">*</span>}
        </label>
      )}
      <div className="relative">
        {type === "search" && showSearchButton && (
          <div
            className={classNames(
              classNameSearch,
              "pointer-events-none absolute inset-y-0 flex items-center pl-2.5 opacity-70"
            )}
          >
            {searchIcon ?? <FaSearch />}
          </div>
        )}
        <input
          id={id}
          name={name}
          type={inputType}
          className={classNames(className, {
            "pl-8": type === "search" && showSearchButton,
            "pr-8": type === "password" && showPasswordButton,
          })}
          placeholder={placeholder}
          aria-invalid={errors?.[name] ? true : false}
          disabled={disabled}
          rows={rows}
          {...(register && register(name))}
          {...props}
        />
        {type === "password" && showPasswordButton && (
          <button
            type="button"
            title={inputType === "password" ? "Göster" : "Gizle"}
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
            className={
              "absolute inset-y-0 end-0 flex items-center pr-2.5 opacity-70"
            }
          >
            {inputType === "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
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
  children: React.ReactNode;
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  classNameContainer?: string;
}

const Button = ({
  className,
  classNameContainer,
  children,
  ...props
}: ButtonProps) => {
  return (
    <div className={classNameContainer}>
      <button className={classNames(className, "button")} {...props}>
        {children}
      </button>
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
        render={({ field: { onChange, value } }) => (
          <BaseReactSelect
            className={classNames(
              className,
              "react-select react-select-container",
              {
                "is-invalid": errors?.[name],
              }
            )}
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
        render={({ field: { onChange, value } }) => (
          <BaseReactSelectAsync
            className={classNames(
              className,
              "react-select react-select-container",
              {
                "is-invalid": errors?.[name],
              }
            )}
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
        render={({ field: { onChange, value } }) => (
          <BaseReactSelectCreatable
            className={classNames(
              className,
              "react-select react-select-container",
              {
                "is-invalid": errors?.[name],
              }
            )}
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
        render={({ field: { onChange, value } }) => (
          <BaseReactSelectAsyncCreatable
            className={classNames(
              className,
              "react-select react-select-container",
              {
                "is-invalid": errors?.[name],
              }
            )}
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

interface DatePickerProps {
  id?: string;
  name: string;
  label?: any;
  className?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  control?: any;
  register?: any;
  errors?: any;
  min?: any;
  max?: any;
  [x: string]: any;
}

const ReactDatePicker = ({
  id,
  name,
  label,
  className,
  classNameLabel,
  classNameContainer,
  placeholder = "Seçiniz...",
  disabled = false,
  required,
  control,
  register,
  errors,
  min,
  max,
  ...props
}: DatePickerProps) => {
  return (
    <div className={classNameContainer}>
      {label && <label className={classNameLabel}>{label}</label>}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <BaseReactDatePicker
            disabled={disabled}
            autoComplete="off"
            placeholderText={placeholder}
            wrapperClassName="block"
            className={classNames(className, {
              "is-invalid": errors?.[name],
            })}
            // timeFormat="HH:mm"
            // timeIntervals={15}
            // timeCaption="time"
            dateFormat="dd.MM.yyyy"
            name={name}
            showYearDropdown
            showMonthDropdown
            popperPlacement="bottom"
            // disabledKeyboardNavigation
            // value={value}
            selected={value ? new Date(value) : null}
            onChange={(e: any) => {
              onChange(e ? moment(e).format("YYYY-MM-DD") : null);
              if (props.onChangeValue)
                props.onChangeValue(e ? moment(e).format("YYYY-MM-DD") : null);
            }}
            isClearable
            locale={tr}
            minDate={min ? new Date(min) : null}
            maxDate={max ? new Date(max) : null}
          />
        )}
      />

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }: any) => (
            <div className="d-block invalid-feedback">{message}</div>
          )}
        />
      )}
    </div>
  );
};

Input.Control = Control;
Input.Select = Select;
Input.Button = Button;
// Input.Check = Check;
// Input.Range = Range;
Input.ReactSelect = ReactSelect;
Input.ReactSelectAsync = ReactSelectAsync;
Input.ReactSelectCreatable = ReactSelectCreatable;
Input.ReactSelectAsyncCreatable = ReactSelectAsyncCreatable;
Input.ReactDatePicker = ReactDatePicker;

export default Input;
