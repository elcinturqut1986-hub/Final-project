export const mockArticles = [
  {
    id: 1,
    author: '@headtopics',
    time: '2 saat əvvəl',
    title: 'Tələbə astronom sirli kosmik siqnalların mənbəyini müəyyən edib',
    excerpt: 'Universitet tələbəsi uzun müddət izah edilə bilməyən radio siqnallarının mənbəyini tapıb.',
    tags: ['#Elm'],
    comments: 0,
    likes: 1,
    views: 1,
    liked: true,
    saved: false,
    content: `Universitet tələbəsi uzun müddət izah edilə bilməyən radio siqnallarının mənbəyini müəyyən edib. Tədqiqat qrupu siqnalların qalaktikadan kənar bir obyektdən gəldiyini təsdiqləyib.

Kəşf kosmik müşahidə metodlarını yenidən nəzərdən keçirməyə səbəb ola bilər. Mûtəxəssislər nəticələrin gələcək missiyalar üçün əhəmiyyətli olduğunu bildirir.`,
    commentsList: []
  },
  {
    id: 2,
    author: '@xda-developers',
    time: '5 saat əvvəl',
    title: 'Claude Code artıq səhvlərimdən öyrənir və qurğum özü işləyir',
    excerpt: 'AI kod köməkçisi gündəlik iş axınını necə dəyişir — real təcrübə əsasında.',
    tags: ['#claude code'],
    comments: 3,
    likes: 12,
    views: 248,
    liked: false,
    saved: true,
    content: `AI kod köməkçisi gündəlik iş axınını necə dəyişir — real təcrübə əsasında. Avtomatlaşdırma artıq sadəcə kod yazmaqla bitmir.

Claude Code ilə işləmək təcrübəsi göstərir ki, AI assistantlər sadəcə kod generatorları deyil, həm də təkrarlanmayan işləri avtomatlaşdırmaq üçün güclü vasitələrdir.`,
    commentsList: []
  },
  {
    id: 3,
    author: '@reuters',
    time: '1 gün əvvəl',
    title: 'Qlobal iqtisadiyyat 2026-cı ildə gözlənilməz artım göstərir',
    excerpt: 'Analitiklər inflyasiya təzyiqinə baxmayaraq əsas bazarlarda dayanıqlı böyümə proqnozlaşdırır.',
    tags: ['#İqtisadiyyat', '#Biznes'],
    comments: 7,
    likes: 34,
    views: 1200,
    liked: false,
    saved: true,
    content: `Analitiklər inflyasiya təzyiqinə baxmayaraq əsas bazarlarda dayanıqlı böyümə proqnozlaşdırır. Mərkəzi banklar ehtiyatlı optimizm bildirir.

Qlobal iqtisadiyyat 2026-cı ilin ilk rübündə gözlənilməz artım göstərir. Ekspertlər bu trendin davam edə biləcəyini, lakin ehtiyatlı olmağın vacib olduğunu qeyd edir.`,
    commentsList: []
  }
]

export const categories = [
  { id: 'all', name: 'Hamısı' },
  { id: 'ai', name: 'Süni İntellekt' },
  { id: 'tech', name: 'Texnologiya' },
  { id: 'science', name: 'Elm' },
  { id: 'sports', name: 'İdman' },
  { id: 'economy', name: 'İqtisadiyyat' },
  { id: 'politics', name: 'Siyasət' },
  { id: 'health', name: 'Sağlamlıq' },
  { id: 'world', name: 'Dünya' }
]
