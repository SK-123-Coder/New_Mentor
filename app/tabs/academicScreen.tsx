import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

/* -------------------------------------------------------------------------- */
/*                                GRADE BADGE                                  */
/* -------------------------------------------------------------------------- */
const GradeBadge = ({ grade }: { grade: string }) => (
  <View className="bg-blue-900/40 px-3 py-1 rounded-full">
    <Text className="text-blue-300 font-semibold">{grade}</Text>
  </View>
);

/* -------------------------------------------------------------------------- */
/*                                TABLE ROW                                    */
/* -------------------------------------------------------------------------- */
const AcademicRow = ({
  course,
  semester,
  grade,
  gpa,
}: {
  course: string;
  semester: string;
  grade: string;
  gpa: number;
}) => (
  <View className="flex-row items-center justify-between px-4 py-3 border-b border-white/10">
    <Text className="text-white w-[38%]">{course}</Text>
    <Text className="text-gray-300 w-[22%]">{semester}</Text>

    <View className="w-[18%] items-center">
      <GradeBadge grade={grade} />
    </View>

    <Text className="text-white w-[15%] text-right">{gpa}</Text>
  </View>
);

/* -------------------------------------------------------------------------- */
/*                                   TAB BAR                                   */
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
/*                             MAIN UI COMPONENT                               */
/* -------------------------------------------------------------------------- */
const AcademicPerformanceScreen = () => {
  const [activeTab, setActiveTab] = useState("Academic");

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />

      {/* 🔵 Premium Dark Background */}
      <View className="absolute inset-0 bg-[#000510]">
        <LinearGradient
          colors={["#000814", "#000b1a", "#020d24", "#040f2e"]}
          className="absolute inset-0 opacity-90"
        />
        <LinearGradient
          colors={["rgba(0, 90, 255, 0.2)", "transparent"]}
          start={{ x: 0.3, y: 0.3 }}
          end={{ x: 0.7, y: 0.7 }}
          className="absolute inset-0"
        />
        <LinearGradient
          colors={["rgba(150, 80, 255, 0.22)", "transparent"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.4, y: 0.4 }}
          className="absolute inset-0"
        />
        <View className="absolute inset-0 bg-black/40" />
      </View>

      {/* Header */}
      <BlurView intensity={40} tint="dark" className="p-4 bg-white/10 rounded-b-3xl">
        <Text className="text-white font-bold text-2xl">CampusSync</Text>
      </BlurView>

      {/* Back Row */}
      <View className="flex-row items-center px-4 mt-4">
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text className="text-white ml-2">Back to Profile</Text>
      </View>

      {/* Title */}
      <Text className="text-white text-3xl font-extrabold px-4 mt-2">
        Academic{"\n"}Performance
      </Text>

      <ScrollView className="mt-6 mb-32">

        {/* GPA CARD */}
        <View className="mx-4 p-6 rounded-3xl bg-white/5 border border-white/10 shadow-lg shadow-black/40 mt-4">
          <Text className="text-gray-300 text-center mb-2">Overall GPA</Text>
          <Text className="text-blue-400 text-center text-6xl font-extrabold">3.70</Text>
        </View>

        {/* Table */}
        <View className="bg-white/5 border border-white/10 rounded-2xl mt-8 mx-4 p-3">

          {/* Table Header */}
          <View className="flex-row justify-between px-4 py-2 mb-2">
            <Text className="text-white w-[38%] font-semibold">Course</Text>
            <Text className="text-white w-[22%] font-semibold">Semester</Text>
            <Text className="text-white w-[18%] font-semibold text-center">
              Grade
            </Text>
            <Text className="text-white w-[15%] font-semibold text-right">GPA</Text>
          </View>

          {/* Rows */}
          <AcademicRow course="Data Structures" semester="Fall 2024" grade="A" gpa={3.8} />
          <AcademicRow course="Algorithms" semester="Fall 2024" grade="A-" gpa={3.5} />
          <AcademicRow course="Database Systems" semester="Fall 2024" grade="A" gpa={3.9} />
          <AcademicRow course="Computer Networks" semester="Fall 2024" grade="A-" gpa={3.6} />
          <AcademicRow course="Operating Systems" semester="Spring 2024" grade="A-" gpa={3.7} />

        </View>
      </ScrollView>

      {/* FLOATING BOTTOM TAB BAR */}
      <View className="absolute bottom-6 left-0 right-0 items-center">
        <BlurView
          intensity={50}
          tint="dark"
          className="w-[95%] h-20 bg-white/10 border border-white/15 rounded-3xl flex-row justify-around items-center"
        >
          {[
            { label: "Home", icon: "home-outline", filled: "home" },
            { label: "Profile", icon: "person-outline", filled: "person" },
            { label: "Academic", icon: "school-outline", filled: "school" },
            { label: "Attendance", icon: "calendar-outline", filled: "calendar" },
            { label: "Notifications", icon: "notifications-outline", filled: "notifications" },
          ].map((tab, index) => (
            <TabItem
              key={index}
              {...tab}
              active={tab.label === activeTab}
              onPress={() => setActiveTab(tab.label)}
            />
          ))}
        </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default AcademicPerformanceScreen;