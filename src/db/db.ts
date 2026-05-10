// src/db/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Create a Neon HTTP client using DATABASE_URL
const sql = neon(process.env.DATABASE_URL!);

// Initialize Drizzle with Neon + schema
export const db = drizzle(sql, { schema });
