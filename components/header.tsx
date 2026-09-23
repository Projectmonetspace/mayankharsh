'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Arrow } from './ui';
const links=[{href:'/work/',label:'WORK'},{href:'/about/',label:'ABOUT'},{href:'/expertise/creative-direction/',label:'EXPERTISE'},{href:'/project-monet/',label:'PROJECT MONET'}];
export function Header(){
  const [open,setOpen]=useState(false);
  const [ready,setReady]=useState(false);
  const dialog=useRef<HTMLDialogElement>(null);
  const trigger=useRef<HTMLButtonElement>(null);
  const path=usePathname();
  useEffect(()=>setReady(true),[]);
  useEffect(()=>{const el=dialog.current;if(!el||!open)return;el.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;el.close()}},[open]);
  function close(){setOpen(false);trigger.current?.focus()}
  return <><header className="site-header gutter"><a className="wordmark" href="/" aria-label="Mayank Harsh home">MAYANK <span>//</span> HARSH</a><nav className="desktop-nav" aria-label="Main navigation">{links.map((link,i)=><a href={link.href} key={link.href} aria-current={path?.startsWith(link.href.slice(0,-1))?'page':undefined}><span>0{i+1}.</span>{link.label}</a>)}</nav><div className="header-meta"><span>CREATIVE DIRECTOR</span><span>GURGAON, INDIA</span></div><a href="/contact/" className="header-contact">LET’S TALK <Arrow diagonal/></a><button ref={trigger} type="button" className="menu-trigger" aria-label="Open navigation" aria-controls="mobile-nav" aria-expanded={open} onClick={()=>setOpen(true)} hidden={!ready}><span/><span/></button></header><noscript><nav className="fallback-nav" aria-label="Mobile navigation">{links.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}<a href="/contact/">CONTACT</a></nav></noscript><dialog id="mobile-nav" className="mobile-menu" ref={dialog} onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===e.currentTarget)close()}}><div className="menu-top"><span className="wordmark">MAYANK <span>//</span> HARSH</span><button onClick={close} aria-label="Close navigation" autoFocus>✕</button></div><nav aria-label="Mobile navigation">{[...links,{href:'/contact/',label:'CONTACT'}].map((l,i)=><a key={l.href} href={l.href} onClick={close}><span>0{i+1}.</span>{l.label}<Arrow diagonal/></a>)}</nav><p className="eyebrow">ART / CULTURE / SOCIAL FORMATS</p></dialog></>
}
