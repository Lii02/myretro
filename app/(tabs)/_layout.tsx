import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='house-user' size={24} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='library'
				options={{
					title: 'Library',
					tabBarIcon: ({ color }) => (
						<Ionicons name='library' size={24} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => (
						<Entypo name='game-controller' size={24} color={color} />
					)
				}}
			/>
		</Tabs>
	);
}
