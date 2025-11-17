import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

/* -------------------------------------------------------------------------- */
/*                          NOTIFICATION CARD COMPONENT                        */
/* -------------------------------------------------------------------------- */

const NotificationCard = ({
  title,
  message,
  time,
  icon,
  gradient,
}: {
  title: string;
  message: string;
  time: string;
  icon: any;
  gradient: string[];
}) => (
  <View className="bg-white/5 border border-white/10 rounded-2xl p-4 mx-3 my-2 shadow-lg shadow-black/40 flex-row">

    {/* Icon */}
    <LinearGradient
      colors={gradient}
      className="w-12 h-12 rounded-full items-center justify-center"
    >
      <Ionicons name={icon} size={22} color="#fff" />
    </LinearGradient>

    {/* Text */}
    <View className="ml-3 flex-1">
      <Text className="text-white font-semibold text-base">{title}</Text>
      <Text className="text-gray-300 text-sm mt-1" numberOfLines={2}>
        {message}
      </Text>
      <Text className="text-gray-500 text-xs mt-1">{time}</Text>
    </View>
  </View>
);

/* -------------------------------------------------------------------------- */
/*                                  TAB ITEM                                  */
/* -------------------------------------------------------------------------- */

const TabItem = ({ label, icon, filled, active, onPress }: any) => (
  <Pressable onPress={onPress} className="items-center justify-center p-2">
    <Ionicons
      name={active ? filled : icon}
      size={24}
      color={active ? '#3BA7FF' : '#ccc'}
    />
    <Text
      className={`mt-1 text-xs ${
        active ? 'text-[#3BA7FF]' : 'text-gray-300'
      }`}
    >
      {label}
    </Text>
  </Pressable>
);

/* -------------------------------------------------------------------------- */
/*                                NOTIFICATION PAGE                            */
/* -------------------------------------------------------------------------- */

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Notifications');

  const tabs = [
    { label: 'Home', icon: 'home-outline', filled: 'home' },
    { label: 'Academic', icon: 'school-outline', filled: 'school' },
    { label: 'Attendance', icon: 'calendar-outline', filled: 'calendar' },
    { label: 'Notifications', icon: 'notifications-outline', filled: 'notifications' },
    { label: 'Profile', icon: 'person-outline', filled: 'person' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />

      {/* 🌌 Dark Premium Gradient Background */}
      <View className="absolute inset-0 bg-[#000510]">
        
        {/* Main linear gradient */}
        <LinearGradient
          colors={['#000814', '#000b1a', '#020d24', '#040f2e']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 opacity-90"
        />

        {/* Soft radial glow - left side */}
        <LinearGradient
          colors={['rgba(0, 90, 255, 0.18)', 'transparent']}
          start={{ x: 0.3, y: 0.3 }}
          end={{ x: 0.7, y: 0.7 }}
          className="absolute w-full h-full"
        />

        {/* Subtle purple glow - right bottom */}
        <LinearGradient
          colors={['rgba(120, 90, 255, 0.22)', 'transparent']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.4, y: 0.4 }}
          className="absolute w-full h-full"
        />

        {/* Extra soft dark overlay */}
        <View className="absolute inset-0 bg-black/40" />
      </View>

      {/* Header */}
      <BlurView intensity={40} tint="dark" className="p-4 bg-white/10 rounded-b-3xl border-b border-white/10">
        <Text className="text-white font-bold text-2xl">Notifications</Text>
      </BlurView>

      {/* Notifications List */}
      <ScrollView className="mt-4 mb-28">
        <NotificationCard
          title="New Workshop Posted"
          message="Dr. Sarah Johnson shared a new Data Structures workshop. Tap to read more."
          time="2 hours ago"
          icon="book-outline"
          gradient={['#4FACFE', '#00F2FE']}
        />

        <NotificationCard
          title="Assignment Due Tomorrow"
          message="Your Machine Learning assignment is due tomorrow at 11:59 PM."
          time="5 hours ago"
          icon="alert-circle-outline"
          gradient={['#FF7EB3', '#FF758C']}
        />

        <NotificationCard
          title="Attendance Updated"
          message="Your attendance for today has been marked successfully."
          time="Today, 09:15 AM"
          icon="checkmark-done-outline"
          gradient={['#43E97B', '#38F9D7']}
        />

        <NotificationCard
          title="Event Reminder"
          message="Don't forget today’s Hackathon meeting at 6 PM!"
          time="Yesterday"
          icon="calendar-outline"
          gradient={['#FA709A', '#FEE140']}
        />
      </ScrollView>

      {/* Floating Tab Bar */}
      <View className="absolute bottom-6 left-0 right-0 items-center">
        <BlurView
          intensity={50}
          tint="dark"
          className="w-[95%] h-20 bg-white/10 border border-white/15 rounded-3xl flex-row justify-around items-center"
        >
          {tabs.map((tab, index) => (
            <TabItem
              key={index}
              label={tab.label}
              icon={tab.icon}
              filled={tab.filled}
              active={activeTab === tab.label}
              onPress={() => setActiveTab(tab.label)}
            />
          ))}
        </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;