import axios from "axios";
import Swal from "sweetalert2";

export const fetchDataCaraousel = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    Swal.fire("Peringatan !", err, "error");
    return [];
  }
};
