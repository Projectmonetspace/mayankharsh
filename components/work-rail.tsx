'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { reels } from '@/lib/content';
import { Arrow, Label } from './ui';
export function WorkRail(){
  const viewport=useRef<HTMLDivElement>(null);
  const track=useRef<HTMLDivElement>(null);
  const [paused,setPaused]=useState(false);
  const [reduced,setReduced]=useState(true);
  const hover=useRef(false);
  const focused=useRef(false);
  const interruptedUntil=useRef(0);
  const drag=useRef<{x:number;scroll:number}|null>(null);
  const suppressClick=useRef(false);
  useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(q.matches);sync();q.addEventListener('change',sync);return()=>q.removeEventListener('change',sync)},[]);
  useEffect(()=>{const el=viewport.current,group=track.current;if(!el||!group||paused||reduced)return;let frame=0,last=0,visible=false;const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;last=0});observer.observe(el);
    function tick(now:number){if(el&&group&&last&&visible&&!document.hidden&&!hover.current&&!focused.current&&!drag.current&&now>interruptedUntil.current){const width=group.scrollWidth/2;el.scrollLeft+=Math.min(now-last,40)*.035;if(el.scrollLeft>=width)el.scrollLeft-=width}last=now;frame=requestAnimationFrame(tick)}frame=requestAnimationFrame(tick);return()=>{observer.disconnect();cancelAnimationFrame(frame)}},[paused,reduced]);
  const hold=()=>{interruptedUntil.current=performance.now()+2500};
  const move=(direction:number)=>{hold();viewport.current?.scrollBy({left:direction*340,behavior:reduced?'instant':'smooth'})};
  return <section className="work-section" id="selected-work" aria-labelledby="selected-work-heading">
    <div className="work-heading gutter"><div><Label>[ 01 / SELECTED_WORK ]</Label><h2 id="selected-work-heading">The work<br/><em>in motion.</em></h2></div><p>Art, literature and emotion in short-form visual stories. Selected work from @sl6dl7.</p></div>
    <div className="rail-toolbar gutter"><span>ORIGINAL CREATOR WORK / @SL6DL7</span><div className="rail-controls"><button aria-label="Previous work" onClick={()=>move(-1)}>←</button><button aria-label={reduced?'Automatic movement disabled by reduced motion preference':paused?'Start automatic movement':'Pause automatic movement'} aria-pressed={paused} disabled={reduced} onClick={()=>setPaused(p=>!p)}>{paused||reduced?'PLAY':'PAUSE'}</button><button aria-label="Next work" onClick={()=>move(1)}>→</button></div></div>
    <div className="rail-viewport" ref={viewport} role="region" aria-label="Selected work, scroll horizontally" tabIndex={0} onMouseEnter={()=>{hover.current=true}} onMouseLeave={()=>{hover.current=false;hold()}} onFocusCapture={()=>{focused.current=true}} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget)){focused.current=false;hold()}}} onWheel={hold} onTouchStart={hold} onTouchEnd={hold} onKeyDown={e=>{if(e.target!==e.currentTarget)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}}} onPointerDown={e=>{if(e.pointerType!=='mouse'||e.button!==0)return;drag.current={x:e.clientX,scroll:e.currentTarget.scrollLeft};suppressClick.current=false;hold()}} onPointerMove={e=>{if(!drag.current)return;const delta=e.clientX-drag.current.x;if(Math.abs(delta)>5){suppressClick.current=true;e.currentTarget.setPointerCapture(e.pointerId);e.currentTarget.scrollLeft=drag.current.scroll-delta}}} onPointerUp={e=>{drag.current=null;if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);hold()}} onPointerCancel={()=>{drag.current=null;hold()}} onClickCapture={e=>{if(suppressClick.current){e.preventDefault();e.stopPropagation();suppressClick.current=false}}} onDragStart={e=>e.preventDefault()}>
      <div ref={track} className="rail-track">{[false,true].map(clone=><div className="rail-group" key={String(clone)} aria-hidden={clone||undefined}>{reels.map((r,i)=><a key={r.id} className="reel-card" href={`/work/sl6dl7/#${r.id}`} tabIndex={clone?-1:0}><div className="reel-image"><Image src={`/media/${r.id}.jpg`} alt={clone?'':r.alt} width={540} height={960} sizes="(max-width: 700px) 72vw, 25vw" loading={!clone&&i<2?'eager':'lazy'} draggable={false}/><span className="reel-numeral">0{i+1} / 06</span><span className="reel-arrow"><Arrow diagonal/></span></div><div className="reel-caption"><span>{r.category}</span><h3>{r.title}</h3></div></a>)}</div>)}</div>
    </div><div className="rail-foot gutter"><Label>DRAG / SWIPE / USE ARROW KEYS</Label><a className="text-link" href="/work/">Explore the work library <Arrow diagonal/></a></div>
  </section>
}
