import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

/* -------------------------------------------------------------------------- */
/*                               REUSABLE ICONS                               */
/* -------------------------------------------------------------------------- */

const ActionIcon = ({ name, count }: { name: any; count?: number }) => (
  <View className="flex-row items-center">
    <Ionicons name={name} size={22} color="#fff" />
    {count !== undefined && (
      <Text className="text-white ml-2 text-sm">{count}</Text>
    )}
  </View>
);

const TabItem = ({
  label,
  icon,
  filled,
  active,
  onPress,
}: {
  label: string;
  icon: any;
  filled: any;
  active: boolean;
  onPress: () => void;
}) => (
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
/*                               POST CARD UI                                 */
/* -------------------------------------------------------------------------- */

const PostCard = () => (
  <View className="bg-white/5 border border-white/10 rounded-2xl p-5 mt-4 mx-3 shadow-lg shadow-black/40">

    {/* Header */}
    <View className="flex-row items-center mb-4">
      
      {/* Profile with subtle outer glow */}
      <View className="rounded-full p-[2px] bg-gradient-to-r from-[#4FACFE] to-[#00F2FE]">
        <LinearGradient
          colors={['#4FACFE', '#00F2FE']}
          className="w-14 h-14 items-center justify-center rounded-full"
        >
          <Text className="text-white font-bold text-lg">SJ</Text>
        </LinearGradient>
      </View>

      <View className="ml-3 flex-1">
        <View className="flex-row items-center mb-[1px]">
          <Text className="text-white font-semibold text-[15px] mr-2">
            Dr. Sarah Johnson
          </Text>

          {/* Role Badge */}
          <View className="bg-blue-600/25 px-2.5 py-1 rounded-lg">
            <Text className="text-blue-300 text-[10px] font-medium">Mentor</Text>
          </View>
        </View>

        <Text className="text-gray-400 text-[11px]">
          Computer Science • 2 hours ago
        </Text>
      </View>

      <Ionicons name="ellipsis-vertical" size={22} color="#bbb" />
    </View>

    {/* Title */}
    <Text className="text-white font-semibold text-[17px] leading-6 mb-2">
      Excited to announce our new Data Structures workshop! 🚀
    </Text>

    {/* Description */}
    <Text className="text-gray-300 leading-5 text-[13px]">
      Join us this Friday for an interactive session on Advanced Data
      Structures. We’ll cover Trees, Graphs, and Hash Tables with real-world
      applications. Registration link in the description.
    </Text>

    {/* Tag */}
    <View className="bg-purple-500/20 px-3 py-1.5 rounded-lg self-start mt-3">
      <Text className="text-purple-300 text-xs font-medium">Event</Text>
    </View>

    {/* Divider */}
    <View className="h-[1px] bg-white/15 my-4" />

    {/* Footer Actions */}
    <View className="flex-row justify-between px-5">
      <ActionIcon name="heart-outline" count={45} />
      <ActionIcon name="chatbubble-outline" count={12} />
      <ActionIcon name="bookmark-outline" />
    </View>
  </View>
);

/* -------------------------------------------------------------------------- */
/*                               MAIN SCREEN                                   */
/* -------------------------------------------------------------------------- */

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');

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

      {/* Top Header */}
      <BlurView
        intensity={40}
        tint="dark"
        className="p-4 bg-white/10 rounded-b-3xl"
      >
        <Text className="text-white font-bold text-2xl">CampusSync</Text>
      </BlurView>

      {/* Feed Section */}
      <PostCard />

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