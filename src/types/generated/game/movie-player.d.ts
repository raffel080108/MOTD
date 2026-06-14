declare interface UMoviePlayerSettings extends UObject {
    bWaitForMoviesToComplete: boolean;
    bMoviesAreSkippable: boolean;
    StartupMovies: TArray<FString>;
}
declare const UMoviePlayerSettings: UMoviePlayerSettings;

