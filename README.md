# 🚀 Projeto **Organo**

## 📌 Sobre o Projeto

O **Organo** é uma aplicação desenvolvida em **React** que permite:

* 👤 Cadastrar colaboradores
* 🏷️ Criar novos times dinamicamente
* 🎨 Definir cores personalizadas para cada time
* 📂 Organizar visualmente colaboradores dentro de suas respectivas equipes

A proposta do projeto é simular a estrutura organizacional de uma empresa, permitindo visualizar os membros distribuídos por suas equipes de forma dinâmica, personalizável e visualmente organizada.

---

## 🛠️ Tecnologias Utilizadas

* **React**
* JavaScript (ES6+)
* CSS
* HTML5
* Hooks (`useState`)
* Componentização
* Renderização dinâmica com `map`
* Elevação de estado (Lifting State Up)

---

## 🧩 Funcionalidades

---

### ✅ Cadastro de Colaboradores

O usuário pode preencher um formulário com:

* Nome do colaborador
* Cargo
* URL da imagem
* Time ao qual pertence

Ao enviar o formulário, o colaborador é automaticamente adicionado ao time correspondente.

---

### ✅ Criação Dinâmica de Times 🆕

Agora também é possível criar novos times através de um formulário específico.

O usuário pode definir:

* 🏷️ Nome do time
* 🎨 Cor primária
* 🎨 Cor secundária

Após criar o time:

* Ele é automaticamente adicionado à lista de times.
* Passa a aparecer na interface.
* Já pode receber colaboradores.
* Suas cores são aplicadas dinamicamente na renderização.

Isso tornou o projeto mais dinâmico e próximo de uma aplicação real.

---

### ✅ Organização por Times

Cada colaborador é exibido dentro da seção específica do seu time.

Cada time possui:

* Nome
* Cor principal (usada em bordas e destaques)
* Cor secundária (usada no fundo da seção)

A renderização ocorre apenas se houver colaboradores naquele time (renderização condicional).

---

### ✅ Componentização

O projeto é dividido em componentes reutilizáveis:

* `App` → Componente principal (estado centralizado)
* `Form` → Formulário de cadastro de colaboradores
* `FormTeam` → Formulário de criação de novos times
* `Team` → Seção de cada time
* `Collaborator` → Card individual do colaborador
* `Banner` → Cabeçalho da aplicação

Essa estrutura facilita:

* Manutenção
* Escalabilidade
* Organização
* Reutilização de código

---

## 🧠 Conceitos Aplicados

O projeto trabalha conceitos importantes do React:

* `useState`
* Props
* Renderização condicional
* Listas e `map`
* Uso correto de `key` em listas
* Comunicação entre componentes
* Elevação de estado (Lifting State Up)
* Atualização de estado imutável
* Estilização dinâmica com `style={{}}`

---

## 🎯 Objetivo do Projeto

O Organo foi desenvolvido com foco em:

* Praticar fundamentos do React
* Trabalhar manipulação de estado
* Compreender melhor fluxo de dados entre componentes
* Criar uma aplicação com comportamento dinâmico real
* Simular um sistema organizacional personalizável

---

## 📷 Resultado Esperado

Após adicionar um colaborador:

* Ele aparece em formato de card
* Dentro do time escolhido
* Com:

  * 🖼️ Foto
  * 👤 Nome
  * 💼 Cargo

Após criar um novo time:

* Ele aparece automaticamente na interface
* Com as cores definidas pelo usuário
* Pronto para receber colaboradores

A interface é visual, organizada e dinâmica.

---

## 🔮 Possíveis Melhorias Futuras

* Remover colaboradores
* Editar informações
* Persistência de dados (LocalStorage ou API)
* Filtro por time
* Responsividade aprimorada
* Animações
* Drag and drop entre times
* Backend com banco de dados
* Sistema de autenticação

---

## 💡 Conclusão

O **Organo** evoluiu de um projeto estático para uma aplicação dinâmica com criação de times em tempo real.

Agora ele trabalha:

* Estrutura organizacional
* Personalização visual
* Manipulação dinâmica de estado
* Escalabilidade de dados

É um excelente projeto para consolidar os meus fundamentos de React e entender como aplicações reais gerenciam estado e organização de dados no Front-end.
