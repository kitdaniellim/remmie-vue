const { user } = require("../models/index");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.readStaff = async function readStaff(){
    let retVal = [];
    await user.findAll({
        attributes: ['first_name','last_name','date_created'],
        where: {
            user_type: 'staff',
        },
        order: [['date_created', 'DESC']]
    }).then(value => {
        retVal = value;
    }).catch(e => {
        throw e;
    });
    return retVal;
}

exports.createStaff = async function createStaff(body){
    let bool = true;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hashedPassword = bcrypt.hashSync(body.password,salt);
    
    await user.create({
        email: body.email, password: hashedPassword, user_type: 'staff', first_name: body.first_name, last_name: body.last_name,
        [Op.or]: [
          { user_type: 'staff' },
          { user_type: 'admin' },
        ]
    }).catch(e => {
        bool = false;
        throw e;
    });
    return bool;
}

exports.authenticate = async function authenticate(email, password) {
    return await user.findOne({
        raw: true,
        attributes: ['user_type','password','email'],
        where: {

            email: email,
        }
    }).then(value => {
        if (value!=null && bcrypt.compareSync(password, value['password'])){
            return {authenticate:true, type: {email: value['email'], user_type: value['user_type']}};
        }else {
            return {authenticate:false, type: null};
        }
    }).catch(e => {
        throw e;
    });
}