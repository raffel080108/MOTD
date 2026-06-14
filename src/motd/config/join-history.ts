import { Util } from "../../util/util";
import { ConfigHandlerWithSerialization } from "../../util/mod/config-handler/config-handler-with-serialization";
import { JoinHistoryData, SerializedJoinHistoryData } from "./data/join-history-data";

export class JoinHistory extends ConfigHandlerWithSerialization<JoinHistoryData, SerializedJoinHistoryData> {
    public constructor() {
        super("joinHistory", new JoinHistoryData(), new JoinHistoryData(), (data: JoinHistoryData) => {
            return new SerializedJoinHistoryData(Util.mapEntriesAsArray(data.playersJoinCount));
        }, (serializedData: Partial<SerializedJoinHistoryData>) => {
            const data: Partial<JoinHistoryData> = new JoinHistoryData();

            data.playersJoinCount = new Map(serializedData.playersJoinCount);

            return data;
        });
    }
}