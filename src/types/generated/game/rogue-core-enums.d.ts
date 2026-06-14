declare const enum EAbilityActivationMode {
    Toggle = 0,
    Hold = 1
}

declare const enum EAbilityActivationType {
    OnRelease = 0,
    OnPress = 1
}

declare const enum EAbilityAmountType {
    Size = 0,
    Lifetime = 1
}

declare const enum EAbilityBlockedOn {
    Unique = 0,
    OtherOfEqualAbility = 1,
    OtherTeamAbility = 2
}

declare const enum EAbilityDeactivationType {
    OnDuration = 0,
    OnRelease = 1,
    OnPress = 2,
    OnAnimationFinished = 3,
    Custom = 4
}

declare const enum EAbilityDroneState {
    Disabled = 0,
    Searching = 1,
    Attacking = 2,
    Probing = 3,
    Recalling = 4,
    Reviving = 5
}

declare const enum EAbilityIndex {
    ENone = 0,
    EPrimary = 1,
    ESecondary = 2
}

declare const enum EAboutToPlayReason {
    Normal = 0,
    LateJoin = 1,
    ReJoin = 2
}

declare const enum EActivityType {
    Mission = 0,
    Assignment = 1,
    Tutorial = 2,
    None = 3
}

declare const enum EAfflictionSocket {
    CenterMass = 0,
    Feet = 1,
    Camera = 2
}

declare const enum EAllDwarvesDownAction {
    Default = 0,
    Ignore = 1
}

declare const enum EAllyQuerySorting {
    NoSorting = 0,
    DistanceSorted = 1,
    Random = 2
}

declare const enum EAmmoDrivenWeapnUpgradeType {
    MaxAmmo = 0,
    ClipSize = 1,
    RateOfFire = 2,
    ReloadSpeed = 3,
    RecoilMultiplier = 4,
    RecoilMultiplierV = 5,
    RecoilMultiplierH = 6,
    BurstCount = 7,
    BurstRateOfFire = 8,
    ActivateBurstFireMode = 9,
    ActivateAutomaticFireMode = 10,
    HeatUpRateModifier = 11,
    AutoReloadDuration = 12,
    RecoilMass = 13,
    OverheatOnReload = 14,
    ShotCost = 15,
    CustomEvent1 = 16,
    HeatReductionOnReload = 17,
    FillMagazine = 18
}

declare const enum EAmmoWeaponState {
    Equipping = 0,
    Ready = 1,
    Cycling = 2,
    Reloading = 3,
    BurstCycling = 4
}

declare const enum EArmorDamageType {
    Normal = 0,
    Dissolve = 1,
    Beam = 2
}

declare const enum EArmorMeshType {
    None = 0,
    Default = 1,
    DefaultBeardCompatible = 2,
    Sleeveless = 4,
    SleevelessBeardCompatible = 8
}

declare const enum EArmorSetArms {
    Invalid = 0,
    LeftShoulder = 1,
    RightShoulder = 2,
    LeftUpperArm = 3,
    LeftLowerArm1 = 4,
    LeftLowerArm2 = 5,
    LeftHand = 6,
    LeftHandAttach = 7,
    RightUpperArm = 8,
    RightLowerArm1 = 9,
    RightLowerArm2 = 10,
    RightHand = 11,
    RightHandAttach = 12
}

declare const enum EArmorSetLegs {
    Invalid = 0,
    LeftUpperLeg = 1,
    LeftLowerLeg = 2,
    LeftFoot = 3,
    LeftToe = 4,
    RightUpperLeg = 5,
    RightLowerLeg = 6,
    RightFoot = 7,
    RightToe = 8
}

declare const enum EArmorSetTorso {
    Invalid = 0,
    UpperTorso = 1,
    MiddleTorso = 2,
    LowerTorso = 3,
    UpperBack = 4,
    MiddleBack = 5,
    LowerBack = 6,
    LeftHip = 7,
    RightHip = 8,
    FrontHip = 9,
    LeftUpperLeg = 10,
    LeftLowerLeg = 11,
    LeftFoot = 12,
    LeftToe = 13,
    RightUpperLeg = 14,
    RightLowerLeg = 15,
    RightFoot = 16,
    RightToe = 17
}

declare const enum EArmorType {
    Light = 0,
    Heavy = 1,
    Unbreakable = 2
}

declare const enum EArmorUpgradeType {
    RegenDelay = 0,
    RegenRate = 1,
    ReviveInvulnerability = 2
}

declare const enum EAscensionAnimationState {
    None = 0,
    Start = 1,
    Loop = 2,
    End = 3
}

declare const enum EAscensionHallState {
    NoDwarfHasEntered = 0,
    DwarfHasEntered = 1,
    AscensionInProgress = 2
}

declare const enum EAssaultRifleUpgrade {
    KillResetsSpread = 0,
    KillTriggerStatusEffect = 1
}

declare const enum EAsyncLoadPriority {
    Normal = 0,
    High = 100,
    Low = 255
}

declare const enum EAsyncPersistence {
    Manual = 0,
    Level = 1,
    Permanent = 2
}

declare const enum EAttackOrigin {
    FromSelf = 0,
    FromSocket = 1,
    CenterOntarget = 2
}

declare const enum EAudioCharacterOverrideType {
    IsLocalPlayer = 0,
    IsNotLocalPlayer = 1
}

declare const enum EAutoCannonUpgrades {
    FireTimeIncreaseScaleMultiplier = 0,
    DamageBonusAtFullROF = 1,
    StatusEffectAtFullROF = 2,
    StartingFireRate = 3,
    MaxFireRate = 4
}

declare const enum EAutoShotgunUpgrades {
    TurretSpecialAttackEnabled = 0,
    RateOfFireAndAutoMatic = 1,
    CQCBuffOnKill = 2
}

declare const enum EBXECompanionDroneState {
    Following = 0,
    LandingToUpgrade = 1,
    LandingToDeposit = 2,
    Dispensing = 3,
    ActivatingElevator = 4,
    Waiting = 5,
    Deposit = 6,
    ActivatingMachinery = 7,
    ProcessingArtifact = 8,
    DispensingArtifact = 9,
    ProcessingPotentExpenite = 10,
    DispensingPotentExpenite = 11,
    Saluting = 12,
    TakeoffToFollow = 13,
    TakeoffToDeposit = 14
}

declare const enum EBXEOverclockType {
    None = 0,
    Safe = 1,
    Any = 2
}

declare const enum EBartenderAnim {
    Idle = 0,
    Pour = 1,
    Salute = 2,
    None = 3
}

declare const enum EBasicPistol {
    ConsecutiveHitsDamageBonus = 0
}

declare const enum EBeamTrackerSetting {
    Component = 0,
    Location = 1
}

declare const enum EBeltDrivenWeaponUpgrade {
    BarrelSpinupTime = 0,
    BarrelSpinDownTime = 1
}

declare const enum EBioBoosterSelectionMode {
    AllFromAllDecks = 0,
    AllFromOneDeck = 1
}

declare const enum EBoltActionRifleUpgrades {
    FocusSpeed = 0,
    AimedShotStagger = 1,
    AimedWeakShotKillFearFactor = 2,
    FocusDamageBonus = 3,
    UnZoomedAccuracySpread = 4,
    FocusedWeakspotHitStatusEffect = 5,
    NoGravityOnFocus = 6,
    KillReloadTimeBoost = 7,
    AimedShotWeakpointDamageBonusMultiplier = 8,
    AimedShotAmmoCost = 9,
    AimBot = 10
}

declare const enum EBoltActionWeaponConditions {
    WasAimedShot = 0,
    WasNormalShot = 1
}

declare const enum EBoomerangState {
    None = 0,
    Curving = 1,
    GoingBack = 2,
    Targeting = 3
}

declare const enum EBoscoAbillityTargetPreference {
    Self = 0,
    SelectedTarget = 1,
    ClosestPlayer = 2,
    ClosestEnemy = 3,
    TargetLocation = 4
}

declare const enum EBoscoUpgrades {
    MiningSpeedUpgrade = 0,
    ExtraRevive = 1,
    ActiveLightRadius = 2,
    Missile = 3,
    CryoGrenade = 4,
    SACooldownReduction = 5,
    ExtraAbillityCharge = 6,
    ReviveArmor = 7,
    ReviveHealth = 8
}

declare const enum EBulletMode {
    EMultiTrace = 0,
    ECapsule = 1
}

declare const enum EBurstWeaponUpgrades {
    FullBurstHitBonusDamage = 0,
    FullBurstStaggerDuraion = 1
}

declare const enum ECampaignMutators {
    NotAllowed = 0,
    Allowed = 1,
    Preffered = 2
}

declare const enum ECampaignType {
    Normal = 0,
    Weekly = 1,
    MatrixCoreHunt = 2,
    SeededRandom = 3
}

