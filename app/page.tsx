type DayPlan = {
  day: number;
  title: string;
  hours: number;
  outcomes: string[];
  practice: string[];
  resources: string[];
};

const dayPlans: DayPlan[] = [
  {
    day: 1,
    title: "Foundations: VS Code, Python, Git Workflow",
    hours: 4,
    outcomes: [
      "Configure Python 3.12 and VS Code for automation projects",
      "Understand Git version control and project scaffolding basics",
      "Learn how WebView2 integrates into Office add-ins at a high level"
    ],
    practice: [
      "Install Python, Node.js, and VS Code extensions: Python, Pylance, Playwright",
      "Initialize Git repo with `.venv` and `.vscode` folders configured",
      "Read WebView2 + Office Add-ins overview, document how hosting works"
    ],
    resources: [
      "VS Code Python Setup Guide",
      "GitHub Getting Started with Git",
      "Microsoft Docs: WebView2 Overview",
      "Office Add-ins platform overview"
    ]
  },
  {
    day: 2,
    title: "Python Essentials for Automation",
    hours: 5,
    outcomes: [
      "Use Python virtual environments and pip effectively",
      "Apply OOP + modules to structure automation utilities",
      "Practice debugging with VS Code breakpoints and logging"
    ],
    practice: [
      "Build small CLI that reads config, logs actions, and outputs JSON",
      "Create helper modules for configuration and assertions",
      "Debug script using VS Code's Run and Debug workflow"
    ],
    resources: [
      "Real Python: Virtual Environments Primer",
      "Automate the Boring Stuff (Chapters on python basics)",
      "VS Code Python Debugging docs"
    ]
  },
  {
    day: 3,
    title: "Getting Started with Playwright (Python)",
    hours: 5,
    outcomes: [
      "Install Playwright, understand browser contexts, selectors, fixtures",
      "Launch browsers, record scripts, and run headed/headless",
      "Integrate Playwright test runner with pytest-style fixtures"
    ],
    practice: [
      "Install Playwright browsers with `playwright install`",
      "Record login flow against a sample site and refactor selectors",
      "Create a modular test using Playwright test runner and fixtures"
    ],
    resources: [
      "Playwright Python Docs: Getting Started",
      "Selectors best practices (Playwright docs)",
      "Playwright Test Runner (Python) guide"
    ]
  },
  {
    day: 4,
    title: "Advanced Playwright Patterns",
    hours: 4,
    outcomes: [
      "Master waits, network interception, tracing, and test isolation",
      "Create reusable page objects and custom test utils",
      "Generate, analyze, and share Playwright trace artifacts"
    ],
    practice: [
      "Build page object for sample Word add-in UI (mocked web app)",
      "Use `page.wait_for_selector`, `expect` assertions, and network mocks",
      "Capture trace with `--trace on` and replay to debug failures"
    ],
    resources: [
      "Playwright Trace Viewer docs",
      "Playwright Test Fixtures & Annotations",
      "Article: Scalable Playwright with Page Objects"
    ]
  },
  {
    day: 5,
    title: "Microsoft Word Add-in Architecture",
    hours: 4,
    outcomes: [
      "Understand Office.js, task panes, and COM vs WebView2 architecture",
      "Learn Office Add-in deployment models (manifest, sideloading)",
      "Prepare a sample Word add-in environment locally"
    ],
    practice: [
      "Generate sample Word add-in using `yo office` (task pane template)",
      "Enable sideloading in Word and sideload the sample add-in",
      "Document add-in commands, HTML/JS interaction points with Word"
    ],
    resources: [
      "Microsoft Learn: Build your first Word add-in",
      "Office Add-in manifest schema reference",
      "Tutorial: Sideload Office Add-ins on Windows"
    ]
  },
  {
    day: 6,
    title: "WebView2 Deep Dive + Automation Hooks",
    hours: 5,
    outcomes: [
      "Inspect WebView2 devtools, understand DOM vs add-in host boundaries",
      "Learn automation constraints with embedded WebView2 (Word)",
      "Plan reliable selectors and communication patterns"
    ],
    practice: [
      "Use Edge DevTools to inspect the task pane WebView2 content",
      "Map automation-safe selectors for Word add-in features",
      "Prototype an automation helper script that launches Word and attaches to WebView2"
    ],
    resources: [
      "WebView2 DevTools Protocol docs",
      "Automating WebView2 with Playwright article",
      "Office Add-ins best practices for UI development"
    ]
  },
  {
    day: 7,
    title: "Environment Orchestration & Test Harness",
    hours: 4,
    outcomes: [
      "Automate Word + add-in startup before Playwright tests run",
      "Mock backend dependencies and test data for consistent runs",
      "Integrate environment variables, secrets, and configuration files"
    ],
    practice: [
      "Write Python script using `subprocess` to boot Word with sideloaded add-in",
      "Implement environment config loader for API endpoints & credentials",
      "Create a test fixture that ensures Word is ready before tests execute"
    ],
    resources: [
      "Python subprocess documentation",
      "Playwright Test configuration options",
      "Guide: Testing Office Add-ins"
    ]
  },
  {
    day: 8,
    title: "Building the Automation Suite",
    hours: 6,
    outcomes: [
      "Develop end-to-end scenarios covering core add-in workflows",
      "Incorporate assertions for Word document state and UI changes",
      "Structure test suite for parallel runs and CI readiness"
    ],
    practice: [
      "Automate scenario: launch add-in, insert content, validate document changes",
      "Add logging & screenshot capture on failure with Playwright hooks",
      "Refactor tests into logical suites using page objects and helper utils"
    ],
    resources: [
      "Playwright Python API reference",
      "Article: Effective Assertions in UI Tests",
      "Sample Playwright project structures (GitHub references)"
    ]
  },
  {
    day: 9,
    title: "Resilience, Reporting, and CI Integration",
    hours: 4,
    outcomes: [
      "Harden tests against flakiness with retries and stable synchronization",
      "Produce HTML reports, traces, and logs for stakeholders",
      "Integrate Playwright suite with GitHub Actions or Azure DevOps"
    ],
    practice: [
      "Configure retries, slow-mo, and project-level timeouts",
      "Generate HTML + JSON reports and publish artifact folders",
      "Create CI pipeline YAML executing tests on hosted Windows runner"
    ],
    resources: [
      "Playwright Test Configuration (projects, retries, timeouts)",
      "Playwright HTML Reporter docs",
      "GitHub Actions for Playwright template"
    ]
  },
  {
    day: 10,
    title: "Capstone Implementation & Review",
    hours: 5,
    outcomes: [
      "Deliver a maintainable automation suite that validates Word add-in scenarios",
      "Document usage, setup steps, and future enhancements",
      "Conduct dry run, capture learnings, and plan iteration backlog"
    ],
    practice: [
      "Run full regression on sample add-in, fix any failures",
      "Create README with setup, commands, troubleshooting tips",
      "Record walkthrough video or notes summarizing architecture and results"
    ],
    resources: [
      "Keep a retrospective template (Notion/Markdown)",
      "Playwright troubleshooting guide",
      "Office Add-ins deployment checklist"
    ]
  }
];

