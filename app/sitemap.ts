import type { MetadataRoute } from 'next';
import { site,studies,expertise } from '@/lib/content';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/about/','/work/','/project-monet/','/contact/',...studies.filter(s=>s.index).map(s=>`/work/${s.slug}/`),...expertise.map(s=>`/expertise/${s.slug}/`)].map(path=>({url:site.url+path,lastModified:site.date}))}