declare const enum ECapsuleHitscanUpgradeType {
    ShotWidth = 0,
    PenetrateEnemies = 1
}

declare const enum ECaretakerSpawnType {
    None = 0,
    Drones = 1,
    Bombs = 2,
    Shredders = 3,
    Turrets = 4
}

declare const enum ECategoryConditionListMode {
    Whitelist = 0,
    Blacklist = 1
}

declare const enum ECaveEntrancePriority {
    Primary = 0,
    Secondary = 1
}

declare const enum ECaveEntranceType {
    EntranceAndExit = 0,
    Entrance = 1,
    Exit = 2,
    TreassureRoom = 3
}

declare const enum ECaveLeechState {
    Idle = 0,
    Tracking = 1,
    Pulling = 2,
    Retracting = 3,
    Dying = 4,
    Dead = 5,
    Frozen = 6,
    Immobilized = 7
}

declare const enum ECellCategory {
    Cave = 0,
    Tunnel = 1
}

declare const enum ECharacterCameraMode {
    FirstPerson = 0,
    ThirdPerson = 1,
    Follow = 2,
    DownCamera = 3,
    TerrainScanner = 4,
    PhotographyMode = 5,
    FirstPersonHeadOnly = 6,
    Gym = 7,
    FollowExternal = 8
}

declare const enum ECharacterGender {
    Neutral = 0,
    Male = 1,
    Female = 2
}

declare const enum ECharacterHeadMesh {
    Full = 0,
    ThichNeckOnly = 1,
    ThinNeckOnly = 2,
    None = 3,
    FlatEars = 4,
    FaceOnly = 5,
    EyesOnly = 6,
    Masks = 7
}

declare const enum ECharacterIconType {
    HeroIcon = 0,
    CharacterSelectorIcon = 1,
    SmallHeroIcon = 2,
    HeroFullSizeImage = 3,
    AbilityIcon = 4
}

declare const enum ECharacterMoveDirection {
    None = 0,
    Forward = 1,
    Left = 2,
    Right = 3,
    Back = 4
}

declare const enum ECharacterState {
    Walking = 0,
    Downed = 1,
    Dead = 2,
    Falling = 3,
    Paralyzed = 4,
    Using = 5,
    ZipLine = 6,
    NoMovement = 7,
    Grabbed = 8,
    Flying = 9,
    Frozen = 10,
    PassedOut = 11,
    Photography = 12,
    Piloting = 13,
    Attached = 14,
    Pushing = 15,
    TrackMovement = 16,
    EnemyControl = 17,
    Infected = 18,
    Gym = 19,
    Stored = 20,
    Invalid = 21,
    Suspended = 22,
    Buried = 23
}

declare const enum EChargedProjectileUpgrades {
    ExplodesOnDamage = 0,
    AoEDamageInFlight = 1,
    PersistentExplosion = 2
}

declare const enum EChargedWeaponUpgrades {
    ShotCostAtFullCharge = 0,
    ChargeSpeed = 1,
    CoolingRate = 2,
    HeatPerSecondCharging = 3,
    HeatPerSecondCharged = 4,
    HeatPerChargedShot = 5,
    HeatPerNormalShot = 6
}

declare const enum ECharselectionCameraLocation {
    Selection = 0,
    Customization = 1,
    Crafting = 2,
    ViewWeapon = 3,
    EndScreen = 4,
    Forge = 5,
    Pickaxe = 6
}

declare const enum EChatMessageType {
    ES_Chat = 0,
    ES_Game = 1
}

declare const enum EChatSenderType {
    NormalUser = 0,
    DeluxUser = 1,
    Developer = 2,
    Streamer = 3,
    Translator = 4
}

declare const enum ECleanedStatus {
    EInfected = 0,
    EVacuumed = 1
}

declare const enum ECoilgunTraceEffect {
    EPrimary = 0,
    EDamage = 1,
    EFear = 2
}

declare const enum ECoilgunUpgrades {
    EResistanceWhileCharging = 0,
    ETransferAilment = 1,
    EFlamekills = 2,
    EOvercharge = 3,
    EUnderCharge = 4,
    EWeaponBlast = 5,
    EShotwaveRange = 6,
    EImpactFearFactor = 7,
    EDamageOnShotWave = 8,
    EImpactFearRadius = 9,
    EEffectTrailDuration = 10,
    EEffectTrailBonusRadius = 11,
    EBrokenShieldBonus = 12,
    EPostChargeBurst = 13,
    EOwnerShieldCapacity = 14,
    EBlockShieldWhileCharing = 15,
    EWeaknessWhileCharging = 16,
    EPierceDepthDamage = 17,
    EBurnGround = 18,
    EElectricTrail = 19,
    EFireTrail = 20,
    EPenetrationDepth = 21,
    EPrimaryBonusShotWidth = 22,
    EShieldDelay = 23
}

declare const enum ECollectionConditionResult {
    Allow = 0,
    Deny = 1,
    Failure = 2
}

declare const enum ECompositMode {
    AnySucceeds = 0,
    AllSucceeds = 1
}

declare const enum EConsoleGraphicsMode {
    Fidelity = 0,
    Performance = 1,
    Performance120 = 2
}

declare const enum ECoreCrusherState {
    Disassembled = 0,
    Idle = 1,
    Running = 2,
    Broken = 3,
    Done = 4
}

declare const enum ECoreTentacleState {
    Idle = 0,
    Search = 1,
    MeleeAttack = 2,
    RangedAttack = 3,
    GrabAttack = 4,
    GrabShake = 5
}

declare const enum ECreatureSize {
    Tiny = 0,
    Small = 1,
    Medium = 2,
    Large = 3,
    Huge = 4
}

declare const enum ECriticalItemPass {
    LargePass = 0,
    SmallPass = 1
}

declare const enum ECritterOutOfRangeBehaviour {
    Destroy = 0,
    Disable = 1,
    Nothing = 2
}

declare const enum ECrossbowEffectApplication {
    ToDefault = 0,
    ToSpecial = 1,
    ToAll = 2
}

declare const enum ECrossbowHit {
    InvalidHit = 0,
    OldHit = 1,
    NewHit = 2
}

declare const enum ECrossbowStuckType {
    Default = 0,
    Electric = 1,
    Chemical = 2,
    Banshee = 3
}

declare const enum ECrossbowSwitchState {
    Normal = 0,
    Cancelled = 1,
    DuringReload = 2
}

declare const enum ECrossbowUpgrades {
    SpecialArrowPheramone = 0,
    SpecialArrowTaser = 1,
    SpecialArrowChemical = 2,
    BansheeModule = 3,
    Magnetic = 4,
    RadioModule = 5,
    Ricochet = 6,
    VelocityChange = 7,
    DamageDefault = 8,
    RadialDamageDefault = 9,
    Trifork = 10,
    Pentafork = 11,
    BattleFrenzy = 12,
    IncreaseSpecialAmmo = 13,
    IncreaseSpecialAmmoPercent = 14,
    SuperFast = 15,
    IncreaseSpecialEffectDuration = 16,
    FasterSwitch = 17,
    CryoArrow = 18,
    FireArrow = 19,
    ReloadTimeDefaultArrow = 20,
    RateOfFireDefaultArrow = 21
}

declare const enum ECryoSprayUpgrades {
    PressureDropMultiplier = 0,
    PressureGainMultiplier = 1,
    ChargeupTime = 2,
    RePressurisationTime = 3,
    FrozenTargetsCanShatter = 4,
    AoECold = 5,
    LongReach = 6,
    SprayWidth = 7
}

declare const enum ECustomUsableType {
    ClearOnFrameEnd = 0,
    ClearOnUseReleased = 1,
    ClearManually = 2
}

declare const enum EDamageBonusApplicationType {
    OnTarget = 0,
    OnEquippedItems = 1
}

declare const enum EDamageBonusType {
    Add = 0,
    Mutliply = 1
}

declare const enum EDamageComponentType {
    Primary = 0,
    Secondary = 1,
    Tertiary = 2,
    Quaternary = 3,
    Quinary = 4,
    Any = 5
}

declare const enum EDamageConditionDistanceMode {
    FromInstigator = 0,
    FromCauser = 1,
    FromDamageLocation = 2
}

declare const enum EDamageListenerQualities {
    None = 0,
    OnDamagedTarget = 1,
    OnDamagedLocaiton = 2,
    OnReceivedDamage = 3,
    OnCritTarget = 4,
    OnHitTarget = 5,
    OnRadialOverlap = 6,
    OnKilledTarget = 7
}

declare const enum EDamageMethod {
    Direct = 0,
    Radial = 1
}

