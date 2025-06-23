import defaultStyles from '@/styles';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<SafeAreaView style={styles.test}>
			<ScrollView>
				<Text style={defaultStyles.header}>Home</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	test: {
		backgroundColor: 'rgb(50, 50, 50)',
		flex: 1
	}
});
