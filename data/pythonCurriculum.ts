import type { DrillMode, LearningDrill, LearningTrack, TrackId } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";

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
    level: "Expertise",
    focus: "classes, iterators, async, performance, protocols, packaging",
    accent: "#c18414"
  }
];

const baseDrills: PythonDrill[] = [
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
  },
  {
    id: "foundations-bool-logic",
    trackId: "foundations",
    mode: "pick",
    level: 1,
    concept: "boolean logic",
    prompt: "What is the value of ready?",
    answer: "True",
    acceptedAnswers: ["true"],
    choices: ["True", "False", "None", "\"True\""],
    code: "age = 20\nready = age >= 18 and age < 65",
    hint: "Both comparisons are true.",
    explanation: "age >= 18 is true and age < 65 is also true, so the and expression is True."
  },
  {
    id: "foundations-none",
    trackId: "foundations",
    mode: "reverse",
    level: 1,
    concept: "None",
    prompt: "Which value represents no meaningful result?",
    answer: "None",
    choices: ["None", "0", "\"\"", "False"],
    hint: "It is Python's null-like singleton.",
    explanation: "None is used when a name or function has no meaningful value to return."
  },
  {
    id: "foundations-fstring",
    trackId: "foundations",
    mode: "input",
    level: 2,
    concept: "f-strings",
    prompt: "What does label contain?",
    answer: "Ada: 3",
    acceptedAnswers: ["ada: 3", "\"ada: 3\"", "'ada: 3'"],
    choices: ["Ada: 3", "{name}: {score}", "Ada score", "3: Ada"],
    code: "name = \"Ada\"\nscore = 3\nlabel = f\"{name}: {score}\"",
    hint: "An f-string inserts the current values inside braces.",
    explanation: "The braces are replaced with Ada and 3, producing the string Ada: 3."
  },
  {
    id: "foundations-debug-equality",
    trackId: "foundations",
    mode: "debug",
    level: 2,
    concept: "comparison",
    prompt: "What fixes this condition?",
    answer: "Use == for comparison",
    acceptedAnswers: ["use ==", "replace = with ==", "=="],
    choices: ["Use == for comparison", "Indent the if line", "Use := everywhere", "Remove the colon"],
    code: "if status = \"paid\":\n    print(\"ship\")",
    hint: "Assignment and equality comparison are different operations.",
    explanation: "A condition should compare values with ==. A single = assigns a value."
  },
  {
    id: "foundations-while-break",
    trackId: "foundations",
    mode: "pick",
    level: 3,
    concept: "while loops",
    prompt: "What is the final value of count?",
    answer: "3",
    choices: ["1", "2", "3", "4"],
    code: "count = 0\nwhile True:\n    count += 1\n    if count == 3:\n        break",
    hint: "break exits the loop as soon as count reaches 3.",
    explanation: "The loop increments count to 1, 2, then 3. The break stops it there."
  },
  {
    id: "foundations-match-case",
    trackId: "foundations",
    mode: "reverse",
    level: 3,
    concept: "match",
    prompt: "Which syntax starts structural pattern matching?",
    answer: "match value:",
    choices: ["match value:", "switch value:", "case value:", "pattern(value):"],
    hint: "Python uses match with indented case branches.",
    explanation: "match value: starts a pattern matching block, followed by case clauses."
  },
  {
    id: "foundations-scope",
    trackId: "foundations",
    mode: "input",
    level: 3,
    concept: "scope",
    prompt: "What name describes a variable created inside a function?",
    answer: "local",
    acceptedAnswers: ["local variable", "a local variable"],
    choices: ["local", "global", "builtin", "module"],
    hint: "It only exists within that function call.",
    explanation: "A local variable belongs to the function scope where it is assigned."
  },
  {
    id: "foundations-debug-mutable-default",
    trackId: "foundations",
    mode: "debug",
    level: 4,
    concept: "function defaults",
    prompt: "What fixes the shared list bug?",
    answer: "Use None as the default and create a new list inside",
    acceptedAnswers: ["use none default", "default to none", "create a new list inside"],
    choices: [
      "Use None as the default and create a new list inside",
      "Use a tuple and mutate it",
      "Make the list global",
      "Call append twice"
    ],
    code: "def add_item(item, items=[]):\n    items.append(item)\n    return items",
    hint: "Default arguments are created once, not per call.",
    explanation: "Use items=None, then create [] inside the function so each call gets a fresh list."
  },
  {
    id: "data-tuple-unpack",
    trackId: "data",
    mode: "pick",
    level: 3,
    concept: "unpacking",
    prompt: "What is y after unpacking?",
    answer: "20",
    choices: ["10", "20", "(10, 20)", "NameError"],
    code: "x, y = (10, 20)",
    hint: "Values are assigned by position.",
    explanation: "x receives 10 and y receives 20."
  },
  {
    id: "data-set-membership",
    trackId: "data",
    mode: "reverse",
    level: 3,
    concept: "sets",
    prompt: "Which collection is best for fast membership checks with unique values?",
    answer: "set",
    choices: ["set", "list", "tuple", "str"],
    hint: "It uses hashing like dict keys.",
    explanation: "A set stores unique values and supports fast membership checks."
  },
  {
    id: "data-json-loads",
    trackId: "data",
    mode: "input",
    level: 4,
    concept: "JSON",
    prompt: "Which standard module parses JSON text?",
    answer: "json",
    acceptedAnswers: ["json module", "the json module"],
    choices: ["json", "csv", "pickle", "pathlib"],
    code: "import json\nprofile = json.loads('{\"name\": \"Ada\"}')",
    hint: "It is named after the data format.",
    explanation: "The json module converts JSON strings into Python dicts, lists, strings, numbers, and booleans."
  },
  {
    id: "data-debug-copy",
    trackId: "data",
    mode: "debug",
    level: 4,
    concept: "aliasing",
    prompt: "What fixes accidental mutation of the original list?",
    answer: "Copy the list before mutating it",
    acceptedAnswers: ["copy the list", "make a copy", "use items.copy()"],
    choices: ["Copy the list before mutating it", "Rename the variable", "Use print first", "Sort twice"],
    code: "backup = items\nbackup.append(\"new\")",
    hint: "Two names can point at the same list.",
    explanation: "Use items.copy() or list(items) when you need an independent shallow copy."
  },
  {
    id: "data-pathlib",
    trackId: "data",
    mode: "pick",
    level: 5,
    concept: "paths",
    prompt: "Which class gives object-oriented filesystem paths?",
    answer: "Path",
    choices: ["Path", "File", "Folder", "Open"],
    code: "from pathlib import Path\nroot = Path(\"data\")",
    hint: "It comes from pathlib.",
    explanation: "pathlib.Path models paths with methods for joining, reading, and inspecting files."
  },
  {
    id: "data-csv-dictreader",
    trackId: "data",
    mode: "reverse",
    level: 5,
    concept: "CSV",
    prompt: "Which helper reads CSV rows as dictionaries keyed by column name?",
    answer: "csv.DictReader",
    choices: ["csv.DictReader", "csv.ReaderDict", "json.loads", "Path.csv"],
    hint: "It is in the csv module.",
    explanation: "csv.DictReader maps each row to a dict using the header row as keys."
  },
  {
    id: "data-generator-expression",
    trackId: "data",
    mode: "input",
    level: 5,
    concept: "lazy iteration",
    prompt: "What kind of expression is (n * n for n in nums)?",
    answer: "generator expression",
    acceptedAnswers: ["generator", "genexpr"],
    choices: ["generator expression", "list literal", "tuple literal", "dict comprehension"],
    hint: "Parentheses plus for can create a lazy stream of values.",
    explanation: "A generator expression produces values lazily instead of building a whole list immediately."
  },
  {
    id: "data-debug-encoding",
    trackId: "data",
    mode: "debug",
    level: 6,
    concept: "file encoding",
    prompt: "What makes text file reads portable?",
    answer: "Pass encoding=\"utf-8\" to open",
    acceptedAnswers: ["encoding utf-8", "use utf-8", "pass encoding"],
    choices: ["Pass encoding=\"utf-8\" to open", "Use binary mode for all text", "Remove newlines", "Use eval"],
    code: "with open(\"notes.txt\") as file:\n    text = file.read()",
    hint: "Default encodings vary by environment.",
    explanation: "Specifying encoding=\"utf-8\" avoids surprises across operating systems and locales."
  },
  {
    id: "design-higher-order",
    trackId: "design",
    mode: "pick",
    level: 5,
    concept: "higher-order functions",
    prompt: "What does apply(double, 4) return?",
    answer: "8",
    choices: ["4", "8", "double", "None"],
    code: "def double(n):\n    return n * 2\n\ndef apply(fn, value):\n    return fn(value)",
    hint: "apply calls the function it receives.",
    explanation: "apply passes 4 into double, and double returns 8."
  },
  {
    id: "design-dependency-injection",
    trackId: "design",
    mode: "reverse",
    level: 5,
    concept: "dependency injection",
    prompt: "Which design makes code easier to test?",
    answer: "Pass the dependency in",
    choices: ["Pass the dependency in", "Create globals everywhere", "Hide imports in loops", "Catch every exception"],
    hint: "Tests can provide a fake dependency.",
    explanation: "Passing a dependency into a function or class makes behavior easier to replace in tests."
  },
  {
    id: "design-typing-list",
    trackId: "design",
    mode: "input",
    level: 6,
    concept: "type hints",
    prompt: "What type hint means a list of strings?",
    answer: "list[str]",
    acceptedAnswers: ["List[str]", "list of str", "list[str]"],
    choices: ["list[str]", "str[]", "list(string)", "array<str>"],
    hint: "Modern Python uses built-in generic types.",
    explanation: "list[str] documents that each item in the list should be a string."
  },
  {
    id: "design-debug-broad-except",
    trackId: "design",
    mode: "debug",
    level: 6,
    concept: "error handling",
    prompt: "What improves this error handling?",
    answer: "Catch a specific exception",
    acceptedAnswers: ["specific exception", "catch valueerror", "catch a specific exception"],
    choices: ["Catch a specific exception", "Ignore every error", "Return random values", "Use bare raise first"],
    code: "try:\n    count = int(raw)\nexcept Exception:\n    count = 0",
    hint: "Broad catches can hide real bugs.",
    explanation: "Catching ValueError documents the expected failure and lets unexpected bugs surface."
  },
  {
    id: "design-contextmanager",
    trackId: "design",
    mode: "pick",
    level: 7,
    concept: "resource management",
    prompt: "Which protocol powers the with statement?",
    answer: "context manager",
    acceptedAnswers: ["context managers"],
    choices: ["context manager", "iterator only", "decorator only", "metaclass"],
    hint: "It defines enter and exit behavior.",
    explanation: "A context manager runs setup on entry and cleanup on exit from a with block."
  },
  {
    id: "design-pytest-fixture",
    trackId: "design",
    mode: "reverse",
    level: 7,
    concept: "fixtures",
    prompt: "In pytest, what reusable setup function can tests request by name?",
    answer: "fixture",
    acceptedAnswers: ["pytest fixture"],
    choices: ["fixture", "thread", "wheel", "logger"],
    hint: "It is decorated with @pytest.fixture.",
    explanation: "A fixture supplies reusable setup data or resources to tests."
  },
  {
    id: "design-packaging",
    trackId: "design",
    mode: "input",
    level: 7,
    concept: "packaging",
    prompt: "Which file commonly declares modern Python project metadata?",
    answer: "pyproject.toml",
    acceptedAnswers: ["pyproject", "pyproject.toml"],
    choices: ["pyproject.toml", "requirements.lock", "project.json", "metadata.py"],
    hint: "It is TOML and starts with pyproject.",
    explanation: "pyproject.toml is the standard home for build-system and project metadata."
  },
  {
    id: "design-debug-circular-import",
    trackId: "design",
    mode: "debug",
    level: 8,
    concept: "module boundaries",
    prompt: "What fixes two modules importing each other for shared helpers?",
    answer: "Move shared helpers to a third module",
    acceptedAnswers: ["third module", "extract shared helpers", "move shared code"],
    choices: [
      "Move shared helpers to a third module",
      "Add more top-level imports",
      "Use eval to delay imports",
      "Delete tests"
    ],
    code: "orders.py imports users.py\nusers.py imports orders.py",
    hint: "Break the cycle by extracting the shared dependency.",
    explanation: "A third module lets both files depend on shared code without depending on each other."
  },
  {
    id: "mastery-descriptor",
    trackId: "mastery",
    mode: "pick",
    level: 8,
    concept: "descriptors",
    prompt: "Which method makes an object control attribute reads?",
    answer: "__get__",
    choices: ["__get__", "__read__", "__attr__", "__call__"],
    hint: "Descriptors implement get, set, or delete hooks.",
    explanation: "__get__ lets a descriptor customize what happens when an attribute is read."
  },
  {
    id: "mastery-protocol",
    trackId: "mastery",
    mode: "reverse",
    level: 8,
    concept: "structural typing",
    prompt: "Which typing construct describes behavior without requiring inheritance?",
    answer: "Protocol",
    choices: ["Protocol", "Enum", "Final", "Literal"],
    hint: "It supports duck typing in static analysis.",
    explanation: "Protocol describes required methods or attributes by structure rather than base class."
  },
  {
    id: "mastery-lru-cache",
    trackId: "mastery",
    mode: "input",
    level: 9,
    concept: "memoization",
    prompt: "Which functools decorator caches recent function results?",
    answer: "lru_cache",
    acceptedAnswers: ["@lru_cache", "functools.lru_cache"],
    choices: ["lru_cache", "cached_property", "wraps", "partial"],
    code: "from functools import lru_cache",
    hint: "It keeps least-recently-used results.",
    explanation: "functools.lru_cache memoizes calls so repeated inputs can return quickly."
  },
  {
    id: "mastery-debug-gil",
    trackId: "mastery",
    mode: "debug",
    level: 9,
    concept: "concurrency",
    prompt: "What is a better fit for CPU-bound parallel work in CPython?",
    answer: "Use multiprocessing",
    acceptedAnswers: ["multiprocessing", "processes", "process pool"],
    choices: ["Use multiprocessing", "Add more threads only", "Use sleep", "Disable the event loop"],
    code: "for task in cpu_heavy_tasks:\n    threading.Thread(target=work, args=(task,)).start()",
    hint: "CPU-bound Python threads are limited by the GIL in CPython.",
    explanation: "Separate processes can run Python bytecode on multiple CPU cores."
  },
  {
    id: "mastery-taskgroup",
    trackId: "mastery",
    mode: "pick",
    level: 9,
    concept: "structured concurrency",
    prompt: "Which asyncio API groups child tasks with scoped cancellation?",
    answer: "TaskGroup",
    choices: ["TaskGroup", "ThreadGroup", "FutureList", "QueuePool"],
    code: "async with asyncio.TaskGroup() as group:\n    group.create_task(fetch())",
    hint: "It is an async context manager.",
    explanation: "asyncio.TaskGroup keeps related tasks scoped and handles failure propagation more cleanly."
  },
  {
    id: "mastery-profiling",
    trackId: "mastery",
    mode: "reverse",
    level: 9,
    concept: "profiling",
    prompt: "Which standard module profiles function call time?",
    answer: "cProfile",
    choices: ["cProfile", "timeit only", "logging", "traceback"],
    hint: "It is the C-backed profiler in the standard library.",
    explanation: "cProfile records call counts and timing so you can find real performance bottlenecks."
  },
  {
    id: "mastery-wheel",
    trackId: "mastery",
    mode: "input",
    level: 10,
    concept: "distribution",
    prompt: "What package format usually ends with .whl?",
    answer: "wheel",
    acceptedAnswers: ["python wheel", "whl"],
    choices: ["wheel", "sdist", "venv", "egg-info"],
    hint: "It is the built distribution format pip installs quickly.",
    explanation: "A wheel is a built package archive that pip can install without rebuilding from source."
  },
  {
    id: "mastery-debug-observability",
    trackId: "mastery",
    mode: "debug",
    level: 10,
    concept: "observability",
    prompt: "What improves production debugging for a failing background job?",
    answer: "Add structured logs with job identifiers",
    acceptedAnswers: ["structured logs", "add structured logging", "job identifiers"],
    choices: [
      "Add structured logs with job identifiers",
      "Print only success messages",
      "Swallow all exceptions",
      "Retry forever without limits"
    ],
    code: "except Exception:\n    pass",
    hint: "You need enough context to trace a failing job.",
    explanation: "Structured logs with identifiers make failures searchable and connect errors to the job that caused them."
  }
];

