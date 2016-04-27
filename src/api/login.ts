import usersMock from './mock/users';

export function login(username, password) {
  return new Promise((resolve, reject) => {
    const foundUsers = usersMock.filter((user) => user.username === username);

    const isValid = (
      foundUsers.length === 1 &&
      foundUsers[0].password === password
    );

    if (isValid) {
      setTimeout(() => resolve({
        token: '1234-5678-9101-1213',
        profile: {
          firstName: foundUsers[0].firstName,
          lastName: foundUsers[0].lastName,
        },
      }), 750);
    } else {
      setTimeout(() => reject({username, password}), 750);
    }
  });
}
