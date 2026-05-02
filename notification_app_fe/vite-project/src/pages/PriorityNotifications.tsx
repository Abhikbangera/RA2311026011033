import {
  useEffect,
  useState,
} from "react";

import NotificationCard
from "../components/NotificationCard";

import {
  fetchNotifications,
} from "../services/notificationService";

import {
  getTopNotifications,
} from "../utils/topNotifications";

export default function PriorityNotifications() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    const data =
      await fetchNotifications(1, 20);

    setNotifications(
      getTopNotifications(data)
    );
  }

  return (
<div
  style={{
    maxWidth: "900px",
    margin: "auto",
    padding: 20,
  }}
>      <h1
  style={{
    color: "white",
    marginBottom: 30,
    textAlign: "center",
    fontSize: "3rem",
  }}
>
  Priority Notifications
</h1>

      {notifications.map((n) => (
        <NotificationCard
          key={n.ID}
          notification={n}
          viewed={false}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}