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
  "Big O": ["빅오 표기법","입력 크기에 따른 점근적 증가율","빅오는 입력 크기가 증가할 때 비용이 어떻게 확장되는지를 설명한다."], // hint: Big O describes how cost scales as input grows.
  "arrays": ["배열","연속된 인덱스 기반 저장소","배열은 상수 시간 인덱싱과 고정된 구조 레이아웃을 제공한다."], // hint: Arrays give constant-time indexing and fixed structural layout.
  "dynamic arrays": ["동적 배열","크기 조정이 가능한 연속 저장소","동적 배열은 용량을 재할당하여 크기를 늘린다."], // hint: Dynamic arrays grow by reallocating capacity.
  "linked lists": ["연결 리스트","참조로 연결된 노드들","연결 리스트는 임의 접근을 포기하는 대신 로컬 삽입 비용을 낮춘다."], // hint: Linked lists trade random access for cheap local insertion.
  "stacks": ["스택","후입선출(LIFO)","스택은 중첩된 작업과 역순 처리를 모델링한다."], // hint: Stacks model nested work and reversal.
  "queues": ["큐","선입선출(FIFO)","큐는 순서가 있는 대기 작업을 모델링한다."], // hint: Queues model ordered waiting work.
  "hash tables": ["해시 테이블","해시를 이용한 키 조회","해시 테이블은 충돌을 처리하면서 기대 상수 시간 조회를 제공한다."], // hint: Hash tables provide expected constant-time lookup with collisions handled.
  "sets and maps": ["집합과 맵","멤버십 확인과 키-값 연관","집합은 유일성을 추적하고, 맵은 키를 값에 연관시킨다."], // hint: Sets track uniqueness; maps associate keys to values.
  "recursion": ["재귀","작은 부분 문제를 푸는 함수 호출","재귀는 기저 사례와 그것을 향한 진행이 필요하다."], // hint: Recursion needs a base case and progress toward it.
  "iteration": ["반복","명시적 루프 상태로 반복 수행","반복은 호출 스택 증가를 피할 수 있다."], // hint: Iteration can avoid call-stack growth.
  "invariants": ["불변 조건","알고리즘 실행 중 항상 참인 조건","불변 조건은 알고리즘이 올바름을 유지하는 이유를 설명한다."], // hint: Invariants explain why an algorithm stays correct.
  "sorting basics": ["정렬 기초","비교 키 기준으로 재정렬","정렬은 탐색, 그룹화, 병합을 위해 데이터를 준비한다."], // hint: Sorting prepares data for search, grouping, and merging.
  "binary search": ["이진 탐색","정렬된 탐색 공간을 절반씩 축소","이진 탐색은 단조 조건을 요구한다."], // hint: Binary search requires a monotonic condition.
  "two pointers": ["투 포인터","두 인덱스로 스캔","투 포인터는 쌍, 윈도우, 병합 패턴을 해결한다."], // hint: Two pointers solve pair, window, and merge patterns.
  "sliding window": ["슬라이딩 윈도우","이동하는 범위 유지","슬라이딩 윈도우는 연속 부분 배열 또는 부분 문자열 문제를 해결한다."], // hint: Windows solve contiguous subarray or substring problems.
  "prefix sums": ["누적 합","구간 합 사전 계산","누적 합은 구간 합 쿼리를 빠르게 응답한다."], // hint: Prefix sums answer range-sum queries quickly.
  "modular arithmetic": ["모듈러 산술","나머지 연산 활용","모듈로 연산은 순환, 해싱, 큰 수 제약 조건에 유용하다."], // hint: Modulo helps with cycles, hashing, and large-number constraints.
  "complexity proof": ["복잡도 증명","시간과 공간 복잡도 정당화","증명은 루프, 데이터 이동, 입력 크기를 연결한다."], // hint: A proof connects loops, data movement, and input size.
  "trees": ["트리","계층적 노드 구조","트리는 사이클 없이 부모-자식 구조를 표현한다."], // hint: Trees represent parent-child structure without cycles.
  "binary search trees": ["이진 탐색 트리","정렬된 이진 트리","BST 순서는 탐색, 삽입, 순회를 지원한다."], // hint: BST order supports search, insertion, and traversal.
  "heaps": ["힙","루트에 우선순위가 있는 트리","힙은 최솟값 또는 최댓값 우선순위 요소를 효율적으로 반환한다."], // hint: Heaps efficiently return min or max priority elements.
  "priority queues": ["우선순위 큐","가장 높은 우선순위 항목 처리","우선순위 큐는 일반적으로 힙으로 구현된다."], // hint: Priority queues are commonly implemented with heaps.
  "tries": ["트라이","접두사 트리","트라이는 문자열 또는 토큰 시퀀스에 대한 접두사 조회를 지원한다."], // hint: Tries support prefix lookup over strings or token sequences.
  "disjoint set union": ["분리 집합(DSU)","컴포넌트 합치기와 찾기","DSU는 합집합 연산 하에서 연결성을 추적한다."], // hint: DSU tracks connectivity under union operations.
  "graphs": ["그래프","정점과 간선","그래프는 네트워크, 의존성, 도달 가능성을 모델링한다."], // hint: Graphs model networks, dependencies, and reachability.
  "adjacency list": ["인접 리스트","희소 그래프 표현","인접 리스트는 나가는 이웃 노드를 효율적으로 저장한다."], // hint: Adjacency lists store outgoing neighbors efficiently.
  "BFS": ["BFS","레벨 순서 그래프 탐색","BFS는 비가중 그래프에서 최단 경로 길이를 찾는다."], // hint: BFS finds shortest path lengths in unweighted graphs.
  "DFS": ["DFS","깊이 우선 탐색","DFS는 컴포넌트, 사이클, 순서를 탐색한다."], // hint: DFS explores components, cycles, and ordering.
  "topological sort": ["위상 정렬","DAG 의존성 순서 정렬","위상 정렬은 DAG에서 선행 조건을 의존 항목 앞에 배치한다."], // hint: Topological order places prerequisites before dependents.
  "Dijkstra": ["다익스트라","음이 아닌 가중치 그래프의 최단 경로","다익스트라는 우선순위 큐를 사용하여 가장 가까운 노드를 확정한다."], // hint: Dijkstra uses a priority queue to settle nearest nodes.
  "minimum spanning tree": ["최소 신장 트리(MST)","모든 정점을 최소 비용으로 연결","MST 알고리즘은 사이클 없이 간선을 선택한다."], // hint: MST algorithms select edges without cycles.
  "segment tree": ["세그먼트 트리","구간 쿼리 및 업데이트 트리","세그먼트 트리는 동적 구간 쿼리에 응답한다."], // hint: Segment trees answer dynamic interval queries.
  "Fenwick tree": ["펜윅 트리","이진 인덱스 기반 누적 합 구조","펜윅 트리는 간결한 코드로 누적 합을 처리한다."], // hint: Fenwick trees handle prefix sums with compact code.
  "balanced trees": ["균형 트리","높이를 로그 수준으로 유지","균형 트리는 최악의 경우 연결 리스트 동작을 방지한다."], // hint: Balanced trees prevent worst-case linked-list behavior.
  "Bloom filter": ["블룸 필터","확률적 멤버십 검사","블룸 필터는 긍정 오류(false positive)는 허용하지만 부정 오류(false negative)는 허용하지 않는다."], // hint: Bloom filters allow false positives but not false negatives.
  "LRU cache": ["LRU 캐시","가장 오래 미사용 항목을 제거","LRU는 맵과 최근 접근 순서 정렬을 결합한다."], // hint: LRU combines a map with recency ordering.
  "divide and conquer": ["분할 정복","분리·해결·결합","분할 정복 패턴은 문제를 독립적인 부분 문제로 분리한다."], // hint: The pattern reduces a problem into independent subproblems.
  "greedy algorithms": ["그리디 알고리즘","국소 최선 선택을 탐욕적으로 적용","그리디는 국소 선택이 최적해로 구성될 때만 동작한다."], // hint: Greedy works only when local choices compose to an optimum.
  "dynamic programming": ["동적 계획법(DP)","중복 부분 문제를 재활용","DP는 중복 작업을 피하기 위해 부분 문제의 답을 저장한다."], // hint: DP stores subproblem answers to avoid repeated work.
  "memoization": ["메모이제이션","탑다운 캐시 재귀","메모이제이션은 결과를 캐싱하면서 재귀를 유지한다."], // hint: Memoization keeps recursion while caching results.
  "tabulation": ["타뷸레이션","바텀업 DP 테이블","타뷸레이션은 의존성 순서에 따라 답을 채운다."], // hint: Tabulation fills answers in dependency order.
  "knapsack": ["배낭 문제","용량 제한 내 아이템 선택","배낭 문제는 전형적인 DP 트레이드오프 문제다."], // hint: Knapsack is a classic DP tradeoff problem.
  "longest common subsequence": ["최장 공통 부분 수열(LCS)","두 수열에 대한 동적 계획법","LCS는 접두사를 비교하고 최장 부분 수열 길이를 전달한다."], // hint: LCS compares prefixes and carries best subsequence length.
  "graph DP": ["그래프 DP","그래프 구조 위의 동적 계획법","그래프 DP는 DAG 순서 또는 트리 루팅이 필요한 경우가 많다."], // hint: Graph DP often requires DAG order or tree rooting.
  "backtracking": ["백트래킹","선택과 취소를 반복하는 탐색","백트래킹은 후보를 탐색하고 상태를 되돌린다."], // hint: Backtracking explores candidates and reverts state.
  "branch and bound": ["분기 한정법","불가능하거나 열등한 탐색 가지 가지치기","한계값은 최선의 답을 넘을 수 없는 탐색 가지를 제거한다."], // hint: Bounds cut search branches that cannot beat the best answer.
  "KMP": ["KMP","선형 시간 문자열 매칭","KMP는 불일치 후 접두사 정보를 재사용한다."], // hint: KMP reuses prefix information after mismatches.
  "rolling hash": ["롤링 해시","부분 문자열을 점진적으로 해싱","롤링 해시는 충돌을 인식하면서 부분 문자열을 빠르게 비교한다."], // hint: Rolling hashes compare substrings quickly with collision awareness.
  "union-find applications": ["유니온-파인드 응용","합집합 연산 하에서의 연결성","DSU는 사이클 감지와 컴포넌트 그룹화를 해결한다."], // hint: DSU solves cycle detection and component grouping.
  "sweep line": ["스윕 라인","정렬된 순서로 이벤트 처리","스윕 라인은 기하학적 또는 구간 변화를 정렬된 이벤트로 변환한다."], // hint: Sweep line turns geometry or interval changes into ordered events.
  "interval scheduling": ["구간 스케줄링","겹치지 않는 구간 선택","가장 빠른 종료 시간 기준의 그리디 선택이 구간 수를 최대화한다."], // hint: Greedy by earliest finishing time maximizes interval count.
  "bitmasking": ["비트마스킹","비트로 부분 집합 표현","비트마스크는 작은 집합과 상태를 간결하게 인코딩한다."], // hint: Bitmasks compactly encode small sets and states.
  "randomized algorithms": ["랜덤화 알고리즘","속도 또는 단순성을 위해 확률 활용","확률적 기법은 기대 복잡도를 개선할 수 있다."], // hint: Randomness can improve expected complexity.
  "correctness proof": ["정확성 증명","알고리즘이 항상 올바름을 증명","증명은 불변 조건, 귀납법, 교환 논법, 또는 모순을 활용한다."], // hint: Proofs use invariants, induction, exchange, or contradiction.
  "amortized analysis": ["분할 상환 분석","연산 시퀀스에 걸친 평균 비용","분할 상환 한계는 간헐적으로 비싼 연산을 설명한다."], // hint: Amortized bounds explain occasional expensive operations.
  "lower bounds": ["하한 증명","피할 수 없는 비용 증명","하한은 어떤 알고리즘도 특정 비용 계층을 이길 수 없음을 보인다."], // hint: Lower bounds show no algorithm can beat a class of costs.
  "NP-completeness": ["NP-완전성","환원에 의한 난해성 증명","NP-완전 문제는 다항 시간 정확 알고리즘을 가질 가능성이 낮다."], // hint: NP-complete problems are unlikely to have polynomial exact algorithms.
  "approximation algorithms": ["근사 알고리즘","품질 보장 근사 해법","근사 알고리즘은 최적성을 포기하는 대신 계산 가능성을 얻는다."], // hint: Approximations trade optimality for tractability.
  "online algorithms": ["온라인 알고리즘","미래 입력 없이 결정","온라인 알고리즘은 요청이 도착하는 순서대로 처리한다."], // hint: Online algorithms handle requests as they arrive.
  "persistent data structures": ["영속 자료구조","이전 버전 보존","영속성은 시간 여행과 불변 이력을 지원한다."], // hint: Persistence supports time travel and immutable histories.
  "concurrency-aware structures": ["동시성 안전 자료구조","공유 접근의 안전성 보장","동시성 자료구조는 인터리빙 하에서 정확성을 요구한다."], // hint: Concurrent structures require correctness under interleaving.
  "cache locality": ["캐시 지역성","메모리 접근 패턴 효율성","지역성은 실제 하드웨어에서 성능을 좌우하는 경우가 많다."], // hint: Locality often dominates performance on real hardware.
  "memory tradeoffs": ["메모리 트레이드오프","속도를 위해 공간 활용","사전 계산과 인덱싱은 메모리를 대가로 속도를 얻는다."], // hint: Precomputation and indexing often buy speed with memory.
  "max flow": ["최대 유량","네트워크에 용량을 최대로 흘리기","유량 알고리즘은 매칭, 컷, 라우팅 변형 문제를 해결한다."], // hint: Flow algorithms solve matching, cuts, and routing variants.
  "min-cost flow": ["최소 비용 유량","비용을 고려한 유량 최적화","최소 비용 유량은 용량 제한 라우팅에 비용을 추가한다."], // hint: Min-cost flow adds price to capacity-constrained routing.
  "suffix arrays": ["접미사 배열","정렬된 접미사 인덱스","접미사 배열은 컴팩트한 메모리로 부분 문자열 쿼리를 지원한다."], // hint: Suffix arrays support substring queries with compact memory.
  "suffix automata": ["접미사 오토마톤","부분 문자열의 상태 기계","접미사 오토마톤은 문자열의 모든 부분 문자열을 표현한다."], // hint: Suffix automata represent all substrings of a string.
  "heavy-light decomposition": ["Heavy-Light 분해(HLD)","트리를 경로로 분해","HLD는 트리의 경로 쿼리를 지원한다."], // hint: HLD supports path queries on trees.
  "centroid decomposition": ["중심 분해","트리 중심을 재귀적으로 분할","중심 분해 기법은 트리에서 거리 및 경로 쿼리를 해결한다."], // hint: Centroid methods solve distance and path queries on trees.
  "computational geometry": ["전산 기하학","점과 도형에 대한 알고리즘","기하학 문제는 강건한 방향 판별과 교차 로직이 필요하다."], // hint: Geometry problems need robust orientation and intersection logic.
  "DP optimization": ["DP 최적화","상태 전이 비용 감소","최적화 기법은 단조성, 볼록성, 또는 분할 정복 구조를 활용한다."], // hint: Optimizations use monotonicity, convexity, or divide-and-conquer structure.
  "algorithm testing": ["알고리즘 테스트","완전 탐색 오라클과 엣지 케이스","소규모 무작위 테스트는 최적화된 코드를 단순 오라클과 비교한다."], // hint: Small random tests compare optimized code to a simple oracle.
};
