// Inject CSS
(function(){
var css = document.createElement('style');
css.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Instrument+Sans:wght@300;400;500;600&display=swap');

#mf-root *{margin:0;padding:0;box-sizing:border-box}
#mf-root{
  --bg:#0d0d0d;--bg-card:#111111;--bg-card2:#161616;
  --border:#1e1e1e;--gold:#C9A84C;--gold-dim:rgba(201,168,76,0.12);
  --cream:#EDE8DF;--muted:#9A9080;--text:#EDE8DF;
  --success:#81c784;--error:#ef9a9a;--warning:#ffb74d;
  --radius:10px;--ft:'Cormorant Garamond',serif;--fb:'Instrument Sans',sans-serif;
  font-family:var(--fb);background:var(--bg);color:var(--text);min-height:100vh;
}

/* EDITOR LOCK */
#mf-loader{position:fixed;inset:0;background:var(--bg);display:none;
  flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:18px;}
.mf-in-editor #mf-loader,.mf-in-editor .mf-overlay,
.mf-in-editor #mf-toasts,.mf-in-editor .mf-topbar,
.mf-in-editor .mf-sov{display:none!important;}
.mf-spinner{width:38px;height:38px;border-radius:50%;
  border:2px solid var(--border);border-top-color:var(--gold);
  animation:mf-spin .8s linear infinite;}
@keyframes mf-spin{to{transform:rotate(360deg)}}
.mf-loader-txt{font-family:var(--ft);font-size:13px;color:var(--text);letter-spacing:3px;text-transform:uppercase}

/* TOASTS — top center */
#mf-toasts{position:fixed;top:24px;left:50%;transform:translateX(-50%);
  z-index:9998;display:flex;flex-direction:column;align-items:center;
  gap:8px;pointer-events:none;min-width:300px;max-width:420px;}
.mf-toast{background:var(--bg-card);border-radius:var(--radius);padding:13px 20px;
  font-size:13px;pointer-events:all;animation:mf-tin .3s ease;
  text-align:center;width:100%;box-shadow:0 8px 32px rgba(0,0,0,.6);}
.mf-toast.s{border:1px solid var(--success);color:var(--success)}
.mf-toast.e{border:1px solid var(--error);color:var(--error)}
.mf-toast.i{border:1px solid var(--gold);color:var(--gold)}
@keyframes mf-tin{from{transform:translateY(-12px);opacity:0}to{transform:translateY(0);opacity:1}}

/* AUTH */
#mf-auth{min-height:100vh;display:none;align-items:center;justify-content:center;padding:20px;}
.mf-auth-card{width:100%;max-width:420px;background:var(--bg-card);
  border:1px solid var(--gold);border-radius:var(--radius);padding:48px 40px;}
.mf-auth-logo{text-align:center;margin-bottom:32px}
.mf-auth-logo h1{font-family:var(--ft);font-size:34px;font-weight:600;color:var(--gold)}
.mf-auth-logo p{font-size:11px;color:var(--text);letter-spacing:3px;text-transform:uppercase;margin-top:5px}
.mf-auth-tabs{display:flex;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:26px;}
.mf-atab{flex:1;padding:10px;background:transparent;border:none;color:var(--text);
  cursor:pointer;font-family:var(--fb);font-size:11px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;transition:all .2s;}
.mf-atab.on{background:var(--gold-dim);color:var(--gold)}
.mf-err{background:rgba(239,154,154,.1);border:1px solid var(--error);
  border-radius:var(--radius);padding:11px 14px;font-size:13px;
  color:var(--error);margin-bottom:14px;display:none;}

/* FORM */
.mf-fg{margin-bottom:16px}
#mf-root label{display:block;font-size:11px;letter-spacing:2px;
  text-transform:uppercase;color:var(--text);margin-bottom:7px;}
#mf-root input[type=text],#mf-root input[type=email],
#mf-root input[type=password],#mf-root input[type=number],
#mf-root select,#mf-root textarea{
  width:100%;background:var(--bg-card2);border:1px solid var(--border);
  border-radius:var(--radius);padding:11px 13px;color:var(--text);
  font-family:var(--fb);font-size:14px;outline:none;transition:border-color .2s;
  appearance:none;-webkit-appearance:none;}
#mf-root select{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'%3E%3Cpath fill='%23C9A84C' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 12px center;
  padding-right:40px;}
#mf-root input:focus,#mf-root select:focus{border-color:var(--gold)}
#mf-root input::placeholder{color:var(--muted)}
#mf-root select option{background:var(--bg-card);color:var(--text)}

/* BUTTONS */
.mf-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;
  padding:12px 20px;border-radius:var(--radius);border:none;font-family:var(--fb);
  font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
  cursor:pointer;transition:all .2s;white-space:nowrap;}
.mf-btn-p{background:var(--gold);color:#0d0d0d}
.mf-btn-p:hover{background:#d4b05a}
.mf-btn-p:disabled{background:#5a4a1e;color:#888;cursor:not-allowed}
.mf-btn-g{background:transparent;border:1px solid #444;color:var(--text)}
.mf-btn-g:hover{border-color:var(--gold);color:var(--gold)}
.mf-btn-d{background:transparent;border:1px solid var(--error);color:var(--error)}
.mf-btn-d:hover{background:rgba(239,154,154,.08)}
.mf-btn-sm{padding:7px 13px;font-size:10px}
.mf-btn-md{padding:10px 18px;font-size:12px}
.mf-btn-full{width:100%}
.mf-btn-icon{background:transparent;border:none;color:var(--text);
  cursor:pointer;padding:5px;border-radius:6px;font-size:15px;transition:color .15s;}
.mf-btn-icon:hover{color:var(--gold)}

/* APP LAYOUT */
#mf-app{display:none;min-height:100vh}
.mf-layout{display:flex;min-height:100vh}

/* SIDEBAR */
.mf-sidebar{width:240px;flex-shrink:0;background:var(--bg-card);
  border-right:1px solid var(--border);display:flex;flex-direction:column;
  position:sticky;top:0;height:100vh;transition:transform .3s;}
.mf-sb-logo{padding:28px 24px 20px;border-bottom:1px solid var(--border);}
.mf-sb-logo h2{font-family:var(--ft);font-size:22px;font-weight:600;color:var(--gold)}
.mf-sb-logo span{font-size:10px;color:var(--text);letter-spacing:3px;text-transform:uppercase;display:block;margin-top:3px}
.mf-nav{flex:1;padding:10px 0;overflow-y:auto}
/* NAV ITEMS — más espaciados, texto blanco */
.mf-nitem{display:flex;align-items:center;gap:12px;padding:14px 24px;
  color:var(--text);cursor:pointer;font-size:14px;font-weight:500;
  border-left:2px solid transparent;transition:all .15s;letter-spacing:0.3px;}
.mf-nitem:hover{color:var(--gold);background:rgba(255,255,255,.03)}
.mf-nitem.on{color:var(--gold);border-left-color:var(--gold);background:var(--gold-dim)}
.mf-ndiv{margin:8px 24px;border:none;border-top:1px solid var(--border)}
.mf-sb-foot{padding:16px 24px;border-top:1px solid var(--border)}
.mf-user{display:flex;align-items:center;gap:9px;cursor:pointer;
  padding:7px;border-radius:var(--radius);transition:background .15s;}
.mf-user:hover{background:rgba(255,255,255,.03)}
.mf-ava{width:30px;height:30px;border-radius:50%;border:1px solid var(--gold);
  background:var(--gold-dim);display:flex;align-items:center;justify-content:center;
  font-size:12px;color:var(--gold);overflow:hidden;flex-shrink:0;}
.mf-ava img{width:100%;height:100%;object-fit:cover}
.mf-uname{font-size:12px;font-weight:500;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mf-uemail{font-size:10px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

/* MAIN */
.mf-main{flex:1;padding:30px;min-width:0}

/* PERIOD BAR */
.mf-period-bar{display:flex;align-items:flex-start;justify-content:space-between;
  margin-bottom:28px;flex-wrap:wrap;gap:12px;}
.mf-ptitle{font-family:var(--ft);font-size:30px;font-weight:600;letter-spacing:.5px}
.mf-psub{font-size:11px;color:var(--text);letter-spacing:2px;text-transform:uppercase;margin-top:3px}
.mf-psel{display:flex;gap:8px;align-items:center}
.mf-psel select{width:auto;padding:8px 36px 8px 12px;font-size:12px;background:var(--bg-card)}

/* CARDS */
.mf-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:22px;}
.mf-card-gold{border-color:var(--gold)}
.mf-ch{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.mf-ctitle{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--text)}

/* SUMMARY GRID */
.mf-sgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;margin-bottom:32px;}
.mf-sc{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.mf-slabel{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--text);margin-bottom:8px}
.mf-sval{font-family:var(--ft);font-size:24px;font-weight:600}

/* TABS — más grandes y espaciados */
.mf-tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);margin:28px 0 24px;}
.mf-tbtn{padding:12px 22px;background:transparent;border:none;
  border-bottom:2px solid transparent;color:var(--text);cursor:pointer;
  font-family:var(--fb);font-size:13px;font-weight:500;letter-spacing:1.5px;
  text-transform:uppercase;transition:all .15s;margin-bottom:-1px;}
.mf-tbtn:hover{color:var(--gold)}
.mf-tbtn.on{color:var(--gold);border-bottom-color:var(--gold)}
.mf-tp{display:none}.mf-tp.on{display:block}

/* TABLE */
.mf-tbl{width:100%;border-collapse:collapse}
.mf-tbl th{text-align:left;padding:10px 12px;font-size:10px;letter-spacing:2.5px;
  text-transform:uppercase;color:var(--text);border-bottom:1px solid var(--border);}
.mf-tbl th.r{text-align:right}
.mf-tbl td{padding:12px 12px;font-size:13px;color:var(--text);border-bottom:1px solid rgba(30,30,30,.5)}
.mf-tbl td.r{text-align:right;font-variant-numeric:tabular-nums}
.mf-tbl td.mu{color:var(--text)}
.mf-tbl tr:last-child td{border-bottom:none}
.mf-tbl tr:hover td{background:rgba(255,255,255,.01)}
.mf-tbl .mf-trow-total td{border-top:1px solid var(--border);font-weight:600;color:var(--gold);border-bottom:none;padding-top:13px}

/* DIFF */
.dp{color:var(--success);font-size:12px}.dn{color:var(--error);font-size:12px}.dz{color:var(--text);font-size:12px}

/* INLINE EDIT */
.mf-ea{cursor:pointer;border-bottom:1px dashed var(--border);
  padding:2px 3px;border-radius:3px;transition:all .15s;}
.mf-ea:hover{background:var(--gold-dim);border-bottom-color:var(--gold)}
.mf-einput{background:var(--bg-card2);border:1px solid var(--gold);border-radius:6px;
  padding:3px 7px;color:var(--text);font-size:13px;width:110px;outline:none;font-family:var(--fb);}

/* GRID */
.mf-2col{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.mf-3col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}
.mf-mt16{margin-top:16px}.mf-mt24{margin-top:24px}
.mf-mb16{margin-bottom:16px}.mf-mb24{margin-bottom:24px}

/* PATRIMONIO */
.mf-pat-big{font-family:var(--ft);font-size:52px;font-weight:700;line-height:1}
.mf-pat-lbl{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--text);margin-bottom:10px}
.mf-pat-brk{display:flex;gap:28px;margin-top:18px;flex-wrap:wrap}
.mf-pb{flex:1;min-width:120px}
.mf-pb-l{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--text);margin-bottom:5px}
.mf-pb-v{font-family:var(--ft);font-size:20px;font-weight:600}

