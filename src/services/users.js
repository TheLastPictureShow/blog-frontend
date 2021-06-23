import axios from "axios";
const baseUrl = "/api/users";

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const usersService = { create };

export default usersService;
