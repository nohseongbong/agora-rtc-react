// TypeScript cannot infer union from overloaded function types
// So duplicate the event types here
import type {
  AudioSourceState,
  ChannelMediaRelayError,
  ChannelMediaRelayEvent,
  ChannelMediaRelayState,
  ConnectionDisconnectedReason,
  ConnectionState,
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  IBufferSourceAudioTrack,
  ILocalTrack,
  ILocalVideoTrack,
  IRemoteTrack,
  IRemoteVideoTrack,
  NetworkQuality,
  RemoteStreamType,
  UID,
} from "agora-rtc-sdk-ng";
import type { Disposer, Fn } from "./utils";

// The following `declare` types are not exported well, so copy them here
export declare class AgoraRTCError extends Error {
  readonly code: `${AgoraRTCErrorCode}`;
  readonly message: string;
  readonly data?: any;
  readonly name: string;
  constructor(code: `${AgoraRTCErrorCode}`, message?: string, data?: any);
  toString(): string;
  print(level?: "error" | "warning"): AgoraRTCError;
  throw(): never;
}

export declare enum AgoraRTCErrorCode {
  UNEXPECTED_ERROR = "UNEXPECTED_ERROR",
  UNEXPECTED_RESPONSE = "UNEXPECTED_RESPONSE",
  TIMEOUT = "TIMEOUT",
  INVALID_PARAMS = "INVALID_PARAMS",
  NOT_READABLE = "NOT_READABLE",
  NOT_SUPPORTED = "NOT_SUPPORTED",
  INVALID_OPERATION = "INVALID_OPERATION",
  OPERATION_ABORTED = "OPERATION_ABORTED",
  WEB_SECURITY_RESTRICT = "WEB_SECURITY_RESTRICT",
  EXCHANGE_SDP_FAILED = "EXCHANGE_SDP_FAILED",
  NETWORK_ERROR = "NETWORK_ERROR",
  NETWORK_TIMEOUT = "NETWORK_TIMEOUT",
  NETWORK_RESPONSE_ERROR = "NETWORK_RESPONSE_ERROR",
  API_INVOKE_TIMEOUT = "API_INVOKE_TIMEOUT",
  ENUMERATE_DEVICES_FAILED = "ENUMERATE_DEVICES_FAILED",
  DEVICE_NOT_FOUND = "DEVICE_NOT_FOUND",
  ELECTRON_IS_NULL = "ELECTRON_IS_NULL",
  ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR = "ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR",
  CHROME_PLUGIN_NO_RESPONSE = "CHROME_PLUGIN_NO_RESPONSE",
  CHROME_PLUGIN_NOT_INSTALL = "CHROME_PLUGIN_NOT_INSTALL",
  MEDIA_OPTION_INVALID = "MEDIA_OPTION_INVALID",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  CONSTRAINT_NOT_SATISFIED = "CONSTRAINT_NOT_SATISFIED",
  TRACK_IS_DISABLED = "TRACK_IS_DISABLED",
  GET_VIDEO_ELEMENT_VISIBLE_ERROR = "GET_VIDEO_ELEMENT_VISIBLE_ERROR",
  SHARE_AUDIO_NOT_ALLOWED = "SHARE_AUDIO_NOT_ALLOWED",
  LOW_STREAM_ENCODING_ERROR = "LOW_STREAM_ENCODING_ERROR",
  SET_ENCODING_PARAMETER_ERROR = "SET_ENCODING_PARAMETER_ERROR",
  TRACK_STATE_UNREACHABLE = "TRACK_STATE_UNREACHABLE",
  INVALID_UINT_UID_FROM_STRING_UID = "INVALID_UINT_UID_FROM_STRING_UID",
  CAN_NOT_GET_PROXY_SERVER = "CAN_NOT_GET_PROXY_SERVER",
  CAN_NOT_GET_GATEWAY_SERVER = "CAN_NOT_GET_GATEWAY_SERVER",
  VOID_GATEWAY_ADDRESS = "VOID_GATEWAY_ADDRESS",
  UID_CONFLICT = "UID_CONFLICT",
  MULTI_UNILBS_RESPONSE_ERROR = "MULTI_UNILBS_RESPONSE_ERROR",
  UPDATE_TICKET_FAILED = "UPDATE_TICKET_FAILED",
  INVALID_LOCAL_TRACK = "INVALID_LOCAL_TRACK",
  INVALID_TRACK = "INVALID_TRACK",
  SENDER_NOT_FOUND = "SENDER_NOT_FOUND",
  CREATE_OFFER_FAILED = "CREATE_OFFER_FAILED",
  SET_ANSWER_FAILED = "SET_ANSWER_FAILED",
  ICE_FAILED = "ICE_FAILED",
  PC_CLOSED = "PC_CLOSED",
  SENDER_REPLACE_FAILED = "SENDER_REPLACE_FAILED",
  GET_LOCAL_CAPABILITIES_FAILED = "GET_LOCAL_CAPABILITIES_FAILED",
  GET_LOCAL_CONNECTION_PARAMS_FAILED = "GET_LOCAL_CONNECTION_PARAMS_FAILED",
  SUBSCRIBE_FAILED = "SUBSCRIBE_FAILED",
  UNSUBSCRIBE_FAILED = "UNSUBSCRIBE_FAILED",
  GATEWAY_P2P_LOST = "GATEWAY_P2P_LOST",
  NO_ICE_CANDIDATE = "NO_ICE_CANDIDATE",
  CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS = "CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS",
  EXIST_DISABLED_VIDEO_TRACK = "EXIST_DISABLED_VIDEO_TRACK",
  INVALID_REMOTE_USER = "INVALID_REMOTE_USER",
  REMOTE_USER_IS_NOT_PUBLISHED = "REMOTE_USER_IS_NOT_PUBLISHED",
  CUSTOM_REPORT_SEND_FAILED = "CUSTOM_REPORT_SEND_FAILED",
  CUSTOM_REPORT_FREQUENCY_TOO_HIGH = "CUSTOM_REPORT_FREQUENCY_TOO_HIGH",
  FETCH_AUDIO_FILE_FAILED = "FETCH_AUDIO_FILE_FAILED",
  READ_LOCAL_AUDIO_FILE_ERROR = "READ_LOCAL_AUDIO_FILE_ERROR",
  DECODE_AUDIO_FILE_FAILED = "DECODE_AUDIO_FILE_FAILED",
  WS_ABORT = "WS_ABORT",
  WS_DISCONNECT = "WS_DISCONNECT",
  WS_ERR = "WS_ERR",
  LIVE_STREAMING_TASK_CONFLICT = "LIVE_STREAMING_TASK_CONFLICT",
  LIVE_STREAMING_INVALID_ARGUMENT = "LIVE_STREAMING_INVALID_ARGUMENT",
  LIVE_STREAMING_INTERNAL_SERVER_ERROR = "LIVE_STREAMING_INTERNAL_SERVER_ERROR",
  LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED = "LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED",
  LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED = "LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED",
  LIVE_STREAMING_CDN_ERROR = "LIVE_STREAMING_CDN_ERROR",
  LIVE_STREAMING_INVALID_RAW_STREAM = "LIVE_STREAMING_INVALID_RAW_STREAM",
  LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT = "LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT",
  LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE = "LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE",
  LIVE_STREAMING_WARN_FREQUENT_REQUEST = "LIVE_STREAMING_WARN_FREQUENT_REQUEST",
  WEBGL_INTERNAL_ERROR = "WEBGL_INTERNAL_ERROR",
  BEAUTY_PROCESSOR_INTERNAL_ERROR = "BEAUTY_PROCESSOR_INTERNAL_ERROR",
  CROSS_CHANNEL_WAIT_STATUS_ERROR = "CROSS_CHANNEL_WAIT_STATUS_ERROR",
  CROSS_CHANNEL_FAILED_JOIN_SRC = "CROSS_CHANNEL_FAILED_JOIN_SEC",
  CROSS_CHANNEL_FAILED_JOIN_DEST = "CROSS_CHANNEL_FAILED_JOIN_DEST",
  CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST = "CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST",
  CROSS_CHANNEL_SERVER_ERROR_RESPONSE = "CROSS_CHANNEL_SERVER_ERROR_RESPONSE",
  METADATA_OUT_OF_RANGE = "METADATA_OUT_OF_RANGE",
  LOCAL_AEC_ERROR = "LOCAL_AEC_ERROR",
  INVALID_PLUGIN = "INVALID_PLUGIN",
  DISCONNECT_P2P = "DISCONNECT_P2P",
  INIT_WEBSOCKET_TIMEOUT = "INIT_WEBSOCKET_TIMEOUT",
  CONVERTING_IMAGEDATA_TO_BLOB_FAILED = "CONVERTING_IMAGEDATA_TO_BLOB_FAILED",
  CONVERTING_VIDEO_FRAME_TO_BLOB_FAILED = "CONVERTING_VIDEO_FRAME_TO_BLOB_FAILED",
  INIT_DATACHANNEL_TIMEOUT = "INIT_DATACHANNEL_TIMEOUT",
  DATACHANNEL_CONNECTION_TIMEOUT = "DATACHANNEL_CONNECTION_TIMEOUT",
}

