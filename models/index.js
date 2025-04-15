import User from './user.model.js';
import Article from './article.model.js';

User.hasMany(Article, { foreignKey: 'userId', as: 'articles' });
Article.belongsTo(User, { foreignKey: 'userId', as: 'author' });

export { User, Article };
