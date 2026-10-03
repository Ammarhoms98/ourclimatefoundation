/* آلية اللغة المشتركة: تُحمَّل في <head> لتضبط lang/dir ونسخة Bootstrap قبل الرسم */
var LANG='ar';try{LANG=localStorage.getItem('lang')||'ar'}catch(e){}
document.documentElement.lang=LANG;document.documentElement.dir=LANG=='ar'?'rtl':'ltr';
/* تعطيل نسخة Bootstrap غير المناسبة (الروابط الثابتة موجودة في <head> لكل صفحة) */
(function(){var r=document.getElementById('bs-rtl'),l=document.getElementById('bs-ltr');
if(r&&l){r.disabled=LANG!='ar';l.disabled=LANG=='ar'}})();

var T={ar:{brand:'مؤسسة مناخنا',home:'الرئيسية',archive:'الأرشيف',about:'من نحن',contact:'تواصل معنا',sw:'English',
heroT:'معاً نحمي مناخنا… ونزرع الغد',heroP:'نعمل على نشر الوعي المناخي ودعم حلول مستدامة لكوكب أخضر لأجيالنا القادمة.',heroB:'استكشف المحتوى',
latest:'أحدث المقالات',gallery:'المعرض المرئي',news:'ملخص إخباري',read:'اقرأ المزيد',all:'الكل',type:'النوع',cat:'التصنيف',lang:'اللغة',from:'من تاريخ',
tarticle:'مقال',timage:'صورة',tvideo:'فيديو',cclimate:'المناخ',cenergy:'الطاقة',cwater:'المياه',ar:'العربية',en:'الإنجليزية',nores:'لا توجد نتائج.',
trans:'عرض الترجمة',orig:'عرض النص الأصلي',share:'مشاركة',copy:'نسخ الرابط',copied:'تم النسخ!',comments:'التعليقات',name:'الاسم',email:'البريد الإلكتروني',
subject:'الموضوع',msg:'الرسالة',send:'إرسال',post:'نشر التعليق',nocmt:'لا تعليقات بعد، كن أول من يعلّق.',
aboutT:'من نحن',aboutP:'مؤسسة مناخنا منظمة غير ربحية تُعنى بالتوعية البيئية ودعم العمل المناخي المحلي والإقليمي عبر المحتوى المعرفي والمبادرات المجتمعية.',
vision:'رؤيتنا',visionP:'مجتمع واعٍ ومشارك في حماية البيئة وتحقيق التوازن المناخي.',goals:'أهدافنا المناخية',
g1:'نشر الثقافة البيئية والمناخية بلغتين.',g2:'دعم مشاريع الطاقة النظيفة وترشيد الموارد.',g3:'بناء شراكات مع المؤسسات والمجتمعات المحلية.',
contactT:'تواصل معنا',info:'معلومات التواصل',addr:'العنوان: [أضف عنوان المؤسسة]',sent:'تم إرسال رسالتك بنجاح، شكراً لك!',fb:'صفحتنا على فيسبوك',
rights:'© 2026 مؤسسة مناخنا. جميع الحقوق محفوظة.',n1:'إطلاق حملة زراعة الأشجار الموسمية.',n2:'ورشة عمل حول ترشيد المياه للمدارس.',n3:'تقرير جديد عن الطاقة الشمسية محلياً.'},
en:{brand:'Our Climate Foundation',home:'Home',archive:'Archive',about:'About',contact:'Contact',sw:'العربية',
heroT:'Together we protect our climate… and plant tomorrow',heroP:'We spread climate awareness and support sustainable solutions for a greener planet for future generations.',heroB:'Explore content',
latest:'Latest Articles',gallery:'Visual Gallery',news:'News Brief',read:'Read more',all:'All',type:'Type',cat:'Category',lang:'Language',from:'From date',
tarticle:'Article',timage:'Image',tvideo:'Video',cclimate:'Climate',cenergy:'Energy',cwater:'Water',ar:'Arabic',en:'English',nores:'No results found.',
trans:'Show translation',orig:'Show original',share:'Share',copy:'Copy link',copied:'Copied!',comments:'Comments',name:'Name',email:'Email',
subject:'Subject',msg:'Message',send:'Send',post:'Post comment',nocmt:'No comments yet. Be the first!',
aboutT:'About Us',aboutP:'Our Climate Foundation is a non-profit dedicated to environmental awareness and supporting local and regional climate action through knowledge and community initiatives.',
vision:'Our Vision',visionP:'An informed society engaged in protecting the environment and restoring climate balance.',goals:'Our Climate Goals',
g1:'Spread environmental and climate literacy in two languages.',g2:'Support clean energy projects and resource efficiency.',g3:'Build partnerships with institutions and local communities.',
contactT:'Contact Us',info:'Contact Information',addr:'Address: [Add foundation address]',sent:'Your message was sent successfully. Thank you!',fb:'Our Facebook page',
rights:'© 2026 Our Climate Foundation. All rights reserved.',n1:'Seasonal tree-planting campaign launched.',n2:'Water-saving workshop for schools.',n3:'New report on local solar energy.'}};
function t(k){return T[LANG][k]||k}
var FB='https://www.facebook.com/share/1K1zethysb/';
/* محتوى تجريبي: langs = اللغات المتاحة للمحتوى */
var D=[
{id:1,type:'article',cat:'climate',date:'2026-09-20',langs:['ar','en'],img:'earth',ti:{ar:'كيف يؤثر ارتفاع الحرارة على حياتنا اليومية؟',en:'How Rising Temperatures Affect Our Daily Lives'},
 tx:{ar:'يشهد العالم ارتفاعاً متواصلاً في درجات الحرارة، ما ينعكس على الزراعة والصحة والمياه. في هذا المقال نستعرض أبرز الآثار وكيف يمكن للأفراد المساهمة في الحد منها عبر عادات بسيطة.',en:'The world is warming steadily, affecting agriculture, health and water. This article reviews the main impacts and how individuals can help reduce them through simple habits.'}},
{id:2,type:'article',cat:'energy',date:'2026-09-12',langs:['ar','en'],img:'solar',ti:{ar:'الطاقة الشمسية: مستقبل مستدام',en:'Solar Energy: A Sustainable Future'},
 tx:{ar:'انخفضت تكلفة الألواح الشمسية بشكل كبير، مما يجعلها خياراً واقعياً للمنازل والمؤسسات. نناقش هنا الجدوى والتحديات.',en:'Solar panel costs have dropped sharply, making them a realistic choice for homes and institutions. We discuss feasibility and challenges.'}},
{id:3,type:'image',cat:'climate',date:'2026-09-05',langs:['ar','en'],img:'glacier',ti:{ar:'جبال الجليد في تراجع',en:'Retreating Glaciers'},
 tx:{ar:'صورة توثّق تراجع الغطاء الجليدي خلال العقد الأخير.',en:'A photo documenting glacier retreat over the last decade.'}},
{id:4,type:'video',cat:'water',date:'2026-08-28',langs:['ar','en'],img:'river',video:'https://www.w3schools.com/html/mov_bbb.mp4',ti:{ar:'رحلة قطرة ماء',en:'The Journey of a Water Drop'},
 tx:{ar:'فيديو تعريفي قصير عن دورة المياه وأهمية ترشيد الاستهلاك.',en:'A short explainer on the water cycle and why conserving matters.'}},
{id:5,type:'article',cat:'water',date:'2026-08-15',langs:['ar'],img:'lake',ti:{ar:'ترشيد المياه في المنزل: 10 نصائح عملية',en:'Saving Water at Home: 10 Tips'},
 tx:{ar:'من إصلاح التسريبات إلى استخدام الأجهزة الموفّرة، إليك خطوات بسيطة تقلل استهلاكك للمياه.',en:''}},
{id:6,type:'article',cat:'climate',date:'2026-08-01',langs:['en'],img:'trees',ti:{ar:'',en:'Why Reforestation Matters'},
 tx:{ar:'',en:'Forests absorb carbon, protect soil and shelter wildlife. Reforestation is one of the most effective nature-based climate solutions.'}}];
