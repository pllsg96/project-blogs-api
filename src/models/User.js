module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'users',
      underscored: true,
    });
  
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'UserId', as: 'blog_posts' });
  };

  return User;
};