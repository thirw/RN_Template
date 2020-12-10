import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import stores from "../stores";

export function useStores() {
  return useContext(MobXProviderContext) as typeof stores;
}
