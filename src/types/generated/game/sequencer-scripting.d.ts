declare interface FSequencerScriptingRange {
    bHasStart: boolean;
    bHasEnd: boolean;
    InclusiveStart: number;
    ExclusiveEnd: number;
    InternalRate: FFrameRate;
}

declare interface UMovieSceneBindingExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneBindingExtensions: {
        SetSpawnableBindingID(InBinding: FMovieSceneBindingProxy, SpawnableBindingID: FMovieSceneObjectBindingID): void;
        SetSortingOrder(InBinding: FMovieSceneBindingProxy, SortingOrder: number): void;
        SetParent(InBinding: FMovieSceneBindingProxy, InParentBinding: FMovieSceneBindingProxy): void;
        SetName(InBinding: FMovieSceneBindingProxy, InName: string): void;
        SetDisplayName(InBinding: FMovieSceneBindingProxy, InDisplayName: string): void;
        RemoveTrack(InBinding: FMovieSceneBindingProxy, TrackToRemove: UMovieSceneTrack): void;
        Remove(InBinding: FMovieSceneBindingProxy): void;
        NotEqual_MovieSceneBindingProxy(A: FMovieSceneBindingProxy, B: FMovieSceneBindingProxy): boolean;
        MoveBindingContents(SourceBindingId: FMovieSceneBindingProxy, DestinationBindingId: FMovieSceneBindingProxy): void;
        IsValid(InBinding: FMovieSceneBindingProxy): boolean;
        GetTracks(InBinding: FMovieSceneBindingProxy): UMovieSceneTrack[];
        GetSortingOrder(InBinding: FMovieSceneBindingProxy): number;
        GetPossessedObjectClass(InBinding: FMovieSceneBindingProxy): UClass;
        GetParent(InBinding: FMovieSceneBindingProxy): FMovieSceneBindingProxy;
        GetObjectTemplate(InBinding: FMovieSceneBindingProxy): UObject;
        GetName(InBinding: FMovieSceneBindingProxy): string;
        GetID(InBinding: FMovieSceneBindingProxy): FGuid;
        GetDisplayName(InBinding: FMovieSceneBindingProxy): string;
        GetChildPossessables(InBinding: FMovieSceneBindingProxy): FMovieSceneBindingProxy[];
        FindTracksByType(InBinding: FMovieSceneBindingProxy, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack[];
        FindTracksByExactType(InBinding: FMovieSceneBindingProxy, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack[];
        EqualEqual_MovieSceneBindingProxy(A: FMovieSceneBindingProxy, B: FMovieSceneBindingProxy): boolean;
        AddTrack(InBinding: FMovieSceneBindingProxy, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack;
    };
    readonly __staticRegistry: 
        UMovieSceneBindingExtensions['__static_UMovieSceneBindingExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneDoubleVectorTrackExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneDoubleVectorTrackExtensions: {
        SetNumChannelsUsed(track: UMovieSceneDoubleVectorTrack, InNumChannelsUsed: number): void;
        GetNumChannelsUsed(track: UMovieSceneDoubleVectorTrack): number;
    };
    readonly __staticRegistry: 
        UMovieSceneDoubleVectorTrackExtensions['__static_UMovieSceneDoubleVectorTrackExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneEventTrackExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneEventTrackExtensions: {
        GetBoundObjectPropertyClass(EventKey: FMovieSceneEvent): UClass;
        AddEventTriggerSection(InTrack: UMovieSceneEventTrack): UMovieSceneEventTriggerSection;
        AddEventRepeaterSection(InTrack: UMovieSceneEventTrack): UMovieSceneEventRepeaterSection;
    };
    readonly __staticRegistry: 
        UMovieSceneEventTrackExtensions['__static_UMovieSceneEventTrackExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneFloatVectorTrackExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneFloatVectorTrackExtensions: {
        SetNumChannelsUsed(track: UMovieSceneFloatVectorTrack, InNumChannelsUsed: number): void;
        GetNumChannelsUsed(track: UMovieSceneFloatVectorTrack): number;
    };
    readonly __staticRegistry: 
        UMovieSceneFloatVectorTrackExtensions['__static_UMovieSceneFloatVectorTrackExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneFolderExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneFolderExtensions: {
        SetFolderName(Folder: UMovieSceneFolder, InFolderName: string): boolean;
        SetFolderColor(Folder: UMovieSceneFolder, InFolderColor: FColor): boolean;
        RemoveChildTrack(Folder: UMovieSceneFolder, InTrack: UMovieSceneTrack): boolean;
        RemoveChildObjectBinding(Folder: UMovieSceneFolder, InObjectBinding: FMovieSceneBindingProxy): boolean;
        RemoveChildFolder(TargetFolder: UMovieSceneFolder, FolderToRemove: UMovieSceneFolder): boolean;
        GetFolderName(Folder: UMovieSceneFolder): string;
        GetFolderColor(Folder: UMovieSceneFolder): FColor;
        GetChildTracks(Folder: UMovieSceneFolder): UMovieSceneTrack[];
        GetChildObjectBindings(Folder: UMovieSceneFolder): FMovieSceneBindingProxy[];
        GetChildFolders(Folder: UMovieSceneFolder): UMovieSceneFolder[];
        AddChildTrack(Folder: UMovieSceneFolder, InTrack: UMovieSceneTrack): boolean;
        AddChildObjectBinding(Folder: UMovieSceneFolder, InObjectBinding: FMovieSceneBindingProxy): boolean;
        AddChildFolder(TargetFolder: UMovieSceneFolder, FolderToAdd: UMovieSceneFolder): boolean;
    };
    readonly __staticRegistry: 
        UMovieSceneFolderExtensions['__static_UMovieSceneFolderExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneMaterialTrackExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneMaterialTrackExtensions: {
        SetMaterialInfo(track: UMovieSceneComponentMaterialTrack, MaterialInfo: FComponentMaterialInfo): void;
        SetMaterialIndex(track: UMovieSceneComponentMaterialTrack, MaterialIndex: number): void;
        GetMaterialInfo(track: UMovieSceneComponentMaterialTrack): FComponentMaterialInfo;
        GetMaterialIndex(track: UMovieSceneComponentMaterialTrack): number;
    };
    readonly __staticRegistry: 
        UMovieSceneMaterialTrackExtensions['__static_UMovieSceneMaterialTrackExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieScenePrimitiveMaterialTrackExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieScenePrimitiveMaterialTrackExtensions: {
        SetMaterialInfo(track: UMovieScenePrimitiveMaterialTrack, MaterialInfo: FComponentMaterialInfo): void;
        SetMaterialIndex(track: UMovieScenePrimitiveMaterialTrack, MaterialIndex: number): void;
        GetMaterialInfo(track: UMovieScenePrimitiveMaterialTrack): FComponentMaterialInfo;
        GetMaterialIndex(track: UMovieScenePrimitiveMaterialTrack): number;
    };
    readonly __staticRegistry: 
        UMovieScenePrimitiveMaterialTrackExtensions['__static_UMovieScenePrimitiveMaterialTrackExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieScenePropertyTrackExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieScenePropertyTrackExtensions: {
        SetPropertyNameAndPath(track: UMovieScenePropertyTrack, InPropertyName: string, InPropertyPath: string): void;
        SetObjectPropertyClass(track: UMovieSceneObjectPropertyTrack, PropertyClass: UClass): void;
        SetByteTrackEnum(track: UMovieSceneByteTrack, InEnum: UEnum): void;
        GetUniqueTrackName(track: UMovieScenePropertyTrack): string;
        GetPropertyPath(track: UMovieScenePropertyTrack): string;
        GetPropertyName(track: UMovieScenePropertyTrack): string;
        GetObjectPropertyClass(track: UMovieSceneObjectPropertyTrack): UClass;
        GetByteTrackEnum(track: UMovieSceneByteTrack): UEnum;
    };
    readonly __staticRegistry: 
        UMovieScenePropertyTrackExtensions['__static_UMovieScenePropertyTrackExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneScriptingActorReferenceChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingActorReferenceChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        SetDefault(InDefaultValue: FMovieSceneObjectBindingID): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        RemoveDefault(): void;
        HasDefault(): boolean;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): FMovieSceneObjectBindingID;
        AddKey(InTime: FFrameNumber, NewValue: FMovieSceneObjectBindingID, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingActorReferenceKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingActorReferenceChannel['__static_UMovieSceneScriptingActorReferenceChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingActorReferenceKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingActorReferenceKey: {
        SetValue(InNewValue: FMovieSceneObjectBindingID): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): FMovieSceneObjectBindingID;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingActorReferenceKey['__static_UMovieSceneScriptingActorReferenceKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingActualFloatKey extends UMovieSceneScriptingFloatKey {
    readonly __staticRegistry: 
        UMovieSceneScriptingFloatKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingFloatKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingBoolChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingBoolChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        SetDefault(InDefaultValue: boolean): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        RemoveDefault(): void;
        HasDefault(): boolean;
        GetNumKeys(): number;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): boolean;
        EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): boolean[];
        ComputeEffectiveRange(): FSequencerScriptingRange;
        AddKey(InTime: FFrameNumber, NewValue: boolean, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingBoolKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingBoolChannel['__static_UMovieSceneScriptingBoolChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingBoolKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingBoolKey: {
        SetValue(InNewValue: boolean): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): boolean;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingBoolKey['__static_UMovieSceneScriptingBoolKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingByteChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingByteChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        SetDefault(InDefaultValue: number): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        RemoveDefault(): void;
        HasDefault(): boolean;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): number;
        AddKey(InTime: FFrameNumber, NewValue: number, SubFrame: number, TimeUnit: EMovieSceneTimeUnit, InInterpolation: EMovieSceneKeyInterpolation): UMovieSceneScriptingByteKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingByteChannel['__static_UMovieSceneScriptingByteChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingByteKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingByteKey: {
        SetValue(InNewValue: number): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): number;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingByteKey['__static_UMovieSceneScriptingByteKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingChannel extends UObject {
    readonly __properties_UMovieSceneScriptingChannel: {
        ChannelName: string;
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__properties_UMovieSceneScriptingChannel'] &
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneScriptingDoubleAsFloatKey extends UMovieSceneScriptingFloatKey {
    readonly __staticRegistry: 
        UMovieSceneScriptingFloatKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingFloatKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingDoubleChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingDoubleChannel: {
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
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): number;
        EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): number[];
        ComputeEffectiveRange(): FSequencerScriptingRange;
        AddKey(InTime: FFrameNumber, NewValue: number, SubFrame: number, TimeUnit: EMovieSceneTimeUnit, InInterpolation: EMovieSceneKeyInterpolation): UMovieSceneScriptingDoubleKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingDoubleChannel['__static_UMovieSceneScriptingDoubleChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingDoubleKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingDoubleKey: {
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
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingDoubleKey['__static_UMovieSceneScriptingDoubleKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingEventChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingEventChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        AddKey(InTime: FFrameNumber, NewValue: FMovieSceneEvent, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingEventKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingEventChannel['__static_UMovieSceneScriptingEventChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingEventKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingEventKey: {
        SetValue(InNewValue: FMovieSceneEvent): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): FMovieSceneEvent;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingEventKey['__static_UMovieSceneScriptingEventKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingFloatChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingFloatChannel: {
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
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): number;
        EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): number[];
        ComputeEffectiveRange(): FSequencerScriptingRange;
        AddKey(InTime: FFrameNumber, NewValue: number, SubFrame: number, TimeUnit: EMovieSceneTimeUnit, InInterpolation: EMovieSceneKeyInterpolation): UMovieSceneScriptingFloatKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingFloatChannel['__static_UMovieSceneScriptingFloatChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingFloatKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingFloatKey: {
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
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingFloatKey['__static_UMovieSceneScriptingFloatKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingIntegerChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingIntegerChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        SetInterpolateLinearKeys(bInInterpolateLinearKeys: boolean): void;
        SetDefault(InDefaultValue: number): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        RemoveDefault(): void;
        HasDefault(): boolean;
        GetNumKeys(): number;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetInterpolateLinearKeys(): boolean;
        GetDefault(): number;
        EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): number[];
        AddKey(InTime: FFrameNumber, NewValue: number, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingIntegerKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingIntegerChannel['__static_UMovieSceneScriptingIntegerChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingIntegerKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingIntegerKey: {
        SetValue(InNewValue: number): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): number;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingIntegerKey['__static_UMovieSceneScriptingIntegerKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingKey extends UObject {
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UObject['__propertyRegistry'];
}

declare interface UMovieSceneScriptingObjectPathChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingObjectPathChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        SetDefault(InDefaultValue: UObject): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        RemoveDefault(): void;
        HasDefault(): boolean;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): UObject;
        AddKey(InTime: FFrameNumber, NewValue: UObject, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingObjectPathKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingObjectPathChannel['__static_UMovieSceneScriptingObjectPathChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingObjectPathKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingObjectPathKey: {
        SetValue(InNewValue: UObject): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): UObject;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingObjectPathKey['__static_UMovieSceneScriptingObjectPathKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingParticleChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingParticleChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        SetDefault(InDefaultValue: EParticleKey): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        RemoveDefault(): void;
        HasDefault(): boolean;
        GetNumKeys(): number;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): EParticleKey;
        EvaluateKeys(Range: FSequencerScriptingRange, FrameRate: FFrameRate): EParticleKey[];
        ComputeEffectiveRange(): FSequencerScriptingRange;
        AddKey(InTime: FFrameNumber, NewParticleValue: EParticleKey, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingParticleKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingParticleChannel['__static_UMovieSceneScriptingParticleChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingParticleKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingParticleKey: {
        SetValue(InNewValue: EParticleKey): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): EParticleKey;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingParticleKey['__static_UMovieSceneScriptingParticleKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneScriptingStringChannel extends UMovieSceneScriptingChannel {
    readonly __static_UMovieSceneScriptingStringChannel: {
        Transform(OffsetFrame: FFrameNumber, Scale: number, PivotFrame: FFrameNumber, ScriptingRange: FSequencerScriptingRange, TimeUnit: EMovieSceneTimeUnit): void;
        SetDefault(InDefaultValue: string): void;
        RemoveKey(Key: UMovieSceneScriptingKey): void;
        RemoveDefault(): void;
        HasDefault(): boolean;
        GetKeysByIndex(Indices: number[]): UMovieSceneScriptingKey[];
        GetKeys(): UMovieSceneScriptingKey[];
        GetDefault(): string;
        AddKey(InTime: FFrameNumber, NewValue: string, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): UMovieSceneScriptingStringKey;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingStringChannel['__static_UMovieSceneScriptingStringChannel'] &
        UMovieSceneScriptingChannel['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingChannel['__propertyRegistry'];
}

declare interface UMovieSceneScriptingStringKey extends UMovieSceneScriptingKey {
    readonly __static_UMovieSceneScriptingStringKey: {
        SetValue(InNewValue: string): void;
        SetTime(NewFrameNumber: FFrameNumber, SubFrame: number, TimeUnit: EMovieSceneTimeUnit): void;
        GetValue(): string;
        GetTime(TimeUnit: EMovieSceneTimeUnit): FFrameTime;
    };
    readonly __staticRegistry: 
        UMovieSceneScriptingStringKey['__static_UMovieSceneScriptingStringKey'] &
        UMovieSceneScriptingKey['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneScriptingKey['__propertyRegistry'];
}

declare interface UMovieSceneSectionExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneSectionExtensions: {
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
        GetChannelsByType(Section: UMovieSceneSection, ChannelType: TSubclassOf<UMovieSceneScriptingChannel>): UMovieSceneScriptingChannel[];
        GetChannel(Section: UMovieSceneSection, ChannelName: string): UMovieSceneScriptingChannel;
        GetAutoSizeStartFrameSeconds(Section: UMovieSceneSection): number;
        GetAutoSizeStartFrame(Section: UMovieSceneSection): number;
        GetAutoSizeHasStartFrame(Section: UMovieSceneSection): boolean;
        GetAutoSizeHasEndFrame(Section: UMovieSceneSection): boolean;
        GetAutoSizeEndFrameSeconds(Section: UMovieSceneSection): number;
        GetAutoSizeEndFrame(Section: UMovieSceneSection): number;
        GetAllChannels(Section: UMovieSceneSection): UMovieSceneScriptingChannel[];
    };
    readonly __staticRegistry: 
        UMovieSceneSectionExtensions['__static_UMovieSceneSectionExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneSequenceExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneSequenceExtensions: {
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
        LocateBoundObjects(Sequence: UMovieSceneSequence, InBinding: FMovieSceneBindingProxy, Context: UObject): UObject[];
        IsReadOnly(Sequence: UMovieSceneSequence): boolean;
        IsPlaybackRangeLocked(Sequence: UMovieSceneSequence): boolean;
        GetWorkRangeStart(InSequence: UMovieSceneSequence): number;
        GetWorkRangeEnd(InSequence: UMovieSceneSequence): number;
        GetViewRangeStart(InSequence: UMovieSceneSequence): number;
        GetViewRangeEnd(InSequence: UMovieSceneSequence): number;
        GetTracks(Sequence: UMovieSceneSequence): UMovieSceneTrack[];
        GetTickResolution(Sequence: UMovieSceneSequence): FFrameRate;
        GetSpawnables(Sequence: UMovieSceneSequence): FMovieSceneBindingProxy[];
        GetRootFoldersInSequence(Sequence: UMovieSceneSequence): UMovieSceneFolder[];
        GetPossessables(Sequence: UMovieSceneSequence): FMovieSceneBindingProxy[];
        GetPortableBindingID(RootSequence: UMovieSceneSequence, DestinationSequence: UMovieSceneSequence, InBinding: FMovieSceneBindingProxy): FMovieSceneObjectBindingID;
        GetPlaybackStartSeconds(Sequence: UMovieSceneSequence): number;
        GetPlaybackStart(Sequence: UMovieSceneSequence): number;
        GetPlaybackRange(Sequence: UMovieSceneSequence): FSequencerScriptingRange;
        GetPlaybackEndSeconds(Sequence: UMovieSceneSequence): number;
        GetPlaybackEnd(Sequence: UMovieSceneSequence): number;
        GetMovieScene(Sequence: UMovieSceneSequence): UMovieScene;
        GetMarkedFramesFromSequence(Sequence: UMovieSceneSequence, TimeUnit: EMovieSceneTimeUnit): FMovieSceneMarkedFrame[];
        GetMarkedFrames(Sequence: UMovieSceneSequence): FMovieSceneMarkedFrame[];
        GetEvaluationType(InSequence: UMovieSceneSequence): EMovieSceneEvaluationType;
        GetDisplayRate(Sequence: UMovieSceneSequence): FFrameRate;
        GetClockSource(InSequence: UMovieSceneSequence): EUpdateClockSource;
        GetBindings(Sequence: UMovieSceneSequence): FMovieSceneBindingProxy[];
        GetBindingID(Sequence: UMovieSceneSequence, InBinding: FMovieSceneBindingProxy): FMovieSceneObjectBindingID;
        FindTracksByType(Sequence: UMovieSceneSequence, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack[];
        FindTracksByExactType(Sequence: UMovieSceneSequence, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack[];
        FindNextMarkedFrameInSequence(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber, bForward: boolean, TimeUnit: EMovieSceneTimeUnit): number;
        FindNextMarkedFrame(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber, bForward: boolean): number;
        FindMarkedFrameByLabel(Sequence: UMovieSceneSequence, InLabel: string): number;
        FindMarkedFrameByFrameNumberInSequence(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber, TimeUnit: EMovieSceneTimeUnit): number;
        FindMarkedFrameByFrameNumber(Sequence: UMovieSceneSequence, InFrameNumber: FFrameNumber): number;
        FindBindingByName(Sequence: UMovieSceneSequence, Name: string): FMovieSceneBindingProxy;
        FindBindingById(Sequence: UMovieSceneSequence, BindingID: FGuid): FMovieSceneBindingProxy;
        DeleteMarkedFrames(Sequence: UMovieSceneSequence): void;
        DeleteMarkedFrame(Sequence: UMovieSceneSequence, DeleteIndex: number): void;
        AreMarkedFramesLocked(Sequence: UMovieSceneSequence): boolean;
        AddTrack(Sequence: UMovieSceneSequence, TrackType: TSubclassOf<UMovieSceneTrack>): UMovieSceneTrack;
        AddSpawnableFromInstance(Sequence: UMovieSceneSequence, ObjectToSpawn: UObject): FMovieSceneBindingProxy;
        AddSpawnableFromClass(Sequence: UMovieSceneSequence, ClassToSpawn: UClass): FMovieSceneBindingProxy;
        AddRootFolderToSequence(Sequence: UMovieSceneSequence, NewFolderName: string): UMovieSceneFolder;
        AddPossessable(Sequence: UMovieSceneSequence, ObjectToPossess: UObject): FMovieSceneBindingProxy;
        AddMarkedFrameToSequence(Sequence: UMovieSceneSequence, InMarkedFrame: FMovieSceneMarkedFrame, TimeUnit: EMovieSceneTimeUnit): number;
        AddMarkedFrame(Sequence: UMovieSceneSequence, InMarkedFrame: FMovieSceneMarkedFrame): number;
    };
    readonly __staticRegistry: 
        UMovieSceneSequenceExtensions['__static_UMovieSceneSequenceExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneTimeWarpExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneTimeWarpExtensions: {
        ToFixedPlayRate(TimeWarp: FMovieSceneTimeWarpVariant): number;
        SetFixedPlayRate(TimeWarp: FMovieSceneTimeWarpVariant, FixedPlayRate: number): void;
        MakeTimeWarp(FixedPlayRate: number): FMovieSceneTimeWarpVariant;
        Conv_TimeWarpVariantToPlayRate(TimeWarp: FMovieSceneTimeWarpVariant): number;
        Conv_PlayRateToTimeWarpVariant(ConstantPlayRate: number): FMovieSceneTimeWarpVariant;
        BreakTimeWarp(TimeWarp: FMovieSceneTimeWarpVariant, FixedPlayRate: number): void;
    };
    readonly __staticRegistry: 
        UMovieSceneTimeWarpExtensions['__static_UMovieSceneTimeWarpExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface UMovieSceneTrackExtensions extends UBlueprintFunctionLibrary {
    readonly __static_UMovieSceneTrackExtensions: {
        SetTrackRowDisplayName(track: UMovieSceneTrack, InName: string, RowIndex: number): void;
        SetSortingOrder(track: UMovieSceneTrack, SortingOrder: number): void;
        SetSectionToKey(track: UMovieSceneTrack, Section: UMovieSceneSection): void;
        SetDisplayName(track: UMovieSceneTrack, InName: string): void;
        SetColorTint(track: UMovieSceneTrack, ColorTint: FColor): void;
        RemoveSection(track: UMovieSceneTrack, Section: UMovieSceneSection): void;
        GetTrackRowDisplayName(track: UMovieSceneTrack, RowIndex: number): string;
        GetSortingOrder(track: UMovieSceneTrack): number;
        GetSectionToKey(track: UMovieSceneTrack): UMovieSceneSection;
        GetSections(track: UMovieSceneTrack): UMovieSceneSection[];
        GetDisplayName(track: UMovieSceneTrack): string;
        GetColorTint(track: UMovieSceneTrack): FColor;
        AddSection(track: UMovieSceneTrack): UMovieSceneSection;
    };
    readonly __staticRegistry: 
        UMovieSceneTrackExtensions['__static_UMovieSceneTrackExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

declare interface USequencerScriptingRangeExtensions extends UBlueprintFunctionLibrary {
    readonly __static_USequencerScriptingRangeExtensions: {
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
    };
    readonly __staticRegistry: 
        USequencerScriptingRangeExtensions['__static_USequencerScriptingRangeExtensions'] &
        UBlueprintFunctionLibrary['__staticRegistry'];
    readonly __propertyRegistry: 
        UBlueprintFunctionLibrary['__propertyRegistry'];
}

