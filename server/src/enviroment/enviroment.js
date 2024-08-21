
export default {
    PORT: process.env.PORT,
    DB: {
        PORT: process.env.DB_PORT,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        NAME: process.env.DB_NAME,
        HOST: process.env.DB_HOST,
        DIALECT: process.env.DB_DIALECT
    }
}