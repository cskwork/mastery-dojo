import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "dsa-foundations",
    title: "DSA Foundations",
    level: "Beginner",
    focus: "complexity, arrays, lists, stacks, queues, search",
    accent: "#7b6bd6"
  },
  {
    id: "dsa-structures",
    title: "Core Structures",
    level: "Builder",
    focus: "trees, heaps, graphs, indexes, caches",
    accent: "#4f8dd8"
  },
  {
    id: "dsa-algorithms",
    title: "Algorithm Patterns",
    level: "Practitioner",
    focus: "divide and conquer, greedy, DP, graph and string algorithms",
    accent: "#41a67a"
  },
  {
    id: "dsa-expertise",
    title: "DSA Expertise",
    level: "Expertise",
    focus: "analysis, hardness, advanced structures, testing, interviews",
    accent: "#d0a23c"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("dsa-foundations", [
    ["Big O", "asymptotic growth rate", "Big O describes how cost scales as input grows."],
    ["arrays", "contiguous indexed storage", "Arrays give constant-time indexing and fixed structural layout."],
    ["dynamic arrays", "resizable contiguous storage", "Dynamic arrays grow by reallocating capacity."],
    ["linked lists", "nodes connected by references", "Linked lists trade random access for cheap local insertion."],
    ["stacks", "last in first out", "Stacks model nested work and reversal."],
    ["queues", "first in first out", "Queues model ordered waiting work."],
    ["hash tables", "key lookup by hash", "Hash tables provide expected constant-time lookup with collisions handled."],
    ["sets and maps", "membership and association", "Sets track uniqueness; maps associate keys to values."],
    ["recursion", "function solves smaller subproblem", "Recursion needs a base case and progress toward it."],
    ["iteration", "repeat with explicit loop state", "Iteration can avoid call-stack growth."],
    ["invariants", "condition that remains true", "Invariants explain why an algorithm stays correct."],
    ["sorting basics", "reorder by comparison key", "Sorting prepares data for search, grouping, and merging."],
    ["binary search", "halve ordered search space", "Binary search requires a monotonic condition."],
    ["two pointers", "scan with two indices", "Two pointers solve pair, window, and merge patterns."],
    ["sliding window", "maintain a moving range", "Windows solve contiguous subarray or substring problems."],
    ["prefix sums", "precompute cumulative totals", "Prefix sums answer range-sum queries quickly."],
    ["modular arithmetic", "work with remainders", "Modulo helps with cycles, hashing, and large-number constraints."],
    ["complexity proof", "justify time and space", "A proof connects loops, data movement, and input size."]
  ]),
  ...defineTopics("dsa-structures", [
    ["trees", "hierarchical nodes", "Trees represent parent-child structure without cycles."],
    ["binary search trees", "ordered binary tree", "BST order supports search, insertion, and traversal."],
    ["heaps", "priority at the root", "Heaps efficiently return min or max priority elements."],
    ["priority queues", "serve highest-priority item", "Priority queues are commonly implemented with heaps."],
    ["tries", "prefix tree", "Tries support prefix lookup over strings or token sequences."],
    ["disjoint set union", "merge and find components", "DSU tracks connectivity under union operations."],
    ["graphs", "vertices and edges", "Graphs model networks, dependencies, and reachability."],
    ["adjacency list", "sparse graph representation", "Adjacency lists store outgoing neighbors efficiently."],
    ["BFS", "level-order graph traversal", "BFS finds shortest path lengths in unweighted graphs."],
    ["DFS", "depth-first traversal", "DFS explores components, cycles, and ordering."],
    ["topological sort", "order DAG dependencies", "Topological order places prerequisites before dependents."],
    ["Dijkstra", "shortest paths with nonnegative weights", "Dijkstra uses a priority queue to settle nearest nodes."],
    ["minimum spanning tree", "connect all vertices cheaply", "MST algorithms select edges without cycles."],
    ["segment tree", "range query and update tree", "Segment trees answer dynamic interval queries."],
    ["Fenwick tree", "binary indexed prefix structure", "Fenwick trees handle prefix sums with compact code."],
    ["balanced trees", "keep height logarithmic", "Balanced trees prevent worst-case linked-list behavior."],
    ["Bloom filter", "probabilistic membership test", "Bloom filters allow false positives but not false negatives."],
    ["LRU cache", "evict least recently used item", "LRU combines a map with recency ordering."]
  ]),
  ...defineTopics("dsa-algorithms", [
    ["divide and conquer", "split solve combine", "The pattern reduces a problem into independent subproblems."],
    ["greedy algorithms", "take locally best safe choice", "Greedy works only when local choices compose to an optimum."],
    ["dynamic programming", "reuse overlapping subproblems", "DP stores subproblem answers to avoid repeated work."],
    ["memoization", "top-down cached recursion", "Memoization keeps recursion while caching results."],
    ["tabulation", "bottom-up DP table", "Tabulation fills answers in dependency order."],
    ["knapsack", "choose items under capacity", "Knapsack is a classic DP tradeoff problem."],
    ["longest common subsequence", "DP over two sequences", "LCS compares prefixes and carries best subsequence length."],
    ["graph DP", "dynamic programming on graph structure", "Graph DP often requires DAG order or tree rooting."],
    ["backtracking", "search choices with undo", "Backtracking explores candidates and reverts state."],
    ["branch and bound", "prune impossible or dominated search", "Bounds cut search branches that cannot beat the best answer."],
    ["KMP", "linear string matching", "KMP reuses prefix information after mismatches."],
    ["rolling hash", "hash substrings incrementally", "Rolling hashes compare substrings quickly with collision awareness."],
    ["union-find applications", "connectivity under merges", "DSU solves cycle detection and component grouping."],
    ["sweep line", "process events in sorted order", "Sweep line turns geometry or interval changes into ordered events."],
    ["interval scheduling", "choose compatible intervals", "Greedy by earliest finishing time maximizes interval count."],
    ["bitmasking", "represent subsets as bits", "Bitmasks compactly encode small sets and states."],
    ["randomized algorithms", "use probability for speed or simplicity", "Randomness can improve expected complexity."],
    ["correctness proof", "show algorithm always works", "Proofs use invariants, induction, exchange, or contradiction."]
  ]),
  ...defineTopics("dsa-expertise", [
    ["amortized analysis", "average cost over operation sequence", "Amortized bounds explain occasional expensive operations."],
    ["lower bounds", "prove unavoidable cost", "Lower bounds show no algorithm can beat a class of costs."],
    ["NP-completeness", "hardness by reduction", "NP-complete problems are unlikely to have polynomial exact algorithms."],
    ["approximation algorithms", "bounded-quality solutions", "Approximations trade optimality for tractability."],
    ["online algorithms", "decide without future input", "Online algorithms handle requests as they arrive."],
    ["persistent data structures", "preserve previous versions", "Persistence supports time travel and immutable histories."],
    ["concurrency-aware structures", "safe shared access", "Concurrent structures require correctness under interleaving."],
    ["cache locality", "memory access pattern efficiency", "Locality often dominates performance on real hardware."],
    ["memory tradeoffs", "space for speed", "Precomputation and indexing often buy speed with memory."],
    ["max flow", "push capacity through network", "Flow algorithms solve matching, cuts, and routing variants."],
    ["min-cost flow", "optimize flow with costs", "Min-cost flow adds price to capacity-constrained routing."],
    ["suffix arrays", "sorted suffix index", "Suffix arrays support substring queries with compact memory."],
    ["suffix automata", "state machine of substrings", "Suffix automata represent all substrings of a string."],
    ["heavy-light decomposition", "break trees into paths", "HLD supports path queries on trees."],
    ["centroid decomposition", "recursive tree center splitting", "Centroid methods solve distance and path queries on trees."],
    ["computational geometry", "algorithms over points and shapes", "Geometry problems need robust orientation and intersection logic."],
    ["DP optimization", "reduce state transition cost", "Optimizations use monotonicity, convexity, or divide-and-conquer structure."],
    ["algorithm testing", "brute force oracle and edge cases", "Small random tests compare optimized code to a simple oracle."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("dsa", topics);
