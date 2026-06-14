declare interface UBasic_AnimatedNumber_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Text_Number: UTextBlock;
    Font: FSlateFontInfo;
    Number: number;
    FractionalDigits: number;
    CountSound: USoundCue;
    StartTime: number;
    TimerHandle: FTimerHandle;
    OldNumber: number;
    PlaySount: boolean;
    TempCountNumber: number;
    CountAnimTime: number;
    CountUp(): void;
    PreConstruct(IsDesignTime: boolean): void;
    SetNumber(Number: number, DoCountAnim: boolean, PlayCountSound: boolean): void;
    ExecuteUbergraph_Basic_AnimatedNumber(EntryPoint: number): void;
}
declare const UBasic_AnimatedNumber_C: UBasic_AnimatedNumber_C;