declare const enum EDamageNumberHitType {
    None = 0,
    Weak = 1,
    Normal = 2,
    Strong = 3,
    BreakableArmor = 4,
    UnbreakableArmor = 5
}

declare const enum EDamageNumberReplicationBits {
    Radial = 0,
    Armor = 1,
    DamageOverTime = 2
}

declare const enum EDamageType {
    Fire = 0,
    Cold = 1,
    Melee = 2,
    Kinetic = 3,
    Explosive = 4,
    Stun = 5,
    Electrocution = 6,
    Fear = 7,
    Radiation = 8,
    Pheromone = 9,
    Poison = 10,
    ArmorBreaking = 11,
    Push = 12,
    Grab = 13,
    None = 14,
    Slow = 15,
    Defense = 16,
    TemperatureShock = 17,
    Corrosive = 18,
    Piercing = 19,
    RockPox = 20
}

declare const enum EDamageUpgrade {
    Damage = 0,
    WeakpointDamageMultiplier = 1,
    StaggerChance = 2,
    StaggerDuration = 3,
    RadialRange = 4,
    ArmorDamageMultiplier = 5,
    FearFactor = 6,
    RadialRangeMultiplier = 7,
    StaggerOnWeakpointOnly = 8,
    FriendlyFireModifier = 9,
    ShattersArmor = 10,
    ArmorPenetration = 11,
    DamageMultiplier = 12,
    BaseDamageMultiplier = 13,
    Num = 14
}

declare const enum EDamageVector {
    Ranged = 0,
    Melee = 1,
    Explosion = 2,
    DamageOverTime = 3
}

declare const enum EDamagebonusMode {
    Numerical = 0,
    Dynamic = 1
}

declare const enum EDartLauncherUpgradeType {
    Projectile = 0
}

declare const enum EDashPointsGenerationMode {
    Surround = 0,
    Forward = 1
}

declare const enum EDealType {
    Buy = 0,
    Sell = 1
}

declare const enum EDeathType {
    Alive = 0,
    Normal = 1,
    Weakpoint = 2,
    Burned = 3,
    Frozen = 4,
    Exploded = 5,
    SpawnEnemies = 6,
    Gibbed = 7,
    Corrosive = 8,
    Cook = 9,
    ChemicalExplosion = 10,
    PlasmaExplosion = 11
}

declare const enum EDebrisCarvedType {
    Large = 0,
    Small = 1,
    LevelGeneration = 2,
    Resources = 3,
    PreLarge = 4
}

declare const enum EDebrisColliderType {
    Object = 0,
    AirParticles = 1,
    ObjectB = 2,
    Construction = 3
}

declare const enum EDebrisItemPass {
    PrePlacement = 0,
    CriticalLarge = 1,
    DebrisLarge = 2,
    Dirt = 3,
    Main = 4,
    PostDebris = 5,
    Decoration = 6
}

declare const enum EDebrisMeshCollisionProfile {
    NoCollision = 0,
    HitOnly = 1,
    HitAndCollide = 2
}

declare const enum EDebrisMeshShadows {
    Never = 0,
    High = 1,
    Always = 2
}

declare const enum EDebrisOrientation {
    Random = 0,
    RandomXY = 1,
    AlignToSurfaceNormal = 2,
    Fixed = 3
}

declare const enum EDecalImportance {
    High = 0,
    Normal = 1,
    Low = 2
}

declare const enum EDeepMovementMode {
    Normal = 0,
    Flee = 1,
    Fly = 2,
    BackOff = 3
}

declare const enum EDeepMovementState {
    Stationary = 0,
    Controlled = 1,
    Moving = 2,
    WaitingForPath = 3,
    AttackStance = 4,
    FakePhysics = 5
}

declare const enum EDefendPointState {
    Idle = 0,
    Started = 1,
    Completed = 2,
    Failed = 3
}

declare const enum EDetPackUpgrades {
    CanPickUp = 0,
    CarveDiameter = 1,
    ExplodeOnDeath = 2,
    ExtraFearRadius = 3,
    ExtraStaggerRadius = 4
}

declare const enum EDialogRestriction {
    None = 0,
    SinglePlayerOnly = 1,
    MultiPlayerOnly = 2
}

declare const enum EDialogVoice {
    Voice01 = 0,
    Voice02 = 1
}

declare const enum EDirectDamageConditionEnum {
    Direct = 0,
    Radial = 1
}

declare const enum EDiscordBiomeType {
    CrystallineCaverns = 0,
    FungusBogs = 1,
    GlacialStrata = 2,
    DenseBiozone = 3,
    MagmaCore = 4,
    Radioactive = 5,
    SaltPits = 6,
    Sandblasted = 7,
    CausticMire = 8,
    AzureWeald = 9,
    HollowBough = 10,
    Spacerig = 11
}

declare const enum EDiscordMissionType {
    MiningExpedition = 0,
    EggHunt = 1,
    Escort = 2,
    Elimination = 3,
    PointExtraction = 4,
    Salvage = 5,
    Refinery = 6,
    None = 7
}

declare const enum EDoubleDrillState {
    Equipping = 0,
    Idle = 1,
    Mining = 2,
    Overheated = 3,
    OutOfFuel = 4
}

declare const enum EDoubleDrillUpgradeType {
    MiningRate = 0,
    MaxFuel = 1,
    HeatRemovalOnKill = 2,
    HeatRemovalOnDamage = 3,
    MovementPenalty = 4
}

declare const enum EDoubleLanePromptLocation {
    SweetSpot = 0,
    AreaAroundSweetSpot = 1,
    Corners = 2
}

declare const enum EDrinkableAlcoholStrength {
    NonAlcoholic = 0,
    Light = 1,
    Regular = 2,
    Strong = 3,
    VeryStrong = 4,
    InstantPassout = 5
}

declare const enum EDroneAIState {
    Follow = 0,
    Mine = 1,
    Fight = 2,
    Revive = 3,
    Light = 4,
    GoToPlayer = 5,
    Salute = 6,
    CarryGem = 7,
    UseAbillity = 8,
    Repairing = 9,
    Cleaning = 10
}

declare const enum EDroneActions {
    Wandering = 0,
    Mining = 1,
    Fighting = 2,
    Lighting = 3,
    Reviving = 4
}

declare const enum EDroneState {
    EFollow = 0,
    EMining = 1,
    ELight = 2,
    EMax = 3
}

declare const enum EDroppableOutpostState {
    WaitingToDrop = 0,
    Drilling = 1,
    Landed = 2,
    PrepTakeoff = 3,
    Departing = 4
}

declare const enum EDualMachinePistolsUpgrades {
    TriggerStatusEffectOnEmptyClip = 0
}

declare const enum EDynamicReverbSetting {
    None = 0,
    Small = 1,
    Medium = 2,
    Large = 3
}

declare const enum EElectricalSMGUpgrades {
    AoEChance = 0,
    PlasmaBeam = 1,
    TurretEMPDischarge = 2
}

declare const enum EElementEventLockType {
    None = 0,
    UseEventDurationAsElementLock = 1,
    LockUntilEventRemoved = 2
}

declare const enum EElementSourceIntensity {
    Intensity1 = 0,
    Intensity2 = 1,
    Intensity3 = 2,
    Num = 3
}

declare const enum EEnemyAttackType {
    Melee = 0,
    Ranged = 1,
    Grab = 2,
    Area = 3,
    Move = 4
}

declare const enum EEnemyControlState {
    Connecting = 0,
    Connected = 1,
    ThrowingOff = 2,
    Disconnecting = 3,
    Disconneced = 4
}

declare const enum EEnemyDescriptorCheatClass {
    Hidden = 0,
    Basic = 1,
    Disruptive = 2,
    Advanced = 3,
    Stationary = 4,
    Testing = 5,
    Mactera = 6,
    Specials = 7,
    Boss = 8
}

declare const enum EEnemyDescriptorCheatTag {
    DRG = 0,
    RC = 1
}

declare const enum EEnemyFamily {
    CoreSpawn = 0,
    Glyphid = 1,
    Mactera = 2,
    Naedocyte = 3,
    Qronar = 4,
    Xynarch = 5,
    Nayaka = 6,
    Deeptora = 7,
    Korlok = 8,
    Automaton = 9,
    Unknown = 10,
    RivalTech = 11,
    Lithophage = 12,
    Native = 13,
    Rafkan = 14,
    Krizzok = 15,
    Gatekeeper = 16,
    Shatterclaw = 17
}

declare const enum EEnemyHealthMutatorListType {
    Inclusive = 0,
    Exclusive = 1
}

declare const enum EEnemyHealthScaling {
    SmallEnemy = 0,
    LargeEnemy = 1,
    ExtraLargeEnemy = 2,
    ExtraLargeEnemyB = 4,
    ExtraLargeEnemyC = 5,
    ExtraLargeEnemyD = 6,
    NoScaling = 3
}

