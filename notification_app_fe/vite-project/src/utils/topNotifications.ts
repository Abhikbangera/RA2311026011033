const weights: any = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getTopNotifications(
  notifications: any[],
  limit = 10
) {
  return notifications
    .sort((a, b) => {
      const weightDiff =
        weights[b.Type] - weights[a.Type];

      if (weightDiff !== 0) return weightDiff;

      return (
        new Date(b.Timestamp).getTime() -
        new Date(a.Timestamp).getTime()
      );
    })
    .slice(0, limit);
}