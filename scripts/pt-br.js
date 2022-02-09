(function() {
  window.langs = window.langs || {}
  window.langs.pt = {
    occupation: 'Engenheiro de Software',
    age: '27 anos',
    contact: 'Contato',
    phone: 'Telefone: ',
    address: 'Endereço: ',
    skills: 'Habilidades',
    programming: 'Programação',
    modeling: 'Modelagem',
    documentation: 'Documentação',
    architecture: 'Arquitetura',
    profile: 'Perfil',
    profileDescription: `Habituado a desenvolver com precisão os softwares documentados, 
    possuo criatividade e experiência para construir aplicações com a intenção de, 
    prevenir excesso de manutenção, e fornecer agilidade no processo de desenvolvimento, 
    com ferramentas como lint e task runners. Apto ao uso da metodologia SCRUM para melhor 
    eficácia na agilidade, e melhor entendimento sobre os processos para que novas e melhores 
    soluções possam ser descobertas a tempo. Sei como projetar aplicações que demandam um número 
    elevado de requisições e serviços, e mante-las fortemente resilientes e disponíveis.`,
    experience: 'Experiência',
    occupation6: 'Engenheiro de Software',
    exp6: `A BTime oferece serviços focados em gerenciamento de equipes de campo, basicamente, uma 
    plataforma de checklist.
    No back end utilizamos a arquitetura de micro-serviços, cada serviço se comunicava com outro via seneca, 
    um pacote específico para comunicação de micro-serviços em Node.js.
    A persistência dos dados eram feitas através do PostgreSQL, tendo o Redis como recurso de cache.
    Para manter a disponibilidade do back end, esses serviços eram gerenciados por containers dentro do Rancher.
    No front end, utilizamos Angular 8, com o pattern Observable para usufruir de suas características de streaming 
    para manter os checklists atualizados em tempo real.`,
    occupation5: 'Engenheiro de Software',
    exp5: `Atividades: Atuo no projeto EPICALL, que visa oferecer 
    ao cliente uma plataforma completa de comunicação, com recursos de telefonia (ligação de áudio via SIP), conferências e chat em tempo real, 
    agendamento de conferências e outros recursos customizados. Utilizamos Node no backend, Angular 6 e React para o frontend.`,
    occupation4: 'Engenheiro de Software',
    exp4: `Atividades: Criamos uma exchange de criptomoedas, onde as transações foram feitas utilizando serviços da 
    API BlockIO, que fornece a geração de carteiras virtuais, validação de transações e confirmações de transações já que esta, utiliza 
    o modelo BLOCKCHAIN de validação. Como a necessidade da regra de negócio exigia uma aplicação real-time, utilizamos a stack NodeJS junto ao 
    banco de dados Firebase, pois estes possuem características asíncronas que nos permite uma conexão não bloqueante. Para fins de produtividade, 
    optamos o framework Loopback 3 para a exposição dos serviços via Rest, já que foi um produto que se demonstrou, na época, possuir vantagens 
    em relação à esse ponto.`,
    occupation3: 'Desenvolvedor Back-End',
    exp3: `Atividades:  Estamos desenvolvendo um projeto de beckend de canais, criando uma arquitetura em 
    Node.js, pois a aplicação atual tem problemas com disponibilidade e desempenho. A linguagem de 
    programação usada é o TypeScript, e há muitas bibliotecas que estamos usando para acelerar o 
    processo de desenvolvimento, como gulp.js (task runner), eslint, e etc. Para garantir uma 
    disponibilidade efetiva, os servidores node.js são implantados em um container docker, e o Kubernets 
    (gerenciador docker), faz o trabalho de gerenciar o docker, implantando rapidamente um novo container 
    se algo der errado com o atual.
    Todas as funcionalidades / API possuem um teste unitário, esses testes são feitos com mocha.js e chai.
    Para fins de desempenho, utilizamos o redis, um armazenamento de estrutura de dados em memória, 
    usado como banco de dados local, o que elimina a necessidade de comunicação contínua com o banco 
    de dados no servidor.`,
    occupation2: 'Consultor Sharepoint',
    occupation1: 'Desenvolvedor Web',
    education: 'Formação',
    course: 'Ciência da Computação',
    college: 'Universidade Anhembi Morumbi',
    courseFinished: 'Formado em 2016',
    techs: 'Tecnologias',
    languages: 'Linguas',
    english: 'Inglês',
    advanced: 'Avançado'
  }
})()