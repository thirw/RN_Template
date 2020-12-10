import AsyncStorage from "@react-native-community/async-storage";

import { create, IHydrateResult } from "mobx-persist";
import AuthStore from "./auth";
import UserStore from "./user";

const stores = {
  auth: new AuthStore(),
  user: new UserStore(),
};

export default stores;

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

function hydrateStores(): IHydrateResult<Object>[] {
  return [hydrate("auth", stores.auth), hydrate("user", stores.user)];
}

export const hydratedStores = hydrateStores();
