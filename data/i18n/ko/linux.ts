import type { DomainTextKo } from "@/data/i18n/types";

export const linuxTextKo: DomainTextKo = {
  metadata: {
    title: "LinuxDojo - 리눅스 기초부터 전문가까지",
    description: "KanaDojo 스타일의 리눅스 드릴 — 셸 기초부터 프로덕션 운영까지."
  },
  welcomeTitle: "리눅스 숙달의 길",
  welcomeBody: "실무 개발자와 시스템 관리자를 위한 리눅스 드릴. 셸 기초부터 커널 트레이싱까지 단계별로 익힌다.",
  subjectName: "리눅스",
  footerMeta: "커뮤니티 제작 ~ 리눅스 블룸 ~ man 페이지 및 커널 문서 기반 ~ v0.1.18 (알파)",

  cards: {
    "linux-foundations": {
      label: "셸 기초",
      summary: "경로, 파이프, 권한"
    },
    "linux-admin": {
      label: "시스템 관리",
      summary: "사용자, 서비스, 디스크"
    },
    "linux-network-security": {
      label: "네트워크",
      summary: "ip, 방화벽, 컨테이너"
    },
    "linux-expertise": {
      label: "전문가",
      summary: "부트, 트레이싱, 복구"
    }
  },

  tracks: {
    "linux-foundations": {
      title: "리눅스 기초",
      focus: "셸, 파일, 경로, 파이프, 권한"
    },
    "linux-admin": {
      title: "시스템 관리",
      focus: "사용자, 프로세스, 서비스, 패키지, 디스크"
    },
    "linux-network-security": {
      title: "네트워크 및 보안",
      focus: "네트워킹, 접근 제어, 컨테이너, 커널 인터페이스"
    },
    "linux-expertise": {
      title: "리눅스 전문가",
      focus: "부트, 트레이싱, 스토리지 복구, 프로덕션 운영"
    }
  },

  drills: {
    // ── linux-foundations ──────────────────────────────────────────────

    "linux-linux-foundations-filesystem-hierarchy-1-pick": {
      concept: "파일시스템 계층 구조",
      prompt: "파일시스템 계층 구조에 대한 최선의 답을 고르시오.",
      hint: "표준 최상위 디렉터리",
      explanation: "standard top-level directories is the key move for filesystem hierarchy. Linux systems organize files under one rooted hierarchy."
    },
    "linux-linux-foundations-filesystem-hierarchy-1-reverse": {
      concept: "파일시스템 계층 구조",
      prompt: "다음 설명이 가리키는 개념은? standard top-level directories",
      hint: "Linux systems organize files under one rooted hierarchy.",
      explanation: "filesystem hierarchy: Linux systems organize files under one rooted hierarchy."
    },
    "linux-linux-foundations-filesystem-hierarchy-1-input": {
      concept: "파일시스템 계층 구조",
      prompt: "파일시스템 계층 구조의 핵심 답을 입력하시오.",
      hint: "표준 최상위 디렉터리",
      explanation: "standard top-level directories is the key move for filesystem hierarchy. Linux systems organize files under one rooted hierarchy."
    },
    "linux-linux-foundations-filesystem-hierarchy-1-debug": {
      concept: "파일시스템 계층 구조",
      prompt: "이 파일시스템 계층 구조 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "standard top-level directories is the key move for filesystem hierarchy. Linux systems organize files under one rooted hierarchy."
    },

    "linux-linux-foundations-shell-prompt-2-pick": {
      concept: "셸 프롬프트",
      prompt: "셸 프롬프트에 대한 최선의 답을 고르시오.",
      hint: "대화형 명령 입력",
      explanation: "interactive command entry is the key move for shell prompt. The shell reads commands, expands them, and starts programs."
    },
    "linux-linux-foundations-shell-prompt-2-reverse": {
      concept: "셸 프롬프트",
      prompt: "다음 설명이 가리키는 개념은? interactive command entry",
      hint: "The shell reads commands, expands them, and starts programs.",
      explanation: "shell prompt: The shell reads commands, expands them, and starts programs."
    },
    "linux-linux-foundations-shell-prompt-2-input": {
      concept: "셸 프롬프트",
      prompt: "셸 프롬프트의 핵심 답을 입력하시오.",
      hint: "대화형 명령 입력",
      explanation: "interactive command entry is the key move for shell prompt. The shell reads commands, expands them, and starts programs."
    },
    "linux-linux-foundations-shell-prompt-2-debug": {
      concept: "셸 프롬프트",
      prompt: "이 셸 프롬프트 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "interactive command entry is the key move for shell prompt. The shell reads commands, expands them, and starts programs."
    },

    "linux-linux-foundations-absolute-and-relative-paths-3-pick": {
      concept: "절대 경로와 상대 경로",
      prompt: "절대 경로와 상대 경로에 대한 최선의 답을 고르시오.",
      hint: "루트 또는 현재 디렉터리 기준으로 파일 위치 지정",
      explanation: "locate files from root or current directory is the key move for absolute and relative paths. Path choice affects reproducibility and safety."
    },
    "linux-linux-foundations-absolute-and-relative-paths-3-reverse": {
      concept: "절대 경로와 상대 경로",
      prompt: "다음 설명이 가리키는 개념은? locate files from root or current directory",
      hint: "Path choice affects reproducibility and safety.",
      explanation: "absolute and relative paths: Path choice affects reproducibility and safety."
    },
    "linux-linux-foundations-absolute-and-relative-paths-3-input": {
      concept: "절대 경로와 상대 경로",
      prompt: "절대 경로와 상대 경로의 핵심 답을 입력하시오.",
      hint: "루트 또는 현재 디렉터리 기준으로 파일 위치 지정",
      explanation: "locate files from root or current directory is the key move for absolute and relative paths. Path choice affects reproducibility and safety."
    },
    "linux-linux-foundations-absolute-and-relative-paths-3-debug": {
      concept: "절대 경로와 상대 경로",
      prompt: "이 절대 경로와 상대 경로 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "locate files from root or current directory is the key move for absolute and relative paths. Path choice affects reproducibility and safety."
    },

    "linux-linux-foundations-ls-cd-pwd-4-pick": {
      concept: "ls cd pwd",
      prompt: "ls cd pwd에 대한 최선의 답을 고르시오.",
      hint: "디렉터리 탐색 및 확인",
      explanation: "navigate and inspect directories is the key move for ls cd pwd. These commands are the basic movement loop."
    },
    "linux-linux-foundations-ls-cd-pwd-4-reverse": {
      concept: "ls cd pwd",
      prompt: "다음 설명이 가리키는 개념은? navigate and inspect directories",
      hint: "These commands are the basic movement loop.",
      explanation: "ls cd pwd: These commands are the basic movement loop."
    },
    "linux-linux-foundations-ls-cd-pwd-4-input": {
      concept: "ls cd pwd",
      prompt: "ls cd pwd의 핵심 답을 입력하시오.",
      hint: "디렉터리 탐색 및 확인",
      explanation: "navigate and inspect directories is the key move for ls cd pwd. These commands are the basic movement loop."
    },
    "linux-linux-foundations-ls-cd-pwd-4-debug": {
      concept: "ls cd pwd",
      prompt: "이 ls cd pwd 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "navigate and inspect directories is the key move for ls cd pwd. These commands are the basic movement loop."
    },

    "linux-linux-foundations-files-and-directories-5-pick": {
      concept: "파일과 디렉터리",
      prompt: "파일과 디렉터리에 대한 최선의 답을 고르시오.",
      hint: "일반 파일과 컨테이너",
      explanation: "regular files and containers is the key move for files and directories. Linux represents most resources through filesystem objects."
    },
    "linux-linux-foundations-files-and-directories-5-reverse": {
      concept: "파일과 디렉터리",
      prompt: "다음 설명이 가리키는 개념은? regular files and containers",
      hint: "Linux represents most resources through filesystem objects.",
      explanation: "files and directories: Linux represents most resources through filesystem objects."
    },
    "linux-linux-foundations-files-and-directories-5-input": {
      concept: "파일과 디렉터리",
      prompt: "파일과 디렉터리의 핵심 답을 입력하시오.",
      hint: "일반 파일과 컨테이너",
      explanation: "regular files and containers is the key move for files and directories. Linux represents most resources through filesystem objects."
    },
    "linux-linux-foundations-files-and-directories-5-debug": {
      concept: "파일과 디렉터리",
      prompt: "이 파일과 디렉터리 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "regular files and containers is the key move for files and directories. Linux represents most resources through filesystem objects."
    },

    "linux-linux-foundations-cat-less-head-tail-6-pick": {
      concept: "cat less head tail",
      prompt: "cat less head tail에 대한 최선의 답을 고르시오.",
      hint: "파일 내용 보기",
      explanation: "view file contents is the key move for cat less head tail. Pick the viewer based on file size and desired section."
    },
    "linux-linux-foundations-cat-less-head-tail-6-reverse": {
      concept: "cat less head tail",
      prompt: "다음 설명이 가리키는 개념은? view file contents",
      hint: "Pick the viewer based on file size and desired section.",
      explanation: "cat less head tail: Pick the viewer based on file size and desired section."
    },
    "linux-linux-foundations-cat-less-head-tail-6-input": {
      concept: "cat less head tail",
      prompt: "cat less head tail의 핵심 답을 입력하시오.",
      hint: "파일 내용 보기",
      explanation: "view file contents is the key move for cat less head tail. Pick the viewer based on file size and desired section."
    },
    "linux-linux-foundations-cat-less-head-tail-6-debug": {
      concept: "cat less head tail",
      prompt: "이 cat less head tail 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "view file contents is the key move for cat less head tail. Pick the viewer based on file size and desired section."
    },

    "linux-linux-foundations-cp-mv-rm-safety-7-pick": {
      concept: "cp mv rm 안전 사용",
      prompt: "cp mv rm 안전 사용에 대한 최선의 답을 고르시오.",
      hint: "복사, 이동, 삭제를 의도적으로",
      explanation: "copy move remove intentionally is the key move for cp mv rm safety. Destructive commands need precise paths and review."
    },
    "linux-linux-foundations-cp-mv-rm-safety-7-reverse": {
      concept: "cp mv rm 안전 사용",
      prompt: "다음 설명이 가리키는 개념은? copy move remove intentionally",
      hint: "Destructive commands need precise paths and review.",
      explanation: "cp mv rm safety: Destructive commands need precise paths and review."
    },
    "linux-linux-foundations-cp-mv-rm-safety-7-input": {
      concept: "cp mv rm 안전 사용",
      prompt: "cp mv rm 안전 사용의 핵심 답을 입력하시오.",
      hint: "복사, 이동, 삭제를 의도적으로",
      explanation: "copy move remove intentionally is the key move for cp mv rm safety. Destructive commands need precise paths and review."
    },
    "linux-linux-foundations-cp-mv-rm-safety-7-debug": {
      concept: "cp mv rm 안전 사용",
      prompt: "이 cp mv rm 안전 사용 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "copy move remove intentionally is the key move for cp mv rm safety. Destructive commands need precise paths and review."
    },

    "linux-linux-foundations-mkdir-and-touch-8-pick": {
      concept: "mkdir과 touch",
      prompt: "mkdir과 touch에 대한 최선의 답을 고르시오.",
      hint: "디렉터리와 파일 생성",
      explanation: "create directories and files is the key move for mkdir and touch. mkdir creates directories; touch creates or updates file timestamps."
    },
    "linux-linux-foundations-mkdir-and-touch-8-reverse": {
      concept: "mkdir과 touch",
      prompt: "다음 설명이 가리키는 개념은? create directories and files",
      hint: "mkdir creates directories; touch creates or updates file timestamps.",
      explanation: "mkdir and touch: mkdir creates directories; touch creates or updates file timestamps."
    },
    "linux-linux-foundations-mkdir-and-touch-8-input": {
      concept: "mkdir과 touch",
      prompt: "mkdir과 touch의 핵심 답을 입력하시오.",
      hint: "디렉터리와 파일 생성",
      explanation: "create directories and files is the key move for mkdir and touch. mkdir creates directories; touch creates or updates file timestamps."
    },
    "linux-linux-foundations-mkdir-and-touch-8-debug": {
      concept: "mkdir과 touch",
      prompt: "이 mkdir과 touch 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "create directories and files is the key move for mkdir and touch. mkdir creates directories; touch creates or updates file timestamps."
    },

    "linux-linux-foundations-globbing-9-pick": {
      concept: "글로빙",
      prompt: "글로빙에 대한 최선의 답을 고르시오.",
      hint: "셸 파일명 확장",
      explanation: "shell filename expansion is the key move for globbing. Patterns like *.log expand before the command runs."
    },
    "linux-linux-foundations-globbing-9-reverse": {
      concept: "글로빙",
      prompt: "다음 설명이 가리키는 개념은? shell filename expansion",
      hint: "Patterns like *.log expand before the command runs.",
      explanation: "globbing: Patterns like *.log expand before the command runs."
    },
    "linux-linux-foundations-globbing-9-input": {
      concept: "글로빙",
      prompt: "글로빙의 핵심 답을 입력하시오.",
      hint: "셸 파일명 확장",
      explanation: "shell filename expansion is the key move for globbing. Patterns like *.log expand before the command runs."
    },
    "linux-linux-foundations-globbing-9-debug": {
      concept: "글로빙",
      prompt: "이 글로빙 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "shell filename expansion is the key move for globbing. Patterns like *.log expand before the command runs."
    },

    "linux-linux-foundations-quoting-10-pick": {
      concept: "쿼우팅",
      prompt: "쿼우팅에 대한 최선의 답을 고르시오.",
      hint: "셸 확장 제어",
      explanation: "control shell expansion is the key move for quoting. Quotes preserve spaces and prevent unwanted wildcard or variable expansion."
    },
    "linux-linux-foundations-quoting-10-reverse": {
      concept: "쿼우팅",
      prompt: "다음 설명이 가리키는 개념은? control shell expansion",
      hint: "Quotes preserve spaces and prevent unwanted wildcard or variable expansion.",
      explanation: "quoting: Quotes preserve spaces and prevent unwanted wildcard or variable expansion."
    },
    "linux-linux-foundations-quoting-10-input": {
      concept: "쿼우팅",
      prompt: "쿼우팅의 핵심 답을 입력하시오.",
      hint: "셸 확장 제어",
      explanation: "control shell expansion is the key move for quoting. Quotes preserve spaces and prevent unwanted wildcard or variable expansion."
    },
    "linux-linux-foundations-quoting-10-debug": {
      concept: "쿼우팅",
      prompt: "이 쿼우팅 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "control shell expansion is the key move for quoting. Quotes preserve spaces and prevent unwanted wildcard or variable expansion."
    },

    "linux-linux-foundations-redirection-11-pick": {
      concept: "리디렉션",
      prompt: "리디렉션에 대한 최선의 답을 고르시오.",
      hint: "스트림을 파일로 전송",
      explanation: "send streams to files is the key move for redirection. Redirection connects stdin, stdout, and stderr to files."
    },
    "linux-linux-foundations-redirection-11-reverse": {
      concept: "리디렉션",
      prompt: "다음 설명이 가리키는 개념은? send streams to files",
      hint: "Redirection connects stdin, stdout, and stderr to files.",
      explanation: "redirection: Redirection connects stdin, stdout, and stderr to files."
    },
    "linux-linux-foundations-redirection-11-input": {
      concept: "리디렉션",
      prompt: "리디렉션의 핵심 답을 입력하시오.",
      hint: "스트림을 파일로 전송",
      explanation: "send streams to files is the key move for redirection. Redirection connects stdin, stdout, and stderr to files."
    },
    "linux-linux-foundations-redirection-11-debug": {
      concept: "리디렉션",
      prompt: "이 리디렉션 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "send streams to files is the key move for redirection. Redirection connects stdin, stdout, and stderr to files."
    },

    "linux-linux-foundations-pipes-12-pick": {
      concept: "파이프",
      prompt: "파이프에 대한 최선의 답을 고르시오.",
      hint: "명령 출력을 입력으로 연결",
      explanation: "connect command output to input is the key move for pipes. Pipes compose small tools into larger data flows."
    },
    "linux-linux-foundations-pipes-12-reverse": {
      concept: "파이프",
      prompt: "다음 설명이 가리키는 개념은? connect command output to input",
      hint: "Pipes compose small tools into larger data flows.",
      explanation: "pipes: Pipes compose small tools into larger data flows."
    },
    "linux-linux-foundations-pipes-12-input": {
      concept: "파이프",
      prompt: "파이프의 핵심 답을 입력하시오.",
      hint: "명령 출력을 입력으로 연결",
      explanation: "connect command output to input is the key move for pipes. Pipes compose small tools into larger data flows."
    },
    "linux-linux-foundations-pipes-12-debug": {
      concept: "파이프",
      prompt: "이 파이프 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "connect command output to input is the key move for pipes. Pipes compose small tools into larger data flows."
    },

    "linux-linux-foundations-grep-13-pick": {
      concept: "grep",
      prompt: "grep에 대한 최선의 답을 고르시오.",
      hint: "텍스트 패턴 검색",
      explanation: "search text patterns is the key move for grep. grep filters lines by literal or regular-expression matches."
    },
    "linux-linux-foundations-grep-13-reverse": {
      concept: "grep",
      prompt: "다음 설명이 가리키는 개념은? search text patterns",
      hint: "grep filters lines by literal or regular-expression matches.",
      explanation: "grep: grep filters lines by literal or regular-expression matches."
    },
    "linux-linux-foundations-grep-13-input": {
      concept: "grep",
      prompt: "grep의 핵심 답을 입력하시오.",
      hint: "텍스트 패턴 검색",
      explanation: "search text patterns is the key move for grep. grep filters lines by literal or regular-expression matches."
    },
    "linux-linux-foundations-grep-13-debug": {
      concept: "grep",
      prompt: "이 grep 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "search text patterns is the key move for grep. grep filters lines by literal or regular-expression matches."
    },

    "linux-linux-foundations-find-14-pick": {
      concept: "find",
      prompt: "find에 대한 최선의 답을 고르시오.",
      hint: "파일시스템 트리 탐색",
      explanation: "walk filesystem trees is the key move for find. find locates files by name, type, time, size, or predicates."
    },
    "linux-linux-foundations-find-14-reverse": {
      concept: "find",
      prompt: "다음 설명이 가리키는 개념은? walk filesystem trees",
      hint: "find locates files by name, type, time, size, or predicates.",
      explanation: "find: find locates files by name, type, time, size, or predicates."
    },
    "linux-linux-foundations-find-14-input": {
      concept: "find",
      prompt: "find의 핵심 답을 입력하시오.",
      hint: "파일시스템 트리 탐색",
      explanation: "walk filesystem trees is the key move for find. find locates files by name, type, time, size, or predicates."
    },
    "linux-linux-foundations-find-14-debug": {
      concept: "find",
      prompt: "이 find 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "walk filesystem trees is the key move for find. find locates files by name, type, time, size, or predicates."
    },

    "linux-linux-foundations-man-pages-15-pick": {
      concept: "man 페이지",
      prompt: "man 페이지에 대한 최선의 답을 고르시오.",
      hint: "공식 명령어 레퍼런스",
      explanation: "authoritative command reference is the key move for man pages. Manual pages document commands, syscalls, config files, and conventions."
    },
    "linux-linux-foundations-man-pages-15-reverse": {
      concept: "man 페이지",
      prompt: "다음 설명이 가리키는 개념은? authoritative command reference",
      hint: "Manual pages document commands, syscalls, config files, and conventions.",
      explanation: "man pages: Manual pages document commands, syscalls, config files, and conventions."
    },
    "linux-linux-foundations-man-pages-15-input": {
      concept: "man 페이지",
      prompt: "man 페이지의 핵심 답을 입력하시오.",
      hint: "공식 명령어 레퍼런스",
      explanation: "authoritative command reference is the key move for man pages. Manual pages document commands, syscalls, config files, and conventions."
    },
    "linux-linux-foundations-man-pages-15-debug": {
      concept: "man 페이지",
      prompt: "이 man 페이지 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "authoritative command reference is the key move for man pages. Manual pages document commands, syscalls, config files, and conventions."
    },

    "linux-linux-foundations-permissions-basics-16-pick": {
      concept: "권한 기초",
      prompt: "권한 기초에 대한 최선의 답을 고르시오.",
      hint: "읽기/쓰기/실행 비트",
      explanation: "read write execute bits is the key move for permissions basics. Permission bits control access for owner, group, and others."
    },
    "linux-linux-foundations-permissions-basics-16-reverse": {
      concept: "권한 기초",
      prompt: "다음 설명이 가리키는 개념은? read write execute bits",
      hint: "Permission bits control access for owner, group, and others.",
      explanation: "permissions basics: Permission bits control access for owner, group, and others."
    },
    "linux-linux-foundations-permissions-basics-16-input": {
      concept: "권한 기초",
      prompt: "권한 기초의 핵심 답을 입력하시오.",
      hint: "읽기/쓰기/실행 비트",
      explanation: "read write execute bits is the key move for permissions basics. Permission bits control access for owner, group, and others."
    },
    "linux-linux-foundations-permissions-basics-16-debug": {
      concept: "권한 기초",
      prompt: "이 권한 기초 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "read write execute bits is the key move for permissions basics. Permission bits control access for owner, group, and others."
    },

    "linux-linux-foundations-sudo-17-pick": {
      concept: "sudo",
      prompt: "sudo에 대한 최선의 답을 고르시오.",
      hint: "위임된 권한으로 실행",
      explanation: "run with delegated privilege is the key move for sudo. sudo should be used for specific administrative actions."
    },
    "linux-linux-foundations-sudo-17-reverse": {
      concept: "sudo",
      prompt: "다음 설명이 가리키는 개념은? run with delegated privilege",
      hint: "sudo should be used for specific administrative actions.",
      explanation: "sudo: sudo should be used for specific administrative actions."
    },
    "linux-linux-foundations-sudo-17-input": {
      concept: "sudo",
      prompt: "sudo의 핵심 답을 입력하시오.",
      hint: "위임된 권한으로 실행",
      explanation: "run with delegated privilege is the key move for sudo. sudo should be used for specific administrative actions."
    },
    "linux-linux-foundations-sudo-17-debug": {
      concept: "sudo",
      prompt: "이 sudo 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "run with delegated privilege is the key move for sudo. sudo should be used for specific administrative actions."
    },

    "linux-linux-foundations-exit-status-18-pick": {
      concept: "종료 상태",
      prompt: "종료 상태에 대한 최선의 답을 고르시오.",
      hint: "0은 성공, 0이 아니면 실패",
      explanation: "0 success nonzero failure is the key move for exit status. Shell automation depends on command exit codes."
    },
    "linux-linux-foundations-exit-status-18-reverse": {
      concept: "종료 상태",
      prompt: "다음 설명이 가리키는 개념은? 0 success nonzero failure",
      hint: "Shell automation depends on command exit codes.",
      explanation: "exit status: Shell automation depends on command exit codes."
    },
    "linux-linux-foundations-exit-status-18-input": {
      concept: "종료 상태",
      prompt: "종료 상태의 핵심 답을 입력하시오.",
      hint: "0은 성공, 0이 아니면 실패",
      explanation: "0 success nonzero failure is the key move for exit status. Shell automation depends on command exit codes."
    },
    "linux-linux-foundations-exit-status-18-debug": {
      concept: "종료 상태",
      prompt: "이 종료 상태 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "0 success nonzero failure is the key move for exit status. Shell automation depends on command exit codes."
    },

    // ── linux-admin ────────────────────────────────────────────────────

    "linux-linux-admin-users-and-groups-1-pick": {
      concept: "사용자와 그룹",
      prompt: "사용자와 그룹에 대한 최선의 답을 고르시오.",
      hint: "신원과 멤버십",
      explanation: "identity and membership is the key move for users and groups. User and group IDs drive ownership and access control."
    },
    "linux-linux-admin-users-and-groups-1-reverse": {
      concept: "사용자와 그룹",
      prompt: "다음 설명이 가리키는 개념은? identity and membership",
      hint: "User and group IDs drive ownership and access control.",
      explanation: "users and groups: User and group IDs drive ownership and access control."
    },
    "linux-linux-admin-users-and-groups-1-input": {
      concept: "사용자와 그룹",
      prompt: "사용자와 그룹의 핵심 답을 입력하시오.",
      hint: "신원과 멤버십",
      explanation: "identity and membership is the key move for users and groups. User and group IDs drive ownership and access control."
    },
    "linux-linux-admin-users-and-groups-1-debug": {
      concept: "사용자와 그룹",
      prompt: "이 사용자와 그룹 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "identity and membership is the key move for users and groups. User and group IDs drive ownership and access control."
    },

    "linux-linux-admin-chmod-2-pick": {
      concept: "chmod",
      prompt: "chmod에 대한 최선의 답을 고르시오.",
      hint: "권한 비트 변경",
      explanation: "change permission bits is the key move for chmod. chmod updates read, write, and execute permissions."
    },
    "linux-linux-admin-chmod-2-reverse": {
      concept: "chmod",
      prompt: "다음 설명이 가리키는 개념은? change permission bits",
      hint: "chmod updates read, write, and execute permissions.",
      explanation: "chmod: chmod updates read, write, and execute permissions."
    },
    "linux-linux-admin-chmod-2-input": {
      concept: "chmod",
      prompt: "chmod의 핵심 답을 입력하시오.",
      hint: "권한 비트 변경",
      explanation: "change permission bits is the key move for chmod. chmod updates read, write, and execute permissions."
    },
    "linux-linux-admin-chmod-2-debug": {
      concept: "chmod",
      prompt: "이 chmod 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "change permission bits is the key move for chmod. chmod updates read, write, and execute permissions."
    },

    "linux-linux-admin-chown-3-pick": {
      concept: "chown",
      prompt: "chown에 대한 최선의 답을 고르시오.",
      hint: "소유자 또는 그룹 변경",
      explanation: "change owner or group is the key move for chown. Ownership affects who can access or modify files."
    },
    "linux-linux-admin-chown-3-reverse": {
      concept: "chown",
      prompt: "다음 설명이 가리키는 개념은? change owner or group",
      hint: "Ownership affects who can access or modify files.",
      explanation: "chown: Ownership affects who can access or modify files."
    },
    "linux-linux-admin-chown-3-input": {
      concept: "chown",
      prompt: "chown의 핵심 답을 입력하시오.",
      hint: "소유자 또는 그룹 변경",
      explanation: "change owner or group is the key move for chown. Ownership affects who can access or modify files."
    },
    "linux-linux-admin-chown-3-debug": {
      concept: "chown",
      prompt: "이 chown 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "change owner or group is the key move for chown. Ownership affects who can access or modify files."
    },

    "linux-linux-admin-process-model-4-pick": {
      concept: "프로세스 모델",
      prompt: "프로세스 모델에 대한 최선의 답을 고르시오.",
      hint: "실행 중인 프로그램 인스턴스",
      explanation: "running program instance is the key move for process model. Processes have IDs, parents, environment, resources, and states."
    },
    "linux-linux-admin-process-model-4-reverse": {
      concept: "프로세스 모델",
      prompt: "다음 설명이 가리키는 개념은? running program instance",
      hint: "Processes have IDs, parents, environment, resources, and states.",
      explanation: "process model: Processes have IDs, parents, environment, resources, and states."
    },
    "linux-linux-admin-process-model-4-input": {
      concept: "프로세스 모델",
      prompt: "프로세스 모델의 핵심 답을 입력하시오.",
      hint: "실행 중인 프로그램 인스턴스",
      explanation: "running program instance is the key move for process model. Processes have IDs, parents, environment, resources, and states."
    },
    "linux-linux-admin-process-model-4-debug": {
      concept: "프로세스 모델",
      prompt: "이 프로세스 모델 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "running program instance is the key move for process model. Processes have IDs, parents, environment, resources, and states."
    },

    "linux-linux-admin-ps-and-top-5-pick": {
      concept: "ps와 top",
      prompt: "ps와 top에 대한 최선의 답을 고르시오.",
      hint: "프로세스 확인",
      explanation: "inspect processes is the key move for ps and top. Process tools show CPU, memory, status, and command lines."
    },
    "linux-linux-admin-ps-and-top-5-reverse": {
      concept: "ps와 top",
      prompt: "다음 설명이 가리키는 개념은? inspect processes",
      hint: "Process tools show CPU, memory, status, and command lines.",
      explanation: "ps and top: Process tools show CPU, memory, status, and command lines."
    },
    "linux-linux-admin-ps-and-top-5-input": {
      concept: "ps와 top",
      prompt: "ps와 top의 핵심 답을 입력하시오.",
      hint: "프로세스 확인",
      explanation: "inspect processes is the key move for ps and top. Process tools show CPU, memory, status, and command lines."
    },
    "linux-linux-admin-ps-and-top-5-debug": {
      concept: "ps와 top",
      prompt: "이 ps와 top 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "inspect processes is the key move for ps and top. Process tools show CPU, memory, status, and command lines."
    },

    "linux-linux-admin-signals-6-pick": {
      concept: "시그널",
      prompt: "시그널에 대한 최선의 답을 고르시오.",
      hint: "비동기 프로세스 알림",
      explanation: "asynchronous process notifications is the key move for signals. Signals request termination, reload, stop, or custom handling."
    },
    "linux-linux-admin-signals-6-reverse": {
      concept: "시그널",
      prompt: "다음 설명이 가리키는 개념은? asynchronous process notifications",
      hint: "Signals request termination, reload, stop, or custom handling.",
      explanation: "signals: Signals request termination, reload, stop, or custom handling."
    },
    "linux-linux-admin-signals-6-input": {
      concept: "시그널",
      prompt: "시그널의 핵심 답을 입력하시오.",
      hint: "비동기 프로세스 알림",
      explanation: "asynchronous process notifications is the key move for signals. Signals request termination, reload, stop, or custom handling."
    },
    "linux-linux-admin-signals-6-debug": {
      concept: "시그널",
      prompt: "이 시그널 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "asynchronous process notifications is the key move for signals. Signals request termination, reload, stop, or custom handling."
    },

    "linux-linux-admin-systemd-units-7-pick": {
      concept: "systemd 유닛",
      prompt: "systemd 유닛에 대한 최선의 답을 고르시오.",
      hint: "관리되는 서비스 정의",
      explanation: "managed service definitions is the key move for systemd units. Units define services, timers, mounts, sockets, and targets."
    },
    "linux-linux-admin-systemd-units-7-reverse": {
      concept: "systemd 유닛",
      prompt: "다음 설명이 가리키는 개념은? managed service definitions",
      hint: "Units define services, timers, mounts, sockets, and targets.",
      explanation: "systemd units: Units define services, timers, mounts, sockets, and targets."
    },
    "linux-linux-admin-systemd-units-7-input": {
      concept: "systemd 유닛",
      prompt: "systemd 유닛의 핵심 답을 입력하시오.",
      hint: "관리되는 서비스 정의",
      explanation: "managed service definitions is the key move for systemd units. Units define services, timers, mounts, sockets, and targets."
    },
    "linux-linux-admin-systemd-units-7-debug": {
      concept: "systemd 유닛",
      prompt: "이 systemd 유닛 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "managed service definitions is the key move for systemd units. Units define services, timers, mounts, sockets, and targets."
    },

    "linux-linux-admin-journalctl-8-pick": {
      concept: "journalctl",
      prompt: "journalctl에 대한 최선의 답을 고르시오.",
      hint: "시스템 로그 조회",
      explanation: "query system logs is the key move for journalctl. The journal stores structured logs for services and the system."
    },
    "linux-linux-admin-journalctl-8-reverse": {
      concept: "journalctl",
      prompt: "다음 설명이 가리키는 개념은? query system logs",
      hint: "The journal stores structured logs for services and the system.",
      explanation: "journalctl: The journal stores structured logs for services and the system."
    },
    "linux-linux-admin-journalctl-8-input": {
      concept: "journalctl",
      prompt: "journalctl의 핵심 답을 입력하시오.",
      hint: "시스템 로그 조회",
      explanation: "query system logs is the key move for journalctl. The journal stores structured logs for services and the system."
    },
    "linux-linux-admin-journalctl-8-debug": {
      concept: "journalctl",
      prompt: "이 journalctl 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "query system logs is the key move for journalctl. The journal stores structured logs for services and the system."
    },

    "linux-linux-admin-services-9-pick": {
      concept: "서비스",
      prompt: "서비스에 대한 최선의 답을 고르시오.",
      hint: "장기 실행 관리 프로세스",
      explanation: "long-running managed processes is the key move for services. Services should restart, log, and report status predictably."
    },
    "linux-linux-admin-services-9-reverse": {
      concept: "서비스",
      prompt: "다음 설명이 가리키는 개념은? long-running managed processes",
      hint: "Services should restart, log, and report status predictably.",
      explanation: "services: Services should restart, log, and report status predictably."
    },
    "linux-linux-admin-services-9-input": {
      concept: "서비스",
      prompt: "서비스의 핵심 답을 입력하시오.",
      hint: "장기 실행 관리 프로세스",
      explanation: "long-running managed processes is the key move for services. Services should restart, log, and report status predictably."
    },
    "linux-linux-admin-services-9-debug": {
      concept: "서비스",
      prompt: "이 서비스 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "long-running managed processes is the key move for services. Services should restart, log, and report status predictably."
    },

    "linux-linux-admin-systemd-timers-10-pick": {
      concept: "systemd 타이머",
      prompt: "systemd 타이머에 대한 최선의 답을 고르시오.",
      hint: "예약된 유닛 활성화",
      explanation: "scheduled unit activation is the key move for systemd timers. Timers can replace cron with dependency and logging integration."
    },
    "linux-linux-admin-systemd-timers-10-reverse": {
      concept: "systemd 타이머",
      prompt: "다음 설명이 가리키는 개념은? scheduled unit activation",
      hint: "Timers can replace cron with dependency and logging integration.",
      explanation: "systemd timers: Timers can replace cron with dependency and logging integration."
    },
    "linux-linux-admin-systemd-timers-10-input": {
      concept: "systemd 타이머",
      prompt: "systemd 타이머의 핵심 답을 입력하시오.",
      hint: "예약된 유닛 활성화",
      explanation: "scheduled unit activation is the key move for systemd timers. Timers can replace cron with dependency and logging integration."
    },
    "linux-linux-admin-systemd-timers-10-debug": {
      concept: "systemd 타이머",
      prompt: "이 systemd 타이머 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "scheduled unit activation is the key move for systemd timers. Timers can replace cron with dependency and logging integration."
    },

    "linux-linux-admin-packages-11-pick": {
      concept: "패키지",
      prompt: "패키지에 대한 최선의 답을 고르시오.",
      hint: "설치된 소프트웨어 단위",
      explanation: "installed software units is the key move for packages. Package managers install, remove, update, and verify software."
    },
    "linux-linux-admin-packages-11-reverse": {
      concept: "패키지",
      prompt: "다음 설명이 가리키는 개념은? installed software units",
      hint: "Package managers install, remove, update, and verify software.",
      explanation: "packages: Package managers install, remove, update, and verify software."
    },
    "linux-linux-admin-packages-11-input": {
      concept: "패키지",
      prompt: "패키지의 핵심 답을 입력하시오.",
      hint: "설치된 소프트웨어 단위",
      explanation: "installed software units is the key move for packages. Package managers install, remove, update, and verify software."
    },
    "linux-linux-admin-packages-11-debug": {
      concept: "패키지",
      prompt: "이 패키지 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "installed software units is the key move for packages. Package managers install, remove, update, and verify software."
    },

    "linux-linux-admin-apt-and-dnf-basics-12-pick": {
      concept: "apt와 dnf 기초",
      prompt: "apt와 dnf 기초에 대한 최선의 답을 고르시오.",
      hint: "배포판 패키지 도구",
      explanation: "distribution package tools is the key move for apt and dnf basics. Use the package manager matching the distribution family."
    },
    "linux-linux-admin-apt-and-dnf-basics-12-reverse": {
      concept: "apt와 dnf 기초",
      prompt: "다음 설명이 가리키는 개념은? distribution package tools",
      hint: "Use the package manager matching the distribution family.",
      explanation: "apt and dnf basics: Use the package manager matching the distribution family."
    },
    "linux-linux-admin-apt-and-dnf-basics-12-input": {
      concept: "apt와 dnf 기초",
      prompt: "apt와 dnf 기초의 핵심 답을 입력하시오.",
      hint: "배포판 패키지 도구",
      explanation: "distribution package tools is the key move for apt and dnf basics. Use the package manager matching the distribution family."
    },
    "linux-linux-admin-apt-and-dnf-basics-12-debug": {
      concept: "apt와 dnf 기초",
      prompt: "이 apt와 dnf 기초 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "distribution package tools is the key move for apt and dnf basics. Use the package manager matching the distribution family."
    },

    "linux-linux-admin-environment-variables-13-pick": {
      concept: "환경 변수",
      prompt: "환경 변수에 대한 최선의 답을 고르시오.",
      hint: "프로세스가 상속하는 키-값 쌍",
      explanation: "process inherited key values is the key move for environment variables. Environment values configure programs without changing code."
    },
    "linux-linux-admin-environment-variables-13-reverse": {
      concept: "환경 변수",
      prompt: "다음 설명이 가리키는 개념은? process inherited key values",
      hint: "Environment values configure programs without changing code.",
      explanation: "environment variables: Environment values configure programs without changing code."
    },
    "linux-linux-admin-environment-variables-13-input": {
      concept: "환경 변수",
      prompt: "환경 변수의 핵심 답을 입력하시오.",
      hint: "프로세스가 상속하는 키-값 쌍",
      explanation: "process inherited key values is the key move for environment variables. Environment values configure programs without changing code."
    },
    "linux-linux-admin-environment-variables-13-debug": {
      concept: "환경 변수",
      prompt: "이 환경 변수 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "process inherited key values is the key move for environment variables. Environment values configure programs without changing code."
    },

    "linux-linux-admin-ssh-14-pick": {
      concept: "SSH",
      prompt: "SSH에 대한 최선의 답을 고르시오.",
      hint: "보안 원격 로그인",
      explanation: "secure remote login is the key move for SSH. SSH provides encrypted shell access and file transfer."
    },
    "linux-linux-admin-ssh-14-reverse": {
      concept: "SSH",
      prompt: "다음 설명이 가리키는 개념은? secure remote login",
      hint: "SSH provides encrypted shell access and file transfer.",
      explanation: "SSH: SSH provides encrypted shell access and file transfer."
    },
    "linux-linux-admin-ssh-14-input": {
      concept: "SSH",
      prompt: "SSH의 핵심 답을 입력하시오.",
      hint: "보안 원격 로그인",
      explanation: "secure remote login is the key move for SSH. SSH provides encrypted shell access and file transfer."
    },
    "linux-linux-admin-ssh-14-debug": {
      concept: "SSH",
      prompt: "이 SSH 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "secure remote login is the key move for SSH. SSH provides encrypted shell access and file transfer."
    },

    "linux-linux-admin-tar-and-gzip-15-pick": {
      concept: "tar와 gzip",
      prompt: "tar와 gzip에 대한 최선의 답을 고르시오.",
      hint: "아카이브 및 압축",
      explanation: "archive and compress is the key move for tar and gzip. tar groups files; gzip compresses a stream or file."
    },
    "linux-linux-admin-tar-and-gzip-15-reverse": {
      concept: "tar와 gzip",
      prompt: "다음 설명이 가리키는 개념은? archive and compress",
      hint: "tar groups files; gzip compresses a stream or file.",
      explanation: "tar and gzip: tar groups files; gzip compresses a stream or file."
    },
    "linux-linux-admin-tar-and-gzip-15-input": {
      concept: "tar와 gzip",
      prompt: "tar와 gzip의 핵심 답을 입력하시오.",
      hint: "아카이브 및 압축",
      explanation: "archive and compress is the key move for tar and gzip. tar groups files; gzip compresses a stream or file."
    },
    "linux-linux-admin-tar-and-gzip-15-debug": {
      concept: "tar와 gzip",
      prompt: "이 tar와 gzip 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "archive and compress is the key move for tar and gzip. tar groups files; gzip compresses a stream or file."
    },

    "linux-linux-admin-df-and-du-16-pick": {
      concept: "df와 du",
      prompt: "df와 du에 대한 최선의 답을 고르시오.",
      hint: "디스크 용량 및 사용량",
      explanation: "disk capacity and usage is the key move for df and du. df shows filesystem capacity; du totals file tree usage."
    },
    "linux-linux-admin-df-and-du-16-reverse": {
      concept: "df와 du",
      prompt: "다음 설명이 가리키는 개념은? disk capacity and usage",
      hint: "df shows filesystem capacity; du totals file tree usage.",
      explanation: "df and du: df shows filesystem capacity; du totals file tree usage."
    },
    "linux-linux-admin-df-and-du-16-input": {
      concept: "df와 du",
      prompt: "df와 du의 핵심 답을 입력하시오.",
      hint: "디스크 용량 및 사용량",
      explanation: "disk capacity and usage is the key move for df and du. df shows filesystem capacity; du totals file tree usage."
    },
    "linux-linux-admin-df-and-du-16-debug": {
      concept: "df와 du",
      prompt: "이 df와 du 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "disk capacity and usage is the key move for df and du. df shows filesystem capacity; du totals file tree usage."
    },

    "linux-linux-admin-mounts-and-fstab-17-pick": {
      concept: "마운트와 fstab",
      prompt: "마운트와 fstab에 대한 최선의 답을 고르시오.",
      hint: "파일시스템 연결",
      explanation: "attach filesystems is the key move for mounts and fstab. fstab configures filesystems mounted at boot."
    },
    "linux-linux-admin-mounts-and-fstab-17-reverse": {
      concept: "마운트와 fstab",
      prompt: "다음 설명이 가리키는 개념은? attach filesystems",
      hint: "fstab configures filesystems mounted at boot.",
      explanation: "mounts and fstab: fstab configures filesystems mounted at boot."
    },
    "linux-linux-admin-mounts-and-fstab-17-input": {
      concept: "마운트와 fstab",
      prompt: "마운트와 fstab의 핵심 답을 입력하시오.",
      hint: "파일시스템 연결",
      explanation: "attach filesystems is the key move for mounts and fstab. fstab configures filesystems mounted at boot."
    },
    "linux-linux-admin-mounts-and-fstab-17-debug": {
      concept: "마운트와 fstab",
      prompt: "이 마운트와 fstab 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "attach filesystems is the key move for mounts and fstab. fstab configures filesystems mounted at boot."
    },

    "linux-linux-admin-log-rotation-18-pick": {
      concept: "로그 로테이션",
      prompt: "로그 로테이션에 대한 최선의 답을 고르시오.",
      hint: "로그 파일 증가 제한",
      explanation: "bound log file growth is the key move for log rotation. Rotation keeps logs useful without filling disks."
    },
    "linux-linux-admin-log-rotation-18-reverse": {
      concept: "로그 로테이션",
      prompt: "다음 설명이 가리키는 개념은? bound log file growth",
      hint: "Rotation keeps logs useful without filling disks.",
      explanation: "log rotation: Rotation keeps logs useful without filling disks."
    },
    "linux-linux-admin-log-rotation-18-input": {
      concept: "로그 로테이션",
      prompt: "로그 로테이션의 핵심 답을 입력하시오.",
      hint: "로그 파일 증가 제한",
      explanation: "bound log file growth is the key move for log rotation. Rotation keeps logs useful without filling disks."
    },
    "linux-linux-admin-log-rotation-18-debug": {
      concept: "로그 로테이션",
      prompt: "이 로그 로테이션 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "bound log file growth is the key move for log rotation. Rotation keeps logs useful without filling disks."
    },

    // ── linux-network-security ─────────────────────────────────────────

    "linux-linux-network-security-ip-addr-1-pick": {
      concept: "ip addr",
      prompt: "ip addr에 대한 최선의 답을 고르시오.",
      hint: "네트워크 주소 확인",
      explanation: "inspect network addresses is the key move for ip addr. The ip tool shows addresses, links, routes, and neighbors."
    },
    "linux-linux-network-security-ip-addr-1-reverse": {
      concept: "ip addr",
      prompt: "다음 설명이 가리키는 개념은? inspect network addresses",
      hint: "The ip tool shows addresses, links, routes, and neighbors.",
      explanation: "ip addr: The ip tool shows addresses, links, routes, and neighbors."
    },
    "linux-linux-network-security-ip-addr-1-input": {
      concept: "ip addr",
      prompt: "ip addr의 핵심 답을 입력하시오.",
      hint: "네트워크 주소 확인",
      explanation: "inspect network addresses is the key move for ip addr. The ip tool shows addresses, links, routes, and neighbors."
    },
    "linux-linux-network-security-ip-addr-1-debug": {
      concept: "ip addr",
      prompt: "이 ip addr 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "inspect network addresses is the key move for ip addr. The ip tool shows addresses, links, routes, and neighbors."
    },

    "linux-linux-network-security-ip-route-2-pick": {
      concept: "ip route",
      prompt: "ip route에 대한 최선의 답을 고르시오.",
      hint: "라우팅 테이블 확인",
      explanation: "inspect routing table is the key move for ip route. Routes decide where packets go next."
    },
    "linux-linux-network-security-ip-route-2-reverse": {
      concept: "ip route",
      prompt: "다음 설명이 가리키는 개념은? inspect routing table",
      hint: "Routes decide where packets go next.",
      explanation: "ip route: Routes decide where packets go next."
    },
    "linux-linux-network-security-ip-route-2-input": {
      concept: "ip route",
      prompt: "ip route의 핵심 답을 입력하시오.",
      hint: "라우팅 테이블 확인",
      explanation: "inspect routing table is the key move for ip route. Routes decide where packets go next."
    },
    "linux-linux-network-security-ip-route-2-debug": {
      concept: "ip route",
      prompt: "이 ip route 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "inspect routing table is the key move for ip route. Routes decide where packets go next."
    },

    "linux-linux-network-security-dns-resolver-3-pick": {
      concept: "DNS 리졸버",
      prompt: "DNS 리졸버에 대한 최선의 답을 고르시오.",
      hint: "이름을 주소로 변환",
      explanation: "translate names to addresses is the key move for DNS resolver. Resolver configuration affects service discovery and connectivity."
    },
    "linux-linux-network-security-dns-resolver-3-reverse": {
      concept: "DNS 리졸버",
      prompt: "다음 설명이 가리키는 개념은? translate names to addresses",
      hint: "Resolver configuration affects service discovery and connectivity.",
      explanation: "DNS resolver: Resolver configuration affects service discovery and connectivity."
    },
    "linux-linux-network-security-dns-resolver-3-input": {
      concept: "DNS 리졸버",
      prompt: "DNS 리졸버의 핵심 답을 입력하시오.",
      hint: "이름을 주소로 변환",
      explanation: "translate names to addresses is the key move for DNS resolver. Resolver configuration affects service discovery and connectivity."
    },
    "linux-linux-network-security-dns-resolver-3-debug": {
      concept: "DNS 리졸버",
      prompt: "이 DNS 리졸버 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "translate names to addresses is the key move for DNS resolver. Resolver configuration affects service discovery and connectivity."
    },

    "linux-linux-network-security-curl-4-pick": {
      concept: "curl",
      prompt: "curl에 대한 최선의 답을 고르시오.",
      hint: "HTTP 및 엔드포인트 테스트",
      explanation: "test HTTP and endpoints is the key move for curl. curl is a direct way to inspect request and response behavior."
    },
    "linux-linux-network-security-curl-4-reverse": {
      concept: "curl",
      prompt: "다음 설명이 가리키는 개념은? test HTTP and endpoints",
      hint: "curl is a direct way to inspect request and response behavior.",
      explanation: "curl: curl is a direct way to inspect request and response behavior."
    },
    "linux-linux-network-security-curl-4-input": {
      concept: "curl",
      prompt: "curl의 핵심 답을 입력하시오.",
      hint: "HTTP 및 엔드포인트 테스트",
      explanation: "test HTTP and endpoints is the key move for curl. curl is a direct way to inspect request and response behavior."
    },
    "linux-linux-network-security-curl-4-debug": {
      concept: "curl",
      prompt: "이 curl 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "test HTTP and endpoints is the key move for curl. curl is a direct way to inspect request and response behavior."
    },

    "linux-linux-network-security-ss-5-pick": {
      concept: "ss",
      prompt: "ss에 대한 최선의 답을 고르시오.",
      hint: "소켓 확인",
      explanation: "inspect sockets is the key move for ss. ss shows listening ports and active connections."
    },
    "linux-linux-network-security-ss-5-reverse": {
      concept: "ss",
      prompt: "다음 설명이 가리키는 개념은? inspect sockets",
      hint: "ss shows listening ports and active connections.",
      explanation: "ss: ss shows listening ports and active connections."
    },
    "linux-linux-network-security-ss-5-input": {
      concept: "ss",
      prompt: "ss의 핵심 답을 입력하시오.",
      hint: "소켓 확인",
      explanation: "inspect sockets is the key move for ss. ss shows listening ports and active connections."
    },
    "linux-linux-network-security-ss-5-debug": {
      concept: "ss",
      prompt: "이 ss 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "inspect sockets is the key move for ss. ss shows listening ports and active connections."
    },

    "linux-linux-network-security-nftables-6-pick": {
      concept: "nftables",
      prompt: "nftables에 대한 최선의 답을 고르시오.",
      hint: "패킷 필터링 프레임워크",
      explanation: "packet filtering framework is the key move for nftables. nftables is the modern Linux firewall subsystem."
    },
    "linux-linux-network-security-nftables-6-reverse": {
      concept: "nftables",
      prompt: "다음 설명이 가리키는 개념은? packet filtering framework",
      hint: "nftables is the modern Linux firewall subsystem.",
      explanation: "nftables: nftables is the modern Linux firewall subsystem."
    },
    "linux-linux-network-security-nftables-6-input": {
      concept: "nftables",
      prompt: "nftables의 핵심 답을 입력하시오.",
      hint: "패킷 필터링 프레임워크",
      explanation: "packet filtering framework is the key move for nftables. nftables is the modern Linux firewall subsystem."
    },
    "linux-linux-network-security-nftables-6-debug": {
      concept: "nftables",
      prompt: "이 nftables 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "packet filtering framework is the key move for nftables. nftables is the modern Linux firewall subsystem."
    },

    "linux-linux-network-security-ufw-7-pick": {
      concept: "ufw",
      prompt: "ufw에 대한 최선의 답을 고르시오.",
      hint: "친숙한 방화벽 프론트엔드",
      explanation: "friendly firewall frontend is the key move for ufw. ufw simplifies common firewall rules on supported distributions."
    },
    "linux-linux-network-security-ufw-7-reverse": {
      concept: "ufw",
      prompt: "다음 설명이 가리키는 개념은? friendly firewall frontend",
      hint: "ufw simplifies common firewall rules on supported distributions.",
      explanation: "ufw: ufw simplifies common firewall rules on supported distributions."
    },
    "linux-linux-network-security-ufw-7-input": {
      concept: "ufw",
      prompt: "ufw의 핵심 답을 입력하시오.",
      hint: "친숙한 방화벽 프론트엔드",
      explanation: "friendly firewall frontend is the key move for ufw. ufw simplifies common firewall rules on supported distributions."
    },
    "linux-linux-network-security-ufw-7-debug": {
      concept: "ufw",
      prompt: "이 ufw 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "friendly firewall frontend is the key move for ufw. ufw simplifies common firewall rules on supported distributions."
    },

    "linux-linux-network-security-selinux-8-pick": {
      concept: "SELinux",
      prompt: "SELinux에 대한 최선의 답을 고르시오.",
      hint: "강제 접근 제어",
      explanation: "mandatory access control is the key move for SELinux. SELinux confines processes beyond Unix permission bits."
    },
    "linux-linux-network-security-selinux-8-reverse": {
      concept: "SELinux",
      prompt: "다음 설명이 가리키는 개념은? mandatory access control",
      hint: "SELinux confines processes beyond Unix permission bits.",
      explanation: "SELinux: SELinux confines processes beyond Unix permission bits."
    },
    "linux-linux-network-security-selinux-8-input": {
      concept: "SELinux",
      prompt: "SELinux의 핵심 답을 입력하시오.",
      hint: "강제 접근 제어",
      explanation: "mandatory access control is the key move for SELinux. SELinux confines processes beyond Unix permission bits."
    },
    "linux-linux-network-security-selinux-8-debug": {
      concept: "SELinux",
      prompt: "이 SELinux 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "mandatory access control is the key move for SELinux. SELinux confines processes beyond Unix permission bits."
    },

    "linux-linux-network-security-apparmor-9-pick": {
      concept: "AppArmor",
      prompt: "AppArmor에 대한 최선의 답을 고르시오.",
      hint: "프로파일 기반 격리",
      explanation: "profile-based confinement is the key move for AppArmor. AppArmor restricts program file and capability access."
    },
    "linux-linux-network-security-apparmor-9-reverse": {
      concept: "AppArmor",
      prompt: "다음 설명이 가리키는 개념은? profile-based confinement",
      hint: "AppArmor restricts program file and capability access.",
      explanation: "AppArmor: AppArmor restricts program file and capability access."
    },
    "linux-linux-network-security-apparmor-9-input": {
      concept: "AppArmor",
      prompt: "AppArmor의 핵심 답을 입력하시오.",
      hint: "프로파일 기반 격리",
      explanation: "profile-based confinement is the key move for AppArmor. AppArmor restricts program file and capability access."
    },
    "linux-linux-network-security-apparmor-9-debug": {
      concept: "AppArmor",
      prompt: "이 AppArmor 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "profile-based confinement is the key move for AppArmor. AppArmor restricts program file and capability access."
    },

    "linux-linux-network-security-capabilities-10-pick": {
      concept: "캐퍼빌리티",
      prompt: "캐퍼빌리티에 대한 최선의 답을 고르시오.",
      hint: "루트 권한 분할",
      explanation: "split root privileges is the key move for capabilities. Capabilities grant narrow privileged operations."
    },
    "linux-linux-network-security-capabilities-10-reverse": {
      concept: "캐퍼빌리티",
      prompt: "다음 설명이 가리키는 개념은? split root privileges",
      hint: "Capabilities grant narrow privileged operations.",
      explanation: "capabilities: Capabilities grant narrow privileged operations."
    },
    "linux-linux-network-security-capabilities-10-input": {
      concept: "캐퍼빌리티",
      prompt: "캐퍼빌리티의 핵심 답을 입력하시오.",
      hint: "루트 권한 분할",
      explanation: "split root privileges is the key move for capabilities. Capabilities grant narrow privileged operations."
    },
    "linux-linux-network-security-capabilities-10-debug": {
      concept: "캐퍼빌리티",
      prompt: "이 캐퍼빌리티 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "split root privileges is the key move for capabilities. Capabilities grant narrow privileged operations."
    },

    "linux-linux-network-security-namespaces-11-pick": {
      concept: "네임스페이스",
      prompt: "네임스페이스에 대한 최선의 답을 고르시오.",
      hint: "프로세스 뷰 격리",
      explanation: "isolate process views is the key move for namespaces. Namespaces power containers by isolating PIDs, mounts, networks, and more."
    },
    "linux-linux-network-security-namespaces-11-reverse": {
      concept: "네임스페이스",
      prompt: "다음 설명이 가리키는 개념은? isolate process views",
      hint: "Namespaces power containers by isolating PIDs, mounts, networks, and more.",
      explanation: "namespaces: Namespaces power containers by isolating PIDs, mounts, networks, and more."
    },
    "linux-linux-network-security-namespaces-11-input": {
      concept: "네임스페이스",
      prompt: "네임스페이스의 핵심 답을 입력하시오.",
      hint: "프로세스 뷰 격리",
      explanation: "isolate process views is the key move for namespaces. Namespaces power containers by isolating PIDs, mounts, networks, and more."
    },
    "linux-linux-network-security-namespaces-11-debug": {
      concept: "네임스페이스",
      prompt: "이 네임스페이스 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "isolate process views is the key move for namespaces. Namespaces power containers by isolating PIDs, mounts, networks, and more."
    },

    "linux-linux-network-security-cgroups-v2-12-pick": {
      concept: "cgroups v2",
      prompt: "cgroups v2에 대한 최선의 답을 고르시오.",
      hint: "리소스 어카운팅 및 제어",
      explanation: "resource accounting and control is the key move for cgroups v2. cgroups limit and measure CPU, memory, and I/O usage."
    },
    "linux-linux-network-security-cgroups-v2-12-reverse": {
      concept: "cgroups v2",
      prompt: "다음 설명이 가리키는 개념은? resource accounting and control",
      hint: "cgroups limit and measure CPU, memory, and I/O usage.",
      explanation: "cgroups v2: cgroups limit and measure CPU, memory, and I/O usage."
    },
    "linux-linux-network-security-cgroups-v2-12-input": {
      concept: "cgroups v2",
      prompt: "cgroups v2의 핵심 답을 입력하시오.",
      hint: "리소스 어카운팅 및 제어",
      explanation: "resource accounting and control is the key move for cgroups v2. cgroups limit and measure CPU, memory, and I/O usage."
    },
    "linux-linux-network-security-cgroups-v2-12-debug": {
      concept: "cgroups v2",
      prompt: "이 cgroups v2 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "resource accounting and control is the key move for cgroups v2. cgroups limit and measure CPU, memory, and I/O usage."
    },

    "linux-linux-network-security-containers-13-pick": {
      concept: "컨테이너",
      prompt: "컨테이너에 대한 최선의 답을 고르시오.",
      hint: "격리된 유저스페이스 프로세스",
      explanation: "isolated userspace processes is the key move for containers. Containers combine namespaces, cgroups, images, and runtime policy."
    },
    "linux-linux-network-security-containers-13-reverse": {
      concept: "컨테이너",
      prompt: "다음 설명이 가리키는 개념은? isolated userspace processes",
      hint: "Containers combine namespaces, cgroups, images, and runtime policy.",
      explanation: "containers: Containers combine namespaces, cgroups, images, and runtime policy."
    },
    "linux-linux-network-security-containers-13-input": {
      concept: "컨테이너",
      prompt: "컨테이너의 핵심 답을 입력하시오.",
      hint: "격리된 유저스페이스 프로세스",
      explanation: "isolated userspace processes is the key move for containers. Containers combine namespaces, cgroups, images, and runtime policy."
    },
    "linux-linux-network-security-containers-13-debug": {
      concept: "컨테이너",
      prompt: "이 컨테이너 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "isolated userspace processes is the key move for containers. Containers combine namespaces, cgroups, images, and runtime policy."
    },

    "linux-linux-network-security-file-acls-14-pick": {
      concept: "파일 ACL",
      prompt: "파일 ACL에 대한 최선의 답을 고르시오.",
      hint: "세밀한 파일 권한",
      explanation: "fine-grained file permissions is the key move for file ACLs. ACLs extend owner/group/other permission bits."
    },
    "linux-linux-network-security-file-acls-14-reverse": {
      concept: "파일 ACL",
      prompt: "다음 설명이 가리키는 개념은? fine-grained file permissions",
      hint: "ACLs extend owner/group/other permission bits.",
      explanation: "file ACLs: ACLs extend owner/group/other permission bits."
    },
    "linux-linux-network-security-file-acls-14-input": {
      concept: "파일 ACL",
      prompt: "파일 ACL의 핵심 답을 입력하시오.",
      hint: "세밀한 파일 권한",
      explanation: "fine-grained file permissions is the key move for file ACLs. ACLs extend owner/group/other permission bits."
    },
    "linux-linux-network-security-file-acls-14-debug": {
      concept: "파일 ACL",
      prompt: "이 파일 ACL 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "fine-grained file permissions is the key move for file ACLs. ACLs extend owner/group/other permission bits."
    },

    "linux-linux-network-security-sudoers-15-pick": {
      concept: "sudoers",
      prompt: "sudoers에 대한 최선의 답을 고르시오.",
      hint: "위임된 관리 정책",
      explanation: "delegated admin policy is the key move for sudoers. sudoers defines who may run which commands as which user."
    },
    "linux-linux-network-security-sudoers-15-reverse": {
      concept: "sudoers",
      prompt: "다음 설명이 가리키는 개념은? delegated admin policy",
      hint: "sudoers defines who may run which commands as which user.",
      explanation: "sudoers: sudoers defines who may run which commands as which user."
    },
    "linux-linux-network-security-sudoers-15-input": {
      concept: "sudoers",
      prompt: "sudoers의 핵심 답을 입력하시오.",
      hint: "위임된 관리 정책",
      explanation: "delegated admin policy is the key move for sudoers. sudoers defines who may run which commands as which user."
    },
    "linux-linux-network-security-sudoers-15-debug": {
      concept: "sudoers",
      prompt: "이 sudoers 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "delegated admin policy is the key move for sudoers. sudoers defines who may run which commands as which user."
    },

    "linux-linux-network-security-ssh-hardening-16-pick": {
      concept: "SSH 강화",
      prompt: "SSH 강화에 대한 최선의 답을 고르시오.",
      hint: "원격 로그인 위험 감소",
      explanation: "reduce remote login risk is the key move for SSH hardening. Use keys, disable weak auth, and restrict privileged login."
    },
    "linux-linux-network-security-ssh-hardening-16-reverse": {
      concept: "SSH 강화",
      prompt: "다음 설명이 가리키는 개념은? reduce remote login risk",
      hint: "Use keys, disable weak auth, and restrict privileged login.",
      explanation: "SSH hardening: Use keys, disable weak auth, and restrict privileged login."
    },
    "linux-linux-network-security-ssh-hardening-16-input": {
      concept: "SSH 강화",
      prompt: "SSH 강화의 핵심 답을 입력하시오.",
      hint: "원격 로그인 위험 감소",
      explanation: "reduce remote login risk is the key move for SSH hardening. Use keys, disable weak auth, and restrict privileged login."
    },
    "linux-linux-network-security-ssh-hardening-16-debug": {
      concept: "SSH 강화",
      prompt: "이 SSH 강화 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "reduce remote login risk is the key move for SSH hardening. Use keys, disable weak auth, and restrict privileged login."
    },

    "linux-linux-network-security-audit-logs-17-pick": {
      concept: "감사 로그",
      prompt: "감사 로그에 대한 최선의 답을 고르시오.",
      hint: "보안 관련 이벤트 추적",
      explanation: "security-relevant event trail is the key move for audit logs. Audit records support investigation and compliance."
    },
    "linux-linux-network-security-audit-logs-17-reverse": {
      concept: "감사 로그",
      prompt: "다음 설명이 가리키는 개념은? security-relevant event trail",
      hint: "Audit records support investigation and compliance.",
      explanation: "audit logs: Audit records support investigation and compliance."
    },
    "linux-linux-network-security-audit-logs-17-input": {
      concept: "감사 로그",
      prompt: "감사 로그의 핵심 답을 입력하시오.",
      hint: "보안 관련 이벤트 추적",
      explanation: "security-relevant event trail is the key move for audit logs. Audit records support investigation and compliance."
    },
    "linux-linux-network-security-audit-logs-17-debug": {
      concept: "감사 로그",
      prompt: "이 감사 로그 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "security-relevant event trail is the key move for audit logs. Audit records support investigation and compliance."
    },

    "linux-linux-network-security-sysctl-tuning-18-pick": {
      concept: "sysctl 튜닝",
      prompt: "sysctl 튜닝에 대한 최선의 답을 고르시오.",
      hint: "런타임 커널 파라미터",
      explanation: "runtime kernel parameters is the key move for sysctl tuning. sysctl changes networking, memory, and kernel behavior settings."
    },
    "linux-linux-network-security-sysctl-tuning-18-reverse": {
      concept: "sysctl 튜닝",
      prompt: "다음 설명이 가리키는 개념은? runtime kernel parameters",
      hint: "sysctl changes networking, memory, and kernel behavior settings.",
      explanation: "sysctl tuning: sysctl changes networking, memory, and kernel behavior settings."
    },
    "linux-linux-network-security-sysctl-tuning-18-input": {
      concept: "sysctl 튜닝",
      prompt: "sysctl 튜닝의 핵심 답을 입력하시오.",
      hint: "런타임 커널 파라미터",
      explanation: "runtime kernel parameters is the key move for sysctl tuning. sysctl changes networking, memory, and kernel behavior settings."
    },
    "linux-linux-network-security-sysctl-tuning-18-debug": {
      concept: "sysctl 튜닝",
      prompt: "이 sysctl 튜닝 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "runtime kernel parameters is the key move for sysctl tuning. sysctl changes networking, memory, and kernel behavior settings."
    },

    // ── linux-expertise ────────────────────────────────────────────────

    "linux-linux-expertise-boot-process-1-pick": {
      concept: "부트 프로세스",
      prompt: "부트 프로세스에 대한 최선의 답을 고르시오.",
      hint: "펌웨어, 부트로더, 커널, init",
      explanation: "firmware bootloader kernel init is the key move for boot process. Boot diagnosis follows the startup chain in order."
    },
    "linux-linux-expertise-boot-process-1-reverse": {
      concept: "부트 프로세스",
      prompt: "다음 설명이 가리키는 개념은? firmware bootloader kernel init",
      hint: "Boot diagnosis follows the startup chain in order.",
      explanation: "boot process: Boot diagnosis follows the startup chain in order."
    },
    "linux-linux-expertise-boot-process-1-input": {
      concept: "부트 프로세스",
      prompt: "부트 프로세스의 핵심 답을 입력하시오.",
      hint: "펌웨어, 부트로더, 커널, init",
      explanation: "firmware bootloader kernel init is the key move for boot process. Boot diagnosis follows the startup chain in order."
    },
    "linux-linux-expertise-boot-process-1-debug": {
      concept: "부트 프로세스",
      prompt: "이 부트 프로세스 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "firmware bootloader kernel init is the key move for boot process. Boot diagnosis follows the startup chain in order."
    },

    "linux-linux-expertise-initramfs-2-pick": {
      concept: "initramfs",
      prompt: "initramfs에 대한 최선의 답을 고르시오.",
      hint: "초기 유저스페이스 이미지",
      explanation: "early userspace image is the key move for initramfs. initramfs loads drivers and mounts the real root filesystem."
    },
    "linux-linux-expertise-initramfs-2-reverse": {
      concept: "initramfs",
      prompt: "다음 설명이 가리키는 개념은? early userspace image",
      hint: "initramfs loads drivers and mounts the real root filesystem.",
      explanation: "initramfs: initramfs loads drivers and mounts the real root filesystem."
    },
    "linux-linux-expertise-initramfs-2-input": {
      concept: "initramfs",
      prompt: "initramfs의 핵심 답을 입력하시오.",
      hint: "초기 유저스페이스 이미지",
      explanation: "early userspace image is the key move for initramfs. initramfs loads drivers and mounts the real root filesystem."
    },
    "linux-linux-expertise-initramfs-2-debug": {
      concept: "initramfs",
      prompt: "이 initramfs 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "early userspace image is the key move for initramfs. initramfs loads drivers and mounts the real root filesystem."
    },

    "linux-linux-expertise-kernel-releases-3-pick": {
      concept: "커널 릴리스",
      prompt: "커널 릴리스에 대한 최선의 답을 고르시오.",
      hint: "업스트림 및 배포판 커널 추적",
      explanation: "track upstream and distribution kernels is the key move for kernel releases. Kernel version awareness guides feature and security decisions."
    },
    "linux-linux-expertise-kernel-releases-3-reverse": {
      concept: "커널 릴리스",
      prompt: "다음 설명이 가리키는 개념은? track upstream and distribution kernels",
      hint: "Kernel version awareness guides feature and security decisions.",
      explanation: "kernel releases: Kernel version awareness guides feature and security decisions."
    },
    "linux-linux-expertise-kernel-releases-3-input": {
      concept: "커널 릴리스",
      prompt: "커널 릴리스의 핵심 답을 입력하시오.",
      hint: "업스트림 및 배포판 커널 추적",
      explanation: "track upstream and distribution kernels is the key move for kernel releases. Kernel version awareness guides feature and security decisions."
    },
    "linux-linux-expertise-kernel-releases-3-debug": {
      concept: "커널 릴리스",
      prompt: "이 커널 릴리스 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "track upstream and distribution kernels is the key move for kernel releases. Kernel version awareness guides feature and security decisions."
    },

    "linux-linux-expertise-distribution-kernels-4-pick": {
      concept: "배포판 커널",
      prompt: "배포판 커널에 대한 최선의 답을 고르시오.",
      hint: "벤더 패치 커널 빌드",
      explanation: "vendor-patched kernel builds is the key move for distribution kernels. Distributions backport fixes and carry configuration differences."
    },
    "linux-linux-expertise-distribution-kernels-4-reverse": {
      concept: "배포판 커널",
      prompt: "다음 설명이 가리키는 개념은? vendor-patched kernel builds",
      hint: "Distributions backport fixes and carry configuration differences.",
      explanation: "distribution kernels: Distributions backport fixes and carry configuration differences."
    },
    "linux-linux-expertise-distribution-kernels-4-input": {
      concept: "배포판 커널",
      prompt: "배포판 커널의 핵심 답을 입력하시오.",
      hint: "벤더 패치 커널 빌드",
      explanation: "vendor-patched kernel builds is the key move for distribution kernels. Distributions backport fixes and carry configuration differences."
    },
    "linux-linux-expertise-distribution-kernels-4-debug": {
      concept: "배포판 커널",
      prompt: "이 배포판 커널 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "vendor-patched kernel builds is the key move for distribution kernels. Distributions backport fixes and carry configuration differences."
    },

    "linux-linux-expertise-kernel-module-basics-5-pick": {
      concept: "커널 모듈 기초",
      prompt: "커널 모듈 기초에 대한 최선의 답을 고르시오.",
      hint: "로드 가능한 커널 확장",
      explanation: "loadable kernel extension is the key move for kernel module basics. Modules add drivers or subsystems without rebuilding the kernel."
    },
    "linux-linux-expertise-kernel-module-basics-5-reverse": {
      concept: "커널 모듈 기초",
      prompt: "다음 설명이 가리키는 개념은? loadable kernel extension",
      hint: "Modules add drivers or subsystems without rebuilding the kernel.",
      explanation: "kernel module basics: Modules add drivers or subsystems without rebuilding the kernel."
    },
    "linux-linux-expertise-kernel-module-basics-5-input": {
      concept: "커널 모듈 기초",
      prompt: "커널 모듈 기초의 핵심 답을 입력하시오.",
      hint: "로드 가능한 커널 확장",
      explanation: "loadable kernel extension is the key move for kernel module basics. Modules add drivers or subsystems without rebuilding the kernel."
    },
    "linux-linux-expertise-kernel-module-basics-5-debug": {
      concept: "커널 모듈 기초",
      prompt: "이 커널 모듈 기초 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "loadable kernel extension is the key move for kernel module basics. Modules add drivers or subsystems without rebuilding the kernel."
    },

    "linux-linux-expertise-perf-6-pick": {
      concept: "perf",
      prompt: "perf에 대한 최선의 답을 고르시오.",
      hint: "CPU 및 커널 이벤트 프로파일링",
      explanation: "profile CPU and kernel events is the key move for perf. perf identifies hotspots across userspace and kernel code."
    },
    "linux-linux-expertise-perf-6-reverse": {
      concept: "perf",
      prompt: "다음 설명이 가리키는 개념은? profile CPU and kernel events",
      hint: "perf identifies hotspots across userspace and kernel code.",
      explanation: "perf: perf identifies hotspots across userspace and kernel code."
    },
    "linux-linux-expertise-perf-6-input": {
      concept: "perf",
      prompt: "perf의 핵심 답을 입력하시오.",
      hint: "CPU 및 커널 이벤트 프로파일링",
      explanation: "profile CPU and kernel events is the key move for perf. perf identifies hotspots across userspace and kernel code."
    },
    "linux-linux-expertise-perf-6-debug": {
      concept: "perf",
      prompt: "이 perf 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "profile CPU and kernel events is the key move for perf. perf identifies hotspots across userspace and kernel code."
    },

    "linux-linux-expertise-strace-7-pick": {
      concept: "strace",
      prompt: "strace에 대한 최선의 답을 고르시오.",
      hint: "시스템 콜 추적",
      explanation: "trace system calls is the key move for strace. strace shows how a process interacts with the kernel."
    },
    "linux-linux-expertise-strace-7-reverse": {
      concept: "strace",
      prompt: "다음 설명이 가리키는 개념은? trace system calls",
      hint: "strace shows how a process interacts with the kernel.",
      explanation: "strace: strace shows how a process interacts with the kernel."
    },
    "linux-linux-expertise-strace-7-input": {
      concept: "strace",
      prompt: "strace의 핵심 답을 입력하시오.",
      hint: "시스템 콜 추적",
      explanation: "trace system calls is the key move for strace. strace shows how a process interacts with the kernel."
    },
    "linux-linux-expertise-strace-7-debug": {
      concept: "strace",
      prompt: "이 strace 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "trace system calls is the key move for strace. strace shows how a process interacts with the kernel."
    },

    "linux-linux-expertise-ltrace-8-pick": {
      concept: "ltrace",
      prompt: "ltrace에 대한 최선의 답을 고르시오.",
      hint: "라이브러리 콜 추적",
      explanation: "trace library calls is the key move for ltrace. ltrace inspects dynamic library calls from a process."
    },
    "linux-linux-expertise-ltrace-8-reverse": {
      concept: "ltrace",
      prompt: "다음 설명이 가리키는 개념은? trace library calls",
      hint: "ltrace inspects dynamic library calls from a process.",
      explanation: "ltrace: ltrace inspects dynamic library calls from a process."
    },
    "linux-linux-expertise-ltrace-8-input": {
      concept: "ltrace",
      prompt: "ltrace의 핵심 답을 입력하시오.",
      hint: "라이브러리 콜 추적",
      explanation: "trace library calls is the key move for ltrace. ltrace inspects dynamic library calls from a process."
    },
    "linux-linux-expertise-ltrace-8-debug": {
      concept: "ltrace",
      prompt: "이 ltrace 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "trace library calls is the key move for ltrace. ltrace inspects dynamic library calls from a process."
    },

    "linux-linux-expertise-ebpf-observability-9-pick": {
      concept: "eBPF 관측 가능성",
      prompt: "eBPF 관측 가능성에 대한 최선의 답을 고르시오.",
      hint: "안전한 커널 계측",
      explanation: "safe kernel instrumentation is the key move for eBPF observability. eBPF can trace kernel and application behavior with low overhead."
    },
    "linux-linux-expertise-ebpf-observability-9-reverse": {
      concept: "eBPF 관측 가능성",
      prompt: "다음 설명이 가리키는 개념은? safe kernel instrumentation",
      hint: "eBPF can trace kernel and application behavior with low overhead.",
      explanation: "eBPF observability: eBPF can trace kernel and application behavior with low overhead."
    },
    "linux-linux-expertise-ebpf-observability-9-input": {
      concept: "eBPF 관측 가능성",
      prompt: "eBPF 관측 가능성의 핵심 답을 입력하시오.",
      hint: "안전한 커널 계측",
      explanation: "safe kernel instrumentation is the key move for eBPF observability. eBPF can trace kernel and application behavior with low overhead."
    },
    "linux-linux-expertise-ebpf-observability-9-debug": {
      concept: "eBPF 관측 가능성",
      prompt: "이 eBPF 관측 가능성 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "safe kernel instrumentation is the key move for eBPF observability. eBPF can trace kernel and application behavior with low overhead."
    },

    "linux-linux-expertise-i-o-scheduling-10-pick": {
      concept: "I/O 스케줄링",
      prompt: "I/O 스케줄링에 대한 최선의 답을 고르시오.",
      hint: "블록 디바이스 요청 처리 제어",
      explanation: "control block device request handling is the key move for I/O scheduling. Schedulers affect latency and throughput for storage workloads."
    },
    "linux-linux-expertise-i-o-scheduling-10-reverse": {
      concept: "I/O 스케줄링",
      prompt: "다음 설명이 가리키는 개념은? control block device request handling",
      hint: "Schedulers affect latency and throughput for storage workloads.",
      explanation: "I/O scheduling: Schedulers affect latency and throughput for storage workloads."
    },
    "linux-linux-expertise-i-o-scheduling-10-input": {
      concept: "I/O 스케줄링",
      prompt: "I/O 스케줄링의 핵심 답을 입력하시오.",
      hint: "블록 디바이스 요청 처리 제어",
      explanation: "control block device request handling is the key move for I/O scheduling. Schedulers affect latency and throughput for storage workloads."
    },
    "linux-linux-expertise-i-o-scheduling-10-debug": {
      concept: "I/O 스케줄링",
      prompt: "이 I/O 스케줄링 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "control block device request handling is the key move for I/O scheduling. Schedulers affect latency and throughput for storage workloads."
    },

    "linux-linux-expertise-filesystem-repair-11-pick": {
      concept: "파일시스템 복구",
      prompt: "파일시스템 복구에 대한 최선의 답을 고르시오.",
      hint: "fsck 및 복구 워크플로",
      explanation: "fsck and recovery workflow is the key move for filesystem repair. Filesystem repair should follow backups and unmount rules."
    },
    "linux-linux-expertise-filesystem-repair-11-reverse": {
      concept: "파일시스템 복구",
      prompt: "다음 설명이 가리키는 개념은? fsck and recovery workflow",
      hint: "Filesystem repair should follow backups and unmount rules.",
      explanation: "filesystem repair: Filesystem repair should follow backups and unmount rules."
    },
    "linux-linux-expertise-filesystem-repair-11-input": {
      concept: "파일시스템 복구",
      prompt: "파일시스템 복구의 핵심 답을 입력하시오.",
      hint: "fsck 및 복구 워크플로",
      explanation: "fsck and recovery workflow is the key move for filesystem repair. Filesystem repair should follow backups and unmount rules."
    },
    "linux-linux-expertise-filesystem-repair-11-debug": {
      concept: "파일시스템 복구",
      prompt: "이 파일시스템 복구 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "fsck and recovery workflow is the key move for filesystem repair. Filesystem repair should follow backups and unmount rules."
    },

    "linux-linux-expertise-raid-and-lvm-12-pick": {
      concept: "RAID와 LVM",
      prompt: "RAID와 LVM에 대한 최선의 답을 고르시오.",
      hint: "중복 및 유연한 스토리지",
      explanation: "redundant and flexible storage is the key move for RAID and LVM. RAID protects or speeds disks; LVM manages logical volumes."
    },
    "linux-linux-expertise-raid-and-lvm-12-reverse": {
      concept: "RAID와 LVM",
      prompt: "다음 설명이 가리키는 개념은? redundant and flexible storage",
      hint: "RAID protects or speeds disks; LVM manages logical volumes.",
      explanation: "RAID and LVM: RAID protects or speeds disks; LVM manages logical volumes."
    },
    "linux-linux-expertise-raid-and-lvm-12-input": {
      concept: "RAID와 LVM",
      prompt: "RAID와 LVM의 핵심 답을 입력하시오.",
      hint: "중복 및 유연한 스토리지",
      explanation: "redundant and flexible storage is the key move for RAID and LVM. RAID protects or speeds disks; LVM manages logical volumes."
    },
    "linux-linux-expertise-raid-and-lvm-12-debug": {
      concept: "RAID와 LVM",
      prompt: "이 RAID와 LVM 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "redundant and flexible storage is the key move for RAID and LVM. RAID protects or speeds disks; LVM manages logical volumes."
    },

    "linux-linux-expertise-disaster-recovery-13-pick": {
      concept: "재해 복구",
      prompt: "재해 복구에 대한 최선의 답을 고르시오.",
      hint: "검증된 서비스 상태 복원",
      explanation: "restore validated service state is the key move for disaster recovery. Recovery plans need tested backups and runbooks."
    },
    "linux-linux-expertise-disaster-recovery-13-reverse": {
      concept: "재해 복구",
      prompt: "다음 설명이 가리키는 개념은? restore validated service state",
      hint: "Recovery plans need tested backups and runbooks.",
      explanation: "disaster recovery: Recovery plans need tested backups and runbooks."
    },
    "linux-linux-expertise-disaster-recovery-13-input": {
      concept: "재해 복구",
      prompt: "재해 복구의 핵심 답을 입력하시오.",
      hint: "검증된 서비스 상태 복원",
      explanation: "restore validated service state is the key move for disaster recovery. Recovery plans need tested backups and runbooks."
    },
    "linux-linux-expertise-disaster-recovery-13-debug": {
      concept: "재해 복구",
      prompt: "이 재해 복구 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "restore validated service state is the key move for disaster recovery. Recovery plans need tested backups and runbooks."
    },

    "linux-linux-expertise-high-availability-14-pick": {
      concept: "고가용성",
      prompt: "고가용성에 대한 최선의 답을 고르시오.",
      hint: "중요 서비스 장애 조치",
      explanation: "fail over critical services is the key move for high availability. HA designs remove single points of failure."
    },
    "linux-linux-expertise-high-availability-14-reverse": {
      concept: "고가용성",
      prompt: "다음 설명이 가리키는 개념은? fail over critical services",
      hint: "HA designs remove single points of failure.",
      explanation: "high availability: HA designs remove single points of failure."
    },
    "linux-linux-expertise-high-availability-14-input": {
      concept: "고가용성",
      prompt: "고가용성의 핵심 답을 입력하시오.",
      hint: "중요 서비스 장애 조치",
      explanation: "fail over critical services is the key move for high availability. HA designs remove single points of failure."
    },
    "linux-linux-expertise-high-availability-14-debug": {
      concept: "고가용성",
      prompt: "이 고가용성 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "fail over critical services is the key move for high availability. HA designs remove single points of failure."
    },

    "linux-linux-expertise-capacity-planning-15-pick": {
      concept: "용량 계획",
      prompt: "용량 계획에 대한 최선의 답을 고르시오.",
      hint: "리소스 한계 예측",
      explanation: "forecast resource limits is the key move for capacity planning. Planning uses growth, saturation, and performance signals."
    },
    "linux-linux-expertise-capacity-planning-15-reverse": {
      concept: "용량 계획",
      prompt: "다음 설명이 가리키는 개념은? forecast resource limits",
      hint: "Planning uses growth, saturation, and performance signals.",
      explanation: "capacity planning: Planning uses growth, saturation, and performance signals."
    },
    "linux-linux-expertise-capacity-planning-15-input": {
      concept: "용량 계획",
      prompt: "용량 계획의 핵심 답을 입력하시오.",
      hint: "리소스 한계 예측",
      explanation: "forecast resource limits is the key move for capacity planning. Planning uses growth, saturation, and performance signals."
    },
    "linux-linux-expertise-capacity-planning-15-debug": {
      concept: "용량 계획",
      prompt: "이 용량 계획 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "forecast resource limits is the key move for capacity planning. Planning uses growth, saturation, and performance signals."
    },

    "linux-linux-expertise-incident-triage-16-pick": {
      concept: "인시던트 트리아지",
      prompt: "인시던트 트리아지에 대한 최선의 답을 고르시오.",
      hint: "안정화 후 진단",
      explanation: "stabilize then diagnose is the key move for incident triage. Triage separates immediate mitigation from root-cause analysis."
    },
    "linux-linux-expertise-incident-triage-16-reverse": {
      concept: "인시던트 트리아지",
      prompt: "다음 설명이 가리키는 개념은? stabilize then diagnose",
      hint: "Triage separates immediate mitigation from root-cause analysis.",
      explanation: "incident triage: Triage separates immediate mitigation from root-cause analysis."
    },
    "linux-linux-expertise-incident-triage-16-input": {
      concept: "인시던트 트리아지",
      prompt: "인시던트 트리아지의 핵심 답을 입력하시오.",
      hint: "안정화 후 진단",
      explanation: "stabilize then diagnose is the key move for incident triage. Triage separates immediate mitigation from root-cause analysis."
    },
    "linux-linux-expertise-incident-triage-16-debug": {
      concept: "인시던트 트리아지",
      prompt: "이 인시던트 트리아지 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "stabilize then diagnose is the key move for incident triage. Triage separates immediate mitigation from root-cause analysis."
    },

    "linux-linux-expertise-security-patching-17-pick": {
      concept: "보안 패칭",
      prompt: "보안 패칭에 대한 최선의 답을 고르시오.",
      hint: "롤백 경로를 갖춘 수정 적용",
      explanation: "apply fixes with rollback path is the key move for security patching. Patching balances exposure, compatibility, and downtime risk."
    },
    "linux-linux-expertise-security-patching-17-reverse": {
      concept: "보안 패칭",
      prompt: "다음 설명이 가리키는 개념은? apply fixes with rollback path",
      hint: "Patching balances exposure, compatibility, and downtime risk.",
      explanation: "security patching: Patching balances exposure, compatibility, and downtime risk."
    },
    "linux-linux-expertise-security-patching-17-input": {
      concept: "보안 패칭",
      prompt: "보안 패칭의 핵심 답을 입력하시오.",
      hint: "롤백 경로를 갖춘 수정 적용",
      explanation: "apply fixes with rollback path is the key move for security patching. Patching balances exposure, compatibility, and downtime risk."
    },
    "linux-linux-expertise-security-patching-17-debug": {
      concept: "보안 패칭",
      prompt: "이 보안 패칭 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "apply fixes with rollback path is the key move for security patching. Patching balances exposure, compatibility, and downtime risk."
    },

    "linux-linux-expertise-production-runbooks-18-pick": {
      concept: "프로덕션 런북",
      prompt: "프로덕션 런북에 대한 최선의 답을 고르시오.",
      hint: "반복 가능한 운영 절차",
      explanation: "repeatable operational steps is the key move for production runbooks. Runbooks reduce variance during stressful maintenance or incidents."
    },
    "linux-linux-expertise-production-runbooks-18-reverse": {
      concept: "프로덕션 런북",
      prompt: "다음 설명이 가리키는 개념은? repeatable operational steps",
      hint: "Runbooks reduce variance during stressful maintenance or incidents.",
      explanation: "production runbooks: Runbooks reduce variance during stressful maintenance or incidents."
    },
    "linux-linux-expertise-production-runbooks-18-input": {
      concept: "프로덕션 런북",
      prompt: "프로덕션 런북의 핵심 답을 입력하시오.",
      hint: "반복 가능한 운영 절차",
      explanation: "repeatable operational steps is the key move for production runbooks. Runbooks reduce variance during stressful maintenance or incidents."
    },
    "linux-linux-expertise-production-runbooks-18-debug": {
      concept: "프로덕션 런북",
      prompt: "이 프로덕션 런북 시나리오에서 가장 안전한 조치는?",
      hint: "상황을 해결하는 방법이나 도구를 명시하시오.",
      explanation: "repeatable operational steps is the key move for production runbooks. Runbooks reduce variance during stressful maintenance or incidents."
    }
  }
};
