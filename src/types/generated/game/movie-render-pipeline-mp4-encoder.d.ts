declare interface UMovieGraphMP4EncoderNode extends UMovieGraphVideoOutputNode {
    bOverride_EncodingRateControl: boolean;
    bOverride_AverageBitrateInMbps: boolean;
    bOverride_MaxBitrateInMbps: boolean;
    bOverride_ConstantRateFactor: boolean;
    bOverride_EncodingProfile: boolean;
    bOverride_EncodingLevel: boolean;
    bOverride_bIncludeAudio: boolean;
    bOverride_OCIOConfiguration: boolean;
    bOverride_OCIOContext: boolean;
    EncodingRateControl: EMoviePipelineMP4EncodeRateControlMode;
    AverageBitrateInMbps: number;
    MaxBitrateInMbps: number;
    ConstantRateFactor: number;
    EncodingProfile: EMoviePipelineMP4EncodeProfile;
    EncodingLevel: EMoviePipelineMP4EncodeLevel;
    bIncludeAudio: boolean;
    OCIOConfiguration: FOpenColorIODisplayConfiguration;
    OCIOContext: Record<FString, FString>;
}
declare const UMovieGraphMP4EncoderNode: UMovieGraphMP4EncoderNode;

declare interface UMoviePipelineMP4EncoderOutput extends UMoviePipelineVideoOutputBase {
    EncodingRateControl: EMoviePipelineMP4EncodeRateControlMode;
    AverageBitrateInMbps: number;
    MaxBitrateInMbps: number;
    ConstantRateFactor: number;
    EncodingProfile: EMoviePipelineMP4EncodeProfile;
    EncodingLevel: EMoviePipelineMP4EncodeLevel;
    bIncludeAudio: boolean;
}
declare const UMoviePipelineMP4EncoderOutput: UMoviePipelineMP4EncoderOutput;

