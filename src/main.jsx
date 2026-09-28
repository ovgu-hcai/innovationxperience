import React,{useEffect,useState}from'react'
import{createRoot}from'react-dom/client'
import{motion,useScroll,useSpring,useTransform}from'framer-motion'
import{ArrowUpRight,ChevronRight,Menu,X,Mail,MapPin,Sparkles,BrainCircuit,Blocks,UsersRound}from'lucide-react'
import{siteContent as c}from'./siteContent'
import'./kinetic.css'

const reveal={initial:{opacity:0,y:45},whileInView:{opacity:1,y:0},viewport:{once:true,margin:'-90px'},transition:{duration:.9,ease:[.16,1,.3,1]}}
const route=id=>`#${id}`
function Brand(){return <span className="brand-lockup"><span className="brand-mark" aria-hidden="true"/><span className="brand-text"><span>{c.brand.first}&nbsp;</span><b>{c.brand.accent}</b><span>{c.brand.last}</span></span></span>}
function Nav(){const[open,setOpen]=useState(false);return <nav className="nav"><a href="#top" aria-label="Home"><Brand/></a><div className={open?'nav-links open':'nav-links'}>{c.navigation.map(n=><a key={n.id} href={route(n.id)} onClick={()=>setOpen(false)}>{n.label}</a>)}</div><button onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></nav>}
function Heading({data}){return <motion.header className="heading" {...reveal}><span>{data.eyebrow}</span><h2>{data.title[0]}<br/><em>{data.title[1]}</em></h2><p>{data.copy}</p></motion.header>}
function Ambient(){return <div className="ambient" aria-hidden="true"><i/><i/><i/><div className="mesh"/></div>}
function App(){
 const{scrollYProgress,scrollY}=useScroll();const progress=useSpring(scrollYProgress,{stiffness:100,damping:28});const heroY=useTransform(scrollY,[0,900],[0,180]);const heroFade=useTransform(scrollY,[0,720],[1,.05]);
 useEffect(()=>{const move=e=>{document.documentElement.style.setProperty('--px',`${e.clientX}px`);document.documentElement.style.setProperty('--py',`${e.clientY}px`)};addEventListener('pointermove',move);return()=>removeEventListener('pointermove',move)},[])
 return <><motion.div className="progress" style={{scaleX:progress}}/><div className="pointer-light"/><Nav/><main>
  <section id="top" className="hero"><Ambient/><motion.div className="hero-inner" style={{y:heroY,opacity:heroFade}}><motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}}>{c.hero.eyebrow}</motion.p><motion.div className="hero-brand" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1.1,ease:[.16,1,.3,1]}}><span className="hero-logo" role="img" aria-label="Innovation Xperience wave logo"/></motion.div><motion.h1 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{delay:.22,duration:1}}>{c.hero.headline[0]}<br/><em>{c.hero.headline[1]}</em></motion.h1><motion.p className="hero-copy" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.65}}>{c.hero.copy}</motion.p><motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}><a href={route('about')}>{c.hero.primary}<ChevronRight/></a><a href={route('people')}>{c.hero.secondary}<ChevronRight/></a></motion.div></motion.div><div className="scroll-hint"><span>SCROLL TO EXPLORE</span><i/></div></section>
  <div className="ticker"><div>{Array(2).fill(c.program.research).flat().map((x,i)=><React.Fragment key={`${x}${i}`}><span>{x}</span><i>✦</i></React.Fragment>)}</div></div>

  <section id="about" className="page about"><Heading data={c.about}/><div className="about-grid">{c.about.cards.map((card,i)=><motion.article {...reveal} className={`about-card card-${i+1}`} key={card.number}><span>{card.number}</span><h3>{card.title}</h3><p>{card.text}</p>{i===0&&<div className="rings"><i/><i/><Sparkles/></div>}{i===1&&<BrainCircuit/>}{i===2&&<div className="wave-lines">{Array.from({length:14},(_,j)=><i style={{'--n':j}} key={j}/>)}</div>}</motion.article>)}</div></section>

  <section id="program" className="page program"><Heading data={c.program}/><div className="program-list">{c.program.items.map((item,i)=>{const Icon=[Blocks,BrainCircuit,UsersRound][i];return <motion.article {...reveal} key={item.title}><span>0{i+1}</span><div className="icon"><Icon/></div><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight/></motion.article>})}</div><div className="topic-orbit">{c.program.research.map((x,i)=><motion.span whileHover={{scale:1.08,y:-4}} style={{'--i':i}} key={x}>{x}</motion.span>)}</div></section>

  <section id="events" className="page events"><Heading data={c.events}/>
   <div className="event-section-label"><span>01 / UPCOMING</span><p>What’s next</p></div>
   <div className="upcoming-grid">{c.events.upcoming.map(e=><motion.article {...reveal} key={e.title} className={e.url?'upcoming-card featured':'upcoming-card'}><span>{e.date}</span><h3>{e.title}</h3><p>{e.text}</p>{e.url&&<a href={e.url} target="_blank" rel="noopener noreferrer">{e.cta}<ArrowUpRight/></a>}</motion.article>)}</div>
   <div className="event-section-label"><span>02 / HIGHLIGHTS</span><p>Moments that moved us</p></div>
   <div className="events-grid">{c.events.items.map((e,i)=><motion.article {...reveal} whileHover={{y:-8}} key={e.title}>{e.image&&<img className="event-photo" src={e.image} alt=""/>}<div><span>{e.date}</span><b>0{i+1}</b></div><h3>{e.title}</h3><p>{e.text}</p></motion.article>)}</div>
   <details className="event-archive"><summary>Explore the 2026 activity archive <span>January — September <ChevronRight/></span></summary><div className="archive-months">{c.events.archive.map(group=><div className="archive-month" key={group.month}><h3>{group.month}</h3><ul>{group.items.map(([date,title])=><li key={date+title}><time>{date}</time><span>{title}</span></li>)}</ul></div>)}</div></details>
  </section>

  <section id="people" className="page people"><Heading data={c.people}/><div className="team-grid">{c.people.items.map((p,i)=><motion.a {...reveal} whileHover={{y:-9}} href={p.url} target="_blank" rel="noreferrer" key={p.name}><div className="photo"><img src={p.image} alt={p.name}/><span>0{i+1}</span></div><h3>{p.name}</h3><p>{p.role}</p><ArrowUpRight/></motion.a>)}</div></section>

  <section id="contact" className="page contact"><Ambient/><div className="contact-wrap"><Heading data={c.contact}/><div className="contact-links"><a href={`mailto:${c.contact.email}`}><Mail/><span>WRITE TO US<b>{c.contact.email}</b></span><ArrowUpRight/></a><a href={c.contact.map} target="_blank" rel="noreferrer"><MapPin/><span>VISIT THE HUB<b>{c.contact.location}</b></span><ArrowUpRight/></a></div></div></section>

  <section id="sponsors" className="page sponsors"><Heading data={c.sponsors}/><div className="sponsor-grid">{c.sponsors.items.map(s=><motion.a {...reveal} whileHover={{scale:1.025}} href={s.url} target="_blank" rel="noreferrer" key={s.name}><img src={s.image} alt={s.name}/><span>{s.name}<ArrowUpRight/></span></motion.a>)}</div></section>
 </main><footer><Brand/><p>{c.footer.statement}</p><div>{c.navigation.slice(0,3).map(n=><a key={n.id} href={route(n.id)}>{n.label}</a>)}</div><small>© {new Date().getFullYear()} {c.footer.copyright}</small></footer></>}
createRoot(document.getElementById('root')).render(<App/>)
