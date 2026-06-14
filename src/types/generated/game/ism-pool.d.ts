declare interface AISMPoolActor extends AActor {
    ISMPoolComp: UISMPoolComponent;
    ISMPoolDebugDrawComp: UISMPoolDebugDrawComponent;
}
declare const AISMPoolActor: AISMPoolActor;

declare interface UISMPoolComponent extends USceneComponent {

}
declare const UISMPoolComponent: UISMPoolComponent;

declare interface UISMPoolDebugDrawComponent extends UDebugDrawComponent {
    bShowGlobalStats: boolean;
    bShowStats: boolean;
    bShowBounds: boolean;
    SelectedComponent: UInstancedStaticMeshComponent;
}
declare const UISMPoolDebugDrawComponent: UISMPoolDebugDrawComponent;

declare interface UISMPoolSubSystem extends UWorldSubsystem {
    OnActorEndPlay(InSource: AActor, Reason: EEndPlayReason): void;
}
declare const UISMPoolSubSystem: UISMPoolSubSystem;

