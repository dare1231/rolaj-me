<!DOCTYPE html>
<html lang="sr" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="theme-color" content="#0a0a0f">
<title>ROLaj ME — Crnogorski Fudbal</title>
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
:root{
  --primary:#e11d48;--primary-dark:#9f1239;--primary-glow:rgba(225,29,72,.35);
  --gold:#fbbf24;--gold-dark:#b45309;--gold-glow:rgba(251,191,36,.25);
  --mint:#34d399;--blue:#60a5fa;
  --bg:#050507;--surface:#0f1117;--surface-elevated:#181a21;--surface-glass:rgba(15,17,23,.72);
  --text-primary:#f1f5f9;--text-secondary:#94a3b8;--text-tertiary:#64748b;
  --border:rgba(255,255,255,.06);--border-light:rgba(255,255,255,.1);
  --success:#22c55e;--error:#ef4444;--live:#ff1744;
  --shadow:0 1px 3px rgba(0,0,0,.4);--shadow-lg:0 8px 32px rgba(0,0,0,.5);
  --radius:20px;--radius-lg:28px;--font:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',sans-serif;
}
[data-theme="light"]{
  --bg:#f8fafc;--surface:#fff;--surface-elevated:#f1f5f9;--surface-glass:rgba(255,255,255,.78);
  --text-primary:#0f172a;--text-secondary:#475569;--text-tertiary:#94a3b8;
  --border:rgba(0,0,0,.06);--border-light:rgba(0,0,0,.1);
  --shadow:0 1px 3px rgba(0,0,0,.08);--shadow-lg:0 8px 32px rgba(0,0,0,.12);
}
html{scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--text-primary);overflow:hidden;height:100dvh;width:100vw;-webkit-font-smoothing:antialiased}
#app{height:100dvh;width:100vw;max-width:480px;margin:0 auto;display:flex;flex-direction:column;position:relative;background:var(--bg);overflow:hidden}
.splash{position:fixed;inset:0;background:radial-gradient(ellipse at 30% 20%,#1a0a1a 0%,#050507 60%,#000 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10000;transition:opacity .7s,visibility .7s}
.splash.hidden{opacity:0;visibility:hidden;pointer-events:none}
.splash-ball{width:80px;height:80px;position:relative;margin-bottom:24px;animation:ballBounce 1.2s ease-in-out infinite}
.splash-ball svg{width:100%;height:100%;filter:drop-shadow(0 0 20px var(--primary-glow));animation:ballSpin 2s linear infinite}
.splash-logo{font-size:42px;font-weight:900;letter-spacing:-1.5px;background:linear-gradient(135deg,#fff 30%,var(--gold) 70%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.splash-sub{font-size:11px;color:var(--text-secondary);letter-spacing:4px;margin-top:8px;font-weight:700;text-transform:uppercase}
.splash-progress{width:140px;height:3px;background:var(--border-light);border-radius:3px;margin-top:32px;overflow:hidden}
.splash-progress-bar{height:100%;background:linear-gradient(90deg,var(--primary),var(--gold));border-radius:3px;animation:progressLoad 2s ease-out forwards}
@keyframes ballBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
@keyframes ballSpin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes progressLoad{from{width:0}to{width:100%}}
.header{position:sticky;top:0;z-index:100;background:linear-gradient(180deg,var(--surface-glass) 0%,rgba(15,17,23,0) 100%);backdrop-filter:blur(20px) saturate(180%);padding:12px 20px 10px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)}
.notif-panel{display:none;position:absolute;top:54px;right:16px;width:280px;max-width:calc(100vw - 32px);background:var(--surface-elevated);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);z-index:200;overflow:hidden}
.notif-panel.open{display:block}
.notif-panel-header{padding:12px 14px;font-size:12px;font-weight:800;border-bottom:1px solid var(--border);color:var(--text-secondary)}
.notif-item{display:flex;gap:10px;padding:12px 14px;border-bottom:1px solid var(--border);cursor:pointer;transition:.15s}
.notif-item:last-child{border-bottom:none}
.notif-item:hover{background:var(--surface)}
.notif-item-emoji{font-size:18px;flex-shrink:0}
.notif-item-title{font-size:12px;font-weight:600;line-height:1.35;color:var(--text-primary)}
.notif-item-time{font-size:10px;color:var(--text-tertiary);margin-top:2px}
.notif-empty{padding:20px 14px;text-align:center;font-size:12px;color:var(--text-tertiary)}
.reactions-row{display:flex;gap:8px;margin-top:12px}
.reaction-btn{display:flex;align-items:center;gap:5px;padding:7px 12px;border-radius:20px;background:var(--surface);border:1px solid var(--border);font-size:13px;cursor:pointer;transition:.15s}
.reaction-btn.active{border-color:var(--primary);background:rgba(59,130,246,0.1)}
.reaction-btn .rcount{font-size:11px;font-weight:700;color:var(--text-secondary)}
.match-chat-list{display:flex;flex-direction:column;gap:8px;padding:12px 16px;max-height:340px;overflow-y:auto}
.chat-msg{background:var(--surface-elevated);border:1px solid var(--border);border-radius:14px;padding:8px 12px;font-size:13px;line-height:1.4}
.chat-msg-name{font-weight:800;color:var(--primary);margin-right:6px}
.chat-msg-time{font-size:10px;color:var(--text-tertiary);margin-left:6px}
.match-chat-input-row{display:flex;gap:8px;padding:10px 16px 4px;position:sticky;bottom:0;background:var(--bg)}
.match-chat-input-row input{flex:1;padding:10px 14px;border-radius:20px;border:1px solid var(--border);background:var(--surface);color:var(--text-primary);font-size:13px;font-family:var(--font)}
.match-chat-input-row button{padding:10px 16px;border-radius:20px;border:none;background:var(--primary);color:#fff;font-weight:700;font-size:13px;cursor:pointer}
.logo-text{font-size:24px;font-weight:900;letter-spacing:-1px;background:linear-gradient(135deg,var(--primary) 10%,var(--gold) 90%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.logo-sub{font-size:9px;color:var(--text-secondary);letter-spacing:3px;font-weight:700;margin-top:-2px;opacity:.8}
.header-icons{display:flex;gap:18px;align-items:center}
.header-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;font-size:20px;transition:.2s;background:var(--surface-elevated);border:1px solid var(--border)}
.header-icon:active{transform:scale(.9)}
.badge{position:absolute;top:-2px;right:-2px;background:var(--live);color:#fff;font-size:9px;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;border:2px solid var(--bg);animation:pulseBadge 2s infinite}
.league-wrap{position:relative;padding:0 16px;background:var(--bg);border-bottom:1px solid var(--border)}
.league-bar{display:flex;gap:8px;padding:12px 0;overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity;scrollbar-width:none;-ms-overflow-style:none;position:relative}
.league-bar::-webkit-scrollbar{display:none}
.league-fade{position:absolute;right:0;top:0;bottom:0;width:40px;background:linear-gradient(90deg,transparent,var(--bg));pointer-events:none;z-index:2}
.chip{padding:8px 18px;border-radius:24px;font-size:12px;font-weight:700;white-space:nowrap;cursor:pointer;transition:all .25s;border:1.5px solid var(--border);background:var(--surface);color:var(--text-secondary);position:relative;overflow:hidden}
.chip.active{background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;border-color:transparent;box-shadow:0 4px 16px var(--primary-glow);transform:scale(1.02)}
.chip:active{transform:scale(.95)}
.live-ticker{background:linear-gradient(90deg,rgba(225,29,72,.15),rgba(225,29,72,.05));border-bottom:1px solid var(--border);padding:12px 16px;display:flex;align-items:center;gap:16px;overflow-x:auto;font-size:13px;font-weight:700;scrollbar-width:none;position:relative}
.live-pill{background:var(--live);color:#fff;padding:4px 10px;border-radius:6px;font-size:10px;font-weight:900;animation:pulseBadge 1.5s infinite;letter-spacing:1px;flex-shrink:0;box-shadow:0 0 12px rgba(255,23,68,.4)}
.live-match{white-space:nowrap;cursor:pointer;transition:.2s;color:var(--text-primary);display:flex;align-items:center;gap:8px}
.live-score{color:var(--gold);font-weight:900;font-variant-numeric:tabular-nums}
.hero-wrap{padding:16px 16px 8px}
.hero-news{position:relative;border-radius:var(--radius-lg);overflow:hidden;height:280px;box-shadow:var(--shadow-lg);cursor:pointer;transition:transform .3s,box-shadow .3s;border:1px solid var(--border);background:var(--surface)}
.sponsor-banner{display:block;margin:4px 16px 4px;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lg);border:1px solid var(--border)}
.sponsor-banner img{display:block;width:100%;height:auto}
.hero-news:active{transform:scale(.98)}
.hero-news-img{position:absolute;inset:0;background:linear-gradient(135deg,#1a0a2e 0%,#0f0f23 50%,#050507 100%)}
.hero-news-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.95) 0%,rgba(0,0,0,.5) 40%,rgba(0,0,0,.1) 100%)}
.hero-news-content{position:absolute;bottom:0;left:0;right:0;padding:24px 20px 20px;z-index:2;color:#fff}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);color:var(--gold);padding:5px 12px;border-radius:20px;font-size:10px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;margin-bottom:12px;backdrop-filter:blur(8px)}
.hero-title{font-size:18px;font-weight:800;line-height:1.35;margin-bottom:12px;text-shadow:0 2px 12px rgba(0,0,0,.5);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;letter-spacing:-.3px}
.hero-meta{display:flex;align-items:center;justify-content:space-between;font-size:12px;opacity:.7;font-weight:600}
.hero-read{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.12);padding:6px 14px;border-radius:20px;font-size:11px;font-weight:700;border:1px solid rgba(255,255,255,.15);backdrop-filter:blur(8px)}
.section-header{display:flex;justify-content:space-between;align-items:center;padding:20px 16px 12px}
.section-title{font-size:17px;font-weight:800;letter-spacing:-.3px;display:flex;align-items:center;gap:8px}
.section-link{font-size:12px;color:var(--primary);font-weight:700;cursor:pointer;transition:.2s;padding:6px 12px;border-radius:12px;background:rgba(225,29,72,.08)}
.stories{display:flex;gap:14px;padding:0 16px 16px;overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity;scrollbar-width:none}
.story{flex-shrink:0;text-align:center;cursor:pointer;transition:transform .2s}
.story-ring{width:76px;height:76px;border-radius:50%;padding:3px;background:linear-gradient(135deg,var(--primary),var(--gold));position:relative}
.story-img{width:70px;height:70px;border-radius:50%;background:var(--surface);display:flex;align-items:center;justify-content:center;font-size:28px;border:3px solid var(--bg);position:relative;z-index:1}
.story-label{font-size:10px;color:var(--text-secondary);font-weight:600;max-width:76px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:6px}
.news-card{display:flex;gap:14px;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:.2s}
.news-card:hover{background:var(--surface-elevated)}
.news-card:last-child{border-bottom:none}
.news-thumb{width:90px;height:70px;background:linear-gradient(135deg,rgba(225,29,72,.15),rgba(251,191,36,.1));border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:32px;flex-shrink:0;transition:transform .3s;border:1px solid var(--border);overflow:hidden}
.news-content{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center}
.news-tag{display:inline-block;padding:3px 10px;border-radius:6px;font-size:9px;font-weight:900;background:rgba(225,29,72,.12);color:var(--primary);margin-bottom:6px;letter-spacing:.3px;width:fit-content}
.news-tag.gold{background:rgba(251,191,36,.12);color:var(--gold)}
.news-tag.mint{background:rgba(52,211,153,.1);color:var(--mint)}
.news-tag.blue{background:rgba(96,165,250,.1);color:var(--blue)}
.news-title{font-size:14px;font-weight:700;line-height:1.4;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;letter-spacing:-.2px;color:var(--text-primary)}
.news-meta{font-size:11px;color:var(--text-tertiary);font-weight:500;display:flex;align-items:center;gap:6px}
.news-dot{width:4px;height:4px;border-radius:50%;background:var(--primary);display:inline-block}
.featured-news{margin:0 16px 16px;border-radius:var(--radius-lg);overflow:hidden;position:relative;height:220px;background:linear-gradient(135deg,rgba(225,29,72,.2),rgba(251,191,36,.15));cursor:pointer;transition:.25s;box-shadow:var(--shadow);border:1px solid var(--border)}
.featured-news:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px)}
.featured-overlay{position:absolute;bottom:0;left:0;right:0;padding:24px 20px 20px;background:linear-gradient(transparent,rgba(0,0,0,.85));color:#fff}
.featured-tag{display:inline-block;padding:5px 14px;border-radius:6px;font-size:10px;font-weight:900;background:var(--primary);margin-bottom:10px;letter-spacing:.5px;box-shadow:0 4px 12px rgba(225,29,72,.3)}
.featured-title{font-size:17px;font-weight:800;line-height:1.35;text-shadow:0 2px 8px rgba(0,0,0,.4);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.mini-table{margin:0 16px 16px;background:var(--surface);border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow)}
.table-row{display:grid;grid-template-columns:36px 1fr 32px 32px 32px 32px 40px 36px;padding:11px 14px;align-items:center;font-size:12px;border-bottom:1px solid var(--border)}
.table-row:last-child{border-bottom:none}
.table-header{font-weight:800;color:var(--text-tertiary);font-size:10px;text-transform:uppercase;background:var(--surface-elevated);padding:10px 14px}
.pos-medal{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900}
.pos-1{background:linear-gradient(135deg,#ffd700,#ffaa00);color:#5c3d00}
.pos-2{background:linear-gradient(135deg,#e8e8e8,#bdbdbd);color:#424242}
.pos-3{background:linear-gradient(135deg,#cd7f32,#b87333);color:#fff}
.team-name-cell{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-primary)}
.table-row .gr{font-weight:700;font-variant-numeric:tabular-nums}
.table-row .pts{font-weight:900;font-size:13px;color:var(--text-primary)}
.stats-row{display:flex;gap:10px;padding:0 16px 18px}
.stat-card{flex:1;background:var(--surface);border-radius:var(--radius);padding:18px 10px;text-align:center;border:1px solid var(--border);box-shadow:var(--shadow)}
.stat-num{font-size:26px;font-weight:900;background:linear-gradient(135deg,var(--primary),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-label{font-size:9px;color:var(--text-tertiary);margin-top:8px;font-weight:800;text-transform:uppercase}
.loading-skeleton{background:linear-gradient(90deg,var(--surface-elevated) 25%,var(--border-light) 50%,var(--surface-elevated) 75%);background-size:200% 100%;animation:skeletonPulse 1.4s ease-in-out infinite;border-radius:var(--radius)}
@keyframes skeletonPulse{0%{background-position:200% 0}100%{background-position:-200% 0}}
.loading-hero{height:280px;border-radius:var(--radius-lg);margin:0}
.loading-newscard{height:70px;border-radius:14px;margin-bottom:8px}
.loading-msg{text-align:center;padding:16px;color:var(--text-tertiary);font-size:12px;font-weight:600}
.standings-table{margin:0 16px 16px;background:var(--surface);border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow)}
.st-row{display:grid;grid-template-columns:30px 26px 1fr 26px 22px 22px 22px 26px 26px 28px 28px 52px;padding:10px 8px;align-items:center;font-size:11px;border-bottom:1px solid var(--border)}
.st-row:last-child{border-bottom:none}
.st-header{font-weight:800;color:var(--text-tertiary);font-size:9px;text-transform:uppercase;background:var(--surface-elevated);padding:8px 8px;position:sticky;top:0;z-index:5}
.st-row.champions{background:rgba(34,197,94,.05)}
.st-row.conference{background:rgba(96,165,250,.05)}
.st-row.relegation{background:rgba(239,68,68,.05)}
.st-logo{width:22px;height:22px;background:linear-gradient(135deg,rgba(225,29,72,.15),rgba(251,191,36,.1));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;color:var(--primary)}
.st-team{display:flex;align-items:center;gap:6px}
.st-team-name{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px}
.form-dot{width:12px;height:12px;border-radius:50%;display:inline-block;margin-right:2px}
.form-w{background:var(--success)}
.form-d{background:var(--text-tertiary);opacity:.35}
.form-l{background:var(--error)}
.st-gr{font-weight:800;font-variant-numeric:tabular-nums;font-size:11px}
.st-gr.pos{color:var(--success)}
.st-gr.neg{color:var(--error)}
.st-pts{font-weight:900;font-size:12px;color:var(--text-primary)}
.standings-legend{margin:0 16px 24px;display:flex;flex-wrap:wrap;gap:8px}
.legend-item{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-secondary);font-weight:600;background:var(--surface);padding:6px 12px;border-radius:20px;border:1px solid var(--border)}
.legend-dot{width:10px;height:10px;border-radius:50%}
.legend-dot.gold{background:linear-gradient(135deg,#ffd700,#ffaa00)}
.legend-dot.silver{background:linear-gradient(135deg,#60a5fa,#3b82f6)}
.legend-dot.red{background:var(--error)}
.search-wrap{padding:8px 16px 4px}
.search-bar{display:flex;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:10px 14px}
.search-bar input{flex:1;background:transparent;border:none;outline:none;color:var(--text-primary);font-size:14px;font-family:var(--font);font-weight:500}
.search-bar input::placeholder{color:var(--text-tertiary)}
.search-icon{font-size:18px;opacity:.5}
.profile-header{padding:32px 16px 24px;text-align:center;position:relative}
.profile-avatar{width:90px;height:90px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;color:#fff;position:relative;background:linear-gradient(135deg,var(--primary),var(--gold));box-shadow:0 8px 32px var(--primary-glow)}
.profile-name{font-size:22px;font-weight:800;letter-spacing:-.3px}
.profile-sub{font-size:13px;color:var(--text-secondary);margin-top:4px;font-weight:500}
.profile-stats{display:flex;justify-content:center;gap:32px;margin-top:20px}
.profile-stat{text-align:center}
.profile-stat-num{font-size:20px;font-weight:900;color:var(--primary)}
.profile-stat-label{font-size:10px;color:var(--text-tertiary);margin-top:2px;font-weight:700;text-transform:uppercase}
.settings-group{margin:0 16px 12px;background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;box-shadow:var(--shadow)}
.setting-row{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:.2s}
.setting-row:hover{background:var(--surface-elevated)}
.setting-row:last-child{border-bottom:none}
.setting-left{display:flex;align-items:center;gap:14px}
.setting-icon{width:36px;height:36px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;background:var(--surface-elevated);border:1px solid var(--border)}
.setting-title{font-size:14px;font-weight:600;color:var(--text-primary)}
.setting-value{font-size:13px;color:var(--text-secondary);font-weight:700;display:flex;align-items:center;gap:4px}
.setting-arrow{font-size:12px;color:var(--text-tertiary);opacity:.6}
.toggle{width:50px;height:28px;background:var(--border-light);border-radius:14px;position:relative;cursor:pointer;transition:.25s;flex-shrink:0}
.toggle.on{background:linear-gradient(135deg,var(--primary),var(--primary-dark));box-shadow:0 0 12px var(--primary-glow)}
.toggle-knob{width:24px;height:24px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transition:.25s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 8px rgba(0,0,0,.3)}
.toggle.on .toggle-knob{left:24px}
.tab-row{display:flex;gap:8px;padding:12px 16px;background:var(--bg);position:sticky;top:0;z-index:99;border-bottom:1px solid var(--border)}
.tab-btn{flex:1;padding:10px;border-radius:16px;font-size:13px;font-weight:700;text-align:center;cursor:pointer;border:1.5px solid var(--border);background:var(--surface);color:var(--text-secondary);font-family:var(--font)}
.tab-btn.active{background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;border-color:transparent;box-shadow:0 4px 16px var(--primary-glow)}
.date-header{padding:10px 16px;font-size:11px;font-weight:800;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:1px;position:sticky;top:50px;background:var(--bg);z-index:98;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px}
.date-header::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--primary)}
.match-card{margin:0 16px 12px;background:var(--surface);border-radius:var(--radius);padding:16px;border:1px solid var(--border);box-shadow:var(--shadow);cursor:pointer;position:relative;overflow:hidden}
.match-header{display:flex;justify-content:space-between;align-items:center;font-size:10px;color:var(--text-tertiary);margin-bottom:14px;font-weight:700}
.match-comp{display:flex;align-items:center;gap:6px;background:var(--surface-elevated);padding:4px 10px;border-radius:8px}
.match-teams{display:flex;align-items:center;justify-content:center;gap:16px}
.match-team{text-align:center;flex:1}
.match-logo{width:52px;height:52px;background:linear-gradient(135deg,rgba(225,29,72,.12),rgba(251,191,36,.08));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:var(--primary);margin:0 auto 8px;border:2px solid var(--border)}
.match-name{font-size:12px;font-weight:700;color:var(--text-primary)}
.match-score{font-size:36px;font-weight:900;font-variant-numeric:tabular-nums;min-width:80px;text-align:center;color:var(--text-primary);letter-spacing:-1px}
.match-score.live{color:var(--live);text-shadow:0 0 20px rgba(255,23,68,.3);animation:livePulse 2s infinite}
@keyframes livePulse{0%,100%{opacity:1}50%{opacity:.7}}
.match-divider{display:flex;flex-direction:column;align-items:center;gap:4px}
.match-vs{font-size:10px;color:var(--text-tertiary);font-weight:700;background:var(--surface-elevated);padding:2px 8px;border-radius:4px}
.match-time{font-size:11px;color:var(--text-secondary);text-align:center;margin-top:10px;font-weight:600;padding:6px 0;border-top:1px solid var(--border)}
.match-actions{display:flex;gap:8px;margin-top:12px}
.match-btn{flex:1;padding:10px;border-radius:12px;font-size:11px;font-weight:800;text-align:center;cursor:pointer;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text-primary);font-family:var(--font)}
.match-btn.primary{background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;border-color:transparent}
.match-btn.tv{background:rgba(96,165,250,.1);color:var(--blue);border-color:rgba(96,165,250,.2)}
.live-match-card{margin:0 16px 12px;background:var(--surface);border-radius:var(--radius);padding:18px;border:1px solid var(--border);box-shadow:var(--shadow);cursor:pointer;position:relative;overflow:hidden}
.live-match-card::before{content:'';position:absolute;top:0;left:0;width:3px;height:100%;background:var(--live)}
.live-events{margin-top:14px;padding-top:14px;border-top:1px solid var(--border)}
.live-event{display:flex;align-items:center;gap:10px;padding:4px 0;font-size:12px}
.live-event-time{font-weight:800;color:var(--text-secondary);min-width:36px;font-size:11px}
.live-event.away{flex-direction:row-reverse;text-align:right}
.live-event-text{flex:1;color:var(--text-secondary);font-size:12px;font-weight:500}
.match-detail-hero{position:relative;padding:24px 20px;background:linear-gradient(180deg,var(--surface-elevated),var(--surface));border-bottom:1px solid var(--border)}
.match-detail-teams{display:flex;align-items:center;justify-content:center;gap:20px;margin-top:8px}
.match-detail-logo{width:64px;height:64px;background:linear-gradient(135deg,rgba(225,29,72,.15),rgba(251,191,36,.1));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:var(--primary);border:2px solid var(--border-light)}
.match-detail-name{font-size:13px;font-weight:800;margin-top:8px;text-align:center}
.match-detail-score{font-size:48px;font-weight:900;color:var(--text-primary);text-align:center;min-width:100px;letter-spacing:-2px}
.match-detail-score.live{color:var(--live)}
.match-detail-info{text-align:center;font-size:12px;color:var(--text-secondary);margin-top:8px;font-weight:600}
.match-detail-status{display:inline-flex;align-items:center;gap:6px;background:rgba(225,29,72,.12);color:var(--primary);padding:6px 14px;border-radius:20px;font-size:11px;font-weight:800;margin-top:12px}
.match-detail-status.live{background:rgba(255,23,68,.12);color:var(--live)}
.detail-tabs{display:flex;gap:4px;padding:8px 16px;background:var(--bg);border-bottom:1px solid var(--border)}
.detail-tab{flex:1;padding:10px;border-radius:12px;font-size:12px;font-weight:700;text-align:center;cursor:pointer;border:none;background:transparent;color:var(--text-tertiary);font-family:var(--font)}
.detail-tab.active{background:var(--surface-elevated);color:var(--text-primary);box-shadow:var(--shadow)}
.detail-section{padding:16px}
.detail-stat-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.detail-stat-label{font-size:12px;color:var(--text-secondary);font-weight:600}
.detail-stat-bar{flex:1;margin:0 16px;height:6px;background:var(--surface-elevated);border-radius:3px;overflow:hidden}
.detail-stat-fill{height:100%;border-radius:3px}
.detail-stat-val{font-size:12px;font-weight:800;color:var(--text-primary);min-width:24px;text-align:center}
.player-card{display:flex;align-items:center;gap:12px;padding:10px;background:var(--surface);border-radius:14px;margin-bottom:8px;border:1px solid var(--border)}
.player-photo-wrap{position:relative;width:48px;height:48px;flex-shrink:0}
.player-photo{width:48px;height:48px;border-radius:50%;object-fit:cover;background:var(--surface-elevated);border:1px solid var(--border);display:block}
.player-photo-placeholder{width:48px;height:48px;border-radius:50%;background:var(--surface-elevated);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:20px;color:var(--text-tertiary)}
.player-photo-add{position:absolute;bottom:-2px;right:-2px;width:20px;height:20px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;cursor:pointer;border:2px solid var(--surface)}
.player-info{flex:1;min-width:0}
.player-name{font-size:14px;font-weight:700;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.player-club{font-size:11px;color:var(--text-tertiary);font-weight:600}
.player-fav-btn{font-size:22px;cursor:pointer;background:none;border:none;flex-shrink:0}
.club-card{display:flex;align-items:center;gap:12px;padding:12px;background:var(--surface);border-radius:14px;margin-bottom:8px;border:1px solid var(--border);cursor:pointer}
.club-card-logo{width:40px;height:40px;border-radius:50%;overflow:hidden;background:var(--surface-elevated);border:1px solid var(--border);flex-shrink:0}
.club-card-logo img{width:100%;height:100%;object-fit:contain}
.club-card-name{flex:1;font-size:14px;font-weight:700;color:var(--text-primary)}
.auth-tabs{display:flex;gap:8px;padding:0 16px 16px}
.auth-tab-btn{flex:1;padding:10px;border-radius:14px;font-size:13px;font-weight:700;text-align:center;cursor:pointer;border:1.5px solid var(--border);background:var(--surface);color:var(--text-secondary);font-family:var(--font)}
.auth-tab-btn.active{background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;border-color:transparent}
.auth-field{margin:0 16px 12px}
.auth-field label{display:block;font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:6px}
.auth-field input{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--surface);color:var(--text-primary);font-size:14px;font-family:var(--font)}
.auth-field input:focus{outline:none;border-color:var(--primary)}
.auth-submit-btn{margin:8px 16px;padding:14px;border-radius:14px;background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;font-weight:800;font-size:14px;text-align:center;cursor:pointer;border:none;font-family:var(--font);box-shadow:0 4px 16px var(--primary-glow)}
.auth-skip-btn{margin:4px 16px 16px;padding:12px;border-radius:14px;background:transparent;color:var(--text-secondary);font-weight:700;font-size:13px;text-align:center;cursor:pointer;border:1px solid var(--border);font-family:var(--font)}
.auth-msg{margin:0 16px 12px;font-size:12px;padding:10px 12px;border-radius:10px;display:none}
.auth-msg.show{display:block}
.auth-msg.error{background:rgba(239,68,68,.1);color:var(--error)}
.auth-msg.success{background:rgba(34,197,94,.1);color:var(--success)}
.logged-in-card{margin:0 16px 12px;padding:16px;background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);display:flex;align-items:center;gap:12px}
.article-hero{position:relative;height:280px;background:var(--surface-elevated);background-size:cover;background-position:center;overflow:hidden;flex-shrink:0}
.article-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,.1) 100%)}
.article-hero-pattern{position:absolute;inset:0;opacity:.04;background-image:radial-gradient(circle at 20% 50%,var(--gold) 1px,transparent 1px),radial-gradient(circle at 80% 30%,var(--gold) 1px,transparent 1px);background-size:40px 40px}
.article-top-bar{position:absolute;top:0;left:0;right:0;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;z-index:10}
.article-top-btn{width:40px;height:40px;border-radius:50%;background:var(--surface);box-shadow:var(--shadow);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;color:var(--text-primary);transition:.2s}
.article-top-btn:hover{background:var(--surface-elevated);transform:scale(1.05)}
.article-top-btn:active{transform:scale(.9)}
.article-top-btn.saved{background:var(--primary);color:#fff;border-color:var(--primary)}
.article-top-actions{display:flex;gap:10px}
.article-hero-badge{position:absolute;bottom:20px;left:16px;z-index:5;display:inline-flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--border);color:var(--primary);padding:6px 16px;border-radius:20px;font-size:10px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;box-shadow:var(--shadow)}
.article-hero-badge .pulse{width:6px;height:6px;background:var(--primary);border-radius:50%;animation:pulseBadge 1.5s infinite}
.article-body{background:var(--surface);border-radius:24px 24px 0 0;margin-top:-24px;position:relative;z-index:5;padding:24px 20px 20px}
.article-title{font-size:22px;font-weight:900;color:var(--text-primary);line-height:1.3;letter-spacing:-.4px;margin-bottom:16px}
.article-meta-row{display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid var(--border);margin-bottom:20px}
.article-meta-left{display:flex;align-items:center;gap:10px}
.article-author-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--gold));display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff;box-shadow:0 4px 12px var(--primary-glow)}
.article-author-info{display:flex;flex-direction:column}
.article-author-name{font-size:13px;font-weight:700;color:var(--text-primary)}
.article-author-time{font-size:11px;color:var(--text-secondary);font-weight:500}
.article-read-time{display:flex;align-items:center;gap:4px;font-size:12px;color:var(--text-secondary);font-weight:600;background:var(--surface-elevated);padding:6px 12px;border-radius:20px}
.article-text{font-size:15px;line-height:1.75;color:var(--text-primary);font-weight:400}
.article-text img{max-width:100%!important;width:100%!important;height:auto!important;display:block;border-radius:14px;margin:14px 0;object-fit:contain}
.article-text figure{margin:14px 0}
.article-text figcaption{font-size:12px;color:var(--text-secondary);text-align:center;margin-top:6px}
.article-text,.article-text *{color:var(--text-primary)!important}
.article-text *:not(.article-quote):not(.article-quote *){background:transparent!important}
.article-text strong,.article-text b{color:var(--primary)!important;font-weight:700!important}
.article-text .article-quote{color:var(--text-secondary)!important}
.article-text .article-quote *{color:var(--text-secondary)!important}
.article-text .article-quote-author{color:var(--primary)!important}
.article-text p{margin-bottom:16px}
.article-text strong{font-weight:700;color:var(--primary)}
.article-quote{border-left:4px solid var(--primary);padding:12px 16px;margin:20px 0;background:linear-gradient(90deg,rgba(225,29,72,.08),transparent);border-radius:0 12px 12px 0;font-style:italic;font-size:15px;color:var(--text-secondary);line-height:1.6}
.article-quote-author{font-style:normal;font-size:12px;font-weight:700;color:var(--primary);margin-top:8px}
.article-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px;padding-top:20px;border-top:1px solid var(--border)}
.article-tag{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;background:var(--surface-elevated);color:var(--text-secondary);border:1px solid var(--border);cursor:pointer;transition:.2s}
.article-tag:hover{background:rgba(225,29,72,.1);color:var(--primary);border-color:rgba(225,29,72,.2)}
.article-actions{display:flex;gap:10px;margin-top:24px;padding:16px;background:var(--bg);border-radius:16px;border:1px solid var(--border)}
.article-action-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;border:none;font-family:var(--font);transition:.2s}
.article-action-btn.like{background:var(--surface);color:var(--text-primary);border:1px solid var(--border)}
.article-action-btn.like.active{background:rgba(225,29,72,.12);color:var(--primary);border-color:var(--primary)}
.article-action-btn.share{background:var(--primary);color:#fff;box-shadow:0 2px 8px rgba(225,29,72,.25)}
.article-action-btn.share:hover{background:var(--primary-dark)}
.article-action-btn.save{background:var(--surface);color:var(--text-primary);border:1px solid var(--border)}
.article-action-btn.save.active{background:rgba(251,191,36,.12);color:var(--gold-dark);border-color:var(--gold)}
.article-related{margin-top:24px;padding-top:20px;border-top:1px solid var(--border)}
.article-related-title{font-size:15px;font-weight:800;color:var(--text-primary);margin-bottom:14px}
.article-related-item{display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border);cursor:pointer;transition:opacity .2s}
.article-related-item:hover{opacity:.7}
.article-related-item:last-child{border-bottom:none}
.article-related-thumb{width:64px;height:48px;border-radius:10px;background:linear-gradient(135deg,rgba(225,29,72,.12),rgba(251,191,36,.1));display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;border:1px solid var(--border)}
.article-related-text{flex:1;min-width:0}
.article-related-tag{font-size:9px;font-weight:900;color:var(--primary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}
.article-related-headline{font-size:13px;font-weight:700;color:var(--text-primary);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.bottom-nav{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);width:92%;max-width:440px;height:64px;background:linear-gradient(135deg,var(--primary),var(--primary-dark));border:1px solid rgba(255,255,255,.15);border-radius:32px;display:flex;justify-content:space-around;align-items:center;z-index:1000;box-shadow:0 8px 32px rgba(225,29,72,.35)}
.nav-item{display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;padding:8px 14px;border-radius:16px;position:relative;user-select:none}
.nav-icon{font-size:22px;opacity:.65;color:#fff;filter:drop-shadow(0 1px 2px rgba(0,0,0,.25))}
.nav-label{font-size:9px;font-weight:700;color:rgba(255,255,255,.75)}
.nav-item.active .nav-icon{opacity:1;transform:translateY(-2px)}
.nav-item.active .nav-label{color:#fff;font-weight:800}
.nav-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;background:#fff;border-radius:50%;filter:blur(20px);opacity:0}
.nav-item.active .nav-glow{opacity:.3}
.scroll-area{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding-bottom:100px}
.screen{display:none}
.screen.active{display:flex;flex-direction:column;flex:1;min-height:0;animation:fadeIn .35s ease}
::-webkit-scrollbar{width:0;height:0}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulseBadge{0%,100%{box-shadow:0 0 0 0 rgba(255,23,68,.4)}50%{box-shadow:0 0 0 6px rgba(255,23,68,0)}}
.stagger-1{animation-delay:.04s;opacity:0;animation:fadeIn .4s ease forwards}
.stagger-2{animation-delay:.08s;opacity:0;animation:fadeIn .4s ease forwards}
.stagger-3{animation-delay:.12s;opacity:0;animation:fadeIn .4s ease forwards}
.stagger-4{animation-delay:.16s;opacity:0;animation:fadeIn .4s ease forwards}
.stagger-5{animation-delay:.20s;opacity:0;animation:fadeIn .4s ease forwards}
.ptr-indicator{text-align:center;padding:14px;font-size:12px;color:var(--text-secondary);font-weight:600;display:none}
.ptr-indicator.show{display:block}
.ptr-spinner{width:18px;height:18px;border:2px solid var(--border-light);border-top-color:var(--primary);border-radius:50%;animation:spin .8s linear infinite;display:inline-block;vertical-align:middle;margin-right:8px}
@keyframes spin{to{transform:rotate(360deg)}}
.offline-badge{position:fixed;top:0;left:50%;transform:translateX(-50%) translateY(-100%);background:var(--error);color:#fff;padding:8px 24px;border-radius:0 0 16px 16px;font-size:11px;font-weight:700;z-index:10001;transition:transform .3s}
.app-toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%) translateY(20px);background:var(--surface-elevated);color:var(--text-primary);border:1px solid var(--border);box-shadow:var(--shadow-lg);padding:12px 18px;border-radius:20px;font-size:13px;font-weight:700;z-index:10002;display:flex;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;max-width:calc(100vw - 40px)}
.app-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.offline-badge.show{transform:translateX(-50%) translateY(0)}
</style>
<!-- start webpushr tracking code -->
<script>(function(w,d, s, id) {if(typeof(w.webpushr)!=='undefined') return;w.webpushr=w.webpushr||function(){(w.webpushr.q=w.webpushr.q||[]).push(arguments)};var js, fjs = d.getElementsByTagName(s)[0];js = d.createElement(s); js.id = id;js.async=1;js.src = "https://cdn.webpushr.com/app.min.js";
fjs.parentNode.appendChild(js);}(window,document, 'script', 'webpushr-jssdk'));
webpushr('setup',{'key':'BMujF07BX1e3soo75hCpA7zX-FgLoaNlbHofDpJOOvyb-mENThDD5Dg3IUI0gfE2RLFifXRkrVBS4JGvSfNCDK0', 'integration':'popup'  });</script>
<!-- end webpushr tracking code -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
</head>
<body>
<div class="offline-badge" id="offlineBadge">📴 Nema interneta</div>
<div class="splash" id="splash">
  <div class="splash-ball"><svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="url(#ballGrad)" stroke="rgba(255,255,255,.1)" stroke-width="1"/><path d="M50 2 L50 98 M2 50 L98 50 M15 15 L85 85 M85 15 L15 85" stroke="rgba(255,255,255,.15)" stroke-width="2"/><circle cx="50" cy="50" r="20" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="2"/><defs><radialGradient id="ballGrad" cx="30%" cy="30%"><stop offset="0%" stop-color="#e11d48"/><stop offset="100%" stop-color="#7f1d1d"/></radialGradient></defs></svg></div>
  <div class="splash-logo">ROLaj ME</div>
  <div class="splash-sub" id="splashSub">VERZIJA-13AVG-TOAST · Povlačim vijesti...</div>
  <div class="splash-progress"><div class="splash-progress-bar"></div></div>
</div>
<div id="app">
  <div class="ptr-indicator" id="ptrIndicator"><span class="ptr-spinner"></span>Osvježavanje...</div>
  <div class="app-toast" id="appToast"></div>

  <!-- 1. HOME -->
  <div class="screen active" id="screen-home">
    <div class="header">
      <div><div class="logo-text">ROLaj ME</div><div class="logo-sub">Crnogorski Fudbal</div></div>
      <div class="header-icons">
        <span class="header-icon" onclick="navTo('news')">🔍</span>
        <span class="header-icon" style="position:relative" onclick="toggleNotifPanel(event)">🔔<span class="badge" id="notifBadge">3</span></span>
        <span class="header-icon" onclick="navTo('more')">👤</span>
      </div>
      <div id="notifPanel" class="notif-panel"></div>
    </div>
    <div class="league-wrap">
      <div class="league-bar" id="homeLeagueBar">
        <div class="chip active" data-league="1cfl">🏆 Meridianbet 1.CFL</div>
        <div class="chip" data-league="2cfl">⚽ Meridianbet 2.CFL</div>
        <div class="chip" data-league="repr">🇲🇪 Reprezentacija</div>
        <div class="chip" data-league="kup">🏆 Kup Crne Gore</div>
      </div>
      <div class="league-fade"></div>
    </div>
    <div class="scroll-area" id="homeScroll">
      <div class="live-ticker" id="liveTicker"></div>
      <div class="hero-wrap"><div class="hero-news" id="heroCard"></div></div>
      <div class="section-header"><div class="section-title">⚡ Kategorije</div></div>
      <div class="stories" id="storiesRow"></div>
      <div class="section-header"><div class="section-title" id="newsListLabel">🆕 Najnovije</div><div class="section-link" onclick="navTo('news')">Sve →</div></div>
      <div id="newsList"></div>
      <a class="sponsor-banner" href="https://sansabet.com/Cashback" target="_blank" rel="noopener sponsored"><img src="data:image/jpeg;base64,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" alt="Sansabet Online Cashback"></a>
      <div class="section-header"><div class="section-title">📊 Tabela — Meridianbet 1. CFL</div><div class="section-link" onclick="navTo('standings')">Puna →</div></div>
      <div class="mini-table" id="miniTable"></div>
      <div class="section-header"><div class="section-title">📈 Brze statistike</div></div>
      <div class="stats-row" id="quickStats"></div>
      <div class="section-header"><div class="section-title">🥇 Najbolji strijelci</div></div>
      <div id="topScorersList" style="padding:0 16px"></div>
      <div class="section-header"><div class="section-title">❤️ Izaberi omiljeni klub</div></div>
      <div class="stories" id="homeClubPicker"></div>
      <div class="section-header"><div class="section-title">⭐ Pretraga igrača</div></div>
      <div class="search-wrap">
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" id="homePlayerSearchInput" placeholder="Ime igrača ili klub..." oninput="renderHomePlayerSearch(this.value)">
        </div>
      </div>
      <div id="homePlayerSearchResults" style="padding:0 16px"></div>
      <div style="height:30px"></div>
    </div>
  </div>

  <!-- 2. MATCHES -->
  <div class="screen" id="screen-matches">
    <div class="header"><div><div class="logo-text">ROLaj ME</div><div class="logo-sub">Crnogorski Fudbal</div></div>
      <div class="header-icons"><span class="header-icon" style="position:relative">🔔<span class="badge">3</span></span></div></div>
    <div class="league-wrap"><div class="league-bar" id="matchesLeagueBar">
        <div class="chip active" data-league="1cfl">🏆 Meridianbet 1.CFL</div>
        <div class="chip" data-league="2cfl">⚽ Meridianbet 2.CFL</div>
      </div><div class="league-fade"></div></div>
    <div class="tab-row" id="matchesTabRow">
      <button class="tab-btn active" data-tab="schedule">📅 Raspored</button>
      <button class="tab-btn" data-tab="results">✅ Rezultati</button>
      <button class="tab-btn" data-tab="live">🔴 Uživo</button>
    </div>
    <div class="scroll-area" id="matchesScroll"><a class="sponsor-banner" style="margin-top:12px" href="https://sansabet.com/Cashout" target="_blank" rel="noopener sponsored"><img src="data:image/jpeg;base64,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" alt="Sansabet Cash Out"></a><div id="matchesContent"></div><div style="height:30px"></div></div>
  </div>
  <div class="screen" id="screen-match-detail">
    <div class="header" style="border-bottom:none">
      <div class="header-icon" onclick="closeMatchDetail()" style="background:transparent;border:none;width:auto">←</div>
      <div style="font-size:14px;font-weight:800">Detalji utakmice</div><div style="width:40px"></div>
    </div>
    <div class="scroll-area" id="matchDetailScroll">
      <div class="match-detail-hero" id="matchDetailHero"></div>
      <div class="detail-tabs" id="detailTabs">
        <button class="detail-tab active" data-dtab="summary">Sažetak</button>
        <button class="detail-tab" data-dtab="stats">Statistika</button>
        <button class="detail-tab" data-dtab="lineup">Sastavi</button>
        <button class="detail-tab" data-dtab="h2h">H2H</button>
        <button class="detail-tab" data-dtab="chat">💬 Komentari</button>
      </div>
      <div class="detail-section" id="detailContent"></div>
      <div style="height:30px"></div>
    </div>
  </div>

  <!-- 3. STANDINGS -->
  <div class="screen" id="screen-standings">
    <div class="header"><div><div class="logo-text">ROLaj ME</div><div class="logo-sub">Crnogorski Fudbal</div></div></div>
    <div class="league-wrap">
      <div class="league-bar" id="standingsLeagueBar">
        <div class="chip active" data-league="1cfl">🏆 Meridianbet 1.CFL</div>
        <div class="chip" data-league="2cfl">⚽ Meridianbet 2.CFL</div>
      </div>
      <div class="league-fade"></div>
    </div>
    <div class="scroll-area" id="standingsScroll">
      <div id="sofascoreWrap"></div>
      <div id="customStandingsWrap">
        <div class="section-header" style="padding-bottom:8px"><div class="section-title">📈 Statistike lige</div></div>
        <div class="stats-row" id="standingsStats"></div>
        <div class="section-header" style="padding-top:8px"><div class="section-title">📋 Tabela</div></div>
        <div class="standings-table" id="standingsTable"></div>
        <div class="standings-legend" id="standingsLegend"></div>
        <div id="standingsNote" style="margin:0 16px 20px;font-size:11px;color:var(--text-tertiary);line-height:1.5"></div>
      </div>
      <div style="height:30px"></div>
    </div>
  </div>

  <!-- 4. NEWS -->
  <div class="screen" id="screen-news">
    <div class="header">
      <div><div class="logo-text">ROLaj ME</div><div class="logo-sub">Crnogorski Fudbal</div></div>
      <div class="header-icons"><span class="header-icon" onclick="toggleSearch()">🔍</span></div>
    </div>
    <div class="search-wrap" id="searchWrap" style="display:none">
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input type="text" id="searchInput" placeholder="Pretraži vesti..." oninput="filterNewsSearch(this.value)">
        <span style="font-size:18px;cursor:pointer;opacity:.5" onclick="closeSearch()">✕</span>
      </div>
    </div>
    <div class="league-wrap">
      <div class="league-bar" id="newsCategoryBar">
        <div class="chip active" data-cat="all">Sve</div>
        <div class="chip" data-cat="repr">🇲🇪 Repr.</div>
        <div class="chip" data-cat="1cfl">🏆 1. CFL</div>
        <div class="chip" data-cat="2cfl">⚽ 2. CFL</div>
        <div class="chip" data-cat="kup">🏅 Kup</div>
        <div class="chip" data-cat="transferi">🔥 Transferi</div>
      </div>
      <div class="league-fade"></div>
    </div>
    <div class="scroll-area" id="newsScroll">
      <div id="newsFeatured"></div>
      <div id="newsListFull"></div>
      <div style="height:30px"></div>
    </div>
  </div>

  <!-- 5. MORE -->
  <div class="screen" id="screen-more">
    <div class="header"><div><div class="logo-text">ROLaj ME</div><div class="logo-sub">Crnogorski Fudbal</div></div></div>
    <div class="scroll-area" id="moreScroll">
      <div class="profile-header">
        <div class="profile-avatar">RM</div>
        <div class="profile-name">ROLaj ME</div>
        <div class="profile-sub">Sve o crnogorskom fudbalu</div>
        <div class="profile-stats">
          <div class="profile-stat"><div class="profile-stat-num" id="statSaved">0</div><div class="profile-stat-label">Sačuvano</div></div>
          <div class="profile-stat"><div class="profile-stat-num" id="statClubs">0</div><div class="profile-stat-label">Klubova</div></div>
          <div class="profile-stat"><div class="profile-stat-num" id="statPlayers">0</div><div class="profile-stat-label">Igrača</div></div>
        </div>
      </div>
      <div id="accountCard" style="margin:0 16px 12px"></div>
      <div class="section-header" style="padding-bottom:6px"><div class="section-title">🎨 Izgled</div></div>
      <div class="settings-group">
        <div class="setting-row" onclick="toggleTheme()">
          <div class="setting-left"><div class="setting-icon">🌙</div><div class="setting-title">Tamna tema</div></div>
          <div class="toggle" id="themeToggle"><div class="toggle-knob"></div></div>
        </div>
      </div>
      <div class="section-header" style="padding-bottom:6px"><div class="section-title">🔔 Notifikacije</div></div>
      <div class="settings-group">
        <div class="setting-row" onclick="toggleAllNotifications(this)"><div class="setting-left"><div class="setting-icon">🔔</div><div class="setting-title">Sve notifikacije</div></div><div class="toggle on" id="notifAllToggle"><div class="toggle-knob"></div></div></div>
        <div class="setting-row" onclick="toggleNotifSegment(this,'golovi')"><div class="setting-left"><div class="setting-icon">⚽</div><div class="setting-title">Gol obavještenja</div></div><div class="toggle on" data-segment="golovi"><div class="toggle-knob"></div></div></div>
        <div class="setting-row" onclick="toggleNotifSegment(this,'vijesti')"><div class="setting-left"><div class="setting-icon">📰</div><div class="setting-title">Najnovije vijesti</div></div><div class="toggle on" data-segment="vijesti"><div class="toggle-knob"></div></div></div>
        <div class="setting-row" onclick="toggleNotifSegment(this,'transferi')"><div class="setting-left"><div class="setting-icon">🔥</div><div class="setting-title">Transferi</div></div><div class="toggle" data-segment="transferi"><div class="toggle-knob"></div></div></div>
      </div>
      <div class="section-header" style="padding-bottom:6px"><div class="section-title">🛠️ Alati</div></div>
      <div class="settings-group">
        <div class="setting-row" onclick="navTo('ai-report')"><div class="setting-left"><div class="setting-icon">🤖</div><div class="setting-title">AI izvještaj utakmice</div></div><div class="setting-value"><span class="setting-arrow">▸</span></div></div>
      </div>
      <div class="section-header" style="padding-bottom:6px"><div class="section-title">⚙️ Podešavanja</div></div>
      <div class="settings-group">
        <div class="setting-row"><div class="setting-left"><div class="setting-icon">🌐</div><div class="setting-title">Jezik</div></div><div class="setting-value">Crnogorski <span class="setting-arrow">▸</span></div></div>
        <div class="setting-row" onclick="toggleSetting(this)"><div class="setting-left"><div class="setting-icon">📶</div><div class="setting-title">Offline mode</div></div><div class="toggle"><div class="toggle-knob"></div></div></div>
      </div>
      <div class="section-header" style="padding-bottom:6px"><div class="section-title">❤️ Omiljeno</div></div>
      <div class="settings-group">
        <div class="setting-row" onclick="navTo('fav-clubs')"><div class="setting-left"><div class="setting-icon" style="background:rgba(225,29,72,.12)">❤️</div><div class="setting-title">Omiljeni klubovi</div></div><div class="setting-value" id="favClubsVal">0 klubova <span class="setting-arrow">▸</span></div></div>
        <div class="setting-row" onclick="navTo('fav-players')"><div class="setting-left"><div class="setting-icon" style="background:rgba(251,191,36,.12)">⭐</div><div class="setting-title">Omiljeni igrači</div></div><div class="setting-value" id="favPlayersVal">0 igrača <span class="setting-arrow">▸</span></div></div>
        <div class="setting-row"><div class="setting-left"><div class="setting-icon" style="background:rgba(52,211,153,.12)">📌</div><div class="setting-title">Sačuvane vijesti</div></div><div class="setting-value" id="savedNewsVal">0 vijesti <span class="setting-arrow">▸</span></div></div>
      </div>
      <div class="section-header" style="padding-bottom:6px"><div class="section-title">📱 Aplikacija</div></div>
      <div class="settings-group">
        <div class="setting-row"><div class="setting-left"><div class="setting-icon">📋</div><div class="setting-title">O ROLaj ME</div></div><div class="setting-value">v1.0.0</div></div>
        <div class="setting-row"><div class="setting-left"><div class="setting-icon" style="background:rgba(251,191,36,.12)">⭐</div><div class="setting-title">Ocijeni aplikaciju</div></div><div class="setting-value" style="color:var(--gold)">★★★★★</div></div>
        <div class="setting-row" onclick="shareApp()"><div class="setting-left"><div class="setting-icon">📤</div><div class="setting-title">Podijeli aplikaciju</div></div><div class="setting-value"><span class="setting-arrow">▸</span></div></div>
        <div class="setting-row"><div class="setting-left"><div class="setting-icon">🐛</div><div class="setting-title">Prijavi grešku</div></div><div class="setting-value"><span class="setting-arrow">▸</span></div></div>
      </div>
      <div style="height:30px"></div>
    </div>
  </div>

  <!-- 6. ARTICLE DETAIL -->
  <div class="screen" id="screen-article">
    <div class="article-hero" id="articleHero">
      <div class="article-hero-pattern"></div>
      <div class="article-top-bar">
        <div class="article-top-btn" onclick="closeArticle()">←</div>
        <div class="article-top-actions">
          <div class="article-top-btn" onclick="toggleSaveArticle()" id="articleSaveBtnTop">🔖</div>
          <div class="article-top-btn" onclick="shareArticle()">↗️</div>
        </div>
      </div>
      <div class="article-hero-badge" id="articleBadge">
        <span class="pulse"></span>
        <span id="articleBadgeText">KATEGORIJA</span>
      </div>
    </div>
    <div class="scroll-area" id="articleScroll" style="padding-bottom:20px">
      <div class="article-body">
        <div class="article-title" id="articleTitle">Naslov vesti</div>
        <div class="article-meta-row">
          <div class="article-meta-left">
            <div class="article-author-avatar">R</div>
            <div class="article-author-info">
              <div class="article-author-name">ROLaj ME</div>
              <div class="article-author-time" id="articleTime">Prije 30 minuta</div>
            </div>
          </div>
          <div class="article-read-time" id="articleReadTime">⏱ 5 min</div>
        </div>
        <div class="article-text" id="articleText"></div>
        <div class="article-tags" id="articleTags"></div>
        <div class="article-actions">
          <button class="article-action-btn like" onclick="likeArticle(this)"><span id="likeIcon">❤️</span> <span id="likeText">Sviđa mi se</span></button>
          <button class="article-action-btn share" onclick="shareArticle()">↗️ Podeli</button>
          <button class="article-action-btn save" onclick="toggleSaveArticle()"><span id="saveIcon">🔖</span> <span id="saveText">Sačuvaj</span></button>
        </div>
        <div class="reactions-row" id="articleReactions"></div>
        <div class="article-related">
          <div class="article-related-title">📰 Povezane vesti</div>
          <div id="articleRelated"></div>
        </div>
        <div style="height:20px"></div>
      </div>
    </div>
  </div>

  <div class="screen" id="screen-ai-report">
    <div class="header" style="border-bottom:none">
      <div class="header-icon" onclick="navTo('more')" style="background:transparent;border:none;width:auto">←</div>
      <div style="font-size:14px;font-weight:800">AI izvještaj utakmice</div><div style="width:40px"></div>
    </div>
    <div class="scroll-area" id="aiReportScroll">
      <div style="padding:12px 16px">
        <div style="font-size:12px;color:var(--text-tertiary);margin-bottom:16px;line-height:1.5">Unesi podatke o odigranoj utakmici. AI će napisati izvještaj koji možeš pregledati i objaviti na rolaj-me.com.</div>

        <div class="auth-field"><label>Domaćin</label><input type="text" id="repHome" placeholder="npr. Rudar"></div>
        <div class="auth-field"><label>Gost</label><input type="text" id="repAway" placeholder="npr. Iskra"></div>
        <div style="display:flex;gap:10px">
          <div class="auth-field" style="flex:1"><label>Rezultat domaćin</label><input type="number" id="repHomeScore" placeholder="3"></div>
          <div class="auth-field" style="flex:1"><label>Rezultat gost</label><input type="number" id="repAwayScore" placeholder="0"></div>
        </div>
        <div class="auth-field"><label>Poluvrijeme (opciono)</label><input type="text" id="repHalftime" placeholder="npr. 1 - 0"></div>
        <div style="display:flex;gap:10px">
          <div class="auth-field" style="flex:1"><label>Liga</label>
            <select id="repComp" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--surface);color:var(--text-primary);font-size:14px;font-family:var(--font)">
              <option value="1. CFL">Meridianbet 1. CFL</option>
              <option value="2. CFL">Meridianbet 2. CFL</option>
            </select>
          </div>
          <div class="auth-field" style="flex:1"><label>Kolo</label><input type="number" id="repRound" placeholder="19"></div>
        </div>
        <div class="auth-field"><label>Stadion</label><input type="text" id="repStadium" placeholder="npr. Gradski stadion, Pljevlja"></div>
        <div class="auth-field"><label>Datum</label><input type="text" id="repDate" placeholder="npr. 29. novembar 2026."></div>
        <div class="auth-field"><label>Strijelci domaćina</label><input type="text" id="repScorersHome" placeholder="npr. Marković 12', Perović 34'"></div>
        <div class="auth-field"><label>Strijelci gosta</label><input type="text" id="repScorersAway" placeholder="npr. Ivanović 70'"></div>
        <div class="auth-field"><label>Kartoni (opciono)</label><input type="text" id="repCards" placeholder="npr. žuti: Nikolić 45', crveni: Petrović 80'"></div>
        <div class="auth-field"><label>Sastavi / ključni igrači (opciono)</label><input type="text" id="repLineups" placeholder="npr. golman X, kapiten Y, trener Z"></div>
        <div class="auth-field"><label>Ključni momenti (tvoj opis, 1-2 rečenice)</label>
          <textarea id="repKeyMoments" rows="3" placeholder="npr. Rudar je vodio od 12. minuta i kontrolisao igru, Iskra je imala priliku u 70. minutu ali gol nije priznat zbog ofsajda." style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--surface);color:var(--text-primary);font-size:14px;font-family:var(--font);resize:vertical"></textarea>
        </div>
        <div class="auth-field"><label>Ton izvještaja</label>
          <select id="repTone" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--surface);color:var(--text-primary);font-size:14px;font-family:var(--font)">
            <option value="navijacki">Navijački-emotivno</option>
            <option value="suvoparno">Suvoparno-informativno</option>
          </select>
        </div>

        <div class="auth-submit-btn" id="repGenerateBtn" onclick="generateAiReport()">✨ Generiši izvještaj</div>
        <div id="repResultWrap" style="display:none;margin-top:20px">
          <div class="section-header" style="padding:0 0 8px"><div class="section-title">📝 Izvještaj</div></div>
          <textarea id="repResultText" rows="14" style="width:100%;padding:14px;border-radius:14px;border:1px solid var(--border);background:var(--surface-elevated);color:var(--text-primary);font-size:13px;line-height:1.6;font-family:var(--font);resize:vertical"></textarea>
          <div class="auth-submit-btn" style="margin-top:10px" onclick="copyAiReport()">📋 Kopiraj tekst</div>
        </div>
        <div style="height:30px"></div>
      </div>
    </div>
  </div>

  <div class="screen" id="screen-fav-clubs">
    <div class="header" style="border-bottom:none">
      <div class="header-icon" onclick="navTo('more')" style="background:transparent;border:none;width:auto">←</div>
      <div style="font-size:14px;font-weight:800">Omiljeni klubovi</div><div style="width:40px"></div>
    </div>
    <div class="scroll-area" id="favClubsScroll">
      <div id="clubsList" style="padding:8px 16px"></div>
      <div style="height:30px"></div>
    </div>
  </div>

  <div class="screen" id="screen-fav-players">
    <div class="header" style="border-bottom:none">
      <div class="header-icon" onclick="navTo('more')" style="background:transparent;border:none;width:auto">←</div>
      <div style="font-size:14px;font-weight:800">Omiljeni igrači</div><div style="width:40px"></div>
    </div>
    <div class="search-wrap">
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input type="text" id="playerSearchInput" placeholder="Pretraži igrače ili klub..." oninput="renderPlayersList(this.value)">
      </div>
    </div>
    <div class="scroll-area" id="playersScroll">
      <div id="playersList" style="padding:8px 16px"></div>
      <div style="padding:16px;text-align:center;color:var(--text-tertiary);font-size:11px;line-height:1.5">Izvor: FSCG (Fudbalski savez Crne Gore) — svih 10 klubova Meridianbet 1. CFL.</div>
      <div style="height:30px"></div>
    </div>
  </div>

  <div class="screen" id="screen-auth">
    <div class="header" style="border-bottom:none">
      <div class="header-icon" onclick="navTo('more')" style="background:transparent;border:none;width:auto">←</div>
      <div style="font-size:14px;font-weight:800">Nalog</div><div style="width:40px"></div>
    </div>
    <div class="scroll-area" id="authScroll">
      <div class="profile-header" style="padding-top:16px">
        <div class="profile-avatar">👤</div>
        <div class="profile-name" id="authHeaderTitle">Registracija</div>
        <div class="profile-sub">Pratite omiljene klubove i igrače na svim uređajima</div>
      </div>
      <div class="auth-tabs">
        <div class="auth-tab-btn active" data-authtab="signup" onclick="switchAuthTab('signup')">Registracija</div>
        <div class="auth-tab-btn" data-authtab="login" onclick="switchAuthTab('login')">Prijava</div>
      </div>
      <div class="auth-msg" id="authMsg"></div>
      <div class="auth-field">
        <label>E-mail</label>
        <input type="email" id="authEmail" placeholder="tvoj@email.com">
      </div>
      <div class="auth-field">
        <label>Lozinka</label>
        <input type="password" id="authPassword" placeholder="Najmanje 6 karaktera">
      </div>
      <div class="auth-submit-btn" id="authSubmitBtn" onclick="submitAuth()">Registruj se</div>
      <div class="auth-skip-btn" onclick="navTo('more')">Nastavi bez registracije</div>
      <div style="height:30px"></div>
    </div>
  </div>

  <nav class="bottom-nav" id="bottomNav">
    <div class="nav-item active" data-screen="home"><div class="nav-glow"></div><div class="nav-icon">🏠</div><div class="nav-label">Početna</div></div>
    <div class="nav-item" data-screen="matches"><div class="nav-glow"></div><div class="nav-icon">📅</div><div class="nav-label">Lige</div></div>
    <div class="nav-item" data-screen="standings"><div class="nav-glow"></div><div class="nav-icon">📊</div><div class="nav-label">Timovi</div></div>
    <div class="nav-item" data-screen="news"><div class="nav-glow"></div><div class="nav-icon">📰</div><div class="nav-label">Vesti</div></div>
    <div class="nav-item" data-screen="more"><div class="nav-glow"></div><div class="nav-icon">⚙️</div><div class="nav-label">Više</div></div>
  </nav>
