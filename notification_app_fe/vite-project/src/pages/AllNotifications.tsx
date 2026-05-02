import {
  useEffect,
  useState,
} from "react";

import NotificationCard
from "../components/NotificationCard";

import {
  fetchNotifications,
} from "../services/notificationService";

export default function AllNotifications() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  const [viewed, setViewed] =
    useState<string[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    const data =
      await fetchNotifications(1, 10);

    setNotifications(data);
  }

  function markViewed(id: string) {
    if (!viewed.includes(id)) {
      setViewed([...viewed, id]);
    }
  }

  return (
    <div
  style={{
    maxWidth: "900px",
    margin: "auto",
    padding: 20,
  }}
>
      <h1
  style={{
    color: "white",
    marginBottom: 30,
    textAlign: "center",
    fontSize: "3rem",
  }}
>
  All Notifications
</h1>

      {notifications.map((n) => (
        <NotificationCard
          key={n.ID}
          notification={n}
          viewed={viewed.includes(n.ID)}
          onClick={() => markViewed(n.ID)}
        />
      ))}
    </div>
  );
}