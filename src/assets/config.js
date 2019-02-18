export default {
  BASE_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://image-manager-api.herokuapp.com/"
};