export declare enum InspectState {
  CONNECTING = "CONNECTING",
  RECONNECTING = "RECONNECTING",
  CONNECTED = "CONNECTED",
  CLOSED = "CLOSED",
}

export declare type CheckVideoVisibleResult =
  | { visible: true }
  | {
      visible: false;
      reason: `${VisibleHiddenReason}`;
    };

export declare enum VisibleHiddenReason {
  COVERED = "COVERED",
  POSITION = "POSITION",
  SIZE = "SIZE",
  STYLE = "STYLE",
}

export interface Listenable {
  on: (event: any, listener: Fn) => void;
  off: (event: any, listener: Fn) => void;
}

/**
 * Occurs when the state of the connection between the SDK and the server changes.
 * @param curState The current connection state.
 * @param revState The previous connection state.
 * @param reason The reason of disconnection if `curState` is `"DISCONNECTED"`.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "connection-state-change", listener: (curState: ConnectionState, revState: ConnectionState, reason?: ConnectionDisconnectedReason) => void): Disposer;
/**
 * Occurs when a remote user or host joins the channel.
 *
 * - In a communication channel, this callback indicates that another user joins the channel and reports the ID of that user. The SDK also triggers this callback to report the existing users in the channel when a user joins the channel.
 * - In a live-broadcast channel, this callback indicates that a host joins the channel. The SDK also triggers this callback to report the existing hosts in the channel when a user joins the channel. Ensure that you have no more than 17 hosts in a channel.
 *
 * The SDK triggers this callback when one of the following situations occurs:
 * - A remote user or host joins the channel by calling {@link join}.
 * - A remote audience switches the user role to host by calling {@link setClientRole} after joining the channel.
 * - A remote user or host rejoins the channel after a network interruption.
 * @param user Information of the remote user.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "user-joined", listener: (user: IAgoraRTCRemoteUser) => void): Disposer;
/**
 * Occurs when a remote user becomes offline.
 *
 * The SDK triggers this callback when one of the following situations occurs:
 * - A remote user calls {@link leave} and leaves the channel.
 * - A remote user has dropped offline. If no data packet of the user or host is received for 20 seconds, the SDK assumes that the user has dropped offline. A poor network connection may cause a false positive.
 * - A remote user switches the client role from host to audience.
 *
 * > In live-broadcast channels, the SDK triggers this callback only when a host goes offline.
 * @param user Information of the user who is offline.
 * @param reason Reason why the user has gone offline.
 * - `"Quit"`: The user calls {@link leave} and leaves the channel.
 * - `"ServerTimeOut"`: The user has dropped offline.
 * - `"BecomeAudience"`: The client role is switched from host to audience.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "user-left", listener: (user: IAgoraRTCRemoteUser, reason: "Quit" | "ServerTimeOut" | "BecomeAudience") => void): Disposer;
/**
 * Occurs when a remote user publishes an audio or video track.
 *
 * You can subscribe to and play the audio or video track in this callback. See {@link subscribe} and [RemoteTrack.play]{@link IRemoteTrack.play}.
 *
 * > The SDK also triggers this callback to report the existing tracks in the channel when a user joins the channel.
 *
 * ```javascript
 * client.on("user-published", async (user, mediaType) => {
 *   await client.subscribe(user, mediaType);
 *   if (mediaType === "video") {
 *     console.log("subscribe video success");
 *     user.videoTrack.play("xxx");
 *   }
 *   if (mediaType === "audio") {
 *     console.log("subscribe audio success");
 *     user.audioTrack.play();
 *   }
 * })
 * ```
 * @param user Information of the remote user.
 * @param mediaType Type of the track.
 * - `"audio"`: The remote user publishes an audio track.
 * - `"video"`: The remote user publishes a video track.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "user-published", listener: (user: IAgoraRTCRemoteUser, mediaType: "audio" | "video") => void): Disposer;
/**
 * Occurs when a remote user unpublishes an audio or video track.
 * @param user Information of the remote user.
 * @param mediaType Type of the track.
 * - `"audio"`: The remote user unpublishes an audio track.
 * - `"video"`: The remote user unpublishes a video track.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "user-unpublished", listener: (user: IAgoraRTCRemoteUser, mediaType: "audio" | "video") => void): Disposer;
/**
 * Reports the state change of users.
 *
 * In most cases, you only need to listen for [user-published]{@link IAgoraRTCClient.event_user_published} and [user-unpublished]{@link IAgoraRTCClient.event_user_unpublished} events for operations including subscribing, unsubscribing, and displaying whether the remote user turns on the camera and microphone. You do not need to pay special attention to user states since the SDK automatically handles user states.
 *
 * > This event indicating the media stream of a remote user is active does not necessarily mean that the local user can subscribe to this remote user. The local user can subscribe to a remote user only when receiving the [user-published]{@link IAgoraRTCClient.event_user_published} event.
 *
 * @param uid The ID of the remote user.
 * @param msg The current user state. Note that the `"enable-local-video"` and `"disable-local-video"` states are only for synchronizing states with the clients that integrate the RTC Native SDK.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "user-info-updated", listener: (uid: UID, msg: `${"mute" | "unmute"}-${"audio" | "video"}` | `${"enable" | "disable"}-local-video`) => void): Disposer;
/**
 * Occurs when the SDK starts to reestablish the media connection for publishing and subscribing.
 * @param uid The ID of the user who reestablishes the connection.  If it is the local `uid`, the connection is for publishing; if it is a remote `uid`, the connection is for subscribing.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "media-reconnect-start", listener: (uid: UID) => void): Disposer;
/**
 * Occurs when the SDK ends reestablishing the media connection for publishing and subscribing.
 * @param uid The ID of the user who reestablishes the connection. If it is the local `uid`, the connection is for publishing; if it is a remote `uid`, the connection is for subscribing.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "media-reconnect-end", listener: (uid: UID) => void): Disposer;
/**
 * Occurs when the type of a remote video stream changes.
 *
 * The SDK triggers this callback when a high-quality video stream changes to a low-quality video stream, or vice versa.
 * @param uid The ID of the remote user.
 * @param streamType The new stream type:
 * - 0: High-bitrate, high-resolution video stream.
 * - 1: Low-bitrate, low-resolution video stream.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "stream-type-changed", listener: (uid: UID, streamType: RemoteStreamType) => void): Disposer;
/**
 * Occurs when a remote video stream falls back to an audio stream due to unreliable network conditions or switches back to video after the network conditions improve.
 * @param uid The ID of the remote user.
 * @param isFallbackOrRecover Whether the remote media stream falls back or recovers:
 * - `"fallback"`: The remote media stream falls back to audio-only due to unreliable network conditions.
 * - `"recover"`: The remote media stream switches back to the video stream after the network conditions improve.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "stream-fallback", listener: (uid: UID, isFallbackOrRecover: "fallback" | "recover") => void): Disposer;
/**
 * Occurs when the state of the media stream relay changes.
 *
 * The SDK reports the state and error code of the current media relay with this callback.
 *
 * If the media relay is in an abnormal state, you can find the error code in {@link ChannelMediaRelayError} (for example if the token has expired, or repeated reconnection attempts fail.)
 * @param state The state of the media relay.
 * @param code The error code.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "channel-media-relay-state", listener: (state: ChannelMediaRelayState, code: ChannelMediaRelayError) => void): Disposer;
/**
 * Reports events during a media stream relay.
 *
 * @param event The event code for a media stream relay.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "channel-media-relay-event", listener: (event: ChannelMediaRelayEvent) => void): Disposer;
/**
 * Reports all the speaking remote users and their volumes.
 *
 * It is disabled by default. You can enable this callback by calling {@link enableAudioVolumeIndicator}.
 * If enabled, it reports the users' volumes every two seconds regardless of whether there are users speaking.
 *
 * The volume is an integer ranging from 0 to 100. Usually a user with volume above 60 is a speaking user.
 *
 * ``` javascript
 * client.on("volume-indicator", function(result){
 *     result.forEach(function(volume, index){
 *     console.log(`${index} UID ${volume.uid} Level ${volume.level}`);
 *   });
 * });
 * ```
 *
 * @param result An object consisting of the following properties:
 * - level: The volume of the speaking user, ranging from 0 to 100.
 * - uid: The ID of the speaking user.
 *
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "volume-indicator", listener: (result: { uid: UID; level: number }[]) => void): Disposer;
/**
 * Occurs when decryption fails.
 *
 * The SDK triggers this callback when the decryption fails during the process of subscribing to a stream. The failure is usually caused by incorrect encryption settings. See {@link setEncryptionConfig} for details.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "crypt-error", listener: () => void): Disposer;
/**
 * Occurs 30 seconds before a token expires.
 *
 * You must request a new token from your server and call {@link renewToken} to pass a new token as soon as possible.
 *
 * ``` javascript
 * client.on("token-privilege-will-expire", async function(){
 *   // After requesting a new token
 *   await client.renewToken(token);
 * });
 * ```
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "token-privilege-will-expire", listener: () => void): Disposer;
/**
 * Occurs when the token expires.
 *
 * You must request a new token from your server and call {@link join} to use the new token to join the channel.
 *
 * ``` javascript
 * client.on("token-privilege-did-expire", async () => {
 *   // After requesting a new token
 *   await client.join(<APPID>, <CHANNEL NAME>, <NEW TOKEN>);
 * });
 * ```
 *
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "token-privilege-did-expire", listener: () => void): Disposer;
/**
 * Reports the network quality of the local user.
 *
 * After the local user joins the channel, the SDK triggers this callback to report the uplink and downlink network conditions of the local user once every two second.
 *
 * > Agora recommends listening for this event and displaying the network quality.
 *
 * @param stats The network quality of the local user.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "network-quality", listener: (stats: NetworkQuality) => void): Disposer;
/**
 * Occurs when an error occurs in CDN live streaming.
 *
 * After the method call of {@link startLiveStreaming} succeeds, the SDK triggers this callback when errors occur during CDN live streaming.
 *
 * You can visit `err.code` to get the error code. The errors that you may encounter include:
 * - `LIVE_STREAMING_INVALID_ARGUMENT`: Invalid argument.
 * - `LIVE_STREAMING_INTERNAL_SERVER_ERROR`: An error occurs in Agora's streaming server.
 * - `LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED`: The URL is occupied.
 * - `LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED`: Sets the transcoding parameters when the transcoding is not enabled.
 * - `LIVE_STREAMING_CDN_ERROR`: An error occurs in the CDN.
 * - `LIVE_STREAMING_INVALID_RAW_STREAM`: Timeout for the CDN live streaming. Please check your media stream.
 *
 * @param url The URL of the CDN live streaming that has errors.
 * @param err The error details.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "live-streaming-error", listener: (url: string, err: AgoraRTCError) => void): Disposer;
/**
 * Occurs when a warning occurs in CDN live streaming.
 *
 * After the method call of {@link startLiveStreaming} succeeds, the SDK triggers this callback when warnings occur during CDN live streaming.
 *
 * You can visit `err.code` to get the warning code. The warnings that you may encounter include:
 * - `LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT`: Pushes stremas to more than 10 URLs.
 * - `LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE`: Fails to load the background image or watermark image.
 * - `LIVE_STREAMING_WARN_FREQUENT_REQUEST`: Pushes stremas to the CDN too frequently.
 *
 * @param url The URL of the CDN live streaming that has warnings.
 * @param err The warning details.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "live-streaming-warning", listener: (url: string, err: AgoraRTCError) => void): Disposer;
/**
 * Reports exceptions in the channel.
 *
 * Exceptions are not errors, but usually reflect quality issues.
 *
 * This callback also reports recovery from an exception.
 *
 * Each exception corresponds to a recovery event.
 *
 * **Exception**
 *
 * | Code | Message                   | Exception            |
 * | :----- | :------------------------- | :--------------- |
 * | 1001   | FRAMERATE_INPUT_TOO_LOW    | Captured video frame rate is too low |
 * | 1002   | FRAMERATE_SENT_TOO_LOW     | Sent video frame rate is too low |
 * | 1003   | SEND_VIDEO_BITRATE_TOO_LOW | Sent video bitrate is too low |
 * | 1005   | RECV_VIDEO_DECODE_FAILED   | Decoding received video fails |
 * | 2001   | AUDIO_INPUT_LEVEL_TOO_LOW  | Sent audio volume is too low     |
 * | 2002   | AUDIO_OUTPUT_LEVEL_TOO_LOW | Received audio volume is too low     |
 * | 2003   | SEND_AUDIO_BITRATE_TOO_LOW | Sent audio bitrate is too low |
 * | 2005   | RECV_AUDIO_DECODE_FAILED   | Decoding received audio fails |
 *
 * **Recoveries**
 *
 * | Code | Message                   | Recovery             |
 * | :----- | :------------------------- | :--------------- |
 * |3001   | FRAMERATE_INPUT_TOO_LOW_RECOVER    | Captured video frame rate recovers |
 * |3002   | FRAMERATE_SENT_TOO_LOW_RECOVER     | Sent video frame rate recovers |
 * |3003   | SEND_VIDEO_BITRATE_TOO_LOW_RECOVER | Sent video bitrate recovers |
 * |3005   | RECV_VIDEO_DECODE_FAILED_RECOVER   | Decoding received video recovers |
 * |4001   | AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER  | Sent audio volume recovers     |
 * |4002   | AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER | Received audio volume recovers     |
 * |4003   | SEND_AUDIO_BITRATE_TOO_LOW_RECOVER | Sent audio bitrate recovers |
 * |4005   | RECV_AUDIO_DECODE_FAILED_RECOVER   | Decoding received audio recovers |
 *
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "exception", listener: (event: { code: number, msg: string, uid: UID }) => void): Disposer;
/**
 * **Since**
 * <br>&emsp;&emsp;&emsp;*4.4.0*
 *
 * The SDK triggers this callback to indicate whether the media stream is forwarded by the Agora cloud proxy service.
 * - Earlier than v4.10.0: The callback is triggered after the method call of [[publish]] succeeds.
 * - v4.10.0 and later: The callback is triggered after the method call of [[join]] succeeds.
 *
 * @param isUsingProxy Whether the media stream is forwarded by the Agora cloud proxy service.
 * - `true`: Forwarded by the Agora cloud proxy service.
 * - `false`: Not forwarded by the Agora cloud proxy service.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "is-using-cloud-proxy", listener: (isUsingProxy: boolean) => void): Disposer;
/**
 * **Since**
 * <br>&emsp;&emsp;&emsp;*4.9.0*
 *
 * Occurs when the SDK automatically switches to TCP/TLS 443.
 *
 * As of v4.11.0, if the SDK fails in the attempt to directly connect to Agora SD-RTN™ after you call [[join]],
 * the SDK automatically switches to TCP/TLS 443 in order to ensure connectivity.
 *
 * @param proxyServer The server address used after the switch.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "join-fallback-to-proxy", listener: (proxyServer: string) => void): Disposer;
/**
 * **Since**
 * <br>&emsp;&emsp;&emsp;*4.11.0*
 *
 * If you enable support for 128 hosts in a channel, this callback is triggered when [[join]] is called.
 * The callback reports remote users who publish audio and/or video tracks in the channel.
 *
 * > Note:
 * > - For the `published-user-list` to be triggered, every user in the channel must use a number as their user ID (`uid`).
 * > - `published-user-list` has the following impacts on [AgoraRTCClient.on("user-joined")]{@link event_user_joined} and [AgoraRTCClient.on("user-published")]{@link event_user_published}:
 * >   - If you listen for the `published-user-list` event, users reported by the `published-user-list` callback are not reported by `user-joined` and `user-published`.
 * >   - If you do not listen for the `published-user-list` event, the `user-joined` and `user-published` callbacks are not affected.
 *
 * @param users The remote user.
 *
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "published-user-list", listener: (user: IAgoraRTCRemoteUser) => void): Disposer;
/**
 * Occurs when the state of the connection between the SDK and the server changes.
 * @param curState The current connection state.
 * @param revState The previous connection state.
 * @param reason The reason of disconnection if `curState` is `"DISCONNECTED"`.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "content-inspect-connection-state-change", listener: (preState: `${InspectState}`, newState: `${InspectState}`) => void): Disposer;
/**
 * Occurs when the state of the connection between the SDK and the server changes.
 * @param curState The current connection state.
 * @param revState The previous connection state.
 * @param reason The reason of disconnection if `curState` is `"DISCONNECTED"`.
 * @asMemberOf IAgoraRTCClient
 * @event
 */
