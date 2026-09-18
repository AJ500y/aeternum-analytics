const SOCIAL_LINKS = {
  whatsapp: "",
  linkedin: ""
};

const form = document.getElementById('consultForm');
const formStatus = document.getElementById('formStatus');
const replyTo = document.getElementById('replyTo');
const emailField = document.getElementById('emailField');

function applySocialLinks(){
  document.querySelectorAll('[data-social]').forEach(el=>{
    const key = el.dataset.social;
    const url = SOCIAL_LINKS[key] || '';
    if(url){
      el.href = url;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
      el.classList.remove('social-placeholder');
      el.removeAttribute('aria-label');
    }else{
      el.href = '';
      el.classList.add('social-placeholder');
      el.setAttribute('title', `${key === 'whatsapp' ? 'WhatsApp' : 'LinkedIn'} link will be added here`);
      el.addEventListener('click', e => e.preventDefault());
    }
  });
}
applySocialLinks();

const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('siteNav');
menuToggle?.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

function onScroll(){
  const y=window.scrollY;
  header.classList.toggle('scrolled', y>24);
  const doc=document.documentElement;
  const max=doc.scrollHeight-doc.clientHeight;
  const pct=max?Math.min(100,(y/max)*100):0;
  document.getElementById('progressBar').style.width=pct+'%';
}
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const intel = {
  revenue:{no:'01',label:'REVENUE',title:'Which products, clients or channels are actually driving growth?',text:'The most useful revenue view is not only the total. It is understanding where growth is coming from and whether the underlying economics remain healthy.'},
  costs:{no:'02',label:'COSTS',title:'Where is spending increasing faster than revenue?',text:'Separate structural costs, delivery costs and variable spend to see where the business is becoming more expensive to run.'},
  margins:{no:'03',label:'MARGINS',title:'Which parts of the business create or destroy profitability?',text:'Margin analysis can move the conversation from topline growth toward the economics of products, clients, projects and channels.'},
  cash:{no:'04',label:'CASH FLOW',title:'How much liquidity does the business really have?',text:'Cash visibility connects collections, payment timing, operating commitments and near-term planning into one management view.'},
  products:{no:'05',label:'PRODUCTS',title:'Which offerings contribute most to the business?',text:'Compare products or services through revenue contribution, gross margin, volume and other relevant operating drivers.'},
  channels:{no:'06',label:'CHANNELS',title:'Which channels produce stronger economics?',text:'A channel can drive volume without creating equivalent value. Compare performance through the metrics that matter to the business model.'},
  projects:{no:'07',label:'PROJECTS',title:'Which projects are commercially healthy?',text:'Bring project revenue, direct costs, delivery time and other project-level measures together to improve visibility.'},
  kpis:{no:'08',label:'KPIs',title:'Which numbers deserve management attention?',text:'A useful KPI set is focused. It highlights the measures that can change a decision rather than simply increasing the number of charts.'},
  forecasts:{no:'09',label:'FORECASTS',title:'What could the current trend imply?',text:'Scenario analysis turns historical movement and current assumptions into a clearer view of potential outcomes and planning choices.'}
};
const intelLabel=document.getElementById('intelLabel'),intelTitle=document.getElementById('intelTitle'),intelText=document.getElementById('intelText'),intelNo=document.getElementById('intelNo');
document.querySelectorAll('.intel-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.intel-tab').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
  const d=intel[btn.dataset.intel]; intelLabel.textContent=d.label; intelTitle.textContent=d.title; intelText.textContent=d.text; intelNo.textContent=d.no;
}));

