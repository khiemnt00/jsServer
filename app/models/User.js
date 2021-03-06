
const mysql = require('../../libs/mysql');

const UserSchema = {
  id: {
    type: Number,
    primaryKey: true
  },
  uid: String,
  password: String,
  name: String,
  createdAt: Date,
  updatedAt: Date,
  updatedBy: Number
};

mysql.model('user', UserSchema);