export function listen(client: IAgoraRTCClient, event: "content-inspect-error", listener: (error?: AgoraRTCError) => void): Disposer;
/**
 * Occurs when a audio or video track ends.
 *
 * Reasons may include:
 * - Camera is unplugged.
 * - Microphone is unplugged.
 * - The local user stops screen sharing.
 * - The local user closes the underlying `MediaStreamTrack`.
 * - A local media device malfunctions.
 * - The device permission is revoked.
 *
 * @event
 * @asMemberOf ILocalTrack
 */
export function listen(client: ILocalTrack, event: "track-ended", listener: () => void): Disposer;
/**
 * Occurs when the state of processing the audio buffer in [BufferSourceAudioTrack]{@link IBufferSourceAudioTrack} changes.
 *
 * @param currentState The state of processing the audio buffer:
 * - `"stopped"`: The SDK stops processing the audio buffer. Reasons may include:
 *  - The SDK finishes processing the audio buffer.
 *  - The user manually stops the processing of the audio buffer.
 * - `"paused"`: The SDK pauses the processing of the audio buffer.
 * - `"playing"`: The SDK is processing the audio buffer.
 *
 * @event
 * @asMemberOf IBufferSourceAudioTrack
 */
export function listen(client: IBufferSourceAudioTrack, event: "source-state-change", listener: (currentState: AudioSourceState) => void): Disposer;
/**
 * Occurs when the device is overloaded after you call [setBeautyEffect]{@link ILocalVideoTrack.setBeautyEffect} to enable image enhancement.
 *
 * You can listen for this event to notify users of the device overload and disable image enhancement.
 *
 * ```javascript
 * localVideoTrack.on("beauty-effect-overload", () => {
 *   console.log("beauty effect overload, disable beauty effect");
 *   localVideoTrack.setBeautyEffect(false);
 * });
 * ```
 * @event
 * @asMemberOf ILocalVideoTrack
 */
