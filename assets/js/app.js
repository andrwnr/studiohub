(function(){
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const CREDITS=[["host","Host"],["narator","Narator"],["naskah","Penulis Naskah"],["produser","Produser"],["editor","Video Editor"],["videografer","Videographer"],["kreatif","Kreatif"],["penulis","Penulis"],["vj","Video Journalist"]];
  const PEOPLE=["Andika Pratama","Dewi Lestari","Rizky Maulana","Sari Wulandari","Bagas Nugroho","Nadia Puspita","Fajar Hidayat","Putri Anggraini","Yoga Saputra","Mega Safitri"];
  const SAMPLES={
    kompas:"https://megapolitan.kompas.com/read/2026/10/11/15300071/uji-coba-mrt-fase-2a-bundaran-hi-harmoni-dimulai-ini-rute-dan-jadwalnya",
    ig:"https://www.instagram.com/reel/C9xMRTfase2A/",
    none:""
  };
  const SCEN={
    kompas:{pill:"kompas.com · artikel",pillCls:"kompas",thumbCls:"t1",
      ptitle:"Uji Coba MRT Fase 2A Bundaran HI–Harmoni Dimulai, Ini Rute dan Jadwalnya",
      pdesc:"Scraped: 6 paragraf · 1 foto utama · dipublikasikan 11 Okt 2026 15:30 WIB",
      pby:"Byline: Penulis Dewi Lestari · Editor Rizky Maulana",
      cat:"Megapolitan",subcat:"Transportasi",
      title:"Uji Coba MRT Fase 2A Bundaran HI–Harmoni Dimulai, Begini Rute dan Jadwalnya",
      tags:["MRT Jakarta","MRT Fase 2A","Bundaran HI","Harmoni","transportasi Jakarta","uji coba MRT"],
      teaser:"MRT Jakarta mulai menguji coba jalur Fase 2A Bundaran HI–Harmoni. Simak rute, jadwal, dan stasiun yang dilewati.",
      desc:"MRT Jakarta resmi memulai uji coba operasional jalur Fase 2A segmen Bundaran HI–Harmoni pada Sabtu (11/10/2026). Uji coba berlangsung tanpa penumpang selama dua pekan sebelum dibuka untuk publik secara bertahap.\n\nJalur sepanjang 2,8 kilometer ini melewati Stasiun Thamrin, Monas, dan Harmoni. Pada tahap awal, kereta dijalankan setiap 10 menit pada pukul 05.00–22.00 WIB untuk menguji sistem persinyalan dan integrasi dengan jalur Fase 1.\n\nVideo ini merangkum rute, jadwal, serta fasilitas stasiun yang sudah siap digunakan.",
      credits:{penulis:["Dewi Lestari","byline artikel"],editor:["Rizky Maulana","byline artikel"],vj:["Bagas Nugroho","credit title video"],videografer:["Bagas Nugroho","credit title video"],narator:["Nadia Puspita","suara di transkrip"]},
      thumbs:[["t1","Frame 00:12 — fasad stasiun"],["t3","Frame 01:40 — rangkaian kereta"],["t4","Frame 03:05 — peta rute"]],thumbSrc:"frame video",
      srcLabel:"artikel"},
    ig:{pill:"instagram.com · reel @kompascom",pillCls:"ig",thumbCls:"t2",
      ptitle:"@kompascom — \"MRT Fase 2A akhirnya uji coba! Ini jalurnya 🚇\"",
      pdesc:"Scraped: caption 412 karakter · cover image · 1 video 00:58 (9:16) · 12 hashtag",
      pby:"Caption credit: 🎥 @bagas.nugroho · ✍️ @sariwulan",
      cat:"Megapolitan",subcat:"Viral",
      title:"MRT Fase 2A Akhirnya Uji Coba, Ini Jalur Bundaran HI–Harmoni",
      tags:["MRT Jakarta","MRT Fase 2A","video vertikal","Bundaran HI","Harmoni","viral"],
      teaser:"Jalur baru MRT Bundaran HI–Harmoni mulai diuji coba. Lihat suasana stasiunnya dalam 58 detik.",
      desc:"Jalur MRT Jakarta Fase 2A segmen Bundaran HI–Harmoni mulai diuji coba Sabtu (11/10/2026). Dalam video singkat ini terlihat suasana Stasiun Thamrin dan Monas yang sudah siap beroperasi, serta rangkaian kereta yang melintas tanpa penumpang.\n\nUji coba berlangsung dua pekan sebelum dibuka bertahap untuk publik.\n\n(Disadur dari caption Instagram @kompascom; hashtag dikonversi menjadi tags.)",
      credits:{videografer:["Bagas Nugroho","caption @bagas.nugroho"],penulis:["Sari Wulandari","caption @sariwulan"],vj:["Bagas Nugroho","caption @bagas.nugroho"]},
      thumbs:[["t2","Cover reel Instagram"],["t1","Frame 00:05"],["t3","Frame 00:31"]],thumbSrc:"cover Instagram",
      srcLabel:"Instagram"},
    none:{pill:"tanpa URL — hanya dari video",pillCls:"",thumbCls:"t1",
      ptitle:"Transkrip video (04:12)",
      pdesc:"\"…mulai hari ini MRT Jakarta menguji coba jalur Fase 2A dari Bundaran HI menuju Harmoni…\" — 612 kata, bahasa Indonesia, 2 pembicara",
      pby:"Credit title terdeteksi pada 04:05: VJ Bagas Nugroho · Editor Yoga Saputra",
      cat:"Megapolitan",subcat:"Liputan Lapangan",
      title:"MRT Jakarta Uji Coba Jalur Fase 2A Bundaran HI–Harmoni",
      tags:["MRT Jakarta","MRT Fase 2A","Bundaran HI","Harmoni"],
      teaser:"MRT Jakarta menguji coba jalur Fase 2A Bundaran HI–Harmoni selama dua pekan sebelum dibuka untuk publik.",
      desc:"MRT Jakarta memulai uji coba jalur Fase 2A segmen Bundaran HI–Harmoni. Berdasarkan transkrip video, uji coba berlangsung dua pekan tanpa penumpang dengan interval 10 menit pada pukul 05.00–22.00 WIB.\n\n(Disusun dari transkrip audio; belum ada sumber artikel. Mohon verifikasi angka dan nama.)",
      credits:{vj:["Bagas Nugroho","credit title video"],editor:["Yoga Saputra","credit title video"]},
      thumbs:[["t1","Frame 00:12"],["t3","Frame 01:40"],["t4","Frame 03:05"]],thumbSrc:"frame video",
      srcLabel:"transkrip"}
  };

  let state={file:false,scen:null,tags:[],thumb:null,composing:false};

  // credits
  $("#credits").innerHTML=CREDITS.map(([k,l])=>`<div class="field" data-ai="${k}"><label for="c-${k}">${l}<span class="tag ai">AI</span><span class="tag src"></span><span class="tag ok">diubah</span></label><select class="ctl" id="c-${k}"><option value="">Select option</option>${PEOPLE.map(p=>`<option>${p}</option>`).join("")}</select></div>`).join("");

  // file
  const drop=$("#drop"),fi=$("#fileinput");
  drop.addEventListener("click",()=>fi.click());
  drop.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();fi.click();}});
  ["dragenter","dragover"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add("over")}));
  ["dragleave","drop"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove("over");if(ev==="drop")pickFile(e.dataTransfer.files[0])}));
  fi.addEventListener("change",()=>pickFile(fi.files[0]));
  function pickFile(f){
    const name=f?f.name:"liputan-mrt-fase2a.mp4";
    const size=f?(f.size/1e9).toFixed(2)+" GB":"1.2 GB";
    $("#fname").textContent=name;$("#finfo").textContent=size+" · 1920×1080 · 04:12 · 25 fps";
    drop.hidden=true;$("#filecard").hidden=false;state.file=true;
    let p=0;const t=setInterval(()=>{p=Math.min(100,p+7);$("#fprog").style.width=p+"%";$("#fstatus").textContent=p<100?"Mengunggah… "+p+"%":"Upload selesai · siap diproses";if(p>=100)clearInterval(t)},180);
    updateCompose();validate();
    toast("File dipilih. Upload berjalan di latar belakang.");
  }
  $("#fremove").addEventListener("click",()=>{state.file=false;drop.hidden=false;$("#filecard").hidden=true;$("#fprog").style.width="0";fi.value="";updateCompose();validate()});

  // url
  const url=$("#url"),pill=$("#srcpill");
  function detect(v){
    v=(v||"").trim();
    if(!v)return "none";
    if(/kompas\.com\//i.test(v))return "kompas";
    if(/instagram\.com\/(reel|p|tv)\//i.test(v))return "ig";
    return "bad";
  }
  function updatePill(){
    const d=detect(url.value);pill.className="src-pill";
    if(d==="none"){pill.textContent="tanpa URL";}
    else if(d==="kompas"){pill.classList.add("kompas");pill.textContent="kompas.com ✓ bisa di-scrape";}
    else if(d==="ig"){pill.classList.add("ig");pill.textContent="Instagram ✓ bisa di-scrape";}
    else{pill.classList.add("bad");pill.textContent="domain belum didukung";}
    updateCompose();
  }
  url.addEventListener("input",updatePill);
  $$(".samples button").forEach(b=>b.addEventListener("click",()=>{url.value=SAMPLES[b.dataset.sample];updatePill();if(!state.file)pickFile(null);}));
  function updateCompose(){
    const d=detect(url.value);const ok=state.file&&d!=="bad"&&!state.composing;
    $("#compose").disabled=!ok;
    $("#composehint").textContent=!state.file?"Pilih file video dulu untuk mengaktifkan.":d==="bad"?"URL ini belum didukung. Gunakan artikel kompas.com atau konten Instagram, atau kosongkan.":d==="none"?"Tanpa URL: AI hanya memakai transkrip & frame video.":"Siap. AI akan memakai URL + isi video.";
  }

  // compose
  $("#compose").addEventListener("click",async()=>{
    const d=detect(url.value);const sc=SCEN[d==="none"?"none":d];state.scen=sc;state.composing=true;updateCompose();
    $("#composetext").textContent="Memproses…";$("#steps").hidden=false;$("#preview").hidden=true;$("#summary").hidden=true;
    const steps=$$(".step");steps.forEach(s=>s.className="step");
    const t0=Date.now();
    const order=d==="none"?[2,3,4]:[1,2,3,4];
    if(d==="none"){steps[0].querySelector("span.n").textContent="–";steps[0].style.opacity=".45";}else{steps[0].querySelector("span.n").textContent="1";steps[0].style.opacity="";}
    for(const n of order){
      const el=steps[n-1];el.classList.add("run");await wait(n===2?1400:800);el.classList.remove("run");el.classList.add("done");
      if(n===1||(n===2&&d==="none"))showPreview(sc);
    }
    applyScenario(sc);
    const secs=((Date.now()-t0)/1000).toFixed(1);
    $("#s-filled").textContent=$$(".field.ai-filled").length;$("#s-time").textContent=secs+" dtk";
    $("#summary").hidden=false;$("#resetai").hidden=false;
    $("#composetext").textContent="Compose ulang";state.composing=false;updateCompose();validate();
    toast("Auto Compose selesai. Periksa field bertanda ungu sebelum menyimpan.");
    $("#title").focus();
  });
  function showPreview(sc){
    $("#preview").hidden=false;$("#pthumb").className="thumb "+sc.thumbCls;
    const pp=$("#ppill");pp.className="src-pill "+sc.pillCls;pp.textContent=sc.pill;
    $("#ptitle").textContent=sc.ptitle;$("#pdesc").textContent=sc.pdesc;$("#pby").textContent=sc.pby;
  }
  function mark(key,src){const f=document.querySelector(`.field[data-ai="${key}"]`);f.classList.remove("edited");f.classList.add("ai-filled");f.querySelector(".tag.src").textContent="dari "+src;}
  function applyScenario(sc){
    $$(".field[data-ai]").forEach(f=>{f.classList.remove("ai-filled","edited")});
    setSel("#cat",sc.cat);mark("category",sc.srcLabel+" + transkrip");
    setSel("#subcat",sc.subcat);mark("subcat",sc.srcLabel);
    $("#title").value=sc.title;mark("title",sc.srcLabel);
    state.tags=[...sc.tags];renderTags();mark("tags",sc.srcLabel);
    $("#teaser").value=sc.teaser;mark("teaser",sc.srcLabel);
    $("#desc").value=sc.desc;count();mark("desc",sc.srcLabel);
    CREDITS.forEach(([k])=>{setSel("#c-"+k,"")});
    Object.entries(sc.credits).forEach(([k,[name,src]])=>{setSel("#c-"+k,name);mark(k,src)});
    renderThumbs(sc);mark("thumb",sc.thumbSrc);
  }
  function setSel(id,v){const s=$(id);s.value=v;if(s.value!==v){s.value=""}}
  $("#resetai").addEventListener("click",()=>{
    $$(".field.ai-filled").forEach(f=>{f.classList.remove("ai-filled");const c=f.querySelector(".ctl,.tags");if(c&&c.tagName!=="DIV")c.value="";});
    state.tags=[];renderTags();count();$("#thumbs").innerHTML="";state.thumb=null;$("#resetai").hidden=true;$("#summary").hidden=true;validate();toast("Isian AI dihapus.");
  });

  // edited tracking
  document.addEventListener("input",e=>{const f=e.target.closest(".field[data-ai]");if(f&&f.classList.contains("ai-filled")){f.classList.remove("ai-filled");f.classList.add("edited")}validate()});
  document.addEventListener("change",e=>{const f=e.target.closest(".field[data-ai]");if(f&&f.classList.contains("ai-filled")&&e.target.tagName==="SELECT"){f.classList.remove("ai-filled");f.classList.add("edited")}validate()});

  // tags
  const tagsEl=$("#tags"),tagIn=$("#taginput");
  function renderTags(){tagsEl.querySelectorAll(".chip").forEach(c=>c.remove());state.tags.forEach((t,i)=>{const c=document.createElement("span");c.className="chip";c.innerHTML=`${t} <button type="button" aria-label="hapus ${t}">×</button>`;c.querySelector("button").onclick=()=>{state.tags.splice(i,1);renderTags();edited("tags")};tagsEl.insertBefore(c,tagIn)})}
  function edited(k){const f=document.querySelector(`.field[data-ai="${k}"]`);if(f.classList.contains("ai-filled")){f.classList.remove("ai-filled");f.classList.add("edited")}}
  tagIn.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===","){e.preventDefault();const v=tagIn.value.trim();if(v){state.tags.push(v);tagIn.value="";renderTags();edited("tags")}}});

  // thumbs
  function renderThumbs(sc){
    $("#thumbs").innerHTML=sc.thumbs.map(([c,l],i)=>`<button type="button" class="tpick ${i===0?"sel":""}" data-i="${i}"><div class="thumb ${c}"></div><small>${i===0?"✓ dipilih AI — ":""}${l}</small></button>`).join("");
    state.thumb=0;$("#thumbhint").textContent="Klik untuk mengganti pilihan thumbnail.";
    $$(".tpick").forEach(b=>b.addEventListener("click",()=>{$$(".tpick").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");state.thumb=+b.dataset.i;edited("thumb")}));
  }

  // counter & validation
  function count(){$("#desccount").textContent=2000-$("#desc").value.length}
  $("#desc").addEventListener("input",count);
  function validate(){
    const miss=[];if(!state.file)miss.push("File Video");if(!$("#title").value.trim())miss.push("Title");if(!$("#desc").value.trim())miss.push("Description");
    $("#validmsg").textContent=miss.length?miss.length+" field wajib belum terisi: "+miss.join(", "):"Semua field wajib terisi.";
    $("#save").disabled=miss.length>0;
    const manual=["#cat","#subcat","#teaser",...CREDITS.map(([k])=>"#c-"+k)].filter(s=>!$(s).value).length+(state.tags.length?0:1)+(state.thumb===null?1:0);
    $("#s-manual").textContent=manual;
  }
  $("#save").addEventListener("click",()=>{toast("Tersimpan ke Siap. "+$$(".field.ai-filled").length+" field dari AI, "+$$(".field.edited").length+" diubah editor.")});
  $("#draft").addEventListener("click",()=>toast("Draft disimpan."));

  function wait(ms){return new Promise(r=>setTimeout(r,ms))}
  let tt;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),3200)}
  updatePill();validate();
})();
