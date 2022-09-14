import { DataTypes, Model } from 'sequelize';
import db from '../config/database.config';

interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    phoneNumber: string;
    email: string;
    address: string;
    avatar: string;
    isVerified: string;
}

class UserInstance extends Model<UserAttributes> {};

UserInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'First name is required'
            },
            notEmpty: {
                msg: 'First name cannot be empty'
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Last name is required'
            },
            notEmpty: {
                msg: 'Last name cannot be empty'
            }
        }
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Username is required'
            },
            notEmpty: {
                msg: 'Username cannot be empty'
            }
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Phone number is required'
            },
            notEmpty: {
                msg: 'Phone number cannot be empty'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Email is required'
            },
            notEmpty: {
                msg: 'Email cannot be empty'
            }
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Address is required'
            },
            notEmpty: {
                msg: 'Address cannot be empty'
            }
        }
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'user'
})