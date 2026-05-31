import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "java-foundations",
    title: "Java Foundations",
    level: "Beginner",
    focus: "JDK tools, syntax, classes, exceptions",
    accent: "#d66a32"
  },
  {
    id: "java-oop-collections",
    title: "Objects and Collections",
    level: "Builder",
    focus: "object design, generics, collections, streams",
    accent: "#4f8dd8"
  },
  {
    id: "java-runtime",
    title: "Runtime Fluency",
    level: "Practitioner",
    focus: "JVM, modules, concurrency, I/O, diagnostics",
    accent: "#5fbf8f"
  },
  {
    id: "java-expertise",
    title: "Java Expertise",
    level: "Expertise",
    focus: "performance, security, packaging, compatibility",
    accent: "#c8a24b"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("java-foundations", [
    ["JDK vs JRE", "JDK includes developer tools", "Use the JDK for compiling, testing, packaging, and running Java code."],
    ["javac", "compile source to bytecode", "The Java compiler writes .class files from .java source."],
    ["java launcher", "run a class or module", "The java command starts the JVM with a class path or module path."],
    ["source files", "one public class per file", "A public top-level class uses a matching file name."],
    ["main method", "public static void main", "The main method is the conventional command-line entry point."],
    ["primitive types", "fixed basic values", "Primitives store numeric, boolean, or character values directly."],
    ["variables", "declared typed storage", "Java variables have a declared type checked at compile time."],
    ["operators", "typed expressions", "Operators combine values while respecting precedence and type conversion rules."],
    ["control flow", "if switch loops", "Branching and looping shape which statements run."],
    ["arrays", "fixed-length indexed storage", "Arrays keep ordered elements of one component type."],
    ["String", "immutable text object", "String values are objects and cannot be changed in place."],
    ["methods", "named behavior with parameters", "Methods group behavior and define return types and arguments."],
    ["packages", "namespace for classes", "Packages organize classes and avoid naming collisions."],
    ["access modifiers", "control visibility", "public, protected, package-private, and private constrain access."],
    ["exceptions", "checked or unchecked failures", "Exceptions communicate error conditions up the call stack."],
    ["try-with-resources", "automatic close", "Resources implementing AutoCloseable close reliably after the block."],
    ["records", "transparent data carriers", "Records declare shallow immutable carriers with generated members."],
    ["jshell", "interactive Java shell", "JShell is useful for exploring small language and API examples."]
  ]),
  ...defineTopics("java-oop-collections", [
    ["classes and objects", "blueprint and instance", "A class defines state and behavior; an object is a runtime instance."],
    ["constructors", "initialize new objects", "Constructors establish valid object state at creation time."],
    ["inheritance", "extends a base type", "Inheritance reuses and specializes behavior through a class hierarchy."],
    ["interfaces", "behavior contract", "Interfaces define capabilities without requiring one implementation class."],
    ["abstract classes", "partial implementation", "Abstract classes share implementation while leaving required methods open."],
    ["polymorphism", "use objects through a supertype", "Polymorphism lets callers depend on a stable contract."],
    ["generics", "parameterized types", "Generics add compile-time type safety to reusable code."],
    ["collections framework", "standard data containers", "The framework provides List, Set, Queue, Map, and algorithms."],
    ["List", "ordered sequence", "Lists preserve element order and support indexed access where implemented."],
    ["Set", "unique element collection", "Sets model membership without duplicates."],
    ["Map", "key to value association", "Maps lookup values by unique keys."],
    ["Queue and Deque", "ordered work access", "Queues and deques support FIFO, LIFO, and double-ended patterns."],
    ["iterators", "controlled traversal", "Iterators traverse collections without exposing internal storage."],
    ["equals and hashCode", "consistent equality contract", "Hash collections depend on equality and hash code consistency."],
    ["Comparable and Comparator", "define ordering", "Comparable is natural order; Comparator is external ordering."],
    ["streams", "declarative bulk operations", "Streams express map, filter, reduce, and collect pipelines."],
    ["Optional", "explicit possible absence", "Optional represents absence without using null as a return signal."],
    ["immutable objects", "state cannot change after construction", "Immutability simplifies reasoning, sharing, and concurrency."]
  ]),
  ...defineTopics("java-runtime", [
    ["JVM bytecode", "portable instruction format", "The JVM executes class-file bytecode across platforms."],
    ["classpath", "legacy code lookup path", "The classpath locates classes and resources for unnamed-module applications."],
    ["module path", "JPMS module resolution", "The module path resolves named modules and explicit dependencies."],
    ["JPMS modules", "module-info.java", "Modules declare exports, requires, and service relationships."],
    ["garbage collection", "automatic memory reclamation", "The JVM reclaims unreachable objects through collectors."],
    ["memory model", "happens-before rules", "The Java Memory Model defines visibility between threads."],
    ["threads", "concurrent execution units", "Threads run tasks concurrently inside one JVM process."],
    ["virtual threads", "lightweight thread-per-task", "Virtual threads make blocking-style concurrency scale for many tasks."],
    ["executors", "manage task execution", "Executors decouple task submission from thread management."],
    ["synchronization", "mutual exclusion and visibility", "synchronized protects critical sections and publishes changes."],
    ["atomics", "lock-free single-variable updates", "Atomic classes provide compare-and-set based coordination."],
    ["concurrent collections", "thread-safe containers", "Use concurrent collections instead of manually locking shared maps or queues."],
    ["CompletableFuture", "asynchronous completion stage", "CompletableFuture composes async work and dependent callbacks."],
    ["NIO", "buffers channels selectors", "NIO supports scalable and lower-level I/O patterns."],
    ["HTTP Client", "standard HTTP API", "The JDK HTTP client sends synchronous or asynchronous requests."],
    ["JFR", "low-overhead runtime events", "Java Flight Recorder captures production diagnostics."],
    ["unit testing", "automated behavioral checks", "Tests protect code behavior as APIs evolve."],
    ["date and time API", "java.time", "Use java.time types instead of legacy Date and Calendar."]
  ]),
  ...defineTopics("java-expertise", [
    ["performance profiling", "measure hot paths", "Profiling reveals CPU, allocation, locking, and I/O bottlenecks."],
    ["JFR and JMC", "record and inspect runtime events", "Flight recordings support production-friendly diagnostics."],
    ["class data sharing", "preload shared class metadata", "CDS can reduce startup time and memory use."],
    ["preview features", "enable consciously", "Preview language or VM features require explicit flags and migration awareness."],
    ["pattern matching", "type-safe deconstruction", "Pattern matching reduces casting and branching boilerplate."],
    ["TLS security", "configure secure transport", "Java applications need correct trust stores, protocols, and certificate handling."],
    ["cryptography APIs", "use vetted providers", "Do not implement cryptographic primitives by hand."],
    ["foreign function and memory API", "native interop boundary", "FFM gives structured access to native libraries and off-heap memory."],
    ["JNI boundaries", "native code risk", "JNI can break memory safety and portability when misused."],
    ["Maven", "declarative project model", "Maven standardizes dependencies, plugins, and lifecycle phases."],
    ["Gradle", "programmable build automation", "Gradle models builds with tasks, plugins, and dependency graphs."],
    ["dependency management", "version and scope control", "Manage transitive dependencies and vulnerabilities intentionally."],
    ["API design", "stable contracts", "Public APIs should be cohesive, documented, and hard to misuse."],
    ["microservice integration", "network failure aware calls", "Remote calls need timeouts, retries, and idempotency."],
    ["migration strategy", "test across JDK versions", "Upgrade plans should separate source, dependency, and runtime compatibility."],
    ["binary compatibility", "avoid breaking linkage", "Binary compatibility matters for libraries used without recompilation."],
    ["jlink and jpackage", "custom runtime and installer", "Packaging tools reduce runtime size and simplify distribution."],
    ["production troubleshooting", "combine logs dumps metrics", "Use thread dumps, heap dumps, JFR, and logs together."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("java", topics);
