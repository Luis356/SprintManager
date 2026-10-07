# Sprint Manager

O Sprint Manager é uma aplicação desktop em desenvolvimento para gerenciamento de atividades, demandas e tempo de trabalho dentro de uma Sprint.

A proposta do projeto é combinar controle manual de tempo com automações que identifiquem o contexto atual de trabalho do usuário, tanto no navegador quanto em aplicativos desktop.

## Objetivo

O sistema deve permitir:

- carregar atividades de uma Sprint;
- iniciar, pausar e trocar atividades;
- registrar o tempo trabalhado por atividade;
- detectar períodos de inatividade;
- contabilizar separadamente tempo ativo e tempo inativo;
- permitir conciliação do tempo de inatividade;
- identificar automaticamente possíveis atividades com base no contexto de uso do computador;
- armazenar o histórico de utilização para relatórios futuros.

## Arquitetura atual

A solução está sendo dividida em módulos com responsabilidades específicas.

```text
SprintManager/
│
├── main.py
├── servidor.py
│
├── services/
│   ├── activity_router.py
│   ├── browser_activity.py
│   └── desktop_activity.py
│
├── sprint_extension/
│   ├── manifest.json
│   └── background.js
│
└── requirements.txt