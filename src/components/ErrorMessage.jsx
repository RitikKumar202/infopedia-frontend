const ErrorMessage = ({ message, className }) => {
  return (
    <div
      className={`rounded-lg text-center text-red-600 bg-red-200 mx-auto px-8 py-2 max-w-md ${className}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
