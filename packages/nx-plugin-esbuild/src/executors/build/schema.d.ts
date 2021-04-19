import type { AssetsItem, FileInputOutput } from 'nx-plugin-devkit';
import type { Insert, FormattedInsert } from './lib/types';

// TODO: options to support
// Define
// Format
// Inject
// Loader
// Outdir & Outfile
// Platform
// Splitting
// Target
// Write
// Asset Names
// Charset
// Chunk names
// Global name
// Log level & limit
// Out extensions
// Outbase
// Public path
// Resolve Extensions
// Source root
// Tree shaking

export interface ESBuildExecutorSchema {
  // required options
  main: string;
  tsConfig: string;
  outputPath: string;

  assets?: string[] | AssetsItem[];
  inserts?: string[] | Insert[];

  // optional options with default values
  watch: boolean;
  skipTypeCheck: boolean;
  sourceMap: boolean;
  metaFile: boolean;
  extractLicenses: boolean;
  minify: boolean;
  bundle: boolean;
  // default as "all", and will use esbuild-plugin-node-externals as handler
  externalDependencies: 'all' | 'none' | string[];

  // nx options
  buildLibsFromSource: boolean;
  generatePackageJson: boolean;

  // plugin options
  // TODO: support swc
  decoratorHandler: 'tsc' | 'swc' | 'none';
  // TODO: add plugins below to schema when buildEnd hook released.
  // TODO: support plugin-specified options
  fileSizePlugin: boolean;
  hashPlugin: boolean;
  htmlPlugin: boolean;
  ignorePlugin: boolean;
  notifierPlugin: boolean;
  circularDepsPlugin: boolean;
}

export interface NormalizedESBuildExecutorSchema extends ESBuildExecutorSchema {
  projectName: string;
  workspaceRoot: string;
  projectRoot: string;
  projectSourceRoot: string;
  assets: FileInputOutput[];
  inserts: FormattedInsert[];
}
