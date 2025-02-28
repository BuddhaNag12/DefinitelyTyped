// Type definitions for git-config-path 2.0
// Project: https://github.com/jonschlinkert/git-config-path
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Nicholas Nelson <https://github.com/nelsonni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = gitConfigPath;

declare function gitConfigPath(global?: "global"): string | null;