const totalHours = dayPlans.reduce((sum, item) => sum + item.hours, 0);

const dailyRoutine = [
  {
    title: "Prime Session (60-90 min)",
    tips: [
      "Review previous notes; write down today’s objective",
      "Skim documentation/res articles before jumping into code",
      "Set VS Code tasks in `tasks.json` for frequent commands"
    ]
  },
  {
    title: "Deep Work Block (120-150 min)",
    tips: [
      "Implement the practice tasks hands-on",
      "Use Playwright Trace Viewer + VS Code debugger to inspect behavior",
      "Commit work-in-progress with detailed messages to track learning"
    ]
  },
  {
    title: "Cool Down (30-45 min)",
    tips: [
      "Summarize learnings in a daily log (questions, blockers, wins)",
      "Capture TODOs for tomorrow in GitHub issues or Markdown",
      "Share key insights or blockers with mentor/peer for accountability"
    ]
  }
];

const milestoneChecks = [
  {
    title: "End of Day 3",
    points: [
      "Able to launch Playwright tests and interpret selector errors quickly",
      "Comfortable toggling between headless/headed runs and reading console logs"
    ]
  },
  {
    title: "End of Day 6",
    points: [
      "Have a working Word add-in sample sideloaded and inspected via DevTools",
      "Documented automation approach for WebView2 boundaries and selectors"
    ]
  },
  {
    title: "End of Day 8",
    points: [
      "Core automation flows scripted with reusable fixtures/page objects",
      "Consistent environment startup sequence scripted"
    ]
  },
  {
    title: "Day 10 Demo",
    points: [
      "Full suite runs green; reports and traces ready to hand off",
      "README explains setup; backlog lists next 3 high-impact enhancements"
    ]
  }
];

