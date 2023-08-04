const Button = ({children, className}) => {
  return (
    <div className={`py-4 px-8 inline-flex justify-center items-center gap-2 rounded-lg cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

export default Button