function pick(o){return o[LANG]||o[LANG=='ar'?'en':'ar']}
function fd(d){return new Date(d).toLocaleDateString(LANG=='ar'?'ar':'en-GB',{year:'numeric',month:'long',day:'numeric'})}
function card(i){return '<div class="col-md-6 col-lg-4"><a class="card text-decoration-none text-reset" href="article.html?id='+i.id+'"><img src="https://picsum.photos/seed/'+i.img+'/600/400" alt="">'+
'<div class="card-body"><span class="badge badge-t">'+t('t'+i.type)+'</span><small class="text-muted">'+fd(i.date)+'</small><h5 class="mt-2">'+pick(i.ti)+'</h5></div></a></div>'}
function $(s){return document.querySelector(s)}

document.addEventListener('DOMContentLoaded',function(){
 var pg=location.pathname.split('/').pop()||'index.html';
 var links=[['index.html','home'],['archive.html','archive'],['about.html','about'],['contact.html','contact']];
 $('#nav').innerHTML='<nav class="navbar navbar-expand-md sticky-top"><div class="container"><a class="navbar-brand" href="index.html">🌿 '+t('brand')+'</a>'+
 '<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#m"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="m"><ul class="navbar-nav me-auto ms-md-3">'+
 links.map(function(l){return '<li><a class="nav-link'+(pg==l[0]?' active':'')+'" href="'+l[0]+'">'+t(l[1])+'</a></li>'}).join('')+
 '</ul><button id="sw" class="btn btn-outline-ocf btn-sm">'+t('sw')+'</button></div></div></nav>';
 $('#foot').innerHTML='<footer><div class="container text-center"><p class="mb-1">'+t('brand')+'</p><a href="'+FB+'" target="_blank" rel="noopener">'+t('fb')+'</a><p class="small mt-2 mb-0">'+t('rights')+'</p></div></footer>';
 $('#sw').onclick=function(){try{localStorage.setItem('lang',LANG=='ar'?'en':'ar')}catch(e){}location.reload()};
 document.querySelectorAll('[data-i18n]').forEach(function(e){e.textContent=t(e.dataset.i18n)});
 document.querySelectorAll('[data-ph]').forEach(function(e){e.placeholder=t(e.dataset.ph)});
 document.title=t('brand');
 if(window.page)window.page();
});
