declare interface UMovieGraphMP4EncoderNode extends UMovieGraphVideoOutputNode {
    readonly __properties_UMovieGraphMP4EncoderNode: {
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
        OCIOContext: TMap<string, string>;
    };
    readonly __staticRegistry: 
        UMovieGraphVideoOutputNode['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieGraphMP4EncoderNode['__properties_UMovieGraphMP4EncoderNode'] &
        UMovieGraphVideoOutputNode['__propertyRegistry'];
}

declare interface UMoviePipelineMP4EncoderOutput extends UMoviePipelineVideoOutputBase {
    readonly __properties_UMoviePipelineMP4EncoderOutput: {
        EncodingRateControl: EMoviePipelineMP4EncodeRateControlMode;
        AverageBitrateInMbps: number;
        MaxBitrateInMbps: number;
        ConstantRateFactor: number;
        EncodingProfile: EMoviePipelineMP4EncodeProfile;
        EncodingLevel: EMoviePipelineMP4EncodeLevel;
        bIncludeAudio: boolean;
    };
    readonly __staticRegistry: 
        UMoviePipelineVideoOutputBase['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePipelineMP4EncoderOutput['__properties_UMoviePipelineMP4EncoderOutput'] &
        UMoviePipelineVideoOutputBase['__propertyRegistry'];
}

