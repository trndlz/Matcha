const db = require('./db');

function get_room_messages(req, res) {
    const roomId = req.params.type;

    const query = {
        text: `SELECT * FROM messages WHERE room_id = $1`,
        values: [roomId]
    }
    return db.get_database(query).then((result) => {
        return res.json(result)
    })
}

function send_message(req, res) {
    const { roomId, userId, messageTo, message } = req.body;

    console.log(req.body);

    const query = {
        text: `INSERT INTO messages (user_from_id, user_for_id, content, room_id, date) VALUES ($1, $2, $3, $4, $5)`,
        values: [userId, messageTo, message, roomId, Date.now()]
    }
    return db.get_database(query).then((result) => {
        return res.json(result)
    })
}


module.exports = {
    get_room_messages,
    send_message
}