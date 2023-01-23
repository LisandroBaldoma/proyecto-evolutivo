import peticionAxios from "../../../utils/axiosConfig";

export function getRandomJokes() {
  return peticionAxios.get("/", {
    validateStatus: function (status) {
      return status >= 200 && status < 300; // defecto
    },
  });
}
