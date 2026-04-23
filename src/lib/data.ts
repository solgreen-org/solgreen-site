export const contact = {
  phone: "(55) 3196 0352",
  phoneLink: "tel:05531960352",
  whatsapp: "(55) 9 9658 8499",
  whatsappLink: "https://wa.me/555596588499",
  email: "contato@solgreen.com.br",
  address: "Av. dos Imigrantes, 1351",
  neighborhood: "Bairro Distrito Industrial",
  city: "Panambi / RS",
};

export const social = {
  facebook: "https://www.facebook.com/solgreenenergia",
  instagram: "https://www.instagram.com/solgreenenergia/",
  linkedin: "https://www.linkedin.com/company/solgreenbr/",
  youtube: "https://www.youtube.com/channel/UC9WJ5QyHoRWs997QoFe1PQA",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Setores", href: "/setores" },
  { label: "Cases", href: "/cases" },
  { label: "Recursos", href: "/recursos", children: [
    { label: "Simulador de Risco Energético", href: "/simulador" },
    { label: "Artigos", href: "/recursos" },
  ]},
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Contato", href: "/contato" },
];

export const team = [
  { name: "Augusto Amaral", role: "Sócio-Fundador", photo: "/img/Augusto.jpg" },
  { name: "Frantiesco", role: "Sócio-Fundador", photo: "/img/Frantiesco.jpg" },
  { name: "Ricardo", role: "Sócio-Fundador", photo: "/img/Ricardo.jpg" },
  { name: "Aurélio", role: "Sócio-Fundador", photo: "/img/Aurélio I.jpg" },
];

export const pillars = [
  {
    title: "Geração Solar",
    slug: "usinas-solares",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    image: "/img/thumb-geracao.jpg",
    cover: "/img/sol-usinas.jpg",
    description: "EPC completo de usinas fotovoltaicas de solo. Projeto, construção e comissionamento.",
    highlights: ["+30 MWp construídos", "Usinas solares", "Projeto, construção e comissionamento"],
  },
  {
    title: "Armazenamento",
    slug: "armazenamento",
    icon: "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z",
    image: "/img/thumb-armazenamento.jpg",
    cover: "/img/sol-armazenamento.jpg",
    description: "Baterias de lítio com resposta em milissegundos. Substitui ou complementa o gerador diesel com zero manutenção.",
    highlights: ["Resposta instantânea (milissegundos)", "Substitui ou complementa gerador diesel", "Zero manutenção, 10+ anos de vida útil"],
  },
  {
    title: "Automação Energética",
    slug: "automacao-energetica",
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
    image: "/img/thumb-automacao.jpg",
    cover: "/img/sol-automacao.jpg",
    description: "Monitoramento de consumo em tempo real, gestão de demanda contratada e controle de ventilação, motores e iluminação via celular.",
    highlights: ["Monitoramento em tempo real", "Alertas de consumo e falhas", "Integração com solar e baterias"],
  },
];

