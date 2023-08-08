declare global {
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace cmsg. */
export namespace cmsg {

    /** Properties of a ReqLogin. */
    interface IReqLogin {

        /** ReqLogin token */
        token?: (string|null);
    }

    /** Represents a ReqLogin. */
    class ReqLogin implements IReqLogin {

        /**
         * Constructs a new ReqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IReqLogin);

        /** ReqLogin token. */
        public token: string;

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLogin instance
         */
        public static create(properties?: cmsg.IReqLogin): cmsg.ReqLogin;

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link cmsg.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link cmsg.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.ReqLogin;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.ReqLogin;

        /**
         * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqLogin
         */
        public static fromObject(object: { [k: string]: any }): cmsg.ReqLogin;

        /**
         * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
         * @param message ReqLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.ReqLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespLogin. */
    interface IRespLogin {

        /** RespLogin err */
        err?: (cmsg.RespLogin.Error|null);

        /** RespLogin userID */
        userID?: (number|null);

        /** RespLogin token */
        token?: (string|null);

        /** RespLogin inGame */
        inGame?: (boolean|null);
    }

    /** Represents a RespLogin. */
    class RespLogin implements IRespLogin {

        /**
         * Constructs a new RespLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IRespLogin);

        /** RespLogin err. */
        public err: cmsg.RespLogin.Error;

        /** RespLogin userID. */
        public userID: number;

        /** RespLogin token. */
        public token: string;

        /** RespLogin inGame. */
        public inGame: boolean;

        /**
         * Creates a new RespLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespLogin instance
         */
        public static create(properties?: cmsg.IRespLogin): cmsg.RespLogin;

        /**
         * Encodes the specified RespLogin message. Does not implicitly {@link cmsg.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespLogin message, length delimited. Does not implicitly {@link cmsg.RespLogin.verify|verify} messages.
         * @param message RespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.RespLogin;

        /**
         * Decodes a RespLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.RespLogin;

        /**
         * Creates a RespLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespLogin
         */
        public static fromObject(object: { [k: string]: any }): cmsg.RespLogin;

        /**
         * Creates a plain object from a RespLogin message. Also converts values to other types if specified.
         * @param message RespLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.RespLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RespLogin {

        /** Error enum. */
        enum Error {
            Invalid = 0,
            RPCError = 1
        }
    }

    /** Properties of a ReqJoinGame. */
    interface IReqJoinGame {

        /** ReqJoinGame nickname */
        nickname?: (string|null);
    }

    /** Represents a ReqJoinGame. */
    class ReqJoinGame implements IReqJoinGame {

        /**
         * Constructs a new ReqJoinGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IReqJoinGame);

        /** ReqJoinGame nickname. */
        public nickname: string;

        /**
         * Creates a new ReqJoinGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqJoinGame instance
         */
        public static create(properties?: cmsg.IReqJoinGame): cmsg.ReqJoinGame;

        /**
         * Encodes the specified ReqJoinGame message. Does not implicitly {@link cmsg.ReqJoinGame.verify|verify} messages.
         * @param message ReqJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IReqJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqJoinGame message, length delimited. Does not implicitly {@link cmsg.ReqJoinGame.verify|verify} messages.
         * @param message ReqJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IReqJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqJoinGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.ReqJoinGame;

        /**
         * Decodes a ReqJoinGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.ReqJoinGame;

        /**
         * Creates a ReqJoinGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqJoinGame
         */
        public static fromObject(object: { [k: string]: any }): cmsg.ReqJoinGame;

        /**
         * Creates a plain object from a ReqJoinGame message. Also converts values to other types if specified.
         * @param message ReqJoinGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.ReqJoinGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqJoinGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqJoinGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespJoinGame. */
    interface IRespJoinGame {

        /** RespJoinGame err */
        err?: (cmsg.RespJoinGame.Error|null);

        /** RespJoinGame nickname */
        nickname?: (string|null);
    }

    /** Represents a RespJoinGame. */
    class RespJoinGame implements IRespJoinGame {

        /**
         * Constructs a new RespJoinGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IRespJoinGame);

        /** RespJoinGame err. */
        public err: cmsg.RespJoinGame.Error;

        /** RespJoinGame nickname. */
        public nickname: string;

        /**
         * Creates a new RespJoinGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespJoinGame instance
         */
        public static create(properties?: cmsg.IRespJoinGame): cmsg.RespJoinGame;

        /**
         * Encodes the specified RespJoinGame message. Does not implicitly {@link cmsg.RespJoinGame.verify|verify} messages.
         * @param message RespJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IRespJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespJoinGame message, length delimited. Does not implicitly {@link cmsg.RespJoinGame.verify|verify} messages.
         * @param message RespJoinGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IRespJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespJoinGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.RespJoinGame;

        /**
         * Decodes a RespJoinGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.RespJoinGame;

        /**
         * Creates a RespJoinGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespJoinGame
         */
        public static fromObject(object: { [k: string]: any }): cmsg.RespJoinGame;

        /**
         * Creates a plain object from a RespJoinGame message. Also converts values to other types if specified.
         * @param message RespJoinGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.RespJoinGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespJoinGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespJoinGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RespJoinGame {

        /** Error enum. */
        enum Error {
            Invalid = 0,
            UserNotExisted = 1,
            AlreadyInGame = 2
        }
    }

    /** Properties of a ReqEnterGame. */
    interface IReqEnterGame {
    }

    /** Represents a ReqEnterGame. */
    class ReqEnterGame implements IReqEnterGame {

        /**
         * Constructs a new ReqEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IReqEnterGame);

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGame instance
         */
        public static create(properties?: cmsg.IReqEnterGame): cmsg.ReqEnterGame;

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link cmsg.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link cmsg.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.ReqEnterGame;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.ReqEnterGame;

        /**
         * Creates a ReqEnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEnterGame
         */
        public static fromObject(object: { [k: string]: any }): cmsg.ReqEnterGame;

        /**
         * Creates a plain object from a ReqEnterGame message. Also converts values to other types if specified.
         * @param message ReqEnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.ReqEnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqEnterGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespEnterGame. */
    interface IRespEnterGame {

        /** RespEnterGame config */
        config?: (cmsg.RespEnterGame.IConfig|null);

        /** RespEnterGame entityID */
        entityID?: (number|null);

        /** RespEnterGame gameLeftSec */
        gameLeftSec?: (number|null);

        /** RespEnterGame dead */
        dead?: (boolean|null);

        /** RespEnterGame err */
        err?: (cmsg.RespEnterGame.Error|null);
    }

    /** Represents a RespEnterGame. */
    class RespEnterGame implements IRespEnterGame {

        /**
         * Constructs a new RespEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IRespEnterGame);

        /** RespEnterGame config. */
        public config?: (cmsg.RespEnterGame.IConfig|null);

        /** RespEnterGame entityID. */
        public entityID: number;

        /** RespEnterGame gameLeftSec. */
        public gameLeftSec: number;

        /** RespEnterGame dead. */
        public dead: boolean;

        /** RespEnterGame err. */
        public err: cmsg.RespEnterGame.Error;

        /**
         * Creates a new RespEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespEnterGame instance
         */
        public static create(properties?: cmsg.IRespEnterGame): cmsg.RespEnterGame;

        /**
         * Encodes the specified RespEnterGame message. Does not implicitly {@link cmsg.RespEnterGame.verify|verify} messages.
         * @param message RespEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IRespEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespEnterGame message, length delimited. Does not implicitly {@link cmsg.RespEnterGame.verify|verify} messages.
         * @param message RespEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IRespEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.RespEnterGame;

        /**
         * Decodes a RespEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.RespEnterGame;

        /**
         * Creates a RespEnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespEnterGame
         */
        public static fromObject(object: { [k: string]: any }): cmsg.RespEnterGame;

        /**
         * Creates a plain object from a RespEnterGame message. Also converts values to other types if specified.
         * @param message RespEnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.RespEnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespEnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespEnterGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RespEnterGame {

        /** Error enum. */
        enum Error {
            Invalid = 0
        }

        /** Properties of a Config. */
        interface IConfig {

            /** Config bulletLiveTime */
            bulletLiveTime?: (number|null);

            /** Config rotationDelta */
            rotationDelta?: (number|null);

            /** Config entitySpeed */
            entitySpeed?: (number|null);

            /** Config bulletSpeed */
            bulletSpeed?: (number|null);

            /** Config noticePosDuration */
            noticePosDuration?: (number|null);

            /** Config protectTime */
            protectTime?: (number|null);

            /** Config entityRadius */
            entityRadius?: (number|null);
        }

        /** Represents a Config. */
        class Config implements IConfig {

            /**
             * Constructs a new Config.
             * @param [properties] Properties to set
             */
            constructor(properties?: cmsg.RespEnterGame.IConfig);

            /** Config bulletLiveTime. */
            public bulletLiveTime: number;

            /** Config rotationDelta. */
            public rotationDelta: number;

            /** Config entitySpeed. */
            public entitySpeed: number;

            /** Config bulletSpeed. */
            public bulletSpeed: number;

            /** Config noticePosDuration. */
            public noticePosDuration: number;

            /** Config protectTime. */
            public protectTime: number;

            /** Config entityRadius. */
            public entityRadius: number;

            /**
             * Creates a new Config instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Config instance
             */
            public static create(properties?: cmsg.RespEnterGame.IConfig): cmsg.RespEnterGame.Config;

            /**
             * Encodes the specified Config message. Does not implicitly {@link cmsg.RespEnterGame.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: cmsg.RespEnterGame.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link cmsg.RespEnterGame.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: cmsg.RespEnterGame.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.RespEnterGame.Config;

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.RespEnterGame.Config;

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Config
             */
            public static fromObject(object: { [k: string]: any }): cmsg.RespEnterGame.Config;

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @param message Config
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: cmsg.RespEnterGame.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Config to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Config
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Rank. */
    interface IRank {

        /** Rank list */
        list?: (cmsg.Rank.IItem[]|null);
    }

    /** Represents a Rank. */
    class Rank implements IRank {

        /**
         * Constructs a new Rank.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IRank);

        /** Rank list. */
        public list: cmsg.Rank.IItem[];

        /**
         * Creates a new Rank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rank instance
         */
        public static create(properties?: cmsg.IRank): cmsg.Rank;

        /**
         * Encodes the specified Rank message. Does not implicitly {@link cmsg.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IRank, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rank message, length delimited. Does not implicitly {@link cmsg.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IRank, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.Rank;

        /**
         * Decodes a Rank message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.Rank;

        /**
         * Creates a Rank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rank
         */
        public static fromObject(object: { [k: string]: any }): cmsg.Rank;

        /**
         * Creates a plain object from a Rank message. Also converts values to other types if specified.
         * @param message Rank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.Rank, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Rank
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Rank {

        /** Properties of an Item. */
        interface IItem {

            /** Item entityID */
            entityID?: (number|null);

            /** Item score */
            score?: (number|null);

            /** Item rank */
            rank?: (number|null);

            /** Item killCount */
            killCount?: (number|null);

            /** Item headImgUrl */
            headImgUrl?: (string|null);

            /** Item nickname */
            nickname?: (string|null);
        }

        /** Represents an Item. */
        class Item implements IItem {

            /**
             * Constructs a new Item.
             * @param [properties] Properties to set
             */
            constructor(properties?: cmsg.Rank.IItem);

            /** Item entityID. */
            public entityID: number;

            /** Item score. */
            public score: number;

            /** Item rank. */
            public rank: number;

            /** Item killCount. */
            public killCount: number;

            /** Item headImgUrl. */
            public headImgUrl: string;

            /** Item nickname. */
            public nickname: string;

            /**
             * Creates a new Item instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Item instance
             */
            public static create(properties?: cmsg.Rank.IItem): cmsg.Rank.Item;

            /**
             * Encodes the specified Item message. Does not implicitly {@link cmsg.Rank.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: cmsg.Rank.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link cmsg.Rank.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: cmsg.Rank.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.Rank.Item;

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.Rank.Item;

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Item
             */
            public static fromObject(object: { [k: string]: any }): cmsg.Rank.Item;

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @param message Item
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: cmsg.Rank.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Item to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Item
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SNoticeGameOver. */
    interface ISNoticeGameOver {

        /** SNoticeGameOver overReason */
        overReason?: (number|null);

        /** SNoticeGameOver killer */
        killer?: (cmsg.SNoticeGameOver.IKiller|null);

        /** SNoticeGameOver gameLeftSec */
        gameLeftSec?: (number|null);

        /** SNoticeGameOver rank */
        rank?: (cmsg.IRank|null);
    }

    /** Represents a SNoticeGameOver. */
    class SNoticeGameOver implements ISNoticeGameOver {

        /**
         * Constructs a new SNoticeGameOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ISNoticeGameOver);

        /** SNoticeGameOver overReason. */
        public overReason: number;

        /** SNoticeGameOver killer. */
        public killer?: (cmsg.SNoticeGameOver.IKiller|null);

        /** SNoticeGameOver gameLeftSec. */
        public gameLeftSec: number;

        /** SNoticeGameOver rank. */
        public rank?: (cmsg.IRank|null);

        /**
         * Creates a new SNoticeGameOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNoticeGameOver instance
         */
        public static create(properties?: cmsg.ISNoticeGameOver): cmsg.SNoticeGameOver;

        /**
         * Encodes the specified SNoticeGameOver message. Does not implicitly {@link cmsg.SNoticeGameOver.verify|verify} messages.
         * @param message SNoticeGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ISNoticeGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNoticeGameOver message, length delimited. Does not implicitly {@link cmsg.SNoticeGameOver.verify|verify} messages.
         * @param message SNoticeGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ISNoticeGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNoticeGameOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SNoticeGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeGameOver;

        /**
         * Decodes a SNoticeGameOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SNoticeGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeGameOver;

        /**
         * Creates a SNoticeGameOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNoticeGameOver
         */
        public static fromObject(object: { [k: string]: any }): cmsg.SNoticeGameOver;

        /**
         * Creates a plain object from a SNoticeGameOver message. Also converts values to other types if specified.
         * @param message SNoticeGameOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.SNoticeGameOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNoticeGameOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SNoticeGameOver
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SNoticeGameOver {

        /** Properties of a Killer. */
        interface IKiller {

            /** Killer accountType */
            accountType?: (number|null);

            /** Killer nickname */
            nickname?: (string|null);

            /** Killer headImgUrl */
            headImgUrl?: (string|null);

            /** Killer hp */
            hp?: (number|null);
        }

        /** Represents a Killer. */
        class Killer implements IKiller {

            /**
             * Constructs a new Killer.
             * @param [properties] Properties to set
             */
            constructor(properties?: cmsg.SNoticeGameOver.IKiller);

            /** Killer accountType. */
            public accountType: number;

            /** Killer nickname. */
            public nickname: string;

            /** Killer headImgUrl. */
            public headImgUrl: string;

            /** Killer hp. */
            public hp: number;

            /**
             * Creates a new Killer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Killer instance
             */
            public static create(properties?: cmsg.SNoticeGameOver.IKiller): cmsg.SNoticeGameOver.Killer;

            /**
             * Encodes the specified Killer message. Does not implicitly {@link cmsg.SNoticeGameOver.Killer.verify|verify} messages.
             * @param message Killer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: cmsg.SNoticeGameOver.IKiller, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Killer message, length delimited. Does not implicitly {@link cmsg.SNoticeGameOver.Killer.verify|verify} messages.
             * @param message Killer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: cmsg.SNoticeGameOver.IKiller, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Killer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Killer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeGameOver.Killer;

            /**
             * Decodes a Killer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Killer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeGameOver.Killer;

            /**
             * Creates a Killer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Killer
             */
            public static fromObject(object: { [k: string]: any }): cmsg.SNoticeGameOver.Killer;

            /**
             * Creates a plain object from a Killer message. Also converts values to other types if specified.
             * @param message Killer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: cmsg.SNoticeGameOver.Killer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Killer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Killer
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ReqMove. */
    interface IReqMove {

        /** ReqMove pressTime */
        pressTime?: (number|null);

        /** ReqMove targetRotation */
        targetRotation?: (number|null);

        /** ReqMove inputSeqID */
        inputSeqID?: (number|null);
    }

    /** Represents a ReqMove. */
    class ReqMove implements IReqMove {

        /**
         * Constructs a new ReqMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IReqMove);

        /** ReqMove pressTime. */
        public pressTime: number;

        /** ReqMove targetRotation. */
        public targetRotation: number;

        /** ReqMove inputSeqID. */
        public inputSeqID: number;

        /**
         * Creates a new ReqMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMove instance
         */
        public static create(properties?: cmsg.IReqMove): cmsg.ReqMove;

        /**
         * Encodes the specified ReqMove message. Does not implicitly {@link cmsg.ReqMove.verify|verify} messages.
         * @param message ReqMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IReqMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqMove message, length delimited. Does not implicitly {@link cmsg.ReqMove.verify|verify} messages.
         * @param message ReqMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IReqMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.ReqMove;

        /**
         * Decodes a ReqMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.ReqMove;

        /**
         * Creates a ReqMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqMove
         */
        public static fromObject(object: { [k: string]: any }): cmsg.ReqMove;

        /**
         * Creates a plain object from a ReqMove message. Also converts values to other types if specified.
         * @param message ReqMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.ReqMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqMove
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqShoot. */
    interface IReqShoot {
    }

    /** Represents a ReqShoot. */
    class ReqShoot implements IReqShoot {

        /**
         * Constructs a new ReqShoot.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IReqShoot);

        /**
         * Creates a new ReqShoot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqShoot instance
         */
        public static create(properties?: cmsg.IReqShoot): cmsg.ReqShoot;

        /**
         * Encodes the specified ReqShoot message. Does not implicitly {@link cmsg.ReqShoot.verify|verify} messages.
         * @param message ReqShoot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IReqShoot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqShoot message, length delimited. Does not implicitly {@link cmsg.ReqShoot.verify|verify} messages.
         * @param message ReqShoot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IReqShoot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqShoot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.ReqShoot;

        /**
         * Decodes a ReqShoot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.ReqShoot;

        /**
         * Creates a ReqShoot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqShoot
         */
        public static fromObject(object: { [k: string]: any }): cmsg.ReqShoot;

        /**
         * Creates a plain object from a ReqShoot message. Also converts values to other types if specified.
         * @param message ReqShoot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.ReqShoot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqShoot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqShoot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqJump. */
    interface IReqJump {
    }

    /** Represents a ReqJump. */
    class ReqJump implements IReqJump {

        /**
         * Constructs a new ReqJump.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IReqJump);

        /**
         * Creates a new ReqJump instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqJump instance
         */
        public static create(properties?: cmsg.IReqJump): cmsg.ReqJump;

        /**
         * Encodes the specified ReqJump message. Does not implicitly {@link cmsg.ReqJump.verify|verify} messages.
         * @param message ReqJump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IReqJump, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqJump message, length delimited. Does not implicitly {@link cmsg.ReqJump.verify|verify} messages.
         * @param message ReqJump message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IReqJump, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqJump message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqJump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.ReqJump;

        /**
         * Decodes a ReqJump message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqJump
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.ReqJump;

        /**
         * Creates a ReqJump message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqJump
         */
        public static fromObject(object: { [k: string]: any }): cmsg.ReqJump;

        /**
         * Creates a plain object from a ReqJump message. Also converts values to other types if specified.
         * @param message ReqJump
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.ReqJump, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqJump to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqJump
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqGameScene. */
    interface IReqGameScene {
    }

    /** Represents a ReqGameScene. */
    class ReqGameScene implements IReqGameScene {

        /**
         * Constructs a new ReqGameScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IReqGameScene);

        /**
         * Creates a new ReqGameScene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqGameScene instance
         */
        public static create(properties?: cmsg.IReqGameScene): cmsg.ReqGameScene;

        /**
         * Encodes the specified ReqGameScene message. Does not implicitly {@link cmsg.ReqGameScene.verify|verify} messages.
         * @param message ReqGameScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IReqGameScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqGameScene message, length delimited. Does not implicitly {@link cmsg.ReqGameScene.verify|verify} messages.
         * @param message ReqGameScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IReqGameScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqGameScene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.ReqGameScene;

        /**
         * Decodes a ReqGameScene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.ReqGameScene;

        /**
         * Creates a ReqGameScene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqGameScene
         */
        public static fromObject(object: { [k: string]: any }): cmsg.ReqGameScene;

        /**
         * Creates a plain object from a ReqGameScene message. Also converts values to other types if specified.
         * @param message ReqGameScene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.ReqGameScene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqGameScene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqGameScene
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RespGameScene. */
    interface IRespGameScene {

        /** RespGameScene entities */
        entities?: (cmsg.IEntity[]|null);

        /** RespGameScene gameLeftSec */
        gameLeftSec?: (number|null);

        /** RespGameScene err */
        err?: (cmsg.RespGameScene.Error|null);
    }

    /** Represents a RespGameScene. */
    class RespGameScene implements IRespGameScene {

        /**
         * Constructs a new RespGameScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IRespGameScene);

        /** RespGameScene entities. */
        public entities: cmsg.IEntity[];

        /** RespGameScene gameLeftSec. */
        public gameLeftSec: number;

        /** RespGameScene err. */
        public err: cmsg.RespGameScene.Error;

        /**
         * Creates a new RespGameScene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RespGameScene instance
         */
        public static create(properties?: cmsg.IRespGameScene): cmsg.RespGameScene;

        /**
         * Encodes the specified RespGameScene message. Does not implicitly {@link cmsg.RespGameScene.verify|verify} messages.
         * @param message RespGameScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IRespGameScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RespGameScene message, length delimited. Does not implicitly {@link cmsg.RespGameScene.verify|verify} messages.
         * @param message RespGameScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IRespGameScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RespGameScene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RespGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.RespGameScene;

        /**
         * Decodes a RespGameScene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RespGameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.RespGameScene;

        /**
         * Creates a RespGameScene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RespGameScene
         */
        public static fromObject(object: { [k: string]: any }): cmsg.RespGameScene;

        /**
         * Creates a plain object from a RespGameScene message. Also converts values to other types if specified.
         * @param message RespGameScene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.RespGameScene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RespGameScene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RespGameScene
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RespGameScene {

        /** Error enum. */
        enum Error {
            Invalid = 0,
            GameNotExist = 1
        }
    }

    /** Properties of a SNoticeShoot. */
    interface ISNoticeShoot {

        /** SNoticeShoot x */
        x?: (number|null);

        /** SNoticeShoot y */
        y?: (number|null);

        /** SNoticeShoot rotation */
        rotation?: (number|null);

        /** SNoticeShoot bulletID */
        bulletID?: (number|null);

        /** SNoticeShoot creatorEntityID */
        creatorEntityID?: (number|null);
    }

    /** Represents a SNoticeShoot. */
    class SNoticeShoot implements ISNoticeShoot {

        /**
         * Constructs a new SNoticeShoot.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ISNoticeShoot);

        /** SNoticeShoot x. */
        public x: number;

        /** SNoticeShoot y. */
        public y: number;

        /** SNoticeShoot rotation. */
        public rotation: number;

        /** SNoticeShoot bulletID. */
        public bulletID: number;

        /** SNoticeShoot creatorEntityID. */
        public creatorEntityID: number;

        /**
         * Creates a new SNoticeShoot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNoticeShoot instance
         */
        public static create(properties?: cmsg.ISNoticeShoot): cmsg.SNoticeShoot;

        /**
         * Encodes the specified SNoticeShoot message. Does not implicitly {@link cmsg.SNoticeShoot.verify|verify} messages.
         * @param message SNoticeShoot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ISNoticeShoot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNoticeShoot message, length delimited. Does not implicitly {@link cmsg.SNoticeShoot.verify|verify} messages.
         * @param message SNoticeShoot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ISNoticeShoot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNoticeShoot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SNoticeShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeShoot;

        /**
         * Decodes a SNoticeShoot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SNoticeShoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeShoot;

        /**
         * Creates a SNoticeShoot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNoticeShoot
         */
        public static fromObject(object: { [k: string]: any }): cmsg.SNoticeShoot;

        /**
         * Creates a plain object from a SNoticeShoot message. Also converts values to other types if specified.
         * @param message SNoticeShoot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.SNoticeShoot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNoticeShoot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SNoticeShoot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SNoticeWorldChange. */
    interface ISNoticeWorldChange {

        /** SNoticeWorldChange deleteBullets */
        deleteBullets?: (number[]|null);

        /** SNoticeWorldChange deleteEntities */
        deleteEntities?: (number[]|null);

        /** SNoticeWorldChange changedEntities */
        changedEntities?: (cmsg.SNoticeWorldChange.IEntity[]|null);
    }

    /** Represents a SNoticeWorldChange. */
    class SNoticeWorldChange implements ISNoticeWorldChange {

        /**
         * Constructs a new SNoticeWorldChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ISNoticeWorldChange);

        /** SNoticeWorldChange deleteBullets. */
        public deleteBullets: number[];

        /** SNoticeWorldChange deleteEntities. */
        public deleteEntities: number[];

        /** SNoticeWorldChange changedEntities. */
        public changedEntities: cmsg.SNoticeWorldChange.IEntity[];

        /**
         * Creates a new SNoticeWorldChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNoticeWorldChange instance
         */
        public static create(properties?: cmsg.ISNoticeWorldChange): cmsg.SNoticeWorldChange;

        /**
         * Encodes the specified SNoticeWorldChange message. Does not implicitly {@link cmsg.SNoticeWorldChange.verify|verify} messages.
         * @param message SNoticeWorldChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ISNoticeWorldChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNoticeWorldChange message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldChange.verify|verify} messages.
         * @param message SNoticeWorldChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ISNoticeWorldChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNoticeWorldChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SNoticeWorldChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeWorldChange;

        /**
         * Decodes a SNoticeWorldChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SNoticeWorldChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeWorldChange;

        /**
         * Creates a SNoticeWorldChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNoticeWorldChange
         */
        public static fromObject(object: { [k: string]: any }): cmsg.SNoticeWorldChange;

        /**
         * Creates a plain object from a SNoticeWorldChange message. Also converts values to other types if specified.
         * @param message SNoticeWorldChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.SNoticeWorldChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNoticeWorldChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SNoticeWorldChange
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SNoticeWorldChange {

        /** Properties of an Entity. */
        interface IEntity {

            /** Entity id */
            id?: (number|null);

            /** Entity hp */
            hp?: (number|null);

            /** Entity score */
            score?: (number|null);

            /** Entity killCount */
            killCount?: (number|null);
        }

        /** Represents an Entity. */
        class Entity implements IEntity {

            /**
             * Constructs a new Entity.
             * @param [properties] Properties to set
             */
            constructor(properties?: cmsg.SNoticeWorldChange.IEntity);

            /** Entity id. */
            public id: number;

            /** Entity hp. */
            public hp: number;

            /** Entity score. */
            public score: number;

            /** Entity killCount. */
            public killCount: number;

            /**
             * Creates a new Entity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entity instance
             */
            public static create(properties?: cmsg.SNoticeWorldChange.IEntity): cmsg.SNoticeWorldChange.Entity;

            /**
             * Encodes the specified Entity message. Does not implicitly {@link cmsg.SNoticeWorldChange.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: cmsg.SNoticeWorldChange.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldChange.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: cmsg.SNoticeWorldChange.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeWorldChange.Entity;

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeWorldChange.Entity;

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entity
             */
            public static fromObject(object: { [k: string]: any }): cmsg.SNoticeWorldChange.Entity;

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @param message Entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: cmsg.SNoticeWorldChange.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Entity
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SNoticeWorldPos. */
    interface ISNoticeWorldPos {

        /** SNoticeWorldPos entities */
        entities?: (cmsg.SNoticeWorldPos.IEntity[]|null);

        /** SNoticeWorldPos lastProcessedInputID */
        lastProcessedInputID?: (number|null);
    }

    /** Represents a SNoticeWorldPos. */
    class SNoticeWorldPos implements ISNoticeWorldPos {

        /**
         * Constructs a new SNoticeWorldPos.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ISNoticeWorldPos);

        /** SNoticeWorldPos entities. */
        public entities: cmsg.SNoticeWorldPos.IEntity[];

        /** SNoticeWorldPos lastProcessedInputID. */
        public lastProcessedInputID: number;

        /**
         * Creates a new SNoticeWorldPos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNoticeWorldPos instance
         */
        public static create(properties?: cmsg.ISNoticeWorldPos): cmsg.SNoticeWorldPos;

        /**
         * Encodes the specified SNoticeWorldPos message. Does not implicitly {@link cmsg.SNoticeWorldPos.verify|verify} messages.
         * @param message SNoticeWorldPos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ISNoticeWorldPos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNoticeWorldPos message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldPos.verify|verify} messages.
         * @param message SNoticeWorldPos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ISNoticeWorldPos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNoticeWorldPos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SNoticeWorldPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeWorldPos;

        /**
         * Decodes a SNoticeWorldPos message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SNoticeWorldPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeWorldPos;

        /**
         * Creates a SNoticeWorldPos message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNoticeWorldPos
         */
        public static fromObject(object: { [k: string]: any }): cmsg.SNoticeWorldPos;

        /**
         * Creates a plain object from a SNoticeWorldPos message. Also converts values to other types if specified.
         * @param message SNoticeWorldPos
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.SNoticeWorldPos, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNoticeWorldPos to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SNoticeWorldPos
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SNoticeWorldPos {

        /** Properties of an Entity. */
        interface IEntity {

            /** Entity id */
            id?: (number|null);

            /** Entity x */
            x?: (number|null);

            /** Entity y */
            y?: (number|null);

            /** Entity rotation */
            rotation?: (number|null);
        }

        /** Represents an Entity. */
        class Entity implements IEntity {

            /**
             * Constructs a new Entity.
             * @param [properties] Properties to set
             */
            constructor(properties?: cmsg.SNoticeWorldPos.IEntity);

            /** Entity id. */
            public id: number;

            /** Entity x. */
            public x: number;

            /** Entity y. */
            public y: number;

            /** Entity rotation. */
            public rotation: number;

            /**
             * Creates a new Entity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entity instance
             */
            public static create(properties?: cmsg.SNoticeWorldPos.IEntity): cmsg.SNoticeWorldPos.Entity;

            /**
             * Encodes the specified Entity message. Does not implicitly {@link cmsg.SNoticeWorldPos.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: cmsg.SNoticeWorldPos.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link cmsg.SNoticeWorldPos.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: cmsg.SNoticeWorldPos.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeWorldPos.Entity;

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeWorldPos.Entity;

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entity
             */
            public static fromObject(object: { [k: string]: any }): cmsg.SNoticeWorldPos.Entity;

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @param message Entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: cmsg.SNoticeWorldPos.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Entity
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an Entity. */
    interface IEntity {

        /** Entity id */
        id?: (number|null);

        /** Entity accountType */
        accountType?: (number|null);

        /** Entity headImgUrl */
        headImgUrl?: (string|null);

        /** Entity rotation */
        rotation?: (number|null);

        /** Entity hp */
        hp?: (number|null);

        /** Entity score */
        score?: (number|null);

        /** Entity killCount */
        killCount?: (number|null);

        /** Entity dead */
        dead?: (boolean|null);

        /** Entity protected */
        "protected"?: (boolean|null);

        /** Entity x */
        x?: (number|null);

        /** Entity y */
        y?: (number|null);

        /** Entity nickname */
        nickname?: (string|null);
    }

    /** Represents an Entity. */
    class Entity implements IEntity {

        /**
         * Constructs a new Entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.IEntity);

        /** Entity id. */
        public id: number;

        /** Entity accountType. */
        public accountType: number;

        /** Entity headImgUrl. */
        public headImgUrl: string;

        /** Entity rotation. */
        public rotation: number;

        /** Entity hp. */
        public hp: number;

        /** Entity score. */
        public score: number;

        /** Entity killCount. */
        public killCount: number;

        /** Entity dead. */
        public dead: boolean;

        /** Entity protected. */
        public protected: boolean;

        /** Entity x. */
        public x: number;

        /** Entity y. */
        public y: number;

        /** Entity nickname. */
        public nickname: string;

        /**
         * Creates a new Entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entity instance
         */
        public static create(properties?: cmsg.IEntity): cmsg.Entity;

        /**
         * Encodes the specified Entity message. Does not implicitly {@link cmsg.Entity.verify|verify} messages.
         * @param message Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entity message, length delimited. Does not implicitly {@link cmsg.Entity.verify|verify} messages.
         * @param message Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.Entity;

        /**
         * Decodes an Entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.Entity;

        /**
         * Creates an Entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entity
         */
        public static fromObject(object: { [k: string]: any }): cmsg.Entity;

        /**
         * Creates a plain object from an Entity message. Also converts values to other types if specified.
         * @param message Entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Entity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SNoticeNewEntity. */
    interface ISNoticeNewEntity {

        /** SNoticeNewEntity entity */
        entity?: (cmsg.IEntity|null);
    }

    /** Represents a SNoticeNewEntity. */
    class SNoticeNewEntity implements ISNoticeNewEntity {

        /**
         * Constructs a new SNoticeNewEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ISNoticeNewEntity);

        /** SNoticeNewEntity entity. */
        public entity?: (cmsg.IEntity|null);

        /**
         * Creates a new SNoticeNewEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNoticeNewEntity instance
         */
        public static create(properties?: cmsg.ISNoticeNewEntity): cmsg.SNoticeNewEntity;

        /**
         * Encodes the specified SNoticeNewEntity message. Does not implicitly {@link cmsg.SNoticeNewEntity.verify|verify} messages.
         * @param message SNoticeNewEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ISNoticeNewEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNoticeNewEntity message, length delimited. Does not implicitly {@link cmsg.SNoticeNewEntity.verify|verify} messages.
         * @param message SNoticeNewEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ISNoticeNewEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNoticeNewEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SNoticeNewEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeNewEntity;

        /**
         * Decodes a SNoticeNewEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SNoticeNewEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeNewEntity;

        /**
         * Creates a SNoticeNewEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNoticeNewEntity
         */
        public static fromObject(object: { [k: string]: any }): cmsg.SNoticeNewEntity;

        /**
         * Creates a plain object from a SNoticeNewEntity message. Also converts values to other types if specified.
         * @param message SNoticeNewEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.SNoticeNewEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNoticeNewEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SNoticeNewEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SNoticeKickOut. */
    interface ISNoticeKickOut {

        /** SNoticeKickOut reason */
        reason?: (cmsg.SNoticeKickOut.Reason|null);
    }

    /** Represents a SNoticeKickOut. */
    class SNoticeKickOut implements ISNoticeKickOut {

        /**
         * Constructs a new SNoticeKickOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ISNoticeKickOut);

        /** SNoticeKickOut reason. */
        public reason: cmsg.SNoticeKickOut.Reason;

        /**
         * Creates a new SNoticeKickOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNoticeKickOut instance
         */
        public static create(properties?: cmsg.ISNoticeKickOut): cmsg.SNoticeKickOut;

        /**
         * Encodes the specified SNoticeKickOut message. Does not implicitly {@link cmsg.SNoticeKickOut.verify|verify} messages.
         * @param message SNoticeKickOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ISNoticeKickOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNoticeKickOut message, length delimited. Does not implicitly {@link cmsg.SNoticeKickOut.verify|verify} messages.
         * @param message SNoticeKickOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ISNoticeKickOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNoticeKickOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SNoticeKickOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.SNoticeKickOut;

        /**
         * Decodes a SNoticeKickOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SNoticeKickOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.SNoticeKickOut;

        /**
         * Creates a SNoticeKickOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNoticeKickOut
         */
        public static fromObject(object: { [k: string]: any }): cmsg.SNoticeKickOut;

        /**
         * Creates a plain object from a SNoticeKickOut message. Also converts values to other types if specified.
         * @param message SNoticeKickOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.SNoticeKickOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNoticeKickOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SNoticeKickOut
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SNoticeKickOut {

        /** Reason enum. */
        enum Reason {
            Invalid = 0,
            Relogin = 1
        }
    }
}
}
export { cmsg as default };