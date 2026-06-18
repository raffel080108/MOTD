/**
 * Class for safely referencing `UObject`s
 */
export class UObjectContainer<T extends UE4SSLUObject> {
    protected object: T | undefined;
    protected searchingForNewObject = false;

    public constructor(object?: T) {
        if (object != undefined) {
            this.set(object);
        }
    }

    /**
     * @returns `object`, if `object` is not `undefined` and `object.isValid()` is `true`, otherwise `undefined`
     */
    public get(): T | undefined {
        if (this.object == undefined) {
            return undefined;
        }

        if (!this.object.IsValid()) {
            this.object = undefined;
            return undefined;
        }

        return this.object;
    }

    /**
     * Will only succeed if `newObject.isValid()` is `true`
     */
    public set(newObject: T | undefined): void {
        if (newObject == undefined) {
            this.object = undefined;
            return;
        }
        
        if (!newObject.IsValid()) {
            return;
        }

        this.object = newObject;
    }

    /**
     * @returns `false` if `object` is `undefined`, otherwise returns result of `object.IsValid()`
     */
    public isValid(): boolean {
        return this.object != undefined ? this.object.IsValid() : false;
    }
}