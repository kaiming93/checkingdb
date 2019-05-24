const NODE_ENV = process.env.NODE_ENV || "production";

const config = {
    test:{
        DB_URL:'mongodb://localhost:27017/checking_data'
    },
    production:{
        DB_URL:'mongodb://kai:checking123@ds261136.mlab.com:61136/checkingdb'
    },
};

module.exports = config[NODE_ENV]