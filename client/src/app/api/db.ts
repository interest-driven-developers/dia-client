import { Pool } from "pg";

const pool = new Pool({
  user: "your-username",
  host: "your-rds-endpoint",
  database: "your-database-name",
  password: "your-password",
  port: "5432", // RDS 기본 포트
});

export async function query(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}