export function listen(client: ILocalVideoTrack, event: "beauty-effect-overload", listener: () => void): Disposer;
/**
 * Occurs when a audio or video track ends.
 *
 * Reasons may include:
 * - Camera is unplugged.
 * - Microphone is unplugged.
 * - The local user stops screen sharing.
 * - The local user closes the underlying `MediaStreamTrack`.
 * - A local media device malfunctions.
 * - The device permission is revoked.
 *
 * @event
 * @asMemberOf ILocalTrack
 */
export function listen(client: ILocalVideoTrack, event: "track-ended", listener: () => void): Disposer;
/**
 * **Since**
 * <br>&emsp;&emsp;&emsp;*4.8.0*
 *
 * Indicates the visibility of the `<video>` HTML tag.
 *
 * The SDK triggers this event every 30 seconds.
 *
 * After you call `localVideoTrack.play`, the SDK creates an [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) tag for playing video tracks. When `localVideoTrack.isPlaying` is `true` but you cannot see any video, this event helps you check whether the `<video>` tag is visible or not and learn the reason when the `<video>` tag is invisible.
 *
 * @param data The visibility of the `<video>` tag.
 * @asMemberOf ILocalVideoTrack
 * @event
 */
export function listen(client: ILocalVideoTrack, event: "video-element-visible-status", listener: () => void): Disposer;
/**
 * Occurs when the first remote audio or video frame is decoded.
 *
 * @event
 * @asMemberOf IRemoteTrack
 */
export function listen(client: IRemoteTrack, event: "first-frame-decoded", listener: () => void): Disposer;
/**
 * **Since**
 * <br>&emsp;&emsp;&emsp;*4.8.0*
 *
 * Indicates the visibility of the `<video>` HTML tag.
 *
 * The SDK triggers this event every 30 seconds.
 *
 * After you call `localVideoTrack.play`, the SDK creates an [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) tag for playing video tracks. When `localVideoTrack.isPlaying` is `true` but you cannot see any video, this event helps you check whether the `<video>` tag is visible or not and learn the reason when the `<video>` tag is invisible.
 *
 * @param data The visibility of the `<video>` tag.
 * @asMemberOf ILocalVideoTrack
 * @event
 */
export function listen(client: IRemoteVideoTrack, event: "video-element-visible-status", listener: (data?: CheckVideoVisibleResult) => void): Disposer
export function listen(listenable: Listenable, event: string, listener: Fn): Disposer;
export function listen(listenable: Listenable, event: string, listener: Fn) {
  listenable.on(event, listener);
  return () => listenable.off(event, listener);
}
