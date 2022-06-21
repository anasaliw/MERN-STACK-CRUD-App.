import axios from "axios";

const Url = "http://localhost:8000";

// ! Post Function

export const addUser = async (data) => {
  try {
    return await axios.post(`${Url}/add`, data);
  } catch (error) {
    console.log("Something Went Wrong " + error);
  }
};

// ! Get Function

export const fetchUsers = async () => {
  try {
    return await axios.get(`${Url}/all`);
  } catch (error) {
    console.log("Something Went Wrong in fetching" + error);
  }
};

// ! Editing Portion

export const getSingleData = async (id) => {
  try {
    return await axios.get(`${Url}/edit/${id}`);
  } catch (error) {
    console.log("Fetching of Single Data went wrong " + error);
  }
};

export const editSingleData = async (user, id) => {
  try {
    return await axios.put(`${Url}/edit/${id}`, user);
  } catch (error) {
    console.log("Editing of Single Data went wrong" + error);
  }
};

//Deleting User
export const deleteUser = async (id) => {
  await axios.delete(`${Url}/delete/${id}`);
};