export default function HomePage() {
  return (
    <div className="wrap">
      <h1 className="title">
        10-Day Roadmap: Playwright (Python) Automation for Word WebView2 Add-ins
      </h1>
      <p className="subtitle">
        Designed for a motivated beginner using VS Code. Invest about{" "}
        <strong>{totalHours} hours</strong> across focused, hands-on sessions to
        build a working automation suite and deliver a capstone implementation.
      </p>

      <div className="roadmap-grid">
        {dayPlans.map((item) => (
          <article key={item.day} className="day-card">
            <header className="day-header">
              <span className="day-title">Day {item.day}: {item.title}</span>
              <span className="hours-badge">{item.hours} hrs</span>
            </header>
            <div>
              <div className="section-title">Key Outcomes</div>
              <ul className="list">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-title">Hands-on Practice</div>
              <ul className="list">
                {item.practice.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-title">Targeted Resources</div>
              <ul className="list">
                {item.resources.map((res) => (
                  <li key={res}>{res}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="stacked-section">
        <div className="stack-card">
          <h2>Daily Learning Rhythm</h2>
          <ul className="list">
            {dailyRoutine.map((block) => (
              <li key={block.title}>
                <strong>{block.title}:</strong>{" "}
                {block.tips.join(" • ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="stack-card">
          <h2>Milestone Checks</h2>
          <ul className="list">
            {milestoneChecks.map((milestone) => (
              <li key={milestone.title}>
                <strong>{milestone.title}:</strong>{" "}
                {milestone.points.join(" • ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="stack-card">
          <h2>Implementation Week Toolkit</h2>
          <ul className="list">
            <li>
              <strong>VS Code Setup:</strong> Python, Playwright, REST Client,
              TODO Highlight extensions; configure `tasks.json` for test commands.
            </li>
            <li>
              <strong>Project Skeleton:</strong> `src/automation` package for
              page objects, `tests/functional` for scenarios, `.env` for
              secrets, `resources/` for Word documents.
            </li>
            <li>
              <strong>Quality Signals:</strong> Playwright traces, HTML reports,
              custom log files, and Git history to showcase progress.
            </li>
            <li>
              <strong>Stretch Goals:</strong> Add CI pipeline, integrate linting
              (`ruff`, `black`), and parameterize tests for multiple add-in
              configurations.
            </li>
          </ul>
        </div>
      </section>

      <div className="callout">
        Prioritize consistent practice and reflective notes. Each evening,
        capture blockers, questions, and insights in a learning journal. This
        accelerates retention and gives you a narrative to share with teammates
        or stakeholders at the end of the 10-day sprint.
      </div>

      <footer className="footer">
        <div>
          <strong>Recommended Daily Schedule:</strong> 4–6 focused hours split
          across morning and afternoon sessions, leaving buffer for review.
        </div>
        <div>
          <strong>Progress Tracking:</strong> Maintain a Git repo + README with
          daily commits, and use GitHub Projects or Jira board to visualize tasks.
        </div>
        <div>
          <strong>Support Strategy:</strong> Engage in Microsoft Q&A, Playwright
          Discord, and Office Add-ins community calls when you hit roadblocks.
        </div>
      </footer>
    </div>
  );
}
