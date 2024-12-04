import type { Site, NavLinks, Metadata } from './types';

export const SITE: Site = {
    TITLE: '袁某博客',
    AVATAR: 'https://cravatar.com/avatar/5FBB13B635295D1226A17B782951C309.webp?f=mp',
    KEYWORDS: '袁某博客,袁某人博客',
    DESCRIPTION: '袁某人的个人博客（Astro 静态博客），一个集生活点滴、学术探索与创意作品于一体的数字空间。这里，不仅记录日常的所见所感，还深入分享学习心得与成长历程。每一篇文章都是对知识的热爱与追求的见证，每一个项目都是创新与实践的结晶。欢迎与我一起探讨。',
    NUM_BLOG_ON_PAGE: 10,
    NUM_BLOG_ON_HOMEPAGE: 5,
};

export const NAVLINKS: NavLinks = [
    {
        NAME: '友链',
        HREF: '/friends'
    },
    {
        NAME: '留言', 
        HREF: '/guestbook' 
    },
    {
        NAME: '关于',
        HREF: '/about'
    },
];
