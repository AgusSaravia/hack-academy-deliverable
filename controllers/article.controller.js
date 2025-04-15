import { Article, User } from '../models/index.js';

export const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({ include: { model: User, as: 'author' } });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, { include: { model: User, as: 'author' } });
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    await article.update(req.body);
    res.json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    await article.destroy();
    res.json({ message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
