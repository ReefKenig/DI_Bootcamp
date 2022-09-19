const User = (props) => {
  const { userdata } = props;
  const { name, email } = userdata;
  return (
    <div>
      <h2>{name}</h2>
      <h4>{email}</h4>
    </div>
  );
};

export default User;
