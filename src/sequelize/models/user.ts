import { Model, Optional, DataTypes } from 'sequelize';
import sequelizeConnection from '../config/config';

type UserAttributes = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
  pdf: Blob;
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
  pdf: Blob;

  static associate(models) {
    // define association here
  }
}
User.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pdf: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'User',
  }
);

export default User;