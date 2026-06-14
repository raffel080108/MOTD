declare interface FSequencerScriptingRange {
    bHasStart: boolean;
    bHasEnd: boolean;
    InclusiveStart: number;
    ExclusiveEnd: number;
    InternalRate: FFrameRate;
}
declare const FSequencerScriptingRange: FSequencerScriptingRange;

declare interface UMovieSceneBindingExtensions extends UBlueprintFunctionLibrary {
    SetSpawnableBindingID(InBinding: FMovieSceneBindingProxy, SpawnableBindingID: FMovieSceneObjectBindingID): void;
    SetSortingOrder(InBinding: FMovieSceneBindingProxy, SortingOrder: number): void;
    SetParent(InBinding: FMovieSceneBindingProxy, InParentBinding: FMovieSceneBindingProxy): void;
    SetName(InBinding: FMovieSceneBindingProxy, InName: string | FString): void;
    SetDisplayName(InBinding: FMovieSceneBindingProxy, InDisplayName: FText): void;
    RemoveTrack(InBinding: FMovieSceneBindingProxy, TrackToRemove: UMovieSceneTrack): void;
    Remove(InBinding: FMovieSceneBindingProxy): void;
    NotEqual_MovieSceneBindingProxy(A: FMovieSceneBindingProxy, B: FMovieSceneBindingProxy): boolean;
    MoveBindingContents(SourceBindingId: FMovieSceneBindingProxy, DestinationBindingId: FMovieSceneBindingProxy): void;
    IsValid(InBinding: FMovieSceneBindingProxy): boolean;
    GetTracks(InBinding: FMovieSceneBindingProxy): TArray<UMovieSceneTrack>;
    GetSortingOrder(InBinding: FMovieSceneBindingProxy): number;
    GetPossessedObjectClass(InBinding: FMovieSceneBindingProxy): UClass;
    GetParent(InBinding: FMovieSceneBindingProxy): FMovieSceneBindingProxy;
    GetObjectTemplate(InBinding: FMovieSceneBindingProxy): UObject;
    GetName(InBinding: FMovieSceneBindingProxy): FString;
    GetID(InBinding: FMovieSceneBindingProxy): FGuid;
    GetDisplayName(InBinding: FMovieSceneBindingProxy): FText;
    GetChildPossessables(InBinding: FMovieSceneBindingProxy): TArray<FMovieSceneBindingProxy>;
    FindTracksByType(InBinding: FMovieSceneBindingProxy, TrackType: TSubclassOf<UMovieSceneTrack>): TArray<UMovieSceneTrack>;
    FindTracksByExactType(InBinding: FMovieSceneBindingProxy, TrackType: TSubclassOf<UMovieSceneTrack>): TArray<UMovieSceneTrack>;
    EqualEqual_MovieSceneBindingProxy(A: FMovieSceneBindingProxy, B: FMovieSceneBindingProxy): boolean;
    AddTrack(InBinding: FMovieSceneBindingProxy, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack;
    IsValid(): boolean;
}
declare const UMovieSceneBindingExtensions: UMovieSceneBindingExtensions;

declare interface UMovieSceneDoubleVectorTrackExtensions extends UBlueprintFunctionLibrary {
    SetNumChannelsUsed(track: UMovieSceneDoubleVectorTrack, InNumChannelsUsed: number): void;
    GetNumChannelsUsed(track: UMovieSceneDoubleVectorTrack): number;
}
declare const UMovieSceneDoubleVectorTrackExtensions: UMovieSceneDoubleVectorTrackExtensions;

declare interface UMovieSceneEventTrackExtensions extends UBlueprintFunctionLibrary {
    GetBoundObjectPropertyClass(EventKey: FMovieSceneEvent): UClass;
    AddEventTriggerSection(InTrack: UMovieSceneEventTrack): UMovieSceneEventTriggerSection;
    AddEventRepeaterSection(InTrack: UMovieSceneEventTrack): UMovieSceneEventRepeaterSection;
}
declare const UMovieSceneEventTrackExtensions: UMovieSceneEventTrackExtensions;

declare interface UMovieSceneFloatVectorTrackExtensions extends UBlueprintFunctionLibrary {
    SetNumChannelsUsed(track: UMovieSceneFloatVectorTrack, InNumChannelsUsed: number): void;
    GetNumChannelsUsed(track: UMovieSceneFloatVectorTrack): number;
}
declare const UMovieSceneFloatVectorTrackExtensions: UMovieSceneFloatVectorTrackExtensions;

declare interface UMovieSceneFolderExtensions extends UBlueprintFunctionLibrary {
    SetFolderName(Folder: UMovieSceneFolder, InFolderName: FName): boolean;
    SetFolderColor(Folder: UMovieSceneFolder, InFolderColor: FColor): boolean;
    RemoveChildTrack(Folder: UMovieSceneFolder, InTrack: UMovieSceneTrack): boolean;
    RemoveChildObjectBinding(Folder: UMovieSceneFolder, InObjectBinding: FMovieSceneBindingProxy): boolean;
    RemoveChildFolder(TargetFolder: UMovieSceneFolder, FolderToRemove: UMovieSceneFolder): boolean;
    GetFolderName(Folder: UMovieSceneFolder): FName;
    GetFolderColor(Folder: UMovieSceneFolder): FColor;
    GetChildTracks(Folder: UMovieSceneFolder): TArray<UMovieSceneTrack>;
    GetChildObjectBindings(Folder: UMovieSceneFolder): TArray<FMovieSceneBindingProxy>;
    GetChildFolders(Folder: UMovieSceneFolder): TArray<UMovieSceneFolder>;
    AddChildTrack(Folder: UMovieSceneFolder, InTrack: UMovieSceneTrack): boolean;
    AddChildObjectBinding(Folder: UMovieSceneFolder, InObjectBinding: FMovieSceneBindingProxy): boolean;
    AddChildFolder(TargetFolder: UMovieSceneFolder, FolderToAdd: UMovieSceneFolder): boolean;
}
declare const UMovieSceneFolderExtensions: UMovieSceneFolderExtensions;

declare interface UMovieSceneMaterialTrackExtensions extends UBlueprintFunctionLibrary {
    SetMaterialInfo(track: UMovieSceneComponentMaterialTrack, MaterialInfo: FComponentMaterialInfo): void;
    SetMaterialIndex(track: UMovieSceneComponentMaterialTrack, MaterialIndex: number): void;
    GetMaterialInfo(track: UMovieSceneComponentMaterialTrack): FComponentMaterialInfo;
    GetMaterialIndex(track: UMovieSceneComponentMaterialTrack): number;
}
declare const UMovieSceneMaterialTrackExtensions: UMovieSceneMaterialTrackExtensions;

declare interface UMovieScenePrimitiveMaterialTrackExtensions extends UBlueprintFunctionLibrary {
    SetMaterialInfo(track: UMovieScenePrimitiveMaterialTrack, MaterialInfo: FComponentMaterialInfo): void;
    SetMaterialIndex(track: UMovieScenePrimitiveMaterialTrack, MaterialIndex: number): void;
    GetMaterialInfo(track: UMovieScenePrimitiveMaterialTrack): FComponentMaterialInfo;
    GetMaterialIndex(track: UMovieScenePrimitiveMaterialTrack): number;
}
declare const UMovieScenePrimitiveMaterialTrackExtensions: UMovieScenePrimitiveMaterialTrackExtensions;

declare interface UMovieScenePropertyTrackExtensions extends UBlueprintFunctionLibrary {
    SetPropertyNameAndPath(track: UMovieScenePropertyTrack, InPropertyName: FName, InPropertyPath: string | FString): void;
    SetObjectPropertyClass(track: UMovieSceneObjectPropertyTrack, PropertyClass: UClass): void;
    SetByteTrackEnum(track: UMovieSceneByteTrack, InEnum: UEnum): void;
    GetUniqueTrackName(track: UMovieScenePropertyTrack): FName;
    GetPropertyPath(track: UMovieScenePropertyTrack): FString;
    GetPropertyName(track: UMovieScenePropertyTrack): FName;
    GetObjectPropertyClass(track: UMovieSceneObjectPropertyTrack): UClass;
    GetByteTrackEnum(track: UMovieSceneByteTrack): UEnum;
}
declare const UMovieScenePropertyTrackExtensions: UMovieScenePropertyTrackExtensions;

declare interface UMovieSceneScriptingActorReferenceChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetDefault(InDefaultValue: FMovieSceneObjectBindingID): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): FMovieSceneObjectBindingID;
    AddKey(InTime: FFrameNumber, NewValue: FMovieSceneObjectBindingID, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingActorReferenceKey;
}
declare const UMovieSceneScriptingActorReferenceChannel: UMovieSceneScriptingActorReferenceChannel;

