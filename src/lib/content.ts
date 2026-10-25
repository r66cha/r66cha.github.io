import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Project = CollectionEntry<'projects'>;
export type Post = CollectionEntry<'posts'>;

/** id записи - «ru/project-1»; слаг страницы без языковой папки. */
export const slugOf = (entry: { id: string }) => entry.id.slice(entry.id.indexOf('/') + 1);

export const getProjects = async (lang: Lang) =>
  (await getCollection('projects', (e) => e.id.startsWith(`${lang}/`))).sort((a, b) => a.data.order - b.data.order);

export const getPosts = async (lang: Lang) =>
  (await getCollection('posts', (e) => e.id.startsWith(`${lang}/`))).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

export const projectPaths = async (lang: Lang) => {
  const projects = await getProjects(lang);
  return projects.map((project, i) => ({
    params: { slug: slugOf(project) },
    props: {
      project,
      prev: projects[(i - 1 + projects.length) % projects.length],
      next: projects[(i + 1) % projects.length],
    },
  }));
};

export const postPaths = async (lang: Lang) => {
  const posts = await getPosts(lang);
  return posts.map((post, i) => ({
    params: { slug: slugOf(post) },
    props: { post, next: posts[(i + 1) % posts.length] },
  }));
};
