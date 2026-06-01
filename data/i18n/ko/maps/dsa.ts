import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for dsa. Values start as English placeholders — translate to Korean.
export const dsaChrome: FactoryChromeKo = {
  metadata: {
    title: "DSADojo - 자료구조와 알고리즘 기초부터 전문가까지",
    description: "KanaDojo에서 영감을 받은 자료구조·알고리즘 드릴 — 복잡도 분석부터 고급 패턴까지."
  },
  welcomeTitle: "DSADojo에 오신 것을 환영합니다!",
  welcomeBody: "DSADojo는 자료구조와 알고리즘을 집중 드릴로 전환합니다. 기초부터 전문가 수준까지 단계별로 익힌다.",
  subjectName: "자료구조와 알고리즘",
  footerMeta: "커뮤니티 제작 ~ 알고리즘 블룸 ~ 표준 레퍼런스 기반 ~ v0.1.18 (알파)",
  cards: {
    "dsa-foundations": { label: "기초", summary: "빅오, 배열, 탐색" },
    "dsa-structures": { label: "자료구조", summary: "트리, 힙, 그래프" },
    "dsa-algorithms": { label: "패턴", summary: "그리디, 동적 계획법, 문자열" },
    "dsa-expertise": { label: "전문가", summary: "플로우, 복잡도 이론, 테스트" }
  },
  tracks: {
    "dsa-foundations": { title: "DSA 기초", focus: "복잡도, 배열, 연결 리스트, 스택, 큐, 탐색" },
    "dsa-structures": { title: "핵심 자료구조", focus: "트리, 힙, 그래프, 인덱스, 캐시" },
    "dsa-algorithms": { title: "알고리즘 패턴", focus: "분할 정복, 그리디, 동적 계획법, 그래프·문자열 알고리즘" },
    "dsa-expertise": { title: "DSA 전문가", focus: "분석, 복잡도 이론, 고급 자료구조, 테스트, 인터뷰" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const dsaTopicsKo: Record<string, TopicKo> = {
  "Big O": ["빅오 표기법", "입력 크기에 따른 점근적 증가율"], // hint: Big O describes how cost scales as input grows.
  "arrays": ["배열", "연속된 인덱스 기반 저장소"], // hint: Arrays give constant-time indexing and fixed structural layout.
  "dynamic arrays": ["동적 배열", "크기 조정이 가능한 연속 저장소"], // hint: Dynamic arrays grow by reallocating capacity.
  "linked lists": ["연결 리스트", "참조로 연결된 노드들"], // hint: Linked lists trade random access for cheap local insertion.
  "stacks": ["스택", "후입선출(LIFO)"], // hint: Stacks model nested work and reversal.
  "queues": ["큐", "선입선출(FIFO)"], // hint: Queues model ordered waiting work.
  "hash tables": ["해시 테이블", "해시를 이용한 키 조회"], // hint: Hash tables provide expected constant-time lookup with collisions handled.
  "sets and maps": ["집합과 맵", "멤버십 확인과 키-값 연관"], // hint: Sets track uniqueness; maps associate keys to values.
  "recursion": ["재귀", "작은 부분 문제를 푸는 함수 호출"], // hint: Recursion needs a base case and progress toward it.
  "iteration": ["반복", "명시적 루프 상태로 반복 수행"], // hint: Iteration can avoid call-stack growth.
  "invariants": ["불변 조건", "알고리즘 실행 중 항상 참인 조건"], // hint: Invariants explain why an algorithm stays correct.
  "sorting basics": ["정렬 기초", "비교 키 기준으로 재정렬"], // hint: Sorting prepares data for search, grouping, and merging.
  "binary search": ["이진 탐색", "정렬된 탐색 공간을 절반씩 축소"], // hint: Binary search requires a monotonic condition.
  "two pointers": ["투 포인터", "두 인덱스로 스캔"], // hint: Two pointers solve pair, window, and merge patterns.
  "sliding window": ["슬라이딩 윈도우", "이동하는 범위 유지"], // hint: Windows solve contiguous subarray or substring problems.
  "prefix sums": ["누적 합", "구간 합 사전 계산"], // hint: Prefix sums answer range-sum queries quickly.
  "modular arithmetic": ["모듈러 산술", "나머지 연산 활용"], // hint: Modulo helps with cycles, hashing, and large-number constraints.
  "complexity proof": ["복잡도 증명", "시간과 공간 복잡도 정당화"], // hint: A proof connects loops, data movement, and input size.
  "trees": ["트리", "계층적 노드 구조"], // hint: Trees represent parent-child structure without cycles.
  "binary search trees": ["이진 탐색 트리", "정렬된 이진 트리"], // hint: BST order supports search, insertion, and traversal.
  "heaps": ["힙", "루트에 우선순위가 있는 트리"], // hint: Heaps efficiently return min or max priority elements.
  "priority queues": ["우선순위 큐", "가장 높은 우선순위 항목 처리"], // hint: Priority queues are commonly implemented with heaps.
  "tries": ["트라이", "접두사 트리"], // hint: Tries support prefix lookup over strings or token sequences.
  "disjoint set union": ["분리 집합(DSU)", "컴포넌트 합치기와 찾기"], // hint: DSU tracks connectivity under union operations.
  "graphs": ["그래프", "정점과 간선"], // hint: Graphs model networks, dependencies, and reachability.
  "adjacency list": ["인접 리스트", "희소 그래프 표현"], // hint: Adjacency lists store outgoing neighbors efficiently.
  "BFS": ["BFS", "레벨 순서 그래프 탐색"], // hint: BFS finds shortest path lengths in unweighted graphs.
  "DFS": ["DFS", "깊이 우선 탐색"], // hint: DFS explores components, cycles, and ordering.
  "topological sort": ["위상 정렬", "DAG 의존성 순서 정렬"], // hint: Topological order places prerequisites before dependents.
  "Dijkstra": ["다익스트라", "음이 아닌 가중치 그래프의 최단 경로"], // hint: Dijkstra uses a priority queue to settle nearest nodes.
  "minimum spanning tree": ["최소 신장 트리(MST)", "모든 정점을 최소 비용으로 연결"], // hint: MST algorithms select edges without cycles.
  "segment tree": ["세그먼트 트리", "구간 쿼리 및 업데이트 트리"], // hint: Segment trees answer dynamic interval queries.
  "Fenwick tree": ["펜윅 트리", "이진 인덱스 기반 누적 합 구조"], // hint: Fenwick trees handle prefix sums with compact code.
  "balanced trees": ["균형 트리", "높이를 로그 수준으로 유지"], // hint: Balanced trees prevent worst-case linked-list behavior.
  "Bloom filter": ["블룸 필터", "확률적 멤버십 검사"], // hint: Bloom filters allow false positives but not false negatives.
  "LRU cache": ["LRU 캐시", "가장 오래 미사용 항목을 제거"], // hint: LRU combines a map with recency ordering.
  "divide and conquer": ["분할 정복", "분리·해결·결합"], // hint: The pattern reduces a problem into independent subproblems.
  "greedy algorithms": ["그리디 알고리즘", "국소 최선 선택을 탐욕적으로 적용"], // hint: Greedy works only when local choices compose to an optimum.
  "dynamic programming": ["동적 계획법(DP)", "중복 부분 문제를 재활용"], // hint: DP stores subproblem answers to avoid repeated work.
  "memoization": ["메모이제이션", "탑다운 캐시 재귀"], // hint: Memoization keeps recursion while caching results.
  "tabulation": ["타뷸레이션", "바텀업 DP 테이블"], // hint: Tabulation fills answers in dependency order.
  "knapsack": ["배낭 문제", "용량 제한 내 아이템 선택"], // hint: Knapsack is a classic DP tradeoff problem.
  "longest common subsequence": ["최장 공통 부분 수열(LCS)", "두 수열에 대한 동적 계획법"], // hint: LCS compares prefixes and carries best subsequence length.
  "graph DP": ["그래프 DP", "그래프 구조 위의 동적 계획법"], // hint: Graph DP often requires DAG order or tree rooting.
  "backtracking": ["백트래킹", "선택과 취소를 반복하는 탐색"], // hint: Backtracking explores candidates and reverts state.
  "branch and bound": ["분기 한정법", "불가능하거나 열등한 탐색 가지 가지치기"], // hint: Bounds cut search branches that cannot beat the best answer.
  "KMP": ["KMP", "선형 시간 문자열 매칭"], // hint: KMP reuses prefix information after mismatches.
  "rolling hash": ["롤링 해시", "부분 문자열을 점진적으로 해싱"], // hint: Rolling hashes compare substrings quickly with collision awareness.
  "union-find applications": ["유니온-파인드 응용", "합집합 연산 하에서의 연결성"], // hint: DSU solves cycle detection and component grouping.
  "sweep line": ["스윕 라인", "정렬된 순서로 이벤트 처리"], // hint: Sweep line turns geometry or interval changes into ordered events.
  "interval scheduling": ["구간 스케줄링", "겹치지 않는 구간 선택"], // hint: Greedy by earliest finishing time maximizes interval count.
  "bitmasking": ["비트마스킹", "비트로 부분 집합 표현"], // hint: Bitmasks compactly encode small sets and states.
  "randomized algorithms": ["랜덤화 알고리즘", "속도 또는 단순성을 위해 확률 활용"], // hint: Randomness can improve expected complexity.
  "correctness proof": ["정확성 증명", "알고리즘이 항상 올바름을 증명"], // hint: Proofs use invariants, induction, exchange, or contradiction.
  "amortized analysis": ["분할 상환 분석", "연산 시퀀스에 걸친 평균 비용"], // hint: Amortized bounds explain occasional expensive operations.
  "lower bounds": ["하한 증명", "피할 수 없는 비용 증명"], // hint: Lower bounds show no algorithm can beat a class of costs.
  "NP-completeness": ["NP-완전성", "환원에 의한 난해성 증명"], // hint: NP-complete problems are unlikely to have polynomial exact algorithms.
  "approximation algorithms": ["근사 알고리즘", "품질 보장 근사 해법"], // hint: Approximations trade optimality for tractability.
  "online algorithms": ["온라인 알고리즘", "미래 입력 없이 결정"], // hint: Online algorithms handle requests as they arrive.
  "persistent data structures": ["영속 자료구조", "이전 버전 보존"], // hint: Persistence supports time travel and immutable histories.
  "concurrency-aware structures": ["동시성 안전 자료구조", "공유 접근의 안전성 보장"], // hint: Concurrent structures require correctness under interleaving.
  "cache locality": ["캐시 지역성", "메모리 접근 패턴 효율성"], // hint: Locality often dominates performance on real hardware.
  "memory tradeoffs": ["메모리 트레이드오프", "속도를 위해 공간 활용"], // hint: Precomputation and indexing often buy speed with memory.
  "max flow": ["최대 유량", "네트워크에 용량을 최대로 흘리기"], // hint: Flow algorithms solve matching, cuts, and routing variants.
  "min-cost flow": ["최소 비용 유량", "비용을 고려한 유량 최적화"], // hint: Min-cost flow adds price to capacity-constrained routing.
  "suffix arrays": ["접미사 배열", "정렬된 접미사 인덱스"], // hint: Suffix arrays support substring queries with compact memory.
  "suffix automata": ["접미사 오토마톤", "부분 문자열의 상태 기계"], // hint: Suffix automata represent all substrings of a string.
  "heavy-light decomposition": ["Heavy-Light 분해(HLD)", "트리를 경로로 분해"], // hint: HLD supports path queries on trees.
  "centroid decomposition": ["중심 분해", "트리 중심을 재귀적으로 분할"], // hint: Centroid methods solve distance and path queries on trees.
  "computational geometry": ["전산 기하학", "점과 도형에 대한 알고리즘"], // hint: Geometry problems need robust orientation and intersection logic.
  "DP optimization": ["DP 최적화", "상태 전이 비용 감소"], // hint: Optimizations use monotonicity, convexity, or divide-and-conquer structure.
  "algorithm testing": ["알고리즘 테스트", "완전 탐색 오라클과 엣지 케이스"], // hint: Small random tests compare optimized code to a simple oracle.
};
