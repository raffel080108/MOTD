declare interface UMoviePlayerSettings extends UObject {
    readonly __properties_UMoviePlayerSettings: {
        bWaitForMoviesToComplete: boolean;
        bMoviesAreSkippable: boolean;
        StartupMovies: string[];
    };
    readonly __staticRegistry: 
        UObject['__staticRegistry'];
    readonly __propertyRegistry: 
        UMoviePlayerSettings['__properties_UMoviePlayerSettings'] &
        UObject['__propertyRegistry'];
}