</div>
<script>
/* ========== PODACI ========== */
let news=[
  {id:1,title:'Orlovi objavili spisak igrača za mečeve Lige nacija — Morača i Krivokapić pozvani prvi put',category:'REPREZENTACIJA',emoji:'🏆',time:'Prije 30 minuta',readTime:5,pinned:true,content:'<p>Fudbalska reprezentacija Crne Gore objavila je spisak igrača za predstojeće utakmice Lige nacija. Selektor Miodrag Martać pozvao je 23 igrača, među kojima su i debitanti Morača i Krivokapić.</p><p>„Odlučio sam se za ove igrače jer vjerujem da imaju kvalitet i energiju koja nam je potrebna u ovim važnim mečevima“, izjavio je Martać na današnjoj konferenciji za medije.</p><div class="article-quote">„Orlovi imaju kvalitet za plasman na EP, fokus je na mladima i njihovom razvoju.“<div class="article-quote-author">— Miodrag Martać, selektor</div></div><p>Reprezentacija će se prvo sastati sa Finskom u Podgorici, a zatim putuje u Bukurešt na meč sa Rumunijom.</p>'},
  {id:2,title:'Mornar pojačao napad: Stigao reprezentativac iz Sutjeske na dvogodišnji ugovor',category:'MERIDIANBET 1.CFL',emoji:'⚽',time:'Prije 2 sata',readTime:3,content:'<p>FK Mornar Bar nastavlja sa pojačanjima pred početak nove sezone. Napadač je stigao iz Sutjeske potpisavši dvogodišnji ugovor.</p><p>„Sretan sam što sam postao dio ovog projekta. Mornar je ambiciozan klub i vjerujem da možemo puno toga postići zajedno“, rekao je novi igrač na predstavljanju.</p>'},
  {id:3,title:'Budućnost prodala mladog talenta u belgijski klub za rekordan iznos od 800.000€',category:'TRANSFERI',emoji:'🔥',time:'Prije 5 sati',readTime:4,content:'<p>FK Budućnost ostvarila je najveći transfer u svojoj novijoj istoriji. Mladi reprezentativac Crne Gore odlazi u Belgiju za 800.000 evra.</p><p>Ovaj transfer predstavlja veliki uspjeh za crnogorski fudbal i dokaz da mladi talenti mogu doći do velikih klubova iz naše lige.</p>'},
  {id:4,title:'Žrijeb četvrtfinala Kupa Crne Gore: Mornar dobio Budućnost u derbiju kola',category:'KUP CRNE GORE',emoji:'🏅',time:'Prije 8 sati',readTime:2,content:'<p>U crnogorskoj fudbalskoj federaciji održan je žrijeb četvrtfinala Kupa Crne Gore. Najzanimljiviji par je Mornar — Budućnost.</p><p>Ostali parovi su: Sutjeska — Dečić, Arsenal — Petrovac i Mladost DG — Bokelj.</p>'},
  {id:5,title:'Selektor Miodrag Martać: "Orlovi imaju kvalitet za plasman na EP, fokus je na mladima"',category:'REPREZENTACIJA',emoji:'🎤',time:'Prije 2 dana',readTime:6,content:'<p>U ekskluzivnom intervjuu za ROLaj ME, selektor reprezentacije Crne Gore Miodrag Martać govorio je o planovima, ambicijama i mladim talentima.</p><div class="article-quote">„Vjerujem u ovu generaciju. Vidim želju i posvećenost koja nam je nedostajala ranije.“<div class="article-quote-author">— Miodrag Martać</div></div><p>Martać je posebno istakao značaj Lige nacija kao stepenice ka Evropskom prvenstvu.</p>'},
  {id:6,title:'Rudar preuzeo vrh Meridianbet 2. CFL nakon pobjede na gostovanju',category:'MERIDIANBET 2.CFL',emoji:'⚽',time:'Prije 3 sata',readTime:3,content:'<p>FK Rudar Pljevlja preuzeo je prvo mjesto na tabeli 2. CFL nakon uvjerljive pobjede na gostovanju.</p><p>Pljevljani su savladali Lovćen sa 3:0 i sada imaju tri boda više od pratioca.</p>'},
  {id:7,title:'Sutjeska dobila novo pojačanje iz Srbije: Potpisano na godinu dana',category:'MERIDIANBET 1.CFL',emoji:'⚽',time:'Prije 6 sati',readTime:3,content:'<p>FK Sutjeska Nikšić potpisala je ugovor sa iskusnim veznim igračem iz Srbije na period od jedne godine sa mogućnošću produženja.</p>'},
  {id:8,title:'Analiza: Ko je najbolji strijelac 1. CFL nakon prvog kola?',category:'MERIDIANBET 1.CFL',emoji:'📊',time:'Prije 12 sati',readTime:4,content:'<p>Nakon završetka prvog kola Meridianbet 1. CFL, analizirali smo efikasnost napadača u ligi.</p><p>Iako je prerano za konačne zaključke, nekoliko igrača istaklo se već u prvom kolu.</p>'},
  {id:9,title:'Bokelj slavi 100 godina postojanja: Priprema se spektakl u Kotoru',category:'MERIDIANBET 1.CFL',emoji:'🏆',time:'Prije 2 dana',readTime:5,content:'<p>FK Bokelj Kotor obilježava stoti rođendan kluba. Povodom jubileja priprema se velika proslava u Kotoru.</p><p>Planirana je izložba fotografija, prijateljska utakmica sa bivšim igračima i svečana akademija.</p>'}
];

