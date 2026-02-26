# 🚀 Projeto **Organo**

## 📌 Sobre o Projeto

O **Organo** é uma aplicação desenvolvida em **React** que permite cadastrar e organizar colaboradores de acordo com:

* 👤 **Nome**
* 💼 **Cargo**
* 🖼️ **Imagem**
* 🏷️ **Time**

A proposta do projeto é simular a estrutura organizacional de uma empresa, permitindo visualizar os membros distribuídos por suas respectivas equipes de forma dinâmica e visualmente organizada.

---

## 🛠️ Tecnologias Utilizadas

* **React**
* JavaScript (ES6+)
* CSS
* HTML5
* Hooks (`useState`)
* Componentização

---

## 🧩 Funcionalidades

### ✅ Cadastro de Colaboradores

O usuário pode preencher um formulário com:

* Nome do colaborador
* Cargo
* URL da imagem
* Time ao qual pertence

Ao enviar o formulário, o colaborador é automaticamente adicionado ao time correspondente.

---

### ✅ Organização por Times

Cada colaborador é exibido dentro de uma seção específica do seu time.

Exemplo de times:

* Front-end
* Back-end
* UX & Design
* DevOps
* Data Science

Cada time possui:

* Nome
* Cor principal
* Cor secundária

---

### ✅ Componentização

O projeto é dividido em componentes reutilizáveis, como:

* `App` → Componente principal
* `Form` → Formulário de cadastro
* `Team` → Seção de cada time
* `Collaborator` → Card individual do colaborador
* `Banner` → Cabeçalho da aplicação

Essa estrutura facilita manutenção, escalabilidade e reaproveitamento de código.

---

## 🧠 Conceitos Aplicados

O projeto trabalha conceitos importantes do React:

* Estado (`useState`)
* Props
* Renderização condicional
* Listas e `map`
* Comunicação entre componentes
* Elevação de estado (lifting state up)

---

## 🎯 Objetivo do Projeto

O Organo foi desenvolvido com foco em:

* Praticar fundamentos do React
* Compreender a importância da componentização
* Trabalhar manipulação de estados
* Simular uma aplicação real de organização de equipes

---

## 📷 Resultado Esperado

Após adicionar um colaborador, ele aparece em formato de card dentro do time escolhido, exibindo:

* Foto
* Nome
* Cargo

A interface é organizada, visual e dinâmica.

---

## 🔮 Possíveis Melhorias Futuras

* Remover colaboradores
* Editar informações
* Persistência de dados (LocalStorage ou API)
* Filtro por time
* Responsividade aprimorada
* Integração com backend

---

## 💡 Conclusão

O **Organo** é um projeto ideal para consolidar os fundamentos do React, especialmente no que diz respeito à organização de componentes e manipulação de estado.

Ele simula um cenário real de cadastro e organização de equipes, sendo excelente para fortalecer a base no desenvolvimento Front-end.