export const sectors = [
  {
    title: "Avicultura e Pecuária",
    slug: "avicultura",
    cover: "/img/setor-avicultura.jpg",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z",
    pain: "20.000 frangos mortos em 2 horas por falta de energia.",
    description: "Energia solar em telhados de galpão para reduzir custos e baterias de lítio com resposta instantânea para proteger a produção contra apagões. Sem gap de energia como no gerador diesel.",
    solutions: ["Solar fotovoltaico em telhados de galpão", "Backup por bateria com resposta instantânea", "Eliminação do gap de transição do diesel"],
  },
  {
    title: "Armazenagem e Agro",
    slug: "armazenagem-agro",
    cover: "/img/setor-armazenagem.jpg",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
    pain: "Secador parado, aeração fora, grãos comprometidos.",
    description: "Energia solar em telhados de armazéns para reduzir a conta de luz e baterias para manter secadores e aeração funcionando durante apagões, protegendo a safra.",
    solutions: ["Solar fotovoltaico em telhados de armazéns", "Backup por bateria para secadores e aeração", "Proteção contra apagões em período de safra", "Gestão de demanda contratada"],
  },
  {
    title: "Alimentos e Câmaras Frias",
    slug: "alimentos-camaras-frias",
    cover: "/img/setor-camaras-frias.jpg",
    icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    pain: "4 horas sem energia = estoque inteiro no lixo (ANVISA).",
    description: "Baterias de lítio com resposta instantânea para manter câmaras frias e freezers funcionando durante apagões. Energia solar para reduzir o custo de operação dos compressores.",
    solutions: ["Backup instantâneo por bateria para câmaras e freezers", "Solar fotovoltaico para reduzir custo energético", "Eliminação do risco de perda de estoque por apagão"],
  },
  {
    title: "Geradoras e Permissionárias",
    slug: "geradoras-permissionarias",
    cover: "/img/setor-geradoras.jpg",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    pain: "Precisam expandir geração própria com engenharia confiável.",
    description: "Projetamos e construímos usinas fotovoltaicas de solo para cooperativas de geração e permissionárias. EPC completo, da simulação ao comissionamento e conexão à rede.",
    solutions: ["Projeto e construção de usinas de solo", "Simulação de produção energética", "Conexão e aprovação junto à distribuidora", "Comissionamento e start-up"],
  },
  {
    title: "Comércio e Varejo",
    slug: "comercio",
    cover: "/img/setor-comercio.jpg",
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36c-.301 0-.454-.355-.255-.542a23.46 23.46 0 0011.45-9.123c.1-.162.352-.162.452 0a23.46 23.46 0 0011.45 9.123c.199.187.046.542-.255.542H13.5",
    pain: "Conta de luz alta e sem proteção contra apagão.",
    description: "Energia solar fotovoltaica para reduzir a tarifa e baterias de lítio para proteger equipamentos e estoque perecível contra quedas de energia.",
    solutions: ["Solar fotovoltaico para redução de tarifa", "Backup de bateria para equipamentos críticos", "Proteção contra apagões e quedas de energia", "Redução de custos operacionais com energia"],
  },
];

