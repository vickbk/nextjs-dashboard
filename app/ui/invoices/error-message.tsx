export const ErrorMessage = ({
  errors = [],
  id,
}: {
  errors?: string[];
  id: string;
}) => {
  return (
    <div className={id} aria-live="polite" aria-atomic="true">
      {errors.map((error, key) => (
        <p className="mt-2 text-sm text-red-500" key={key}>
          {error}
        </p>
      ))}
    </div>
  );
};
