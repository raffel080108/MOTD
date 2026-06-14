declare interface UNetConnectionEOS extends UIpConnection {

}
declare const UNetConnectionEOS: UNetConnectionEOS;

declare interface UNetDriverEOS extends UIpNetDriver {
    bIsPassthrough: boolean;
    bIsUsingP2PSockets: boolean;
}
declare const UNetDriverEOS: UNetDriverEOS;

declare interface UNetDriverEOSBase extends UNetDriverEOS {

}
declare const UNetDriverEOSBase: UNetDriverEOSBase;

