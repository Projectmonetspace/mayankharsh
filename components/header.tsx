'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { nav } from '@/lib/content';
import { Arrow } from './ui';
export function Header(){
 const [open,setOpen]=useState(false);const [ready,setReady]=useState(false); const dialog=useRef<HTMLDialogElement>(null);const trigger=useRef<HTMLButtonElement>(null); const path=usePathname();
 useEffect(()=>setReady(true),[]);
 useEffect(()=>{const el=dialog.current;if(!el)return;if(open){el.showModal();const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=prev;el.close()}}},[open]);
 function close(){setOpen(false);trigger.current?.focus()}
 return <><header className="site-header gutter"><a className="wordmark" href="/" aria-label="Mayank Harsh home">MAYANK <span>//</span> HARSH</a><nav className="desktop-nav" aria-label="Main">{nav.map((n,i)=><a key={n.href} href={n.href} aria-current={path?.startsWith(n.href.slice(0,-1))?'page':undefined}><span>0{i+1}.</span> {n.label}</a>)}</nav><div className="header-meta"><span>CREATIVE DIRECTOR</span><span>GURGAON, INDIA</span></div><a href="/contact/" className="header-contact">Let’s talk <Arrow diagonal/></a><button ref={trigger} type="button" className="menu-trigger" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(true)} hidden={!ready}><span/><span/></button></header><noscript><nav className="fallback-nav" aria-label="Mobile">{nav.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}<a href="/contact/">Contact</a></nav></noscript><dialog id="mobile-nav" ref={dialog} className="mobile-menu" onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===e.currentTarget)close()}}><div className="menu-top"><span className="wordmark">MAYANK // HARSH</span><button onClick={close} aria-label="Close navigation" autoFocus>✕</button></div><nav aria-label="Mobile">{[...nav,{href:'/project-monet/',label:'Project Monet'},{href:'/contact/',label:'Contact'}].map((n,i)=><a key={n.href} href={n.href} onClick={close}><span>0{i+1}.</span>{n.label}<Arrow diagonal/></a>)}</nav><p className="eyebrow">CREATIVE DIRECTION · SOCIAL STORYTELLING</p></dialog></>
}
