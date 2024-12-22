import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_NOTIFICATION } from "../../../state";
import NotificationCard from "./NotificationCard";
import { AnimatePresence } from "motion/react";

function NotificationUi() {
  const dispatch = useDispatch();

  const notifications = useSelector((state) => state.notification);

  useAutoRemoveNotifications({ notifications, dispatch });

  return (
    <section className="z-40 fixed inset-0 w-full h-dvh pointer-events-none flex items-end">
      <div className="relative w-full flex flex-col gap-1">
        <AnimatePresence>
          {notifications.map(({ id, message, type }) => (
            <NotificationCard
              key={id}
              message={message}
              type={type}
              onClose={() => {
                dispatch(REMOVE_NOTIFICATION(id));
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

const useAutoRemoveNotifications = ({ notifications, dispatch }) => {
  useEffect(() => {
    const timers = notifications.map(({ id, timeout }) => {
      const timer = timeout || 10000;
      setTimeout(() => dispatch(REMOVE_NOTIFICATION(id)), timer);
    });
    return () => timers.forEach(clearTimeout);
  }, [notifications, dispatch]);
};

export default NotificationUi;
