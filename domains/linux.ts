import { drills, tracks } from "@/data/linuxCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const linuxDomain = createLearningDomain({
  id: "linux",
  title: "LinuxDojo - Learn Linux from Beginner to Expertise",
  description: "KanaDojo-inspired Linux drills from shell basics to production operations.",
  primaryName: "LinuxDojo",
  secondaryName: "Linux道場",
  subjectName: "Linux",
  storageKey: "linux-dojo-progress-v1",
  tokenPool: ["ls", "grep", "find", "chmod", "systemd", "ip", "ssh", "nft", "cgroup", "perf", "bpf", "sudo"],
  trackMarks: {
    "linux-foundations": "sh",
    "linux-admin": "adm",
    "linux-network-security": "net",
    "linux-expertise": "ops"
  },
  cards: [
    { id: "linux-foundations", mark: "sh", label: "Shell", summary: "paths, pipes, perms" },
    { id: "linux-admin", mark: "adm", label: "Admin", summary: "users, services, disks" },
    { id: "linux-network-security", mark: "net", label: "Network", summary: "ip, firewall, containers" },
    { id: "linux-expertise", mark: "ops", label: "Expert", summary: "boot, tracing, recovery" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ linux bloom ~ man-pages and kernel docs aligned ~ v0.1.18 (alpha)"
});
