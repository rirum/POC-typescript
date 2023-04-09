import { UserData, Session } from "protocols/userProtocols.js";
import connection from "../config/database.js";

async function findByEmail(email: string){
    return await connection.query(`
    SELECT * FROM users WHERE email = $1
    `,
    [email]
    );
}

async function signup({name, email, password}:UserData){
    await connection.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    `,
    [name, email, password]
    );
}

async function createSession({ token, userId }: Session){
    await connection.query(
      `
          INSERT INTO sessions (token, "userId")
          VALUES ($1, $2)
      `,
      [token, userId]
    );
  }
  
  async function findSessionByToken(token: string) {
    return await connection.query(
      `
          SELECT * FROM sessions WHERE token = $1
      `,
      [token]
    );
  }
  
  async function findById(id: number) {
    return await connection.query(
      `    
      SELECT * FROM users WHERE id=$1
    `,
      [id]
    );
  }




export default {
    findByEmail,
    signup,
    createSession,
    findSessionByToken,
    findById,
}