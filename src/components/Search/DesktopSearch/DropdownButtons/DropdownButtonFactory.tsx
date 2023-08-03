const DropdownButtonFactory = ({ text, customClass }) => {
  return (
    <button className={customClass}>
      {text}
    </button>
  )
}

export default DropdownButtonFactory;