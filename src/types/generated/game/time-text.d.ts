declare interface UTimeText_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    TextBlock_Time: UTextBlock;
    ToTwoDigits(In: number, Out: FText): void;
    SetTime(In: FTimespan): void;
    ExecuteUbergraph_TimeText(EntryPoint: number): void;
}
declare const UTimeText_C: UTimeText_C;