/* MODAL */
.mf-overlay{position:fixed;inset:0;background:rgba(0,0,0,.75);
  backdrop-filter:blur(4px);z-index:500;display:none;
  align-items:center;justify-content:center;padding:20px;}
.mf-overlay.on{display:flex}
.mf-modal{background:var(--bg-card);border:1px solid var(--gold);
  border-radius:var(--radius);padding:30px;width:100%;
  max-width:520px;max-height:90vh;overflow-y:auto;}
.mf-modal-lg{max-width:720px}
.mf-modal-xl{max-width:900px}
.mf-mh{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px}
.mf-mtitle{font-family:var(--ft);font-size:22px;font-weight:600;color:var(--text)}
.mf-mclose{background:none;border:none;color:var(--text);cursor:pointer;font-size:20px;padding:3px;transition:color .15s}
.mf-mclose:hover{color:var(--gold)}
.mf-mfoot{display:flex;gap:9px;justify-content:flex-end;margin-top:22px;padding-top:18px;border-top:1px solid var(--border)}

/* CHIP */
.mf-chip{display:inline-flex;align-items:center;padding:2px 9px;border-radius:20px;
  font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:500;}
.mf-cv{background:rgba(239,154,154,.15);color:var(--error)}
.mf-co{background:rgba(255,183,77,.12);color:var(--warning)}
.mf-ci{background:var(--gold-dim);color:var(--gold)}
.mf-cs{background:rgba(129,199,132,.12);color:var(--success)}

/* UPLOAD */
.mf-upzone{border:2px dashed var(--border);border-radius:var(--radius);
  padding:36px 20px;text-align:center;cursor:pointer;transition:all .2s;}
.mf-upzone:hover,.mf-upzone.drag{border-color:var(--gold);background:var(--gold-dim)}
.mf-upico{font-size:30px;margin-bottom:10px}
.mf-uptxt{font-size:13px;color:var(--text)}
.mf-uptxt strong{color:var(--gold)}

/* AMORT TABLE */
.mf-amort-tbl{width:100%;border-collapse:collapse;font-size:12px}
.mf-amort-tbl th{padding:8px 10px;background:var(--bg-card2);color:var(--text);
  font-size:10px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid var(--border)}
.mf-amort-tbl td{padding:8px 10px;border-bottom:1px solid rgba(30,30,30,.4);color:var(--text)}
.mf-amort-tbl tr:last-child td{border-bottom:none}
.mf-amort-tbl tr.past td{color:var(--muted);text-decoration:line-through}
.mf-amort-tbl tr.current td{background:var(--gold-dim);font-weight:600}

/* CLASSIFY */
.mf-citem{background:var(--bg-card2);border:1px solid var(--border);
  border-radius:var(--radius);padding:13px 15px;margin-bottom:9px;}
.mf-cdesc{font-size:13px;margin-bottom:6px;color:var(--text)}
.mf-cmeta{display:flex;gap:14px;align-items:center;flex-wrap:wrap}
.mf-camt{font-family:var(--ft);font-size:16px;font-weight:600}

/* CHART */
.mf-chw{position:relative;height:220px}

/* AI BADGE */
.mf-ai{display:inline-flex;align-items:center;gap:3px;font-size:10px;
  letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);
  border:1px solid var(--gold-dim);padding:2px 7px;border-radius:20px;}

/* STMT */
.mf-stmt{display:flex;align-items:center;gap:13px;padding:13px 0;border-bottom:1px solid var(--border)}
.mf-stmt:last-child{border-bottom:none}
.mf-stmt-ico{width:34px;height:34px;background:var(--gold-dim);border-radius:8px;
  display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}

/* PROFILE AVA */
.mf-pava{width:76px;height:76px;border-radius:50%;border:2px solid var(--gold);
  background:var(--gold-dim);display:flex;align-items:center;justify-content:center;
  font-size:26px;color:var(--gold);overflow:hidden;cursor:pointer;
  position:relative;flex-shrink:0;}
.mf-pava img{width:100%;height:100%;object-fit:cover}
.mf-pava:hover::after{content:"📷";position:absolute;inset:0;background:rgba(0,0,0,.6);
  display:flex;align-items:center;justify-content:center;font-size:18px;border-radius:50%;}

/* PAT ITEM */
.mf-pit{display:flex;align-items:center;justify-content:space-between;
  background:var(--bg-card2);border:1px solid var(--border);
  border-radius:8px;padding:14px 18px;margin-bottom:8px;}
.mf-piname{font-size:13px;color:var(--text)}
.mf-pitype{font-size:10px;color:var(--text);margin-top:2px;letter-spacing:1px;text-transform:uppercase}
.mf-pival{font-family:var(--ft);font-size:17px;font-weight:600}

/* FAQ / USO */
.mf-faq-item{border-bottom:1px solid var(--border);padding:16px 0}
.mf-faq-item:last-child{border-bottom:none}
.mf-faq-q{font-size:14px;font-weight:600;color:var(--text);cursor:pointer;
  display:flex;justify-content:space-between;align-items:center;gap:12px}
.mf-faq-q:hover{color:var(--gold)}
.mf-faq-a{font-size:13px;color:var(--text);line-height:1.7;margin-top:10px;
  padding-left:12px;border-left:2px solid var(--gold-dim);display:none}
.mf-faq-a.on{display:block}

/* DISCLAIMER MODAL */
.mf-disclaimer{max-width:560px}
.mf-disclaimer-icon{font-size:40px;text-align:center;margin-bottom:16px}

/* ADMIN */
.mf-admin-row{display:flex;align-items:center;justify-content:space-between;
  padding:12px 0;border-bottom:1px solid var(--border);font-size:13px}
.mf-admin-row:last-child{border-bottom:none}

/* MOBILE */
.mf-topbar{display:none;position:fixed;top:0;left:0;right:0;
  background:var(--bg-card);border-bottom:1px solid var(--border);
  padding:11px 15px;align-items:center;justify-content:space-between;z-index:99;}
.mf-ham{background:none;border:none;color:var(--text);font-size:20px;cursor:pointer}
.mf-sov{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:98}
.mf-sov.on{display:block}

/* PAGES */
.mf-page{display:none}.mf-page.on{display:block}

/* UTILS */
.mf-success{color:var(--success)}.mf-error{color:var(--error)}
.mf-gold{color:var(--gold)}.mf-muted{color:var(--muted)}
.mf-flex{display:flex}.mf-aic{align-items:center}
.mf-jb{justify-content:space-between}.mf-f1{flex:1}
.mf-gap8{gap:8px}.mf-gap12{gap:12px}
.mf-hidden{display:none!important}
.mf-divider{border:none;border-top:1px solid var(--border);margin:28px 0}
.mf-section-gap{margin-top:40px}

