export namespace Util {
    export function arrayToReadableString(array: unknown[]): string {
        let outStr = "[";

        for (const entry of array) {
            outStr += Number(entry);

            if (array.indexOf(entry) < array.length - 1) {
                outStr += ", ";
            }
        }

        outStr += "]";

        return outStr;
    }

    export function isValidNumber(input: string, allowDecimals: boolean = true): boolean {
        const inputNumber = Number(input);
        if (inputNumber == undefined || isNaN(inputNumber)) {
            return false;
        } else if (!allowDecimals && Math.round(inputNumber) !== inputNumber) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Placeholders are case-sensitive. Placeholders must be wrapped with % in the target string to be replaced
     * 
     * @param placeholders A map of placeholder strings (without %) mapped to the replacement for that placeholder 
     */
    export function substitutePlaceholders(target: string, placeholders: Map<string, string>): string {
        let newString = target;
        for (const [placeholder, replacement] of placeholders.entries()) {
            newString = newString.replace(`%${placeholder}%`, replacement);
        }

        return newString;
    }

    export function round(number: number, decimals: number = 0): number {
        const decimalFactor = 10 ** decimals;
        return Math.round(number * decimalFactor) / decimalFactor;
    }

    export function arrayRemove<T>(array: T[], element: T): void {
        const index = array.indexOf(element);
        if (index === -1) {
            return;
        }
        
        array.splice(index, 1);
    }

    export function mapEntriesAsArray<K, V>(map: Map<K, V>): [K, V][] {
        const entries: [K, V][] = [];

        for (const entry of map.entries()) {
            entries.push(entry);
        }

        return entries;
    }

    /**
     * Will set `key` to 1 if it doesn't exist in the map yet
     */
    export function mapIncrementValue<K>(map: Map<K, number>, key: K): void {
        map.set(key, (map.get(key) ?? 0) + 1);
    }
    
        /**
     * Uses {@link LoopInGameThreadWithDelay}
     * 
     * @param callback Return `true` to cancel the loop
     */
    export function loop(delayMillis: number, callback: () => boolean): void {
        const handle = setInterval(() => {
            const cancel = callback();

            if (cancel) {
                clearInterval(handle);
            }
        }, delayMillis);
    }

    export function executeWithRetries<TResult>(work: () => [success: boolean, result: TResult | undefined], completedCallback: (success: boolean, result: TResult | undefined) => void, retries: number = 5, retryDelayMillis: number = 2000): void {        
        let currentTries = 0;
        Util.loop(retryDelayMillis, () => {
            const [success, result] = work();
            let cancel = true;

            if (!success) {
                cancel = currentTries >= retries;
            }

            if (cancel) {
                completedCallback(success, result);

                return true;
            } else {
                currentTries++;

                return false;
            }
        });
    }
}