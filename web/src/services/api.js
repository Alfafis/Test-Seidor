import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030",
});

// try {
//   fetch(url, meth).then((response) => {
//     response.json().then((data) => {
//       const database = data;
//       database.forEach((element) => {
//         // console.log("base: ", element);
//       });
//       return data;
//     });
//   });
// } catch (e) {
//   console.log("error", e.message);
// }

export default api;