export const cases = [
  {
    title: "Cerro do Sol",
    slug: "cerro-do-sol",
    client: "CRELUZ",
    location: "Cerro Grande / RS",
    modality: "Mercado Livre",
    power: "3,3 MWp",
    cover: "/img/obras/cerro-do-sol-1.jpg",
    photos: ["/img/obras/cerro-do-sol-1.jpg", "/img/obras/cerro-do-sol-2.jpg"],
    specs: [
      "5.632 módulos de 585 Wp (Risen)",
      "30 inversores de 100 kW (Huawei)",
      "2 transformadores WEG de 1.750 kVA",
    ],
    challenge: "Primeira usina 100% SolGreen, desde o orçamento até a entrega. Primeiro projeto construído para a CRELUZ.",
    scope: "EPC completo incluindo projeto e construção da subestação em alvenaria com medição em média tensão 23,1 kV, cabine de proteção com disjuntor, ramais subterrâneos de média tensão, instalação de 5.632 módulos com estrutura de fixação em solo, interligação dos 30 inversores de string, comissionamento e conexão à rede.",
    highlights: [
      "Subestação com 5 cubículos (medição, proteção e derivações)",
      "Disjuntor tripolar 25 kV com relé de proteção parametrizado",
      "Malha de aterramento",
      "Ramais subterrâneos de média tensão com dutos corrugados",
    ],
  },
  {
    title: "Sol da Cidade",
    slug: "sol-da-cidade",
    client: "CRELUZ",
    location: "Frederico Westphalen / RS",
    modality: "Mercado Livre",
    power: "2,76 MWp",
    cover: "/img/obras/sol-da-cidade-1.jpg",
    photos: ["/img/obras/sol-da-cidade-1.jpg", "/img/obras/sol-da-cidade-2.jpg"],
    specs: [
      "4.352 módulos de 635 Wp (Astronergy)",
      "9 inversores de 250 kW (Huawei)",
      "1 transformador WEG de 2.500 kVA",
    ],
    challenge: "Terreno com grande volume de rocha, exigindo perfuração extensiva. Execução mais demorada e complexa que o convencional.",
    scope: "EPC completo com projeto elétrico, construção civil, montagem mecânica dos módulos, instalação dos inversores e transformador, infraestrutura de média tensão e comissionamento. Terreno rochoso exigiu adaptação da estratégia de cravação de estacas, com perfuração em rocha ao longo de grande parte da área da usina.",
    highlights: [
      "Perfuração em rocha para cravação de estacas metálicas",
      "Transformador WEG de 2.500 kVA",
      "9 inversores de 250 kW (Huawei) com monitoramento remoto",
      "Módulos de alta potência 635 Wp (Astronergy)",
    ],
  },
  {
    title: "Coxilha das Grápias",
    slug: "coxilha-das-grapias",
    client: "Coxilha das Grápias SPE",
    location: "Erval Seco / RS",
    modality: "Geração Distribuída",
    power: "6,318 MWp",
    cover: "/img/obras/coxilha-das-grapias-1.jpg",
    photos: ["/img/obras/coxilha-das-grapias-1.jpg", "/img/obras/coxilha-das-grapias-2.jpg"],
    specs: [
      "10.800 módulos de 575 Wp (Sunova)",
      "18 inversores de 250 kW (Sungrow)",
      "6 transformadores ITR de 1.000 kVA",
    ],
    challenge: "Usina executada em 4 meses, prazo extremamente curto para aproveitar regra regulatória anterior mais vantajosa.",
    scope: "EPC completo com prazo agressivo de 4 meses. Projeto, aquisição de materiais, construção civil, montagem de 10.800 módulos, instalação de 18 inversores e 6 transformadores, infraestrutura de média tensão e comissionamento. Prazo definido pela necessidade de protocolar a usina antes da mudança regulatória da Lei 14.300/2022, que alterou as condições de compensação de energia.",
    highlights: [
      "10.800 módulos instalados em 4 meses",
      "6 transformadores ITR de 1.000 kVA em paralelo",
      "Prazo definido por janela regulatória (Lei 14.300)",
      "Maior usina do portfólio: 6,318 MWp",
    ],
  },
  {
    title: "São Francisco do Guaporé",
    slug: "sao-francisco-do-guapore",
    client: "Rovema (via L8)",
    location: "São Francisco do Guaporé / RO",
    modality: "Geração Distribuída",
    power: "6,318 MWp",
    cover: "/img/obras/sao-francisco-do-guapore-1.jpg",
    photos: [
      "/img/obras/sao-francisco-do-guapore-1.jpg",
      "/img/obras/sao-francisco-do-guapore-2.jpg",
      "/img/obras/sao-francisco-do-guapore-3.jpg",
      "/img/obras/sao-francisco-do-guapore-4.jpg",
      "/img/obras/sao-francisco-do-guapore-5.jpg",
    ],
    specs: [
      "5.400 módulos de 380 Wp (Canadian)",
      "10 inversores de 250 kW (Sungrow)",
      "1 transformador ABB de 2.000 kVA",
      "Tracker (seguidor solar) STI Norland",
    ],
    challenge: "Usina com tracker em local remoto, próximo à fronteira com a Bolívia. Logística complexa e execução durante a pandemia.",
    scope: "EPC completo de usina com sistema tracker (seguidor solar) STI Norland, tecnologia que acompanha o movimento do sol e aumenta a geração em até 25%. Localizada em região remota de Rondônia, o projeto exigiu planejamento logístico rigoroso para transporte de equipamentos e deslocamento de equipe. A execução coincidiu com o período da pandemia de COVID-19, adicionando complexidade operacional ao projeto.",
    highlights: [
      "Tracker STI Norland (seguidor solar monoaxial)",
      "Até 25% mais geração que estrutura fixa",
      "Logística complexa: região de fronteira com a Bolívia",
      "Execução durante a pandemia de COVID-19",
    ],
  },
];

export const credentialStats = [
  { value: "20+", label: "Anos de engenharia elétrica" },
  { value: "30+", label: "MWp em usinas solares" },
  { value: "R$ 43M+", label: "Em projetos entregues" },
  { value: "600+", label: "Sistemas instalados" },
];

export const credentialClients = [
  { name: "CRELUZ", logo: "/img/clients/creluz.svg" },
  { name: "Bunge", logo: "/img/clients/bunge.svg" },
  { name: "Kepler Weber", logo: "/img/clients/keplerweber.svg" },
  { name: "AGCO", logo: "/img/clients/agco.png" },
  { name: "C.Vale", logo: "/img/clients/cvale.png" },
  { name: "CCGL", logo: "/img/clients/ccgl.png" },
  { name: "Cotripal", logo: "/img/clients/cotripal.png" },
  { name: "3 Tentos", logo: "/img/clients/3tentos.svg" },
  { name: "Alibem", logo: "/img/clients/alibem.svg" },
  { name: "Sulnorte", logo: "/img/clients/sulnorte.png" },
  { name: "Estaleiro Rio Maguari", logo: "/img/clients/riomaguari.png" },
];

export const solutions = pillars;

export const estados = [
  "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
  "Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul",
  "Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí",
  "Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia",
  "Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins",
];
