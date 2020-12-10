import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

import { UserProfile } from "../types.tsx";

export default class UserStore {
  @persist("object") @observable data: UserProfile = null;

  @action setProfile(profile: UserProfile) {
    this.data = profile;
  }
}
