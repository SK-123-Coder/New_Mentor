import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

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
/*                                PROFILE SCREEN                               */
/* -------------------------------------------------------------------------- */
const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [sectionTab, setSectionTab] = useState("Post");

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
          colors={["rgba(0, 90, 255, 0.22)", "transparent"]}
          className="absolute inset-0"
        />
        <LinearGradient
          colors={["rgba(140, 80, 255, 0.2)", "transparent"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0.4, y: 0.4 }}
          className="absolute inset-0"
        />
        <View className="absolute inset-0 bg-black/40" />
      </View>

      <ScrollView className="flex-1 mb-32">
        {/* ---------------------- COVER PHOTO ---------------------- */}
        <View className="w-full h-52 bg-gray-900">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1503264116251-35a269479413",
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* ---------------------- PROFILE PHOTO ---------------------- */}
        <View className="items-center -mt-14">
          <View className="w-32 h-32 rounded-full border-4 border-white shadow-lg shadow-black/50 overflow-hidden">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
              }}
              className="w-full h-full"
            />
          </View>
        </View>

        {/* ---------------------- USER DETAILS ---------------------- */}
        <View className="items-center mt-3 px-4">
          <Text className="text-white text-2xl font-bold">Dave C. Brown</Text>
          <Text className="text-gray-400">@dave_brown</Text>
          <Text className="text-gray-300 text-sm mt-1">
            Google Certified UX/UI Designer
          </Text>
        </View>

        {/* ---------------------- SECTION TABS ---------------------- */}
        <View className="flex-row justify-center mt-6">
          <Pressable onPress={() => setSectionTab("Post")} className="px-5">
            <Text
              className={`text-lg font-semibold ${
                sectionTab === "Post" ? "text-blue-400" : "text-gray-400"
              }`}
            >
              Post
            </Text>
          </Pressable>

          <Pressable onPress={() => setSectionTab("Details")} className="px-5">
            <Text
              className={`text-lg font-semibold ${
                sectionTab === "Details" ? "text-blue-400" : "text-gray-400"
              }`}
            >
              Details
            </Text>
          </Pressable>
        </View>

        {/* ---------------------- TAB CONTENT ---------------------- */}
        {sectionTab === "Post" ? (
          <View className="mt-4 mx-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <Text className="text-white">Posts will appear here…</Text>
          </View>
        ) : (
          <View className="mt-4 mx-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            {/* About Me */}
            <Text className="text-white font-bold text-xl">About me</Text>
            <Text className="text-gray-300 mt-2 leading-5">
              Lorem ipsum dolor sit amet, consectetur elit. Pellentesque sed
              tellus vel velit cursus gravida.
            </Text>

            {/* Work Experience */}
            <Text className="text-white font-bold text-xl mt-6">
              Work Experience
            </Text>
            <Text className="text-gray-300 mt-2">
              UX/UI Designer — 5 Years Experience
            </Text>
          </View>
        )}
      </ScrollView>

      {/* ---------------------- FLOATING TAB BAR ---------------------- */}
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

export default ProfileScreen;