export const curriculumTopics: CurriculumTopic[] = [
  {
    id: "interpreter-cli",
    trackId: "foundations",
    level: 1,
    concept: "interpreter and CLI",
    answer: "python -m module execution",
    hint: "Run modules with the interpreter so imports resolve like a package.",
    explanation: "Using python -m package.module keeps module execution aligned with Python's import system.",
    code: "python -m my_app.cli"
  },
  {
    id: "source-encoding",
    trackId: "foundations",
    level: 1,
    concept: "source files and encoding",
    answer: "UTF-8 source text",
    hint: "Modern Python source files are text, commonly UTF-8.",
    explanation: "Understanding source encoding prevents broken literals, comments, and cross-platform file issues."
  },
  {
    id: "truthiness",
    trackId: "foundations",
    level: 1,
    concept: "truthiness",
    answer: "empty containers are false",
    hint: "Python uses truth value testing in if and while.",
    explanation: "False, None, zero, and empty containers are falsey; most other objects are truthy.",
    code: "if items:\n    process(items)"
  },
  {
    id: "comparison-identity",
    trackId: "foundations",
    level: 2,
    concept: "equality vs identity",
    answer: "use == for values and is for identity",
    hint: "Two equal values do not have to be the same object.",
    explanation: "== asks whether values compare equal; is asks whether two names point to the same object."
  },
  {
    id: "numeric-model",
    trackId: "foundations",
    level: 2,
    concept: "numeric types",
    answer: "int float Decimal Fraction",
    hint: "Choose the numeric model that matches the problem.",
    explanation: "Python has arbitrary precision integers, binary floats, decimals for money-like precision, and fractions for rational math."
  },
  {
    id: "string-formatting",
    trackId: "foundations",
    level: 2,
    concept: "formatted strings",
    answer: "f-string",
    hint: "Use readable interpolation for values in output.",
    explanation: "Formatted string literals keep simple runtime expressions close to the text they produce.",
    code: "f\"Hello {name}\""
  },
  {
    id: "branching-match",
    trackId: "foundations",
    level: 2,
    concept: "structural pattern matching",
    answer: "match statement",
    hint: "Use pattern matching when shape matters more than one boolean.",
    explanation: "match can dispatch on literals, classes, mappings, sequences, and guarded patterns."
  },
  {
    id: "loop-control",
    trackId: "foundations",
    level: 3,
    concept: "loop control",
    answer: "break continue else",
    hint: "Loops can exit early, skip an iteration, or run an else block when no break occurs.",
    explanation: "break, continue, and loop else let simple loops express search and retry control precisely."
  },
  {
    id: "function-parameters",
    trackId: "foundations",
    level: 3,
    concept: "function parameters",
    answer: "positional-only and keyword-only parameters",
    hint: "Python can control how callers pass arguments.",
    explanation: "The / and * markers make public APIs clearer by separating positional and keyword-only parameters."
  },
  {
    id: "exceptions",
    trackId: "foundations",
    level: 3,
    concept: "exception handling",
    answer: "raise specific exceptions",
    hint: "Catch what you can handle and let the rest fail loudly.",
    explanation: "Specific exceptions preserve failure meaning and avoid hiding defects behind broad except blocks.",
    code: "try:\n    load_config()\nexcept FileNotFoundError:\n    create_default_config()"
  },
  {
    id: "context-manager",
    trackId: "foundations",
    level: 3,
    concept: "context managers",
    answer: "with statement",
    hint: "Use deterministic setup and cleanup for files, locks, and transactions.",
    explanation: "The with statement calls enter and exit hooks so resources are cleaned up even after exceptions."
  },
  {
    id: "module-imports",
    trackId: "foundations",
    level: 4,
    concept: "modules and imports",
    answer: "absolute imports",
    hint: "Package code should import names from stable module paths.",
    explanation: "Absolute imports reduce ambiguity and make package boundaries easier to follow."
  },
  {
    id: "virtualenv",
    trackId: "foundations",
    level: 4,
    concept: "virtual environments",
    answer: "python -m venv",
    hint: "Keep project dependencies isolated from the system interpreter.",
    explanation: "venv creates a per-project environment so installed packages do not collide across projects."
  },
  {
    id: "pip-tools",
    trackId: "foundations",
    level: 4,
    concept: "package installation",
    answer: "pip install",
    hint: "Install from an index or local wheel into the active environment.",
    explanation: "pip is the standard installer used with virtual environments and lockfile workflows."
  },
  {
    id: "debugger-basics",
    trackId: "foundations",
    level: 4,
    concept: "debugging basics",
    answer: "breakpoint()",
    hint: "Pause execution and inspect state instead of guessing.",
    explanation: "breakpoint() enters the configured debugger so a learner can inspect variables and call stack state.",
    code: "def total(items):\n    breakpoint()\n    return sum(items)"
  },
  {
    id: "sequence-operations",
    trackId: "data",
    level: 3,
    concept: "sequence operations",
    answer: "slicing and iteration",
    hint: "Lists, tuples, strings, and ranges share common sequence behavior.",
    explanation: "Slicing and iteration are core tools for transforming ordered data without manual index loops."
  },
  {
    id: "dict-patterns",
    trackId: "data",
    level: 3,
    concept: "dictionary patterns",
    answer: "get setdefault defaultdict Counter",
    hint: "Use the mapping helper that matches the data accumulation problem.",
    explanation: "Python dictionaries support defaults, counting, grouping, and membership checks efficiently."
  },
  {
    id: "set-algebra",
    trackId: "data",
    level: 3,
    concept: "set algebra",
    answer: "union intersection difference",
    hint: "Model uniqueness and membership with sets.",
    explanation: "Set operations express comparisons between collections more clearly than nested loops."
  },
  {
    id: "sorting-key",
    trackId: "data",
    level: 4,
    concept: "sorting with keys",
    answer: "key function",
    hint: "Sort complex objects by a derived value.",
    explanation: "A key function extracts the comparison value once per element and keeps sorting logic explicit."
  },
  {
    id: "comprehensions",
    trackId: "data",
    level: 4,
    concept: "comprehensions",
    answer: "list dict set comprehension",
    hint: "Use a compact expression for map/filter style transformations.",
    explanation: "Comprehensions produce new collections from iterables while keeping the data flow local."
  },
  {
    id: "iterators",
    trackId: "data",
    level: 4,
    concept: "iterator protocol",
    answer: "__iter__ and __next__",
    hint: "Iteration is protocol-based, not limited to lists.",
    explanation: "Objects that return an iterator and produce values with __next__ can be used in for loops."
  },
  {
    id: "generators",
    trackId: "data",
    level: 5,
    concept: "generators",
    answer: "yield",
    hint: "Generate values lazily instead of building a full list.",
    explanation: "yield turns a function into a generator that can stream values one at a time."
  },
  {
    id: "pathlib",
    trackId: "data",
    level: 5,
    concept: "filesystem paths",
    answer: "pathlib.Path",
    hint: "Use object-oriented paths instead of string concatenation.",
    explanation: "pathlib.Path gives portable path joining, reading, writing, globbing, and metadata access."
  },
  {
    id: "json-csv",
    trackId: "data",
    level: 5,
    concept: "structured files",
    answer: "json and csv modules",
    hint: "Use standard parsers for data formats.",
    explanation: "The json and csv modules avoid brittle string splitting when reading and writing structured data."
  },
  {
    id: "datetime-zoneinfo",
    trackId: "data",
    level: 5,
    concept: "dates and time zones",
    answer: "datetime with zoneinfo",
    hint: "Store and compare aware datetimes when zones matter.",
    explanation: "datetime plus zoneinfo models time zones without external dependencies for common cases."
  },
  {
    id: "dataclasses",
    trackId: "data",
    level: 6,
    concept: "data classes",
    answer: "@dataclass",
    hint: "Use generated init, repr, and comparison for plain data objects.",
    explanation: "dataclasses reduce boilerplate when the class mainly groups named fields."
  },
  {
    id: "typing-containers",
    trackId: "data",
    level: 6,
    concept: "typed containers",
    answer: "list[str] and dict[str, int]",
    hint: "Annotate collection element types.",
    explanation: "Parameterized built-in collection types document expected values and help static checkers."
  },
  {
    id: "sqlite",
    trackId: "data",
    level: 6,
    concept: "local relational storage",
    answer: "sqlite3",
    hint: "Use the bundled database for local durable relational data.",
    explanation: "sqlite3 is useful for prototypes, scripts, tests, and small local applications."
  },
  {
    id: "regex",
    trackId: "data",
    level: 6,
    concept: "regular expressions",
    answer: "re module",
    hint: "Use patterns for text validation and extraction.",
    explanation: "The re module handles structured text matching when plain string methods are not enough."
  },
  {
    id: "serialization-boundaries",
    trackId: "data",
    level: 6,
    concept: "serialization boundaries",
    answer: "validate external data",
    hint: "Treat files, APIs, and environment variables as untrusted input.",
    explanation: "Validation protects code from wrong types, missing fields, and unsafe assumptions at boundaries."
  },
  {
    id: "numeric-precision",
    trackId: "data",
    level: 6,
    concept: "numeric precision",
    answer: "Decimal for exact decimal math",
    hint: "Binary float is not ideal for money-like calculations.",
    explanation: "Decimal represents base-10 values predictably when exact decimal rounding is required."
  },
  {
    id: "pure-functions",
    trackId: "design",
    level: 5,
    concept: "pure functions",
    answer: "return values instead of mutating hidden state",
    hint: "Separate calculation from side effects.",
    explanation: "Pure functions are easier to test and compose because outputs depend on explicit inputs."
  },
  {
    id: "module-boundaries",
    trackId: "design",
    level: 5,
    concept: "module boundaries",
    answer: "one module per cohesive responsibility",
    hint: "Group code by domain purpose rather than dumping helpers together.",
    explanation: "Cohesive modules make imports, tests, and ownership easier to reason about."
  },
  {
    id: "custom-exceptions",
    trackId: "design",
    level: 5,
    concept: "custom exceptions",
    answer: "domain-specific exception types",
    hint: "Use meaningful failure names at business boundaries.",
    explanation: "Domain-specific exceptions let callers handle known failures without parsing messages."
  },
  {
    id: "logging",
    trackId: "design",
    level: 5,
    concept: "logging",
    answer: "logging.getLogger(__name__)",
    hint: "Libraries should not print operational messages directly.",
    explanation: "Module loggers let applications configure handlers, levels, and formats centrally."
  },
  {
    id: "testing-pyramid",
    trackId: "design",
    level: 6,
    concept: "testing strategy",
    answer: "unit integration end-to-end tests",
    hint: "Use the cheapest test that proves the behavior.",
    explanation: "A practical test suite mixes fast unit tests with focused integration and workflow checks."
  },
  {
    id: "fixtures",
    trackId: "design",
    level: 6,
    concept: "test fixtures",
    answer: "repeatable setup and teardown",
    hint: "Tests need stable inputs and isolated side effects.",
    explanation: "Fixtures reduce duplication while keeping setup controlled and explicit."
  },
  {
    id: "dependency-injection",
    trackId: "design",
    level: 6,
    concept: "dependency injection",
    answer: "pass collaborators explicitly",
    hint: "Make external services replaceable in tests.",
    explanation: "Passing dependencies makes code easier to test and avoids hidden global coupling."
  },
  {
    id: "decorators",
    trackId: "design",
    level: 6,
    concept: "decorators",
    answer: "wrapper function preserving behavior",
    hint: "Use decorators for cross-cutting behavior around callables.",
    explanation: "Decorators can add caching, validation, retries, or instrumentation while preserving a function interface."
  },
  {
    id: "classes-composition",
    trackId: "design",
    level: 7,
    concept: "composition over inheritance",
    answer: "compose small collaborators",
    hint: "Prefer object relationships that stay easy to replace.",
    explanation: "Composition often creates clearer extension points than deep inheritance trees."
  },
  {
    id: "protocols",
    trackId: "design",
    level: 7,
    concept: "protocol-oriented design",
    answer: "typing.Protocol",
    hint: "Describe behavior required from a collaborator.",
    explanation: "Protocol types capture structural interfaces without forcing inheritance."
  },
  {
    id: "configuration",
    trackId: "design",
    level: 7,
    concept: "configuration",
    answer: "environment plus typed settings",
    hint: "Separate deploy-specific values from code.",
    explanation: "Typed settings make configuration explicit, validated, and safe to vary by environment."
  },
  {
    id: "api-clients",
    trackId: "design",
    level: 7,
    concept: "API client design",
    answer: "timeouts retries and typed responses",
    hint: "Network calls fail and should not hang forever.",
    explanation: "A robust client defines timeouts, bounded retries, and response parsing at the boundary."
  },
  {
    id: "packaging-pyproject",
    trackId: "design",
    level: 7,
    concept: "pyproject packaging",
    answer: "pyproject.toml",
    hint: "Modern Python packaging metadata belongs in one standard project file.",
    explanation: "pyproject.toml declares build system, metadata, dependencies, and tool configuration."
  },
  {
    id: "cli-argparse",
    trackId: "design",
    level: 7,
    concept: "command-line interfaces",
    answer: "argparse",
    hint: "Parse options and subcommands with a standard library parser.",
    explanation: "argparse gives help text, validation, defaults, and subcommands without hand-parsing argv."
  },
  {
    id: "docstrings",
    trackId: "design",
    level: 7,
    concept: "documentation strings",
    answer: "docstring",
    hint: "Document public modules, classes, functions, and tricky behavior where users read help().",
    explanation: "Docstrings become runtime documentation and support generated API references."
  },
  {
    id: "asyncio-tasks",
    trackId: "mastery",
    level: 8,
    concept: "async tasks",
    answer: "asyncio.create_task",
    hint: "Schedule concurrent coroutine work under an event loop.",
    explanation: "create_task schedules a coroutine and returns a Task that can be awaited or cancelled."
  },
  {
    id: "task-groups",
    trackId: "mastery",
    level: 8,
    concept: "structured concurrency",
    answer: "asyncio.TaskGroup",
    hint: "Group related async tasks so failures and cancellation are scoped.",
    explanation: "TaskGroup coordinates child tasks and propagates exceptions in a structured way."
  },
  {
    id: "threading",
    trackId: "mastery",
    level: 8,
    concept: "threading",
    answer: "use threads for blocking I/O",
    hint: "Threads can overlap waiting on external resources.",
    explanation: "Threads can help I/O-bound work, while CPU-bound work is limited by the GIL in CPython."
  },
  {
    id: "multiprocessing",
    trackId: "mastery",
    level: 8,
    concept: "multiprocessing",
    answer: "separate processes for CPU-bound work",
    hint: "Use multiple interpreters/processes when CPU parallelism matters.",
    explanation: "multiprocessing bypasses the per-process interpreter lock by running work in separate processes."
  },
  {
    id: "profiling-memory",
    trackId: "mastery",
    level: 8,
    concept: "performance profiling",
    answer: "measure before optimizing",
    hint: "Guessing performance bottlenecks wastes time.",
    explanation: "Profilers and benchmarks reveal hot paths so optimizations target real costs."
  },
  {
    id: "advanced-typing",
    trackId: "mastery",
    level: 9,
    concept: "advanced typing",
    answer: "TypeVar ParamSpec Literal TypedDict",
    hint: "Use richer typing tools when simple annotations cannot express API contracts.",
    explanation: "Advanced typing helps model generic functions, callable signatures, literal choices, and structured dictionaries."
  },
  {
    id: "descriptors",
    trackId: "mastery",
    level: 9,
    concept: "descriptors",
    answer: "__get__ __set__ __delete__",
    hint: "Descriptors power properties, methods, and many ORMs.",
    explanation: "Descriptor methods let objects customize attribute access on classes and instances."
  },
  {
    id: "metaclasses",
    trackId: "mastery",
    level: 9,
    concept: "metaclasses",
    answer: "class creation customization",
    hint: "Reach for metaclasses only when class definitions themselves need policy.",
    explanation: "Metaclasses customize how classes are built, but simpler decorators or factories are often better."
  },
  {
    id: "security",
    trackId: "mastery",
    level: 9,
    concept: "Python security",
    answer: "avoid eval and validate input",
    hint: "Dynamic execution and untrusted deserialization create high-risk boundaries.",
    explanation: "Secure Python code avoids arbitrary execution, validates input, and treats external data as hostile."
  },
  {
    id: "observability",
    trackId: "mastery",
    level: 9,
    concept: "observability",
    answer: "logs metrics traces",
    hint: "Production systems need signals that explain behavior after deployment.",
    explanation: "Logs, metrics, and traces make failures diagnosable without attaching a debugger."
  },
  {
    id: "deployment",
    trackId: "mastery",
    level: 10,
    concept: "deployment",
    answer: "repeatable builds and pinned dependencies",
    hint: "Production should not depend on whatever happens to install today.",
    explanation: "Pinned dependencies and repeatable build artifacts make deploys auditable and rollback-friendly."
  },
  {
    id: "web-services",
    trackId: "mastery",
    level: 10,
    concept: "web service boundaries",
    answer: "request validation and response contracts",
    hint: "APIs are external boundaries and need explicit contracts.",
    explanation: "Validation and typed response shapes keep web services predictable for clients and maintainers."
  },
  {
    id: "database-access",
    trackId: "mastery",
    level: 10,
    concept: "database access",
    answer: "transactions and parameterized queries",
    hint: "Database boundaries need consistency and injection safety.",
    explanation: "Transactions preserve invariants, and parameters keep query data separate from SQL code."
  },
  {
    id: "architecture",
    trackId: "mastery",
    level: 10,
    concept: "application architecture",
    answer: "domain boundaries and explicit dependencies",
    hint: "Large Python systems need clear ownership and dependency direction.",
    explanation: "Good architecture keeps business rules isolated from frameworks, storage, and transport details."
  },
  {
    id: "maintenance",
    trackId: "mastery",
    level: 10,
    concept: "long-term maintenance",
    answer: "tests types linting and changelogs",
    hint: "Sustained projects need feedback loops and recorded decisions.",
    explanation: "Tests, types, linting, and changelogs keep changes reviewable and reduce regression risk."
  }
];

export const drills: PythonDrill[] = [...baseDrills, ...buildCurriculumDrills("python-full", curriculumTopics)];
