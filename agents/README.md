# Irish Ledger AI Agents

This directory contains the prompts for Claude Code scheduled tasks that run Irish Ledger autonomously.

## Architecture (Local Desktop Tasks)

```
                    ┌─────────────────┐
                    │   YOU (Human)   │
                    │ Review & Approve│
                    └────────┬────────┘
                             │
┌────────────────────────────┼────────────────────────────┐
│                            │                            │
│         CLAUDE CODE DESKTOP SCHEDULED TASKS             │
│                                                         │
│  ┌─────────┐   ┌────────┐   ┌────────┐   ┌──────────┐  │
│  │  SCOUT  │ → │ EDITOR │ → │ WRITER │ → │TRANSLATOR│  │
│  │ (hourly)│   │ (6am)  │   │ (8am)  │   │  (10am)  │  │
│  └─────────┘   └────────┘   └────────┘   └──────────┘  │
│                                                │        │
│                         ┌──────────────────────┘        │
│                         ▼                               │
│                   ┌───────────┐      ┌─────────┐        │
│                   │ PUBLISHER │      │ CRAICLE │        │
│                   │  (12pm)   │      │ (11:55pm)│       │
│                   └───────────┘      └─────────┘        │
│                                                         │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  IRISH LEDGER   │
                    │   (Live Site)   │
                    └─────────────────┘
```

## Agents

| Agent | File | Schedule | Purpose |
|-------|------|----------|---------|
| Scout | `scout.md` | Hourly | Monitors RSS feeds, finds relevant stories |
| Editor | `editor.md` | 6:00 AM | Curates and approves stories for writing |
| Writer | `writer.md` | 8:00 AM | Creates original articles from leads |
| Translator | `translator.md` | 10:00 AM | Translates EN → Irish (Gaeilge) |
| Publisher | `publisher.md` | 12:00 PM | Deploys content to live site |
| Craicle | `craicle.md` | 11:55 PM | Selects daily word game word |

## Content Pipeline

```
RSS Feeds
    │
    ▼
content/scouted/          ← Scout creates leads here
    │
    ▼
content/approved/         ← Editor moves approved stories here
    │
    ▼
content/drafts/           ← Writer creates articles here
    │
    ▼
content/translated/       ← Translator adds Irish versions
    │
    ▼
src/content/articles/     ← Publisher moves to live site
    │
    ▼
content/published/        ← Archive of published content
```

## Setting Up Scheduled Tasks

1. Go to [claude.ai/code/scheduled](https://claude.ai/code/scheduled)
2. Click "New remote task"
3. Connect the `irish_ledger` GitHub repository
4. For each agent:
   - Name: `irish-ledger-scout`, `irish-ledger-editor`, etc.
   - Prompt: Copy from the corresponding `.md` file
   - Schedule: Set according to the table above
5. Enable the task

## Human Touchpoints

While the system runs autonomously, you should:

1. **Daily (optional):** Review the Editor's daily brief in `content/briefs/`
2. **Weekly:** Check analytics, adjust priorities
3. **As needed:** Approve/reject flagged content
4. **Monthly:** Review word bank for Craicle

## Monitoring

- Check GitHub commits to see agent activity
- Each agent commits with a descriptive message
- Failed tasks will show in Claude Code scheduled tasks dashboard

## Emergency Stop

To pause all agents:
1. Go to [claude.ai/code/scheduled](https://claude.ai/code/scheduled)
2. Toggle off each task

Or push to `main` with:
```
git commit --allow-empty -m "PAUSE: Stop all agent activity"
```

## Adding New Agents

1. Create a new `.md` file with the prompt
2. Define clear inputs (which content directories to read)
3. Define clear outputs (what files to create, where)
4. Set up as a scheduled task
5. Test manually with "Run now" before enabling schedule
