import { AddUser } from '../../db-services/user';

const SignUp = async ({
  name,
  email,
  password,
  userRole
}) => {
  const message = await AddUser({
    filterParams: {
      name,
      email,
      password,
      userRole
    }
  });

  return message;
};

export default SignUp;
