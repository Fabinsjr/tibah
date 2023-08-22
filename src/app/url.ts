export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://ductcan.azurewebsites.net/"
    : "https://ductcan.azurewebsites.net/";

export const refreshToken = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user) {
    if (window) {
      window.location.href = "/login";
    }
    return;
  }
  if (!user["refresh-token"]) {
    localStorage.removeItem("user");
    if (window) {
      window.location.href = "/login";
    }
    return;
  }
  const res = await fetch(`${baseUrl}auth/refresh-token/`, {
    method: "POST",
    credentials: "include",
  });
  if (res.status === 401) {
    localStorage.removeItem("user");
    if (window) {
      window.location.href = "/login";
    }
  }
  const data = await res.json();
  if (data["access-token"]) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        "access-token": data["access-token"],
      })
    );
  }
  if (data["refresh-token"]) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        "refresh-token": data["refresh-token"],
      })
    );
  }
  return data;
};
