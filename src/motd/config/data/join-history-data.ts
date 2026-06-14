export class JoinHistoryData {
    public playersJoinCount: Map<string, number> = new Map();
}

export class SerializedJoinHistoryData {
    public readonly playersJoinCount: [string, number][];

    public constructor(playersJoinCount: [string, number][]) {
        this.playersJoinCount = playersJoinCount;
    }
}