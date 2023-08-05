const Paragraph = ({children, className}) => {
  return (
    <p className={`font-medium ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph