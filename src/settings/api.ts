export const apiUrl = import.meta.env.VITE_API_URL;

export const apiPaths = {
  // Auth.
  login: "auth/login",
  getAuthUser: "auth/user",
  register: "auth/register",
  changePassword: "auth/change-password",
  confirmEmail: "auth/confirm-email",
  restorePassword: "auth/restore-password",

  saveAuthUserConfig: "saveAuthUserConfig",

  // Schedule.
  client: "clients",
  timeSlot: "time-slots",

  // Storage.
  fileStorage: `file-storage`,
  authUserFileByType: `file-storage/auth-user-file-by-type/credentials`,
};
