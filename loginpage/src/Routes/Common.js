export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshtoken") || null;
};

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
};

export const setUserSession = (token, refreshtoken) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("refreshtoken", refreshtoken);
};
