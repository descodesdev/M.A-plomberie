type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
};

type InputProps = BaseProps & {
  as?: "input";
  type?: string;
};

type TextareaProps = BaseProps & {
  as: "textarea";
};

type Props = InputProps | TextareaProps;

export default function Field(props: Props) {
  const { label, name, required } = props;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
        {required ? " *" : ""}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent-blue"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={props.type ?? "text"}
          required={required}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent-blue"
        />
      )}
    </div>
  );
}
