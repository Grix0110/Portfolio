const spicedPg = require("spiced-pg");

let databaseUrl;
if (process.env.NODE_ENV === "production") {
    databaseUrl = process.env.DATABASE_URL;
} else {
    const {
        DB_NAME,
        DB_PW,
        DB_HOST,
        DB_PORT,
        DB_BASE,
    } = require("./secrets.json");
    databaseUrl = `postgres:${DB_NAME}:${DB_PW}@${DB_HOST}:${DB_PORT}/${DB_BASE}`;
}

const db = spicedPg(databaseUrl);

module.exports.uploadBackgroundImage = (image) => {
    return db.query(`INSERT INTO images(image_url) VALUES ($1) RETURNING image_url`, [image])
}

