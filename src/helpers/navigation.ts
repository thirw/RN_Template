import { StackActions } from "@react-navigation/native";

let navigator = null;
export function setNavigator(navigatorRef) {
  navigator = navigatorRef;
}

export function navigate(routeName: string, params?: Object) {
  navigator.navigate(routeName, params);
}
export function push(routeName: string, params?: Object) {
  navigator.dispatch(StackActions.push(routeName, params));
}
