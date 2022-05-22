import { ArticleQueryResponse, ArticleResponse } from '../models/article.model';
import profileMapper from './profile.mapper';

const articleMapper = (article: ArticleQueryResponse, username?: string): ArticleResponse => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  body: article.body,
  tags: article.tags.map(tag => tag.name),
  createdAt: article.createdAt,
  updatedAt: article.updatedAt,
  favorited: article.favoritedBy.some(item => item.username === username),
  favoritesCount: article.favoritedBy.length,
  author: profileMapper(article.author, username),
});

export default articleMapper;