let upcomingMatches=[
  {id:'m5',home:'Sutjeska',away:'Otrant-Olympic',date:'Subota, 15. Avgust 2026.',time:'20:00',stadium:'Gradski stadion, Nikšić',round:3,comp:'1. CFL',tv:''},
  {id:'m6',home:'Arsenal',away:'Budućnost',date:'Nedjelja, 16. Avgust 2026.',time:'20:00',stadium:'Stadion FK Arsenal',round:3,comp:'1. CFL',tv:''},
  {id:'m7',home:'Mladost DG',away:'Mornar',date:'Nedjelja, 16. Avgust 2026.',time:'20:00',stadium:'DG arena, Podgorica',round:3,comp:'1. CFL',tv:''},
  {id:'m8',home:'Petrovac',away:'Jezero',date:'Nedjelja, 16. Avgust 2026.',time:'20:00',stadium:'Stadion Mitar Mićo Goliš, Petrovac',round:3,comp:'1. CFL',tv:''},
  {id:'m9',home:'Dečić',away:'Bokelj',date:'Ponedjeljak, 17. Avgust 2026.',time:'20:00',stadium:'Arena Besa, Tuzi',round:3,comp:'1. CFL',tv:''},
  {id:'m10',home:'Mornar',away:'Budućnost',date:'Petak, 21. Avgust 2026.',time:'20:00',stadium:'SRC Topolica, Bar',round:4,comp:'1. CFL',tv:''},
  {id:'m11',home:'Mladost DG',away:'Petrovac',date:'Subota, 22. Avgust 2026.',time:'20:00',stadium:'DG arena, Podgorica',round:4,comp:'1. CFL',tv:''},
  {id:'m12',home:'Bokelj',away:'Arsenal',date:'Nedjelja, 23. Avgust 2026.',time:'20:00',stadium:'Stadion pod Vrmcem, Kotor',round:4,comp:'1. CFL',tv:''},
  {id:'m13',home:'Otrant-Olympic',away:'Dečić',date:'Nedjelja, 23. Avgust 2026.',time:'20:00',stadium:'Stadion Velika plaža, Ulcinj',round:4,comp:'1. CFL',tv:''},
  {id:'m14',home:'Jezero',away:'Sutjeska',date:'Nedjelja, 23. Avgust 2026.',time:'20:00',stadium:'Gradski stadion, Berane',round:4,comp:'1. CFL',tv:''},
  {id:'m15',home:'Sutjeska',away:'Mladost DG',date:'Petak, 28. Avgust 2026.',time:'20:00',stadium:'Gradski stadion, Nikšić',round:5,comp:'1. CFL',tv:''},
  {id:'m16',home:'Petrovac',away:'Mornar',date:'Subota, 29. Avgust 2026.',time:'20:00',stadium:'Stadion Mitar Mićo Goliš, Petrovac',round:5,comp:'1. CFL',tv:''},
  {id:'m17',home:'Dečić',away:'Jezero',date:'Nedjelja, 30. Avgust 2026.',time:'20:00',stadium:'Arena Besa, Tuzi',round:5,comp:'1. CFL',tv:''},
  {id:'m18',home:'Arsenal',away:'Otrant-Olympic',date:'Nedjelja, 30. Avgust 2026.',time:'20:00',stadium:'Stadion FK Arsenal',round:5,comp:'1. CFL',tv:''},
  {id:'m19',home:'Budućnost',away:'Bokelj',date:'Nedjelja, 30. Avgust 2026.',time:'20:00',stadium:'Gradski stadion, Podgorica',round:5,comp:'1. CFL',tv:''},
  {id:'d2-1a',home:'Grbalj',away:'Zeta',date:'Subota, 15. Avgust 2026.',time:'17:45',stadium:'Stadion Donja Sutvara',round:1,comp:'2. CFL',tv:''},
  {id:'d2-1b',home:'Lovćen',away:'Podgorica',date:'Subota, 15. Avgust 2026.',time:'18:00',stadium:'Gradski stadion, Berane',round:1,comp:'2. CFL',tv:''},
  {id:'d2-1c',home:'Rudar',away:'Iskra',date:'Subota, 15. Avgust 2026.',time:'19:00',stadium:'Gradski stadion, Pljevlja',round:1,comp:'2. CFL',tv:''},
  {id:'d2-1d',home:'Kom',away:'Budva',date:'Nedjelja, 16. Avgust 2026.',time:'17:45',stadium:"Pomoćni teren FK Sutjeska, Nikšić",round:1,comp:'2. CFL',tv:''},
  {id:'d2-1e',home:'Jedinstvo Franca',away:'Berane',date:'Nedjelja, 16. Avgust 2026.',time:'19:00',stadium:'Gradski stadion, Bijelo Polje',round:1,comp:'2. CFL',tv:''},
  {id:'d2-2a',home:'Berane',away:'Iskra',date:'Subota, 22. Avgust 2026.',time:'20:00',stadium:'Gradski stadion, Berane',round:2,comp:'2. CFL',tv:''},
  {id:'d2-2b',home:'Zeta',away:'Rudar',date:'Subota, 22. Avgust 2026.',time:'20:00',stadium:'Stadion Trešnjica',round:2,comp:'2. CFL',tv:''},
  {id:'d2-2c',home:'Budva',away:'Grbalj',date:'Subota, 22. Avgust 2026.',time:'20:00',stadium:'Stadion Lugovi',round:2,comp:'2. CFL',tv:''},
  {id:'d2-2d',home:'Podgorica',away:'Kom',date:'Subota, 22. Avgust 2026.',time:'20:00',stadium:'DG Arena',round:2,comp:'2. CFL',tv:''},
  {id:'d2-2e',home:'Jedinstvo Franca',away:'Lovćen',date:'Subota, 22. Avgust 2026.',time:'20:00',stadium:'Gradski stadion, Bijelo Polje',round:2,comp:'2. CFL',tv:''},
  {id:'d2-3a',home:'Lovćen',away:'Berane',date:'Subota, 29. Avgust 2026.',time:'20:00',stadium:'Stadion Obilića poljana',round:3,comp:'2. CFL',tv:''},
  {id:'d2-3b',home:'Kom',away:'Jedinstvo Franca',date:'Subota, 29. Avgust 2026.',time:'20:00',stadium:'Stadion FK Kom',round:3,comp:'2. CFL',tv:''},
  {id:'d2-3c',home:'Grbalj',away:'Podgorica',date:'Subota, 29. Avgust 2026.',time:'20:00',stadium:'Stadion Donja Sutvara',round:3,comp:'2. CFL',tv:''},
  {id:'d2-3d',home:'Rudar',away:'Budva',date:'Subota, 29. Avgust 2026.',time:'20:00',stadium:'Gradski stadion, Pljevlja',round:3,comp:'2. CFL',tv:''},
  {id:'d2-3e',home:'Iskra',away:'Zeta',date:'Subota, 29. Avgust 2026.',time:'20:00',stadium:'Stadion braće Velašević',round:3,comp:'2. CFL',tv:''},
  {id:'d2-4a',home:'Berane',away:'Zeta',date:'Subota, 5. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Berane',round:4,comp:'2. CFL',tv:''},
  {id:'d2-4b',home:'Budva',away:'Iskra',date:'Subota, 5. Septembar 2026.',time:'19:00',stadium:'Stadion Lugovi',round:4,comp:'2. CFL',tv:''},
  {id:'d2-4c',home:'Podgorica',away:'Rudar',date:'Subota, 5. Septembar 2026.',time:'19:00',stadium:'DG Arena',round:4,comp:'2. CFL',tv:''},
  {id:'d2-4d',home:'Jedinstvo Franca',away:'Grbalj',date:'Subota, 5. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Bijelo Polje',round:4,comp:'2. CFL',tv:''},
  {id:'d2-4e',home:'Lovćen',away:'Kom',date:'Subota, 5. Septembar 2026.',time:'19:00',stadium:'Stadion Obilića poljana',round:4,comp:'2. CFL',tv:''},
  {id:'d2-5a',home:'Kom',away:'Berane',date:'Subota, 12. Septembar 2026.',time:'19:00',stadium:'Stadion FK Kom',round:5,comp:'2. CFL',tv:''},
  {id:'d2-5b',home:'Grbalj',away:'Lovćen',date:'Subota, 12. Septembar 2026.',time:'19:00',stadium:'Stadion Donja Sutvara',round:5,comp:'2. CFL',tv:''},
  {id:'d2-5c',home:'Rudar',away:'Jedinstvo Franca',date:'Subota, 12. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Pljevlja',round:5,comp:'2. CFL',tv:''},
  {id:'d2-5d',home:'Iskra',away:'Podgorica',date:'Subota, 12. Septembar 2026.',time:'19:00',stadium:'Stadion braće Velašević',round:5,comp:'2. CFL',tv:''},
  {id:'d2-5e',home:'Zeta',away:'Budva',date:'Subota, 12. Septembar 2026.',time:'19:00',stadium:'Stadion Trešnjica',round:5,comp:'2. CFL',tv:''},
  {id:'d2-6a',home:'Berane',away:'Budva',date:'Srijeda, 16. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Berane',round:6,comp:'2. CFL',tv:''},
  {id:'d2-6b',home:'Podgorica',away:'Zeta',date:'Srijeda, 16. Septembar 2026.',time:'19:00',stadium:'DG Arena',round:6,comp:'2. CFL',tv:''},
  {id:'d2-6c',home:'Jedinstvo Franca',away:'Iskra',date:'Srijeda, 16. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Bijelo Polje',round:6,comp:'2. CFL',tv:''},
  {id:'d2-6d',home:'Lovćen',away:'Rudar',date:'Srijeda, 16. Septembar 2026.',time:'19:00',stadium:'Stadion Obilića poljana',round:6,comp:'2. CFL',tv:''},
  {id:'d2-6e',home:'Kom',away:'Grbalj',date:'Srijeda, 16. Septembar 2026.',time:'19:00',stadium:'Stadion FK Kom',round:6,comp:'2. CFL',tv:''},
  {id:'d2-7a',home:'Grbalj',away:'Berane',date:'Nedjelja, 20. Septembar 2026.',time:'19:00',stadium:'Stadion Donja Sutvara',round:7,comp:'2. CFL',tv:''},
  {id:'d2-7b',home:'Rudar',away:'Kom',date:'Nedjelja, 20. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Pljevlja',round:7,comp:'2. CFL',tv:''},
  {id:'d2-7c',home:'Iskra',away:'Lovćen',date:'Nedjelja, 20. Septembar 2026.',time:'19:00',stadium:'Stadion braće Velašević',round:7,comp:'2. CFL',tv:''},
  {id:'d2-7d',home:'Zeta',away:'Jedinstvo Franca',date:'Nedjelja, 20. Septembar 2026.',time:'19:00',stadium:'Stadion Trešnjica',round:7,comp:'2. CFL',tv:''},
  {id:'d2-7e',home:'Budva',away:'Podgorica',date:'Nedjelja, 20. Septembar 2026.',time:'19:00',stadium:'Stadion Lugovi',round:7,comp:'2. CFL',tv:''},
  {id:'d2-8a',home:'Berane',away:'Podgorica',date:'Subota, 26. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Berane',round:8,comp:'2. CFL',tv:''},
  {id:'d2-8b',home:'Jedinstvo Franca',away:'Budva',date:'Subota, 26. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Bijelo Polje',round:8,comp:'2. CFL',tv:''},
  {id:'d2-8c',home:'Lovćen',away:'Zeta',date:'Subota, 26. Septembar 2026.',time:'19:00',stadium:'Stadion Obilića poljana',round:8,comp:'2. CFL',tv:''},
  {id:'d2-8d',home:'Kom',away:'Iskra',date:'Subota, 26. Septembar 2026.',time:'19:00',stadium:'Stadion FK Kom',round:8,comp:'2. CFL',tv:''},
  {id:'d2-8e',home:'Grbalj',away:'Rudar',date:'Subota, 26. Septembar 2026.',time:'19:00',stadium:'Stadion Donja Sutvara',round:8,comp:'2. CFL',tv:''},
  {id:'d2-9a',home:'Rudar',away:'Berane',date:'Srijeda, 30. Septembar 2026.',time:'19:00',stadium:'Gradski stadion, Pljevlja',round:9,comp:'2. CFL',tv:''},
  {id:'d2-9b',home:'Iskra',away:'Grbalj',date:'Srijeda, 30. Septembar 2026.',time:'19:00',stadium:'Stadion braće Velašević',round:9,comp:'2. CFL',tv:''},
  {id:'d2-9c',home:'Zeta',away:'Kom',date:'Srijeda, 30. Septembar 2026.',time:'19:00',stadium:'Stadion Trešnjica',round:9,comp:'2. CFL',tv:''},
  {id:'d2-9d',home:'Budva',away:'Lovćen',date:'Srijeda, 30. Septembar 2026.',time:'19:00',stadium:'Stadion Lugovi',round:9,comp:'2. CFL',tv:''},
  {id:'d2-9e',home:'Podgorica',away:'Jedinstvo Franca',date:'Srijeda, 30. Septembar 2026.',time:'19:00',stadium:'DG Arena',round:9,comp:'2. CFL',tv:''},
  {id:'d2-10a',home:'Berane',away:'Jedinstvo Franca',date:'Nedjelja, 4. Oktobar 2026.',time:'16:00',stadium:'Gradski stadion, Berane',round:10,comp:'2. CFL',tv:''},
  {id:'d2-10b',home:'Podgorica',away:'Lovćen',date:'Nedjelja, 4. Oktobar 2026.',time:'16:00',stadium:'DG Arena',round:10,comp:'2. CFL',tv:''},
  {id:'d2-10c',home:'Budva',away:'Kom',date:'Nedjelja, 4. Oktobar 2026.',time:'16:00',stadium:'Stadion Lugovi',round:10,comp:'2. CFL',tv:''},
  {id:'d2-10d',home:'Zeta',away:'Grbalj',date:'Nedjelja, 4. Oktobar 2026.',time:'16:00',stadium:'Stadion Trešnjica',round:10,comp:'2. CFL',tv:''},
  {id:'d2-10e',home:'Iskra',away:'Rudar',date:'Nedjelja, 4. Oktobar 2026.',time:'16:00',stadium:'Stadion braće Velašević',round:10,comp:'2. CFL',tv:''},
  {id:'d2-11a',home:'Iskra',away:'Berane',date:'Nedjelja, 11. Oktobar 2026.',time:'16:00',stadium:'Stadion braće Velašević',round:11,comp:'2. CFL',tv:''},
  {id:'d2-11b',home:'Rudar',away:'Zeta',date:'Nedjelja, 11. Oktobar 2026.',time:'16:00',stadium:'Gradski stadion, Pljevlja',round:11,comp:'2. CFL',tv:''},
  {id:'d2-11c',home:'Grbalj',away:'Budva',date:'Nedjelja, 11. Oktobar 2026.',time:'16:00',stadium:'Stadion Donja Sutvara',round:11,comp:'2. CFL',tv:''},
  {id:'d2-11d',home:'Kom',away:'Podgorica',date:'Nedjelja, 11. Oktobar 2026.',time:'16:00',stadium:'Stadion FK Kom',round:11,comp:'2. CFL',tv:''},
  {id:'d2-11e',home:'Lovćen',away:'Jedinstvo Franca',date:'Nedjelja, 11. Oktobar 2026.',time:'16:00',stadium:'Stadion Obilića poljana',round:11,comp:'2. CFL',tv:''},
  {id:'d2-12a',home:'Berane',away:'Lovćen',date:'Nedjelja, 18. Oktobar 2026.',time:'16:00',stadium:'Gradski stadion, Berane',round:12,comp:'2. CFL',tv:''},
  {id:'d2-12b',home:'Jedinstvo Franca',away:'Kom',date:'Nedjelja, 18. Oktobar 2026.',time:'16:00',stadium:'Gradski stadion, Bijelo Polje',round:12,comp:'2. CFL',tv:''},
  {id:'d2-12c',home:'Podgorica',away:'Grbalj',date:'Nedjelja, 18. Oktobar 2026.',time:'16:00',stadium:'DG Arena',round:12,comp:'2. CFL',tv:''},
  {id:'d2-12d',home:'Budva',away:'Rudar',date:'Nedjelja, 18. Oktobar 2026.',time:'16:00',stadium:'Stadion Lugovi',round:12,comp:'2. CFL',tv:''},
  {id:'d2-12e',home:'Zeta',away:'Iskra',date:'Nedjelja, 18. Oktobar 2026.',time:'16:00',stadium:'Stadion Trešnjica',round:12,comp:'2. CFL',tv:''},
  {id:'d2-13a',home:'Zeta',away:'Berane',date:'Nedjelja, 25. Oktobar 2026.',time:'16:00',stadium:'Stadion Trešnjica',round:13,comp:'2. CFL',tv:''},
  {id:'d2-13b',home:'Iskra',away:'Budva',date:'Nedjelja, 25. Oktobar 2026.',time:'16:00',stadium:'Stadion braće Velašević',round:13,comp:'2. CFL',tv:''},
  {id:'d2-13c',home:'Rudar',away:'Podgorica',date:'Nedjelja, 25. Oktobar 2026.',time:'16:00',stadium:'Gradski stadion, Pljevlja',round:13,comp:'2. CFL',tv:''},
  {id:'d2-13d',home:'Grbalj',away:'Jedinstvo Franca',date:'Nedjelja, 25. Oktobar 2026.',time:'16:00',stadium:'Stadion Donja Sutvara',round:13,comp:'2. CFL',tv:''},
  {id:'d2-13e',home:'Kom',away:'Lovćen',date:'Nedjelja, 25. Oktobar 2026.',time:'16:00',stadium:'Stadion FK Kom',round:13,comp:'2. CFL',tv:''},
  {id:'d2-14a',home:'Berane',away:'Kom',date:'Subota, 31. Oktobar 2026.',time:'16:00',stadium:'Gradski stadion, Berane',round:14,comp:'2. CFL',tv:''},
  {id:'d2-14b',home:'Lovćen',away:'Grbalj',date:'Subota, 31. Oktobar 2026.',time:'16:00',stadium:'Stadion Obilića poljana',round:14,comp:'2. CFL',tv:''},
  {id:'d2-14c',home:'Jedinstvo Franca',away:'Rudar',date:'Subota, 31. Oktobar 2026.',time:'16:00',stadium:'Gradski stadion, Bijelo Polje',round:14,comp:'2. CFL',tv:''},
  {id:'d2-14d',home:'Podgorica',away:'Iskra',date:'Subota, 31. Oktobar 2026.',time:'16:00',stadium:'DG Arena',round:14,comp:'2. CFL',tv:''},
  {id:'d2-14e',home:'Budva',away:'Zeta',date:'Subota, 31. Oktobar 2026.',time:'16:00',stadium:'Stadion Lugovi',round:14,comp:'2. CFL',tv:''},
  {id:'d2-15a',home:'Budva',away:'Berane',date:'Srijeda, 4. Novembar 2026.',time:'15:00',stadium:'Stadion Lugovi',round:15,comp:'2. CFL',tv:''},
  {id:'d2-15b',home:'Zeta',away:'Podgorica',date:'Srijeda, 4. Novembar 2026.',time:'15:00',stadium:'Stadion Trešnjica',round:15,comp:'2. CFL',tv:''},
  {id:'d2-15c',home:'Iskra',away:'Jedinstvo Franca',date:'Srijeda, 4. Novembar 2026.',time:'15:00',stadium:'Stadion braće Velašević',round:15,comp:'2. CFL',tv:''},
  {id:'d2-15d',home:'Rudar',away:'Lovćen',date:'Srijeda, 4. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Pljevlja',round:15,comp:'2. CFL',tv:''},
  {id:'d2-15e',home:'Grbalj',away:'Kom',date:'Srijeda, 4. Novembar 2026.',time:'15:00',stadium:'Stadion Donja Sutvara',round:15,comp:'2. CFL',tv:''},
  {id:'d2-16a',home:'Berane',away:'Grbalj',date:'Nedjelja, 8. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Berane',round:16,comp:'2. CFL',tv:''},
  {id:'d2-16b',home:'Kom',away:'Rudar',date:'Nedjelja, 8. Novembar 2026.',time:'15:00',stadium:'Stadion FK Kom',round:16,comp:'2. CFL',tv:''},
  {id:'d2-16c',home:'Lovćen',away:'Iskra',date:'Nedjelja, 8. Novembar 2026.',time:'15:00',stadium:'Stadion Obilića poljana',round:16,comp:'2. CFL',tv:''},
  {id:'d2-16d',home:'Jedinstvo Franca',away:'Zeta',date:'Nedjelja, 8. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Bijelo Polje',round:16,comp:'2. CFL',tv:''},
  {id:'d2-16e',home:'Podgorica',away:'Budva',date:'Nedjelja, 8. Novembar 2026.',time:'15:00',stadium:'DG Arena',round:16,comp:'2. CFL',tv:''},
  {id:'d2-17a',home:'Podgorica',away:'Berane',date:'Nedjelja, 15. Novembar 2026.',time:'15:00',stadium:'DG Arena',round:17,comp:'2. CFL',tv:''},
  {id:'d2-17b',home:'Budva',away:'Jedinstvo Franca',date:'Nedjelja, 15. Novembar 2026.',time:'15:00',stadium:'Stadion Lugovi',round:17,comp:'2. CFL',tv:''},
  {id:'d2-17c',home:'Zeta',away:'Lovćen',date:'Nedjelja, 15. Novembar 2026.',time:'15:00',stadium:'Stadion Trešnjica',round:17,comp:'2. CFL',tv:''},
  {id:'d2-17d',home:'Iskra',away:'Kom',date:'Nedjelja, 15. Novembar 2026.',time:'15:00',stadium:'Stadion braće Velašević',round:17,comp:'2. CFL',tv:''},
  {id:'d2-17e',home:'Rudar',away:'Grbalj',date:'Nedjelja, 15. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Pljevlja',round:17,comp:'2. CFL',tv:''},
  {id:'d2-18a',home:'Berane',away:'Rudar',date:'Subota, 21. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Berane',round:18,comp:'2. CFL',tv:''},
  {id:'d2-18b',home:'Grbalj',away:'Iskra',date:'Subota, 21. Novembar 2026.',time:'15:00',stadium:'Stadion Donja Sutvara',round:18,comp:'2. CFL',tv:''},
  {id:'d2-18c',home:'Kom',away:'Zeta',date:'Subota, 21. Novembar 2026.',time:'15:00',stadium:'Stadion FK Kom',round:18,comp:'2. CFL',tv:''},
  {id:'d2-18d',home:'Lovćen',away:'Budva',date:'Subota, 21. Novembar 2026.',time:'15:00',stadium:'Stadion Obilića poljana',round:18,comp:'2. CFL',tv:''},
  {id:'d2-18e',home:'Jedinstvo Franca',away:'Podgorica',date:'Subota, 21. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Bijelo Polje',round:18,comp:'2. CFL',tv:''},
  {id:'d2-19a',home:'Jedinstvo Franca',away:'Berane',date:'Nedjelja, 29. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Bijelo Polje',round:19,comp:'2. CFL',tv:''},
  {id:'d2-19b',home:'Lovćen',away:'Podgorica',date:'Nedjelja, 29. Novembar 2026.',time:'15:00',stadium:'Stadion Obilića poljana',round:19,comp:'2. CFL',tv:''},
  {id:'d2-19c',home:'Kom',away:'Budva',date:'Nedjelja, 29. Novembar 2026.',time:'15:00',stadium:'Stadion FK Kom',round:19,comp:'2. CFL',tv:''},
  {id:'d2-19d',home:'Grbalj',away:'Zeta',date:'Nedjelja, 29. Novembar 2026.',time:'15:00',stadium:'Stadion Donja Sutvara',round:19,comp:'2. CFL',tv:''},
  {id:'d2-19e',home:'Rudar',away:'Iskra',date:'Nedjelja, 29. Novembar 2026.',time:'15:00',stadium:'Gradski stadion, Pljevlja',round:19,comp:'2. CFL',tv:''}
];
let results=[
  {id:'r1',home:'Petrovac',away:'Bokelj',homeScore:0,awayScore:1,date:'Subota, 1. Avgust 2026.',comp:'1. CFL',round:1},
  {id:'r2',home:'Jezero',away:'Mornar',homeScore:0,awayScore:0,date:'Nedjelja, 2. Avgust 2026.',comp:'1. CFL',round:1},
  {id:'r3',home:'Mladost DG',away:'Otrant-Olympic',homeScore:2,awayScore:1,date:'Nedjelja, 2. Avgust 2026.',comp:'1. CFL',round:1},
  {id:'r4',home:'Dečić',away:'Arsenal',homeScore:0,awayScore:0,date:'Nedjelja, 2. Avgust 2026.',comp:'1. CFL',round:1},
  {id:'r5',home:'Sutjeska',away:'Budućnost',homeScore:0,awayScore:1,date:'Ponedjeljak, 3. Avgust 2026.',comp:'1. CFL',round:1},
  {id:'r6',home:'Mornar',away:'Arsenal',homeScore:0,awayScore:0,date:'Petak, 7. Avgust 2026.',comp:'1. CFL',round:2},
  {id:'r7',home:'Budućnost',away:'Dečić',homeScore:0,awayScore:2,date:'Subota, 8. Avgust 2026.',comp:'1. CFL',round:2},
  {id:'r8',home:'Bokelj',away:'Sutjeska',homeScore:1,awayScore:0,date:'Nedjelja, 9. Avgust 2026.',comp:'1. CFL',round:2},
  {id:'r9',home:'Otrant-Olympic',away:'Petrovac',homeScore:0,awayScore:0,date:'Nedjelja, 9. Avgust 2026.',comp:'1. CFL',round:2},
  {id:'r10',home:'Jezero',away:'Mladost DG',homeScore:1,awayScore:0,date:'Nedjelja, 9. Avgust 2026.',comp:'1. CFL',round:2}
];
let liveMatches=[];

