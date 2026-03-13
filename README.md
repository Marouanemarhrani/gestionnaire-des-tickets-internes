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

## Product Backlog complet

| ID | User Story | MoSCoW | Story Points | Sprint | Statut |
|----|-----------|--------|:------------:|:------:|--------|
| US-01 | En tant qu'utilisateur, je veux créer un ticket avec titre + description afin de tracer une tâche. | Must | 3 | 1 | ✅ Livré |
| US-02 | En tant qu'utilisateur, je veux voir la liste de tous les tickets afin d'avoir une vue d'ensemble. | Must | 2 | 1 | ✅ Livré |
| US-03 | En tant qu'utilisateur, je veux changer le statut (To Do / In Progress / Done) afin de suivre l'avancement. | Must | 3 | 1 | ✅ Livré |
| US-04 | En tant qu'utilisateur, je veux assigner un ticket à un membre afin de savoir qui fait quoi. | Should | 3 | 1 | ✅ Livré |
| US-05 | En tant qu'utilisateur, je veux filtrer les tickets par statut afin de me concentrer sur l'essentiel. | Could | 2 | 2 | ✅ Livré |
| US-06 | En tant qu'utilisateur, je veux supprimer un ticket afin de garder le backlog propre. | Should | 2 | 2 | ✅ Livré |
| US-07 | En tant qu'utilisateur, je veux voir un compteur de tickets par statut afin d'avoir une vue rapide de l'avancement. | Could | 3 | 2 | ❌ Reporté |
| US-08 | En tant qu'utilisateur, je veux définir une priorité (haute / moyenne / basse) sur un ticket afin de prioriser mon travail. | Should | 2 | 2 | ✅ Livré |

**Scope total du backlog : 20 Story Points**

---

## Sprint 1 — Ce qui a été livré

**Durée :** ~90 min | **Vélocité réelle : 11 pts**

| US livrée | Fonctionnalité | SP |
|-----------|---------------|:--:|
| US-01 | Création de tickets (titre, description, priorité) | 3 |
| US-02 | Affichage de tous les tickets sur la page principale | 2 |
| US-03 | Changement de statut (To Do / In Progress / Done) | 3 |
| US-04 | Assignation d'un ticket à un membre de l'équipe | 3 |

**Démo Sprint 1 :** Application lancée sur http://localhost:5173, création et suivi de tickets fonctionnels.

---

## Sprint 2 — Ce qui a été livré

**Durée :** ~90 min | **Vélocité réelle : 4 pts**

| US livrée | Fonctionnalité | SP |
|-----------|---------------|:--:|
| US-05 | Filtre des tickets par statut | 2 |
| US-06 | Suppression de ticket avec confirmation | 2 |
| ~~US-07~~ | ~~Compteur de tickets par statut~~ | ~~3~~ |
| US-08 | Indicateur de priorité sur les tickets | 2 |

> US-07 reportée faute de temps — hors scope MVP.

**Démo Sprint 2 :** Filtre, suppression et priorité intégrés. Interface complète et stable.

---

## Ce qui a été reporté et pourquoi

| US | Raison du report |
|----|-----------------|
| US-07 — Compteur de tickets par statut | Manque de temps en fin de Sprint 2 — fonctionnalité non bloquante, hors scope MVP. À intégrer dans un Sprint 3 en priorité. |

---

## Notre Burn-up Chart

```
Story Points
20 |------------------------------------------------ Scope total (20 pts)
   |
16 |
   |
12 |                              ●  Cumulé réel Sprint 1 (11 pts)
   |               ●
 8 |
   |
 4 |
   |
 0 +------------------+------------------+
              Sprint 1            Sprint 2
              (11 pts)            (4 pts → 15 pts cumulés)
```

| Sprint | SP prévus | SP livrés | Cumulé réel |
|--------|:---------:|:---------:|:-----------:|
| Sprint 1 | 11 | 11 | 11 |
| Sprint 2 | 9 | 4 | 15 |
| **Total** | **20** | **15** | **15 / 20** |

**Vélocité Sprint 1 : 11 pts | Sprint 2 : 4 pts**

**Analyse :** La vélocité a baissé entre les deux sprints, en partie parce que les US du Sprint 2 étaient moins bien découpées et que l'intégration du filtre a demandé plus d'ajustements que prévu. Un Sprint 3 aurait permis de livrer les 5 pts restants (US-07 + ajustements UX).