@media(max-width:860px){
  .mf-sidebar{position:fixed;left:0;top:0;bottom:0;z-index:99;transform:translateX(-100%)}
  .mf-sidebar.on{transform:translateX(0)}
  .mf-main{padding:70px 14px 20px}
  .mf-topbar{display:flex}
  .mf-2col,.mf-3col{grid-template-columns:1fr}
  .mf-pat-brk{flex-direction:column;gap:14px}
  .mf-sgrid{grid-template-columns:1fr 1fr}
}
`;
document.head.appendChild(css);
})();
<script>
(function(){
'use strict';

var ADMIN_EMAIL = 'constanza@constanzagraell.com';

// ── EDITOR DETECTION ─────────────────────────
var mfIsEditor = false;
try { if(window.self !== window.top) mfIsEditor = true; } catch(e){ mfIsEditor = true; }
try { if(!mfIsEditor && window.location.href.indexOf('/edit') !== -1) mfIsEditor = true; } catch(e){}
(function(){ var r=document.getElementById('mf-root'); if(r&&mfIsEditor) r.classList.add('mf-in-editor'); })();

// ── LOAD DEPS ─────────────────────────────────
var mfReady=0;
function mfCheckReady(){ mfReady++; if(mfReady>=2) mfInit(); }
function mfLoadScript(src,cb){
  if(document.querySelector('script[src="'+src+'"]')){cb&&cb();return;}
  var s=document.createElement('script');s.src=src;s.onload=cb||null;document.head.appendChild(s);
}
mfLoadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js',mfCheckReady);
mfLoadScript('https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',mfCheckReady);
// PDF.js — read PDFs in browser
mfLoadScript('https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js',function(){
  if(typeof pdfjsLib!=='undefined'){
    pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  }
});
// SheetJS — read Excel files in browser
mfLoadScript('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',null);

// ── STATE ──────────────────────────────────────
var S={
  sb:null,user:null,profile:null,
  month:new Date().getMonth()+1,year:new Date().getFullYear(),
  incomeCats:[],cvmCats:[],tesoCats:[],
  entries:[],liabs:[],liabBals:[],
  invs:[],bels:[],aVals:[],
  pendingFile:null,pendingLiabFile:null,charts:{}
};
var MES=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

// ── HELPERS ────────────────────────────────────
function fmt(n){ var v=Math.round(Number(n)||0); return '$'+v.toLocaleString('es-CL'); }
function el(id){ return document.getElementById(id); }
function toast(msg,type){ var c=el('mf-toasts'),t=document.createElement('div'); t.className='mf-toast '+(type||'i'); t.textContent=msg; c.appendChild(t); setTimeout(function(){t.remove();},8000); }
function loader(v){ if(mfIsEditor)return; var l=el('mf-loader'); if(l)l.style.display=v?'flex':'none'; }
function openM(id){ el(id).classList.add('on'); }
window.mfCloseM=function(id){ el(id).classList.remove('on'); };
function diffHtml(b,a,mode){
  var d=(Number(a)||0)-(Number(b)||0);
  if(d===0) return '<span class="dz">–</span>';
  var pos=(mode==='income')?d>0:d<0;
  return '<span class="'+(pos?'dp':'dn')+'">'+(d>0?'+':'')+fmt(d)+'</span>';
}

// ── INIT ───────────────────────────────────────
function mfInit(){
  if(mfIsEditor){
    el('mf-auth').style.display='none';
    el('mf-app').style.display='block';
    el('mf-topbar').style.display='flex';
    var ySel=el('mf-ssel-y');
    for(var y=S.year-3;y<=S.year+1;y++){
      var o=document.createElement('option');o.value=y;o.textContent=y;
      if(y===S.year)o.selected=true;ySel.appendChild(o);
    }
    el('mf-ssel-m').value=S.month;
    return;
  }
  loader(true);
  S.sb=supabase.createClient('https://dphznaifdioinwledtyl.supabase.co','sb_publishable_8DGcou5kIdiJPLDgk2Bjzg_FKaBXOrP');
  var ySel=el('mf-ssel-y');
  for(var y=S.year-3;y<=S.year+1;y++){
    var o=document.createElement('option');o.value=y;o.textContent=y;
    if(y===S.year)o.selected=true;ySel.appendChild(o);
  }
  el('mf-ssel-m').value=S.month;
  S.sb.auth.onAuthStateChange(function(ev,sess){
    if(sess&&sess.user){ S.user=sess.user; mfLoadApp(); }
    else { S.user=null; loader(false); el('mf-auth').style.display='flex'; el('mf-app').style.display='none'; el('mf-topbar').style.display='none'; }
  });
  S.sb.auth.getSession().then(function(r){ if(!r.data||!r.data.session){ loader(false); el('mf-auth').style.display='flex'; } });
}

// ── AUTH ───────────────────────────────────────
window.mfSwitchAuth=function(tab){
  document.querySelectorAll('.mf-atab').forEach(function(b,i){ b.classList.toggle('on',(tab==='login'&&i===0)||(tab==='reg'&&i===1)); });
  el('mf-lform').style.display=tab==='login'?'block':'none';
  el('mf-rform').style.display=tab==='reg'?'block':'none';
  el('mf-aerr').style.display='none';
};
window.mfLogin=function(){
  var email=el('mf-lemail').value.trim(),pw=el('mf-lpw').value;
  if(!email||!pw){showAuthErr('Completa todos los campos');return;}
  loader(true);
  S.sb.auth.signInWithPassword({email:email,password:pw}).then(function(r){ loader(false); if(r.error)showAuthErr(r.error.message); });
};
window.mfRegister=function(){
  var name=el('mf-rname').value.trim(),email=el('mf-remail').value.trim(),pw=el('mf-rpw').value;
  var terms=el('mf-terms');
  if(!name||!email||!pw){showAuthErr('Completa todos los campos');return;}
  if(terms&&!terms.checked){showAuthErr('Debes aceptar los Términos y la Política de Privacidad');return;}
  loader(true);
  S.sb.auth.signUp({email:email,password:pw}).then(function(r){
    if(r.error){loader(false);showAuthErr(r.error.message);return;}
    function mostrarExito(){
      loader(false);
      el('mf-rform').querySelectorAll('.mf-fg').forEach(function(c){c.style.display='none';});
      var termDiv=el('mf-rform').querySelector('div[style*="checkbox"]');
      if(termDiv)termDiv.style.display='none';
      var btn=el('mf-rform').querySelector('button');if(btn)btn.style.display='none';
      el('mf-reg-success').style.display='block';
    }
    if(r.data&&r.data.user){
      S.sb.from('user_profiles').upsert({id:r.data.user.id,full_name:name}).then(function(){
        mfInsertDefaultCats(r.data.user.id).then(mostrarExito);
      });
    } else { mostrarExito(); }
  });
};
function showAuthErr(msg){ el('mf-aerr').textContent=msg; el('mf-aerr').style.display='block'; }
window.mfLogout=function(){ S.sb.auth.signOut(); };

async function mfInsertDefaultCats(uid){
  var inc=['Sueldo o salario','Ingresos freelance','Ingresos pasivos','Bonificaciones','Ingresos por inversiones','Pensión'];
  var cvm=['Vivienda (arriendo/dividendo)','Servicios básicos','Alimentación','Transporte','Salud','Educación','Entretención','Deportes','Regalos'];
  var tes=['Fondo de emergencia','Fondo futuro'];
  await S.sb.from('income_categories').insert(inc.map(function(n){return{user_id:uid,name:n,is_default:true};}));
  await S.sb.from('expense_categories_cvm').insert(cvm.map(function(n){return{user_id:uid,name:n,is_default:true};}));
  await S.sb.from('expense_categories_cvm').insert(tes.map(function(n){return{user_id:uid,name:'[T] '+n,is_default:true};}));
}

// ── LOAD APP ───────────────────────────────────
async function mfLoadApp(){
  loader(true);
  await mfLoadProfile();
  await mfLoadData();
  el('mf-auth').style.display='none';
  el('mf-app').style.display='block';
  el('mf-topbar').style.display='flex';
  loader(false);
  // Admin menu
  if(S.user&&S.user.email===ADMIN_EMAIL){ el('mf-nav-admin').classList.remove('mf-hidden'); }
  // Disclaimer
  mfCheckDisclaimer();
  mfRender();
}

async function mfLoadProfile(){
  var r=await S.sb.from('user_profiles').select('*').eq('id',S.user.id).single();
  S.profile=r.data; mfUpdateSidebar();
}

function mfUpdateSidebar(){
  var name=(S.profile&&S.profile.full_name)||S.user.email.split('@')[0];
  el('mf-sb-name').textContent=name;
  el('mf-sb-email').textContent=S.user.email;
  el('mf-sb-ava').textContent=name.charAt(0).toUpperCase();
  if(S.profile&&S.profile.avatar_url) el('mf-sb-ava').innerHTML='<img src="'+S.profile.avatar_url+'" alt="">';
}

async function mfLoadData(){
  var uid=S.user.id,m=S.month,y=S.year;
  var results=await Promise.all([
    S.sb.from('income_categories').select('*').eq('user_id',uid).order('created_at'),
    S.sb.from('expense_categories_cvm').select('*').eq('user_id',uid).order('created_at'),
    S.sb.from('billetera_entries').select('*').eq('user_id',uid).eq('month',m).eq('year',y),
    S.sb.from('liabilities').select('*').eq('user_id',uid).order('created_at'),
    S.sb.from('liability_balances').select('*').eq('user_id',uid).eq('month',m).eq('year',y),
    S.sb.from('assets_investments').select('*').eq('user_id',uid).order('created_at'),
    S.sb.from('assets_belongings').select('*').eq('user_id',uid).order('created_at'),
    S.sb.from('asset_values').select('*').eq('user_id',uid).eq('month',m).eq('year',y)
  ]);
  S.incomeCats=results[0].data||[];
  var allExp=results[1].data||[];
  S.cvmCats=allExp.filter(function(c){return !c.name.startsWith('[T] ');});
  S.tesoCats=allExp.filter(function(c){return c.name.startsWith('[T] ');});
  S.entries=results[2].data||[];
  S.liabs=results[3].data||[];
  S.liabBals=results[4].data||[];
  S.invs=results[5].data||[];
  S.bels=results[6].data||[];
  S.aVals=results[7].data||[];
}

window.mfPeriodChange=function(){
  S.month=parseInt(el('mf-ssel-m').value);
  S.year=parseInt(el('mf-ssel-y').value);
  loader(true);
  mfLoadData().then(function(){loader(false);mfRender();});
};

// ── DISCLAIMER ─────────────────────────────────
function mfCheckDisclaimer(){
  var key='mf_disclaimer_'+S.user.id;
  if(!localStorage.getItem(key)) openM('mf-m-disclaimer');
}
window.mfAcceptDisclaimer=function(){
  localStorage.setItem('mf_disclaimer_'+S.user.id,'1');
  window.mfCloseM('mf-m-disclaimer');
};

// ── NAVIGATION ─────────────────────────────────
var pgTitles={
  dashboard:['Dashboard','Resumen general'],
  billetera:['Billetera','Flujo de caja mensual'],
  deudas:['Lo Que Debo','Pasivos · Deudas'],
  activos:['Lo Que Tengo','Activos · Inversiones y pertenencias'],
  patrimonio:['Lo Que Es Mío','Patrimonio neto'],
  cartolas:['Subir Cartolas','Subir y clasificar con IA'],
  uso:['Uso del Sitio','Manual y preguntas frecuentes'],
  config:['Configuración','Categorías y ajustes'],
  admin:['Admin','Panel de administración'],
  perfil:['Mi Perfil','Datos personales']
};
var curPage='dashboard';

window.mfPage=function(p){
  curPage=p;
  document.querySelectorAll('.mf-page').forEach(function(x){x.classList.remove('on');});
  var pg=el('mf-p-'+p);if(pg)pg.classList.add('on');
  document.querySelectorAll('.mf-nitem').forEach(function(n){n.classList.toggle('on',n.dataset.p===p);});
  var t=pgTitles[p]||[p,''];
  el('mf-ptitle').textContent=t[0];el('mf-psub').textContent=t[1];
  mfCloseSidebar();mfRender();
};

function mfRender(){
  switch(curPage){
    case 'dashboard': mfRenderDashboard();break;
    case 'billetera': mfRenderBilletera();break;
    case 'deudas': mfRenderDeudas();break;
    case 'activos': mfRenderActivos();break;
    case 'patrimonio': mfRenderPatrimonio();break;
    case 'cartolas': mfRenderCartolas();break;
    case 'config': mfRenderConfig();break;
    case 'admin': mfRenderAdmin();break;
    case 'perfil': mfRenderPerfil();break;
  }
}

// ── ENTRY HELPERS ──────────────────────────────
function getE(catId,catType){ return S.entries.find(function(e){return e.category_id===catId&&e.category_type===catType;})||{budgeted:0,actual:0}; }

async function upsertEntry(catId,catType,field,val){
  var uid=S.user.id;
  var ex=S.entries.find(function(e){return e.category_id===catId&&e.category_type===catType;});
  if(ex){
    await S.sb.from('billetera_entries').update({[field]:val,updated_at:new Date().toISOString()}).eq('id',ex.id);
  } else {
    await S.sb.from('billetera_entries').insert({user_id:uid,month:S.month,year:S.year,category_id:catId,category_type:catType,budgeted:field==='budgeted'?val:0,actual:field==='actual'?val:0});
  }
}

// ── INLINE EDIT ────────────────────────────────
function mfInlineEdit(span,onSave){
  var raw=span.textContent.replace(/\$/g,'').replace(/\./g,'').replace(/,/g,'').trim();
  var inp=document.createElement('input');inp.type='number';inp.className='mf-einput';
  inp.value=Math.round(Number(raw)||0);span.replaceWith(inp);inp.focus();inp.select();
  var saved=false;
  function doSave(){if(saved)return;saved=true;onSave(Math.round(Number(inp.value)||0));}
  inp.addEventListener('blur',doSave);
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')inp.blur();if(e.key==='Escape'){saved=true;inp.replaceWith(span);}});
}

// ── BILLETERA CALCS ────────────────────────────
function calcBilletera(){
  var ing=S.incomeCats.reduce(function(s,c){return s+Number(getE(c.id,'income').actual);},0);
  var cvm=S.cvmCats.reduce(function(s,c){return s+Number(getE(c.id,'cvm').actual);},0);
  var tes=S.tesoCats.reduce(function(s,c){return s+Number(getE(c.id,'tesoro').actual);},0);
  var deu=S.liabs.reduce(function(s,l){var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};return s+Number(b.monthly_payment||0);},0);
  var sal=ing-cvm-deu-tes;
  var vivCat=S.cvmCats.find(function(c){return c.name.toLowerCase().includes('arriendo')||c.name.toLowerCase().includes('dividendo');});
  var viv=vivCat?Number(getE(vivCat.id,'cvm').actual):0;
  return{ing:ing,cvm:cvm,tes:tes,deu:deu,sal:sal,viv:viv};
}
function calcActivos(){
  var tI=S.invs.reduce(function(s,inv){var v=S.aVals.find(function(x){return x.asset_id===inv.id&&x.asset_type==='investment';})||{};return s+Number(v.value||0);},0);
  var tP=S.bels.reduce(function(s,b){var v=S.aVals.find(function(x){return x.asset_id===b.id&&x.asset_type==='belonging';})||{};return s+Number(v.value||0);},0);
  return{inv:tI,pert:tP,total:tI+tP};
}
function calcPasivos(){
  return S.liabs.reduce(function(s,l){var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};return s+Number(b.balance||0);},0);
}

// ── DASHBOARD ──────────────────────────────────
function mfRenderDashboard(){
  var b=calcBilletera(),a=calcActivos(),pas=calcPasivos();
  var pat=a.total-pas;
  el('mf-d-pat').textContent=fmt(pat);
  el('mf-d-pat').className='mf-sval '+(pat>=0?'mf-gold':'mf-error');
  el('mf-d-act').textContent=fmt(a.total);
  el('mf-d-deu').textContent=fmt(pas);
  el('mf-d-ing').textContent=fmt(b.ing);
  el('mf-d-egr').textContent=fmt(b.cvm+b.deu+b.tes);
  el('mf-d-sal').textContent=fmt(b.sal);
  el('mf-d-sal').className='mf-sval '+(b.sal>=0?'mf-success':'mf-error');
  mfRenderDashboardCharts();
}

// ── BILLETERA ──────────────────────────────────
function mfRenderBilletera(){ mfRenderIngTable();mfRenderCvmTable();mfRenderDeuTable();mfRenderTesTable();mfUpdateBSum(); }

function makeTableRow(cat,catType,mode){
  var e=getE(cat.id,catType),b=Number(e.budgeted),a=Number(e.actual);
  return '<tr><td>'+cat.name.replace('[T] ','')+'</td>'+
    '<td class="r"><span class="mf-ea" onclick="mfEditEntry(\''+cat.id+'\',\''+catType+'\',\'budgeted\',this)">'+fmt(b)+'</span></td>'+
    '<td class="r"><span class="mf-ea" onclick="mfEditEntry(\''+cat.id+'\',\''+catType+'\',\'actual\',this)">'+fmt(a)+'</span></td>'+
    '<td class="r">'+diffHtml(b,a,mode)+'</td>'+
    '<td class="r"><button class="mf-btn-icon" onclick="mfDelCat(\''+cat.id+'\',\''+catType+'\')" title="Eliminar">🗑</button></td></tr>';
}

window.mfEditEntry=function(catId,catType,field,span){
  mfInlineEdit(span,function(val){upsertEntry(catId,catType,field,val).then(function(){mfLoadData().then(mfRender);});});
};

function mfRenderIngTable(){
  var tb=el('mf-ing-tbody');if(!S.incomeCats.length){tb.innerHTML='<tr><td colspan="5" style="padding:20px;text-align:center;font-size:13px">Sin categorías. Agrega una.</td></tr>';return;}
  var tB=0,tA=0;
  tb.innerHTML=S.incomeCats.map(function(c){var e=getE(c.id,'income');tB+=Number(e.budgeted);tA+=Number(e.actual);return makeTableRow(c,'income','income');}).join('')+
    '<tr class="mf-trow-total"><td>Total Ingresos</td><td class="r">'+fmt(tB)+'</td><td class="r">'+fmt(tA)+'</td><td class="r">'+diffHtml(tB,tA,'income')+'</td><td></td></tr>';
}
function mfRenderCvmTable(){
  var tb=el('mf-cvm-tbody');if(!S.cvmCats.length){tb.innerHTML='<tr><td colspan="5" style="padding:20px;text-align:center;font-size:13px">Sin categorías.</td></tr>';return;}
  var tB=0,tA=0;
  tb.innerHTML=S.cvmCats.map(function(c){var e=getE(c.id,'cvm');tB+=Number(e.budgeted);tA+=Number(e.actual);return makeTableRow(c,'cvm','expense');}).join('')+
    '<tr class="mf-trow-total"><td>Total CVM</td><td class="r">'+fmt(tB)+'</td><td class="r">'+fmt(tA)+'</td><td class="r">'+diffHtml(tB,tA,'expense')+'</td><td></td></tr>';
}
function mfRenderDeuTable(){
  var tb=el('mf-deu-tbody');if(!S.liabs.length){tb.innerHTML='<tr><td colspan="3" style="padding:20px;text-align:center;font-size:13px">Sin deudas.</td></tr>';return;}
  var total=0;
  tb.innerHTML=S.liabs.map(function(l){
    var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};var p=Number(b.monthly_payment)||0;total+=p;
    var chip=l.liability_type==='villano'?'<span class="mf-chip mf-cv">Consumo</span>':'<span class="mf-chip mf-co">Otra</span>';
    return '<tr><td>'+l.name+'</td><td>'+chip+'</td><td class="r"><span class="mf-ea" onclick="mfEditLiabPay(\''+l.id+'\',this)">'+fmt(p)+'</span></td></tr>';
  }).join('')+'<tr class="mf-trow-total"><td>Total Cuotas</td><td></td><td class="r">'+fmt(total)+'</td></tr>';
}
function mfRenderTesTable(){
  var tb=el('mf-tes-tbody');if(!S.tesoCats.length){tb.innerHTML='<tr><td colspan="5" style="padding:20px;text-align:center;font-size:13px">Sin categorías.</td></tr>';return;}
  var tB=0,tA=0;
  tb.innerHTML=S.tesoCats.map(function(c){var e=getE(c.id,'tesoro');tB+=Number(e.budgeted);tA+=Number(e.actual);return makeTableRow(c,'tesoro','expense');}).join('')+
    '<tr class="mf-trow-total"><td>Total Tesoro</td><td class="r">'+fmt(tB)+'</td><td class="r">'+fmt(tA)+'</td><td class="r">'+diffHtml(tB,tA,'expense')+'</td><td></td></tr>';
}
function mfUpdateBSum(){
  var b=calcBilletera();
  el('mf-s-ing').textContent=fmt(b.ing);el('mf-s-viv').textContent=fmt(b.viv);
  el('mf-s-deu').textContent=fmt(b.deu);el('mf-s-cvm').textContent=fmt(b.cvm);
  el('mf-s-tes').textContent=fmt(b.tes);
  var se=el('mf-s-sal');se.textContent=fmt(b.sal);
  se.className='mf-sval '+(b.sal>=0?'mf-success':'mf-error');
}

window.mfBTab=function(tab,btn){
  document.querySelectorAll('#mf-p-billetera .mf-tbtn').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');
  document.querySelectorAll('#mf-p-billetera .mf-tp').forEach(function(p){p.classList.remove('on');});
  var tp=el('mf-bt-'+tab);if(tp)tp.classList.add('on');
};
window.mfATab=function(tab,btn){
  document.querySelectorAll('#mf-p-activos .mf-tbtn').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');
  document.querySelectorAll('#mf-p-activos .mf-tp').forEach(function(p){p.classList.remove('on');});
  var tp=el('mf-at-'+tab);if(tp)tp.classList.add('on');
};

// ── CATEGORIES ─────────────────────────────────
window.mfOpenCat=function(type){
  var titles={income:'Nueva Categoría de Ingreso',cvm:'Nueva Categoría CVM',tesoro:'Nueva Categoría Tesoro'};
  var ph={income:'Ej: Sueldo, Freelance, Arriendo, Pensión...',cvm:'Ej: Supermercado, Transporte, Salud...',tesoro:'Ej: Fondo emergencia, Ahorro viaje...'};
  el('mf-mcat-t').textContent=titles[type]||'Nueva Categoría';
  el('mf-catname').placeholder=ph[type]||'';
  el('mf-catname').value='';el('mf-cattype').value=type;
  openM('mf-m-cat');
};
window.mfSaveCat=async function(){
  var name=el('mf-catname').value.trim(),type=el('mf-cattype').value;
  if(!name){toast('Escribe un nombre','e');return;}
  if(type==='income') await S.sb.from('income_categories').insert({user_id:S.user.id,name:name});
  else if(type==='tesoro') await S.sb.from('expense_categories_cvm').insert({user_id:S.user.id,name:'[T] '+name});
  else await S.sb.from('expense_categories_cvm').insert({user_id:S.user.id,name:name});
  window.mfCloseM('mf-m-cat');await mfLoadData();mfRender();toast('Categoría agregada','s');
};
window.mfDelCat=async function(id,type){
  if(!confirm('¿Eliminar esta categoría?'))return;
  if(type==='income') await S.sb.from('income_categories').delete().eq('id',id);
  else await S.sb.from('expense_categories_cvm').delete().eq('id',id);
  await mfLoadData();mfRender();
};

// ── LIABILITIES ────────────────────────────────
window.mfOpenLiab=function(type){
  el('mf-mliab-t').textContent=type==='villano'?'Nueva Deuda de Consumo':'Nueva Otra Deuda';
  el('mf-liabname').value='';el('mf-liabcap').value='';el('mf-liabrate').value='';
  el('mf-liabinst').value='';el('mf-liabpaid').value='';el('mf-liabgar').value='false';
  el('mf-liabtype').value=type;el('mf-liab-file-name').textContent='';
  S.pendingLiabFile=null;openM('mf-m-liab');
};
window.mfLiabFileSelect=function(e){
  var f=e.target.files[0];if(!f)return;
  S.pendingLiabFile=f;
  el('mf-liab-file-name').textContent='✓ '+f.name;
};
window.mfSaveLiab=async function(){
  var name=el('mf-liabname').value.trim(),type=el('mf-liabtype').value;
  if(!name){toast('Escribe un nombre','e');return;}
  var cap=parseFloat(el('mf-liabcap').value)||0;
  var rate=parseFloat(el('mf-liabrate').value)||0;
  var inst=parseInt(el('mf-liabinst').value)||0;
  var paid=parseInt(el('mf-liabpaid').value)||0;

  // If file uploaded, try to parse with AI first
  if(S.pendingLiabFile){ await mfParseLiabFile(S.pendingLiabFile,{cap:cap,rate:rate,inst:inst,paid:paid},function(parsed){ cap=parsed.cap||cap;rate=parsed.rate||rate;inst=parsed.inst||inst;paid=parsed.paid||paid; }); }

  var res=await S.sb.from('liabilities').insert({
    user_id:S.user.id,name:name,liability_type:type,
    interest_rate:rate||null,total_installments:inst||null,
    has_guarantee:el('mf-liabgar').value==='true',
    capital:cap||null,installments_paid:paid||null
  }).select().single();

  if(res.data&&inst>0&&cap>0){
    // Insert initial balance for this month
    var monthlyPayment=calcMonthlyPayment(cap,rate,inst);
    await S.sb.from('liability_balances').insert({
      liability_id:res.data.id,user_id:S.user.id,
      month:S.month,year:S.year,
      balance:cap,monthly_payment:monthlyPayment,
      installments_paid:paid,installments_remaining:inst-paid
    });
  }
  window.mfCloseM('mf-m-liab');await mfLoadData();mfRender();toast('Deuda agregada','s');
};

async function mfParseLiabFile(file,defaults,cb){
  try {
    var text=await file.text();
    var prompt='Eres asistente financiero. Extrae de esta tabla de amortización: capital original, tasa de interés anual (%), número total de cuotas, cuotas ya pagadas. Responde SOLO con JSON: {"cap":0,"rate":0,"inst":0,"paid":0}. Documento: '+text.substring(0,2000);
    var res=await fetch('https://dphznaifdioinwledtyl.supabase.co/functions/v1/clasificar-cartola',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer sb_publishable_8DGcou5kIdiJPLDgk2Bjzg_FKaBXOrP'},body:JSON.stringify({prompt:prompt})});
    var data=await res.json();
    var txt=(data.content||[]).map(function(c){return c.text||'';}).join('').replace(/```json|```/g,'').trim();
    cb(JSON.parse(txt));
  } catch(e){ cb(defaults); }
}

function calcMonthlyPayment(capital,annualRate,months){
  if(!annualRate||annualRate===0) return Math.round(capital/months);
  var r=annualRate/100/12;
  return Math.round(capital*r*Math.pow(1+r,months)/(Math.pow(1+r,months)-1));
}

function calcAmortTable(capital,annualRate,months,paid){
  var rows=[];var r=annualRate&&annualRate>0?annualRate/100/12:0;
  var payment=calcMonthlyPayment(capital,annualRate,months);
  var balance=capital;
  var startDate=new Date();startDate.setDate(1);
  for(var i=0;i<months;i++){
    var interest=Math.round(balance*r);var cap=payment-interest;
    if(i===months-1) cap=balance; // last payment
    balance=Math.max(0,balance-cap);
    var d=new Date(startDate.getFullYear(),startDate.getMonth()-paid+i+1,1);
    rows.push({n:i+1,date:d.toLocaleDateString('es-CL',{month:'short',year:'numeric'}),cap:cap,interest:interest,payment:payment,balance:balance,isPast:i<paid,isCurrent:i===paid});
  }
  return rows;
}

window.mfShowAmort=function(liabId){
  var l=S.liabs.find(function(x){return x.id===liabId;});if(!l)return;
  var b=S.liabBals.find(function(x){return x.liability_id===liabId;})||{};
  var cap=Number(l.capital)||Number(b.balance)||0;
  var rate=Number(l.interest_rate)||0;
  var inst=Number(l.total_installments)||0;
  var paid=Number(b.installments_paid)||Number(l.installments_paid)||0;
  if(!cap||!inst){toast('Agrega capital y número de cuotas para ver la tabla','i');return;}

  el('mf-amort-title').textContent='Tabla de Amortización — '+l.name;
  var payment=calcMonthlyPayment(cap,rate,inst);
  var totalInterest=payment*inst-cap;
  el('mf-amort-summary').innerHTML=
    '<div class="mf-sc"><div class="mf-slabel">Capital Original</div><div class="mf-sval">'+fmt(cap)+'</div></div>'+
    '<div class="mf-sc"><div class="mf-slabel">Total Intereses</div><div class="mf-sval mf-error">'+fmt(totalInterest)+'</div></div>'+
    '<div class="mf-sc"><div class="mf-slabel">Cuota Mensual</div><div class="mf-sval mf-gold">'+fmt(payment)+'</div></div>';

  var rows=calcAmortTable(cap,rate,inst,paid);
  el('mf-amort-tbody').innerHTML=rows.map(function(r){
    var cls=r.isPast?'class="past"':r.isCurrent?'class="current"':'';
    return '<tr '+cls+'><td>'+r.n+'</td><td>'+r.date+'</td><td class="r">'+fmt(r.cap)+'</td><td class="r">'+fmt(r.interest)+'</td><td class="r">'+fmt(r.payment)+'</td><td class="r">'+fmt(r.balance)+'</td></tr>';
  }).join('');
  openM('mf-m-amort');
};

window.mfEditLiabPay=function(liabId,span){
  mfInlineEdit(span,async function(val){
    var ex=S.liabBals.find(function(b){return b.liability_id===liabId;});
    if(ex) await S.sb.from('liability_balances').update({monthly_payment:val}).eq('id',ex.id);
    else await S.sb.from('liability_balances').insert({liability_id:liabId,user_id:S.user.id,month:S.month,year:S.year,monthly_payment:val,balance:0});
    await mfLoadData();mfRender();
  });
};
window.mfEditLiabBal=function(liabId,span){
  mfInlineEdit(span,async function(val){
    var ex=S.liabBals.find(function(b){return b.liability_id===liabId;});
    if(ex) await S.sb.from('liability_balances').update({balance:val}).eq('id',ex.id);
    else await S.sb.from('liability_balances').insert({liability_id:liabId,user_id:S.user.id,month:S.month,year:S.year,balance:val,monthly_payment:0});
    await mfLoadData();mfRender();
  });
};
window.mfDelLiab=async function(id){
  if(!confirm('¿Eliminar esta deuda?'))return;
  await S.sb.from('liabilities').delete().eq('id',id);
  await mfLoadData();mfRender();
};

function mfRenderDeudas(){
  var vill=S.liabs.filter(function(l){return l.liability_type==='villano';});
  var otra=S.liabs.filter(function(l){return l.liability_type==='otra';});
  var tV=0,tO=0;

  function debtRow(l){
    var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};
    var cap=Number(l.capital)||0;var rate=Number(l.interest_rate)||0;
    var inst=Number(l.total_installments)||0;var paid=Number(b.installments_paid)||Number(l.installments_paid)||0;
    var payment=inst>0&&cap>0?calcMonthlyPayment(cap,rate,inst):Number(b.monthly_payment)||0;
    var totalPaid=payment*(paid||0);var totalInterest=inst>0&&cap>0?payment*inst-cap:0;
    var remaining=Number(b.balance)||cap;
    return '<tr><td>'+l.name+(l.interest_rate?' <span style="font-size:11px;color:var(--muted)">'+l.interest_rate+'%</span>':'')+'</td>'+
      '<td class="r"><span class="mf-ea" onclick="mfEditLiabBal(\''+l.id+'\',this)">'+fmt(remaining)+'</span></td>'+
      '<td class="r">'+fmt(totalInterest)+'</td>'+
      '<td class="r"><span class="mf-ea" onclick="mfEditLiabPay(\''+l.id+'\',this)">'+fmt(payment)+'</span></td>'+
      '<td class="r">'+fmt(totalPaid)+'</td>'+
      '<td class="r">'+fmt(remaining)+'</td>'+
      '<td class="r"><button class="mf-btn mf-btn-g mf-btn-sm" onclick="mfShowAmort(\''+l.id+'\')">Ver</button></td>'+
      '<td class="r"><button class="mf-btn-icon" onclick="mfDelLiab(\''+l.id+'\')">🗑</button></td></tr>';
  }

  vill.forEach(function(l){var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};tV+=Number(b.balance)||Number(l.capital)||0;});
  otra.forEach(function(l){var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};tO+=Number(b.balance)||Number(l.capital)||0;});

  el('mf-vill-tbody').innerHTML=vill.length?vill.map(debtRow).join('')+'<tr class="mf-trow-total"><td>Total</td><td class="r">'+fmt(tV)+'</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>':'<tr><td colspan="8" style="padding:20px;text-align:center;font-size:13px">Sin deudas de consumo.</td></tr>';
  el('mf-otra-tbody').innerHTML=otra.length?otra.map(debtRow).join('')+'<tr class="mf-trow-total"><td>Total</td><td class="r">'+fmt(tO)+'</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>':'<tr><td colspan="8" style="padding:20px;text-align:center;font-size:13px">Sin otras deudas.</td></tr>';
  el('mf-tv').textContent=fmt(tV);el('mf-to').textContent=fmt(tO);
}

// ── ASSETS ─────────────────────────────────────
window.mfOpenAsset=function(type){
  el('mf-masset-t').textContent=type==='investment'?'Nueva Inversión':'Nueva Pertenencia';
  el('mf-assetname').value='';el('mf-assetinst').value='';el('mf-assettype').value=type;
  el('mf-asset-inst-wrap').style.display=type==='investment'?'block':'none';
  openM('mf-m-asset');
};
window.mfSaveAsset=async function(){
  var name=el('mf-assetname').value.trim(),type=el('mf-assettype').value;
  if(!name){toast('Escribe un nombre','e');return;}
  if(type==='investment') await S.sb.from('assets_investments').insert({user_id:S.user.id,name:name,institution:el('mf-assetinst').value.trim()||null});
  else await S.sb.from('assets_belongings').insert({user_id:S.user.id,name:name});
  window.mfCloseM('mf-m-asset');await mfLoadData();mfRender();toast('Activo agregado','s');
};
window.mfEditAssetVal=function(assetId,assetType,span){
  mfInlineEdit(span,async function(val){
    var ex=S.aVals.find(function(v){return v.asset_id===assetId&&v.asset_type===assetType;});
    if(ex) await S.sb.from('asset_values').update({value:val}).eq('id',ex.id);
    else await S.sb.from('asset_values').insert({asset_id:assetId,asset_type:assetType,user_id:S.user.id,month:S.month,year:S.year,value:val});
    await mfLoadData();mfRender();
  });
};
window.mfDelAsset=async function(id,type){
  if(!confirm('¿Eliminar?'))return;
  if(type==='investment') await S.sb.from('assets_investments').delete().eq('id',id);
  else await S.sb.from('assets_belongings').delete().eq('id',id);
  await mfLoadData();mfRender();
};

function mfRenderActivos(){
  var a=calcActivos();
  el('mf-inv-tbody').innerHTML=S.invs.length?S.invs.map(function(inv){
    var v=S.aVals.find(function(x){return x.asset_id===inv.id&&x.asset_type==='investment';})||{};
    return '<tr><td>'+inv.name+'</td><td style="color:var(--text)">'+(inv.institution||'–')+'</td><td class="r"><span class="mf-ea" onclick="mfEditAssetVal(\''+inv.id+'\',\'investment\',this)">'+fmt(v.value||0)+'</span></td><td class="r"><button class="mf-btn-icon" onclick="mfDelAsset(\''+inv.id+'\',\'investment\')">🗑</button></td></tr>';
  }).join('')+'<tr class="mf-trow-total"><td>Total</td><td></td><td class="r">'+fmt(a.inv)+'</td><td></td></tr>':'<tr><td colspan="4" style="padding:20px;text-align:center;font-size:13px">Sin inversiones.</td></tr>';
  el('mf-pert-tbody').innerHTML=S.bels.length?S.bels.map(function(b){
    var v=S.aVals.find(function(x){return x.asset_id===b.id&&x.asset_type==='belonging';})||{};
    return '<tr><td>'+b.name+'</td><td class="r"><span class="mf-ea" onclick="mfEditAssetVal(\''+b.id+'\',\'belonging\',this)">'+fmt(v.value||0)+'</span></td><td class="r"><button class="mf-btn-icon" onclick="mfDelAsset(\''+b.id+'\',\'belonging\')">🗑</button></td></tr>';
  }).join('')+'<tr class="mf-trow-total"><td>Total</td><td class="r">'+fmt(a.pert)+'</td><td></td></tr>':'<tr><td colspan="3" style="padding:20px;text-align:center;font-size:13px">Sin pertenencias.</td></tr>';
  el('mf-tinv').textContent=fmt(a.inv);el('mf-tpert').textContent=fmt(a.pert);
}

// ── PATRIMONIO ─────────────────────────────────
function mfRenderPatrimonio(){
  var a=calcActivos(),pas=calcPasivos(),b=calcBilletera();
  var pat=a.total-pas;
  el('mf-pat-tot').textContent=fmt(pat);el('mf-pat-tot').className='mf-pat-big '+(pat>=0?'mf-success':'mf-error');
  el('mf-pat-act').textContent=fmt(a.total);el('mf-pat-pas').textContent=fmt(pas);el('mf-pat-bil').textContent=fmt(b.sal);
  el('mf-pat-alist').innerHTML=[
    ...S.invs.map(function(inv){var v=S.aVals.find(function(x){return x.asset_id===inv.id&&x.asset_type==='investment';})||{};return '<div class="mf-pit"><div><div class="mf-piname">'+inv.name+'</div><div class="mf-pitype">Inversión'+(inv.institution?' · '+inv.institution:'')+'</div></div><div class="mf-pival mf-success">'+fmt(v.value||0)+'</div></div>';}),
    ...S.bels.map(function(b){var v=S.aVals.find(function(x){return x.asset_id===b.id&&x.asset_type==='belonging';})||{};return '<div class="mf-pit"><div><div class="mf-piname">'+b.name+'</div><div class="mf-pitype">Pertenencia</div></div><div class="mf-pival mf-success">'+fmt(v.value||0)+'</div></div>';})
  ].join('')||'<p style="font-size:13px;padding:14px">Sin activos.</p>';
  el('mf-pat-plist').innerHTML=S.liabs.map(function(l){var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};return '<div class="mf-pit"><div><div class="mf-piname">'+l.name+'</div><div class="mf-pitype">'+(l.liability_type==='villano'?'Consumo':'Otra deuda')+'</div></div><div class="mf-pival mf-error">'+fmt(b.balance||l.capital||0)+'</div></div>';}).join('')||'<p style="font-size:13px;padding:14px">Sin deudas.</p>';
}

// ── CHARTS ─────────────────────────────────────
var CD={plugins:{legend:{labels:{color:'#EDE8DF',font:{family:'Instrument Sans',size:11}}}},scales:{x:{ticks:{color:'#EDE8DF',font:{size:10}},grid:{color:'#1e1e1e'}},y:{ticks:{color:'#EDE8DF',font:{size:10},callback:function(v){return '$'+(v/1000).toFixed(0)+'k';}},grid:{color:'#1e1e1e'}}}};
function dChart(id){if(S.charts[id]){S.charts[id].destroy();delete S.charts[id];}}

async function mfRenderDashboardCharts(){
  var months=[],d=new Date(S.year,S.month-1,1);
  for(var i=11;i>=0;i--){var dt=new Date(d.getFullYear(),d.getMonth()-i,1);months.push({month:dt.getMonth()+1,year:dt.getFullYear(),label:dt.toLocaleDateString('es-CL',{month:'short',year:'2-digit'})});}
  var filter=months.map(function(m){return 'and(month.eq.'+m.month+',year.eq.'+m.year+')';}).join(',');
  var r=await S.sb.from('billetera_entries').select('*').eq('user_id',S.user.id).or(filter);
  var hist=r.data||[];var ingA=[],egA=[];
  months.forEach(function(m){
    var ents=hist.filter(function(e){return e.month===m.month&&e.year===m.year;});
    ingA.push(ents.filter(function(e){return e.category_type==='income';}).reduce(function(s,e){return s+Number(e.actual);},0));
    egA.push(ents.filter(function(e){return e.category_type!=='income';}).reduce(function(s,e){return s+Number(e.actual);},0));
  });
  dChart('bil');var c1=el('mf-ch-bil');
  if(c1) S.charts['bil']=new Chart(c1,{type:'bar',data:{labels:months.map(function(m){return m.label;}),datasets:[{label:'Ingresos',data:ingA,backgroundColor:'rgba(129,199,132,.55)',borderColor:'#81c784',borderWidth:1},{label:'Egresos',data:egA,backgroundColor:'rgba(239,154,154,.4)',borderColor:'#ef9a9a',borderWidth:1}]},options:Object.assign({},CD,{responsive:true,maintainAspectRatio:false})});
  var cvmT=S.cvmCats.reduce(function(s,c){return s+Number(getE(c.id,'cvm').actual);},0);
  var deuT=S.liabs.reduce(function(s,l){var b=S.liabBals.find(function(x){return x.liability_id===l.id;})||{};return s+Number(b.monthly_payment||0);},0);
  var tesT=S.tesoCats.reduce(function(s,c){return s+Number(getE(c.id,'tesoro').actual);},0);
  dChart('dist');var c2=el('mf-ch-dist');
  if(c2&&(cvmT+deuT+tesT)>0) S.charts['dist']=new Chart(c2,{type:'doughnut',data:{labels:['CVM','Deudas','Tesoro'],datasets:[{data:[cvmT,deuT,tesT],backgroundColor:['rgba(201,168,76,.7)','rgba(239,154,154,.7)','rgba(129,199,132,.7)'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:'#EDE8DF'}}}}});
  var act=calcActivos().total,pas=calcPasivos();
  dChart('pdist');var c3=el('mf-ch-pdist');
  if(c3&&(act+pas)>0) S.charts['pdist']=new Chart(c3,{type:'doughnut',data:{labels:['Activos','Pasivos'],datasets:[{data:[act,pas],backgroundColor:['rgba(129,199,132,.7)','rgba(239,154,154,.6)'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{color:'#EDE8DF'}}}}});
}

// ── CARTOLAS ───────────────────────────────────
window.mfFileDrop=function(e){e.preventDefault();el('mf-upzone').classList.remove('drag');var f=e.dataTransfer.files[0];if(f)mfSetFile(f);};
window.mfFileSelect=function(e){var f=e.target.files[0];if(f)mfSetFile(f);};
function mfSetFile(f){
  S.pendingFile=f;
  el('mf-upzone').innerHTML='<div class="mf-upico">✅</div><div class="mf-uptxt"><strong>'+f.name+'</strong><br>'+(f.size/1024).toFixed(0)+' KB</div>';
  el('mf-upbtn').disabled=false;
  el('mf-pdf-pw-wrap').style.display=f.name.endsWith('.pdf')?'block':'none';
}
window.mfUpload=async function(){
  if(!S.pendingFile)return;
  var bank=el('mf-bsel').value,type=el('mf-stype').value;
  if(!bank){toast('Selecciona el banco','e');return;}
  loader(true);
  // Insert statement record (no storage needed — process locally)
  var sRes=await S.sb.from('bank_statements').insert({
    user_id:S.user.id,filename:S.pendingFile.name,bank:bank,
    statement_type:type,month:S.month,year:S.year,status:'processing'
  }).select().single();
  if(sRes.error){loader(false);toast('Error registrando cartola','e');return;}
  loader(false);
  toast('Procesando con IA...','i');
  await mfParseStatement(S.pendingFile,sRes.data);
  mfRenderCartolas();
};

// ── EXTRACT PDF TEXT — moved to global scope below ──

async function mfParseStatement(file,stmt){
  var text='';
  var isPdf=file.name.toLowerCase().endsWith('.pdf');
  toast('Leyendo archivo...','i');
  try {
    var fname=file.name.toLowerCase();
    if(isPdf){
      var pw=el('mf-pdf-pw')?el('mf-pdf-pw').value.trim():'';
      var extracted=await window.mfExtractPdfText(file,pw);
      if(extracted==='PASSWORD_ERROR'){
        await S.sb.from('bank_statements').update({status:'error'}).eq('id',stmt.id);
        toast('Contraseña incorrecta. Intenta con tu RUT sin puntos y con guión (ej: 12345678-9)','e');
        return;
      }
      if(!extracted||extracted.length<20){
        text='Cartola PDF escaneada. Banco: '+stmt.bank+'. Tipo: '+stmt.statement_type+'. Mes: '+MES[stmt.month-1]+' '+stmt.year+'.';
        toast('PDF sin texto extraíble. Procesando con datos del banco...','i');
      } else {
        text=extracted;
        toast('PDF leído. Clasificando con IA...','i');
      }
    } else if(fname.endsWith('.xlsx')||fname.endsWith('.xls')){
      // Use SheetJS to read Excel
      if(typeof XLSX==='undefined'){
        await S.sb.from('bank_statements').update({status:'error'}).eq('id',stmt.id);
        toast('SheetJS aún cargando, espera unos segundos e intenta de nuevo','e');
        return;
      }
      var arrayBuffer=await file.arrayBuffer();
      var workbook=XLSX.read(arrayBuffer,{type:'array'});
      var allText='';
      workbook.SheetNames.forEach(function(sheetName){
        var sheet=workbook.Sheets[sheetName];
        var csv=XLSX.utils.sheet_to_csv(sheet,{blankrows:false});
        if(csv.trim().length>10) allText+='[Hoja: '+sheetName+']\n'+csv+'\n\n';
      });
      text=allText.substring(0,4000);
      if(!text.trim()){
        await S.sb.from('bank_statements').update({status:'error'}).eq('id',stmt.id);
        toast('Excel vacío o no legible','e');return;
      }
      toast('Excel leído. Clasificando con IA...','i');
    } else if(fname.endsWith('.csv')){
      text=await file.text();
      toast('CSV leído. Clasificando con IA...','i');
    } else {
      text=await file.text().catch(function(){return '';});
      toast('Archivo leído. Clasificando con IA...','i');
    }
  } catch(e){ text='Archivo: '+file.name+'. Banco: '+stmt.bank; }

  var cats=[
    ...S.incomeCats.map(function(c){return c.name;}),
    ...S.cvmCats.map(function(c){return c.name;}),
    ...S.tesoCats.map(function(c){return c.name.replace('[T] ','');}),
    'Deuda de consumo','Otra deuda'
  ];

  var currentYear=new Date().getFullYear();
  var isPdfFile=file.name.toLowerCase().endsWith('.pdf');
  var prompt;
  if(isPdfFile){
    prompt='Analiza esta cartola bancaria chilena del '+stmt.bank+' y extrae los movimientos.\n\nFORMATO PDF - texto plano sin columnas:\n- Fechas en DD/MM (usa año '+currentYear+')\n- Montos con PUNTO como miles: 750.000 = 750000 CLP\n- Ignora SALDO INICIAL y SALDO FINAL\n- TRASPASO DE / DEPOSITO / ABONO = income\n- TRASPASO A / PAGO / CARGO / CHEQUE = expense\n\nCATEGORÍAS: '+cats.join(', ')+'\n\nTEXTO:\n'+text.substring(0,4000)+'\n\nDevuelve SOLO JSON array sin markdown:\n[{"date":"'+currentYear+'-05-05","description":"desc","amount":750000,"type":"expense","category":"cat","confidence":"high"}]';
  } else {
    prompt='Analiza esta cartola bancaria chilena del '+stmt.bank+' en formato Excel/CSV y extrae TODOS los movimientos.\n\nEL EXCEL TIENE ESTAS COLUMNAS: Fecha, Descripción, Canal o Sucursal, Cargos (CLP), Abonos (CLP).\n- Si hay valor en CARGOS → type: "expense"\n- Si hay valor en ABONOS → type: "income"\n- Las fechas pueden venir en formato DD/MM/YYYY o YYYY-MM-DD\n- Los montos usan COMA como decimal y PUNTO como miles (ej: 15,000.00 = 15000 CLP)\n- Ignora filas de totales, encabezados, filas vacías\n- Extrae CADA fila que tenga un monto en Cargos O Abonos\n\nCATEGORÍAS DISPONIBLES: '+cats.join(', ')+'\n\nCONTENIDO DEL EXCEL (en CSV):\n'+text.substring(0,4000)+'\n\nDevuelve SOLO un JSON array válido sin texto adicional ni markdown. Ejemplo de formato:\n[{"date":"2026-06-02","description":"Traspaso A:Barbara Leighton Pino","amount":15000,"type":"expense","category":"Transferencias","confidence":"high"},{"date":"2026-05-28","description":"Traspaso De:Cesar Antonio Quiero Vidal","amount":233000,"type":"income","category":"Ingresos por transferencia","confidence":"high"}]\n\nSi no encuentras filas con montos devuelve [].';
  }

  try {
    var res=await fetch('https://dphznaifdioinwledtyl.supabase.co/functions/v1/clasificar-cartola',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer sb_publishable_8DGcou5kIdiJPLDgk2Bjzg_FKaBXOrP'},
      body:JSON.stringify({prompt:prompt})
    });
    if(!res.ok){
      var errData=await res.json().catch(function(){return{};});
      throw new Error('Error '+(errData.error||res.status));
    }
    var data=await res.json();
    console.log('Edge Function response:', JSON.stringify(data).substring(0,500));
    var txt='';
    // Handle both direct text response and Anthropic API response format
    if(typeof data==='string') {
      txt=data;
    } else if(data.content&&Array.isArray(data.content)) {
      txt=data.content.map(function(c){return c.text||'';}).join('');
    } else if(data.text) {
      txt=data.text;
    } else if(data.choices&&data.choices[0]) {
      txt=data.choices[0].message&&data.choices[0].message.content||'';
    } else {
      txt=JSON.stringify(data);
    }
    txt=txt.replace(/```json\n?|```\n?/g,'').trim();var arrStart=txt.indexOf('[');var arrEnd=txt.lastIndexOf(']');if(arrStart>-1&&arrEnd>-1)txt=txt.substring(arrStart,arrEnd+1);
    console.log('Texto extraído para parsear:', txt.substring(0,300));
    var txs=[];
    try {
      txs=JSON.parse(txt);
    } catch(e1) {
      try {
        var match=txt.match(/\[[\s\S]*?\]/);
        if(match) txs=JSON.parse(match[0]);
      } catch(e2) {
        console.error('JSON parse failed. Raw txt:', txt.substring(0,300));
        txs=[];
      }
    }
    console.log('Transacciones detectadas:',txs.length, txs);
    if(txs.length>0){
      await S.sb.from('bank_statements').update({status:'classified'}).eq('id',stmt.id);
      toast(txs.length+' transacciones detectadas. Abriendo clasificador...','s');
      setTimeout(function(){ mfShowClassify(txs,stmt.id); }, 500);
    } else {
      await S.sb.from('bank_statements').update({status:'classified'}).eq('id',stmt.id);
      toast('La IA no detectó transacciones en este archivo. Verifica el formato.','i');
    }
  } catch(e){
    console.error('Parse error:',e);
    await S.sb.from('bank_statements').update({status:'error'}).eq('id',stmt.id);
    toast('Error al clasificar: '+e.message,'e');
  }
}

function mfShowClassify(txs,stmtId){
  var allCats=[...S.incomeCats.map(function(c){return{id:c.id,name:c.name,type:'income'};}), ...S.cvmCats.map(function(c){return{id:c.id,name:c.name,type:'cvm'};}), ...S.tesoCats.map(function(c){return{id:c.id,name:c.name.replace('[T] ',''),type:'tesoro'};})];
  var listEl=el('mf-classify-list');
  listEl.innerHTML=txs.map(function(t,i){
    var matched=allCats.find(function(c){return c.name.toLowerCase().includes((t.category||'').toLowerCase());});
    var opts=allCats.map(function(c){return '<option value="'+c.id+'|'+c.type+'"'+(matched&&matched.id===c.id?' selected':'')+'>'+c.name+'</option>';}).join('');
    return '<div class="mf-citem"><div class="mf-cdesc">'+t.description+'</div><div class="mf-cmeta"><span class="mf-camt '+(t.type==='income'?'mf-success':'mf-error')+'">'+(t.type==='income'?'+':'-')+fmt(t.amount)+'</span><span style="font-size:11px;color:var(--text)">'+t.date+'</span>'+(t.confidence==='low'?'<span class="mf-ai">✦ Revisar</span>':'<span class="mf-ai">✦ IA</span>')+'<select style="background:var(--bg-card2);border:1px solid var(--border);border-radius:6px;color:var(--text);padding:4px 8px;font-size:12px;outline:none" data-idx="'+i+'"><option value="">Sin categoría</option>'+opts+'</select></div></div>';
  }).join('');
  listEl.dataset.stmtId=stmtId;listEl.dataset.txs=JSON.stringify(txs);
  openM('mf-m-classify');
}
window.mfConfirmClassify=async function(){
  var listEl=el('mf-classify-list');
  var txs=JSON.parse(listEl.dataset.txs||'[]'),stmtId=listEl.dataset.stmtId;
  var toIns=[];
  txs.forEach(function(t,i){
    var sel=listEl.querySelector('select[data-idx="'+i+'"]');if(!sel||!sel.value)return;
    var parts=sel.value.split('|');
    toIns.push({user_id:S.user.id,statement_id:stmtId,date:t.date,description:t.description,amount:t.amount,transaction_type:t.type,category_id:parts[0],category_type:parts[1],ai_classified:true,confirmed:true,month:S.month,year:S.year});
  });
  if(toIns.length){
    await S.sb.from('transactions').insert(toIns);
    for(var i=0;i<toIns.length;i++){
      var tx=toIns[i];
      if(tx.category_id&&tx.category_type){
        var ex=S.entries.find(function(e){return e.category_id===tx.category_id;});
        await upsertEntry(tx.category_id,tx.category_type,'actual',(ex?Number(ex.actual):0)+tx.amount);
      }
    }
  }
  window.mfCloseM('mf-m-classify');await mfLoadData();mfRender();
  toast(toIns.length+' transacciones importadas','s');
};

function mfRenderCartolas(){
  if(!S.sb)return;
  S.sb.from('bank_statements').select('*').eq('user_id',S.user.id).order('created_at',{ascending:false}).limit(20).then(function(r){
    var stmts=r.data||[];var sl=el('mf-stmts-list');
    if(!stmts.length){sl.innerHTML='<p style="font-size:13px">Sin cartolas subidas.</p>';return;}
    var icons={bank:'🏦',credit_card:'💳',investment:'📈'};
    var sLbl={pending:'Pendiente',processing:'Procesando',classified:'Clasificada',error:'Error'};
    var sClr={pending:'var(--text)',processing:'var(--warning)',classified:'var(--success)',error:'var(--error)'};
    sl.innerHTML=stmts.map(function(s){return '<div class="mf-stmt"><div class="mf-stmt-ico">'+(icons[s.statement_type]||'📄')+'</div><div style="flex:1"><div style="font-size:13px">'+s.filename+'</div><div style="font-size:10px;color:var(--text)">'+s.bank+' · '+(MES[(s.month||1)-1]||'')+' '+s.year+'</div></div><span style="font-size:10px;color:'+sClr[s.status]+';letter-spacing:1px;text-transform:uppercase">'+(sLbl[s.status]||s.status)+'</span></div>';}).join('');
  });
}

// ── FAQ ────────────────────────────────────────
window.mfToggleFaq=function(el_q){
  var ans=el_q.parentElement.querySelector('.mf-faq-a');
  var ico=el_q.querySelector('span:last-child');
  if(ans){ans.classList.toggle('on');ico.textContent=ans.classList.contains('on')?'－':'＋';}
};

// ── CONFIG ─────────────────────────────────────
function mfRenderConfig(){
  el('mf-cfg-inc').innerHTML=S.incomeCats.length?S.incomeCats.map(function(c){return '<div class="mf-flex mf-aic mf-jb" style="padding:9px 0;border-bottom:1px solid var(--border)"><span style="font-size:13px">'+c.name+'</span><button class="mf-btn-icon" onclick="mfDelCat(\''+c.id+'\',\'income\')">🗑</button></div>';}).join(''):'<p style="font-size:13px">Sin categorías.</p>';
  el('mf-cfg-cvm').innerHTML=[...S.cvmCats,...S.tesoCats].length?[...S.cvmCats,...S.tesoCats].map(function(c){return '<div class="mf-flex mf-aic mf-jb" style="padding:9px 0;border-bottom:1px solid var(--border)"><span style="font-size:13px">'+c.name.replace('[T] ','')+(c.name.startsWith('[T]')?' <span class="mf-chip mf-ci">Tesoro</span>':'')+'</span><button class="mf-btn-icon" onclick="mfDelCat(\''+c.id+'\',\''+(c.name.startsWith('[T]')?'tesoro':'cvm')+'\')">🗑</button></div>';}).join(''):'<p style="font-size:13px">Sin categorías.</p>';
}

// ── ADMIN ──────────────────────────────────────
async function mfRenderAdmin(){
  if(!S.user||S.user.email!==ADMIN_EMAIL){el('mf-p-admin').innerHTML='<div class="mf-card"><p style="color:var(--error)">Acceso no autorizado.</p></div>';return;}
  var r=await S.sb.from('user_profiles').select('*').order('created_at',{ascending:false});
  var users=r.data||[];
  el('mf-adm-users').textContent=users.length;
  el('mf-adm-stmts').textContent='–';
  el('mf-admin-users-list').innerHTML=users.length?users.map(function(u){return '<div class="mf-admin-row"><div><div style="font-size:13px">'+(u.full_name||'Sin nombre')+'</div><div style="font-size:11px;color:var(--muted)">'+u.id+'</div></div><div style="font-size:11px;color:var(--text)">'+new Date(u.created_at).toLocaleDateString('es-CL')+'</div></div>';}).join(''):'<p style="font-size:13px">Sin usuarios.</p>';
}

// ── PERFIL ─────────────────────────────────────
function mfRenderPerfil(){
  el('mf-pname').value=(S.profile&&S.profile.full_name)||'';
  el('mf-pemail').value=S.user.email;
  el('mf-pphone').value=(S.profile&&S.profile.phone)||'';
  if(S.profile&&S.profile.avatar_url) el('mf-pava-wrap').innerHTML='<img src="'+S.profile.avatar_url+'" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';
}
window.mfSaveProfile=async function(){
  var name=el('mf-pname').value.trim(),phone=el('mf-pphone').value.trim();
  await S.sb.from('user_profiles').upsert({id:S.user.id,full_name:name,phone:phone,updated_at:new Date().toISOString()});
  S.profile=Object.assign({},S.profile,{full_name:name,phone:phone});
  mfUpdateSidebar();toast('Perfil guardado','s');
};
window.mfUploadAvatar=async function(e){
  var f=e.target.files[0];if(!f)return;loader(true);
  var path='avatars/'+S.user.id+'/'+Date.now();
  var r=await S.sb.storage.from('avatars').upload(path,f,{upsert:true});
  if(r.error){loader(false);toast('Error subiendo foto','e');return;}
  var url=S.sb.storage.from('avatars').getPublicUrl(path).data.publicUrl;
  await S.sb.from('user_profiles').upsert({id:S.user.id,avatar_url:url,updated_at:new Date().toISOString()});
  S.profile=Object.assign({},S.profile,{avatar_url:url});
  mfUpdateSidebar();el('mf-pava-wrap').innerHTML='<img src="'+url+'" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';
  loader(false);toast('Foto actualizada','s');
};

// ── MOBILE ─────────────────────────────────────
window.mfToggleSidebar=function(){el('mf-sidebar').classList.toggle('on');el('mf-sov').classList.toggle('on');};
window.mfCloseSidebar=function(){el('mf-sidebar').classList.remove('on');el('mf-sov').classList.remove('on');};

})();

// ── GLOBAL: PDF text extraction (needs global scope for PDF.js access) ──
window.mfExtractPdfText = async function(file, password){
  // Wait up to 5 seconds for PDF.js to load
  for(var i=0;i<10;i++){
    if(typeof pdfjsLib!=='undefined') break;
    await new Promise(function(r){setTimeout(r,500);});
  }
  if(typeof pdfjsLib==='undefined'){
    console.error('PDF.js not loaded after waiting');
    return null;
  }
  try {
    var arrayBuffer=await file.arrayBuffer();
    var loadingTask=pdfjsLib.getDocument({data:new Uint8Array(arrayBuffer), password:password||''});
    var pdf=await loadingTask.promise;
    var fullText='';
    for(var i=1;i<=Math.min(pdf.numPages,15);i++){
      var page=await pdf.getPage(i);
      var tc=await page.getTextContent();
      var pageText=tc.items.map(function(s){return s.str;}).join(' ');
      fullText+=pageText+'\n';
    }
    console.log('PDF text extracted, length:', fullText.length, 'preview:', fullText.substring(0,300));
    return fullText.trim();
  } catch(e){
    console.error('PDF extraction error:', e.name, e.message);
    if(e&&e.name==='PasswordException'){
      return 'PASSWORD_ERROR';
    }
    return null;
  }
};
</script>
<!-- SCHEMA UPDATE NOTE: Add these columns to liabilities table:
ALTER TABLE liabilities ADD COLUMN IF NOT EXISTS capital NUMERIC(14,0);
ALTER TABLE liabilities ADD COLUMN IF NOT EXISTS installments_paid INT DEFAULT 0;
-->
