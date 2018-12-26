import axios from "axios";

const URL = "http://localhost:3000";
var client = axios.create({
  baseURL: URL
});

class WebService {
  getData(apiUrl) {
    return client.get(apiUrl);
  }
}

const webservice = new WebService();
export default webservice;