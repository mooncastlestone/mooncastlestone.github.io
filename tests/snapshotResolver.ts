module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) =>
      testPath
        .replace("components/", "__snapshots__/components/") + snapshotExtension,
  
    resolveTestPath: (snapshotFilePath, snapshotExtension) =>
      snapshotFilePath
        .replace("__snapshots__/components/", "components/")
        .slice(0, -snapshotExtension.length),
  
    testPathForConsistencyCheck: "components/some.test.ts",
  }
  