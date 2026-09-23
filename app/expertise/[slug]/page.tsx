import {notFound} from 'next/navigation';
import {expertise} from '@/lib/content';
import {metadata as makeMetadata} from '@/lib/seo';
import {Breadcrumbs,ButtonLink,ContactBand,PageIntro} from '@/components/ui';
export const dynamicParams=false;
export function generateStaticParams(){return expertise.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=expertise.find(s=>s.slug===slug);return s?makeMetadata(s.title,`Mayank Harsh’s approach to ${s.title.toLowerCase()}, grounded in personal creator work across poetry, literature and Instagram storytelling.`,`/expertise/${s.slug}/`):{}}
export default async function Expertise({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=expertise.find(s=>s.slug===slug);if(!s)notFound();return <><div className="gutter"><Breadcrumbs items={[{name:s.title,path:`/expertise/${s.slug}/`}]}/><PageIntro label={s.label} title={s.title+'.'} description={s.intro}/><div className="editorial-grid"><aside><p>THE PRACTICE</p><nav className="aside-nav" aria-label="Related expertise">{expertise.map(e=><a key={e.slug} href={`/expertise/${e.slug}/`}>{e.title}</a>)}</nav></aside><div className="prose">{s.paragraphs.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}<ButtonLink href={`/work/${s.study}/`}>See the work behind it</ButtonLink></div></div></div><ContactBand/></>}
