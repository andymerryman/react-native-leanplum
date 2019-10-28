import { NativeModules } from 'react-native';
import { LPInbox } from './LPInbox';
;
;
export const Leanplum = {
    /**
     * Optional. Sets the API server. The API path is of the form http[s]://hostname/servletName
     * @param hostName The name of the API host, such as api.leanplum.com
     * @param servletName The name of the API servlet, such as api
     * @param ssl Whether to use SSL
     */
    setApiConnectionSettings: (hostName, servletName, usingSsl) => {
        return NativeModules.Leanplum.setApiConnectionSettings(hostName, servletName, usingSsl);
    },
    /**
     * Optional. Adjusts the network timeouts.
     * The default timeout is 10 seconds for requests, and 15 seconds for file downloads.
     */
    setNetworkTimeout: (seconds, downloadSeconds) => {
        return NativeModules.Leanplum.setNetworkTimeout(seconds, downloadSeconds);
    },
    /**
     * iOS Only.
     * Sets whether to show the network activity indicator in the status bar when making requests.
     * Default: YES.
     */
    setNetworkActivityIndicatorEnabled: (enabled) => {
        return NativeModules.Leanplum.setNetworkActivityIndicatorEnabled(enabled);
    },
    /**
     * Advanced: Whether new variables can be downloaded mid-session. By default, this is disabled.
     * Currently, if this is enabled, new variables can only be downloaded if a push notification is sent
     * while the app is running, and the notification's metadata hasn't be downloaded yet.
     */
    setCanDownloadContentMidSessionInProductionMode: (enabled) => {
        return NativeModules.Leanplum.setCanDownloadContentMidSessionInProductionMode(enabled);
    },
    /**
     * Modifies the file hashing setting in development mode.
     * By default, Leanplum will hash file variables to determine if they're modified and need
     * to be uploaded to the server if we're running in the simulator.
     * Setting this to NO will reduce startup latency in development mode, but it's possible
     * that Leanplum will not always have the most up-to-date versions of your resources.
     */
    setFileHashingEnabledInDevelopmentMode: (enabled) => {
        return NativeModules.Leanplum.setFileHashingEnabledInDevelopmentMode(enabled);
    },
    /**
     * iOS Only.
     * Sets whether to enable verbose logging in development mode. Default: NO.
     */
    setVerboseLoggingInDevelopmentMode: (enabled) => {
        return NativeModules.Leanplum.setVerboseLoggingInDevelopmentMode(enabled);
    },
    /**
     * iOS Only.
     * Sets a custom event name for in-app purchase tracking. Default: Purchase.
     */
    setInAppPurchaseEventName: (event) => {
        return NativeModules.Leanplum.setInAppPurchaseEventName(event);
    },
    /**
     * Must call either this or {@link setAppIdForProductionMode}
     * before issuing any calls to the API, including start.
     * @param appId Your app ID.
     * @param accessKey Your development key.
     */
    setAppIdForDevelopmentMode: (appId, accessKey) => {
        return NativeModules.Leanplum.setAppIdForDevelopmentMode(appId, accessKey);
    },
    /**
     * Must call either this or {@link setAppIdForDevelopmentMode}
     * before issuing any calls to the API, including start.
     * @param appId Your app ID.
     * @param accessKey Your production key.
     */
    setAppIdForProductionMode: (appId, accessKey) => {
        return NativeModules.Leanplum.setAppIdForProductionMode(appId, accessKey);
    },
    /**
     * Sets a custom device ID. For example, you may want to pass the advertising ID to do attribution.
     * By default, the device ID is the identifier for vendor.
     */
    setDeviceId: (deviceId) => {
        return NativeModules.Leanplum.setDeviceId(deviceId);
    },
    /**
     * iOS Only.
     * By default, Leanplum reports the version of your app using CFBundleVersion, which
     * can be used for reporting and targeting on the Leanplum dashboard.
     * If you wish to use CFBundleShortVersionString or any other string as the version,
     * you can call this before your call to Leanplum.start()
     */
    setAppVersion: (appVersion) => {
        return NativeModules.Leanplum.setAppVersion(appVersion);
    },
    /**
     * Call this when your application starts.
     * This will initiate a call to Leanplum's servers to get the values
     * of the variables used in your app.
     */
    start: (userId, attributes) => {
        return NativeModules.Leanplum.start(userId, attributes);
    },
    /**
     * Returns whether or not Leanplum has finished starting.
     */
    hasStarted: () => {
        return NativeModules.Leanplum.hasStarted();
    },
    /**
     * Returns whether or not Leanplum has finished starting and the device is registered
     * as a developer.
     */
    hasStartedAndRegisteredAsDeveloper: () => {
        return NativeModules.Leanplum.hasStartedAndRegisteredAsDeveloper();
    },
    /**
     * Function to call when the start call finishes, and variables are returned
     * back from the server. Calling this multiple times will call each function
     * in succession.
     */
    onStartResponse: (callback) => {
        return NativeModules.Leanplum.onStartResponse(callback);
    },
    /**
     * Function to call when the variables receive new values from the server.
     * This will be called on start, and also later on if the user is in an experiment
     * that can update in realtime.
     */
    onVariablesChanged: (callback) => {
        return NativeModules.Leanplum.onVariablesChanged(callback);
    },
    /**
     * iOS Only.
     * Function to call when the interface receive new values from the server.
     * This will be called on start, and also later on if the user is in an experiment
     * that can update in realtime.
     */
    onInterfaceChanged: (callback) => {
        return NativeModules.Leanplum.onInterfaceChanged(callback);
    },
    /**
     * Function to call when no more file downloads are pending (either when
     * no files needed to be downloaded or all downloads have been completed).
     */
    onVariablesChangedAndNoDownloadsPending: (callback) => {
        return NativeModules.Leanplum.onceVariablesChangedAndNoDownloadsPending(callback);
    },
    /**
     * Function to call ONCE when no more file downloads are pending (either when
     * no files needed to be downloaded or all downloads have been completed).
     */
    onceVariablesChangedAndNoDownloadsPending: (callback) => {
        return NativeModules.Leanplum.onceVariablesChangedAndNoDownloadsPending(callback);
    },
    /**
     * Updates a user ID after session start.
     */
    setUserId: (userId) => {
        return NativeModules.Leanplum.setUserId(userId);
    },
    /**
     * Updates a user ID after session start with a dictionary of user attributes.
     */
    setUserAttributes: (userId, attributes) => {
        return NativeModules.Leanplum.setUserAttributes(userId, attributes);
    },
    /**
     * Sets the traffic source info for the current user.
     * Keys in info must be one of: publisherId, publisherName, publisherSubPublisher,
     * publisherSubSite, publisherSubCampaign, publisherSubAdGroup, publisherSubAd.
     */
    setTrafficSourceInfo: (info) => {
        return NativeModules.Leanplum.setTrafficSourceInfo(info);
    },
    /**
     * Advances to a particular state in your application. The string can be
     * any value of your choosing, and will show up in the dashboard.
     * A state is a section of your app that the user is currently in.
     * You can specify up to 200 types of parameters per app across all events and state.
     * The parameter keys must be strings, and values either strings or numbers.
     * @param state The name of the state. (nullable)
     * @param info Anything else you want to log with the state. For example, if the state
     * is watchVideo, info could be the video ID.
     * @param params A dictionary with custom parameters.
     */
    advanceTo: (state, info, params) => {
        return NativeModules.Leanplum.advanceTo(state, info, params);
    },
    /**
     * Pauses the current state.
     * You can use this if your game has a "pause" mode. You shouldn't call it
     * when someone switches out of your app because that's done automatically.
     */
    pauseState: () => {
        return NativeModules.Leanplum.pauseState();
    },
    /**
     * Resumes the current state.
     */
    resumeState: () => {
        return NativeModules.Leanplum.resumeState();
    },
    /**
     * Automatically tracks all of the screens in the app as states.
     * You should not use this in conjunction with advanceTo as the user can only be in
     * 1 state at a time. This method requires LeanplumUIEditor module.
     */
    trackAllAppScreens: () => {
        return NativeModules.Leanplum.trackAllAppScreens();
    },
    /**
     * Manually track purchase event with currency code in your application. It is advised to use
     * trackInAppPurchases to automatically track IAPs.
     */
    trackPurchase: (event, value, currencyCode, params) => {
        return NativeModules.Leanplum.trackPurchase(event, value || 0, currencyCode, params);
    },
    /**
     * iOS Only.
     * Automatically tracks InApp purchase and does server side receipt validation.
     */
    trackInAppPurchases: () => {
        return NativeModules.Leanplum.trackInAppPurchases();
    },
    /**
     * Logs a particular event in your application. The string can be
     * any value of your choosing, and will show up in the dashboard.
     * To track a purchase, use trackPurchase().
     */
    track: (event, value, info, params) => {
        return NativeModules.Leanplum.track(event, value || 0, info, params);
    },
    /**
     * Gets a list of variants that are currently active for this user.
     * Each variant is a dictionary containing an id.
     */
    variants: () => {
        return NativeModules.Leanplum.variants();
    },
    /**
     * Forces content to update from the server. If variables have changed, the
     * appropriate callbacks will fire. Use sparingly as if the app is updated,
     * you'll have to deal with potentially inconsistent state or user experience.
     * The provided callback will always fire regardless
     * of whether the variables have changed.
     */
    forceContentUpdate: (callback) => {
        return NativeModules.Leanplum.forceContentUpdate(callback);
    },
    /**
     * This should be your first statement in a unit test. This prevents
     * Leanplum from communicating with the server.
     */
    enableTestMode: () => {
        return NativeModules.Leanplum.enableTestMode();
    },
    /**
     * Used to enable or disable test mode. Test mode prevents Leanplum from
     * communicating with the server. This is useful for unit tests.
     */
    setTestModeEnabled: (isTestModeEnabled) => {
        return NativeModules.Leanplum.setTestModeEnabled();
    },
    /**
     * iOS Only.
     * Customize push setup. If this API should be called before [Leanplum start]. If this API is not
     * used the default push setup from the docs will be used for "Push Ask to Ask" and
     * "Register For Push".
     */
    setPushSetup: (callback) => {
        return NativeModules.Leanplum.setPushSetup(callback);
    },
    /**
     * iOS Only.
     * Returns YES if the app existed on the device more than a day previous to a version built with
     * Leanplum was installed.
     */
    isPreLeanplumInstall: () => {
        return NativeModules.Leanplum.isPreLeanplumInstall();
    },
    /**
     * Returns the deviceId in the current Leanplum session. This should only be called after
     * Leanplum.start().
     */
    deviceId: () => {
        return NativeModules.Leanplum.deviceId();
    },
    /**
     * Returns the userId in the current Leanplum session. This should only be called after
     * [Leanplum start].
     */
    userId: () => {
        return NativeModules.Leanplum.userId();
    },
    /**
     * Returns an instance to the singleton LPInbox object.
     */
    inbox: () => {
        return LPInbox;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVhbnBsdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTGVhbnBsdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBWW5DLENBQUM7QUFJRCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3RCOzs7OztPQUtHO0lBQ0gsd0JBQXdCLEVBQUUsQ0FBQyxRQUFnQixFQUFFLFdBQW1CLEVBQUUsUUFBaUIsRUFBUSxFQUFFO1FBQzNGLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUIsRUFBRSxDQUFDLE9BQWUsRUFBRSxlQUF1QixFQUFRLEVBQUU7UUFDcEUsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtDQUFrQyxFQUFFLENBQUMsT0FBZ0IsRUFBUSxFQUFFO1FBQzdELE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILCtDQUErQyxFQUFFLENBQUMsT0FBZ0IsRUFBUSxFQUFFO1FBQzFFLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQywrQ0FBK0MsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsc0NBQXNDLEVBQUUsQ0FBQyxPQUFnQixFQUFRLEVBQUU7UUFDakUsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hGLENB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