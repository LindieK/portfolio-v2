export interface HeroSection {
    heroText: string
}

export interface Project {
    thumbnail: string;
    title: string;
    description: string;
    tools: string[];
    link: string;
}

export interface Projects {
    projects: Project[]
}

export interface ArticleCard {
    thumbnail: string;
    title: string;
    link: string;
}

export interface ArticlesSection {
    articles : ArticleCard[]
}

interface Link {
    name: string;
    link: string;
}

export interface Footer {
    links: Link[]
}