/* ========== POVLAČENJE STVARNIH VIJESTI SA rolaj-me.com ========== */
const WP_API_URL='/api/news';
const CAT_EMOJI={'REPREZENTACIJA':'🇲🇪','1. CFL':'🏆','1.CFL':'🏆','2. CFL':'⚽','2.CFL':'⚽','TRANSFERI':'🔥','KUP CG':'🏅','KUP CRNE GORE':'🏅'};
function timeAgo(dateStr){
  const diffMs=Date.now()-new Date(dateStr).getTime();
  const min=Math.floor(diffMs/60000);
  if(min<1)return'Upravo sada';
  if(min<60)return'Prije '+min+' minuta';
  const h=Math.floor(min/60);
  if(h<24)return'Prije '+h+' sat'+(h===1?'':'a');
  const d=Math.floor(h/24);
  return'Prije '+d+' dan'+(d===1?'':'a');
}
function newsThumb(n){
  return n.image
    ?'<div class="news-thumb" style="background-image:url(\''+n.image+'\');background-size:cover;background-position:center"></div>'
    :'<div class="news-thumb">'+n.emoji+'</div>';
}
async function loadRealNews(){
  try{
    const res=await fetch(WP_API_URL);
    if(!res.ok)throw new Error('WP API nedostupan');
    const posts=await res.json();
    if(!Array.isArray(posts)||posts.length===0)return;
    news=posts.map(p=>({
      id:p.id,
      title:p.title,
      category:p.category,
      emoji:p.emoji,
      image:p.image,
      content:p.content,
      time:timeAgo(p.date),
      readTime:p.readTime,
      link:p.link
    }));
    renderHero();renderNewsList();renderStories();renderNewsFull(currentNewsCategory);
  }catch(e){console.log('Vijesti: koristim fallback podatke —',e.message)}
}
const TEAM_LOGOS={
  'Dečić':'https://fscg.me/files/images_comet/2d/6/_resized/2d6c6ae3c31b6543fdefaf6662a9d9c4814059a3_150_150_withoutgrow.png',
  'Bokelj':'https://fscg.me/files/images_comet/Club/_resized/40068_2008964861_150_150_withoutgrow.png',
  'Mladost DG':'https://fscg.me/files/images_comet/Club/_resized/49984_1ba8d420-0420-4f72-998b-065d6aa56fdc_150_150_withoutgrow.png',
  'Budućnost':'https://fscg.me/files/images_comet/Club/_resized/40063_e39cadc0-5ef6-4b73-b8ef-d4c4e17c24e7_150_150_withoutgrow.png',
  'Arsenal':'https://fscg.me/files/images_comet/Club/_resized/40074_3d97e704-8af0-4b5e-a2aa-323f09a758e5_150_150_withoutgrow.png',
  'Mornar':'https://fscg.me/files/images_comet/Club/_resized/40052_-1631605193_150_150_withoutgrow.png',
  'Jezero':'https://fscg.me/files/images_comet/Club/_resized/40064_233b0684-f8fd-44ab-8772-41e41ca62cfa_150_150_withoutgrow.png',
  'Otrant-Olympic':'https://fscg.me/files/images_comet/Club/_resized/48012_-1631662978_150_150_withoutgrow.png',
  'Petrovac':'https://fscg.me/files/images_comet/Club/40059_1365087002835.png',
  'Sutjeska':'https://fscg.me/files/images_comet/Club/_resized/40054_963413208_150_150_withoutgrow.png',
  'Grbalj':'https://fscg.me/files/images_comet/Club/40055_1365086827776.png',
  'Rudar':'https://fscg.me/files/images_comet/Club/40065_1365087400013.png',
  'Zeta':'https://fscg.me/files/images_comet/Club/_resized/40067_-1696592210_150_150_withoutgrow.png',
  'Jedinstvo Franca':'https://fscg.me/files/images_comet/Club/40053_1365086657360.png',
  'Iskra':'https://fscg.me/files/images_comet/Club/_resized/40062_-1631626293_150_150_withoutgrow.png',
  'Lovćen':'https://fscg.me/files/images_comet/Club/40051_1365086534028.png',
  'Kom':'https://fscg.me/files/images_comet/Club/_resized/40212_-1628727475_150_150_withoutgrow.png',
  'Budva':'https://fscg.me/files/images_comet/a1/c/_resized/a1c809c6f37258e5188e3eff099bad42ef204b9c_150_150_withoutgrow.png',
  'Berane':'https://fscg.me/files/images_comet/Club/40069_1365087799303.png',
  'Podgorica':'https://fscg.me/files/images_comet/Club/_resized/49939_6c233b5b-193f-4412-a5dd-e3de716476f8_150_150_withoutgrow.png'
};
function teamLogoImg(name){return TEAM_LOGOS[name]?'<img src="'+TEAM_LOGOS[name]+'" alt="'+name+'" style="width:100%;height:100%;object-fit:contain;border-radius:50%">':name.charAt(0)}

const CAT_LIST=[
  {key:'1cfl',label:'Meridianbet 1.CFL',emoji:'🏆',gradient:'linear-gradient(135deg,#e11d48,#9f1239)',icon:'🏆'},
  {key:'2cfl',label:'Meridianbet 2.CFL',emoji:'⚽',gradient:'linear-gradient(135deg,#fbbf24,#b45309)',icon:'⚽'},
  {key:'transferi',label:'Transferi',emoji:'🔥',gradient:'linear-gradient(135deg,#f43f5e,#e11d48)',icon:'🔥'},
  {key:'repr',label:'Reprezentacija',emoji:'🇲🇪',gradient:'linear-gradient(135deg,#e11d48,#7f1d1d)',icon:'⭐'},
  {key:'kup',label:'Kup Crne Gore',emoji:'🏆',gradient:'linear-gradient(135deg,#fbbf24,#b45309)',icon:'🏅'}
];

function catMatches(newsCategory,key){
  const cat=CAT_LIST.find(c=>c.key===key);
  if(!cat)return false;
  const norm=s=>(s||'').replace(/\s+/g,'').toUpperCase();
  const catNorm=norm(cat.label.replace('Meridianbet',''));
  return norm(newsCategory).includes(catNorm)||(key==='kup'&&norm(newsCategory).includes('KUP'));
}

/* STVARNI PODACI, IZVOR: FSCG, 9. avgust 2026. */
const standingsData={
  '1cfl':[
    {pos:1,team:'Bokelj',ou:2,p:2,n:0,i:0,dg:2,pg:0,gr:2,b:6,form:['W','W']},
    {pos:2,team:'Dečić',ou:2,p:1,n:1,i:0,dg:2,pg:0,gr:2,b:4,form:['W','D']},
    {pos:3,team:'Jezero',ou:2,p:1,n:1,i:0,dg:1,pg:0,gr:1,b:4,form:['D','W']},
    {pos:4,team:'Mladost DG',ou:2,p:1,n:0,i:1,dg:2,pg:2,gr:0,b:3,form:['W','L']},
    {pos:5,team:'Budućnost',ou:2,p:1,n:0,i:1,dg:1,pg:2,gr:-1,b:3,form:['W','L']},
    {pos:6,team:'Arsenal',ou:2,p:0,n:2,i:0,dg:0,pg:0,gr:0,b:2,form:['D','D']},
    {pos:7,team:'Mornar',ou:2,p:0,n:2,i:0,dg:0,pg:0,gr:0,b:2,form:['D','D']},
    {pos:8,team:'Otrant-Olympic',ou:2,p:0,n:1,i:1,dg:1,pg:2,gr:-1,b:1,form:['L','D']},
    {pos:9,team:'Petrovac',ou:2,p:0,n:1,i:1,dg:0,pg:1,gr:-1,b:1,form:['L','D']},
    {pos:10,team:'Sutjeska',ou:2,p:0,n:0,i:2,dg:0,pg:2,gr:-2,b:0,form:['L','L']}
  ],
  '2cfl':[
    {pos:1,team:'Berane',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:2,team:'Budva',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:3,team:'Grbalj',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:4,team:'Iskra',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:5,team:'Jedinstvo Franca',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:6,team:'Kom',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:7,team:'Lovćen',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:8,team:'Podgorica',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:9,team:'Rudar',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]},
    {pos:10,team:'Zeta',ou:0,p:0,n:0,i:0,dg:0,pg:0,gr:0,b:0,form:[]}
  ]
};
const STANDINGS_NOTES={
  '1cfl':'',
  '2cfl':'Sezona Meridianbet 2. CFL počinje 15. avgusta 2026. — tabela je trenutno abecedna, još nema odigranih utakmica.'
};

function safeGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function safeSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
let savedArticles=JSON.parse(safeGet('rolajme_saved')||'[]');
let likedArticles=JSON.parse(safeGet('rolajme_liked')||'[]');
/* ========== SUPABASE AUTH / NALOG ========== */
const SUPABASE_URL='https://wzjtqxesypnhmafbseci.supabase.co';
const SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6anRxeGVzeXBuaG1hZmJzZWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxNzM3NDMsImV4cCI6MjEwMTc0OTc0M30.EBFrWxfIqU4k91vnL6tWL2i26HVCvLe5AaTO5Ibg1RU';
let sb=null;
try{
  if(window.supabase&&window.supabase.createClient){
    sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
  }
}catch(e){console.log('Supabase init greška:',e.message)}
let currentAuthTab='signup';
let currentUser=null;

let favClubs=JSON.parse(safeGet('rolajme_fav_clubs')||'[]');
let favPlayers=JSON.parse(safeGet('rolajme_fav_players')||'[]');

let currentScreen='home';
let currentStandingsLeague='1cfl';
let currentNewsCategory='all';
let currentMatchTab='schedule';
let currentMatchLeague='1cfl';
let currentArticleId=null;
let isDark=false;

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded',async()=>{
  initNavigation();
  initLeagueChips();
  initStandingsLeagueChips();
  initNewsCategories();
  initMatchTabs();
  initDetailTabs();
  initOffline();
  initPullToRefresh();
  renderLiveTicker();
  renderNewsLoadingSkeleton();
  renderMiniTable();
  renderQuickStats();
  renderStandings('1cfl');
  renderMatches('schedule');
  renderProfileStats();
  restoreNotifToggles();
  renderTopScorers();
  renderHomeClubPicker();
  checkAuthSession();
  const minSplash=new Promise(r=>setTimeout(r,900)); // da splash ne "trepne" i na brzim konekcijama
  const maxWait=new Promise(r=>setTimeout(r,9000)); // ne cekamo vjecno ako je sajt spor/ne radi
  const sub=document.getElementById('splashSub');
  const result=await Promise.race([Promise.all([loadRealNews(),minSplash]).then(()=>'ok'),maxWait.then(()=>'timeout')]);
  if(sub)sub.textContent=result==='ok'?'Spremno!':'Prikazujem dostupne vijesti...';
  renderHero();renderStories();renderNewsList('1cfl');renderNewsFull('all');
  console.log('ROLaj ME v2 — status pri pokretanju:',result);
  document.getElementById('splash').classList.add('hidden');
  checkArticleLinkFromUrl();
});

/* ========== NAVIGATION ========== */
function initNavigation(){
  document.querySelectorAll('.nav-item').forEach(item=>{
    item.addEventListener('click',()=>{
      const screen=item.dataset.screen;
      if(!document.getElementById('screen-'+screen))return;
      document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
      document.getElementById('screen-'+screen).classList.add('active');
      document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
      item.classList.add('active');
      currentScreen=screen;
      const sa=document.querySelector('#screen-'+screen+' .scroll-area');
      if(sa)sa.scrollTop=0;
      if(screen==='more')renderProfileStats();
      if(screen==='matches')renderMatches(currentMatchTab);
    });
  });
}
/* ========== ADMIN PRISTUP (AI izvještaj — samo za Marka) ========== */
function checkAdminAccess(){
  const stored=localStorage.getItem('rolajme_admin_token');
  if(stored)return true;
  const entered=prompt('Ovaj alat je samo za administratora. Unesi lozinku:');
  if(entered===null)return false;
  if(!entered.trim()){alert('Pogrešna lozinka.');return false;}
  localStorage.setItem('rolajme_admin_token',entered.trim());
  return true;
}
function navTo(screen){
  if(screen==='ai-report'&&!checkAdminAccess())return;
  const target=document.getElementById('screen-'+screen);
  if(!target)return;
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const nav=document.querySelector('.nav-item[data-screen="'+screen+'"]');
  if(nav)nav.classList.add('active');
  if(['home','matches','standings','news','more'].includes(screen))currentScreen=screen;
  if(screen==='more')renderProfileStats();
  if(screen==='matches')renderMatches(currentMatchTab);
  if(screen==='fav-clubs')renderClubsList();
  if(screen==='fav-players')renderPlayersList('');
}

/* ========== LEAGUE CHIPS ========== */
function initLeagueChips(){
  document.querySelectorAll('.league-bar').forEach(bar=>{
    bar.addEventListener('click',e=>{
      const chip=e.target.closest('.chip');
      if(!chip)return;
      bar.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      if(bar.id==='homeLeagueBar'&&chip.dataset.league){
        renderNewsList(chip.dataset.league);
      }
      if(bar.id==='matchesLeagueBar'&&chip.dataset.league){
        currentMatchLeague=chip.dataset.league;
        renderMatches(currentMatchTab);
      }
    });
  });
}
function initStandingsLeagueChips(){
  const bar=document.getElementById('standingsLeagueBar');
  if(!bar)return;
  bar.addEventListener('click',e=>{
    const chip=e.target.closest('.chip');
    if(!chip)return;
    bar.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentStandingsLeague=chip.dataset.league;
    renderStandings(currentStandingsLeague);
  });
}

/* ========== NEWS CATEGORIES / SEARCH ========== */
function initNewsCategories(){
  const bar=document.getElementById('newsCategoryBar');
  if(!bar)return;
  bar.addEventListener('click',e=>{
    const chip=e.target.closest('.chip');
    if(!chip)return;
    bar.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentNewsCategory=chip.dataset.cat;
    renderNewsFull(currentNewsCategory);
  });
}
function toggleSearch(){
  const wrap=document.getElementById('searchWrap');
  const input=document.getElementById('searchInput');
  if(wrap.style.display==='none'){wrap.style.display='block';setTimeout(()=>input.focus(),100);}
  else{closeSearch();}
}
function closeSearch(){
  document.getElementById('searchWrap').style.display='none';
  document.getElementById('searchInput').value='';
  renderNewsFull(currentNewsCategory);
}
function filterNewsSearch(query){
  const q=query.toLowerCase().trim();
  if(!q){renderNewsFull(currentNewsCategory);return}
  const filtered=news.filter(n=>n.title.toLowerCase().includes(q)||n.category.toLowerCase().includes(q));
  renderNewsFiltered(filtered);
}