declare interface UMovieSceneScriptingActorReferenceKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: FMovieSceneObjectBindingID): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): FMovieSceneObjectBindingID;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingActorReferenceKey: UMovieSceneScriptingActorReferenceKey;

declare interface UMovieSceneScriptingActualFloatKey extends UMovieSceneScriptingFloatKey {

}
declare const UMovieSceneScriptingActualFloatKey: UMovieSceneScriptingActualFloatKey;

declare interface UMovieSceneScriptingBoolChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetDefault(InDefaultValue: boolean): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetNumKeys(): number;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): boolean;
    EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): TArray<boolean>;
    ComputeEffectiveRange(): FSequencerScriptingRange;
    AddKey(InTime: FFrameNumber, NewValue: boolean, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingBoolKey;
}
declare const UMovieSceneScriptingBoolChannel: UMovieSceneScriptingBoolChannel;

declare interface UMovieSceneScriptingBoolKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: boolean): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): boolean;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingBoolKey: UMovieSceneScriptingBoolKey;

declare interface UMovieSceneScriptingByteChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetDefault(InDefaultValue: uint8): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): uint8;
    AddKey(InTime: FFrameNumber, NewValue: uint8, SubFrame: number, TimeUnit: EMovieSceneTimeUnit, InInterpolation: EMovieSceneKeyInterpolation): UMovieSceneScriptingByteKey;
}
declare const UMovieSceneScriptingByteChannel: UMovieSceneScriptingByteChannel;

declare interface UMovieSceneScriptingByteKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: uint8): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): uint8;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingByteKey: UMovieSceneScriptingByteKey;

declare interface UMovieSceneScriptingChannel extends UObject {
    ChannelName: FName;
}
declare const UMovieSceneScriptingChannel: UMovieSceneScriptingChannel;

declare interface UMovieSceneScriptingDoubleAsFloatKey extends UMovieSceneScriptingFloatKey {

}
declare const UMovieSceneScriptingDoubleAsFloatKey: UMovieSceneScriptingDoubleAsFloatKey;

declare interface UMovieSceneScriptingDoubleChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetPreInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
    SetPostInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
    SetDefault(InDefaultValue: number): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetPreInfinityExtrapolation(): ERichCurveExtrapolation;
    GetPostInfinityExtrapolation(): ERichCurveExtrapolation;
    GetNumKeys(): number;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): number;
    EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): TArray<number>;
    ComputeEffectiveRange(): FSequencerScriptingRange;
    AddKey(InTime: FFrameNumber, NewValue: number, SubFrame: number, TimeUnit: EMovieSceneTimeUnit, InInterpolation: EMovieSceneKeyInterpolation): UMovieSceneScriptingDoubleKey;
}
declare const UMovieSceneScriptingDoubleChannel: UMovieSceneScriptingDoubleChannel;

declare interface UMovieSceneScriptingDoubleKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: number): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    SetTangentWeightMode(InNewValue: ERichCurveTangentWeightMode): void;
    SetTangentMode(InNewValue: ERichCurveTangentMode): void;
    SetLeaveTangentWeight(InNewValue: number): void;
    SetLeaveTangent(InNewValue: number): void;
    SetInterpolationMode(InNewValue: ERichCurveInterpMode): void;
    SetArriveTangentWeight(InNewValue: number): void;
    SetArriveTangent(InNewValue: number): void;
    GetValue(): number;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    GetTangentWeightMode(): ERichCurveTangentWeightMode;
    GetTangentMode(): ERichCurveTangentMode;
    GetLeaveTangentWeight(): number;
    GetLeaveTangent(): number;
    GetInterpolationMode(): ERichCurveInterpMode;
    GetArriveTangentWeight(): number;
    GetArriveTangent(): number;
}
declare const UMovieSceneScriptingDoubleKey: UMovieSceneScriptingDoubleKey;

declare interface UMovieSceneScriptingEventChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    AddKey(InTime: FFrameNumber, NewValue: FMovieSceneEvent, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingEventKey;
}
declare const UMovieSceneScriptingEventChannel: UMovieSceneScriptingEventChannel;

declare interface UMovieSceneScriptingEventKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: FMovieSceneEvent): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): FMovieSceneEvent;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingEventKey: UMovieSceneScriptingEventKey;

declare interface UMovieSceneScriptingFloatChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetPreInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
    SetPostInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
    SetDefault(InDefaultValue: number): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetPreInfinityExtrapolation(): ERichCurveExtrapolation;
    GetPostInfinityExtrapolation(): ERichCurveExtrapolation;
    GetNumKeys(): number;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): number;
    EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): TArray<number>;
    ComputeEffectiveRange(): FSequencerScriptingRange;
    AddKey(InTime: FFrameNumber, NewValue: number, SubFrame: number, TimeUnit: EMovieSceneTimeUnit, InInterpolation: EMovieSceneKeyInterpolation): UMovieSceneScriptingFloatKey;
}
declare const UMovieSceneScriptingFloatChannel: UMovieSceneScriptingFloatChannel;

declare interface UMovieSceneScriptingFloatKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: number): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    SetTangentWeightMode(InNewValue: ERichCurveTangentWeightMode): void;
    SetTangentMode(InNewValue: ERichCurveTangentMode): void;
    SetLeaveTangentWeight(InNewValue: number): void;
    SetLeaveTangent(InNewValue: number): void;
    SetInterpolationMode(InNewValue: ERichCurveInterpMode): void;
    SetArriveTangentWeight(InNewValue: number): void;
    SetArriveTangent(InNewValue: number): void;
    GetValue(): number;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    GetTangentWeightMode(): ERichCurveTangentWeightMode;
    GetTangentMode(): ERichCurveTangentMode;
    GetLeaveTangentWeight(): number;
    GetLeaveTangent(): number;
    GetInterpolationMode(): ERichCurveInterpMode;
    GetArriveTangentWeight(): number;
    GetArriveTangent(): number;
}
declare const UMovieSceneScriptingFloatKey: UMovieSceneScriptingFloatKey;

declare interface UMovieSceneScriptingIntegerChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetInterpolateLinearKeys(bInInterpolateLinearKeys: boolean): void;
    SetDefault(InDefaultValue: number): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetNumKeys(): number;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetInterpolateLinearKeys(): boolean;
    GetDefault(): number;
    EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): TArray<number>;
    AddKey(InTime: FFrameNumber, NewValue: number, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingIntegerKey;
}
declare const UMovieSceneScriptingIntegerChannel: UMovieSceneScriptingIntegerChannel;

declare interface UMovieSceneScriptingIntegerKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: number): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): number;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingIntegerKey: UMovieSceneScriptingIntegerKey;

declare interface UMovieSceneScriptingKey extends UObject {

}
declare const UMovieSceneScriptingKey: UMovieSceneScriptingKey;

declare interface UMovieSceneScriptingObjectPathChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetDefault(InDefaultValue: UObject): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): UObject;
    AddKey(InTime: FFrameNumber, NewValue: UObject, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingObjectPathKey;
}
declare const UMovieSceneScriptingObjectPathChannel: UMovieSceneScriptingObjectPathChannel;

declare interface UMovieSceneScriptingObjectPathKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: UObject): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): UObject;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingObjectPathKey: UMovieSceneScriptingObjectPathKey;

declare interface UMovieSceneScriptingParticleChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetDefault(InDefaultValue: EParticleKey): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetNumKeys(): number;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): EParticleKey;
    EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): TArray<EParticleKey>;
    ComputeEffectiveRange(): FSequencerScriptingRange;
    AddKey(InTime: FFrameNumber, NewParticleValue: EParticleKey, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingParticleKey;
}
declare const UMovieSceneScriptingParticleChannel: UMovieSceneScriptingParticleChannel;

declare interface UMovieSceneScriptingParticleKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: EParticleKey): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): EParticleKey;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingParticleKey: UMovieSceneScriptingParticleKey;

declare interface UMovieSceneScriptingStringChannel extends UMovieSceneScriptingChannel {
    Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
    SetDefault(InDefaultValue: string | FString): void;
    RemoveKey(Key: UMovieSceneScriptingKey): void;
    RemoveDefault(): void;
    HasDefault(): boolean;
    GetKeysByIndex(Indices: TArray<number>): TArray<UMovieSceneScriptingKey>;
    GetKeys(): TArray<UMovieSceneScriptingKey>;
    GetDefault(): FString;
    AddKey(InTime: FFrameNumber, NewValue: string | FString, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingStringKey;
}
declare const UMovieSceneScriptingStringChannel: UMovieSceneScriptingStringChannel;

declare interface UMovieSceneScriptingStringKey extends UMovieSceneScriptingKey {
    SetValue(InNewValue: string | FString): void;
    SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
    GetValue(): FString;
    GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
}
declare const UMovieSceneScriptingStringKey: UMovieSceneScriptingStringKey;

declare interface UMovieSceneSectionExtensions extends UBlueprintFunctionLibrary {
    SetStartFrameSeconds(Section: UMovieSceneSection, StartTime: number): void;
    SetStartFrameBounded(Section: UMovieSceneSection, bIsBounded: boolean): void;
    SetStartFrame(Section: UMovieSceneSection, StartFrame: number): void;
    SetRangeSeconds(Section: UMovieSceneSection, StartTime: number, EndTime: number): void;
    SetRange(Section: UMovieSceneSection, StartFrame: number, EndFrame: number): void;
    SetEndFrameSeconds(Section: UMovieSceneSection, EndTime: number): void;
    SetEndFrameBounded(Section: UMovieSceneSection, bIsBounded: boolean): void;
    SetEndFrame(Section: UMovieSceneSection, EndFrame: number): void;
    HasStartFrame(Section: UMovieSceneSection): boolean;
    HasEndFrame(Section: UMovieSceneSection): boolean;
    GetStartFrameSeconds(Section: UMovieSceneSection): number;
    GetStartFrame(Section: UMovieSceneSection): number;
    GetParentSequenceFrame(Section: UMovieSceneSubSection, InFrame: number, ParentSequence: UMovieSceneSequence): number;
    GetEndFrameSeconds(Section: UMovieSceneSection): number;
    GetEndFrame(Section: UMovieSceneSection): number;
    GetChannelsByType(Section: UMovieSceneSection, ChannelType: TSubclassOf<UMovieSceneScriptingChannel>): TArray<UMovieSceneScriptingChannel>;
    GetChannel(Section: UMovieSceneSection, ChannelName: FName): UMovieSceneScriptingChannel;
    GetAutoSizeStartFrameSeconds(Section: UMovieSceneSection): number;
    GetAutoSizeStartFrame(Section: UMovieSceneSection): number;
    GetAutoSizeHasStartFrame(Section: UMovieSceneSection): boolean;
    GetAutoSizeHasEndFrame(Section: UMovieSceneSection): boolean;
    GetAutoSizeEndFrameSeconds(Section: UMovieSceneSection): number;
    GetAutoSizeEndFrame(Section: UMovieSceneSection): number;
    GetAllChannels(Section: UMovieSceneSection): TArray<UMovieSceneScriptingChannel>;
}
declare const UMovieSceneSectionExtensions: UMovieSceneSectionExtensions;

declare interface UMovieSceneSequenceExtensions extends UBlueprintFunctionLibrary {
    SortMarkedFrames(Sequence: UMovieSceneSequence): void;
    SetWorkRangeStart(InSequence: UMovieSceneSequence, StartTimeInSeconds: number): void;
    SetWorkRangeEnd(InSequence: UMovieSceneSequence, EndTimeInSeconds: number): void;
    SetViewRangeStart(InSequence: UMovieSceneSequence, StartTimeInSeconds: number): void;
    SetViewRangeEnd(InSequence: UMovieSceneSequence, EndTimeInSeconds: number): void;
    SetTickResolutionDirectly(Sequence: UMovieSceneSequence, TickResolution: FFrameRate): void;
    SetTickResolution(Sequence: UMovieSceneSequence, TickResolution: FFrameRate): void;
    SetReadOnly(Sequence: UMovieSceneSequence, bInReadOnly: boolean): void;
    SetPlaybackStartSeconds(Sequence: UMovieSceneSequence, StartTime: number): void;
    SetPlaybackStart(Sequence: UMovieSceneSequence, StartFrame: number): void;
    SetPlaybackRangeLocked(Sequence: UMovieSceneSequence, bInLocked: boolean): void;
    SetPlaybackEndSeconds(Sequence: UMovieSceneSequence, EndTime: number): void;
    SetPlaybackEnd(Sequence: UMovieSceneSequence, EndFrame: number): void;
    SetMarkedFramesLocked(Sequence: UMovieSceneSequence, bInLocked: boolean): void;
    SetMarkedFrameInSequence(Sequence: UMovieSceneSequence, InMarkIndex: number, InFrameNumber: FFrameNumber, TimeUnit: EMovieSceneTimeUnit): void;
    SetMarkedFrame(Sequence: UMovieSceneSequence, InMarkIndex: number, InFrameNumber: FFrameNumber): void;
    SetEvaluationType(InSequence: UMovieSceneSequence, InEvaluationType: EMovieSceneEvaluationType): void;
    SetDisplayRate(Sequence: UMovieSceneSequence, DisplayRate: FFrameRate): void;
    SetClockSource(InSequence: UMovieSceneSequence, InClockSource: EUpdateClockSource): void;
    ResolveBindingID(RootSequence: UMovieSceneSequence, InObjectBindingID: FMovieSceneObjectBindingID): FMovieSceneBindingProxy;
    RemoveTrack(Sequence: UMovieSceneSequence, track: UMovieSceneTrack): boolean;
    RemoveRootFolderFromSequence(Sequence: UMovieSceneSequence, Folder: UMovieSceneFolder): void;
    MakeRangeSeconds(Sequence: UMovieSceneSequence, StartTime: number, duration: number): FSequencerScriptingRange;
    MakeRange(Sequence: UMovieSceneSequence, StartFrame: number, duration: number): FSequencerScriptingRange;
    LocateBoundObjects(Sequence: UMovieSceneSequence, InBinding: FMovieSceneBindingProxy, Context: UObject): TArray<UObject>;
    IsReadOnly(Sequence: UMovieSceneSequence): boolean;
    IsPlaybackRangeLocked(Sequence: UMovieSceneSequence): boolean;
    GetWorkRangeStart(InSequence: UMovieSceneSequence): number;
    GetWorkRangeEnd(InSequence: UMovieSceneSequence): number;
    GetViewRangeStart(InSequence: UMovieSceneSequence): number;
    GetViewRangeEnd(InSequence: UMovieSceneSequence): number;
    GetTracks(Sequence: UMovieSceneSequence): TArray<UMovieSceneTrack>;
    GetTickResolution(Sequence: UMovieSceneSequence): FFrameRate;
    GetSpawnables(Sequence: UMovieSceneSequence): TArray<FMovieSceneBindingProxy>;
    GetRootFoldersInSequence(Sequence: UMovieSceneSequence): TArray<UMovieSceneFolder>;
    GetPossessables(Sequence: UMovieSceneSequence): TArray<FMovieSceneBindingProxy>;
    GetPortableBindingID(RootSequence: UMovieSceneSequence, DestinationSequence: UMovieSceneSequence, InBinding: FMovieSceneBindingProxy): FMovieSceneObjectBindingID;
    GetPlaybackStartSeconds(Sequence: UMovieSceneSequence): number;
    GetPlaybackStart(Sequence: UMovieSceneSequence): number;
    GetPlaybackRange(Sequence: UMovieSceneSequence): FSequencerScriptingRange;
    GetPlaybackEndSeconds(Sequence: UMovieSceneSequence): number;
    GetPlaybackEnd(Sequence: UMovieSceneSequence): number;
    GetMovieScene(Sequence: UMovieSceneSequence): UMovieScene;
    GetMarkedFramesFromSequence(Sequence: UMovieSceneSequence, TimeUnit: EMovieSceneTimeUnit): TArray<FMovieSceneMarkedFrame>;
    GetMarkedFrames(Sequence: UMovieSceneSequence): TArray<FMovieSceneMarkedFrame>;
    GetEvaluationType(InSequence: UMovieSceneSequence): EMovieSceneEvaluationType;
    GetDisplayRate(Sequence: UMovieSceneSequence): FFrameRate;
    GetClockSource(InSequence: UMovieSceneSequence): EUpdateClockSource;
    GetBindings(Sequence: UMovieSceneSequence): TArray<FMovieSceneBindingProxy>;
    GetBindingID(Sequence: UMovieSceneSequence, InBinding: FMovieSceneBindingProxy): FMovieSceneObjectBindingID;
    FindTracksByType(Sequence: UMovieSceneSequence, TrackType: TSubclassOf<UMovieSceneTrack>): TArray<UMovieSceneTrack>;
    FindTracksByExactType(Sequence: UMovieSceneSequence, TrackType: TSubclassOf<UMovieSceneTrack>): TArray<UMovieSceneTrack>;
    FindNextMarkedFrameInSequence(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber, bForward: boolean, TimeUnit: EMovieSceneTimeUnit): number;
    FindNextMarkedFrame(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber, bForward: boolean): number;
    FindMarkedFrameByLabel(Sequence: UMovieSceneSequence, InLabel: string | FString): number;
    FindMarkedFrameByFrameNumberInSequence(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber, TimeUnit: EMovieSceneTimeUnit): number;
    FindMarkedFrameByFrameNumber(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber): number;
    FindBindingByName(Sequence: UMovieSceneSequence, Name: string | FString): FMovieSceneBindingProxy;
    FindBindingById(Sequence: UMovieSceneSequence, BindingID: FGuid): FMovieSceneBindingProxy;
    DeleteMarkedFrames(Sequence: UMovieSceneSequence): void;
    DeleteMarkedFrame(Sequence: UMovieSceneSequence, DeleteIndex: number): void;
    AreMarkedFramesLocked(Sequence: UMovieSceneSequence): boolean;
    AddTrack(Sequence: UMovieSceneSequence, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack;
    AddSpawnableFromInstance(Sequence: UMovieSceneSequence, ObjectToSpawn: UObject): FMovieSceneBindingProxy;
    AddSpawnableFromClass(Sequence: UMovieSceneSequence, ClassToSpawn: UClass): FMovieSceneBindingProxy;
    AddRootFolderToSequence(Sequence: UMovieSceneSequence, NewFolderName: string | FString): UMovieSceneFolder;
    AddPossessable(Sequence: UMovieSceneSequence, ObjectToPossess: UObject): FMovieSceneBindingProxy;
    AddMarkedFrameToSequence(Sequence: UMovieSceneSequence, InMarkedFrame: FMovieSceneMarkedFrame, TimeUnit: EMovieSceneTimeUnit): number;
    AddMarkedFrame(Sequence: UMovieSceneSequence, InMarkedFrame: FMovieSceneMarkedFrame): number;
}
declare const UMovieSceneSequenceExtensions: UMovieSceneSequenceExtensions;

declare interface UMovieSceneTimeWarpExtensions extends UBlueprintFunctionLibrary {
    ToFixedPlayRate(TimeWarp: FMovieSceneTimeWarpVariant): number;
    SetFixedPlayRate(TimeWarp: FMovieSceneTimeWarpVariant, FixedPlayRate: number): void;
    MakeTimeWarp(FixedPlayRate: number): FMovieSceneTimeWarpVariant;
    Conv_TimeWarpVariantToPlayRate(TimeWarp: FMovieSceneTimeWarpVariant): number;
    Conv_PlayRateToTimeWarpVariant(ConstantPlayRate: number): FMovieSceneTimeWarpVariant;
    BreakTimeWarp(TimeWarp: FMovieSceneTimeWarpVariant, FixedPlayRate: number): void;
}
declare const UMovieSceneTimeWarpExtensions: UMovieSceneTimeWarpExtensions;

declare interface UMovieSceneTrackExtensions extends UBlueprintFunctionLibrary {
    SetTrackRowDisplayName(track: UMovieSceneTrack, InName: FText, RowIndex: number): void;
    SetSortingOrder(track: UMovieSceneTrack, SortingOrder: number): void;
    SetSectionToKey(track: UMovieSceneTrack, Section: UMovieSceneSection): void;
    SetDisplayName(track: UMovieSceneTrack, InName: FText): void;
    SetColorTint(track: UMovieSceneTrack, ColorTint: FColor): void;
    RemoveSection(track: UMovieSceneTrack, Section: UMovieSceneSection): void;
    GetTrackRowDisplayName(track: UMovieSceneTrack, RowIndex: number): FText;
    GetSortingOrder(track: UMovieSceneTrack): number;
    GetSectionToKey(track: UMovieSceneTrack): UMovieSceneSection;
    GetSections(track: UMovieSceneTrack): TArray<UMovieSceneSection>;
    GetDisplayName(track: UMovieSceneTrack): FText;
    GetColorTint(track: UMovieSceneTrack): FColor;
    AddSection(track: UMovieSceneTrack): UMovieSceneSection;
}
declare const UMovieSceneTrackExtensions: UMovieSceneTrackExtensions;

declare interface USequencerScriptingRangeExtensions extends UBlueprintFunctionLibrary {
    SetStartSeconds(Range: FSequencerScriptingRange, Start: number): void;
    SetStartFrame(Range: FSequencerScriptingRange, Start: number): void;
    SetEndSeconds(Range: FSequencerScriptingRange, End: number): void;
    SetEndFrame(Range: FSequencerScriptingRange, End: number): void;
    RemoveStart(Range: FSequencerScriptingRange): void;
    RemoveEnd(Range: FSequencerScriptingRange): void;
    HasStart(Range: FSequencerScriptingRange): boolean;
    HasEnd(Range: FSequencerScriptingRange): boolean;
    GetStartSeconds(Range: FSequencerScriptingRange): number;
    GetStartFrame(Range: FSequencerScriptingRange): number;
    GetEndSeconds(Range: FSequencerScriptingRange): number;
    GetEndFrame(Range: FSequencerScriptingRange): number;
}
declare const USequencerScriptingRangeExtensions: USequencerScriptingRangeExtensions;

