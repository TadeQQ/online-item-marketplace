enum UserRoles {
  ADMIN = "admin",
  USER = "user",
}

export interface User {
  email: string;
  first_name: string;
  last_name: string;
  type: UserRoles;
  uid: string;
  username: string;
}
