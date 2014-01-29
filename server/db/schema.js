var db = {
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 69, nullable: false},
    email: {type: 'string', maxlength: 254, nullable: false, unique: true}
  },
  users_skills: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false},
    skill_id: {type: 'integer', nullable: false},
    skillLevel: {type: 'string', nullable: false}
  },
  skills: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 69, nullable: false}
  },
};

module.exports.tables = db;
