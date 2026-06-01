import type { DomainTextKo } from "@/data/i18n/types";
import { buildFactoryOverlay } from "@/data/i18n/ko/buildFactoryOverlay";

import { topics as dsaTopics } from "@/data/dsaCurriculum";
import { topics as flinkTopics } from "@/data/flinkCurriculum";
import { topics as javaTopics } from "@/data/javaCurriculum";
import { topics as kafkaTopics } from "@/data/kafkaCurriculum";
import { topics as sparkTopics } from "@/data/sparkCurriculum";
import { topics as springTopics } from "@/data/springBootCurriculum";
import { topics as sqldTopics } from "@/data/sqldCurriculum";
import { topics as ipTopics } from "@/data/informationProcessingPracticalCurriculum";
import { topics as linuxTopics } from "@/data/linuxCurriculum";
import { curriculumTopics as pythonTopics } from "@/data/pythonCurriculum";
import { curriculumTopics as postgresTopics } from "@/data/postgresqlCurriculum";
import { curriculumTopics as redisTopics } from "@/data/redisStreamsCurriculum";

import { dsaChrome, dsaTopicsKo } from "@/data/i18n/ko/maps/dsa";
import { flinkChrome, flinkTopicsKo } from "@/data/i18n/ko/maps/flink";
import { javaChrome, javaTopicsKo } from "@/data/i18n/ko/maps/java";
import { kafkaChrome, kafkaTopicsKo } from "@/data/i18n/ko/maps/kafka";
import { sparkChrome, sparkTopicsKo } from "@/data/i18n/ko/maps/spark";
import { springBootChrome, springBootTopicsKo } from "@/data/i18n/ko/maps/spring-boot";
import { sqldChrome, sqldTopicsKo } from "@/data/i18n/ko/maps/sqld";
import {
  informationProcessingPracticalChrome,
  informationProcessingPracticalTopicsKo
} from "@/data/i18n/ko/maps/information-processing-practical";
import { linuxChrome, linuxTopicsKo } from "@/data/i18n/ko/maps/linux";
import { pythonChrome, pythonBaseDrills, pythonTopicsKo } from "@/data/i18n/ko/maps/python";
import { postgresqlChrome, postgresqlBaseDrills, postgresqlTopicsKo } from "@/data/i18n/ko/maps/postgresql";
import { redisStreamsChrome, redisStreamsBaseDrills, redisStreamsTopicsKo } from "@/data/i18n/ko/maps/redis-streams";

export const domainTextKo: Record<string, DomainTextKo> = {
  dsa: buildFactoryOverlay({ prefix: "dsa", topics: dsaTopics, chrome: dsaChrome, topicsKo: dsaTopicsKo }),
  flink: buildFactoryOverlay({ prefix: "flink", topics: flinkTopics, chrome: flinkChrome, topicsKo: flinkTopicsKo }),
  java: buildFactoryOverlay({ prefix: "java", topics: javaTopics, chrome: javaChrome, topicsKo: javaTopicsKo }),
  kafka: buildFactoryOverlay({ prefix: "kafka", topics: kafkaTopics, chrome: kafkaChrome, topicsKo: kafkaTopicsKo }),
  spark: buildFactoryOverlay({ prefix: "spark", topics: sparkTopics, chrome: sparkChrome, topicsKo: sparkTopicsKo }),
  "spring-boot": buildFactoryOverlay({
    prefix: "spring",
    topics: springTopics,
    chrome: springBootChrome,
    topicsKo: springBootTopicsKo
  }),
  sqld: buildFactoryOverlay({ prefix: "sqld", topics: sqldTopics, chrome: sqldChrome, topicsKo: sqldTopicsKo }),
  "information-processing-practical": buildFactoryOverlay({
    prefix: "ip",
    topics: ipTopics,
    chrome: informationProcessingPracticalChrome,
    topicsKo: informationProcessingPracticalTopicsKo
  }),
  linux: buildFactoryOverlay({ prefix: "linux", topics: linuxTopics, chrome: linuxChrome, topicsKo: linuxTopicsKo }),
  python: buildFactoryOverlay({
    prefix: "python-full",
    topics: pythonTopics,
    chrome: pythonChrome,
    topicsKo: pythonTopicsKo,
    baseDrills: pythonBaseDrills
  }),
  postgresql: buildFactoryOverlay({
    prefix: "postgres-full",
    topics: postgresTopics,
    chrome: postgresqlChrome,
    topicsKo: postgresqlTopicsKo,
    baseDrills: postgresqlBaseDrills
  }),
  "redis-streams": buildFactoryOverlay({
    prefix: "redis-full",
    topics: redisTopics,
    chrome: redisStreamsChrome,
    topicsKo: redisStreamsTopicsKo,
    baseDrills: redisStreamsBaseDrills
  })
};
