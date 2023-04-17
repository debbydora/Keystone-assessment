const Button = ({ type, className, title, onClick, icon, name, value }) => {
  return (
    <button
      className={className}
      name={name}
      value={value}
      type={type}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
