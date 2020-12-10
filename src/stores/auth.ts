import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export default class AuthStore {
  @persist @observable token: string = null;

  @action setToken(token: string) {
    this.token = token;
  }

  @action logout() {
    this.token = null;
  }

  @computed get isLogin() {
    return this.token !== null;
  }
}
