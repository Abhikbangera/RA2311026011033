import { calculatePriority } from "./priority";

export function getTopNotifications(
  notifications: any[],
  limit: number = 10
) {
  return notifications
    .sort(
      (a, b) =>
        calculatePriority(b) -
        calculatePriority(a)
    )
    .slice(0, limit);
}