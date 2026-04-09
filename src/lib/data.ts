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
  { label: "Simulador", href: "/simulador" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Contato", href: "/contato" },
];

export const team = [
  { name: "Augusto Amaral", role: "Sócio-Fundador", photo: "/img/Augusto.png" },
  { name: "Frantiesco", role: "Sócio-Fundador", photo: "/img/Frantiesco.png" },
  { name: "Ricardo", role: "Sócio-Fundador", photo: "/img/Ricardo.png" },
  { name: "Aurélio", role: "Sócio-Fundador", photo: "/img/Aurélio I.png" },
];

export const pillars = [
  {
    title: "Geração Solar",
    slug: "usinas-solares",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    image: "/img/thumb-geracao.png",
    cover: "/img/sol-usinas.png",
    description: "EPC completo de usinas fotovoltaicas de solo. Projeto, construção e comissionamento.",
    highlights: ["+12 MWp construídos para CRELUZ", "Usinas de solo", "Projeto, construção e comissionamento"],
  },
  {
    title: "Armazenamento",
    slug: "armazenamento",
    icon: "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z",
    image: "/img/thumb-armazenamento.png",
    cover: "/img/sol-armazenamento.png",
    description: "Baterias de lítio (LFP) com resposta em milissegundos. Substitui ou complementa o gerador diesel com zero manutenção.",
    highlights: ["Resposta instantânea (milissegundos)", "Substitui ou complementa gerador diesel", "Zero manutenção, 10+ anos de vida útil"],
  },
  {
    title: "Automação Energética",
    slug: "automacao-energetica",
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
    image: "/img/thumb-automacao.png",
    cover: "/img/sol-automacao.png",
    description: "Monitoramento de consumo em tempo real, gestão de demanda contratada e controle de ventilação, motores e iluminação via celular.",
    highlights: ["Monitoramento em tempo real", "Alertas de consumo e falhas", "Integração com solar e baterias"],
  },
];

export const sectors = [
  {
    title: "Avicultura e Pecuária",
    slug: "avicultura",
    cover: "/img/setor-avicultura.png",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z",
    pain: "20.000 frangos mortos em 2 horas por falta de energia.",
    description: "Energia solar em telhados de galpão para reduzir custos e baterias de lítio com resposta instantânea para proteger a produção contra apagões. Sem gap de energia como no gerador diesel.",
    solutions: ["Solar fotovoltaico em telhados de galpão", "Backup por bateria com resposta instantânea", "Eliminação do gap de transição do diesel", "Monitoramento remoto de temperatura e umidade"],
  },
  {
    title: "Armazenagem e Agro",
    slug: "armazenagem-agro",
    cover: "/img/setor-armazenagem.png",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
    pain: "Secador parado, aeração fora, grãos comprometidos.",
    description: "Energia solar em telhados de armazéns para reduzir a conta de luz e baterias para manter secadores e aeração funcionando durante apagões, protegendo a safra.",
    solutions: ["Solar fotovoltaico em telhados de armazéns", "Backup por bateria para secadores e aeração", "Proteção contra apagões em período de safra", "Gestão de demanda contratada"],
  },
  {
    title: "Alimentos e Câmaras Frias",
    slug: "alimentos-camaras-frias",
    cover: "/img/setor-camaras-frias.png",
    icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    pain: "4 horas sem energia = estoque inteiro no lixo (ANVISA).",
    description: "Baterias de lítio com resposta instantânea para manter câmaras frias e freezers funcionando durante apagões. Energia solar para reduzir o custo de operação dos compressores.",
    solutions: ["Backup instantâneo por bateria para câmaras e freezers", "Solar fotovoltaico para reduzir custo energético", "Eliminação do risco de perda de estoque por apagão", "Monitoramento de temperatura 24h com alertas"],
  },
  {
    title: "Geradoras e Permissionárias",
    slug: "geradoras-permissionarias",
    cover: "/img/setor-geradoras.png",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    pain: "Precisam expandir geração própria com engenharia confiável.",
    description: "Projetamos e construímos usinas fotovoltaicas de solo para cooperativas de geração e permissionárias. EPC completo, da simulação com PVsyst ao comissionamento e conexão à rede.",
    solutions: ["Projeto e construção de usinas de solo", "Simulação de produção com PVsyst", "Conexão e aprovação junto à distribuidora", "Comissionamento e start-up"],
  },
  {
    title: "Comércio e Varejo",
    slug: "comercio",
    cover: "/img/sol-usinas.png",
    icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36c-.301 0-.454-.355-.255-.542a23.46 23.46 0 0011.45-9.123c.1-.162.352-.162.452 0a23.46 23.46 0 0011.45 9.123c.199.187.046.542-.255.542H13.5",
    pain: "Conta de luz alta e sem proteção contra apagão.",
    description: "Energia solar fotovoltaica para reduzir a tarifa e baterias de lítio para proteger equipamentos e estoque perecível contra quedas de energia.",
    solutions: ["Solar fotovoltaico para redução de tarifa", "Backup de bateria para equipamentos críticos", "Proteção contra apagões e quedas de energia", "Redução de custos operacionais com energia"],
  },
];

export const credentialStats = [
  { value: "20+", label: "Anos de engenharia elétrica" },
  { value: "12+", label: "MWp em usinas de solo" },
  { value: "R$ 43M+", label: "Em projetos entregues" },
  { value: "600+", label: "Sistemas instalados" },
];

export const credentialClients = [
  { name: "CRELUZ", logo: "/img/clients/creluz.svg" },
  { name: "Bunge", logo: "/img/clients/bunge.svg" },
  { name: "Kepler Weber", logo: "/img/clients/keplerweber.png" },
  { name: "AGCO", logo: "/img/clients/agco.png" },
  { name: "C.Vale", logo: "/img/clients/cvale.png" },
  { name: "CCGL", logo: "/img/clients/ccgl.png" },
  { name: "Cotripal", logo: "/img/clients/cotripal.png" },
  { name: "Yara", logo: "/img/clients/yara.svg" },
  { name: "3 Tentos", logo: "/img/clients/3tentos.svg" },
  { name: "Alibem", logo: "/img/clients/alibem.svg" },
  { name: "Copercampos", logo: "/img/clients/copercampos.png" },
];

export const solutions = pillars;

export const estados = [
  "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
  "Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul",
  "Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí",
  "Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia",
  "Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins",
];
