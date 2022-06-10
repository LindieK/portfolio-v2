export interface Hero {
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

export interface Card {
    thumbnail: string;
    title: string;
    link: string;
}

export interface Articles {
    articles : Card[]
}

interface Link {
    name: string;
    link: string;
}

export interface Footer {
    links: Link[]
}