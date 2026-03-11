# Gestionnaire de Tickets Internes 📋

**Mini Jira Interne** — Créer, assigner et suivre des tickets d'équipe sans la complexité de Jira.

---

## L'équipe

| Nom | Rôle Scrum |
|-----|-----------|
| HAJJI Youssef | Product Owner |
| AINAK Abdellah | Scrum Master |
| MARHRANI Merouane | Developer |
| OURAMDAN Salah Eddine | Developer |
| Aurélie HAMERERASS | Developer |

---

## La vision produit

Les équipes techniques perdent du temps à gérer leurs tâches par message ou sur papier. Il manque un
outil simple, rapide à déployer et sans configuration complexe.
En tant que membre d'une équipe de développement, ce projet permet de suivre l'avancement des
tâches en temps réel, sans inscription ni configuration.

---

## Product Backlog

| ID | User Story | MoSCoW | Statut |
|----|-----------|--------|--------|
| US-01 | En tant qu'utilisateur, je veux créer un ticket avec titre + description afin de tracer une tâche. | Must | Livré |
| US-02 | En tant qu'utilisateur, je veux voir la liste de tous les tickets afin d'avoir une vue d'ensemble. | Must | Livré |
| US-03 | En tant qu'utilisateur, je veux changer le statut (To Do / In Progress / Done) afin de suivre l'avancement. | Must | Livré |
| US-04 | En tant qu'utilisateur, je veux assigner un ticket à un membre afin de savoir qui fait quoi. | Should | Livré |
| US-05 | En tant qu'utilisateur, je veux filtrer les tickets par statut afin de me concentrer. | Could | Livré |
| US-06 | En tant qu'utilisateur, je veux supprimer un ticket afin de garder le backlog propre. | Should | Livré |
| US-07 | Compteur de tickets par statut | Won't | Reporté |

---

## Definition of Done

Une User Story est considérée comme terminée quand :

- La fonctionnalité fonctionne sans erreur en local
- Le code est commité sur GitHub par le membre responsable (convention `feat:`)
- Le Product Owner a testé et validé la fonctionnalité
- Le README est mis à jour pour refléter l'US livrée

---

## Ce qui a été livré (MVP)

- Création de tickets (titre, description, priorité)
- Affichage de tous les tickets sur la page principale
- Changement de statut (To Do / In Progress / Done)
- Assignation à un membre
- Filtre par statut
- Suppression avec confirmation

### Lancer le projet

```bash
git clone https://github.com/Marouanemarhrani/gestionnaire-des-tickets-internes.git
cd gestionnaire-des-tickets-internes
npm install
npm run dev
```

Ouvrir **http://localhost:5173**

---

## Ce qui a été reporté et pourquoi

| US | Raison du report |
|----|-----------------|
| US-07 — Compteur | Manque de temps — hors scope MVP |

---

## Nos décisions techniques

| Élément | Choix |
|---------|-------|
| Frontend | React + Vite |
| Stockage | Mémoire (useState — pas de BDD) |
| Architecture | Composant unique `App.jsx` — simplicité maximale |

> **Raison :** Setup rapide, démo possible en < 2h avec l'IA.

---

## Comment on a utilisé l'IA

**Ce qui a bien marché :**
- Générer un endpoint Express complet à partir d'une User Story → résultat en 1 prompt
- Générer le code React complet
- Débugger les erreurs en collant le message d'erreur directement dans le chat
- Générer le HTML/JSX du formulaire de création de ticket
- Structure des composants

**Ce qui a moins bien marché :**
- Les prompts trop vagues → l'IA proposait une stack différente de la nôtre
- Demander plusieurs fonctionnalités en un seul prompt → code difficile à intégrer

**Ce que l'IA n'a pas su faire :**
- Prendre les décisions de priorisation (MoSCoW) à notre place
- Comprendre notre contexte sans qu'on lui redonne à chaque fois

---

## Rétrospective

- **Ce qui a bien marché :** *(à remplir en fin de séance — ex: les branches par feature nous ont évité les conflits de merge)*
- **Ce qu'on ferait différemment :** *(à remplir en fin de séance — ex: définir la structure de données dès le début)*
- **Ce qu'on garderait :** *(à remplir en fin de séance — ex: le workflow Trello + GitHub PR)*
