import type { DrillMode, LearningDrill, LearningTrack, TrackId } from "@/data/dojoTypes";

export type { DrillMode, TrackId };

export type PythonTrack = LearningTrack;
export type PythonDrill = LearningDrill;

export const tracks: PythonTrack[] = [
  {
    id: "foundations",
    title: "Foundations",
    level: "Beginner",
    focus: "syntax, values, branches, loops",
    accent: "#e35b4f"
  },
  {
    id: "data",
    title: "Data Fluency",
    level: "Builder",
    focus: "lists, dicts, files, comprehensions",
    accent: "#1f9d74"
  },
  {
    id: "design",
    title: "Program Design",
    level: "Practitioner",
    focus: "functions, modules, errors, tests",
    accent: "#3366cc"
  },
  {
    id: "mastery",
    title: "Mastery Lab",
    level: "Advanced",
    focus: "classes, iterators, async, performance",
    accent: "#c18414"
  }
];

export const drills: PythonDrill[] = [
  {
    id: "foundations-print",
    trackId: "foundations",
    mode: "input",
    level: 1,
    concept: "print output",
    prompt: "What does this program display?",
    answer: "Ready",
    acceptedAnswers: ["ready"],
    choices: ["Ready", "\"Ready\"", "print", "None"],
    code: "print(\"Ready\")",
    hint: "print sends the value inside parentheses to the console.",
    explanation: "The quotes mark a string in source code. They are not shown in the printed output."
  },
  {
    id: "foundations-variable",
    trackId: "foundations",
    mode: "pick",
    level: 1,
    concept: "assignment",
    prompt: "After both lines run, what is stored in score?",
    answer: "7",
    choices: ["3", "4", "7", "score + 3"],
    code: "score = 4\nscore = score + 3",
    hint: "The right side is evaluated before the variable is updated.",
    explanation: "score starts at 4, then becomes 4 + 3."
  },
  {
    id: "foundations-string-type",
    trackId: "foundations",
    mode: "reverse",
    level: 1,
    concept: "types",
    prompt: "Which value is a string, not a number?",
    answer: "\"42\"",
    choices: ["42", "\"42\"", "4.2", "True"],
    hint: "Strings are wrapped in quotes.",
    explanation: "\"42\" is text. It can look numeric but still has type str."
  },
  {
    id: "foundations-branch",
    trackId: "foundations",
    mode: "pick",
    level: 2,
    concept: "conditionals",
    prompt: "Which branch runs?",
    answer: "fast",
    choices: ["fast", "slow", "both", "neither"],
    code: "speed = 8\nif speed >= 5:\n    print(\"fast\")\nelse:\n    print(\"slow\")",
    hint: "8 is greater than or equal to 5.",
    explanation: "The if condition is true, so Python runs the first block."
  },
  {
    id: "foundations-range-loop",
    trackId: "foundations",
    mode: "input",
    level: 2,
    concept: "for loops",
    prompt: "What is the final value of total?",
    answer: "3",
    choices: ["0", "2", "3", "6"],
    code: "total = 0\nfor n in range(3):\n    total += n",
    hint: "range(3) produces 0, 1, and 2.",
    explanation: "The loop adds 0 + 1 + 2, so total ends as 3."
  },
  {
    id: "foundations-debug-indent",
    trackId: "foundations",
    mode: "debug",
    level: 2,
    concept: "indentation",
    prompt: "What fixes this broken loop?",
    answer: "Indent the print line",
    acceptedAnswers: ["indent print", "indent the print", "indent the print line"],
    choices: ["Indent the print line", "Remove range", "Rename n", "Use == instead of in"],
    code: "for n in range(2):\nprint(n)",
    hint: "A block must be indented after a colon.",
    explanation: "Python uses indentation to decide which statements belong inside a block."
  },
  {
    id: "data-list-index",
    trackId: "data",
    mode: "pick",
    level: 3,
    concept: "list indexing",
    prompt: "Which value is names[1]?",
    answer: "Lin",
    choices: ["Ada", "Lin", "Grace", "IndexError"],
    code: "names = [\"Ada\", \"Lin\", \"Grace\"]",
    hint: "Python indexes start at 0.",
    explanation: "names[0] is Ada, so names[1] is Lin."
  },
  {
    id: "data-append",
    trackId: "data",
    mode: "input",
    level: 3,
    concept: "list mutation",
    prompt: "What does items contain after append?",
    answer: "[1, 2, 3]",
    acceptedAnswers: ["1,2,3", "[1,2,3]", "[1, 2, 3]"],
    choices: ["[1, 2]", "[1, 2, 3]", "[3]", "None"],
    code: "items = [1, 2]\nitems.append(3)",
    hint: "append changes the existing list.",
    explanation: "append adds one item to the end of the same list."
  },
  {
    id: "data-dict-get",
    trackId: "data",
    mode: "pick",
    level: 3,
    concept: "dict lookup",
    prompt: "What does profile.get(\"city\", \"Seoul\") return?",
    answer: "Seoul",
    choices: ["Ada", "Seoul", "city", "KeyError"],
    code: "profile = {\"name\": \"Ada\"}",
    hint: "get can return a fallback when the key is missing.",
    explanation: "city is not present, so get returns the default value Seoul."
  },
  {
    id: "data-comprehension",
    trackId: "data",
    mode: "reverse",
    level: 4,
    concept: "list comprehensions",
    prompt: "Which expression creates [0, 4, 8]?",
    answer: "[n * 4 for n in range(3)]",
    choices: [
      "[n * 4 for n in range(3)]",
      "[n + 4 for n in range(3)]",
      "[range(3) * 4]",
      "[n for 4 in range(3)]"
    ],
    hint: "Map each n to n times 4.",
    explanation: "range(3) gives 0, 1, 2. Multiplying each by 4 gives 0, 4, 8."
  },
  {
    id: "data-slice",
    trackId: "data",
    mode: "input",
    level: 4,
    concept: "slicing",
    prompt: "What is letters[1:4]?",
    answer: "['b', 'c', 'd']",
    acceptedAnswers: ["b,c,d", "['b','c','d']", "['b', 'c', 'd']"],
    choices: ["['a', 'b', 'c']", "['b', 'c', 'd']", "['b', 'c', 'd', 'e']", "['d']"],
    code: "letters = ['a', 'b', 'c', 'd', 'e']",
    hint: "The start index is included. The stop index is excluded.",
    explanation: "Index 1 is b, and the slice stops before index 4."
  },
  {
    id: "data-debug-key",
    trackId: "data",
    mode: "debug",
    level: 4,
    concept: "missing keys",
    prompt: "Which change avoids a KeyError when theme is missing?",
    answer: "settings.get(\"theme\", \"light\")",
    choices: [
      "settings.get(\"theme\", \"light\")",
      "settings[\"theme\"]!",
      "settings.theme",
      "settings = []"
    ],
    code: "settings = {}\nmode = settings[\"theme\"]",
    hint: "Use a dict method that accepts a default.",
    explanation: "dict.get returns the fallback instead of raising KeyError."
  },
  {
    id: "design-return",
    trackId: "design",
    mode: "pick",
    level: 5,
    concept: "return values",
    prompt: "What does double(6) evaluate to?",
    answer: "12",
    choices: ["6", "12", "double", "None"],
    code: "def double(n):\n    return n * 2",
    hint: "return sends a value back to the caller.",
    explanation: "The function returns 6 * 2."
  },
  {
    id: "design-default-arg",
    trackId: "design",
    mode: "input",
    level: 5,
    concept: "default arguments",
    prompt: "What does greet(\"Mina\") return?",
    answer: "Hi Mina",
    acceptedAnswers: ["hi mina", "\"hi mina\"", "'hi mina'"],
    choices: ["Hi name", "Hi Mina", "Mina Hi", "None"],
    code: "def greet(name, prefix=\"Hi\"):\n    return f\"{prefix} {name}\"",
    hint: "prefix uses its default because only name is passed.",
    explanation: "The default prefix is Hi, then the f-string inserts Mina."
  },
  {
    id: "design-exception",
    trackId: "design",
    mode: "reverse",
    level: 5,
    concept: "exceptions",
    prompt: "Which exception should you catch when int(\"x\") fails?",
    answer: "ValueError",
    choices: ["KeyError", "ValueError", "TypeError", "StopIteration"],
    hint: "The value has the right type for int, but invalid content.",
    explanation: "int can parse strings, but x is not a valid integer literal."
  },
  {
    id: "design-module",
    trackId: "design",
    mode: "pick",
    level: 6,
    concept: "modules",
    prompt: "Which line imports only sqrt from math?",
    answer: "from math import sqrt",
    choices: ["import sqrt from math", "from math import sqrt", "math import sqrt", "include math.sqrt"],
    hint: "Python uses from module import name.",
    explanation: "from math import sqrt binds sqrt directly in the current module."
  },
  {
    id: "design-test",
    trackId: "design",
    mode: "debug",
    level: 6,
    concept: "tests",
    prompt: "Which assertion checks that add(2, 3) returns 5?",
    answer: "assert add(2, 3) == 5",
    choices: [
      "assert add(2, 3) == 5",
      "assert add(2, 3) = 5",
      "expect add(2, 3)",
      "check add(2, 3) -> 5"
    ],
    hint: "Use equality comparison in assertions.",
    explanation: "== compares values. A single = is assignment, not a test."
  },
  {
    id: "design-pure",
    trackId: "design",
    mode: "input",
    level: 6,
    concept: "pure functions",
    prompt: "What kind of function returns a value without changing external state?",
    answer: "pure function",
    acceptedAnswers: ["pure", "a pure function"],
    choices: ["pure function", "global function", "mutable function", "loop"],
    hint: "It depends on inputs and avoids side effects.",
    explanation: "Pure functions are easier to test because the same input always gives the same output."
  },
  {
    id: "mastery-class",
    trackId: "mastery",
    mode: "pick",
    level: 7,
    concept: "classes",
    prompt: "Why does method greet receive self?",
    answer: "It refers to the current instance",
    choices: [
      "It refers to the current instance",
      "It imports the class",
      "It starts a loop",
      "It catches errors"
    ],
    code: "class User:\n    def greet(self):\n        return \"hi\"",
    hint: "self is the object the method is called on.",
    explanation: "Instance methods receive the object as their first argument."
  },
  {
    id: "mastery-generator",
    trackId: "mastery",
    mode: "input",
    level: 7,
    concept: "generators",
    prompt: "What keyword lets a function produce one value at a time?",
    answer: "yield",
    choices: ["return", "yield", "await", "raise"],
    code: "def count_up():\n    yield 1\n    yield 2",
    hint: "It pauses the function instead of finishing it.",
    explanation: "yield creates a generator that can resume later."
  },
  {
    id: "mastery-context",
    trackId: "mastery",
    mode: "reverse",
    level: 8,
    concept: "context managers",
    prompt: "Which statement closes a file automatically?",
    answer: "with open(path) as file:",
    choices: ["with open(path) as file:", "auto open(path)", "file = close(open(path))", "try open path"],
    hint: "Context managers use with.",
    explanation: "with calls cleanup logic when the block exits."
  },
  {
    id: "mastery-async",
    trackId: "mastery",
    mode: "pick",
    level: 8,
    concept: "async",
    prompt: "What does await do inside an async function?",
    answer: "Pauses until an awaitable result is ready",
    choices: [
      "Pauses until an awaitable result is ready",
      "Starts a new thread every time",
      "Deletes a task",
      "Converts text to bytes"
    ],
    hint: "await cooperates with the event loop.",
    explanation: "await lets other work run while the awaited operation is pending."
  },
  {
    id: "mastery-big-o",
    trackId: "mastery",
    mode: "debug",
    level: 8,
    concept: "complexity",
    prompt: "Which lookup is typically O(1) on average?",
    answer: "key in dict",
    choices: ["key in dict", "value in list", "nested loop scan", "sorted(list)"],
    hint: "Hash tables are built for fast key lookup.",
    explanation: "Python dict lookup is average constant time because it uses hashing."
  },
  {
    id: "mastery-dataclass",
    trackId: "mastery",
    mode: "input",
    level: 8,
    concept: "dataclasses",
    prompt: "Which decorator auto-generates init and repr for simple data objects?",
    answer: "@dataclass",
    acceptedAnswers: ["dataclass", "@dataclass"],
    choices: ["@dataclass", "@staticmethod", "@property", "@contextmanager"],
    code: "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int",
    hint: "It comes from the dataclasses module.",
    explanation: "@dataclass removes boilerplate for plain data containers."
  }
];
