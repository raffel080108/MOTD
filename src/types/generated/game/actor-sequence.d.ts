declare interface FActorSequenceObjectReference {
    Type: EActorSequenceObjectReferenceType;
    ActorId: FGuid;
    PathToComponent: FString;
}
declare const FActorSequenceObjectReference: FActorSequenceObjectReference;

declare interface FActorSequenceObjectReferenceMap {
    BindingIds: TArray<FGuid>;
    References: TArray<FActorSequenceObjectReferences>;
}
declare const FActorSequenceObjectReferenceMap: FActorSequenceObjectReferenceMap;

declare interface FActorSequenceObjectReferences {
    Array: TArray<FActorSequenceObjectReference>;
}
declare const FActorSequenceObjectReferences: FActorSequenceObjectReferences;

declare interface UActorSequence extends UMovieSceneSequence {
    MovieScene: UMovieScene;
    ObjectReferences: FActorSequenceObjectReferenceMap;
}
declare const UActorSequence: UActorSequence;

declare interface UActorSequenceComponent extends UActorComponent {
    PlaybackSettings: FMovieSceneSequencePlaybackSettings;
    Sequence: UActorSequence;
    SequencePlayer: UActorSequencePlayer;
    StopSequence(): void;
    PlaySequence(): void;
    PauseSequence(): void;
}
declare const UActorSequenceComponent: UActorSequenceComponent;

declare interface UActorSequencePlayer extends UMovieSceneSequencePlayer {

}
declare const UActorSequencePlayer: UActorSequencePlayer;

