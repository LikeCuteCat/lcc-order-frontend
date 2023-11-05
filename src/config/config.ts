export const backUrl: string =
  process.env.NODE_ENV === "production"
    ? "http://api.iccorder.com"
    : "http://localhost:8080";
