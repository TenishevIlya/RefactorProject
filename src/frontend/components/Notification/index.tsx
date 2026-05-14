import { ReactElement } from "react";
import { DangerNotification, SuccessNotification } from "./styles";

type NotificationProps = {
  text: string;
  type: "success" | "danger";
};

export function Notification({ text, type }: NotificationProps): ReactElement {
  if (type === "danger") {
    return <DangerNotification>{text} ❌</DangerNotification>;
  }

  return <SuccessNotification>{text} ✔</SuccessNotification>;
}
