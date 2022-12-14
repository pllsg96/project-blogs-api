module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.STRING,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    },
    {
      sequelize,
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'blog_posts',
      underscored: true,
    });
  
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'UserId', as: 'user' });
  }

  return BlogPost;
};