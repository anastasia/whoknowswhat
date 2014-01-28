var db = {
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false},
    email: {type: 'string', maxlength: 254, nullable: false, unique: true}
  },
  users_skills: {
    id: {type: 'increments', nullable: false, primary: true},
    author_id: {type: 'integer', nullable: false},
    skill_id: {type: 'integer', nullable: false}
  },
  skills: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  },
};

module.exports.tables = db;
