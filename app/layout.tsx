import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';
import { Header } from '@/components/header';
import { Arrow } from '@/components/ui';
import { site } from '@/lib/content';
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'Mayank Harsh — Creative Director & Social Media Strategist',template:'%s | Mayank Harsh'},icons:{icon:'/icon.svg'},authors:[{name:site.name,url:site.url}]};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><footer className="site-footer gutter"><a className="wordmark" href="/">MAYANK <span>//</span> HARSH</a><nav aria-label="Footer"><a href={site.instagram}>Instagram <Arrow diagonal/></a><a href="/project-monet/">Project Monet <Arrow diagonal/></a><a href="/contact/">Contact <Arrow diagonal/></a></nav><p>© {new Date().getFullYear()} Mayank Harsh</p></footer></body></html>}
