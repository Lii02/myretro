import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'rgb(200, 200, 200)',
				tabBarStyle: styles.bar,
				tabBarLabelStyle: styles.text
			}}>
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

const styles = StyleSheet.create({
	bar: {
		height: 100,
		backgroundColor: 'rgb(55, 55, 55)'
	},
	text: {
		fontSize: 12
	}
});
