const products = [
  {img:"ositos.jpg",   alt:{es:"Pendientes de ositos de gominola color ámbar",en:"Amber gummy-bear earrings",fr:"Boucles d'oreilles oursons en gélatine ambrés",de:"Bernsteinfarbene Gummibärchen-Ohrringe",it:"Orecchini con orsetti gommosi ambrati",pt:"Brincos de ursinhos de goma âmbar",tr:"Amber renkli jelibon ayıcık küpeler"}},
  {img:"munecas.jpg",  alt:{es:"Pendientes azules de muñeca con lunares blancos",en:"Blue doll earrings with white polka dots",fr:"Boucles d'oreilles poupées bleues à pois blancs",de:"Blaue Puppen-Ohrringe mit weißen Punkten",it:"Orecchini a bambolina blu con pois bianchi",pt:"Brincos de boneca azuis com bolinhas brancas",tr:"Beyaz puantiyeli mavi bebek küpeler"}},
  {img:"flores.jpg",   alt:{es:"Pendientes de flores rosas con cuentas",en:"Pink flower-bead earrings",fr:"Boucles d'oreilles fleurs roses et perles",de:"Ohrringe mit rosa Blütenperlen",it:"Orecchini con fiori e perline rosa",pt:"Brincos de flores cor-de-rosa com contas",tr:"Pembe çiçek boncuklu küpeler"}},
  {img:"bolsos.jpg",   alt:{es:"Pendientes de bolsos naranjas con asas verdes",en:"Orange handbag earrings with green handles",fr:"Boucles d'oreilles sacs orange à anses vertes",de:"Orangefarbene Handtaschen-Ohrringe mit grünen Henkeln",it:"Orecchini a borsetta arancione con manici verdi",pt:"Brincos de malas cor de laranja com alças verdes",tr:"Yeşil saplı turuncu çanta küpeler"}},
  {img:"chuches.jpg",  alt:{es:"Pendientes de bolsitas de chuches «Sweet»",en:"«Sweet» candy-packet earrings",fr:"Boucles d'oreilles sachets de bonbons « Sweet »",de:"„Sweet“-Bonbontüten-Ohrringe",it:"Orecchini con pacchettini di caramelle «Sweet»",pt:"Brincos de pacotes de guloseimas «Sweet»",tr:"«Sweet» şeker paketi küpeler"}},
  {img:"cactus.jpg",   alt:{es:"Pendientes de cactus verdes con ganchos dorados",en:"Green cactus earrings with golden hooks",fr:"Boucles d'oreilles cactus verts à crochets dorés",de:"Grüne Kaktus-Ohrringe mit goldenen Haken",it:"Orecchini a cactus verdi con monachelle dorate",pt:"Brincos de cactos verdes com ganchos dourados",tr:"Altın kancalı yeşil kaktüs küpeler"}},
  {img:"coral.jpg",    alt:{es:"Pendientes coral de jarrón y etiqueta",en:"Coral vase-and-tag earrings",fr:"Boucles d'oreilles corail vase et étiquette",de:"Korallenfarbene Ohrringe: Vase und Anhänger",it:"Orecchini corallo a vaso e targhetta",pt:"Brincos coral de vaso e etiqueta",tr:"Mercan renkli vazo ve etiket küpeler"}},
  {img:"eiffel.jpg",   alt:{es:"Pendientes dorados de esfera trenzada y torre Eiffel",en:"Golden wire-ball and Eiffel tower earrings",fr:"Boucles d'oreilles dorées boule tressée et tour Eiffel",de:"Goldene Ohrringe mit Drahtkugel und Eiffelturm",it:"Orecchini dorati con sfera intrecciata e torre Eiffel",pt:"Brincos dourados de esfera trançada e torre Eiffel",tr:"Altın renkli örgü top ve Eyfel kulesi küpeler"}},
  {img:"puesto.jpg",   alt:{es:"Pendiente con cuenta roja y pececito rosa (puesto)",en:"Earring with red bead and pink fish, worn",fr:"Boucle d'oreille perle rouge et poisson rose, portée",de:"Ohrring mit roter Perle und rosa Fisch, getragen",it:"Orecchino con perlina rossa e pesciolino rosa, indossato",pt:"Brinco com conta vermelha e peixinho rosa, no ouvido",tr:"Kırmızı boncuklu ve pembe balıklı küpe, takılı hâli"}}
];

