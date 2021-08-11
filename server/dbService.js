const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Setting up connection to DB
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

// Checking connection state
 connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state); 
});


let instance = null;


class DbService {
    // Making a static to call class from other files
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    // Get All Contacts
    async getAllData() {  
        try { 
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM contacts;";
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });

            // console.log(response);
            return response;


        } catch (error) {
            console.log("There has been an error: ", error);
        }
    }  

    // Add Contact
    async addContact(name, address, number) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO contacts (name, address, number) VALUES (?,?,?)";
                connection.query(query, [name, address, number], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });

            return response;

        } catch (error) {
            console.log("There has been an error: ", error);
        }
    }

    // Delete Contact
    async deleteContact(id) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM contacts WHERE id=?";
                connection.query(query, [id], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });

             return response === 1 ? true : false;
            
        } catch (error) {
            console.log("There has been an error: ", error);
            return false;
        }
    }

    // Update Contact
    async updateContact(id, name, address, number) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE contacts SET name=?, address=?, number=? WHERE id=?";
                connection.query(query, [name, address, number, id], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results.affectedRows);
                });
            });

            return response === 1 ? true : false;
            
        } catch (error) {
            console.log("There has been an error: ", error);
            return false;
        }
    }

}

module.exports = DbService;