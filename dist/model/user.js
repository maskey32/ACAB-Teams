"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class UserInstance extends sequelize_1.Model {
}
;
UserInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    isVerified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'user'
});
//# sourceMappingURL=user.js.map