/* ========== THEME / SETTINGS ========== */
function toggleTheme(){
  isDark=!isDark;
  if(isDark){document.documentElement.removeAttribute('data-theme');}
  else{document.documentElement.setAttribute('data-theme','light');}
  const tgl=document.getElementById('themeToggle');
  if(tgl)tgl.classList.toggle('on',isDark);
}
function toggleSetting(row){
  const toggle=row.querySelector('.toggle');
  if(toggle)toggle.classList.toggle('on');
}
function restoreNotifToggles(){
  try{
    const saved=JSON.parse(safeGet('rolajme_notif_segments')||'null');
    if(saved){
      document.querySelectorAll('.toggle[data-segment]').forEach(t=>{
        t.classList.toggle('on',saved.includes(t.dataset.segment));
      });
      const anyOn=saved.length>0;
      const allToggle=document.getElementById('notifAllToggle');
      if(allToggle)allToggle.classList.toggle('on',anyOn);
    }
  }catch(e){}
  if(typeof webpushr!=='undefined'){
    try{webpushr('seg',getActiveSegments())}catch(e){}
  }
}
function getActiveSegments(){
  return Array.from(document.querySelectorAll('.toggle[data-segment]'))
    .filter(t=>t.classList.contains('on'))
    .map(t=>t.dataset.segment);
}
function syncWebpushrSegments(){
  const segs=getActiveSegments();
  safeSet('rolajme_notif_segments',JSON.stringify(segs));
  if(typeof webpushr!=='undefined'){
    try{webpushr('seg',segs)}catch(e){console.log('Webpushr seg greška:',e.message)}
  }
}
function toggleNotifSegment(row,segment){
  const toggle=row.querySelector('.toggle');
  if(!toggle)return;
  toggle.classList.toggle('on');
  syncWebpushrSegments();
  const anyOn=document.querySelectorAll('.toggle[data-segment].on').length>0;
  const allToggle=document.getElementById('notifAllToggle');
  if(allToggle)allToggle.classList.toggle('on',anyOn);
}
function toggleAllNotifications(row){
  const allToggle=row.querySelector('.toggle');
  if(!allToggle)return;
  const turningOn=!allToggle.classList.contains('on');
  allToggle.classList.toggle('on',turningOn);
  document.querySelectorAll('.toggle[data-segment]').forEach(t=>t.classList.toggle('on',turningOn));
  syncWebpushrSegments();
}
function shareApp(){
  if(navigator.share){navigator.share({title:'ROLaj ME',text:'Sve o crnogorskom fudbalu na jednom mjestu.'}).catch(()=>{})}
}
function renderProfileStats(){
  const saved=document.getElementById('statSaved');
  const clubs=document.getElementById('statClubs');
  const players=document.getElementById('statPlayers');
  if(saved)saved.textContent=savedArticles.length;
  if(clubs)clubs.textContent=favClubs.length;
  if(players)players.textContent=favPlayers.length;
  const favClubsVal=document.getElementById('favClubsVal');
  if(favClubsVal)favClubsVal.innerHTML=favClubs.length+' klub'+(favClubs.length===1?'':'ova')+' <span class="setting-arrow">▸</span>';
  const savedNewsVal=document.getElementById('savedNewsVal');
  if(savedNewsVal)savedNewsVal.innerHTML=savedArticles.length+' vijest'+(savedArticles.length===1?'':'i')+' <span class="setting-arrow">▸</span>';
  const favPlayersVal=document.getElementById('favPlayersVal');
  if(favPlayersVal)favPlayersVal.innerHTML=favPlayers.length+' igra'+(favPlayers.length===1?'č':'ča')+' <span class="setting-arrow">▸</span>';
  renderAccountCard();
}

