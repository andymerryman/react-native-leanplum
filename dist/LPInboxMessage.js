import { NativeModules } from 'react-native';
export class LPInboxMessage {
    /**
     * Constructs a new inbox message with a given id and contents.
     *
     * @param contents The contents of the message
     */
    constructor(contents) {
        /**
         * Read the inbox message, marking it as read and invoking its open action.
         */
        this.read = () => {
            return NativeModules.LPInboxMessage.readMessageId(this.messageId).then(() => {
                this._isRead = true;
            });
        };
        /**
         * Remove the inbox message from the inbox.
         */
        this.remove = () => {
            return NativeModules.LPInboxMessage.removeMessageId(this.messageId);
        };
        this.messageId = contents.messageId;
        this.title = contents.title;
        this.subtitle = contents.subtitle;
        this.imageURL = contents.imageURL;
        this.data = contents.data;
        this.deliveryTimestamp = new Date(contents.deliveryTimestamp);
        this.expirationTimestamp = new Date(contents.expirationTimestamp);
        this._isRead = contents.isRead;
    }
    /**
     * True if the inbox message is read.
     */
    get isRead() {
        return this._isRead;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTFBJbmJveE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTFBJbmJveE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWM3QyxNQUFNLE9BQU8sY0FBYztJQStDekI7Ozs7T0FJRztJQUNILFlBQVksUUFBNEI7UUFXeEM7O1dBRUc7UUFDSCxTQUFJLEdBQUcsR0FBa0IsRUFBRTtZQUN6QixPQUFPLGFBQWEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUVEOztXQUVHO1FBQ0gsV0FBTSxHQUFHLEdBQWtCLEVBQUU7WUFDM0IsT0FBTyxhQUFhLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFBO1FBeEJDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQXJCRDs7T0FFRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBaUNGIn0=