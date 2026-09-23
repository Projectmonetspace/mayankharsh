import { Hero } from '@/components/hero';
import { JsonLd } from '@/components/ui';
import { site } from '@/lib/content';
import { metadata as makeMetadata, person } from '@/lib/seo';
export const metadata=makeMetadata('Creative Director & Social Media Strategist','Mayank Harsh’s portfolio of creative direction, Instagram storytelling and creator work across art, literature and culture.','/');
export default function Home(){return <><JsonLd data={[{'@context':'https://schema.org','@type':'WebSite',name:site.name,url:site.url},{'@context':'https://schema.org',...person}]}/><Hero/></>}