/* ========== AUTH FUNKCIJE ========== */
function switchAuthTab(tab){
  currentAuthTab=tab;
  document.querySelectorAll('.auth-tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.authtab===tab));
  document.getElementById('authHeaderTitle').textContent=tab==='signup'?'Registracija':'Prijava';
  document.getElementById('authSubmitBtn').textContent=tab==='signup'?'Registruj se':'Prijavi se';
  showAuthMsg('');
}
function showAuthMsg(text,type){
  const el=document.getElementById('authMsg');
  if(!el)return;
  if(!text){el.classList.remove('show','error','success');el.textContent='';return}
  el.textContent=text;
  el.className='auth-msg show '+(type||'');
}
async function submitAuth(){
  const email=document.getElementById('authEmail').value.trim();
  const password=document.getElementById('authPassword').value;
  if(!email||!password){showAuthMsg('Unesi e-mail i lozinku.','error');return}
  if(!sb){showAuthMsg('Nalog trenutno nije dostupan (provjeri konekciju).','error');return}
  showAuthMsg('Molim sačekaj...','');
  try{
    if(currentAuthTab==='signup'){
      const{data,error}=await sb.auth.signUp({email,password});
      if(error)throw error;
      showAuthMsg('Uspješna registracija! Provjeri e-mail za potvrdu (ako je uključena), zatim se prijavi.','success');
    }else{
      const{data,error}=await sb.auth.signInWithPassword({email,password});
      if(error)throw error;
      showAuthMsg('Uspješna prijava!','success');
      currentUser=data.user;
      await syncFavoritesFromRemote();
      setTimeout(()=>navTo('more'),600);
    }
  }catch(e){
    showAuthMsg(e.message||'Greška, pokušaj ponovo.','error');
  }
}
async function logoutUser(){
  if(sb)await sb.auth.signOut();
  currentUser=null;
  renderAccountCard();
}
async function checkAuthSession(){
  if(!sb)return;
  try{
    const{data}=await sb.auth.getSession();
    if(data&&data.session&&data.session.user){
      currentUser=data.session.user;
      await syncFavoritesFromRemote();
    }
  }catch(e){console.log('Sesija greška:',e.message)}
  renderAccountCard();
}
function renderAccountCard(){
  const c=document.getElementById('accountCard');
  if(!c)return;
  if(currentUser){
    c.innerHTML=`<div class="logged-in-card">
      <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--gold));display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">👤</div>
      <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${currentUser.email}</div><div style="font-size:11px;color:var(--text-tertiary)">Prijavljen</div></div>
      <button class="match-btn" style="flex:0 0 auto;padding:8px 14px" onclick="logoutUser()">Odjavi se</button>
    </div>`;
  }else{
    c.innerHTML=`<div class="settings-group"><div class="setting-row" onclick="navTo('auth')">
      <div class="setting-left"><div class="setting-icon">👤</div><div class="setting-title">Registruj se / Prijavi se</div></div>
      <div class="setting-arrow">▸</div>
    </div></div>`;
  }
}
async function syncFavoritesFromRemote(){
  if(!sb||!currentUser)return;
  try{
    const{data,error}=await sb.from('user_favorites').select('*').eq('user_id',currentUser.id).maybeSingle();
    if(error)throw error;
    if(data){
      favClubs=data.fav_clubs||[];
      favPlayers=data.fav_players||[];
      savedArticles=data.saved_articles||[];
    }else{
      await sb.from('user_favorites').insert({user_id:currentUser.id,fav_clubs:favClubs,fav_players:favPlayers,saved_articles:savedArticles});
    }
    safeSet('rolajme_fav_clubs',JSON.stringify(favClubs));
    safeSet('rolajme_fav_players',JSON.stringify(favPlayers));
    safeSet('rolajme_saved',JSON.stringify(savedArticles));
    renderProfileStats();
  }catch(e){console.log('Sync greška:',e.message)}
}
async function pushFavoritesToRemote(){
  if(!sb||!currentUser)return;
  try{
    await sb.from('user_favorites').upsert({user_id:currentUser.id,fav_clubs:favClubs,fav_players:favPlayers,saved_articles:savedArticles,updated_at:new Date().toISOString()});
  }catch(e){console.log('Push greška:',e.message)}
}

/* ========== KLUBOVI I IGRAČI ========== */
const PLAYERS=[
{name:'Radoš Dubljević',club:'Mornar',pos:'GK',photo:'https://fscg.me/files/images_comet/bf/5/_resized/bf5859f72b8cfb37ce428dda14270a8e8c99ae30_38_40_cut.png'},
{name:'Benjamin Krijestarac',club:'Mornar',pos:'GK',photo:'https://fscg.me/files/images_comet/63/e/_resized/63ef4188874b093bb5d8be82151162f737130e3b_38_40_cut.png'},
{name:'Stefan Popović',club:'Mornar',pos:'GK',photo:'https://fscg.me/files/images_comet/9b/c/_resized/9bcde15ad61ff41ee63ebb895994e7e1517328c3_38_40_cut.png'},
{name:'Vasilije Stojanović',club:'Mornar',pos:'GK',photo:'https://fscg.me/files/images_comet/05/3/_resized/0537a201471ddd72038b222cd8d7111979769e2d_38_40_cut.png'},
{name:'Jovan Baošić',club:'Mornar',pos:'DEF',photo:'https://fscg.me/files/images_comet/28/b/_resized/28b211083822b01035c53487351eb036543ce1cd_38_40_cut.png'},
{name:'Damjan Dakić',club:'Mornar',pos:'DEF',photo:'https://fscg.me/files/images_comet/c2/e/_resized/c2ecb4ac845fa29f3c6ad4a861762184a5ff1c0b_38_40_cut.png'},
{name:'Ilija Martinović',club:'Mornar',pos:'DEF',photo:'https://fscg.me/files/images_comet/5d/7/_resized/5d715460fb9a73677a0fdf9107e2a45f026a8312_38_40_cut.png'},
{name:'Filip Mitrović',club:'Mornar',pos:'DEF',photo:'https://fscg.me/files/images_comet/26/7/_resized/2672c703087c8d0f1fc22192b2f70f63520e737b_38_40_cut.png'},
{name:'Nikola Stijepović',club:'Mornar',pos:'DEF',photo:'https://fscg.me/files/images_comet/24/3/_resized/243239ca7bdb254c59879766873b538141d333cf_38_40_cut.png'},
{name:'Jovan Dašić',club:'Mornar',pos:'MID',photo:'https://fscg.me/files/images_comet/2c/1/_resized/2c189181b17077327294f0768f8a93dba0a7ad96_38_40_cut.png'},
{name:'Vukas Dragović',club:'Mornar',pos:'MID',photo:'https://fscg.me/files/images_comet/3c/9/_resized/3c9ec25637f830ae994a4254ce76f12d7ba5ba90_38_40_cut.png'},
{name:'Andrija Kaluđerović',club:'Mornar',pos:'MID',photo:'https://fscg.me/files/images_comet/11/e/_resized/11e0543e6ea2b115c803a67af84c5101c5b73366_38_40_cut.png'},
{name:'Velimir Ljutica',club:'Mornar',pos:'MID',photo:'https://fscg.me/files/images_comet/Person/_resized/115908_-2122117481_38_40_cut.jpg'},
{name:'Demir Škrijelj',club:'Mornar',pos:'MID',photo:'https://fscg.me/files/images_comet/a2/d/_resized/a2d9c87124a2d3c7c044c730b3823d1958bd37cc_38_40_cut.png'},
{name:'Petar Vukčević',club:'Mornar',pos:'MID',photo:'https://fscg.me/files/images_comet/2d/4/_resized/2d4b34f5d46bab1ebbfc3dedd2fecce6e5ad20a5_38_40_cut.png'},
{name:'Darko Zorić',club:'Mornar',pos:'MID',photo:'https://fscg.me/files/images_comet/53/9/_resized/5399755ef82cabff4de1058853b17d7a5a845bcc_38_40_cut.png'},
{name:'Stefan Denković',club:'Mornar',pos:'FWD',photo:'https://fscg.me/files/images_comet/03/6/_resized/03670146c4b1918f02f635583105c54e297509d2_38_40_cut.png'},
{name:'Balša Dubljević',club:'Mornar',pos:'FWD',photo:'https://fscg.me/files/images_comet/85/a/_resized/85a2e54a13cd3db6438940d0533566feceb5b828_38_40_cut.png'},
{name:'Bogich Milošević',club:'Mornar',pos:'FWD',photo:'https://fscg.me/files/images_comet/e7/0/_resized/e70dfa6b02b0eb5a84f5e5c2e9bfbe2a21012cff_38_40_cut.png'},
{name:'Matija Rovčanin',club:'Mornar',pos:'FWD',photo:'https://fscg.me/files/images_comet/95/e/_resized/95e5407479a93a8eaf9285f06233b318af682c81_38_40_cut.png'},
{name:'Nikola Vujnović',club:'Mornar',pos:'FWD',photo:'https://fscg.me/files/images_comet/02/7/_resized/0272715ed4bf999f47954b934212b1db6c4fce76_38_40_cut.png'},
{name:'Lazar Zlatičanin',club:'Mornar',pos:'FWD',photo:'https://fscg.me/files/images_comet/00/5/_resized/00599441b89c05d19a92069c1599c2c5b90419d8_38_40_cut.png'},
{name:'Mitar Ćuković',club:'Mornar',pos:'PL',photo:'https://fscg.me/files/images_comet/76/6/_resized/766d9cbbcb5408902ce21bc75db41cb78a412c56_38_40_cut.png'},
{name:'Marko Đurišić',club:'Mornar',pos:'PL',photo:'https://fscg.me/files/images_comet/4f/d/_resized/4fd6cb89d068ddcfd259c81a5046be171bc53f0f_38_40_cut.png'},
{name:'Elmin Hajdarpašić',club:'Mornar',pos:'PL',photo:'https://fscg.me/files/images_comet/7a/7/_resized/7a756d74a67f1c5b9d9d4e9d5a0caf7b615d8f41_38_40_cut.png'},
{name:'Abderahmane Soussi',club:'Mornar',pos:'PL',photo:'https://fscg.me/files/images_comet/2f/3/_resized/2f3b3885b9240b74dfa96b80124a511504579f03_38_40_cut.png'},
{name:'Yann Michael Yao',club:'Mornar',pos:'PL',photo:'https://fscg.me/files/images_comet/9b/9/_resized/9b93297395ebc5f3e3dfa74c3ee3bdb368b9af39_38_40_cut.png'},
{name:'Dragan Ćetković',club:'Bokelj',pos:'GK',photo:'https://fscg.me/files/images_comet/d1/8/_resized/d181ce73468de23e0cbe5d49cf6a2f07dbb289cb_38_40_cut.png'},
{name:'Stojan Vukčević',club:'Bokelj',pos:'GK',photo:'https://fscg.me/files/images_comet/8e/0/_resized/8e0385c1641468ce891dcc9fcae50946c98eb505_38_40_cut.png'},
{name:'Balša Ćetković',club:'Bokelj',pos:'DEF',photo:'https://fscg.me/files/images_comet/6f/4/_resized/6f4a7f0a783b00e4016a685dd7b0b4c7d234c42c_38_40_cut.png'},
{name:'Nemanja Đurović',club:'Bokelj',pos:'DEF',photo:'https://fscg.me/files/images_comet/a6/a/_resized/a6adb12ff5f6db0d92136d1dd64b2fa25737461f_38_40_cut.png'},
{name:'Andrej Kumburović',club:'Bokelj',pos:'DEF',photo:'https://fscg.me/files/images_comet/0b/9/_resized/0b980cde2b7f7f38ac7ce7cf31f8fa5a705b22a7_38_40_cut.jpg'},
{name:'Stefan Mršulja',club:'Bokelj',pos:'DEF',photo:'https://fscg.me/files/images_comet/f3/3/_resized/f332f81091b1827d632cb6fd5c28b4c33d6568d5_38_40_cut.jpg'},
{name:'Viktor Bubanja',club:'Bokelj',pos:'MID',photo:'https://fscg.me/files/images_comet/45/2/_resized/452c89f0f3a0909b4a11ff55c009fd910efcabe6_38_40_cut.png'},
{name:'Marko Čavor',club:'Bokelj',pos:'MID',photo:'https://fscg.me/files/images_comet/Person/_resized/101085_e8b112b2-307f-4080-874b-3963208997f2_38_40_cut.jpg'},
{name:'Matija Kuč',club:'Bokelj',pos:'MID',photo:'https://fscg.me/files/images_comet/b0/b/_resized/b0b0c699e763d74add21d0142996a852485193e4_38_40_cut.png'},
{name:'Fatih Muković',club:'Bokelj',pos:'MID',photo:'https://fscg.me/files/images_comet/Person/_resized/113626_2112889444_38_40_cut.jpg'},
{name:'Igor Poček',club:'Bokelj',pos:'MID',photo:'https://fscg.me/files/images_comet/8f/f/_resized/8ff9c55c0337a28bc4aa51ae7fb6a3d79d1aa701_38_40_cut.png'},
{name:'Nikola Radusinović',club:'Bokelj',pos:'MID',photo:'https://fscg.me/files/images_comet/d4/0/_resized/d40072037fecd9c905dc40afd20e39b804278d01_38_40_cut.png'},
{name:'Boban Đorđević',club:'Bokelj',pos:'FWD',photo:'https://fscg.me/files/images_comet/5e/b/_resized/5ebba88033bd670ed8450d882336546ae9c985fe_38_40_cut.png'},
{name:'Andrija Krivokapić',club:'Bokelj',pos:'FWD',photo:'https://fscg.me/files/images_comet/28/5/_resized/2852ab14b7613be82224184824f43b449e6b26c6_38_40_cut.png'},
{name:'Luka Maraš',club:'Bokelj',pos:'FWD',photo:'https://fscg.me/files/images_comet/f1/e/_resized/f1eb4a1adffc624cb563e25fa20a99a9c8cee961_38_40_cut.png'},
{name:'Dejan Perović',club:'Bokelj',pos:'FWD',photo:'https://fscg.me/files/images_comet/76/9/_resized/7690e308e57a2b6eaaaba8f2a2308bb7eafd79d5_38_40_cut.png'},
{name:'Danin Talović',club:'Bokelj',pos:'FWD',photo:'https://fscg.me/files/images_comet/0f/f/_resized/0ff9a3a48716a5e0909769108ff08e3f38e198ec_38_40_cut.png'},
{name:'Victor Hugo Coelho Vieira',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/b7/9/_resized/b799fedcda6f63a71ef078a8b8c6e861bf3eb6ad_38_40_cut.png'},
{name:'Dominik Dinga',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/bc/f/_resized/bcff0f588ff6317df8c456f4ed11a7649328f255_38_40_cut.png'},
{name:'Matheus Marcondele',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/e9/0/_resized/e9066d1c69108737513b88cf826f572a1d2a7f36_38_40_cut.png'},
{name:'Baba Musah Alhassan',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/47/e/_resized/47e3200eedd8940532918821a1ddc160168bb57a_38_40_cut.jpg'},
{name:'Nikola Nikaljević',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/0f/e/_resized/0fe0e4cb4fd1654def58326f170246bd7ae49de8_38_40_cut.jpg'},
{name:'Bakir Nurković',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/d5/b/_resized/d5ba9038e5b84bebe3e78062ccaba0760892a5bd_38_40_cut.png'},
{name:'Balša Radević',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/43/3/_resized/4336f4d8e60929111484cafd5ba6704a52d816a5_38_40_cut.png'},
{name:'Stefan Vico',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/7b/f/_resized/7bf8e32ed730f319165c2b052ad4b60d6e1f60c6_38_40_cut.png'},
{name:'Petar Žugić',club:'Bokelj',pos:'PL',photo:'https://fscg.me/files/images_comet/0d/1/_resized/0d1d5c59fb02c49b24f7e9a650b10934e6fb86f8_38_40_cut.png'},
{name:'Filip Domazetović',club:'Budućnost',pos:'GK',photo:'https://fscg.me/files/images_comet/d7/5/_resized/d754f2cedf4b03e2b2ae2609a04a9774d1cfc071_38_40_cut.png'},
{name:'Milan Mijatović',club:'Budućnost',pos:'GK',photo:'https://fscg.me/files/images_comet/Person/_resized/106744_1918936960_38_40_cut.jpg'},
{name:'Simon Sošić',club:'Budućnost',pos:'GK',photo:'https://fscg.me/files/images_comet/a8/b/_resized/a8b881e7d00930eaded316b979a325a6ea8b20da_38_40_cut.png'},
{name:'Matija Jovanović',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/49/7/_resized/497f34bff7bbe691b78e48300498b5ab9b5798bb_38_40_cut.png'},
{name:'Miloš Milović',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/87/0/_resized/8703edc868cbb5fd76f656e881b4d7451af0d34d_38_40_cut.png'},
{name:'Zarija Mugoša',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/3c/b/_resized/3cbe474d1d0c393ae4883ace52b53b2159dbe909_38_40_cut.png'},
{name:'Adnan Orahovac',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/a6/8/_resized/a688b74715ab1bd1cdae042652b654c92f574f69_38_40_cut.png'},
{name:'Lazar Popović',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/8f/9/_resized/8f9d9a65f672b7809d62d9b56d19c57b3a33206d_38_40_cut.png'},
{name:'Andrej Pupović',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/c2/b/_resized/c2b21f8a862e09d8de1e26df7ccdddc966bc97e1_38_40_cut.png'},
{name:'Momčilo Raspopović',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/c7/0/_resized/c703327ef3e5354960717df5ad5c7659881a3b62_38_40_cut.png'},
{name:'Marko Šćepanović',club:'Budućnost',pos:'DEF',photo:'https://fscg.me/files/images_comet/36/3/_resized/36392317efd0a1bcad097e3809aa5748dc599559_38_40_cut.png'},
{name:'Luka Brajović',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/de/4/_resized/de4362cb2036e2b9dc840afcc5ea6e4c3d202396_38_40_cut.png'},
{name:'Andrej Camaj',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/11/5/_resized/115e868ec50a64c3ec1d1d401c970106d7018d23_38_40_cut.png'},
{name:'Stefan Đukanović',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/02/b/_resized/02b8f05891e20ce69de2100b7493cf59f859eaee_38_40_cut.png'},
{name:'Miomir Đuričković',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/47/7/_resized/4773449313785a96af602d52bf221e2ada719583_38_40_cut.png'},
{name:'Stefan Radojević',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/44/a/_resized/44a80ab60c8af743cd0c648b8a99f3e5369cb75f_38_40_cut.png'},
{name:'Matija Rakčević',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/fb/c/_resized/fbc789fa99eb96895a67b2d92afdf576b2d19316_38_40_cut.png'},
{name:'Petar Vujović',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/e3/1/_resized/e31413bbd38c3a4031ddd36e2f64dd001ec52688_38_40_cut.png'},
{name:'Danilo Vukanić',club:'Budućnost',pos:'MID',photo:'https://fscg.me/files/images_comet/94/8/_resized/9488ff6830e67df6ccfe2f854f0034a357f48917_38_40_cut.jpg'},
{name:'Milan Vušurović',club:'Budućnost',pos:'MID',photo:null},
{name:'Ivan Bojović',club:'Budućnost',pos:'FWD',photo:'https://fscg.me/files/images_comet/e9/d/_resized/e9d0b2f5a692306ee93a280ae5576afb3758b468_38_40_cut.png'},
{name:'Ivan Bulatović',club:'Budućnost',pos:'FWD',photo:null},
{name:'Igor Ivanović',club:'Budućnost',pos:'FWD',photo:'https://fscg.me/files/images_comet/86/7/_resized/867cc929df83f50d0d75d2cc90eb50cf7e54fbea_38_40_cut.png'},
{name:'Neđeljko Kovinić',club:'Budućnost',pos:'FWD',photo:'https://fscg.me/files/images_comet/33/a/_resized/33a834b16c47cee7db46011bb426cf7e18fb4404_38_40_cut.png'},
{name:'Petar Jašović',club:'Budućnost',pos:'PL',photo:'https://fscg.me/files/images_comet/0d/7/_resized/0d7c833e553c9d365fed8ccb802c186be3abb515_38_40_cut.png'},
{name:'Georgios Makrydakis',club:'Budućnost',pos:'PL',photo:null},
{name:'Sharif Osman',club:'Budućnost',pos:'PL',photo:'https://fscg.me/files/images_comet/9f/d/_resized/9fd2014cd68f5dcff66d99f365064942b3642065_38_40_cut.png'},
{name:'Ilia Serikov',club:'Budućnost',pos:'PL',photo:null},
{name:'Goran Aković',club:'Jezero',pos:'GK',photo:'https://fscg.me/files/images_comet/05/f/_resized/05fa200578d0cd3664321e7bebb916c9c03b8691_38_40_cut.png'},
{name:'Igor Asanović',club:'Jezero',pos:'GK',photo:'https://fscg.me/files/images_comet/bc/3/_resized/bc3f6be2c0c3fb96878fe90ace500720680f9b38_38_40_cut.png'},
{name:'Matija Bojović',club:'Jezero',pos:'DEF',photo:'https://fscg.me/files/images_comet/76/5/_resized/7659c492df6af752afb3de5cff775597ae18e130_38_40_cut.png'},
{name:'Novak Fatić',club:'Jezero',pos:'DEF',photo:'https://fscg.me/files/images_comet/b1/6/_resized/b167edf30ab8a1f48040e2fb7a4f0bad8ae40adf_38_40_cut.png'},
{name:'Nikola Jovićević',club:'Jezero',pos:'DEF',photo:'https://fscg.me/files/images_comet/Person/_resized/102432_1375620979659_resized_38_40_cut.jpg'},
{name:'Abdel Osmanović',club:'Jezero',pos:'DEF',photo:'https://fscg.me/files/images_comet/b8/4/_resized/b84a267163f25b370e8010b7687392dcbefa7364_38_40_cut.png'},
{name:'Ilija Tučević',club:'Jezero',pos:'DEF',photo:null},
{name:'Balša Boričić',club:'Jezero',pos:'MID',photo:'https://fscg.me/files/images_comet/fe/d/_resized/fed78c794d42bc9096b27ca9d0c367f8844a08b5_38_40_cut.png'},
{name:'Uroš Bulatović',club:'Jezero',pos:'MID',photo:'https://fscg.me/files/images_comet/f8/b/_resized/f8bbcd882c08180885a1ec5cfd7b3a90bb883246_38_40_cut.png'},
{name:'Amel Đešević',club:'Jezero',pos:'MID',photo:'https://fscg.me/files/images_comet/44/9/_resized/449f52cd7834c4ec181230d05d5368bbc61ef012_38_40_cut.png'},
{name:'Vasilije Terzić',club:'Jezero',pos:'MID',photo:'https://fscg.me/files/images_comet/28/f/_resized/28fd6f42152ec802df5e8b556a0aa1d5b1970215_38_40_cut.png'},
{name:'Anil Julević',club:'Jezero',pos:'FWD',photo:'https://fscg.me/files/images_comet/8b/6/_resized/8b6cc58d5ab4f86845cc7d1ae8acfd238d4818d9_38_40_cut.png'},
{name:'Andrija Kolundžić',club:'Jezero',pos:'FWD',photo:'https://fscg.me/files/images_comet/23/f/_resized/23ff41ec84c424fec0c4097deac175cfab0c82cb_38_40_cut.png'},
{name:'Bojan Pavićević',club:'Jezero',pos:'FWD',photo:'https://fscg.me/files/images_comet/18/3/_resized/183d8b0f12dc6150706c761df2028a3d46c0fa20_38_40_cut.png'},
{name:'Milivoje Raičević',club:'Jezero',pos:'FWD',photo:'https://fscg.me/files/images_comet/0f/2/_resized/0f27f958b71e3b65bc5676b5497a47348d93c4e4_38_40_cut.png'},
{name:'Edis Redžepagić',club:'Jezero',pos:'FWD',photo:'https://fscg.me/files/images_comet/49/d/_resized/49d48e16ef3cc281f31152db66898cd3a8398f88_38_40_cut.png'},
{name:'Alden Škrijelj',club:'Jezero',pos:'FWD',photo:'https://fscg.me/files/images_comet/f7/6/_resized/f76727fcbb96050374f4a089b65624251f5d45e6_38_40_cut.png'},
{name:'Manuel Cuestas',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/3c/3/_resized/3c31b5fe327ab7acb62667fdff2e6317793987ec_38_40_cut.png'},
{name:'Dejan Jovanović',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/29/7/_resized/2975f7fe67be4a33828b8f90e35546c46ad388c6_38_40_cut.png'},
{name:'Meldin Kojić',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/ab/e/_resized/abe314177a46380db3a941ef22ea145c40fe502c_38_40_cut.png'},
{name:'Ramo Marković',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/5d/4/_resized/5d492f0bfbd01cccdfb5667e164f0d6c18fd1b60_38_40_cut.png'},
{name:'Ayumu Nishimura',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/b5/4/_resized/b54f437b6ab6c7168e046bb800ece1e4aa2845d0_38_40_cut.png'},
{name:'Taishi Otsu',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/7c/2/_resized/7c29270a5d23f24e7951610d4adc28b331837ab8_38_40_cut.png'},
{name:'Imran Redžepagić',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/00/5/_resized/0054600c4f468fa55a5c713893fe85426887dfcc_38_40_cut.png'},
{name:'Rejhan Redžić',club:'Jezero',pos:'PL',photo:'https://fscg.me/files/images_comet/6a/b/_resized/6ab57f4928c45da97c74c87ea66d8c9a9038c3c2_38_40_cut.png'},
{name:'Tomaš Đurović',club:'Sutjeska',pos:'GK',photo:'https://fscg.me/files/images_comet/e7/c/_resized/e7c99b090cabefd171ea72be90d92e1250d8e380_38_40_cut.png'},
{name:'Vladan Giljen',club:'Sutjeska',pos:'GK',photo:'https://fscg.me/files/images_comet/d5/5/_resized/d55d87fd2ff2bc304860e1a36569cf6263288986_38_40_cut.png'},
{name:'Anto Babić',club:'Sutjeska',pos:'DEF',photo:'https://fscg.me/files/images_comet/a0/7/_resized/a07f43c638776d6cec7a790c502cf113d958eba6_38_40_cut.png'},
{name:'Radoš Dedić',club:'Sutjeska',pos:'DEF',photo:'https://fscg.me/files/images_comet/2d/5/_resized/2d57872446bd338394c612c965d2c4d199873241_38_40_cut.png'},
{name:'Marko Đukanović',club:'Sutjeska',pos:'DEF',photo:'https://fscg.me/files/images_comet/b3/3/_resized/b33dab16acd131495145b5f8c8d4ac4ee310f912_38_40_cut.png'},
{name:'Andrija Ražnatović',club:'Sutjeska',pos:'DEF',photo:'https://fscg.me/files/images_comet/2f/0/_resized/2f000b39cd37b79f4ace945015b61879494f9c2f_38_40_cut.png'},
{name:'Miloš Vračar',club:'Sutjeska',pos:'DEF',photo:'https://fscg.me/files/images_comet/ff/5/_resized/ff572d01b930d2da80d59d0c4d17b0fd5c87e17f_38_40_cut.png'},
{name:'Aleksandar Boljević',club:'Sutjeska',pos:'MID',photo:'https://fscg.me/files/images_comet/b7/f/_resized/b7f89403e5c829c567af6d791b9be2d888e0f8e5_38_40_cut.png'},
{name:'Marko Brnović',club:'Sutjeska',pos:'MID',photo:'https://fscg.me/files/images_comet/41/2/_resized/412c37a201c8356dc951df3f5d7ba906ad5a962c_38_40_cut.png'},
{name:'Vasilije Čavor',club:'Sutjeska',pos:'MID',photo:'https://fscg.me/files/images_comet/95/4/_resized/954cec696cc01e797e8c6a7cf685bd9aa5b07aa7_38_40_cut.png'},
{name:'Danilo Ćetković',club:'Sutjeska',pos:'MID',photo:'https://fscg.me/files/images_comet/ff/2/_resized/ff21709da4b252b0d371532b0b2ba34427d730f5_38_40_cut.png'},
{name:'Aleksa Golubović',club:'Sutjeska',pos:'MID',photo:'https://fscg.me/files/images_comet/1d/1/_resized/1d15d23908f89ff968eece7303eb421ffe962894_38_40_cut.png'},
{name:'Andrija Kecojević',club:'Sutjeska',pos:'MID',photo:'https://fscg.me/files/images_comet/bf/9/_resized/bf944ce8a5a41292722d95124c902a480e212931_38_40_cut.png'},
{name:'Igor Pajović',club:'Sutjeska',pos:'MID',photo:'https://fscg.me/files/images_comet/8d/c/_resized/8dc7180fc2213840f353aba89305b6425a992cb2_38_40_cut.png'},
{name:'Petar Aničić',club:'Sutjeska',pos:'FWD',photo:'https://fscg.me/files/images_comet/64/8/_resized/64846cf97f38ce13e20a2793e722d49fb9fcb4df_38_40_cut.png'},
{name:'Slobodan Babić',club:'Sutjeska',pos:'FWD',photo:'https://fscg.me/files/images_comet/1e/7/_resized/1e76f2663c12ad168f422cbdddb43e853ef7c7be_38_40_cut.png'},
{name:'Marko Mrvaljević',club:'Sutjeska',pos:'FWD',photo:'https://fscg.me/files/images_comet/ba/5/_resized/ba58fe236e23df82c6e491a8be5c3fbcce1f7e87_38_40_cut.png'},
{name:'Balša Tošković',club:'Sutjeska',pos:'FWD',photo:'https://fscg.me/files/images_comet/Person/_resized/106020_-572191886_38_40_cut.jpg'},
{name:'Mamadou Camara',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/39/3/_resized/393d45200192f7a7c5c27502f958c32235e724db_38_40_cut.png'},
{name:'Jovan Čađenović',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/09/b/_resized/09bea0e947fc9a93208e1f12103a2a1236f9af46_38_40_cut.png'},
{name:'Filip Damjanović',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/af/c/_resized/afcb332b0f47962a6082b0ba5a08636e7c0b70ed_38_40_cut.png'},
{name:'Vuk Dubljević',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/42/c/_resized/42c4a8b5dfce84522684fd6e7a5182ac4ce742c4_38_40_cut.png'},
{name:'Blažo Đukić',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/0d/5/_resized/0d573f163a8d126e0de36bd2d47858a4c0797ff7_38_40_cut.png'},
{name:'Deni Hočko',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/0b/f/_resized/0bfdd9017ff2376baea1639010a3b5e20a292c1c_38_40_cut.png'},
{name:'Boris Kopitović',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/Person/_resized/100619_1374796483629_resized_38_40_cut.jpg'},
{name:'Todor Miljanić',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/d0/2/_resized/d0270b036f38799662eba430270fd88c8659dc31_38_40_cut.png'},
{name:'Aleksandar Šćekić',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/ff/d/_resized/ffdaf193a58193e6f4c0927f0650bfe35c062b01_38_40_cut.png'},
{name:'Marko Šimun',club:'Sutjeska',pos:'PL',photo:'https://fscg.me/files/images_comet/f5/5/_resized/f550b14e66eed97780278ab87808f530cf26e627_38_40_cut.png'},
{name:'Andrej Camaj',club:'Dečić',pos:'GK',photo:'https://fscg.me/files/images_comet/b5/5/_resized/b5513b1e2238f90d6370a7cbd28e7671a284ce49_38_40_cut.png'},
{name:'Miloš Dragojević',club:'Dečić',pos:'GK',photo:'https://fscg.me/files/images_comet/3e/f/_resized/3efdef45d3c078b1e34b7622d18454cd1367f4ba_38_40_cut.png'},
{name:'Edin Lekić',club:'Dečić',pos:'GK',photo:'https://fscg.me/files/images_comet/df/f/_resized/dffd7261feeba29091121bff8d2df568ad0f7f1e_38_40_cut.png'},
{name:'Danilo Radošević',club:'Dečić',pos:'GK',photo:'https://fscg.me/files/images_comet/Person/_resized/107624_907263694_38_40_cut.jpg'},
{name:'Romario Camaj',club:'Dečić',pos:'DEF',photo:'https://fscg.me/files/images_comet/6b/2/_resized/6b2149c5bd224244468c6bb3e29fcdcabfeb8eb6_38_40_cut.png'},
{name:'Jonathan Dresaj',club:'Dečić',pos:'DEF',photo:'https://fscg.me/files/images_comet/b1/1/_resized/b112d570dbb775f1afd52ccbbe29e77f455a5383_38_40_cut.png'},
{name:'Dardan Lulgjuraj',club:'Dečić',pos:'DEF',photo:'https://fscg.me/files/images_comet/Person/_resized/106232_-142492117_38_40_cut.jpg'},
{name:'Pjeter Lulgjuraj',club:'Dečić',pos:'DEF',photo:'https://fscg.me/files/images_comet/b4/9/_resized/b4983873a6ce5ab2faca0d73f35755c71ee9c583_38_40_cut.jpg'},
{name:'Lazar Maraš',club:'Dečić',pos:'DEF',photo:'https://fscg.me/files/images_comet/a9/c/_resized/a9c84bca9db4b171edced6b2962adee8a3d1d8f7_38_40_cut.jpg'},
{name:'Jovan Mugoša',club:'Dečić',pos:'DEF',photo:'https://fscg.me/files/images_comet/2a/4/_resized/2a4c075fc76e2c90acd35e060d7a137df4238858_38_40_cut.png'},
{name:'Siniša Stanisavić',club:'Dečić',pos:'DEF',photo:'https://fscg.me/files/images_comet/a8/0/_resized/a8048cc27e95e48171e1e9fd63e8c889ce1ce8a3_38_40_cut.png'},
{name:'Aldin Adžović',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/09/d/_resized/09dd3dcf56bf4e34611ce21feed0f5ac54c35713_38_40_cut.png'},
{name:'Matija Božanović',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/d6/8/_resized/d684ac5a382f8ab94ff16fa47b87a8d6ecfa55cb_38_40_cut.png'},
{name:'Nikola Braunović',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/61/2/_resized/612a1f7e2f9f704e9efaa4f8f919e3a0817e4c2e_38_40_cut.png'},
{name:'Ilirian Camaj',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/19/4/_resized/194a02a119ab4fed357083d478b4a97010ee31c2_38_40_cut.png'},
{name:'Aleksa Ćetković',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/8d/1/_resized/8d192745077def60fd01ef6ab26061236f8a3e68_38_40_cut.png'},
{name:'Mark Đokaj',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/ba/7/_resized/ba78fed541eed6f2cc685d1795592b00c2859f3a_38_40_cut.jpg'},
{name:'Mario Gjolaj',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/b9/e/_resized/b9ed684710770d81cb1397b62f28ed906e5b4ca7_38_40_cut.png'},
{name:'Medo Juković',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/86/a/_resized/86a91e1ed8ca706265fec16404e127b01f34a243_38_40_cut.png'},
{name:'Davor Kontić',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/52/b/_resized/52bf06400bc2f79423533ba3cc7e505f67cfe939_38_40_cut.png'},
{name:'Petar Pavlićević',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/04/5/_resized/04515cc67431e22e7a3fe41d5d6c6bc74b7aa6a0_38_40_cut.png'},
{name:'Leon Ujkaj',club:'Dečić',pos:'MID',photo:'https://fscg.me/files/images_comet/44/c/_resized/44cdcb0d93676ca331247a0b99ea8159d1f93d82_38_40_cut.jpg'},
{name:'Ilir Camaj',club:'Dečić',pos:'FWD',photo:'https://fscg.me/files/images_comet/a0/7/_resized/a07b1dfb0595b3be318580ddab22d0845e15b2b2_38_40_cut.png'},
{name:'Petar Ivanović',club:'Dečić',pos:'FWD',photo:'https://fscg.me/files/images_comet/03/1/_resized/0310a2e3c089ab36e37c5a1eb17dba849e475acb_38_40_cut.png'},
{name:'Balša Radusinović',club:'Dečić',pos:'FWD',photo:'https://fscg.me/files/images_comet/6a/e/_resized/6aec4fcde1ebaca5028ccbcf2a157652333129d5_38_40_cut.png'},
{name:'Uroš Đuranović',club:'Dečić',pos:'PL',photo:'https://fscg.me/files/images_comet/bc/0/_resized/bc0653fe68b7959db3f8e5e103d8d75bf8c056a8_38_40_cut.png'},
{name:'Ardian Vuljaj',club:'Dečić',pos:'PL',photo:'https://fscg.me/files/images_comet/Person/_resized/114472_540631391_38_40_cut.jpg'},
{name:'Ivan Božinović',club:'Arsenal',pos:'GK',photo:'https://fscg.me/files/images_comet/73/3/_resized/73303ab18d85ffb435350dd4b7dffa1b1b7baca2_38_40_cut.png'},
{name:'Zoran Mikijelj',club:'Arsenal',pos:'DEF',photo:'https://fscg.me/files/images_comet/69/0/_resized/69089118c5b093e29e87959f6ac22a33845f0035_38_40_cut.png'},
{name:'Nemanja Bojanić',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/3d/b/_resized/3db1839b663b486a86eb3815d02b0641423e7b85_38_40_cut.png'},
{name:'Martin Đukanović',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/33/1/_resized/3318798d215e2fba4cb878a5e23347621fd738e5_38_40_cut.png'},
{name:'Andrej Golub',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/f8/0/_resized/f805750b5e3d22410fc186de303bec9e47c8a1ea_38_40_cut.png'},
{name:'Vasilije Kašćelan',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/e6/3/_resized/e63111a8e47f686e447889719d4c64e2de18d8d1_38_40_cut.png'},
{name:'Vladimir Kašćelan',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/69/6/_resized/696ff2932dea27014dea4d6fd855a96580a5e13a_38_40_cut.png'},
{name:'Nemanja Lazarević',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/89/4/_resized/894d7c74c2b620a9013c1d5bc379dc3a9b1a1f72_38_40_cut.png'},
{name:'Aleksandar Macanović',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/3e/9/_resized/3e9f01e0fd95be80b5ffa05c2715a13ecd967095_38_40_cut.jpg'},
{name:'Petar Mališić',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/c7/4/_resized/c7408647aebacfd1ad425c1e550a968ecf248ca8_38_40_cut.png'},
{name:'Miloš Maraš',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/4e/d/_resized/4edd0ca05b6ee54fa92a072b4d73b626fdc3aa23_38_40_cut.png'},
{name:'Gojko Petović',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/53/8/_resized/5387ef25cd6ec2a26187925172ea591f44826932_38_40_cut.jpg'},
{name:'Petar Ražnatović',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/6d/8/_resized/6d84bd09547c248b9b83f9d2d36c85bd66c54c87_38_40_cut.png'},
{name:'Irfan Šahman',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/ab/3/_resized/ab32ff631a0db56aa15ddf69af7c882694632133_38_40_cut.jpg'},
{name:'Marko Živanović',club:'Arsenal',pos:'MID',photo:'https://fscg.me/files/images_comet/4b/7/_resized/4b77e88270ed2ffb3e1c6ce390ce00fcab9fda1d_38_40_cut.png'},
{name:'Stefan Labović',club:'Arsenal',pos:'FWD',photo:'https://fscg.me/files/images_comet/e8/5/_resized/e851c7025bed149ee054f2162405ac638dc76c42_38_40_cut.png'},
{name:'Igor Vukčević',club:'Arsenal',pos:'FWD',photo:'https://fscg.me/files/images_comet/a2/0/_resized/a2030f23a624d49001e0168e65aaeb5ccbbf4e7e_38_40_cut.png'},
{name:'Vuk Dajković',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/3b/b/_resized/3bb8134db7f645ad16a1ce369d616c7e95079698_38_40_cut.png'},
{name:'Novica Eraković',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/a1/7/_resized/a175d4fe6e94b21f1f5b2304ba14e5ab65494013_38_40_cut.png'},
{name:'Riku Kaneda',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/a6/c/_resized/a6c1e4977c9dbd9501e526a5169ce4256a252952_38_40_cut.png'},
{name:'Aleksa Kralj',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/f2/4/_resized/f24d71b31a4e0dda6efdd147781b2ab15abb60c4_38_40_cut.png'},
{name:'Staniša Mandić',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/7e/1/_resized/7e1a893c7212b5e12af58827b7a6cfc1470243e7_38_40_cut.png'},
{name:'Luka Petković',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/16/4/_resized/164544a0a70aaac1739285cdc0f177828845061f_38_40_cut.png'},
{name:'Andrej Petrović',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/97/7/_resized/9774ae6f085e2a9ef76b67fff4f9cbc6a8e6a232_38_40_cut.png'},
{name:'Ron Rozin',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/a9/e/_resized/a9ece88139a3ac203b0cd0a01524a8ac724d788f_38_40_cut.png'},
{name:'Santigie Yusuf Sesay',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/f1/5/_resized/f15fe71bfb01da710866f52a6b046a6b83a313cd_38_40_cut.png'},
{name:'Vladimir Shamarin',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/Person/_resized/120301_40f6e16a-2fd1-4c73-9495-5e09f675de36_38_40_cut.jpg'},
{name:'Petar Šoškić',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/04/a/_resized/04a0dce00f57fea3455e96d9a5bba694de88e557_38_40_cut.png'},
{name:'Kosta Vujačić',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/d3/9/_resized/d39759e4e2499705c379b4218f858c1dd14e6283_38_40_cut.png'},
{name:'Bojan Zogović',club:'Arsenal',pos:'PL',photo:'https://fscg.me/files/images_comet/66/7/_resized/6675ac377738b13943dc3ee637b2b86efa6c31a8_38_40_cut.jpg'},
{name:'Strahinja Božović',club:'Petrovac',pos:'GK',photo:'https://fscg.me/files/images_comet/82/f/_resized/82f4828f43e00e87064723237dc319e9c595b452_38_40_cut.jpg'},
{name:'Marko Kordić',club:'Petrovac',pos:'GK',photo:'https://fscg.me/files/images_comet/95/b/_resized/95b2992efba87c92c3ad6630935db423ac4c95e7_38_40_cut.png'},
{name:'Suad Ličina',club:'Petrovac',pos:'GK',photo:'https://fscg.me/files/images_comet/7d/b/_resized/7db628c5dfcb9b9465cf736ade54d6a6fa3de524_38_40_cut.png'},
{name:'Dejan Boljević',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/83/9/_resized/839fd5cfdc5e4314e411b6ac9600a0fa68e17d39_38_40_cut.jpg'},
{name:'Robert Gjelaj',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/34/c/_resized/34cf24af73485b7296e2161e8c29e130d6e58770_38_40_cut.png'},
{name:'Nikola Janjić',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/bc/5/_resized/bc54ca05515f094dbe6dee0c9e063debbe311ee6_38_40_cut.png'},
{name:'Aleksandar Kapisoda',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/ac/2/_resized/ac23868bf479a2d71b6d2173f6cd93736ddb8efd_38_40_cut.jpg'},
{name:'Marko Merdović',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/f5/d/_resized/f5d0d08ebaf0b56a50e26064fc19e715a1bec2f6_38_40_cut.png'},
{name:'Dragan Miranović',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/e9/1/_resized/e9160ad25e971eef907d969c6a3156be6646a21c_38_40_cut.png'},
{name:'Ognjen Obradović',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/ac/0/_resized/ac028459794d7ec7994bf923636c5c70410b198f_38_40_cut.png'},
{name:'Luka Šćekić',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/35/9/_resized/3595b451a4e94b94395aa093b03281d2567e2a96_38_40_cut.jpg'},
{name:'Janko Vukićević',club:'Petrovac',pos:'DEF',photo:'https://fscg.me/files/images_comet/46/f/_resized/46f0104cb6c5b037feb3ee3355636205a141b1ff_38_40_cut.png'},
{name:'Danilo Bakić',club:'Petrovac',pos:'MID',photo:'https://fscg.me/files/images_comet/db/2/_resized/db2d64139b7d559e81c564ca79b25c439836e085_38_40_cut.jpg'},
{name:'Nikola Balević',club:'Petrovac',pos:'MID',photo:'https://fscg.me/files/images_comet/13/7/_resized/137b2306fb36078beeaeaeae6a2f6dd4d32f9dd6_38_40_cut.jpg'},
{name:'Luka Baštrica',club:'Petrovac',pos:'MID',photo:'https://fscg.me/files/images_comet/cd/b/_resized/cdb8c48d62b91f40f42bd04dbf71a565a3fd8908_38_40_cut.png'},
{name:'Nemanja Carević',club:'Petrovac',pos:'MID',photo:'https://fscg.me/files/images_comet/11/3/_resized/113f147dceb23d680de3910957f8ef6033986026_38_40_cut.jpg'},
{name:'Zaim Divanović',club:'Petrovac',pos:'MID',photo:'https://fscg.me/files/images_comet/91/f/_resized/91f3e0a1f78c99e25883e53da7a3d28393d2d14c_38_40_cut.png'},
{name:'Đorđe Fabris',club:'Petrovac',pos:'MID',photo:'https://fscg.me/files/images_comet/7b/d/_resized/7bd64ca42a886812bf919339d8353c960f9f3502_38_40_cut.png'},
{name:'Strahinja Tešović',club:'Petrovac',pos:'MID',photo:'https://fscg.me/files/images_comet/94/5/_resized/945d7a89c2793cd1ab008b2aca131f6debdc95c4_38_40_cut.png'},
{name:'Danilo Pešukić',club:'Petrovac',pos:'FWD',photo:'https://fscg.me/files/images_comet/1a/6/_resized/1a62349dc13c9d55abe163ed4bc9d41ecaf9e51c_38_40_cut.jpg'},
{name:'Vuk Striković',club:'Petrovac',pos:'FWD',photo:'https://fscg.me/files/images_comet/67/4/_resized/6744b87f6f379add94a7dc422f30d43207d06f0f_38_40_cut.png'},
{name:'Ivan Vukčević',club:'Petrovac',pos:'FWD',photo:'https://fscg.me/files/images_comet/f5/4/_resized/f5433512eee81adf77345abec3353a3753617312_38_40_cut.png'},
{name:'Savo Arambašić',club:'Petrovac',pos:'PL',photo:'https://fscg.me/files/images_comet/be/2/_resized/be21c6a3d838685fa4f8894819b3362e30b5cbac_38_40_cut.jpg'},
{name:'Veljko Dragović',club:'Petrovac',pos:'PL',photo:'https://fscg.me/files/images_comet/c4/9/_resized/c497de78e4b056a6c79b5d43d37b22ec3c748195_38_40_cut.jpg'},
{name:'Stefan Fićović',club:'Petrovac',pos:'PL',photo:'https://fscg.me/files/images_comet/35/0/_resized/35033bf2e1a8c7232484f91b7202e219dd7a50ef_38_40_cut.png'},
{name:'Trimror Selimi',club:'Petrovac',pos:'PL',photo:'https://fscg.me/files/images_comet/4c/c/_resized/4ccb10ef4feb04bf502d97a68eb7a13de3eda129_38_40_cut.png'},
{name:'Balša Radanović',club:'Mladost DG',pos:'GK',photo:'https://fscg.me/files/images_comet/1c/d/_resized/1cddf243a29fb675291553e929eaa268f0ed59aa_38_40_cut.png'},
{name:'Petar Radulović',club:'Mladost DG',pos:'GK',photo:'https://fscg.me/files/images_comet/57/5/_resized/57556c869e7e793f068cf964d66bea14479fd7bb_38_40_cut.png'},
{name:'Zvonko Ceklić',club:'Mladost DG',pos:'DEF',photo:'https://fscg.me/files/images_comet/3d/f/_resized/3dfc2f8cdc739779bc7b17a57d916c9b1c08b050_38_40_cut.png'},
{name:'Ognjen Đinović',club:'Mladost DG',pos:'DEF',photo:'https://fscg.me/files/images_comet/33/2/_resized/332b5d380071a6b9c676229581d12b48bae5a9e1_38_40_cut.png'},
{name:'Vuk Kostić',club:'Mladost DG',pos:'DEF',photo:'https://fscg.me/files/images_comet/80/2/_resized/8023b55b368bf1ef682fa0694e4008f7d671aecd_38_40_cut.png'},
{name:'Ljubomir Pejović',club:'Mladost DG',pos:'DEF',photo:'https://fscg.me/files/images_comet/de/5/_resized/de58a94e3e50e8e2664fb522aca198c2311a6239_38_40_cut.png'},
{name:'Matije Badnjar',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/87/a/_resized/87aa0d235b37008285a52fe6b151a6ab5a15d625_38_40_cut.png'},
{name:'Arsenije Čepić',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/ab/0/_resized/ab0012862e9fc5a902cb8ea22a23a5944b795117_38_40_cut.png'},
{name:'Anđelko Jovanović',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/e5/2/_resized/e52da43afb07133de6966711eb045c244259afb8_38_40_cut.png'},
{name:'Lazar Knežević',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/99/9/_resized/99922f21e48cd76d785d08466691cd310ae954c3_38_40_cut.png'},
{name:'Jovan Nikolić',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/17/3/_resized/173907900f084fa71aca678a8f45be4cc5826676_38_40_cut.png'},
{name:'Nikola Pavlićević',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/06/8/_resized/0683d8061259c4b8036cfcd4df00f01ddd2c866b_38_40_cut.png'},
{name:'Kristijan Radunović',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/9b/4/_resized/9b418ad401c4cd8f17bc614e6509478235fdcc6c_38_40_cut.png'},
{name:'Jovan Vujisić',club:'Mladost DG',pos:'MID',photo:'https://fscg.me/files/images_comet/43/2/_resized/43282a4aef6f44b87aa7b021f3161b86e9f61b8f_38_40_cut.png'},
{name:'Stephano Alves de Almeida',club:'Mladost DG',pos:'FWD',photo:'https://fscg.me/files/images_comet/b6/b/_resized/b6b421a73b376e5f5089d29aa591f2d83d5d8367_38_40_cut.png'},
{name:'Damjan Mugoša',club:'Mladost DG',pos:'FWD',photo:'https://fscg.me/files/images_comet/ad/4/_resized/ad4da72e12725a3517f8efcc8567f352a8fd88f9_38_40_cut.png'},
{name:'Jagoš Roganović',club:'Mladost DG',pos:'FWD',photo:'https://fscg.me/files/images_comet/02/0/_resized/02018a17c37ec4a571efdc39cdfbd0bacd4171fb_38_40_cut.png'},
{name:'Nelson Augustin Cordoba',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/f7/e/_resized/f7e889c83e7814678412ab48eaf0f30c80c13c2f_38_40_cut.png'},
{name:'Darvin Đukić',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/Person/_resized/118443_f7764e88-c9a5-4a68-a6bd-5bdb0679af88_38_40_cut.jpg'},
{name:'Uroš Jovanović',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/d3/2/_resized/d321d794594fe5af842db4f6448b8d98576e2c90_38_40_cut.png'},
{name:'Nemanja Jovičić',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/6f/4/_resized/6f4f28d78b660af2f40a9fa8118b75b0ade6f614_38_40_cut.png'},
{name:'Miloš Lalević',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/bd/a/_resized/bda78682866e056fc128f12a52d18e1b575cdd09_38_40_cut.png'},
{name:'Stefan Mijović',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/83/d/_resized/83de89f21c1aa9d40a6415bf4ee1e055390812a9_38_40_cut.png'},
{name:'Veljko Mijović',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/c2/3/_resized/c23ac5eb4b9ce6780262621bc81a42cb4ea804b9_38_40_cut.png'},
{name:'Petar Pantić',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/4c/c/_resized/4cc1cec948e162e30b40747199d7981e1040b826_38_40_cut.png'},
{name:'Stefan Pejović',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/4d/1/_resized/4d1649e8851636ab7d76f5d91940af604831431f_38_40_cut.png'},
{name:'Mihailo Sekulić',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/17/e/_resized/17e076e087fb599378f459ffe6f6536e467277e8_38_40_cut.png'},
{name:'Feđa Šćepanović',club:'Mladost DG',pos:'PL',photo:'https://fscg.me/files/images_comet/Person/_resized/114276_-1187992483_38_40_cut.jpg'},
{name:'Jasmin Agović',club:'Otrant-Olympic',pos:'GK',photo:'https://fscg.me/files/images_comet/b5/e/_resized/b5eb293e1cf1078a711e9756b5435a4242417530_38_40_cut.png'},
{name:'Šaban Kolić',club:'Otrant-Olympic',pos:'GK',photo:'https://fscg.me/files/images_comet/68/0/_resized/6803e780321a349cf08fc5a2f32b8bfa17ba76ca_38_40_cut.png'},
{name:'Balša Banović',club:'Otrant-Olympic',pos:'DEF',photo:'https://fscg.me/files/images_comet/8c/c/_resized/8ccbf2e23c9b7740ac482c402f624a0102bf13b5_38_40_cut.png'},
{name:'Halil Kajoshaj',club:'Otrant-Olympic',pos:'DEF',photo:'https://fscg.me/files/images_comet/83/9/_resized/8396d90e928770f40f2d985fc464cb24a8e0f83f_38_40_cut.png'},
{name:'Vasilije Radenović',club:'Otrant-Olympic',pos:'DEF',photo:'https://fscg.me/files/images_comet/6f/8/_resized/6f8b720fb02322bbf7f3c7db149760a8a688624e_38_40_cut.png'},
{name:'Benjamin Rexhoviq',club:'Otrant-Olympic',pos:'DEF',photo:'https://fscg.me/files/images_comet/fc/f/_resized/fcf20ddda53eaa996de05b3e6dd0a4ef0316257c_38_40_cut.png'},
{name:'Adrijan Rudović',club:'Otrant-Olympic',pos:'DEF',photo:'https://fscg.me/files/images_comet/b7/5/_resized/b75e7211904f9be8f61e5ac98cb552ccdfa699c8_38_40_cut.png'},
{name:'Petar Vuković',club:'Otrant-Olympic',pos:'DEF',photo:'https://fscg.me/files/images_comet/c8/f/_resized/c8f806ae143637a81a01a37269ab3eedf3b8d1a2_38_40_cut.png'},
{name:'Armin Bošnjak',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/30/5/_resized/305afd2799547102f40156b68549f314e32f811f_38_40_cut.png'},
{name:'Caique Augusto Correia Chagas',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/44/a/_resized/44aece9b7a11b47736b128f7c586427353999a20_38_40_cut.png'},
{name:'Srđan Krstović',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/2c/0/_resized/2c0d7b987ed7b82916ec91987f3ac1effca77004_38_40_cut.png'},
{name:'Lazar Lambulić',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/ca/d/_resized/cad34abddb00ed08558654c2d338a6d58f6799f3_38_40_cut.png'},
{name:'Filip Pavićević',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/7e/9/_resized/7e9d20300a9e2fe969ccfc5c3acb29bf425996fd_38_40_cut.png'},
{name:'Endrit Sefa',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/02/c/_resized/02c2ef197869509557db4c9230d3490d8f850832_38_40_cut.png'},
{name:'Ermin Seratlić',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/f5/7/_resized/f5757f599853e3d3c6f4c848716a0adba95f22fd_38_40_cut.png'},
{name:'Matija Uskoković',club:'Otrant-Olympic',pos:'MID',photo:'https://fscg.me/files/images_comet/84/b/_resized/84b6582b329ceec7cbaace48064466db699a4fad_38_40_cut.png'},
{name:'Halil Muharemović',club:'Otrant-Olympic',pos:'FWD',photo:'https://fscg.me/files/images_comet/98/4/_resized/9846c04e6567dc6951dfe243fc8d83d439453bb7_38_40_cut.png'},
{name:'Anđelo Rudović',club:'Otrant-Olympic',pos:'FWD',photo:'https://fscg.me/files/images_comet/e9/7/_resized/e977957897aadaf5fd12a28b19f878d979d438a5_38_40_cut.png'},
{name:'Valentin Rudović',club:'Otrant-Olympic',pos:'FWD',photo:'https://fscg.me/files/images_comet/f7/6/_resized/f760cca54cb9ff87fa10ee46a6b61037854f83e5_38_40_cut.png'},
{name:'Nikola Vuković',club:'Otrant-Olympic',pos:'FWD',photo:'https://fscg.me/files/images_comet/c2/6/_resized/c266ba5c1ff96f6d64a68f0a154c9415706366c6_38_40_cut.png'},
{name:'Vuk Dulović',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/9d/7/_resized/9d711d15a98f27ffb8dcf738deedb23acd6ca9f7_38_40_cut.png'},
{name:'Edin Đečbitrić',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/77/0/_resized/77016707ecbbb49e3fe815d45bc31cc8e283d976_38_40_cut.png'},
{name:'Dženan Karamanaga',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/86/5/_resized/865a00730b1961f78d6c28f11db8f23e1bbbd4d5_38_40_cut.png'},
{name:'Florian Karamanaga',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/58/9/_resized/589b719f4eaefd1a8f302bd577b05bb7fc4bcad0_38_40_cut.png'},
{name:'Liburn Lazoja',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/1e/8/_resized/1e81d3d1e7828eaf726ecf9ab34d6435640f1102_38_40_cut.png'},
{name:'Suhejlj Muharem',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/4c/7/_resized/4c771791c25192f0dcff614e07a33432fdd93bf9_38_40_cut.png'},
{name:'Meris Pelinković',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/5c/c/_resized/5ccdf07ea48020be2e7fc1b990659e2475412282_38_40_cut.png'},
{name:'Alban Taipi',club:'Otrant-Olympic',pos:'PL',photo:'https://fscg.me/files/images_comet/7a/b/_resized/7abeb66f5ff3524271adf034b8f74ace4c0e2286_38_40_cut.png'}
];
function renderClubsList(){
  const c=document.getElementById('clubsList');
  if(!c)return;
  c.innerHTML=Object.keys(TEAM_LOGOS).map(name=>{
    const isFav=favClubs.includes(name);
    return `<div class="club-card" onclick="toggleFavClub('${name.replace(/'/g,"\\'")}')">
      <div class="club-card-logo">${teamLogoImg(name)}</div>
      <div class="club-card-name">${name}</div>
      <button class="player-fav-btn">${isFav?'❤️':'🤍'}</button>
    </div>`;
  }).join('');
}
function renderHomeClubPicker(){
  const c=document.getElementById('homeClubPicker');
  if(!c)return;
  c.innerHTML=Object.keys(TEAM_LOGOS).map((name,i)=>{
    const isFav=favClubs.includes(name);
    return `<div class="story stagger-${Math.min(i+1,3)}" onclick="toggleFavClub('${name.replace(/'/g,"\\'")}')">
      <div class="story-ring" style="${isFav?'background:linear-gradient(135deg,var(--primary),var(--gold))':'background:var(--border)'}">
        <div class="story-img" style="overflow:hidden;position:relative">${teamLogoImg(name)}${isFav?'<span style="position:absolute;bottom:-2px;right:-2px;font-size:14px">❤️</span>':''}</div>
      </div>
      <div class="story-label">${name}</div>
    </div>`;
  }).join('');
}
function toggleFavClub(name){
  const idx=favClubs.indexOf(name);
  const wasAdded=idx===-1;
  if(idx>-1)favClubs.splice(idx,1);else favClubs.push(name);
  safeSet('rolajme_fav_clubs',JSON.stringify(favClubs));
  renderClubsList();renderHomeClubPicker();renderProfileStats();pushFavoritesToRemote();
  showToast(wasAdded?'❤️ '+name+' je sada tvoj omiljeni tim':'💔 '+name+' je uklonjen iz omiljenih');
}

/* ========== OMILJENI IGRAČI ========== */
const POS_LABEL={GK:'Golman',DEF:'Odbrana',MID:'Vezni red',FWD:'Napad',PL:'Igrač'};
function getPlayerPhoto(name){
  const custom=safeGet('rolajme_player_photo_'+encodeURIComponent(name));
  if(custom)return custom;
  const p=PLAYERS.find(x=>x.name===name);
  return p&&p.photo?p.photo:null;
}
function playerCardHtml(p){
  const photo=getPlayerPhoto(p.name);
  const isFav=favPlayers.includes(p.name);
  const safeId='ph_'+p.name.replace(/[^a-zA-Z0-9]/g,'')+'_'+Math.random().toString(36).slice(2,7);
  const photoHtml=photo
    ?`<img class="player-photo" src="${photo}" alt="${p.name}">`
    :`<div class="player-photo-placeholder">👤</div>`;
  return `<div class="player-card">
    <div class="player-photo-wrap">
      ${photoHtml}
      <label class="player-photo-add" for="${safeId}">+</label>
      <input type="file" id="${safeId}" accept="image/*" style="display:none" onchange="uploadPlayerPhoto('${p.name.replace(/'/g,"\\'")}',this)">
    </div>
    <div class="player-info">
      <div class="player-name">${p.name}</div>
      <div class="player-club">${p.club} · ${POS_LABEL[p.pos]||''}</div>
    </div>
    <button class="player-fav-btn" onclick="toggleFavPlayer('${p.name.replace(/'/g,"\\'")}')">${isFav?'⭐':'☆'}</button>
  </div>`;
}
function renderPlayersList(query){
  const c=document.getElementById('playersList');
  if(!c)return;
  const q=(query||'').toLowerCase().trim();
  const filtered=q?PLAYERS.filter(p=>p.name.toLowerCase().includes(q)||p.club.toLowerCase().includes(q)):PLAYERS;
  if(filtered.length===0){
    c.innerHTML='<div style="padding:40px 20px;text-align:center;color:var(--text-tertiary);font-size:13px">Nema rezultata za tu pretragu.</div>';
    return;
  }
  c.innerHTML=filtered.map(playerCardHtml).join('');
}
function renderHomePlayerSearch(query){
  const c=document.getElementById('homePlayerSearchResults');
  if(!c)return;
  const q=(query||'').toLowerCase().trim();
  if(!q){c.innerHTML='';return}
  const filtered=PLAYERS.filter(p=>p.name.toLowerCase().includes(q)||p.club.toLowerCase().includes(q)).slice(0,8);
  if(filtered.length===0){
    c.innerHTML='<div style="padding:20px;text-align:center;color:var(--text-tertiary);font-size:13px">Nema rezultata.</div>';
    return;
  }
  c.innerHTML=filtered.map(playerCardHtml).join('');
}
function uploadPlayerPhoto(name,input){
  const file=input.files&&input.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    safeSet('rolajme_player_photo_'+encodeURIComponent(name),e.target.result);
    renderPlayersList(document.getElementById('playerSearchInput')?document.getElementById('playerSearchInput').value:'');
    renderHomePlayerSearch(document.getElementById('homePlayerSearchInput')?document.getElementById('homePlayerSearchInput').value:'');
    renderTopScorers();
  };
  reader.readAsDataURL(file);
}
function toggleFavPlayer(name){
  const idx=favPlayers.indexOf(name);
  const wasAdded=idx===-1;
  if(idx>-1)favPlayers.splice(idx,1);else favPlayers.push(name);
  safeSet('rolajme_fav_players',JSON.stringify(favPlayers));
  renderPlayersList(document.getElementById('playerSearchInput')?document.getElementById('playerSearchInput').value:'');
  renderHomePlayerSearch(document.getElementById('homePlayerSearchInput')?document.getElementById('homePlayerSearchInput').value:'');
  renderProfileStats();pushFavoritesToRemote();
  showToast(wasAdded?'⭐ '+name+' je sada tvoj omiljeni igrač':'☆ '+name+' je uklonjen iz omiljenih');
}

/* ========== HOME RENDERERS ========== */
function renderLiveTicker(){
  const c=document.getElementById('liveTicker');
  if(!c||!liveMatches.length){if(c)c.style.display='none';return}
  c.style.display='flex';
  let html='<span class="live-pill">LIVE</span>';
  liveMatches.forEach(m=>{html+=`<span class="live-match">${m.home} <span class="live-score">${m.homeScore}:${m.awayScore}</span> ${m.away} <span style="color:var(--text-tertiary);font-size:11px">${m.minute}'</span></span>`;});
  c.innerHTML=html;
}
function renderNewsLoadingSkeleton(){
  const hero=document.getElementById('heroCard');
  if(hero){hero.onclick=null;hero.innerHTML='<div class="loading-skeleton loading-hero"></div>';}
  const list=document.getElementById('newsList');
  if(list){list.innerHTML='<div class="loading-skeleton loading-newscard"></div><div class="loading-skeleton loading-newscard"></div><div class="loading-skeleton loading-newscard"></div><div class="loading-msg">Povlačim najnovije vijesti sa rolaj-me.com...</div>';}
  const featured=document.getElementById('newsFeatured');
  if(featured)featured.innerHTML='<div class="loading-skeleton" style="height:220px;border-radius:var(--radius-lg);margin:0 16px 16px"></div>';
  const listFull=document.getElementById('newsListFull');
  if(listFull)listFull.innerHTML='<div class="loading-skeleton loading-newscard" style="margin:0 16px 8px"></div><div class="loading-skeleton loading-newscard" style="margin:0 16px 8px"></div>';
  const stories=document.getElementById('storiesRow');
  if(stories)stories.innerHTML=CAT_LIST.map(()=>'<div class="story"><div class="loading-skeleton" style="width:76px;height:76px;border-radius:50%"></div></div>').join('');
}
function renderHero(){
  const c=document.getElementById('heroCard');
  if(!c)return;
  const n=news[0];
  if(!n){c.innerHTML='';return}
  const imgStyle=n.image?"background-image:url('"+n.image+"');background-size:cover;background-position:center":"background:linear-gradient(135deg,#1a0a2e,#0f0f23)";
  c.onclick=()=>openArticle(n.id);
  c.innerHTML=`<div class="hero-news-img" style="${imgStyle}"></div>
    <div class="hero-news-content">
      <div class="hero-badge"><span style="font-size:8px">●</span> ${n.emoji} ${n.category}</div>
      <div class="hero-title">${n.title}</div>
      <div class="hero-meta"><span>${n.time}</span><span class="hero-read">📖 ${n.readTime} min</span></div>
    </div>`;
}
function renderStories(){
  const c=document.getElementById('storiesRow');
  if(!c)return;
  c.innerHTML=CAT_LIST.map((cat,i)=>`<div class="story stagger-${Math.min(i+1,3)}" onclick="navTo('news')">
    <div class="story-ring" style="background:${cat.gradient}"><div class="story-img" style="background:${cat.gradient};font-size:24px">${cat.icon}</div></div>
    <div class="story-label">${cat.label}</div></div>`).join('');
}
function getNewsTagClass(cat){
  const u=(cat||'').toUpperCase();
  if(u.includes('TRANSFER'))return'gold';
  if(u.includes('KUP'))return'mint';
  return'';
}
let currentHomeLeague=null;
function renderNewsList(leagueFilter){
  const c=document.getElementById('newsList');
  if(!c)return;
  if(leagueFilter!==undefined)currentHomeLeague=leagueFilter;
  let pool=news;
  let sectionLabel=null;
  if(currentHomeLeague){
    pool=news.filter(n=>catMatches(n.category,currentHomeLeague));
    if(pool.length===0)pool=news; // ako nema vijesti u toj kategoriji, prikazi opste
  }else{
    const topCat=getTopCategory();
    if(topCat){
      const personalized=news.filter(n=>catMatches(n.category,topCat));
      if(personalized.length>=2){pool=personalized;sectionLabel='✨ Za tebe';}
    }
  }
  const list=(currentHomeLeague||sectionLabel)?pool.slice(0,4):pool.slice(1,5);
  const headerEl=document.getElementById('newsListLabel');
  if(headerEl)headerEl.textContent=sectionLabel||'🆕 Najnovije';
  if(list.length===0){
    c.innerHTML='<div style="padding:30px 16px;text-align:center;color:var(--text-tertiary);font-size:13px">Nema vijesti u ovoj kategoriji za sada.</div>';
    return;
  }
  c.innerHTML=list.map((n,i)=>{
    const tc=getNewsTagClass(n.category);
    return `<div class="news-card stagger-${Math.min(i+1,3)}" onclick="openArticle(${n.id})">
      ${newsThumb(n)}
      <div class="news-content">
        <div class="news-tag ${tc}">${n.category}</div>
        <div class="news-title">${n.title}</div>
        <div class="news-meta"><span class="news-dot"></span> ${n.time} · ${n.readTime} min</div>
      </div>
    </div>`;
  }).join('');
}
/* ========== ZVONCE / NOTIFIKACIJE ========== */
function toggleNotifPanel(e){
  if(e)e.stopPropagation();
  const p=document.getElementById('notifPanel');
  if(!p)return;
  const isOpen=p.classList.contains('open');
  document.querySelectorAll('.notif-panel').forEach(el=>el.classList.remove('open'));
  if(isOpen)return;
  const latest=news.slice().sort((a,b)=>(b.id||0)-(a.id||0)).slice(0,3);
  p.innerHTML=`<div class="notif-panel-header">🔔 Poslednje obavještenje</div>`+
    (latest.length?latest.map(n=>`<div class="notif-item" onclick="toggleNotifPanel();openArticle(${n.id})">
      <div class="notif-item-emoji">${n.emoji||'⚽'}</div>
      <div><div class="notif-item-title">${n.title}</div><div class="notif-item-time">${n.time}</div></div>
    </div>`).join(''):`<div class="notif-empty">Nema novih obavještenja</div>`);
  p.classList.add('open');
  document.getElementById('notifBadge').style.display='none';
}
document.addEventListener('click',e=>{
  const p=document.getElementById('notifPanel');
  if(p&&p.classList.contains('open')&&!p.contains(e.target)&&!e.target.closest('.header-icon'))p.classList.remove('open');
});

/* ========== "ZA TEBE" PERSONALIZACIJA ========== */
function trackCategoryClick(category){
  try{
    const raw=localStorage.getItem('rolajme_cat_clicks');
    const counts=raw?JSON.parse(raw):{};
    counts[category]=(counts[category]||0)+1;
    localStorage.setItem('rolajme_cat_clicks',JSON.stringify(counts));
  }catch(e){}
}
function getTopCategory(){
  try{
    const raw=localStorage.getItem('rolajme_cat_clicks');
    if(!raw)return null;
    const counts=JSON.parse(raw);
    const entries=Object.entries(counts).filter(([,v])=>v>=3);
    if(!entries.length)return null;
    entries.sort((a,b)=>b[1]-a[1]);
    return entries[0][0];
  }catch(e){return null;}
}

/* ========== REAKCIJE NA VIJESTIMA ========== */
const REACTION_TYPES=['👍','😍','😡'];
function getReactions(articleId){
  try{
    const raw=localStorage.getItem('rolajme_reactions');
    const all=raw?JSON.parse(raw):{};
    return all[articleId]||{counts:{'👍':0,'😍':0,'😡':0},mine:null};
  }catch(e){return {counts:{'👍':0,'😍':0,'😡':0},mine:null};}
}
function setReaction(articleId,emoji){
  try{
    const raw=localStorage.getItem('rolajme_reactions');
    const all=raw?JSON.parse(raw):{};
    const cur=all[articleId]||{counts:{'👍':0,'😍':0,'😡':0},mine:null};
    if(cur.mine)cur.counts[cur.mine]=Math.max(0,(cur.counts[cur.mine]||0)-1);
    if(cur.mine===emoji){cur.mine=null;}
    else{cur.counts[emoji]=(cur.counts[emoji]||0)+1;cur.mine=emoji;}
    all[articleId]=cur;
    localStorage.setItem('rolajme_reactions',JSON.stringify(all));
    renderReactions(articleId);
  }catch(e){}
}
function renderReactions(articleId){
  const c=document.getElementById('articleReactions');
  if(!c)return;
  const r=getReactions(articleId);
  c.innerHTML=REACTION_TYPES.map(e=>`<div class="reaction-btn ${r.mine===e?'active':''}" onclick="setReaction(${articleId},'${e}')">${e} <span class="rcount">${r.counts[e]||0}</span></div>`).join('');
}

/* ========== LIVE KOMENTARI UTAKMICE ========== */
let matchChatChannel=null,currentChatMatchId=null;
function getChatDisplayName(){
  let n=localStorage.getItem('rolajme_chat_name');
  if(!n){n='Navijač'+Math.floor(1000+Math.random()*9000);localStorage.setItem('rolajme_chat_name',n);}
  return n;
}
function escapeHtml(s){
  return (s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function renderChatMessages(rows){
  const list=document.getElementById('matchChatList');
  if(!list)return;
  if(!rows||!rows.length){list.innerHTML='<div style="text-align:center;padding:20px;color:var(--text-tertiary);font-size:12px">Budi prvi koji će komentarisati ovu utakmicu 💬</div>';return;}
  list.innerHTML=rows.map(r=>{
    const t=new Date(r.created_at);
    const hh=String(t.getHours()).padStart(2,'0'),mm=String(t.getMinutes()).padStart(2,'0');
    return `<div class="chat-msg"><span class="chat-msg-name">${escapeHtml(r.name)}</span>${escapeHtml(r.message)}<span class="chat-msg-time">${hh}:${mm}</span></div>`;
  }).join('');
  list.scrollTop=list.scrollHeight;
}
async function initMatchChat(matchId){
  currentChatMatchId=String(matchId);
  if(!window.sb){document.getElementById('matchChatList').innerHTML='<div style="text-align:center;padding:20px;color:var(--text-tertiary);font-size:12px">Komentari trenutno nisu dostupni.</div>';return;}
  try{
    const {data,error}=await sb.from('match_comments').select('*').eq('match_id',currentChatMatchId).order('created_at',{ascending:true}).limit(100);
    if(error)throw error;
    renderChatMessages(data);
  }catch(e){renderChatMessages([]);}
  if(matchChatChannel){sb.removeChannel(matchChatChannel);matchChatChannel=null;}
  matchChatChannel=sb.channel('chat-'+currentChatMatchId)
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'match_comments',filter:'match_id=eq.'+currentChatMatchId},payload=>{
      const list=document.getElementById('matchChatList');
      if(!list)return;
      const existing=list.querySelectorAll('.chat-msg').length;
      if(existing===0||!list.querySelector('.chat-msg')){renderChatMessages([payload.new]);return;}
      const t=new Date(payload.new.created_at);
      const hh=String(t.getHours()).padStart(2,'0'),mm=String(t.getMinutes()).padStart(2,'0');
      list.insertAdjacentHTML('beforeend',`<div class="chat-msg"><span class="chat-msg-name">${escapeHtml(payload.new.name)}</span>${escapeHtml(payload.new.message)}<span class="chat-msg-time">${hh}:${mm}</span></div>`);
      list.scrollTop=list.scrollHeight;
    }).subscribe();
}
function stopMatchChat(){
  if(matchChatChannel&&window.sb){sb.removeChannel(matchChatChannel);matchChatChannel=null;}
  currentChatMatchId=null;
}
async function sendMatchComment(){
  const input=document.getElementById('matchChatInput');
  if(!input)return;
  const message=input.value.trim();
  if(!message||!currentChatMatchId||!window.sb)return;
  input.value='';
  try{
    await sb.from('match_comments').insert({match_id:currentChatMatchId,name:getChatDisplayName(),message:message.slice(0,200)});
  }catch(e){}
}

/* ========== AI IZVJEŠTAJ UTAKMICE ========== */
async function generateAiReport(){
  const btn=document.getElementById('repGenerateBtn');
  const home=document.getElementById('repHome').value.trim();
  const away=document.getElementById('repAway').value.trim();
  const homeScore=document.getElementById('repHomeScore').value;
  const awayScore=document.getElementById('repAwayScore').value;
  if(!home||!away||homeScore===''||awayScore===''){
    alert('Popuni bar domaćina, gosta i rezultat.');
    return;
  }
  const payload={
    home,away,
    homeScore:Number(homeScore),awayScore:Number(awayScore),
    halftimeScore:document.getElementById('repHalftime').value.trim(),
    comp:document.getElementById('repComp').value,
    round:document.getElementById('repRound').value.trim(),
    stadium:document.getElementById('repStadium').value.trim(),
    date:document.getElementById('repDate').value.trim(),
    scorersHome:document.getElementById('repScorersHome').value.trim(),
    scorersAway:document.getElementById('repScorersAway').value.trim(),
    cards:document.getElementById('repCards').value.trim(),
    lineupsNote:document.getElementById('repLineups').value.trim(),
    keyMoments:document.getElementById('repKeyMoments').value.trim(),
    tone:document.getElementById('repTone').value
  };
  const originalText=btn.textContent;
  btn.textContent='⏳ Generišem...';
  btn.style.opacity='0.6';
  try{
    const res=await fetch('/api/ai-report',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-admin-token':localStorage.getItem('rolajme_admin_token')||''},
      body:JSON.stringify(payload)
    });
    const json=await res.json();
    if(res.status===401){
      localStorage.removeItem('rolajme_admin_token');
      alert('Pogrešna lozinka. Pokušaj ponovo.');
      navTo('more');
      return;
    }
    if(!res.ok||json.error){
      alert('Greška: '+(json.error||'Nepoznata greška'));
      return;
    }
    document.getElementById('repResultText').value=json.report||'';
    document.getElementById('repResultWrap').style.display='block';
    document.getElementById('repResultWrap').scrollIntoView({behavior:'smooth'});
  }catch(e){
    alert('Greška pri povezivanju sa serverom. Provjeri internet konekciju.');
  }finally{
    btn.textContent=originalText;
    btn.style.opacity='1';
  }
}
function copyAiReport(){
  const ta=document.getElementById('repResultText');
  ta.select();
  try{
    document.execCommand('copy');
    alert('Tekst kopiran! Možeš ga zalijepiti u WordPress.');
  }catch(e){
    navigator.clipboard&&navigator.clipboard.writeText(ta.value);
  }
}

function openTag(tagText,isCategory){
  navTo('news');
  if(isCategory){
    const match=CAT_LIST.find(c=>catMatches(tagText,c.key));
    const key=match?match.key:'all';
    currentNewsCategory=key;
    const bar=document.getElementById('newsCategoryBar');
    if(bar){bar.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c.dataset.cat===key));}
    renderNewsFull(key);
  }else{
    const wrap=document.getElementById('searchWrap');
    const input=document.getElementById('searchInput');
    if(wrap)wrap.style.display='block';
    if(input){input.value=tagText;filterNewsSearch(tagText);}
  }
}

function showToast(text){
  const t=document.getElementById('appToast');
  if(!t)return;
  t.textContent=text;
  t.classList.add('show');
  clearTimeout(t._hideTimer);
  t._hideTimer=setTimeout(()=>t.classList.remove('show'),2200);
}

function renderMiniTable(){
  const c=document.getElementById('miniTable');
  if(!c)return;
  const data=standingsData['1cfl'];
  let html=`<div class="table-row table-header"><div>#</div><div></div><div>OU</div><div>P</div><div>N</div><div>I</div><div>GR</div><div>B</div></div>`;
  data.slice(0,5).forEach(row=>{
    const pd=row.pos<=3?`<div class="pos-medal pos-${row.pos}">${row.pos}</div>`:`<div style="text-align:center;font-weight:700;font-size:12px">${row.pos}</div>`;
    html+=`<div class="table-row">${pd}<div class="team-name-cell" style="display:flex;align-items:center;gap:8px"><span style="width:20px;height:20px;flex-shrink:0;display:inline-flex">${teamLogoImg(row.team)}</span>${row.team}</div><div>${row.ou}</div><div>${row.p}</div><div>${row.n}</div><div>${row.i}</div><div class="gr" style="color:${row.gr>0?'var(--success)':row.gr<0?'var(--error)':'var(--text-secondary)'}">${row.gr>0?'+'+row.gr:row.gr}</div><div class="pts">${row.b}</div></div>`;
  });
  c.innerHTML=html;
}
function renderQuickStats(){
  const c=document.getElementById('quickStats');
  if(!c)return;
  const data=standingsData['1cfl'];
  const leader=data[0];
  c.innerHTML=[
    {value:leader.team,label:'Lider tabele'},
    {value:leader.ou,label:'Odigrano kola'},
    {value:data.length,label:'Klubova u ligi'}
  ].map(s=>`<div class="stat-card"><div class="stat-num">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('');
}

/* STRIJELCI, izvor: FSCG (9. avgust 2026.) — foto se ne prikazuje automatski, ostaje prazna dok se ne upload-uje */
const TOP_SCORERS=[
  {name:'Dejan Perović',club:'Bokelj',goals:2},
  {name:'Mark Đokaj',club:'Dečić',goals:2},
  {name:'Arsenije Čepić',club:'Mladost DG',goals:1},
  {name:'Caique Augusto Correia Chagas',club:'Otrant-Olympic',goals:1},
  {name:'Ivan Bulatović',club:'Budućnost',goals:1}
];
function renderTopScorers(){
  const c=document.getElementById('topScorersList');
  if(!c)return;
  c.innerHTML=TOP_SCORERS.map((s,i)=>{
    const custom=safeGet('rolajme_player_photo_'+encodeURIComponent(s.name));
    const photoHtml=custom
      ?`<img class="player-photo" src="${custom}" alt="${s.name}">`
      :`<div class="player-photo-placeholder">👤</div>`;
    const safeId='sc_'+i+'_'+s.name.replace(/[^a-zA-Z0-9]/g,'');
    return `<div class="player-card">
      <div class="player-photo-wrap">
        ${photoHtml}
        <label class="player-photo-add" for="${safeId}">+</label>
        <input type="file" id="${safeId}" accept="image/*" style="display:none" onchange="uploadPlayerPhoto('${s.name.replace(/'/g,"\\'")}',this);setTimeout(renderTopScorers,50)">
      </div>
      <div class="player-info">
        <div class="player-name">${i+1}. ${s.name}</div>
        <div class="player-club">${s.club}</div>
      </div>
      <div style="font-weight:900;font-size:16px;color:var(--primary)">${s.goals} ⚽</div>
    </div>`;
  }).join('');
}

/* ========== STANDINGS RENDERER ========== */
function renderStandings(league){
  const sofaWrap=document.getElementById('sofascoreWrap');
  const customWrap=document.getElementById('customStandingsWrap');
  if(league==='1cfl'){
    if(sofaWrap)sofaWrap.innerHTML='<div style="margin:16px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow)"><iframe id="sofa-standings-embed-4689-96969" src="https://widgets.sofascore.com/embed/tournament/4689/season/96969/standings/1.%20CFL%2026%2F27?widgetTitle=1.%20CFL%2026%2F27&showCompetitionLogo=true" style="height:723px;max-width:100%;width:100%;border:none;display:block" frameborder="0" scrolling="no"></iframe><div style="font-size:11px;font-family:var(--font);text-align:left;padding:8px 12px;color:var(--text-secondary);background:var(--surface-elevated)">Tabela obezbjeđena od <a target="_blank" href="https://www.sofascore.com/football/tournament/montenegro/1-cfl/154#id:96969" style="color:var(--primary)">Sofascore</a></div></div>';
    if(customWrap)customWrap.style.display='none';
    return;
  }
  if(sofaWrap)sofaWrap.innerHTML='';
  if(customWrap)customWrap.style.display='';
  const table=document.getElementById('standingsTable');
  const stats=document.getElementById('standingsStats');
  const legend=document.getElementById('standingsLegend');
  const note=document.getElementById('standingsNote');
  const data=standingsData[league]||[];
  if(!table)return;
  if(note)note.textContent=STANDINGS_NOTES[league]||'';

  const leader=data[0];
  const played=data.filter(d=>d.ou>0);
  const bestAttack=played.length?played.reduce((a,b)=>a.dg>b.dg?a:b,played[0]):null;
  const bestDef=played.length?played.reduce((a,b)=>a.pg<b.pg?a:b,played[0]):null;
  if(stats){
    stats.innerHTML=[
      {value:leader?leader.team:'-',label:'Lider'},
      {value:bestAttack?bestAttack.team:'-',label:'Najbolji napad'},
      {value:bestDef?bestDef.team:'-',label:'Najbolja odbrana'},
      {value:data.length,label:'Timova'}
    ].map(s=>`<div class="stat-card"><div class="stat-num" style="font-size:20px">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('');
  }

  let html=`<div class="st-row st-header"><div>#</div><div></div><div>Tim</div><div>OU</div><div>P</div><div>N</div><div>I</div><div>DG</div><div>PG</div><div>GR</div><div>B</div><div>Forma</div></div>`;
  data.forEach(row=>{
    let cls='';
    if(league==='1cfl'){
      if(row.pos===1)cls='champions';else if(row.pos===2)cls='conference';else if(row.pos>=9)cls='relegation';
    }
    const pd=row.pos<=3?`<div class="pos-medal pos-${row.pos}">${row.pos}</div>`:`<div style="text-align:center;font-weight:700;font-size:11px">${row.pos}</div>`;
    const formHtml=(row.form||[]).slice(-5).map(f=>`<span class="form-dot form-${f.toLowerCase()}"></span>`).join('');
    html+=`<div class="st-row ${cls}">${pd}<div class="st-logo">${row.team.charAt(0)}</div><div class="st-team"><span class="st-team-name">${row.team}</span></div><div>${row.ou}</div><div>${row.p}</div><div>${row.n}</div><div>${row.i}</div><div>${row.dg}</div><div>${row.pg}</div><div class="st-gr ${row.gr>0?'pos':row.gr<0?'neg':''}">${row.gr>0?'+'+row.gr:row.gr}</div><div class="st-pts">${row.b}</div><div>${formHtml}</div></div>`;
  });
  table.innerHTML=html;

  if(legend){
    if(league==='1cfl'){
      legend.innerHTML=`<div class="legend-item"><span class="legend-dot gold"></span> Liga šampiona</div><div class="legend-item"><span class="legend-dot silver"></span> Liga konferencija</div><div class="legend-item"><span class="legend-dot red"></span> Ispadanje</div>`;
    }else{
      legend.innerHTML=`<div class="legend-item"><span class="legend-dot gold"></span> Ulazak u 1. CFL</div><div class="legend-item"><span class="legend-dot red"></span> Ispadanje u regionalne lige</div>`;
    }
  }
}

/* ========== NEWS RENDERERS ========== */
function renderNewsFull(category){
  const featured=document.getElementById('newsFeatured');
  const list=document.getElementById('newsListFull');
  if(!featured||!list)return;
  let filtered=news;
  if(category!=='all'){filtered=news.filter(n=>catMatches(n.category,category));}
  if(filtered.length>0){
    const f=filtered[0];
    const imgStyle=f.image?" style=\"background-image:url('"+f.image+"');background-size:cover;background-position:center\"":'';
    featured.innerHTML=`<div class="featured-news" onclick="openArticle(${f.id})"${imgStyle}>
      <div style="position:absolute;top:16px;left:16px;z-index:2"><div class="featured-tag">${f.emoji} ${f.category}</div></div>
      <div class="featured-overlay"><div class="featured-title">${f.title}</div></div>
    </div>`;
  }else{featured.innerHTML='';}
  list.innerHTML=filtered.slice(1).map((n,i)=>{
    const tc=getNewsTagClass(n.category);
    return `<div class="news-card stagger-${Math.min(i+1,5)}" onclick="openArticle(${n.id})">
      ${newsThumb(n)}
      <div class="news-content">
        <div class="news-tag ${tc}">${n.category}</div>
        <div class="news-title">${n.title}</div>
        <div class="news-meta"><span class="news-dot"></span> ${n.time} · ${n.readTime} min čitanja</div>
      </div>
    </div>`;
  }).join('');
  if(filtered.length<=1){
    list.innerHTML+=`<div style="padding:40px 20px;text-align:center;color:var(--text-tertiary);font-size:13px;font-weight:600">Nema više vesti u ovoj kategoriji</div>`;
  }
}
function renderNewsFiltered(filtered){
  const featured=document.getElementById('newsFeatured');
  const list=document.getElementById('newsListFull');
  if(!featured||!list)return;
  featured.innerHTML='';
  if(filtered.length===0){
    list.innerHTML=`<div style="padding:60px 20px;text-align:center;color:var(--text-tertiary)">
      <div style="font-size:40px;margin-bottom:12px">🔍</div>
      <div style="font-size:15px;font-weight:700">Nema rezultata</div>
      <div style="font-size:13px;margin-top:6px">Pokušaj drugačije ključne riječi</div></div>`;
    return;
  }
  list.innerHTML=filtered.map((n,i)=>{
    const tc=getNewsTagClass(n.category);
    return `<div class="news-card stagger-${Math.min(i+1,5)}" onclick="openArticle(${n.id})">
      <div class="news-thumb">${n.emoji}</div>
      <div class="news-content">
        <div class="news-tag ${tc}">${n.category}</div>
        <div class="news-title">${n.title}</div>
        <div class="news-meta"><span class="news-dot"></span> ${n.time} · ${n.readTime} min</div>
      </div>
    </div>`;
  }).join('');
}

/* ========== UTAKMICE (EKRAN 2) ========== */
function initMatchTabs(){
  document.querySelectorAll('#matchesTabRow').forEach(row=>{
    row.addEventListener('click',e=>{
      const btn=e.target.closest('.tab-btn');if(!btn)return;
      row.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');currentMatchTab=btn.dataset.tab;renderMatches(currentMatchTab);
    });
  });
}
function renderMatches(tab){
  const c=document.getElementById('matchesContent');if(!c)return;
  currentMatchTab=tab;let html='';
  const compFilter=currentMatchLeague==='2cfl'?'2. CFL':'1. CFL';
  if(tab==='schedule'){
    const grouped={};
    upcomingMatches.filter(m=>m.comp===compFilter).forEach(m=>{if(!grouped[m.date])grouped[m.date]=[];grouped[m.date].push(m)});
    for(const[date,matches]of Object.entries(grouped)){
      html+=`<div class="date-header">${date}</div>`;
      matches.forEach(m=>{
        html+=`<div class="match-card" onclick="openMatchDetail('schedule','${m.id}')">
          <div class="match-header"><span class="match-comp">🏆 ${m.comp} — ${m.round}. kolo</span><span style="color:var(--gold);font-weight:800">${m.time}</span></div>
          <div class="match-teams"><div class="match-team"><div class="match-logo">${teamLogoImg(m.home)}</div><div class="match-name">${m.home}</div></div>
          <div class="match-divider"><div class="match-score">—</div><div class="match-vs">VS</div></div>
          <div class="match-team"><div class="match-logo">${teamLogoImg(m.away)}</div><div class="match-name">${m.away}</div></div></div>
          <div class="match-time">📍 ${m.stadium}</div>
          <div class="match-actions"><button class="match-btn primary" onclick="event.stopPropagation()">🔔 Podsjeti</button>
          ${m.tv?`<button class="match-btn tv" onclick="event.stopPropagation()">📺 ${m.tv}</button>`:''}</div></div>`;
      });
    }
    if(!html){html='<div style="padding:40px;text-align:center;color:var(--text-secondary)">Trenutno nema zakazanih utakmica</div>';}
  }else if(tab==='results'){
    const filteredResults=results.slice().reverse().filter(r=>r.comp===compFilter);
    filteredResults.forEach(r=>{
      html+=`<div class="match-card" onclick="openMatchDetail('result','${r.id}')">
        <div class="match-header"><span class="match-comp">🏆 ${r.comp} — ${r.round}. kolo</span><span style="color:var(--success);font-weight:800;font-size:11px">Završeno</span></div>
        <div class="match-teams"><div class="match-team"><div class="match-logo">${teamLogoImg(r.home)}</div><div class="match-name">${r.home}</div></div>
        <div class="match-divider"><div class="match-score">${r.homeScore} - ${r.awayScore}</div></div>
        <div class="match-team"><div class="match-logo">${teamLogoImg(r.away)}</div><div class="match-name">${r.away}</div></div></div>
        <div class="match-time">${r.date}</div>
        <div class="match-actions"><button class="match-btn" onclick="event.stopPropagation()">📰 Izveštaj</button></div></div>`;
    });
    if(!html){html='<div style="padding:40px;text-align:center;color:var(--text-secondary)">Još nema odigranih utakmica u ovoj ligi</div>';}
  }else if(tab==='live'){
    const filteredLive=liveMatches.filter(m=>m.comp===compFilter);
    if(!filteredLive.length){html='<div style="padding:40px;text-align:center;color:var(--text-secondary)">Trenutno nema utakmica uživo</div>';}
    filteredLive.forEach(m=>{
      html+=`<div class="live-match-card" onclick="openMatchDetail('live','${m.id}')">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><span class="match-comp">🏆 ${m.comp}</span><span class="live-pill">LIVE ${m.minute}'</span></div>
        <div class="match-teams"><div class="match-team"><div class="match-logo">${teamLogoImg(m.home)}</div><div class="match-name">${m.home}</div></div>
        <div class="match-divider"><div class="match-score live">${m.homeScore} - ${m.awayScore}</div></div>
        <div class="match-team"><div class="match-logo">${teamLogoImg(m.away)}</div><div class="match-name">${m.away}</div></div></div>
        <div class="live-events">${(m.events||[]).map(ev=>{const icon=ev.type==='goal'?'⚽':ev.type==='yellow'?'🟨':ev.type==='red'?'🟥':'📝';return `<div class="live-event ${ev.team}"><span class="live-event-time">${ev.time}</span><span>${icon}</span><span class="live-event-text">${ev.player}</span></div>`;}).join('')}</div></div>`;
    });
  }
  c.innerHTML=html;
}
function openMatchDetail(type,id){
  let match;
  if(type==='schedule')match=upcomingMatches.find(m=>m.id===id);
  else if(type==='result')match=results.find(m=>m.id===id);
  else match=liveMatches.find(m=>m.id===id);
  if(!match)return;
  const isLive=type==='live';
  const hero=document.getElementById('matchDetailHero');
  hero.innerHTML=`<div class="match-detail-teams">
    <div><div class="match-detail-logo">${teamLogoImg(match.home)}</div><div class="match-detail-name">${match.home}</div></div>
    <div><div class="match-detail-score ${isLive?'live':''}">${isLive?match.homeScore+' - '+match.awayScore:(match.homeScore!==undefined?match.homeScore+' - '+match.awayScore:'vs')}</div>
    <div class="match-detail-info">${isLive?match.minute+"'":(match.time||match.date)}</div>
    ${isLive?'<div style="text-align:center"><span class="match-detail-status live">● UŽIVO</span></div>':'<div style="text-align:center"><span class="match-detail-status">'+(match.comp||'1. CFL')+'</span></div>'}</div>
    <div><div class="match-detail-logo">${teamLogoImg(match.away)}</div><div class="match-detail-name">${match.away}</div></div></div>`;
  renderDetailContent('summary',match,type);
  document.querySelectorAll('.detail-tab').forEach(b=>b.classList.remove('active'));
  document.querySelector('.detail-tab[data-dtab="summary"]').classList.add('active');
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-match-detail').classList.add('active');
  document.getElementById('matchDetailScroll').scrollTop=0;
}
function closeMatchDetail(){
  stopMatchChat();
  document.getElementById('screen-match-detail').classList.remove('active');
  document.getElementById('screen-matches').classList.add('active');
}
let currentDetailMatch=null,currentDetailType=null;
function initDetailTabs(){
  document.querySelectorAll('#detailTabs').forEach(row=>{
    row.addEventListener('click',e=>{
      const btn=e.target.closest('.detail-tab');if(!btn)return;
      row.querySelectorAll('.detail-tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      if(currentDetailMatch)renderDetailContent(btn.dataset.dtab,currentDetailMatch,currentDetailType);
    });
  });
}
function renderDetailContent(tab,match,type){
  currentDetailMatch=match;currentDetailType=type;
  const c=document.getElementById('detailContent');
  if(tab==='summary'){
    let html='<div style="text-align:center;padding:20px;color:var(--text-secondary);font-size:13px">';
    if(type==='schedule'){html+=`🏟️ ${match.stadium}<br><br>⏰ ${match.time}<br><br>📺 ${match.tv||'Nema TV prenosa'}`;}
    else if(type==='live'){
      html+=`<div style="display:flex;flex-direction:column;gap:10px;text-align:left">`;
      (match.events||[]).forEach(ev=>{
        const icon=ev.type==='goal'?'⚽':ev.type==='yellow'?'🟨':'🟥';
        html+=`<div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--surface-elevated);border-radius:12px;border:1px solid var(--border)">
          <span style="font-weight:800;color:var(--text-secondary);font-size:11px">${ev.time}</span><span>${icon}</span>
          <span style="font-weight:700;font-size:13px">${ev.player}</span>
          <span style="margin-left:auto;font-size:11px;color:var(--text-tertiary)">${ev.team==='home'?match.home:match.away}</span></div>`;
      });
      html+=`</div>`;
    }else{html+=`Konačan rezultat: ${match.homeScore} - ${match.awayScore}<br><br>📅 ${match.date}<br><br>🏆 ${match.comp}`;}
    html+='</div>';c.innerHTML=html;
  }else if(tab==='stats'&&match.stats){
    const s=match.stats;
    c.innerHTML=`<div class="detail-stat-row"><span class="detail-stat-val">${s.possession[0]}%</span>
      <div class="detail-stat-bar"><div class="detail-stat-fill" style="width:${s.possession[0]}%;background:linear-gradient(90deg,var(--primary),var(--primary-dark))"></div></div>
      <span class="detail-stat-label">Posjed lopte</span>
      <div class="detail-stat-bar"><div class="detail-stat-fill" style="width:${s.possession[1]}%;background:linear-gradient(90deg,var(--gold),var(--gold-dark))"></div></div>
      <span class="detail-stat-val">${s.possession[1]}%</span></div>`;
  }else if(tab==='lineup'){
    c.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-secondary);font-size:13px">Sastavi biće dostupni kad povežemo zvaničnu evidenciju klubova.</div>';
  }else if(tab==='chat'){
    c.innerHTML=`<div id="matchChatList" class="match-chat-list"><div style="text-align:center;padding:20px;color:var(--text-tertiary);font-size:12px">Učitavanje komentara...</div></div>
      <div class="match-chat-input-row">
        <input type="text" id="matchChatInput" placeholder="Napiši komentar..." maxlength="200" onkeydown="if(event.key==='Enter')sendMatchComment()">
        <button onclick="sendMatchComment()">Pošalji</button>
      </div>`;
    initMatchChat(match.id||(match.home+'-'+match.away));
  }else{
    c.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-secondary);font-size:13px">Podaci uskoro dostupni</div>';
  }
}

/* ========== ARTICLE DETAIL (EKRAN 6) ========== */
function sanitizeArticleContent(html){
  if(!html)return html;
  // Uklanja SVE inline style/class atribute (bilo sa " ili ' navodnicima)
  return html.replace(/\s(style|class)=(?:"[^"]*"|'[^']*')/gi,'');
}
function cleanDuplicateHeroAndTitle(html,item){
  try{
    const wrapper=document.createElement('div');
    wrapper.innerHTML=html;
    // Uklanja SVAKU sliku iz teksta clanka - foto se svakako vec prikazuje gore u hero-u,
    // pa nema potrebe da je "pogaЂamo" po URL-u (WordPress cesto koristi razlicite velicine iste slike)
    wrapper.querySelectorAll('img').forEach(img=>{
      const fig=img.closest('figure');
      if(fig)fig.remove();else img.remove();
    });
    // Uklanja SVAKI heading (h1-h6) - naslov vec prikazujemo gore, tekst clanka ne treba svoj naslov
    wrapper.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h=>h.remove());
    // Uklanja prazne paragrafe koji ostanu iza (i eventualne prazne figure/div)
    wrapper.querySelectorAll('p,div,figure').forEach(el=>{
      if(!el.textContent.trim()&&!el.querySelector('img'))el.remove();
    });
    return wrapper.innerHTML;
  }catch(e){return html;}
}
function openArticle(id,skipUrl){
  const item=news.find(n=>n.id===id);
  if(!item)return;
  currentArticleId=id;
  const hero=document.getElementById('articleHero');
  if(hero)hero.style.backgroundImage=item.image?"url('"+item.image+"')":'';
  document.getElementById('articleBadgeText').textContent=item.category;
  document.getElementById('articleTitle').textContent=item.title;
  document.getElementById('articleTime').textContent=item.time;
  document.getElementById('articleReadTime').textContent='⏱ '+item.readTime+' min';
  let bodyHtml=sanitizeArticleContent(item.content)||'<p>Detaljan tekst ove vijesti biće ovdje prikazan kada se aplikacija poveže sa stvarnim sadržajem sa rolaj-me.com.</p>';
  bodyHtml=cleanDuplicateHeroAndTitle(bodyHtml,item);
  document.getElementById('articleText').innerHTML=bodyHtml;
  const tags=[item.category,'Crna Gora','Fudbal'];
  document.getElementById('articleTags').innerHTML=tags.map((t,i)=>
    '<span class="article-tag" onclick="openTag('+JSON.stringify(t)+','+(i===0)+')">#'+t.replace(/\s+/g,'')+'</span>'
  ).join('');
  const related=news.filter(n=>n.id!==id).slice(0,3);
  document.getElementById('articleRelated').innerHTML=related.map(r=>
    '<div class="article-related-item" onclick="openArticle('+r.id+')">'+
      '<div class="article-related-thumb">'+r.emoji+'</div>'+
      '<div class="article-related-text">'+
        '<div class="article-related-tag">'+r.category+'</div>'+
        '<div class="article-related-headline">'+r.title+'</div>'+
      '</div>'+
    '</div>'
  ).join('');
  updateArticleButtons();
  renderReactions(id);
  trackCategoryClick(item.category);
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-article').classList.add('active');
  document.getElementById('articleScroll').scrollTop=0;
  if(!skipUrl){
    try{history.pushState({articleId:id},'',location.pathname+'?vijest='+id);}catch(e){}
  }
}
function closeArticle(){
  document.getElementById('screen-article').classList.remove('active');
  const back=currentScreen||'home';
  const target=document.getElementById('screen-'+back);
  if(target)target.classList.add('active');
  try{history.pushState({},'',location.pathname);}catch(e){}
}
function checkArticleLinkFromUrl(){
  try{
    const params=new URLSearchParams(location.search);
    const id=params.get('vijest');
    if(id){
      const numId=isNaN(Number(id))?id:Number(id);
      if(news.find(n=>n.id===numId))openArticle(numId,true);
    }
  }catch(e){}
}
window.addEventListener('popstate',()=>{
  if(!location.search.includes('vijest=')&&document.getElementById('screen-article').classList.contains('active')){
    closeArticle();
  }
});
function toggleSaveArticle(){
  if(!currentArticleId)return;
  const idx=savedArticles.indexOf(currentArticleId);
  if(idx>-1)savedArticles.splice(idx,1);else savedArticles.push(currentArticleId);
  safeSet('rolajme_saved',JSON.stringify(savedArticles));
  updateArticleButtons();
  renderProfileStats();pushFavoritesToRemote();
}
function likeArticle(btn){
  if(!currentArticleId)return;
  const idx=likedArticles.indexOf(currentArticleId);
  if(idx>-1)likedArticles.splice(idx,1);else likedArticles.push(currentArticleId);
  safeSet('rolajme_liked',JSON.stringify(likedArticles));
  updateArticleButtons();
}
function updateArticleButtons(){
  const isSaved=savedArticles.includes(currentArticleId);
  const isLiked=likedArticles.includes(currentArticleId);
  document.querySelectorAll('.article-action-btn.save').forEach(b=>b.classList.toggle('active',isSaved));
  const saveIcon=document.getElementById('saveIcon');
  const saveText=document.getElementById('saveText');
  if(saveIcon)saveIcon.textContent='🔖';
  if(saveText)saveText.textContent=isSaved?'Sačuvano':'Sačuvaj';
  const topSave=document.getElementById('articleSaveBtnTop');
  if(topSave)topSave.classList.toggle('saved',isSaved);
  document.querySelectorAll('.article-action-btn.like').forEach(b=>b.classList.toggle('active',isLiked));
  const likeIcon=document.getElementById('likeIcon');
  const likeText=document.getElementById('likeText');
  if(likeIcon)likeIcon.textContent=isLiked?'💗':'❤️';
  if(likeText)likeText.textContent=isLiked?'Sviđa ti se':'Sviđa mi se';
}
function shareArticle(){
  const item=news.find(n=>n.id===currentArticleId);
  if(!item)return;
  if(navigator.share){navigator.share({title:item.title,text:item.title}).catch(()=>{})}
}

/* ========== OFFLINE & PTR ========== */
function initOffline(){
  const badge=document.getElementById('offlineBadge');
  const upd=()=>badge.classList.toggle('show',!navigator.onLine);
  window.addEventListener('online',upd);window.addEventListener('offline',upd);upd();
}
function initPullToRefresh(){
  document.querySelectorAll('.scroll-area').forEach(area=>{
    let startY=0,isPulling=false;
    area.addEventListener('touchstart',e=>{if(area.scrollTop===0){startY=e.touches[0].clientY;isPulling=true}},{passive:true});
    area.addEventListener('touchmove',e=>{
      if(!isPulling)return;
      if(e.touches[0].clientY-startY>80&&area.scrollTop===0){document.getElementById('ptrIndicator').classList.add('show');}
    },{passive:true});
    area.addEventListener('touchend',()=>{
      if(document.getElementById('ptrIndicator').classList.contains('show')){
        setTimeout(()=>{
          document.getElementById('ptrIndicator').classList.remove('show');
          renderLiveTicker();renderNewsList();renderStandings(currentStandingsLeague);renderNewsFull(currentNewsCategory);
        },1200);
      }
      isPulling=false;
    });
  });
}
</script>
</body>
</html>
