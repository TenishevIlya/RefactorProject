import {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { BaseLayout } from "../BaseLayout";
import { Notification } from "../Notification";

type LayoutWithNotificationProps = {
  children: (
    triggerNotification: ({
      notificationText,
      notificationType,
    }: {
      notificationType: "danger" | "success";
      notificationText: string;
    }) => void,
  ) => ReactNode;
  title: string;
};

export function LayoutWithNotification({
  children,
  title,
}: LayoutWithNotificationProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationData, setNotificationData] = useState<{
    notificationType: "danger" | "success";
    notificationText: string;
  } | null>(null);

  const triggerNotification = useCallback(
    ({
      notificationText,
      notificationType,
    }: {
      notificationType: "danger" | "success";
      notificationText: string;
    }) => {
      setNotificationData({ notificationText, notificationType });
      setIsOpen(true);
    },
    [],
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 3000);
    }
  }, [isOpen]);

  return (
    <BaseLayout title={title}>
      {children(triggerNotification)}
      {isOpen && notificationData ? (
        <Notification
          text={notificationData.notificationText}
          type={notificationData.notificationType}
        />
      ) : null}
    </BaseLayout>
  );
}
