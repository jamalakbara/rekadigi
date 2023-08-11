const Button = ({children, className}) => {
  return (
    <div className={`
      py-4 px-8 inline-flex justify-center items-center gap-2 rounded-lg cursor-pointer font-bold
      sm:py-2 sm:px-4 sm:gap-1 sm:rounded-md sm:text-sm
      md:py-4 md:px-8 md:gap-2 md:rounded-lg md:text-base
      ${className}
    `}
    >
      {children}
    </div>
  )
}

export default Button