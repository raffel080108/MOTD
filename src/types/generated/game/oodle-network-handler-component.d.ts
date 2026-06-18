declare interface UOodleNetworkTrainerCommandlet extends UCommandlet {
    readonly __properties_UOodleNetworkTrainerCommandlet: {
        bCompressionTest: boolean;
        bWriteV5Dictionaries: boolean;
        HashTableSize: number;
        DictionarySize: number;
        DictionaryTrials: number;
        TrialRandomness: number;
        TrialGenerations: number;
        bNoTrials: boolean;
    };
    readonly __staticRegistry: 
        UCommandlet['__staticRegistry'];
    readonly __propertyRegistry: 
        UOodleNetworkTrainerCommandlet['__properties_UOodleNetworkTrainerCommandlet'] &
        UCommandlet['__propertyRegistry'];
}

