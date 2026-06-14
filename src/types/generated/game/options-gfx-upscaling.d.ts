declare interface UOptions_GFX_Upscaling_C extends UUserWidget {
    UberGraphFrame: FPointerToUberGraphFrame;
    Options_Scalability_UpscalingType: UOptions_UpscalingType_C;
    Options_Scalability_AntiAliasingType: UOptions_Scalability_AntiAliasingType_C;
    Options_NVIDIA_DLSSFG: UOptions_NVIDIA_DLSSFG_C;
    Options_NVIDIA_DLSS_Quality: UOptions_NVIDIA_DLSS_Quality_C;
    Options_GFX_Sharpening: UOptions_GFX_Sharpening_C;
    Options_AMDFrameGen: UOptions_AMDFrameGen_C;
    Options_AMD_FSR_Quality: UOptions_AMD_FSR_Quality_C;
    Options_AMD_FSR3_Quality: UOptions_AMD_FSR3_Quality_C;
    Options_AMD_FSR2_Quality: UOptions_AMD_FSR2_Quality_C;
    OPT_Upscaling: UBasic_Option_C;
    OPT_Sharpening: UBasic_Option_C;
    OPT_NVIDIADLSS_FrameGen: UBasic_Option_C;
    OPT_NVIDIADLSS: UBasic_Option_C;
    OPT_AMDFSRMode3: UBasic_Option_C;
    OPT_AMDFSRMode2: UBasic_Option_C;
    OPT_AMDFSRMode: UBasic_Option_C;
    OPT_AMD_FrameGen: UBasic_Option_C;
    OPT_AAType: UBasic_Option_C;
    SettingsChanged: FOptions_GFX_Upscaling_CSettingsChanged;
    Construct(): void;
    SettingsUpdated(): void;
    ExecuteUbergraph_Options_GFX_Upscaling(EntryPoint: number): void;
    SettingsChanged__DelegateSignature(): void;
}
declare const UOptions_GFX_Upscaling_C: UOptions_GFX_Upscaling_C;

