import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhYjkzMzdAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDUwNSwiaWF0IjoxNzc3Njk5NjA1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZjBkYmJhYzctM2MwZS00NGYwLWE1ZTItNTU3MDkyMTNmMTk4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYWJoaWsgYmFuZ2VyYSIsInN1YiI6ImU1MjMzNWU1LTJlZjQtNDcyZi1hYzVjLTE3ODE3MTcyMjljYSJ9LCJlbWFpbCI6ImFiOTMzN0Bzcm1pc3QuZWR1LmluIiwibmFtZSI6ImFiaGlrIGJhbmdlcmEiLCJyb2xsTm8iOiJyYTIzMTEwMjYwMTEwMzMiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJlNTIzMzVlNS0yZWY0LTQ3MmYtYWM1Yy0xNzgxNzE3MjI5Y2EiLCJjbGllbnRTZWNyZXQiOiJyR2plRkVZaEF5dUVWWGhjIn0.PZLsa7iUXHUNcBXb1gA7j7XMSRuFJz1lEVbou4IsUTg";

export async function fetchNotifications() {
  const response = await axios.get(
    "http://20.207.122.201/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  return response.data.notifications;
}