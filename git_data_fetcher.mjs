// scripts/fetch_projects.mjs
import fetch from "node-fetch";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// ---------- Inline repo list (edit this) ----------
const REPOS = [
  { owner: "aezouhri", name: "Autolingo" },
  { owner: "aezouhri", name: "Notably" },
  { owner: "aezouhri", name: "SignFlow" },
  { owner: "Iron-Men-2023", name: "Omnilens" },
  { owner: "aezouhri", name: "Ad-vertisement" },
];

// ---------- Config ----------
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error("Missing GITHUB_TOKEN in .env");
  process.exit(1);
}
const BASE_URL = "https://api.github.com/graphql";
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `bearer ${TOKEN}`,
};
const OUTPUT_PATH = "./src/shared/opensource/projects.json";
const CONCURRENCY = 6;

// ---------- Language → iconifyClass map ----------
const LANGUAGE_ICONS = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
  "C++": "logos-c-plusplus",
  "Objective-C++": "logos-c-plusplus",
  C: "logos-c",
  TypeScript: "logos-typescript-icon",
};

// ---------- Query ----------
const REPO_QUERY = `
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      createdAt
      url
      description
      isFork
      languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
        nodes { name }
      }
    }
  }
`;

// ---------- Helpers ----------
async function fetchRepo({ owner, name }) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ query: REPO_QUERY, variables: { owner, name } }),
  });

  const txt = await res.text();
  let json;
  try {
    json = JSON.parse(txt);
  } catch (e) {
    throw new Error(`Non-JSON response for ${owner}/${name}: ${txt.slice(0, 200)}...`);
  }

  if (json.errors) {
    console.warn(`⚠️  ${owner}/${name}: ${JSON.stringify(json.errors)}`);
    return null;
  }

  const repo = json.data?.repository;
  if (!repo) return null;

  // Map languages with iconifyClass
  const languages = repo.languages?.nodes?.map(l => {
    return LANGUAGE_ICONS[l.name]
      ? { name: l.name, iconifyClass: LANGUAGE_ICONS[l.name] }
      : { name: l.name, iconifyClass: null };
  }) ?? [];

  return {
    id: repo.id,
    name: repo.name,
    createdAt: repo.createdAt,
    url: repo.url,
    description: repo.description,
    isFork: repo.isFork,
    languages,
  };
}

async function mapWithConcurrency(items, limit, fn) {
  let i = 0;
  const results = new Array(items.length);
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      try {
        results[idx] = await fn(items[idx], idx);
      } catch (e) {
        console.error(`❌ Error on item ${idx}:`, e.message);
        results[idx] = null;
      }
    }
  });
  await Promise.all(workers);
  return results;
}

function dedupeRepos(list) {
  const seen = new Set();
  return list.filter(({ owner, name }) => {
    const key = `${owner.toLowerCase()}/${name.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ---------- Main ----------
async function main() {
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true }).catch(() => {});

  const repos = dedupeRepos(REPOS);
  if (repos.length === 0) {
    console.error("No repos specified in REPOS.");
    process.exit(1);
  }

  console.log(`Fetching ${repos.length} repos from GitHub...`);

  const fetched = await mapWithConcurrency(repos, CONCURRENCY, fetchRepo);
  const data = fetched.filter(Boolean);

  const output = { data };

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
  console.log(`Done. Wrote ${data.length} repos to ${OUTPUT_PATH}.`);
}

main().catch(e => {
  console.error("Uncaught error:", e);
  process.exit(1);
});
