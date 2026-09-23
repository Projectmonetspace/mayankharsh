import type { Metadata } from 'next';
import { site } from './content';
export const isPreview = process.env.VERCEL_ENV !== 'production' && process.env.SITE_INDEXABLE !== 'true';
export function metadata(title:string, description:string, path:string, index=true):Metadata {
 const url = site.url + path;
 return { title,description,alternates:{canonical:url},robots:{index:index&&!isPreview,follow:true},openGraph:{title:`${title} | ${site.name}`,description,url,type:'website',siteName:site.name,images:[{url:site.url+'/og.png',width:1200,height:630,alt:'Mayank Harsh — Creative direction & social storytelling'}]},twitter:{card:'summary_large_image',title,description,images:[site.url+'/og.png']} };
}
export const person = {'@type':'Person','@id':site.url+'/#person',name:site.name,url:site.url,jobTitle:'Creative Director & Social Media Strategist',sameAs:[site.instagram,site.secondInstagram],worksFor:{'@type':'Organization',name:'Project Monet',url:'https://www.projectmonet.com/'}};
