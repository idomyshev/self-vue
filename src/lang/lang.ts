export default {
  addTranslation: "Add translation",
  authTokenIsInvalid: "Authorization token is invalid",
  back: "Back",
  cancelButton: "Cancel",
  confirmButton: "Confirm",
  confirmDeleteWordTitle: (title: string) => `Delete "${title}"?`,
  createWord: "Create...",
  email: "Email",
  errorDuplicate: "Duplicate found",
  hasBeenTranslatedNTimes: (value: number) =>
    `Has been translated ${value} times.`,
  loaderLabel: "Loading",
  login: "Login",
  loginFailed: "Login failed",
  loginSuccess: "You are logged in.",
  logout: "Logout",
  logoutSuccess: "You are logged out.",
  password: "Password",
  previousTranslations: "Previous translations",
  save: "Save",
  successCreateWord: "Word created.",
  successCreateTranslation: "Translation added.",
  successDeleteWord: (title: string): string => `Word '${title}' deleted.`,
  translation: "First idea that comes to mind :)",
  wordOrPhrase: "Think of a word or phrase...",
};
