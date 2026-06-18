declare interface FActorSequenceObjectReference {
    Type: EActorSequenceObjectReferenceType;
    ActorId: FGuid;
    PathToComponent: string;
}

declare interface FActorSequenceObjectReferenceMap {
    BindingIds: FGuid[];
    References: FActorSequenceObjectReferences[];
}

declare interface FActorSequenceObjectReferences {
    Array: FActorSequenceObjectReference[];
}

declare interface UActorSequence extends UMovieSceneSequence {
    readonly __properties_UActorSequence: {
        MovieScene: UMovieScene;
        ObjectReferences: FActorSequenceObjectReferenceMap;
    };
    readonly __staticRegistry: 
        UMovieSceneSequence['__staticRegistry'];
    readonly __propertyRegistry: 
        UActorSequence['__properties_UActorSequence'] &
        UMovieSceneSequence['__propertyRegistry'];
}

declare interface UActorSequenceComponent extends UActorComponent {
    readonly __static_UActorSequenceComponent: {
        StopSequence(): void;
        PlaySequence(): void;
        PauseSequence(): void;
    };
    readonly __properties_UActorSequenceComponent: {
        PlaybackSettings: FMovieSceneSequencePlaybackSettings;
        Sequence: UActorSequence;
        SequencePlayer: UActorSequencePlayer;
    };
    readonly __staticRegistry: 
        UActorSequenceComponent['__static_UActorSequenceComponent'] &
        UActorComponent['__staticRegistry'];
    readonly __propertyRegistry: 
        UActorSequenceComponent['__properties_UActorSequenceComponent'] &
        UActorComponent['__propertyRegistry'];
}

declare interface UActorSequencePlayer extends UMovieSceneSequencePlayer {
    readonly __staticRegistry: 
        UMovieSceneSequencePlayer['__staticRegistry'];
    readonly __propertyRegistry: 
        UMovieSceneSequencePlayer['__propertyRegistry'];
}

