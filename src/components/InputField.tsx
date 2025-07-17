type InputFieldType = {
  text: string
  prevText: string
  operator: string
}

export const InputField = ({ text, prevText, operator }: InputFieldType) => {
  return (
    <>
      <div className="input w-full h-6 mb-1 bg-base-100 disabled:border-2 disabled:border-solid disabled:border-accent">
        {prevText + " " + operator || ""}
      </div>

      <div className="input w-full bg-base-100 disabled:border-2 disabled:border-solid disabled:border-accent">
        {text || ""}
      </div>
    </>
  )
}
