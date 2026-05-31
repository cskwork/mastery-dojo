import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "linux-foundations",
    title: "Linux Foundations",
    level: "Beginner",
    focus: "shell, files, paths, pipes, permissions",
    accent: "#6aa6d8"
  },
  {
    id: "linux-admin",
    title: "System Admin",
    level: "Builder",
    focus: "users, processes, services, packages, disks",
    accent: "#4ea36c"
  },
  {
    id: "linux-network-security",
    title: "Network and Security",
    level: "Practitioner",
    focus: "networking, access control, containers, kernel interfaces",
    accent: "#d0a23c"
  },
  {
    id: "linux-expertise",
    title: "Linux Expertise",
    level: "Expertise",
    focus: "boot, tracing, storage recovery, production operations",
    accent: "#c85d75"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("linux-foundations", [
    ["filesystem hierarchy", "standard top-level directories", "Linux systems organize files under one rooted hierarchy."],
    ["shell prompt", "interactive command entry", "The shell reads commands, expands them, and starts programs."],
    ["absolute and relative paths", "locate files from root or current directory", "Path choice affects reproducibility and safety."],
    ["ls cd pwd", "navigate and inspect directories", "These commands are the basic movement loop."],
    ["files and directories", "regular files and containers", "Linux represents most resources through filesystem objects."],
    ["cat less head tail", "view file contents", "Pick the viewer based on file size and desired section."],
    ["cp mv rm safety", "copy move remove intentionally", "Destructive commands need precise paths and review."],
    ["mkdir and touch", "create directories and files", "mkdir creates directories; touch creates or updates file timestamps."],
    ["globbing", "shell filename expansion", "Patterns like *.log expand before the command runs."],
    ["quoting", "control shell expansion", "Quotes preserve spaces and prevent unwanted wildcard or variable expansion."],
    ["redirection", "send streams to files", "Redirection connects stdin, stdout, and stderr to files."],
    ["pipes", "connect command output to input", "Pipes compose small tools into larger data flows."],
    ["grep", "search text patterns", "grep filters lines by literal or regular-expression matches."],
    ["find", "walk filesystem trees", "find locates files by name, type, time, size, or predicates."],
    ["man pages", "authoritative command reference", "Manual pages document commands, syscalls, config files, and conventions."],
    ["permissions basics", "read write execute bits", "Permission bits control access for owner, group, and others."],
    ["sudo", "run with delegated privilege", "sudo should be used for specific administrative actions."],
    ["exit status", "0 success nonzero failure", "Shell automation depends on command exit codes."]
  ]),
  ...defineTopics("linux-admin", [
    ["users and groups", "identity and membership", "User and group IDs drive ownership and access control."],
    ["chmod", "change permission bits", "chmod updates read, write, and execute permissions."],
    ["chown", "change owner or group", "Ownership affects who can access or modify files."],
    ["process model", "running program instance", "Processes have IDs, parents, environment, resources, and states."],
    ["ps and top", "inspect processes", "Process tools show CPU, memory, status, and command lines."],
    ["signals", "asynchronous process notifications", "Signals request termination, reload, stop, or custom handling."],
    ["systemd units", "managed service definitions", "Units define services, timers, mounts, sockets, and targets."],
    ["journalctl", "query system logs", "The journal stores structured logs for services and the system."],
    ["services", "long-running managed processes", "Services should restart, log, and report status predictably."],
    ["systemd timers", "scheduled unit activation", "Timers can replace cron with dependency and logging integration."],
    ["packages", "installed software units", "Package managers install, remove, update, and verify software."],
    ["apt and dnf basics", "distribution package tools", "Use the package manager matching the distribution family."],
    ["environment variables", "process inherited key values", "Environment values configure programs without changing code."],
    ["SSH", "secure remote login", "SSH provides encrypted shell access and file transfer."],
    ["tar and gzip", "archive and compress", "tar groups files; gzip compresses a stream or file."],
    ["df and du", "disk capacity and usage", "df shows filesystem capacity; du totals file tree usage."],
    ["mounts and fstab", "attach filesystems", "fstab configures filesystems mounted at boot."],
    ["log rotation", "bound log file growth", "Rotation keeps logs useful without filling disks."]
  ]),
  ...defineTopics("linux-network-security", [
    ["ip addr", "inspect network addresses", "The ip tool shows addresses, links, routes, and neighbors."],
    ["ip route", "inspect routing table", "Routes decide where packets go next."],
    ["DNS resolver", "translate names to addresses", "Resolver configuration affects service discovery and connectivity."],
    ["curl", "test HTTP and endpoints", "curl is a direct way to inspect request and response behavior."],
    ["ss", "inspect sockets", "ss shows listening ports and active connections."],
    ["nftables", "packet filtering framework", "nftables is the modern Linux firewall subsystem."],
    ["ufw", "friendly firewall frontend", "ufw simplifies common firewall rules on supported distributions."],
    ["SELinux", "mandatory access control", "SELinux confines processes beyond Unix permission bits."],
    ["AppArmor", "profile-based confinement", "AppArmor restricts program file and capability access."],
    ["capabilities", "split root privileges", "Capabilities grant narrow privileged operations."],
    ["namespaces", "isolate process views", "Namespaces power containers by isolating PIDs, mounts, networks, and more."],
    ["cgroups v2", "resource accounting and control", "cgroups limit and measure CPU, memory, and I/O usage."],
    ["containers", "isolated userspace processes", "Containers combine namespaces, cgroups, images, and runtime policy."],
    ["file ACLs", "fine-grained file permissions", "ACLs extend owner/group/other permission bits."],
    ["sudoers", "delegated admin policy", "sudoers defines who may run which commands as which user."],
    ["SSH hardening", "reduce remote login risk", "Use keys, disable weak auth, and restrict privileged login."],
    ["audit logs", "security-relevant event trail", "Audit records support investigation and compliance."],
    ["sysctl tuning", "runtime kernel parameters", "sysctl changes networking, memory, and kernel behavior settings."]
  ]),
  ...defineTopics("linux-expertise", [
    ["boot process", "firmware bootloader kernel init", "Boot diagnosis follows the startup chain in order."],
    ["initramfs", "early userspace image", "initramfs loads drivers and mounts the real root filesystem."],
    ["kernel releases", "track upstream and distribution kernels", "Kernel version awareness guides feature and security decisions."],
    ["distribution kernels", "vendor-patched kernel builds", "Distributions backport fixes and carry configuration differences."],
    ["kernel module basics", "loadable kernel extension", "Modules add drivers or subsystems without rebuilding the kernel."],
    ["perf", "profile CPU and kernel events", "perf identifies hotspots across userspace and kernel code."],
    ["strace", "trace system calls", "strace shows how a process interacts with the kernel."],
    ["ltrace", "trace library calls", "ltrace inspects dynamic library calls from a process."],
    ["eBPF observability", "safe kernel instrumentation", "eBPF can trace kernel and application behavior with low overhead."],
    ["I/O scheduling", "control block device request handling", "Schedulers affect latency and throughput for storage workloads."],
    ["filesystem repair", "fsck and recovery workflow", "Filesystem repair should follow backups and unmount rules."],
    ["RAID and LVM", "redundant and flexible storage", "RAID protects or speeds disks; LVM manages logical volumes."],
    ["disaster recovery", "restore validated service state", "Recovery plans need tested backups and runbooks."],
    ["high availability", "fail over critical services", "HA designs remove single points of failure."],
    ["capacity planning", "forecast resource limits", "Planning uses growth, saturation, and performance signals."],
    ["incident triage", "stabilize then diagnose", "Triage separates immediate mitigation from root-cause analysis."],
    ["security patching", "apply fixes with rollback path", "Patching balances exposure, compatibility, and downtime risk."],
    ["production runbooks", "repeatable operational steps", "Runbooks reduce variance during stressful maintenance or incidents."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("linux", topics);
