const db = require('/app/server.js');

let all = db.all();
console.log(all);

db.set("en", "db");