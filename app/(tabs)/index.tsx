import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
	return (
		<View style={styles.test}>
			<Text>Home</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	test: {
		backgroundColor: 'rgb(50, 50, 50)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
