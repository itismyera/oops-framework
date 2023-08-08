/*
 * @Date: 2021-08-12 09:33:37
 * @LastEditors: dgflash
 * @LastEditTime: 2022-01-24 15:15:30
 */

/** 网络配置 */
class NetConfig {
    public gameIp: string = "10.1.32.104";
    public gamePort: string = "9000";
    public dbid!: number;
    public sdkUid!: string;
    public serverId!: number;
    public sessionKey!: string;
    public channelid!: number;
}

export var netConfig = new NetConfig();