declare const enum EEnemySignificance {
    Swarmer = 0,
    Normal = 1,
    Critical = 2,
    Critter = 3
}

declare const enum EEnemyType {
    Ground = 0,
    Flying = 1,
    GroundAndFlying = 2,
    Stationary = 3
}

declare const enum EEscortExtractorState {
    ReadyToGrab = 0,
    Taken = 1,
    Full = 2
}

declare const enum EEscortHammeState {
    Intital = 0,
    WindUp = 1,
    Ready = 2,
    PrepLaunch = 3,
    Launch = 4,
    Impacted = 5,
    Complete = 6,
    NUM = 7
}

declare const enum EEscortMissionState {
    Stationary = 0,
    Moving = 1,
    WaitingForFuel = 2,
    FinalEvent = 3,
    Finished = 4,
    ShellCracked = 5,
    VehicleDead = 6,
    InGarage = 7
}

declare const enum EExampleEnum {
    FirstName = 0,
    SecondName = 1
}

declare const enum EExerciseDifficulty {
    PickDifficulty = 0,
    Easy = 1,
    Normal = 2,
    Hard = 3,
    Impossible = 4
}

declare const enum EExerciseDifficultyChoice {
    AlwaysPickSelected = 0,
    AllowEasierDifficulties = 1,
    AllowHarderDifficulties = 2,
    AllowAll = 3
}

declare const enum EExitTrackMode {
    None = 0,
    StopInPlace = 1,
    JumpInPlace = 2,
    JumpInCamDir = 3,
    JumpInTrackDir = 4
}

declare const enum EExtractorState {
    Attached = 0,
    OnGround = 1,
    Equipping = 2,
    Idle = 3,
    Mining = 4
}

declare const enum EFSDFaction {
    NoFaction = 0,
    CaveCrawlers = 1,
    MightyMiners = 2,
    DirtDiggers = 3
}

declare const enum EFSDInputSource {
    None = 0,
    MouseAndKeyboard = 1,
    Controller = 2
}

declare const enum EFSDPingType {
    EaseOut = 0,
    Bounce = 1
}

declare const enum EFSDServerListFilterModdedType {
    Any = 0,
    OnlyModdedGames = 1,
    NoModdedGames = 2
}

declare const enum EFSDServerListFilterProgressType {
    Any = 0,
    IsInProgress = 1,
    NotInProgress = 2
}

declare const enum EFSDServerListLobbySortOrder {
    Name = 0,
    Depth = 1,
    Complexity = 2,
    Length = 3,
    PlayerCount = 4,
    Distance = 5,
    Mutator = 6,
    Status = 7
}

declare const enum EFacilityEye {
    EForward = 0,
    EBack = 1,
    ELeft = 2,
    ERight = 3
}

declare const enum EFacilityTentacleState {
    Idle = 0,
    HasTarget = 1,
    Melee = 2,
    Ranged = 3
}

declare const enum EFadeScreenType {
    FadeToBlack = 0,
    FadeFromBlack = 1
}

declare const enum EFilterType {
    Exclude = 0,
    Include = 1
}

declare const enum EFitnessMontageSectionNames {
    IdleUp = 0,
    IdleDown = 1,
    GoingUp = 2,
    GoingDown = 3,
    MissedUp = 4,
    MissedDown = 4,
    Start = 6,
    Fail = 7,
    End = 8
}

declare const enum EFlameThrowerUpgradeType {
    StickyFlameDuration = 0,
    LongReach = 1,
    AoEHeat = 2,
    KilledTargetsExplodeChance = 3
}

declare const enum EFlareUpgradeType {
    Duration = 0,
    MaxFlares = 1,
    ProductionTime = 2
}

declare const enum EFlaregunProjectileUpgrades {
    Duration = 0
}

declare const enum EFlaregunUpgrades {
    AutoReload = 0
}

declare const enum EFlyingBugDeathAnimationCategory {
    NoAnimation = 0,
    IdleOnDeath = 1
}

declare const enum EFriendOnlineStatusEnum {
    Online = 0,
    Offline = 1,
    Away = 2
}

declare const enum EFrozenAfflictionType {
    Frozen = 0,
    Infected = 1
}

declare const enum EFrozenBitsSize {
    Tiny = 0,
    Small = 1,
    Medium = 2,
    Large = 3,
    Huge = 4
}

declare const enum EGameModeAvailability {
    All = 0,
    SoloOnly = 1,
    CoopOnly = 2
}

declare const enum EGameOwnerStatus {
    Supporter = 0,
    ContentCreator = 1,
    Translator = 2,
    Developer = 3,
    EGameOwnerStatus_Max = 255
}

declare const enum EGatlingGunUpgrade {
    DamageMultiplierAtMaxStabilization = 0,
    HeatRemovedOnKill = 1,
    CriticalOverheat = 2,
    BarrelProximityDamage = 3
}

declare const enum EGeneratorIconType {
    Vanity = 0,
    PickaxePart = 1,
    PickaxeSet = 2,
    WeaponSkin = 3
}

declare const enum EGenericAbilityUpgradeType {
    ExtraCharges = 0,
    AbilityRecharge = 1
}

declare const enum EGooGunFireMode {
    Normal = 0,
    Charge = 1,
    Burst = 2
}

declare const enum EGooGunProjectileUpgrades {
    PuddleLifeSpan = 0,
    FragmentCount = 1
}

declare const enum EGooGunUpgrades {
    ChargeFire = 0,
    BurstFire = 1,
    ShotCostCharged = 2,
    ChargeTime = 3,
    ChargeShotCount = 4
}

declare const enum EGrabbedStateCameraMode {
    FirstPerson = 0,
    ThirdPerson = 1
}

declare const enum EGrabberState {
    StandBy = 0,
    Chase = 1,
    Carry = 2,
    Flee = 3
}

declare const enum EGrapplingHookUpgrade {
    MaxDistance = 0,
    MaxSpeed = 1,
    WindUpTime = 2
}

declare const enum EGrenadeUpgradeType {
    MaxGrenades = 0,
    FuseTime = 1
}

declare const enum EGuardianGauntletUpgrade {
    EndStaggerDuration = 0
}

declare const enum EGuntowerModuleState {
    EDormant = 0,
    EActive = 1,
    EVulnerable = 2,
    EDestoyed = 3
}

declare const enum EGymActions {
    Action1 = 0,
    Action2 = 1,
    Action3 = 2,
    Action4 = 3,
    Action5 = 4,
    Action6 = 5,
    Action7 = 6,
    Action8 = 7,
    Action9 = 8,
    Action10 = 9,
    NoAction = 10
}

declare const enum EGymAnimationState {
    Start = 0,
    GoingDown = 1,
    GoingUp = 2,
    UpFail = 3,
    DownFail = 4,
    End = 5,
    None = 6
}

declare const enum EGymDisplayType {
    TotalSets = 0,
    HighScores = 1
}

declare const enum EGymGamemode {
    Meter = 0,
    Run = 1,
    Button = 2,
    ButtonSequence = 3,
    None = 4
}

declare const enum EHUDVisibilityGroups {
    OnScreenHelp = 0,
    EnemyHealth = 1,
    RadarAndDepth = 2,
    PlayerHealthShield = 3,
    PlayerNameClassIcon = 4,
    PlayerItems = 5,
    PlayerResources = 6,
    WeaponInfo = 7,
    Grenades = 8,
    FlashLight = 9,
    Flares = 10,
    Crosshair = 11,
    Objectives = 12,
    TeamDisplay = 13,
    SentryGunDisplay = 14,
    VersionNumber = 15,
    HostileReading = 16,
    ExpeniteBar = 17,
    Unlocks = 18,
    PostEntrance = 19,
    PlayerAbility = 20
}

declare const enum EHUDVisibilityMode {
    Visible = 0,
    Dynamic = 1,
    Hidden = 2
}

declare const enum EHUDVisibilityPresets {
    AllVisible = 0,
    Recommended = 1,
    Minimal = 2,
    AllHidden = 3
}

declare const enum EHUDVisibilityReason {
    Invalid = 0,
    UserChoice = 1,
    StandDown = 2,
    MenuActive = 4,
    Photography = 8,
    WindowOpen = 16
}

declare const enum EHackingPodState {
    EClosed = 0,
    EShowDispenser = 1,
    EShowButton = 2,
    EHacking = 3,
    EDestroyed = 4,
    EDone = 5
}

declare const enum EHeadVanityType {
    HairOnly = 0,
    HeadGearOnly = 1,
    HeadGearOnly_UseArmorMaterial = 2,
    HairAndHeadGear = 3,
    HairAndHeadGear_UseArmorMaterial = 4
}

declare const enum EHealthbarType {
    None = 0,
    MainLife = 1,
    Shield = 2
}

