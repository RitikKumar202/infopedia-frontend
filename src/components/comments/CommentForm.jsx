import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4 mt-2">
        <textarea
          className="w-full focus:outline-none placeholder:text-secondary placeholder:text-xs min-[400px]:placeholder:text-sm md:placeholder:text-base text-dark-hard bg-transparent"
          placeholder="What are your thoughts?"
          rows="5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="text-sm md:text-base py-1 px-4 rounded-md bg-red-500 text-white font-semibold min-[420px]:mt-5"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="text-sm md:text-base py-1 px-4 rounded-md bg-primary text-white font-semibold mt-5"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
