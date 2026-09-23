import Image from 'next/image';
import { Arrow, Label } from './ui';

const marks = [
  [32.7,12.6],[32.7,37.5],[32.7,61.9],[32.7,86.2],
  [71.4,12.6],[71.4,37.5],[71.4,61.9],[71.4,86.2],
];

export function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <div className="hero-grid" aria-hidden="true">
      {marks.map(([y,x])=><span className="grid-cross" key={`${x}-${y}`} style={{top:`${y}%`,left:`${x}%`}}/>)}
    </div>
    <div className="hero-kicker gutter"><Label>[ MAYANK_HARSH / CREATIVE PRACTICE ]</Label><span>01 — AN INTERSECTION OF ART & THE FEED</span></div>
    <div className="hero-copy gutter">
      <p className="hero-overline">CREATIVE DIRECTOR <span> / </span> SOCIAL STRATEGIST</p>
      <h1 id="hero-heading">Feeling,<br/>given <em>form.</em></h1>
      <p className="hero-intro">Art, literature and culture translated into visual stories for the social feed.</p>
    </div>
    <div className="hero-art" aria-label="An editorial composition of selected imagery from Mayank Harsh’s creator work" role="img">
      <div className="art-glow" aria-hidden="true"/>
      <div className="art-frame art-main"><Image src="/media/CrodTefqiKm.jpg" alt="" fill priority sizes="(max-width: 700px) 78vw, 42vw" className="art-image"/></div>
      <div className="art-frame art-portrait"><Image src="/media/C093-LuKwqW.jpg" alt="" fill priority sizes="(max-width: 700px) 34vw, 16vw" className="art-image"/></div>
      <div className="art-frame art-books"><Image src="/media/CzpAg5nKgWc.jpg" alt="" fill sizes="(max-width: 700px) 30vw, 13vw" className="art-image"/></div>
      <span className="art-coordinate art-coordinate-top" aria-hidden="true">001 / IMAGE_AS_EMOTION</span>
      <span className="art-coordinate art-coordinate-bottom" aria-hidden="true">POETRY · LITERATURE · CULTURE</span>
    </div>
    <div className="hero-annotations" aria-hidden="true">
      <span className="node node-one"/><span className="node node-two"/><span className="node node-three"/>
      <svg className="hero-connectors" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none"><path d="M535 210h105l36 38h53M1047 281h105l40-43h104M1024 650h121l55 58h90" stroke="currentColor" strokeWidth="1" strokeDasharray="1 0"/></svg>
      <span className="annotation annotation-one">[ CULTURAL_SIGNAL ]<small>THE REFERENCE</small></span>
      <span className="annotation annotation-two">[ CREATIVE_CORE ]<small>THE FEELING</small></span>
      <span className="annotation annotation-three">[ AUDIENCE_CONNECTION ]<small>THE FORM</small></span>
    </div>
    <div className="hero-bottom gutter">
      <div className="hero-action"><a className="button" href="#selected-work">EXPLORE SELECTED WORK <Arrow diagonal/></a><span>SCROLL TO EXPLORE <b>↓</b></span></div>
      <aside className="hero-card"><div className="hero-card-head"><span>CREATOR PRACTICE</span><b>01 / 02</b></div><p>Poetry, literature, music and visual storytelling in conversation with the feed.</p><a href="/work/sl6dl7/">OPEN THE WORK <Arrow diagonal/></a></aside>
    </div>
  </section>
}