declare const enum EHeavyParticleCannonUpgrade {
    ReloadOnButtonRelease = 0,
    BoosterModule = 1,
    KillAddsAmmo = 2,
    RadialDamageIncPerSecond = 3,
    RadialRangeIncPerSecond = 4,
    BulkyBeam = 5,
    ProjectionModule = 6,
    PlatformExplosions = 7
}

declare const enum EHeightDiffrenceTargetingMode {
    Above = 0,
    Below = 1,
    Either = 2
}

declare const enum EHitScanBaseUpgradeType {
    MinimumVerticalSpread = 0,
    MinimumHorizontalSpread = 1,
    MaxPenetrations = 2,
    WeaponAccuracySpreadMultiplier = 3,
    SpreadPerShot = 4,
    MinSpreadWhileMoving = 5,
    SpreadRecoveryMultiplier = 6,
    MinSpreadWhileSprinting = 7,
    MaxSpread = 8,
    RicochetChance = 9,
    RicochetOnWeakspotOnly = 10,
    RicochetBehaviourAll = 11,
    RicochetBehaviourPawnsOnly = 12,
    RicochetBehaviourNotPawns = 13
}

declare const enum EHolidayType {
    None = 0,
    LunarFestival = 1,
    Anniversary = 2,
    Easter = 3,
    BeachParty = 4,
    Oktoberfest = 5,
    Halloween = 6,
    Xmas = 7,
    OneOffEvent = 8
}

declare const enum EImpactDecalSize {
    Small = 0,
    Medium = 1,
    Large = 2,
    None = 3
}

declare const enum EImpulseDirectionSource {
    SourceForward = 0,
    SourceToTarget = 1,
    PlayerToTarget = 2,
    TargetUp = 3,
    TargetRandomOnPlane = 4
}

declare const enum EIndicatorMode {
    EConstant = 0,
    EFlashing = 1,
    EOff = 2
}

declare const enum EInputInteraction {
    Press = 0,
    Hold = 1
}

declare const enum EInputKeys {
    Use = 0,
    Fire = 1,
    Mine = 2
}

declare const enum EIntelChallengeState {
    Locked = 0,
    Active = 1,
    Claimable = 2,
    Complete = 3
}

declare const enum EIntelObjectiveState {
    Locked = 0,
    Claimable = 1,
    Active = 2,
    Complete = 3
}

declare const enum EIntoxicationState {
    NotIntoxicated = 0,
    Intoxicated = 1,
    PassOut = 2
}

declare const enum EInventoryItemUpgradeType {
    MovementSpeedWhileUsing = 0,
    CooldownRate = 1,
    UnJamDuration = 2,
    ManualCooldownDelay = 3,
    ManualHeatPerUse = 4
}

declare const enum EItemActivationType {
    Immediate = 0,
    Manual = 1
}

declare const enum EItemAdjustmentType {
    None = 0,
    Cieling = 1,
    Wall = 2,
    Floor = 3
}

declare const enum EItemAimSetup {
    FromParent = 0,
    OneHandedLeft = 1,
    OneHandedRight = 2,
    OneHandedDual = 3,
    TwoHanded = 4
}

declare const enum EItemCategory {
    None = 0,
    PrimaryWeapon = 1,
    SecondaryWeapon = 2,
    Tool = 4,
    Misc = 8,
    Grenade = 16,
    Flare = 32,
    MiningTool = 64,
    Armor = 128
}

declare const enum EItemNotificationType {
    NewOverclock = 0
}

declare const enum EItemPreviewStatus {
    Normal = 0,
    Upgraded = 1,
    Previewed = 2,
    PreviewReduced = 3,
    UpgradedAndPreviewReduced = 4
}

declare const enum EItemSkinCollectionType {
    PerCharacter = 0,
    PerItem = 1
}

declare const enum EItemSkinType {
    PaintJob = 0,
    Framework = 1
}

declare const enum EItemUpgradeNumberTransformType {
    None = 0,
    Absolute = 1,
    PercentageMultiplier = 2,
    PercentageAddition = 3,
    PercentageAdditionInverse = 4,
    PercentageAdditionAbsolute = 5,
    Distance = 6
}

declare const enum EItemUpgradeStatus {
    Locked = 0,
    AvailableCannotAfford = 1,
    AvailableCanAfford = 2,
    Owned = 3,
    Equipped = 4
}

declare const enum EKeyBindingAxis {
    None = 0,
    Positive = 1,
    Negative = 2
}

declare const enum EKeyBindingSlot {
    Primary = 0,
    Secondary = 1
}

declare const enum EKeyStrokeMatcherMode {
    Sequence = 0,
    Simultaneous = 1
}

declare const enum EKeyboardLayout {
    QWERTY = 0,
    AZERTY = 1,
    QWERTZ = 2
}

declare const enum ELandscapeCellFilter {
    Any = 0,
    Empty = 1,
    Filled = 2,
    Diggable = 3,
    NotDiggable = 4,
    Collidable = 5,
    NotCollidable = 6,
    Rubble = 7,
    NotRubble = 8
}

declare const enum ELaserPointerMarkerType {
    Primary = 0,
    Secondary = 1,
    Count = 2
}

declare const enum ELaserPointerTargetType {
    Chunkable = 0,
    Dirt = 1,
    Player = 2,
    Enemy = 3,
    EmbeddedGem = 4,
    Other = 5
}

declare const enum ELevelCarverType {
    None = 0,
    MeshCarver = 1,
    SplineCarver = 2
}

declare const enum ELineCutterProjectileUpgradeType {
    LineSize = 0,
    LineSizeMultiplier = 1,
    ExplosiveRound = 2,
    SetDeployDelay = 3,
    AddDeployTime = 4,
    ExplodeOnNextProjectile = 5,
    DoubleLine = 6,
    LineSizeAdd = 7,
    SetDeployTime = 8,
    RollUntilStop = 9,
    Yawing = 10,
    PlasmaTrail = 11
}

declare const enum ELineCutterUpgradeType {
    ReverseDirection = 0,
    ExplodeLastProjectile = 1
}

declare const enum ELineRotation {
    None = 0,
    Yaw = 1,
    Pitch = 2,
    Roll = 3
}

declare const enum ELoadingScreenType {
    None = 0,
    DropPod = 1,
    ElevatorReady = 2,
    ElevatorLoop = 3,
    EndScreen = 4,
    Tutorial = 5
}

declare const enum ELockOnWeaponUpgrades {
    MaxLockOnDegree = 0,
    TimeBetweenLockedShots = 1,
    LockOnTime = 2,
    MaxTargets = 3,
    LoseLockOnDegree = 4,
    MaxLockOnRange = 5,
    PrioritizeLowHitpoint = 6,
    AlwaysHitTarget = 7,
    MaxLockOnDuration = 8,
    LockOnControlsSentryGun = 9,
    AoeHitCountThreshhold = 10,
    SentryGunShootsOnLockedShot = 11,
    UseLockOnTargetStatusEffect = 12,
    FearEnabled = 13
}

declare const enum EMaggotAnimationState {
    Idle = 0,
    Moving = 1
}

declare const enum EMediaPlayerState {
    Stopped = 0,
    Playing = 1
}

declare const enum EMeshAttachType {
    ECharacterMesh = 0,
    ECamera = 1
}

declare const enum EMicroMissileLauncherFireMode {
    Normal = 0,
    Charge = 1,
    Buck = 2
}

declare const enum EMicroMissileLauncherUpgrades {
    ChargeFire = 0,
    BuckFire = 1,
    DisableHomingOnRelease = 2,
    ShotDirectionHorizontalDegreeOffset = 3,
    ShotDirectionVerticleDegreeOffset = 4
}

declare const enum EMicrowaveGunUpgrade {
    ESlowOnHit = 0,
    EFocusLense = 1,
    EWideLense = 2,
    ESpreadFire = 3,
    ESpreadNeuro = 4,
    EKilledTargetsExplodeChance = 5,
    ERadiantSuperheater = 6,
    EHeatsink = 7,
    BlisteringNecrosis = 8,
    EGammaContaminationZone = 9,
    ETemperatureAmplifier = 10
}

declare const enum EMinersManualDescriptionList {
    DamageTypes = 0,
    ElementTypes = 1,
    CustomTypes = 2
}

declare const enum EMinersManualSection {
    FrontPage = 0,
    Hints = 1,
    Combat = 2,
    Opposition = 3,
    Gear = 4,
    Upgrades = 5,
    FacilityEncounter = 6,
    ExpeniteEvents = 7,
    Artifacts = 8
}

