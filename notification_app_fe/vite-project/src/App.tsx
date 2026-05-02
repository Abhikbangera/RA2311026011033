import { useEffect } from "react";
import "./App.css";

import { fetchNotifications } from "./services/notificationService";
import { getTopNotifications } from "./utils/topNotifications";
import { Log } from "./utils/logger";

function App() {
  useEffect(() => {
    async function loadData() {
      try {
        await Log(
          "info",
          "page",
          "Fetching notifications"
        );

        const notifications =
          await fetchNotifications();

        await Log(
          "info",
          "api",
          "Notifications fetched successfully"
        );

        const top10 =
          getTopNotifications(notifications);

        console.log("Top 10 Notifications:");

        console.table(top10);

        await Log(
          "info",
          "component",
          "Top notifications processed"
        );
      } catch (err) {
        await Log(
          "error",
          "api",
          "Failed to fetch notifications"
        );

        console.error(err);
      }
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      <p>Open console to view top notifications</p>
    </div>
  );
}

export default App;