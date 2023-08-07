const Button = ({children, className}) => {
  return (
    <div className={`
      py-4 px-8 inline-flex justify-center items-center gap-2 rounded-lg cursor-pointer
      sm:py-2 sm:px-4 sm:gap-1 sm:rounded-md sm:text-sm
      ${className}
    `}
    >
      {children}
    </div>
  )
}

export default Button