const industries={
  it:{code:'01 / 06',title:'IT & Software',text:'Understand project economics, client profitability, delivery costs, utilisation and the financial drivers behind recurring work.',chips:['Project profitability','Client economics','Delivery cost','Recurring revenue']},
  agency:{code:'02 / 06',title:'Digital & Creative Agencies',text:'See client-level margins, freelancer or team costs, project economics, retainers and delivery capacity more clearly.',chips:['Client margins','Project economics','Team cost','Retainers']},
  d2c:{code:'03 / 06',title:'D2C & E-commerce',text:'Connect revenue, SKU economics, acquisition spend, channel performance and cash flow into a clearer operating view.',chips:['SKU margin','CAC / ROAS','Channel mix','Cash cycle']},
  manufacturing:{code:'04 / 06',title:'Manufacturing & Distribution',text:'Analyse product margins, costing, working capital, inventory movement and the drivers of operating performance.',chips:['Product margin','Costing','Inventory','Working capital']},
  startup:{code:'05 / 06',title:'Startups',text:'Build a decision view around runway, burn, unit economics, forecasting, KPIs and the assumptions shaping the next stage.',chips:['Runway','Burn','Unit economics','Forecasting']},
  sme:{code:'06 / 06',title:'Growing SMEs',text:'Bring financial and operating data together so owners and management can see profitability, cash, costs and performance more clearly.',chips:['Profitability','Cash flow','Costs','Management MIS']}
};
const industryTitle=document.getElementById('industryTitle'),industryText=document.getElementById('industryText'),industryCode=document.getElementById('industryCode'),industryQuestions=document.getElementById('industryQuestions');
document.querySelectorAll('.industry-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.industry-tab').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
  const d=industries[btn.dataset.industry]; industryTitle.textContent=d.title; industryText.textContent=d.text; industryCode.textContent=d.code; industryQuestions.innerHTML=d.chips.map(c=>`<span>${c}</span>`).join('');
}));

const services={
  analysis:{title:'Financial Analysis',text:'A focused view of financial performance to surface the drivers behind revenue, costs, margins and profitability.',points:['Revenue & cost analysis','Margin & profitability review','Variance & trend analysis','Management observations']},
  modelling:{title:'Financial Modelling',text:'Structured models for planning, scenarios and forecasting—built around the decisions you need to make.',points:['Forecasting models','Scenario analysis','Driver-based assumptions','Decision support']},
  business:{title:'Business Analytics',text:'Turn operational and commercial data into patterns that help management understand what is moving performance.',points:['Performance drivers','Trend analysis','Client / product insights','Operational KPIs']},
  data:{title:'Data Analytics',text:'Clean, structure and analyse business data so the signals are easier to see and act on.',points:['Data structuring','Metric design','Pattern discovery','Visual analysis']},
  mis:{title:'MIS & Dashboards',text:'Management reporting that focuses attention on a concise set of relevant business metrics.',points:['KPI dashboards','Recurring MIS','Management summaries','Performance tracking']},
  research:{title:'Business & Market Research',text:'Research that helps you understand markets, competitors, customers and the context around a business decision.',points:['Market mapping','Competitor analysis','Customer / category research','Decision-ready summary']}
};
const modal=document.getElementById('serviceModal');
const modalTitle=document.getElementById('modalTitle');
const modalText=document.getElementById('modalText');
const modalPoints=document.getElementById('modalPoints');
document.querySelectorAll('.cap-card').forEach(card=>card.addEventListener('click',()=>{
  const d=services[card.dataset.cap]; modalTitle.textContent=d.title; modalText.textContent=d.text; modalPoints.innerHTML=d.points.map(p=>`<span>${p}</span>`).join(''); modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal()});

form?.addEventListener('submit',async(e)=>{
  e.preventDefault();
  if(document.querySelector('input[name="_honey"]').value) return;
  replyTo.value=emailField.value.trim();
  const button=form.querySelector('.submit-btn'); const label=button.querySelector('.btn-label');
  button.disabled=true; label.textContent='Sending…'; formStatus.className='form-status'; formStatus.textContent='';
  try{
    const response=await fetch(form.action,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
    const data=await response.json().catch(()=>({success:response.ok}));
    if(!response.ok || data.success===false) throw new Error('Submission failed');
    formStatus.className='form-status success'; formStatus.textContent='Request received. We’ll get back to you shortly.';
    form.reset();
  }catch(err){
    formStatus.className='form-status error'; formStatus.textContent='We couldn’t submit the form right now. Please email aeternumanalytics.in@gmail.com directly.';
  }finally{
    button.disabled=false; label.textContent='Request Consultation';
  }
});

// Make footer/social placeholders easy to update later via SOCIAL_LINKS at the top of this file.
