import { Logger } from "./mod/logger";

export namespace FileSystemUtil {
    export function canFileBeAccessed(filePath: string): boolean {
        const [file] = io.open(filePath);
        
        if (file !== undefined) {
            file.close();
            return true;
        } else {
            return false;
        }
    }

    export function getDirectoryPathFromFilePath(filePath: string): string {
        const [directoryPath] = string.match(filePath, "^.*[/\\]"); 

        return directoryPath;
    }

    export function createDirectory(directoryPath: string): void {
        os.execute(`mkdir "${directoryPath}" 2>nul`);
    }

    export function writeToFile(filePath: string, data: string): boolean {
        if (!canFileBeAccessed(filePath)) {
            FileSystemUtil.createDirectory(FileSystemUtil.getDirectoryPathFromFilePath(filePath));
        }

        const [file, err] = io.open(filePath, "w");
        if (file === undefined) {
            Logger.log(`Error writing file "${filePath}": File system open error: ${err ?? "Unknown error"}`);
            return false;
        }

        const [writeSuccess, writeErr] = file.write(data);
        file.close();

        if (writeSuccess === undefined) {
            Logger.log(`Error writing file "${filePath}": Disk write error: ${writeErr ?? "Failed to commit bytes"}`);
            return false;
        }

        return true;
    }

    export function readFromFile(filePath: string): string | undefined {
        const [file, err] = io.open(filePath, "r");
        if (file === undefined) {
            Logger.log(`Error reading file "${filePath}": File system open error: ${err ?? "Unknown error"}`);
            return undefined;
        }

        const fileContents = file.read("a");
        file.close();

        return fileContents;
    }
}