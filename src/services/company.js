import axios from "axios";
import Swal from "sweetalert2";

export const fetchProfileCompany = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    Swal.fire("Peringatan !", err, "error");
    return [];
  }
};