const i18n = {
  es:{gallery_label:"Galería",hero_title:"Pendientes hechos a mano",hero_sub:"Piezas artesanales de Inés, hechas una a una.",about_title:"Sobre Nita Nies",about_text:"Nita Nies es el proyecto de pendientes artesanales de Inés: piezas pequeñas, coloridas y hechas a mano.",credit:'Hecha por <a href="https://r15studios.github.io/" rel="noopener">R15 Studios</a>'},
  en:{gallery_label:"Gallery",hero_title:"Handmade earrings",hero_sub:"Handcrafted pieces by Inés, made one by one.",about_title:"About Nita Nies",about_text:"Nita Nies is Inés's handmade-earring project: small, colourful pieces, all made by hand.",credit:'Made by <a href="https://r15studios.github.io/" rel="noopener">R15 Studios</a>'},
  fr:{gallery_label:"Galerie",hero_title:"Boucles d'oreilles faites main",hero_sub:"Des pièces artisanales d'Inés, faites une à une.",about_title:"À propos de Nita Nies",about_text:"Nita Nies est le projet de boucles d'oreilles artisanales d'Inés : de petites pièces colorées, faites à la main.",credit:'Réalisé par <a href="https://r15studios.github.io/" rel="noopener">R15 Studios</a>'},
  de:{gallery_label:"Galerie",hero_title:"Handgemachte Ohrringe",hero_sub:"Handgefertigte Stücke von Inés, eines nach dem anderen.",about_title:"Über Nita Nies",about_text:"Nita Nies ist das Ohrring-Projekt von Inés: kleine, farbenfrohe Stücke in Handarbeit.",credit:'Erstellt von <a href="https://r15studios.github.io/" rel="noopener">R15 Studios</a>'},
  it:{gallery_label:"Galleria",hero_title:"Orecchini fatti a mano",hero_sub:"Pezzi artigianali di Inés, fatti uno a uno.",about_title:"Su Nita Nies",about_text:"Nita Nies è il progetto di orecchini artigianali di Inés: pezzi piccoli, colorati e fatti a mano.",credit:'Realizzato da <a href="https://r15studios.github.io/" rel="noopener">R15 Studios</a>'},
  pt:{gallery_label:"Galeria",hero_title:"Brincos feitos à mão",hero_sub:"Peças artesanais da Inés, feitas uma a uma.",about_title:"Sobre a Nita Nies",about_text:"A Nita Nies é o projeto de brincos artesanais da Inés: peças pequenas, coloridas e feitas à mão.",credit:'Feito por <a href="https://r15studios.github.io/" rel="noopener">R15 Studios</a>'},
  tr:{gallery_label:"Galeri",hero_title:"El yapımı küpeler",hero_sub:"Inés'in el işi parçaları, tek tek yapıldı.",about_title:"Nita Nies hakkında",about_text:"Nita Nies, Inés'in el yapımı küpe projesi: küçük, rengârenk, elde yapılmış parçalar.",credit:'<a href="https://r15studios.github.io/" rel="noopener">R15 Studios</a> tarafından yapıldı'}
};

const urlLang = new URLSearchParams(location.search).get("lang");
let lang = (["es","en","fr","de","it","pt","tr"].includes(urlLang) ? urlLang : null)
  || localStorage.getItem("nita-nies-lang")
  || (["es","en","fr","de","it","pt","tr"].includes((navigator.language||"es").slice(0,2)) ? (navigator.language||"es").slice(0,2) : "es");

function render(){
  document.documentElement.lang = lang;
  const t = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach(el=>{ if(t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{ if(t[el.dataset.i18nHtml]) el.innerHTML = t[el.dataset.i18nHtml]; });
  const sel = document.getElementById("lang-select");
  if(sel) sel.value = lang;
  const g = document.getElementById("galeria");
  if(g){
    g.setAttribute("aria-label", t.gallery_label);
    g.innerHTML = "";
    products.forEach((p, idx)=>{
      const fig = document.createElement("figure");
      fig.className = "card";
      const img = document.createElement("img");
      img.src = p.img; img.alt = p.alt[lang] || p.alt.es; img.loading = "eager"; img.decoding = "async";
      const cap = document.createElement("figcaption");
      cap.textContent = p.alt[lang] || p.alt.es;
      fig.appendChild(img); fig.appendChild(cap);
      g.appendChild(fig);
    });
  }
}

document.getElementById("lang-select")?.addEventListener("change", e=>{
  lang = e.target.value;
  localStorage.setItem("nita-nies-lang", lang);
  render();
});
render();
