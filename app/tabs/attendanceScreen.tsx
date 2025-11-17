import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

/* -------------------------------------------------------------------------- */
/*                               TAB ITEM                                      */
/* -------------------------------------------------------------------------- */

const TabItem = ({ label, icon, filled, active, onPress }: any) => (
  <View className="items-center">
    <Ionicons
      name={active ? filled : icon}
      size={24}
      color={active ? "#3BA7FF" : "#ccc"}
      onPress={onPress}
    />
    <Text
      className={`mt-1 text-xs ${
        active ? "text-[#3BA7FF]" : "text-gray-300"
      }`}
    >
      {label}
    </Text>
  </View>
);

/* -------------------------------------------------------------------------- */
/*                            PROGRESS CIRCLE UI                               */
/* -------------------------------------------------------------------------- */

const AttendanceRing = ({ percentage }: { percentage: number }) => {
  const strokeDashoffset = 565 - (565 * percentage) / 100;

  return (
    <View className="items-center mt-6">
      <View className="relative w-56 h-56 items-center justify-center">
        {/* Background Ring */}
        <View className="absolute inset-0 rounded-full border-[18px] border-gray-700/40" />

        {/* Progress Ring */}
        <View
          className="absolute inset-0 rounded-full"
          style={{
            borderWidth: 18,
            borderColor: "orange",
            transform: [{ rotate: "-90deg" }],
            borderRadius: 999,
            borderStyle: "solid",
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
            borderLeftColor: "transparent",
          }}
        />

        {/* Text */}
        <View className="absolute items-center">
          <Text className="text-orange-400 text-5xl font-extrabold">
            {percentage}%
          </Text>
          <Text className="text-gray-300 text-sm mt-1">Present</Text>
        </View>
      </View>
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 TABLE ROW                                   */
/* -------------------------------------------------------------------------- */

const AttendanceRow = ({
  course,
  total,
  attended,
}: {
  course: string;
  total: number;
  attended: number;
}) => {
  const percent = Math.round((attended / total) * 100);
  const color =
    percent >= 90 ? "text-green-400" : percent >= 75 ? "text-yellow-400" : "text-red-400";

  return (
    <View className="flex-row justify-between px-4 py-3 border-b border-white/10">
      <Text className="text-white w-[40%]">{course}</Text>
      <Text className="text-gray-300 w-[20%] text-center">{total}</Text>
      <Text className="text-gray-300 w-[20%] text-center">{attended}</Text>
      <Text className={`${color} w-[20%] text-right`}>{percent}%</Text>
    </View>
  );
};

/* -------------------------------------------------------------------------- */
/*                               MAIN SCREEN                                   */
/* -------------------------------------------------------------------------- */

const AttendanceScreen = () => {
  const [activeTab, setActiveTab] = useState("Attendance");

  const tabs = [
    { label: "Home", icon: "home-outline", filled: "home" },
    { label: "Profile", icon: "person-outline", filled: "person" },
    { label: "Academic", icon: "school-outline", filled: "school" },
    { label: "Attendance", icon: "calendar-outline", filled: "calendar" },
    { label: "Notifications", icon: "notifications-outline", filled: "notifications" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />

      {/* 🌌 Background */}
      <View className="absolute inset-0 bg-[#000510]">
        <LinearGradient
          colors={["#000814", "#000b1a", "#020d24", "#040f2e"]}
          className="absolute inset-0 opacity-90"
        />

        <LinearGradient
          colors={["rgba(0, 90, 255, 0.18)", "transparent"]}
          start={{ x: 0.3, y: 0.3 }}
          end={{ x: 0.7, y: 0.7 }}
          className="absolute w-full h-full"
        />

        <LinearGradient
          colors={["rgba(120, 90, 255, 0.22)", "transparent"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.4, y: 0.4 }}
          className="absolute w-full h-full"
        />

        <View className="absolute inset-0 bg-black/40" />
      </View>

      {/* Header */}
      <BlurView intensity={40} tint="dark" className="p-4 bg-white/10 rounded-b-3xl">
        <Text className="text-white font-bold text-2xl">CampusSync</Text>
      </BlurView>

      {/* Back + Title */}
      <View className="flex-row items-center px-4 mt-4">
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text className="text-white ml-2">Back to Profile</Text>
        <Text className="text-white font-bold text-2xl flex-1 text-right">
          Attendance
        </Text>
      </View>

      <ScrollView className="mt-6 mb-32">

        {/* Attendance Circle */}
        <AttendanceRing percentage={86} />

        {/* Table */}
        <View className="bg-white/5 border border-white/10 rounded-2xl p-3 mx-4 mt-8 mb-5">
          <View className="flex-row justify-between px-4 py-2 mb-1">
            <Text className="text-white w-[40%] font-semibold">Course</Text>
            <Text className="text-white w-[20%] text-center font-semibold">
              Total
            </Text>
            <Text className="text-white w-[20%] text-center font-semibold">
              Attended
            </Text>
            <Text className="text-white w-[20%] text-right font-semibold">
              %
            </Text>
          </View>

          <AttendanceRow course="Data Structures" total={40} attended={38} />
          <AttendanceRow course="Algorithms" total={35} attended={32} />
          <AttendanceRow course="Database Systems" total={42} attended={40} />
          <AttendanceRow course="Computer Networks" total={38} attended={30} />
          <AttendanceRow course="Operating Systems" total={36} attended={24} />
        </View>
      </ScrollView>

      {/* Floating Bottom Tab Bar */}
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

export default AttendanceScreen;