declare const enum EMinersManualSinglePage {
    Mutators = 0,
    Warnings = 1,
    DamageTypes = 2,
    Weakpoints = 3,
    Armor = 4,
    Light = 5,
    Ammo = 6,
    Traversal = 7,
    Spacerig = 8,
    Upgrades = 9,
    Perks = 10,
    Bosco = 11,
    Assignments = 12,
    Navigation = 13
}

declare const enum EMiningPodMission {
    DropAndReturn = 0,
    Extraction = 1,
    DropFromSpacerig = 2
}

declare const enum EMiningPodRampState {
    Closed = 0,
    Opening = 1,
    Open = 2,
    Closing = 3
}

declare const enum EMiningPodState {
    Dropping = 0,
    Drilling = 1,
    Landed = 2,
    PrepTakeoff = 3,
    Departing = 4,
    WaitingForGameStart = 5,
    InSpace = 6,
    Destroy = 7,
    WaitOnSpacerig = 8,
    ExitSpacerig = 9,
    Damaged = 10,
    PoweringUp = 11,
    PoweredUp = 12,
    DeepDiveDeparture = 13
}

declare const enum EMissionControlID {
    MissionControl = 0,
    Omega = 1
}

declare const enum EMissionRandomStreams {
    MidStationStore = 0,
    MidStationCrafting = 1
}

declare const enum EMissionShoutID {
    StageStarted = 0
}

declare const enum EMissionStatType {
    Float = 0,
    Integer = 1,
    Time = 2,
    Distance = 3
}

declare const enum EMissionStructure {
    SingleMission = 0,
    DeepDive_Normal = 1,
    DeepDive_Elite = 2
}

declare const enum EModifyStatusEffectDamageUpgrade {
    Duration = 0
}

declare const enum EMoveDirection {
    None = 0,
    Forward = 1,
    Left = 2,
    Right = 3,
    Back = 4
}

declare const enum EMoveType {
    EaseIn = 0,
    EaseOut = 1
}

declare const enum EMovementCustomMode {
    MOVE_Custom_None = 0,
    MOVE_Custom_Track = 1,
    MOVE_Custom_CharacterStateControlled = 2,
    MOVE_Custom_TraversalTool = 3,
    MOVE_Custom_JetBoots = 4,
    MOVE_Custom_Blitz = 5
}

declare const enum EMultiConditionComparison {
    Or = 0,
    And = 1
}

declare const enum EMultiHitscanUpgradeType {
    BulletsPerShot = 0
}

declare const enum ENVidiaReflexMode {
    Disabled = 0,
    Enabled = 1,
    EnabledWithBoost = 2
}

declare const enum ENamedCountdownState {
    NotStarted = 0,
    Started = 1,
    Finished = 2
}

declare const enum ENisseState {
    Idle = 0,
    Walking = 1,
    Running = 2,
    Frozen = 3
}

declare const enum ENumericUpgradeType {
    ClipSizeFlat = 0,
    ClipSizeMultiplier = 1,
    ReserveCountFlat = 2,
    ReserveCountMultiplier = 3,
    TEst = 4,
    Num = 5
}

declare const enum EObjectiveFailReason {
    None = 0,
    SpawnFail = 1
}

declare const enum EObjectiveState {
    None = 0,
    Spawned = 1,
    Seen = 2,
    Started = 3,
    Completed = 4
}

declare const enum EOffsetFrom {
    None = 0,
    Floor = 1,
    Ceiling = 2
}

declare const enum EOnProjectileImpactBehaviourEnum {
    CallOnPredict = 0,
    CallOnConfirmed = 1,
    CallOnPredictAndConfirmed = 2,
    ClientAuthoritative = 3
}

declare const enum EOutline {
    OL_NONE = 0,
    OL_FRIENDLY = 2,
    OL_NEUTRAL = 3,
    OL_ENEMY = 4,
    OL_ITEM = 5,
    OL_UPGRADESTATION = 6,
    OL_CRIT_DART = 7
}

declare const enum EOverlapShape {
    Sphere = 0,
    Box = 1,
    Capsule = 2
}

declare const enum EOverrideCrit {
    No = 0,
    ForceCrit = 1,
    ForceNormal = 2
}

declare const enum EPatrolBotControlState {
    Hostile = 0,
    Disabled = 1,
    Hacked = 2
}

declare const enum EPatrolBotState {
    Rolling = 0,
    Flying = 1,
    Disabled = 2
}

declare const enum EPauseReason {
    Invalid = 0,
    MenuActive = 1,
    ReconnectController = 2,
    Negotiation = 4
}

declare const enum EPawnAttitude {
    Friendly = 0,
    Neutral = 1,
    Hostile = 2
}

declare const enum EPawnMaterialMode {
    Default = 0,
    Override = 1
}

declare const enum EPawnStatType {
    Multiplicative = 0,
    Additive = 1
}

declare const enum EPerkHUDActivationLocation {
    Main = 0,
    Down = 1
}

declare const enum EPerkName {
    IronWill = 0,
    DashPerk = 1,
    ShieldLink = 2,
    Bezerk = 3,
    JumpBoots = 4,
    DownedBomb = 5,
    FieldMedic = 6,
    HeightenedSenses = 7,
    HoverBoots = 8
}

declare const enum EPerkTierState {
    Claimable = 0,
    Claimed = 1,
    Locked = 2,
    Unaffordable = 3,
    NotAvailable = 4
}

declare const enum EPerkUsageType {
    Passive = 0,
    Active = 1
}

declare const enum EPhysicalMaterialType {
    Terrain = 0,
    Indestructable = 1,
    Destructable = 2,
    Creature = 3,
    Any = 4
}

declare const enum EPickaxePart {
    Head = 0,
    Blade = 1,
    Shaft = 2,
    Handle = 3,
    Pommel = 4,
    Material = 5
}

declare const enum EPickaxePartLocation {
    Head = 0,
    FrontBlade = 1,
    BackBlade = 2,
    Shaft = 3,
    Handle = 4,
    Pommel = 5,
    Material = 6,
    Count = 7
}

declare const enum EPickaxeState {
    Equipping = 0,
    Mining = 1,
    Attack = 2,
    PowerAttack = 3,
    End = 4
}

declare const enum EPickaxeUpgradeType {
    RockMining = 0,
    OneHitMineralMining = 1,
    ReceiveBonusMineralNitra = 2,
    ReceiveBonusMineralGold = 3,
    EnablePowerAttack = 4,
    PowerAttackCoolDown = 5
}

declare const enum EPipelineBuildState {
    NotStarted = 0,
    BeginBuilt = 1,
    Completed = 2,
    Broken = 3
}

declare const enum EPipelineExtractorPodAnimState {
    Folded = 0,
    Idle = 1,
    Running = 2,
    Broken = 3
}

declare const enum EPiplelineConnectorAnimationState {
    Unassembled = 0,
    Assembling = 1,
    Assembled = 2
}

declare const enum EPlaceableObstructionType {
    Valid = 0,
    GroundTooSteep = 1,
    TooShort = 2,
    TooLong = 3,
    TurnTooSharp = 4,
    Blocked = 5,
    NotEnoughRoom = 6,
    TooSteep = 7,
    TooClose = 8,
    Other = 9
}

declare const enum EPlanetBiomeState {
    Available = 0,
    Locked = 1,
    OutOfRange = 2
}

declare const enum EPlasmaCarbineConditions {
    ShieldRemovedOnReload = 0
}

declare const enum EPlasmaCarbineUpgrades {
    RateOfFireBoostOnFullShield = 0,
    RemoveShieldOnOverheat = 1,
    RemoveShieldOnReload = 2
}

declare const enum EPlatformComponentCriteria {
    All = 0,
    ServerOnly = 1,
    ClientOnly = 2,
    OwningClientOnly = 3
}

declare const enum EPlatformGunUpgrades {
    BiggerPlatform = 0,
    LessFallDamage = 1,
    BugRepellant = 2,
    CubePlatform = 3
}

declare const enum EPlayerStageEndLocation {
    Unknown = 0,
    LeftWithSuccess = 1,
    LeftWithFailure = 2
}

declare const enum EPloverPositioningMode {
    Above = 0,
    Below = 1
}

declare const enum EPointVisibility {
    Visible = 0,
    BehindPlanet = 1,
    OutOfScreen = 2
}

declare const enum EPostProcessingType {
    GameWorld = 0,
    CharacterSelector = 1
}

declare const enum EProductionStatus {
    Done = 0,
    Prototype = 1,
    NA = 2,
    Unknown = 3
}

declare const enum EProjectileAttackRotationType {
    NoTarget_ActorForward = 0,
    NoTarget_Socket = 1,
    Always_Socket = 2
}

declare const enum EProjectileLauncherBaseUpgradeType {
    VerticalSpread = 0,
    HorizontalSpread = 1,
    TransferVelocityFromCharacter = 2,
    ArcStartAngle = 3,
    SpreadPerShot = 4
}

