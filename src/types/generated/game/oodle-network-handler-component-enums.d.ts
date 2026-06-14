declare const enum EOodleNetResult {
    Unknown = 0,
    Success = 1,
    OodleDecodeFailed = 2,
    OodleSerializePayloadFail = 3,
    OodleBadDecompressedLength = 4,
    OodleNoDictionary = 5
}

declare const enum EOodleNetworkEnableMode {
    AlwaysEnabled = 0,
    WhenCompressedPacketReceived = 1
}

