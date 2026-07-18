import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../utils/api'

const ArticleContext = createContext(null)

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const res = await api.getFeed('?limit=20&offset=0')
      const items = res?.items || []
      const mapped = items.map((it) => ({
        id: it.articleId,
        title: it.titleAz || it.title || '',
        excerpt: it.summaryAz || it.summary || '',
        image: it.imageUrl,
        author: it.sourceName,
        time: it.publishedAt,
        tags: (it.topics || []).map(t => t.slug || t.labelAz || ''),
        comments: it.commentCount || 0,
        likes: it.likeCount || 0,
        views: it.viewCount || 0,
        liked: it.isLiked || false,
        saved: it.isSaved || false
      }))
      setArticles(mapped)
    } catch (err) {
      setError('Xəbərləri yükləmək mümkün olmadı')
      console.error('Load articles error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const likeArticle = async (articleId) => {
    try {
      const article = articles.find(a => a.id === articleId)
      const newLikedState = !article.liked
      
      await api.likeArticle(articleId, newLikedState)
      
      setArticles((prev) =>
        prev.map((article) =>
          article.id === articleId
            ? {
                ...article,
                liked: newLikedState,
                likes: newLikedState ? article.likes + 1 : article.likes - 1
              }
            : article
        )
      )
    } catch (err) {
      console.error('Like article error:', err)
    }
  }

  const viewArticle = async (articleId) => {
    try {
      await api.viewArticle(articleId)
      setArticles((prev) =>
        prev.map((article) =>
          article.id === articleId
            ? { ...article, views: article.views + 1 }
            : article
        )
      )
    } catch (err) {
      console.error('View article error:', err)
    }
  }

  const filterByCategory = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  const getFilteredArticles = () => {
    if (selectedCategory === 'all') return articles
    return articles.filter((article) =>
      article.tags.some((tag) =>
        tag.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    )
  }

  const getArticleById = (id) => {
    return articles.find((article) => article.id === id) || null
  }

  return (
    <ArticleContext.Provider
      value={{
        articles: getFilteredArticles(),
        allArticles: articles,
        likeArticle,
        viewArticle,
        filterByCategory,
        selectedCategory,
        getArticleById,
        isLoading,
        error
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export const useArticles = () => {
  const context = useContext(ArticleContext)
  if (!context) {
    throw new Error('useArticles must be used within an ArticleProvider')
  }
  return context
}
