import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

type Props = {
  notification: any;
  viewed: boolean;
  onClick: () => void;
};

export default function NotificationCard({
  notification,
  viewed,
  onClick,
}: Props) {
  function getColor(type: string) {
    switch (type) {
      case "Placement":
        return "success";

      case "Result":
        return "primary";

      case "Event":
        return "warning";

      default:
        return "default";
    }
  }

  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 3,
        borderRadius: 4,
        transition: "0.3s",
        cursor: "pointer",
        opacity: viewed ? 0.6 : 1,

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
       <Stack
  direction="row"
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  }}
>
          <Chip
            label={notification.Type}
            color={getColor(notification.Type)}
          />

          {!viewed && (
            <Typography
  variant="body2"
  sx={{ opacity: 0.7 }}>
              NEW
            </Typography>
          )}
        </Stack>

        <Typography
  variant="h6"
  sx={{ fontWeight: "bold", mb: 1 }}
>
          {notification.Message}
        </Typography>

        <Typography
  variant="body2"
  sx={{ opacity: 0.7 }}>
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}