import { PluginListenerHandle } from "@capacitor/core";

declare module "@capacitor/core" {
  interface PluginRegistry {
    RichLocalNotifications: RichLocalNotificationsPlugin;
  }
}

export interface RichLocalNotificationsPlugin {
  show(options: { notification: RichLocalNotification }): Promise<RichLocalNotificationShowResult>;
  addListener(eventName: 'richLocalNotificationActionPerformed', listenerFunc: (action: RichLocalNotificationActionPerformed) => void): PluginListenerHandle;
}

export interface RichLocalNotification {
  id: number;
  title: string;
  body: string;
  sound?: string;
  extra?: any;
  channelId?: string; // Android 8+ prop
  priority?: number; // Android 7- prop
  smallIcon?: string; // Android notification icon
  schedule?: RichLocalNotificationSchedule;
}

export interface RichLocalNotificationSchedule {
  at?: Date;
  repeats?: boolean;
  every?: 'year' | 'month' | 'two-weeks' | 'week' | 'day' | 'hour' | 'minute' | 'second';
}

export interface RichLocalNotificationShowResult {
  id: string;
}

export interface RichLocalNotificationActionPerformed {
  actionId: string;
  notification: RichLocalNotification;
}
