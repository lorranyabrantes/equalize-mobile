import axios from "axios";

const equalizeApi = {
  get(url, callback) {
    axios.get(url).then((result) => {
      callback(result.data);
    });
  },
};

export default equalizeApi;