declare const enum EProjectileSwitchCriteria {
    None = 0,
    CharagedProjectile = 1,
    HeatAbove = 2,
    HeatBelow = 3,
    CycleButtonSecondsHeld = 4
}

declare const enum EProjectileUpgrade {
    Velocity = 0,
    MaxVelocity = 1,
    Bouncy = 2,
    Lifetime = 3,
    DoOnImpact = 4,
    DoOnImpact2 = 5,
    DoOnImpact3 = 6,
    DoOnSpawn = 7,
    HomingStrength = 8,
    SetInitialSpeedToMaxSpeed = 9,
    AccelerationMultiplier = 10,
    MaxPropulsionTime = 11,
    GravityScale = 12,
    CustomEvent = 13
}

declare const enum EProspectorRobotState {
    Searching = 0,
    Scanning = 1,
    Sampling = 2,
    Fleeing = 3
}

declare const enum ERarityComparision {
    Equals = 0,
    NotEquals = 1
}

declare const enum ERarityConditionResult {
    Allow = 0,
    Deny = 1,
    Failure = 2
}

declare const enum ERarityWeightType {
    Default = 0,
    NegotiatedUnlocks = 1,
    Artifacts = 2,
    Weapons = 3,
    Equipment = 4,
    Grenades = 5,
    Jumble = 6,
    WeaponsWorkbench = 7
}

declare const enum EReadyUpStage {
    NotActive = 0,
    Active = 1,
    Finished = 2
}

declare const enum ERecallableActorState {
    Idle = 0,
    RelocateRequested = 1,
    Relocating = 2,
    ReturnRequested = 3,
    Returning = 4,
    Home = 5
}

declare const enum ERedeployableSentryGunState {
    Deploying = 0,
    Deployed = 1,
    Dismantling = 2,
    Dismantled = 3
}

declare const enum ERefineryState {
    Landing = 0,
    ConnectingPipes = 1,
    PipesConnected = 2,
    Refining = 3,
    RefiningStalled = 4,
    RefiningComplete = 5,
    RocketLaunched = 6
}

declare const enum EReflectionHitscanUpgradeType {
    ReflectionCount = 0
}

declare const enum EResourceFilterType {
    BlackList = 0,
    WhiteList = 1
}

declare const enum ERessuplyPodState {
    ReadyToDrop = 0,
    Dropping = 1,
    Landed = 2,
    Idle = 3
}

declare const enum ERevolerUpgrades {
    OnKillFearFactor = 0
}

declare const enum ERewardTreeNodeState {
    Bought = 0,
    CanBuy = 1,
    Locked = 2
}

declare const enum ERicochetBehavior {
    All = 0,
    PawnsOnly = 1,
    NotPawns = 2
}

declare const enum ERiftCrystalState {
    Default = 0,
    InitialEmbeded = 1,
    Embedded = 2,
    Lifting = 3,
    Rifting = 4,
    Calling = 5,
    DeathDisplay = 6,
    Dead = 7
}

declare const enum ERivalBombNodeState {
    Inactive = 0,
    Active = 1,
    Hackable = 2,
    Completed = 3,
    Failed = 4
}

declare const enum ERobotState {
    Enemy = 0,
    Friendly = 1,
    PoweredDown = 2
}

declare const enum ERockCrackerstate {
    Init = 0,
    EFalling = 1,
    EConnect = 2,
    EDrilling = 3,
    EBroke = 4,
    EDone = 5
}

declare const enum ERoomMirror {
    None = 0,
    MirrorX = 1,
    MirrorY = 2
}

declare const enum ERoomMirroringSupport {
    NotAllowed = 0,
    MirrorAroundX = 1,
    MirrorAroundY = 2,
    MirrorBoth = 3
}

declare const enum ERunDepth {
    None = 0,
    Depth1 = 1,
    Depth2 = 2,
    Depth3 = 3,
    Depth4 = 4
}

declare const enum ERunHistoryNetMessageDataType {
    DamageData = 0,
    RunHistory = 1
}

declare const enum ERunItemOverrideType {
    None = 0,
    Force = 1
}

declare const enum ERunListOverrideType {
    None = 0,
    Force = 1,
    Add = 2
}

declare const enum ERunType {
    Default = 0,
    TimeAttack = 1,
    Tutorial = 2
}

declare const enum ESaveSlotChangeProcedure {
    NewSave = 0,
    Load = 1,
    Save = 2,
    FromCloud = 3
}

declare const enum ESawedOffShotgunUpgrades {
    FearOnShoot = 0,
    ShockWave = 2,
    ShotgunJump = 3
}

declare const enum ESchematicState {
    NotOwned = 0,
    Owned = 1,
    OwnedBuilt = 2
}

declare const enum ESchematicType {
    Overclock = 0,
    Vanity = 1,
    Resource = 2,
    Blank = 3
}

declare const enum ESeamlessTravelStorageType {
    Travel = 0,
    Disconnect = 1
}

declare const enum ESentryGunUpgradeType {
    MaxAmmo = 0,
    ReloadSpeed = 1,
    ExtraSentry = 2,
    AngleRestriction = 3,
    ManualTargeting = 4,
    MaxRange = 5,
    RotationSpeed = 6,
    BurstCooldown = 7
}

declare const enum EServerListFilterRunType {
    Any = 0,
    Default = 1,
    TimeAttack = 2,
    Tutorial = 3
}

declare const enum EServerListLobbyStatusType {
    JoinableRejoin = 0,
    JoinableInLobby = 1,
    JoinableInProgress = 2,
    CannotJoinOwnLobby = 3,
    CannotJoinIntelRequired = 4,
    CannotJoinInProgress = 5,
    CannotJoinFull = 6,
    CannotJoinUnknown = 7
}

declare const enum ESharkEnemyState {
    Idle = 0,
    Circling = 1,
    Attacking = 2,
    Vulnerable = 3,
    Dive = 4
}

declare const enum EShieldGeneratorUpgrades {
    Radius = 0,
    Duration = 1,
    DeployTime = 2,
    RechargeTime = 3,
    RechargeCount = 4,
    PushStatusEffect = 5
}

declare const enum EShoutType {
    Attention = 0,
    Follow = 1,
    StandingDown = 2,
    Downed = 3,
    RequestRevive = 4,
    Revived = 5,
    Resupply = 6,
    FriendlyFire = 7,
    KillCry = 8,
    Dead = 9,
    Cheating = 10,
    ResourceFull = 11,
    ResourceFullNoDonkey = 12,
    CallDonkey = 13,
    CallDonkey_NotInMission = 14,
    Depositing = 15,
    DepositingNoDonkey = 16,
    OutOfAmmo = 17,
    Reloading = 18,
    CharacterSelected = 19,
    UpgradeBought = 20,
    WaitingInDropPod = 21,
    Carrying = 22,
    WaitingInEscapePod = 23,
    Salute = 24,
    Salute_Spacerig = 25,
    Drink = 26,
    Workout = 27
}

declare const enum EShowroomScaling {
    NoScaling = 0,
    EnemySmall = 1,
    EnemyMedium = 2,
    EnemyBig = 3,
    EnemyHuge = 4
}

declare const enum ESingleUsableUpgradeType {
    UseDuration = 0
}

declare const enum ESnakingTentacleState {
    Idle = 0,
    Reaching = 1,
    Retracting = 2,
    Anticipating = 3,
    Attacking = 4,
    CoolingDown = 5,
    Retreating = 6,
    Burrowing = 7,
    Rising = 8,
    BigRetreating = 9,
    JailingTarget = 10,
    Buried = 11
}

declare const enum ESnapToDirection {
    Top = 0,
    Bottom = 1,
    Left = 2,
    Right = 3
}

declare const enum ESonyControllerLightMode {
    Disabled = 0,
    Simple = 1,
    Default = 2
}

declare const enum ESonyControllerMotionMapping {
    Yaw = 0,
    Roll = 1
}

declare const enum ESonyInputSettingsBools {
    MotionControlEnabled = 0,
    MotionControlFlight = 1,
    MotionControlSalute = 2,
    MotionControlPrecisionMode = 3,
    AdaptiveTriggersEnabled = 4,
    TouchPadTerrainScannerEnabled = 5,
    TouchPadGesturesEnabled = 6,
    ControllerSpeakerMissionControl = 7,
    ControllerSpeakerSalute = 8,
    ControllerSpeakerFlare = 9,
    ControllerSpeakerMineralCollection = 10
}

declare const enum ESonyInputSettingsFloats {
    MotionControlXSensitivity = 0,
    MotionControlYSensitivity = 1,
    ControllerSpeakerVolume = 2,
    TouchPadTerrainScannerXSensitivity = 3,
    TouchPadTerrainScannerYSensitivity = 4,
    TouchPadTerrainScannerZoomSensitivity = 5
}

