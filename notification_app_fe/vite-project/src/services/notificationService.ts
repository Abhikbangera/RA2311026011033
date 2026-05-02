import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhYjkzMzdAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNTkxMCwiaWF0IjoxNzc3NzA1MDEwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMjAwYmRlMzQtNDQ0ZC00N2E4LTlhNmMtYzU4NWQxNzQ2ODU1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYWJoaWsgYmFuZ2VyYSIsInN1YiI6ImU1MjMzNWU1LTJlZjQtNDcyZi1hYzVjLTE3ODE3MTcyMjljYSJ9LCJlbWFpbCI6ImFiOTMzN0Bzcm1pc3QuZWR1LmluIiwibmFtZSI6ImFiaGlrIGJhbmdlcmEiLCJyb2xsTm8iOiJyYTIzMTEwMjYwMTEwMzMiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJlNTIzMzVlNS0yZWY0LTQ3MmYtYWM1Yy0xNzgxNzE3MjI5Y2EiLCJjbGllbnRTZWNyZXQiOiJyR2plRkVZaEF5dUVWWGhjIn0.jpsc3_IG4UYrC-jjZgdLVy0lvtPiL77ldsF5P0G2Mis";

export async function fetchNotifications(
  page = 1,
  limit = 10,
  type = ""
) {
  const response = await axios.get(
    "http://20.207.122.201/evaluation-service/notifications",
    {
      params: {
        page,
        limit,
        notification_type: type,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  return response.data.notifications;
}