---

## Nos décisions techniques

| Élément | Choix | Raison |
|---------|-------|--------|
| Frontend | React + Vite | Setup rapide, démo possible en < 2h avec l'IA |
| Stockage | Mémoire (`useState`) | Pas de BDD nécessaire pour un MVP de démonstration |
| Architecture | Composant unique `App.jsx` | Simplicité maximale, pas de sur-ingénierie |
| Pas de backend | Pas d'Express / API | L'état en mémoire suffit pour valider les US côté démo |

**Décision d'architecture clé :** Concentrer toute la logique dans `App.jsx` plutôt que de créer plusieurs composants. Cela nous a permis d'aller vite avec l'IA sans perdre du temps à structurer des imports entre fichiers.

---

## Comment on a utilisé l'IA

**Ce qui a bien marché :**
- ✅ Générer le composant React complet à partir d'une User Story → résultat utilisable en 1 prompt
- ✅ Débugger les erreurs en collant directement le message d'erreur dans le chat
- ✅ Générer le HTML/JSX du formulaire de création de ticket
- ✅ Générer un endpoint Express complet à partir d'une User Story
- ✅ Proposer la structure des composants dès le départ

**Ce qui a moins bien marché :**
- Les prompts trop vagues → l'IA proposait une stack différente de la nôtre
- Demander plusieurs fonctionnalités en un seul prompt → code difficile à intégrer

**Ce que l'IA n'a pas su faire :**
- ❌ Prendre les décisions de priorisation MoSCoW à notre place
- ❌ Comprendre notre contexte sans qu'on lui redonne à chaque fois
- ❌ Choisir ce qui allait dans Sprint 1 vs Sprint 2

**Temps gagné estimé :** ~3h sur le développement pur (génération du code React, debug, structure des composants).

---

## Rétrospective

### Sprint 1

| | Réponse |
|---|---|
| ✓ Ce qui a bien marché | Les branches GitHub par feature nous ont évité les conflits de merge. L'IA a généré le composant de création de ticket en un seul prompt exploitable. |
| △ Ce qu'on améliorerait | Définir la structure de données (objet ticket) dès le début avant de coder — on a dû refactoriser en cours de sprint. |
| → Décision concrète | Pour Sprint 2 : on définit le format des données en commun avant de prompter l'IA. |

### Sprint 2

| | Réponse |
|---|---|
| ✓ Ce qui a bien marché | La communication était plus fluide, les rôles Scrum étaient bien tenus. Le PO a validé chaque US avant de passer à la suivante. |
| △ Ce qu'on améliorerait | Mieux découper les US en sous-tâches dès le Sprint Planning — US-07 était trop floue pour être intégrée dans le temps imparti. |
| → Ce qu'on garderait | Le workflow Trello + GitHub PR — ça a bien structuré le travail d'équipe. |

### Rétrospective finale

| Question | Réponse |
|---|---|
| ✓ La meilleure décision qu'on a prise | Garder une architecture simple (un seul composant) — ça nous a permis de livrer vite sans bloquer sur des imports ou une structure complexe. |
| △ Ce qu'on ferait différemment dès le début | Définir la structure de l'objet ticket (champs, types) avant de commencer à coder, pour éviter les refactorisations en cours de sprint. |
| 🤖 Ce qu'on a appris sur l'IA en équipe | L'IA est très efficace quand le prompt est précis et contextualisé. Elle ne remplace pas la décision humaine sur la priorisation et la vision produit. |
| 💡 Ce que ça change dans notre vision Agile | On a compris que l'Agile ce n'est pas juste "coder vite" — c'est surtout savoir prioriser, découper, et livrer quelque chose de démo-able à chaque sprint. |

---

## Definition of Done

Une User Story est considérée comme terminée quand :

- ✅ La fonctionnalité fonctionne sans erreur en local
- ✅ Le code est commité sur GitHub par le membre responsable (convention `feat:`)
- ✅ Une PR a été ouverte et mergée vers `develop`
- ✅ Le Product Owner a testé et validé la fonctionnalité
- ✅ Le README est mis à jour pour refléter l'US livrée

---

## Lancer le projet

```bash
git clone https://github.com/Marouanemarhrani/gestionnaire-des-tickets-internes.git
cd gestionnaire-des-tickets-internes
npm install
npm run dev
```

Ouvrir **http://localhost:5173**
