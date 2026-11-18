(function(){
'use strict';
var I='assets/images/';
var P=[
{id:'greenstop',t:'GreenStop',m:'Projeto acadêmico em equipe · UX/UI',img:'greenstop-telas.webp',alt:'Conjunto das telas do protótipo do aplicativo GreenStop no Figma',
d:'Aplicativo acadêmico de caronas universitárias, desenvolvido em grupo para facilitar o compartilhamento de caronas entre estudantes da UDF.',
obj:'Projetar a experiência de um aplicativo que conecta estudantes que oferecem e procuram carona até a universidade.',
tech:['Figma','Miro','UX/UI','Wireframes','Prototipação'],
part:['Prototipação, documentação e organização das telas','Planejamento no Miro: análise SWOT, priorização de funcionalidades, diagrama Bullseye, matriz de esforço e impacto, método MoSCoW e organização de requisitos'],
more:['O protótipo cobre o fluxo: apresentação, login, cadastro, escolha de perfil, home, busca, lista e detalhes de carona, confirmação, avaliação e perfil.','A equipe fez benchmarking, personas, entrevistas e testes de Thinking Aloud com dois participantes.'],
learn:['Transformar pesquisa com usuários em fluxos de telas','Priorizar funcionalidades com métodos como MoSCoW e matriz de esforço e impacto','Documentar e organizar um projeto em equipe'],
links:[['Repositório no GitHub','https://github.com/Adryan510/GreenStop'],['Protótipo no Figma','https://www.figma.com/proto/DvZxPpxxIpms1omIxPFmfR/GreenStop?node-id=0-1'],['Quadro no Miro','https://miro.com/app/board/uXjVGg5K8_o=/?share_link_id=740671681970']],
shots:['greenstop-telas.webp']},
{id:'restaurante',t:'Gestão de Restaurante',m:'Projeto acadêmico · Banco de dados',img:'gestao-restaurante-eer.webp',alt:'Diagrama EER do banco de dados Gestão de Restaurante com 13 tabelas',
d:'Banco de dados relacional em MySQL para um restaurante, com modelo de 13 tabelas, dados de teste e 18 consultas SQL.',
obj:'Organizar os dados de um restaurante, como pedidos, pagamentos e estoque, em um banco relacional e consultá-los com SQL.',
tech:['MySQL','SQL','Modelagem relacional'],
part:['Modelagem relacional: entidades, relacionamentos, chaves primárias e estrangeiras','Script de inserção de dados de teste nas 13 tabelas','Consultas SQL básicas, intermediárias e avançadas'],
more:['Tabelas: cliente, cargo, funcionario, mesa, categoria, produto, pedido, item_pedido, forma_pagamento, pagamento, fornecedor, fornecedor_produto e movimentacao_estoque.','Consultas no script: SELECT com filtros e ordenação; COUNT, SUM, AVG e MAX; INNER JOIN e LEFT JOIN; GROUP BY e HAVING; subconsultas (escalar, EXISTS, correlacionada e em tabela derivada); CASE e COALESCE.'],
learn:['Traduzir regras de negócio em tabelas e relacionamentos','Escrever consultas com JOIN, GROUP BY e subconsultas','Testar o modelo com dados de exemplo'],
links:[['Ver projeto no GitHub','https://github.com/Adryan510/Banco-de-Dados/tree/main/03-GestaoRestaurante']],
shots:['gestao-restaurante-eer.webp'],cap:'Diagrama EER original, gerado no MySQL Workbench. Clique para ampliar.'},
{id:'direito',t:'Direito Claro',m:'Projeto acadêmico · Tecnologia e Impacto Social',img:'direito-claro-menu.webp',alt:'Menu principal do protótipo Direito Claro com cinco temas',pos:'top',
d:'Protótipo em HTML que busca facilitar o acesso a informações sobre direitos, em linguagem simples.',
obj:'Apresentar temas sobre direitos de forma organizada e em linguagem simples, como exercício de tecnologia com impacto social.',
tech:['HTML','CSS','JavaScript'],
part:['Desenvolvimento de protótipo informativo como atividade acadêmica'],
more:['Temas: BPC/LOAS; planos de saúde e terapias para TEA; educação inclusiva; aposentadoria da pessoa com deficiência; glossário e orientações.'],
learn:['Organizar informação complexa em navegação clara','Praticar HTML, CSS e JavaScript em um projeto com propósito social','Comunicar os limites de um protótipo informativo'],
ns:'Protótipo acadêmico e informativo, sem validação jurídica.',
note:'Projeto acadêmico e protótipo informativo. Não é um serviço jurídico oficial, não oferece aconselhamento jurídico e não passou por validação jurídica institucional.',
links:[['Acessar protótipo','https://adryan510.github.io/Direito-Claro/'],['Repositório no GitHub','https://github.com/Adryan510/Direito-Claro']],shots:['direito-claro-inicio.webp','direito-claro-menu.webp']},
{id:'altas',t:'Altas Notícias',m:'Projeto acadêmico · Front-end',img:'altas-noticias.webp',alt:'Página inicial do site Altas Notícias com carrossel de destaque e cards de notícias',
d:'Site de notícias com menu de categorias, busca, carrossel de destaque e cards de notícias.',
obj:'Construir a interface de um portal de notícias praticando componentes e layout com Bootstrap.',
tech:['HTML','CSS','Bootstrap 5','JavaScript'],
part:['Desenvolvimento do front-end do site como projeto acadêmico'],
more:['A interface reúne navegação por categorias, campo de busca, destaque em carrossel e a seção Últimas notícias.'],
learn:['Montar layouts com componentes do Bootstrap, como carrossel e cards','Organizar uma página com várias seções e categorias'],
links:[['Acessar site','https://adryan510.github.io/Altas-noticias/'],['Repositório no GitHub','https://github.com/Adryan510/Altas-noticias']],shots:['altas-noticias.webp']},
{id:'pet',t:'Petmoster',m:'Projeto acadêmico · Primeiro projeto web',img:'petmoster-inicio.webp',alt:'Página inicial do site conceitual Petmoster, de pet shop',
d:'Site conceitual de pet shop, meu primeiro projeto de desenvolvimento web.',
obj:'Dar os primeiros passos na web criando um site completo apenas com HTML e CSS.',
tech:['HTML','CSS'],
part:['Desenvolvimento completo do site como primeiro contato com a web'],
more:['Apresentação inicial, seção sobre, galeria, mapa e formulário de contato. É o ponto de partida de uma evolução que continua em projetos como Altas Notícias e Direito Claro.'],
learn:['Estruturar uma página em HTML e estilizá-la com CSS','Montar galeria, mapa e formulário de contato'],
links:[['Acessar site','https://adryan510.github.io/Petmoster/'],['Repositório no GitHub','https://github.com/Adryan510/Petmoster']],shots:['petmoster-inicio.webp','petmoster-galeria.webp']}
];
var $=function(s,r){return(r||document).querySelector(s)};
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
var ext=function(l){return '<a class="btn" href="'+l[1]+'" target="_blank" rel="noopener noreferrer">'+esc(l[0])+'</a>'};

document.querySelectorAll('a.proj-img[data-open]').forEach(function(a){var p=P.filter(function(x){return x.id===a.dataset.open})[0];a.setAttribute('role','button');a.setAttribute('aria-label','Abrir detalhes de '+p.t)});

var dlg=$('#detalhe'),zoom=$('#zoom'),last=null;
function open(id){
 var p=P.filter(function(x){return x.id===id})[0];last=document.activeElement;
 $('#d-corpo').innerHTML='<p class="meta">'+esc(p.m)+'</p><h3 id="d-titulo">'+esc(p.t)+'</h3><p>'+esc(p.d)+'</p>'+(p.note?'<p class="note">'+esc(p.note)+'</p>':'')+
 '<div class="shots'+(p.shots.length>1?' two-c':'')+'">'+p.shots.map(function(s){return '<button data-zoom="'+s+'" aria-label="Ampliar imagem"><img src="'+I+s+'" alt="'+esc(p.alt)+'" loading="lazy"></button>'}).join('')+'</div>'+(p.cap?'<p><small>'+esc(p.cap)+'</small></p>':'')+
 '<h4>Objetivo</h4><p>'+esc(p.obj)+'</p><h4>Participação</h4><ul>'+p.part.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul><h4>Sobre o projeto</h4><ul>'+p.more.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul><h4>O que aprendi</h4><ul>'+p.learn.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul><h4>Tecnologias</h4><ul class="tags">'+p.tech.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>'+(p.links.length?'<div class="links">'+p.links.map(ext).join('')+'</div>':'');
 dlg.showModal();dlg.scrollTop=0;
}
document.addEventListener('click',function(e){
 var o=e.target.closest('[data-open]'),z=e.target.closest('[data-zoom]');
 if(o){e.preventDefault();open(o.dataset.open)}
 if(z){var im=$('img',z);$('#z-img').src=im.src;$('#z-img').alt=im.alt;zoom.showModal()}
 if(e.target.closest('[data-close]')){var d=e.target.closest('dialog');d.close()}
 if(e.target===dlg||e.target===zoom)e.target.close();
});
document.addEventListener('keydown',function(e){var a=e.target.closest&&e.target.closest('a.proj-img[data-open]');if(a&&e.key===' '){e.preventDefault();open(a.dataset.open)}});
dlg.addEventListener('close',function(){if(last&&!zoom.open)last.focus()});

var btn=$('.menu-btn'),nav=$('#nav');
btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

var progress=$('.scroll-progress'), header=$('.header');
var updateScroll=function(){var max=document.documentElement.scrollHeight-window.innerHeight;var fraction=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;progress.style.transform='scaleX('+fraction+')';header.classList.toggle('scrolled',window.scrollY>24)};
window.addEventListener('scroll',updateScroll,{passive:true});window.addEventListener('resize',updateScroll,{passive:true});updateScroll();
var top=$('#top');
window.addEventListener('scroll',function(){top.hidden=window.scrollY<600},{passive:true});
top.addEventListener('click',function(){window.scrollTo({top:0})});

if('IntersectionObserver' in window){
 var navLinks=Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
 var sectionObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){navLinks.forEach(function(a){var isActive=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('on',isActive);if(isActive)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}})},{rootMargin:'-22% 0px -62% 0px'});
 document.querySelectorAll('main section[id]').forEach(function(s){sectionObserver.observe(s)});
}
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('has-reveal');
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
 document.querySelectorAll('.rv, .reveal').forEach(function(el){io.observe(el)});
}else document.querySelectorAll('.rv, .reveal').forEach(function(el){el.classList.add('in')});
})();