declare const enum ESpacerigStartType {
    PlayerHub = 0,
    Medbay = 1
}

declare const enum ESpawnLordState {
    Idle = 0,
    Attacking = 1,
    SummoningAds = 2,
    Healing = 3,
    Final = 4
}

declare const enum ESpawnSettings {
    Normal = 0,
    NoSpawning = 1,
    SpawnAll = 2
}

declare const enum ESpecialDebrisType {
    None = 0,
    Plague = 1,
    LitPlague = 2
}

declare const enum ESpiderDeathAnimationCategory {
    NoAnimation = 0,
    Melt = 1,
    Cook = 2,
    Burn = 3
}

declare const enum EStackComparisonMethod {
    Equals = 0,
    LessThan = 1,
    GreaterThan = 2,
    LessThanOrEqual = 3,
    GreaterThanOrEqual = 4
}

declare const enum EStageType {
    Cave = 0,
    SafeRoom = 1
}

declare const enum EStaticSpawnPointGameplaySelection {
    Any = 0,
    BioBooster = 1,
    Workbench = 2,
    DroneActivatedCrate = 3,
    FillerRewards = 4,
    Armor = 5,
    Ammo = 6,
    Explosives = 7
}

declare const enum EStaticSpawnPointGameplayType {
    BioBooster = 0,
    Workbench = 1,
    DroneActivatedCrate = 2,
    FillerRewards = 3,
    Armor = 4,
    Ammo = 5,
    Explosives = 6
}

declare const enum EStaticSpawnPointSelectionType {
    Any = 0,
    Small = 1,
    Large = 2,
    Tiny = 3
}

declare const enum EStaticSpawnPointType {
    Small = 0,
    Large = 1,
    Tiny = 2
}

declare const enum EStaticSpawnPrioType {
    Primary = 0,
    Secondary = 1
}

declare const enum EStatusEffectPopSetting {
    Temporary = 0,
    Permanent = 1
}

declare const enum EStatusEffectStackMode {
    HasAnyStacks = 0,
    HasLessStacksThan = 1,
    HasMoreStacksThan = 2
}

declare const enum ESteamSearchRegion {
    Close = 0,
    Medium = 1,
    Far = 2,
    World = 3
}

declare const enum ESteamServerJoinStatus {
    Open = 0,
    PasswordRequired = 1
}

declare const enum ETagConditionType {
    HasAll = 0,
    HasAny = 1,
    HasNone = 2
}

declare const enum ETargetStateDamageBonusType {
    Fleeing = 0,
    Staggered = 1,
    ElementEventActive = 2
}

declare const enum ETargetingMethod {
    ByDistance = 0,
    ByAngleFromDirection = 1
}

declare const enum ETeamElevatorType {
    Unknown = 0,
    Entrance = 1
}

declare const enum ETemperatureIntensity {
    Cold3 = 0,
    Cold2 = 1,
    Cold1 = 2,
    Heat1 = 3,
    Heat2 = 4,
    Heat3 = 5
}

declare const enum ETerminatorShoutState {
    EIdle = 0,
    EGrabbing = 1,
    EDeath = 2,
    EAttacking = 3
}

declare const enum ETerminatorTentacleState {
    Idle = 0,
    Grabbing = 1,
    Grabbed = 2,
    Dead = 3
}

declare const enum ETerrainPlacementBoxType {
    NoTerrain = 0,
    Terrain = 1
}

declare const enum ETerrainPlacementCapsuleDebugResult {
    NotTestet = 0,
    Passed = 1,
    Failed = 2
}

declare const enum ETerrainPlacementRoomFilter {
    None = 0,
    WhiteList = 1,
    BlackList = 2
}

declare const enum ETetherConnectionMode {
    Both = 0,
    FrontOnly = 1,
    BackOnly = 2,
    None = 3
}

declare const enum ETetherMessageDirection {
    Forward = 0,
    Backward = 1,
    Both = 2
}

declare const enum EThrowableInput {
    LeftButton = 0,
    RightButton = 1
}

declare const enum EThrownGrenadeItemState {
    NotAvailable = 0,
    Holding = 1,
    Cooking = 2,
    Throwing = 3,
    WaitingToReturn = 4
}

declare const enum ETrackBuildPlacementState {
    NotBeingPlaced = 0,
    BeingPlaced = 1,
    Finished = 2
}

declare const enum ETreasureType {
    WeaponSkin = 0,
    VictoryPose = 1,
    PickaxePart = 2,
    VanityItem = 3
}

declare const enum ETriggeredStatusEffectType {
    ShieldDestroyed = 0,
    GrapplingHookReleased = 1,
    NONE = 2
}

declare const enum ETurn180Mode {
    PressRun = 0,
    PressFlare = 1,
    Off = 2
}

declare const enum EUnlockConditionResult {
    Allow = 0,
    Deny = 1,
    Failure = 2
}

declare const enum EUnlockRarityType {
    Undefined = 0,
    Common = 1,
    Uncommon = 2,
    Rare = 3,
    Epic = 4,
    Legendary = 5
}

declare const enum EUnlockType {
    None = 0,
    Upgrade = 1,
    BioBooster = 2,
    Artifact = 3,
    AbilityUpgrade = 4,
    Weapon = 5,
    Equipment = 6,
    Throwables = 7,
    Grenades = 8,
    Attribute = 9
}

declare const enum EUnlockableState {
    Unlockable = 0,
    Unlocked = 1,
    Locked = 2
}

declare const enum EUpdateDamageNumberColor {
    ENormal = 0,
    ENever = 1,
    EAlways = 2,
    EAlwaysNormalHit = 3
}

declare const enum EUpgradeCalucationType {
    Additive = 0,
    Multiplicative = 1
}

declare const enum EUpgradeClass {
    Class_A = 0,
    Class_B = 1,
    Gear_A = 2,
    Gear_B = 3,
    Armor = 4,
    Pickaxe = 5,
    Class_Bosco = 10
}

declare const enum EUpgradeTiers {
    Tier_1 = 0,
    Tier_2 = 1,
    Tier_3 = 2,
    Tier_4 = 3,
    Tier_5 = 4
}

declare const enum EVacuumState {
    EPuddle = 0,
    EVacuuming = 1,
    EFalling = 2,
    EDead = 3
}

declare const enum EVanityAquisitionType {
    UnlockedFromStart = 0,
    Purchased = 1,
    Schematic = 2,
    Treasure = 3
}

declare const enum EVanitySlot {
    Head = 0,
    Beard = 1,
    Armor = 2,
    BeardColor = 3,
    SkinColor = 4,
    Moustache = 5,
    Eyebrows = 6,
    Sideburns = 7,
    ArmorMaterial = 8,
    HeadAccessory = 9,
    Count = 10
}

declare const enum EVeteranScaling {
    NormalEnemy = 0,
    LargeEnemy = 1
}

declare const enum EVolumeType {
    CharacterVoices = 0,
    Master = 1,
    SFX = 2,
    Music = 3,
    VoiceChat = 4,
    VoiceChatInput = 5,
    MissionControl = 6
}

declare const enum EVoteOptionActionType {
    NEGATIVE = 0,
    POSITIVE = 1
}

declare const enum EWaveControllerType {
    Normal = 0,
    Tentacle = 1
}

declare const enum EWeakpointGlowMode {
    Set = 0,
    Additive = 1
}

declare const enum EWeaponFireUpgradeType {
    MaxVerticalSpread = 0,
    MaxHorizontalSpread = 1,
    WeaponAccuracySpreadMultiplier = 2,
    SpreadPerShot = 3,
    MinSpreadWhileMoving = 4,
    SpreadRecoveryMultiplier = 5,
    MinSpreadWhileSprinting = 6,
    MaxSpread = 7
}

declare const enum EWeaponOverviewModifierType {
    Additive = 0,
    Multiplicative = 1,
    Unique = 2
}

declare const enum EWeaponOverviewUnitType {
    Numerical = 0,
    Percentage = 1,
    Second = 2
}

declare const enum EWhileRewindActiveUpgrade {
    DamageBonuses = 0,
    SelfStatusEffects = 1,
    AlliesStatusEffects = 2
}

declare const enum EWindowResolutionDownscaleMode {
    None = 0,
    Full = 1
}

declare const enum EWoodLouseState {
    Unfolded = 0,
    Folded = 1,
    Size = 2
}

declare const enum EZiplineGunUpgrades {
    MaxAngle = 0,
    MaxDistance = 1,
    MovementSpeed = 2,
    FallDamageReduction = 3
}

declare const enum UFSDStreamlineDLSSGMode {
    Off = 0,
    On2X = 1,
    Auto = 2,
    On3X = 3,
    On4X = 4
}

