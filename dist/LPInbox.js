import { NativeModules } from 'react-native';
import { LPInboxMessage } from './LPInboxMessage';
export const LPInbox = {
    /**
     * Returns the number of all inbox messages on the device.
     */
    count: () => {
        return NativeModules.LPInbox.count();
    },
    /**
     * Returns the number of the unread inbox messages on the device.
     */
    unreadCount: () => {
        return NativeModules.LPInbox.unreadCount();
    },
    /**
     * Returns the identifiers of all inbox messages on the device sorted in ascending
     * chronological order, i.e. the id of the oldest message is the first one, and the most
     * recent one is the last one in the array.
     */
    messagesIds: () => {
        return NativeModules.LPInbox.messagesIds();
    },
    /**
     * Returns an array containing all of the inbox messages (as LPInboxMessage objects)
     * on the device, sorted in ascending chronological order, i.e. the oldest message is the
     * first one, and the most recent one is the last one in the array.
     */
    allMessages: () => {
        return NativeModules.LPInbox.allMessages().then((messages) => {
            return messages.map(json => new LPInboxMessage(json));
        });
    },
    /**
     * Returns an array containing all of the unread inbox messages on the device, sorted
     * in ascending chronological order, i.e. the oldest message is the first one, and the
     * most recent one is the last one in the array.
     */
    unreadMessages: () => {
        return NativeModules.LPInbox.unreadMessages().then((messages) => {
            return messages.map(json => new LPInboxMessage(json));
        });
    },
    /**
     * Returns the inbox messages associated with the given messageId identifier.
     */
    messageForId: (messageId) => {
        return NativeModules.LPInbox.messageForId(messageId)
            .then((json) => new LPInboxMessage(json));
    },
    /**
     * Call this method if you don't want Inbox images to be prefetched.
     * Useful if you only want to deal with image URL.
     */
    disableImagePrefetching: () => {
        return NativeModules.LPInbox.disableImagePrefetching();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTFBJbmJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9MUEluYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUc7SUFDckI7O09BRUc7SUFDSCxLQUFLLEVBQUUsR0FBb0IsRUFBRTtRQUMzQixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxFQUFFLEdBQW9CLEVBQUU7UUFDakMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxFQUFFLEdBQXNCLEVBQUU7UUFDbkMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxFQUFFLEdBQThCLEVBQUU7UUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQThCLEVBQUUsRUFBRTtZQUNqRixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjLEVBQUUsR0FBOEIsRUFBRTtRQUM5QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBOEIsRUFBRSxFQUFFO1lBQ3BGLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLEVBQUUsQ0FBQyxTQUFpQixFQUEyQixFQUFFO1FBQzNELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2FBQ2pELElBQUksQ0FBQyxDQUFDLElBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVCQUF1QixFQUFFLEdBQVMsRUFBRTtRQUNsQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0NBQ0YsQ0FBQyJ9