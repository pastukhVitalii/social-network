import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:     {
    "API-KEY": "0fdd1160-d444-4949-8fed-55c8b35e8906"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    debugger
    return instance.get(`profile/` + userId);
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}